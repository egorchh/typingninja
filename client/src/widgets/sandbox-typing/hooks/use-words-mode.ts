type Props = {
	defaultWordsAmount: number | string;
	typedChars: string[];
	elapsedTime: number;
};

export const useWordsMode = ({ typedChars }: Props) => {
	// TODO: требования к алгоритму:

	// 1. Считаем слово только после его завершения
	// 2. При удалении символов уменьшаем кол-во введенных слов
	// 3. Пробел словом не считается
	// 4. Засчитываем слова только введенные полностью правильно

	const calculateTypedWordsAmount = (chars: string[]) => {
		let wordCount = 0;
		let inWord = false;

		for (let i = 0; i < chars.length; i++) {
			const prevChar = chars[i - 1];

			if (prevChar === ' ') {
				if (inWord) {
					wordCount++;
					inWord = false;
				}
			} else {
				inWord = true;
			}
		}

		if (inWord) {
			wordCount++;
		}

		return wordCount;
	};

	console.log(calculateTypedWordsAmount(typedChars));
};