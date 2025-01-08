import { memo } from 'react';
import cn from 'classnames';
import { LetterStatus } from '../../types';
import styles from './styles.module.css';

type Props = {
	letter: string;
	status: LetterStatus;
	showCaret?: boolean;
}

export const Letter = memo(({ letter, status = 'untyped', showCaret = false }: Props) => {
	return (
		<span
			aria-label={`Letter ${letter} is ${status}`}
			className={cn(styles.letter, styles[status], {
				[styles.withCaret]: showCaret
			})}>
			{letter}
		</span>
	);
});

Letter.displayName = 'Letter';