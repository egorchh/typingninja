import cn from 'classnames';
import styles from './styles.module.css';

type Props = {
	value: number | string;
	position?: 'top' | 'left';
};

export const ModeCounter = ({ value, position = 'left' }: Props) => {
	return (
		<div className={cn(styles.root, styles[position])}>
			{value}
		</div>
	);
};