import { forwardRef } from 'react';
import cn from 'classnames';
import styles from './styles.module.css';

type Props = {
	time: number;
	position?: 'top' | 'left';
};

export const Timer = forwardRef(({ time, position = 'left' }: Props, ref) => {
	return (
		<div className={cn(styles.root, styles[position])}>
			{ref.current}
		</div>
	);
});

Timer.displayName = 'Timer';