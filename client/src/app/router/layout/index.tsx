import { Outlet } from "react-router-dom";
import { Footer } from "~widgets/footer";
import { Header } from "~widgets/header";
import styles from './styles.module.css';

export const Layout = () => {
	return (
		<div className={styles.root}>
			<Header />
			<div className={styles.content}>
				<Outlet />
			</div>
			<Footer />
		</div>
	)
}