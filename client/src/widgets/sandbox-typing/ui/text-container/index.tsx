import { forwardRef, memo, useEffect, useMemo } from "react";
import { Spacer } from "~shared/ui";
import {
	calculateWordStarts,
	getWordParams,
	splitTextIntoWords
} from "../../utils";
import { Word } from "../word/ui";
import styles from './styles.module.css';

type Props = {
	text: string;
	typedChars: string[];
	caretPosition: number;
	onFocus: VoidFunction;
	onBlur: VoidFunction;
};

export const TextContainer = memo(
	forwardRef<HTMLDivElement, Props>(({ text, typedChars, caretPosition, onFocus, onBlur }, ref) => {
		const { words, wordStarts } = useMemo(() => {
			const words = splitTextIntoWords(text);
			const wordStarts = calculateWordStarts(words);
			return { words, wordStarts };
		}, [text]);

		useEffect(() => {
			if (ref && typeof ref !== 'function' && ref.current) {
				ref.current.focus();
			}
		}, [ref]);

		return (
			<Spacer
				ref={ref}
				className={styles.root}
				wrap="wrap"
				tabIndex={0}
				onBlur={onBlur}
				onFocus={onFocus}>
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
			</Spacer>
		);
	})
);

TextContainer.displayName = 'TextContainer';
