import { memo, useCallback, useMemo } from 'react';
import { Spacer } from '~shared/components';
import { Stats, Timer, Word } from './components';
import { useKeyboardInput, useTimer } from './hooks';
import { splitTextIntoWords, calculateWordStarts, getWordParams, calculateTypingStatistic } from './utils';
import styles from './styles.module.css';

type Props = {
	text: string;
}

const TIMER_TIME = 30000;

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

export const TextContainer = ({ text }: Props) => {
	const { caretPosition, typedChars, isAnyButtonWasPressed } = useKeyboardInput();

	const stats = useMemo(() => {
		return calculateTypingStatistic(typedChars, text);
	}, [typedChars, text]);

	const handleTimerExpired = useCallback(() => {
		console.log('Typing stats:', stats);
	}, [stats]);

	const { time } = useTimer({
		isAnyButtonWasPressed,
		defaultTime: TIMER_TIME,
		onTimerExpiredCallback: handleTimerExpired
	});

	return (
		<Spacer className={styles.root} direction='column' gap='16'>
			<Stats {...stats} />
			<Timer time={time} position='top' />
			<Container text={text} typedChars={typedChars} caretPosition={caretPosition} />
		</Spacer>
	);
};