import { LetterStatus } from "../../../types";

export const getLetterStatus = (char: string, index: number, typedChars: string[]): LetterStatus => {
	if (index < typedChars.length) {
		return typedChars[index] === char ? 'correct' : 'incorrect';
	}

	return 'untyped';
};