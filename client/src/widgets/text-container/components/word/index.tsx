import { memo } from 'react';
import { LetterStatus } from '../../types';
import { splitWordsIntoSymbols } from '../../utils';
import { Letter } from '../letter';
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
			{letters.map((char, index) => {
				let status: LetterStatus = 'untyped';

				if (index < typedChars.length) {
					status = typedChars[index] === char ? 'correct' : 'incorrect';
				}

				return (
					<Letter
						key={`${char}-${index}`}
						status={status}
						letter={char}
						showCaret={index === caretPosition}
					/>
				);
			})}
		</div>
	);
});

Word.displayName = 'Word';