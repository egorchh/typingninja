import { useState, useEffect, useMemo } from 'react';

export const useKeyboardInput = () => {
	const [caretPosition, setCaretPosition] = useState<number>(0);
	const [typedChars, setTypedChars] = useState<string[]>([]);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.ctrlKey || event.altKey || event.metaKey) {
				return;
			}

			if (event.key.length === 1) {
				setTypedChars(prev => [...prev, event.key])
				setCaretPosition(prev => prev + 1)
			}

			if (event.key === 'Backspace' && caretPosition > 0) {
				setTypedChars(prev => prev.slice(0, -1))
				setCaretPosition(prev => prev - 1)
			}
		}

		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [caretPosition]);

	return useMemo(() => ({
		caretPosition,
		typedChars,
	}), [caretPosition, typedChars]);
}; 