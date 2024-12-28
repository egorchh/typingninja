import styles from './styles.module.css';

type Props = {
	totalTyped: number;
	correctChars: number;
	incorrectChars: number;
	accuracy: number;
}

export const Statistics = ({ totalTyped, correctChars, incorrectChars, accuracy }: Props) => {
	return (
		<div className={styles.root}>
			<div>Всего символов: {totalTyped}</div>
			<div>Правильно: {correctChars}</div>
			<div>Ошибок: {incorrectChars}</div>
			<div>Точность: {accuracy}%</div>
		</div>
	);
}; 