import { Link } from 'react-router-dom';
import { AppRoutes } from '~shared/constants/routes';
import styles from './styles.module.css';

export const Header = () => {
	return (
		<header className={styles.root}>
			<Link to={AppRoutes.SandboxPage}>
				TypingNinja
			</Link>
		</header>
	);
};