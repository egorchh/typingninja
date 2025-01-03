import { memo, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { setStatistics } from '~entities/statistics';
import { selectTimeInMilliseconds, Timer } from '~entities/timer';
import { Spacer } from '~shared/components';
import { AppRoutes } from '~shared/constants/routes';
import { useAppDispatch, useAppSelector } from '~shared/hooks';
import { calculateTypingStatistics } from '~shared/utils';
import { Word } from './components';
import { useKeyboardInput, useTimer } from './hooks';
import { splitTextIntoWords, calculateWordStarts, getWordParams } from './utils';
import styles from './styles.module.css';

type Props = {
	text: string;
}

const Container = memo(({ text, typedChars, caretPosition }: { text: string; typedChars: string[], caretPosition: number }) => {
	const { words, wordStarts } = useMemo(() => {
		const words = splitTextIntoWords(text);
		const wordStarts = calculateWordStarts(words);
		return { words, wordStarts };
	}, [text]);

	return (
		<div className={styles.text}>
			{words.map((word, index) => {
				const { wordTypedChars, wordCaretPosition } = getWordParams(
					wordStarts[index],
					word.length,
					typedChars,
					caretPosition
				);

				return (
					<Word
						key={`${word}-${index}`}
						word={word}
						typedChars={wordTypedChars}
						caretPosition={wordCaretPosition}
					/>
				);
			})}
		</div>
	);
});

Container.displayName = 'Container';

export const SandboxTyping = ({ text }: Props) => {
	const timeInMilliseconds = useAppSelector(selectTimeInMilliseconds);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { caretPosition, typedChars, isAnyButtonWasPressed } = useKeyboardInput();

	const statistics = useMemo(() => {
		return calculateTypingStatistics(typedChars, text);
	}, [typedChars, text]);

	const handleTimerExpired = useCallback(() => {
		navigate(AppRoutes.StatisticsPage);
		dispatch(setStatistics(statistics));
	}, [navigate, statistics, dispatch]);

	const { time } = useTimer({
		isAnyButtonWasPressed,
		defaultTime: timeInMilliseconds,
		onTimerExpiredCallback: handleTimerExpired
	});

	return (
		<Spacer className={styles.textContainer}>
			<Timer time={time} position='top' />
			<Container text={text} typedChars={typedChars} caretPosition={caretPosition} />
		</Spacer>
	);
};