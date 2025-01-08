import { memo } from 'react';
import { splitWordsIntoSymbols } from '../../../utils';
import { Letter } from '../../letter';
import { getLetterStatus } from '../utils/get-letter-status';
import styles from './styles.module.css';

type Props = {
	word: string;
	typedChars: string[];
	caretPosition: number;
}

export const Word = memo(({ word, typedChars, caretPosition }: Props) => {
	const letters = splitWordsIntoSymbols(word);

	return (
		<div className={styles.word}>
			{letters.map((char, index) => (
				<Letter
					key={`${char}-${index}`}
					status={getLetterStatus(char, index, typedChars)}
					letter={char}
					showCaret={index === caretPosition}
				/>
			))}
		</div>
	);
});

Word.displayName = 'Word';