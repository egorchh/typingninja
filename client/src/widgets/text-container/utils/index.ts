export const splitTextIntoWords = (text: string) => {
	return text.match(/\S+|\s+/g) || [];
};

export const splitWordsIntoSymbols = (word: string) => {
	return word.split('');
};

export const calculateWordStarts = (words: string[]) => {
	const wordStarts: number[] = [];
	let currentPosition = 0;

	words.forEach((word, index) => {
		wordStarts[index] = currentPosition;
		currentPosition += word.length;
	});

	return wordStarts;
};

export const getWordParams = (
	wordStart: number,
	wordLength: number,
	typedChars: string[],
	caretPosition: number
) => {
	return {
		wordTypedChars: typedChars.slice(wordStart, wordStart + wordLength),
		wordCaretPosition: caretPosition >= wordStart && caretPosition < wordStart + wordLength
			? caretPosition - wordStart
			: -1
	};
};