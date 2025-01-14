import { useState, useEffect, useMemo, useRef } from 'react';

type Props = {
	isTextContainerBlur: boolean,
	onTextContainerFocus: VoidFunction;
};

export const useKeyboardInput = ({ 
	isTextContainerBlur, 
	onTextContainerFocus
}: Props) => {
	const isAnyButtonWasPressed = useRef(false);
	const [caretPosition, setCaretPosition] = useState<number>(0);
	const [typedChars, setTypedChars] = useState<string[]>([]);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (isTextContainerBlur) {
				onTextContainerFocus();
				return;
			}

			if (event.ctrlKey || event.altKey || event.metaKey) {
				return;
			}

			if (event.key.length === 1) {
				if (!isAnyButtonWasPressed.current) {
					isAnyButtonWasPressed.current = true;
				}
				
				setTypedChars(prev => [...prev, event.key]);
				setCaretPosition(prev => prev + 1);
			}

			if (event.key === 'Backspace' && caretPosition > 0) {
				setTypedChars(prev => prev.slice(0, -1));
				setCaretPosition(prev => prev - 1);
			}
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [caretPosition, isTextContainerBlur, onTextContainerFocus]);

	return useMemo(() => ({
		caretPosition,
		typedChars,
		isAnyButtonWasPressed: isAnyButtonWasPressed.current
	}), [caretPosition, typedChars]);
}; 