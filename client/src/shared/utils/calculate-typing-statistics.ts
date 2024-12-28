export const calculateTypingStatistics = (typedChars: string[], text: string) => {
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