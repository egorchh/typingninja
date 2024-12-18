import { useMemo, useRef } from 'react';
import { Spacer } from '~shared/components';
import { Timer, Word } from './components';
import { useKeyboardInput } from './hooks/useKeyboardInput';
import { splitTextIntoWords, calculateWordStarts, getWordParams } from './utils';
import styles from './styles.module.css';

type Props = {
	text: string;
}

export const TextContainer = ({ text }: Props) => {
	const timerRef = useRef<NodeJS.Timeout | null>(null);
	const { caretPosition, typedChars } = useKeyboardInput(timerRef);

	const { words, wordStarts } = useMemo(() => {
		const words = splitTextIntoWords(text);
		const wordStarts = calculateWordStarts(words);
		return { words, wordStarts };
	}, [text]);

	return (
		<Spacer className={styles.root} direction='column' gap='16'>
			<Timer ref={timerRef} time={30} position='top' />
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
		</Spacer>
	);
};