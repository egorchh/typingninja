import cn from 'classnames';
import styles from './styles.module.css';

type Props = {
	time: number;
	position?: 'top' | 'left';
};

export const Timer = ({ time, position = 'left' }: Props) => {
	return (
		<div className={cn(styles.root, styles[position])}>
			{time}
		</div>
	);
};