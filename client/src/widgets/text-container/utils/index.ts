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

export const calculateTypingStatistic = (typedChars: string[], text: string) => {
	const totalTyped = typedChars.length;
	const correctChars = typedChars.reduce((acc, char, index) => {
		return acc + (char === text[index] ? 1 : 0);
	}, 0);
	const incorrectChars = totalTyped - correctChars;
	const accuracy = totalTyped > 0 ? Math.round((correctChars / totalTyped) * 100) : 0;
	
	return {
		totalTyped,
		correctChars,
		incorrectChars,
		accuracy
	};
};