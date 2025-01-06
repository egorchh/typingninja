import { useCallback, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { selectSandboxSettingsTimeInMilliseconds } from '~features/sandbox-settings';
import { setStatistics } from '~entities/statistics';
import { Timer } from '~entities/timer';
import { AppRoutes } from '~shared/constants/routes';
import { useAppDispatch, useAppSelector } from '~shared/hooks';
import { Spacer } from '~shared/ui';
import { calculateTypingStatistics } from '~shared/utils';
import { TEXT_CONTAINER_BLUR_TIMEOUT } from './constants';
import { useKeyboardInput, useTimer } from './hooks';
import { BlurSlug, TextContainer } from './ui';
import styles from './styles.module.css';

type Props = {
	text: string;
}

export const SandboxTyping = ({ text }: Props) => {
	const textContainerRef = useRef<HTMLDivElement | null>(null);
	const blurTimeoutRef = useRef<NodeJS.Timeout | null>(null);
	const [isTextContainerBlur, setIsTextContainerBlur] = useState(false);
	const timeInMilliseconds = useAppSelector(selectSandboxSettingsTimeInMilliseconds);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleTextContainerBlur = useCallback(() => {
		blurTimeoutRef.current = setTimeout(() => {
			textContainerRef.current?.blur();
			setIsTextContainerBlur(true);
		}, TEXT_CONTAINER_BLUR_TIMEOUT);
	}, []);

	const handleTextContainerFocus = useCallback(() => {
		if (blurTimeoutRef.current) {
			clearTimeout(blurTimeoutRef.current);
		}
		textContainerRef.current?.focus();
		setIsTextContainerBlur(false);
	}, []);

	const { caretPosition, typedChars, isAnyButtonWasPressed } = useKeyboardInput({
		isTextContainerBlur,
		onTextContainerFocus: handleTextContainerFocus
	});

	const statistics = useMemo(() => {
		return calculateTypingStatistics(typedChars, text);
	}, [typedChars, text]);

	const handleTimerExpired = useCallback(() => {
		dispatch(setStatistics(statistics));
		navigate(AppRoutes.StatisticsPage);
	}, [navigate, statistics, dispatch]);

	const timeInSeconds = useTimer({
		isTextContainerBlur,
		isAnyButtonWasPressed,
		defaultTime: timeInMilliseconds,
		onTimerExpiredCallback: handleTimerExpired
	});

	return (
		<div className={classNames(styles.root, { [styles.rootBlur]: isTextContainerBlur })}>
			{isTextContainerBlur && (
				<BlurSlug />
			)}
			<Spacer className={classNames({ [styles.contentBlur]: isTextContainerBlur })}>
				{!isTextContainerBlur && (
					<Timer time={timeInSeconds} position='top' />
				)}
				<TextContainer
					ref={textContainerRef}
					text={text}
					typedChars={typedChars}
					caretPosition={caretPosition}
					onFocus={handleTextContainerFocus}
					onBlur={handleTextContainerBlur}
				/>
			</Spacer>
		</div>
	);
};