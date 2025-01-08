import { forwardRef, memo, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { selectSandboxSettingsTimeInMilliseconds } from "~features/sandbox-settings";
import { ModeCounter } from "~entities/mode-counter";
import { setStatistics } from "~entities/statistics";
import { AppRoutes } from "~shared/constants";
import { useAppDispatch, useAppSelector } from "~shared/hooks";
import { Spacer } from "~shared/ui";
import { calculateTypingStatistics } from "~shared/utils";
import { useKeyboardInput, useTimeMode } from "../../../hooks";
import { TextContainer } from "../../../ui";
import styles from './styles.module.css';

type Props = {
	text: string;
	isTextContainerBlur: boolean;
	onTextContainerFocus: VoidFunction;
	onTextContainerBlur: VoidFunction;
}

export const TimeModeLayout = memo(
	forwardRef<HTMLDivElement, Props>(({
		text,
		isTextContainerBlur,
		onTextContainerFocus,
		onTextContainerBlur
	}: Props, ref) => {
		const navigate = useNavigate();
		const dispatch = useAppDispatch();
		const timeInMilliseconds = useAppSelector(selectSandboxSettingsTimeInMilliseconds);

		const { caretPosition, typedChars, isAnyButtonWasPressed } = useKeyboardInput({
			isTextContainerBlur,
			onTextContainerFocus: onTextContainerFocus
		});

		// TODO: Статистика должна учитывать время
		const statistics = useMemo(() => {
			return calculateTypingStatistics(typedChars, text);
		}, [typedChars, text]);

		const handleTimerExpired = useCallback(() => {
			dispatch(setStatistics(statistics));
			navigate(AppRoutes.StatisticsPage);
		}, [navigate, statistics, dispatch]);

		const timeInSeconds = useTimeMode({
			isTextContainerBlur,
			isAnyButtonWasPressed,
			defaultTime: timeInMilliseconds,
			onTimerExpiredCallback: handleTimerExpired
		});

		return (
			<Spacer className={classNames({ [styles.contentBlur]: isTextContainerBlur })}>
				{!isTextContainerBlur && (
					<ModeCounter value={timeInSeconds} position='top' />
				)}
				<TextContainer
					ref={ref}
					text={text}
					typedChars={typedChars}
					caretPosition={caretPosition}
					onFocus={onTextContainerFocus}
					onBlur={onTextContainerBlur}
				/>
			</Spacer>
		);
	})
);

TimeModeLayout.displayName = 'TimeModeLayout';