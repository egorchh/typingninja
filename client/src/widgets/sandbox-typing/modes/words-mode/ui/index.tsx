import { forwardRef, memo } from "react";
import classNames from "classnames";
import { selectSandboxSettingsWordsAmount } from "~features/sandbox-settings";
import { ModeCounter } from "~entities/mode-counter";
import { useAppSelector } from "~shared/hooks";
import { Spacer } from "~shared/ui";
import { useKeyboardInput, useTimer, useWordsMode } from "../../../hooks";
import { TextContainer } from "../../../ui";
import styles from './styles.module.css';

type Props = {
	text: string;
	isTextContainerBlur: boolean;
	onTextContainerFocus: VoidFunction;
	onTextContainerBlur: VoidFunction;
}

export const WordsModeLayout = memo(
	forwardRef<HTMLDivElement, Props>(({
		text,
		isTextContainerBlur,
		onTextContainerFocus,
		onTextContainerBlur
	}: Props, ref) => {
		const wordsAmount = useAppSelector(selectSandboxSettingsWordsAmount);

		const { caretPosition, typedChars, isAnyButtonWasPressed } = useKeyboardInput({
			isTextContainerBlur,
			onTextContainerFocus: onTextContainerFocus
		});

		const elapsedTime = useTimer({
			start: isAnyButtonWasPressed,
			end: false
		});

		useWordsMode({ defaultWordsAmount: wordsAmount, typedChars, elapsedTime });

		return (
			<Spacer className={classNames({ [styles.contentBlur]: isTextContainerBlur })}>
				{!isTextContainerBlur && (
					// TODO: Заменить value
					<ModeCounter value={wordsAmount} position='top' />
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

WordsModeLayout.displayName = 'WordsModeLayout';