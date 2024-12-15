import { useMemo } from 'react';
import { Word } from './components';
import { splitTextIntoWords, calculateWordStarts, getWordParams } from './utils';
import { useKeyboardInput } from './hooks/useKeyboardInput';
import styles from './styles.module.css';

type Props = {
	text: string;
}

export const TextContainer = ({ text }: Props) => {
	const { caretPosition, typedChars } = useKeyboardInput();

	const { words, wordStarts } = useMemo(() => {
		const words = splitTextIntoWords(text);
		const wordStarts = calculateWordStarts(words);
		return { words, wordStarts };
	}, [text]);

	return (
		<div className={styles.root}>
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
};