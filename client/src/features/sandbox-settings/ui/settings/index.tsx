import { timerModes } from '../../constants';
import { TimerMode } from '../timer-mode';
import styles from './styles.module.css';

export const SandboxSettings = () => {
	return (
		<div className={styles.root}>
			timer: {timerModes.map(mode => (
				<>
					<TimerMode key={mode} mode={mode} />
					{' '}|{' '}
				</>
			))}
		</div>
	);
};