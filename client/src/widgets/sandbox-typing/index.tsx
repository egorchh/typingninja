import { useCallback, useRef, useState } from 'react';
import classNames from 'classnames';
import { selectSandboxSettingsMode } from '~features/sandbox-settings';
import { SandboxSettingsMode } from '~features/sandbox-settings/types';
import { useAppSelector } from '~shared/hooks';
import { TEXT_CONTAINER_BLUR_TIMEOUT } from './constants';
import { TimeModeLayout, WordsModeLayout } from './modes';
import { BlurSlug } from './ui';
import styles from './styles.module.css';

type Props = {
	text: string;
}

export const SandboxTyping = ({ text }: Props) => {
	const textContainerRef = useRef<HTMLDivElement | null>(null);
	const blurTimeoutRef = useRef<NodeJS.Timeout | null>(null);
	const [isTextContainerBlur, setIsTextContainerBlur] = useState(false);
	const settingsMode = useAppSelector(selectSandboxSettingsMode);

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

	return (
		<div className={classNames(styles.root, { [styles.rootBlur]: isTextContainerBlur })}>
			{isTextContainerBlur && (
				<BlurSlug />
			)}
			{settingsMode === SandboxSettingsMode.Time ? (
				<TimeModeLayout
					text={text}
					isTextContainerBlur={isTextContainerBlur}
					onTextContainerFocus={handleTextContainerFocus}
					onTextContainerBlur={handleTextContainerBlur} />
			) : (
				<WordsModeLayout
					text={text}
					isTextContainerBlur={isTextContainerBlur}
					onTextContainerFocus={handleTextContainerFocus}
					onTextContainerBlur={handleTextContainerBlur} />
			)}
		</div>
	);
};