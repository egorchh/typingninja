const AVERAGE_LETTERS_AMOUNT_IN_ONE_WORD = 5;

export const calculateWPM = ({ milliseconds, charactersAmount }: { milliseconds: number; charactersAmount: number; }) => {
	const minutes = milliseconds / 1000;
	return charactersAmount / (minutes * AVERAGE_LETTERS_AMOUNT_IN_ONE_WORD);
};