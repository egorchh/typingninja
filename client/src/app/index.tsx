import './styles/index.css'
import { Header } from '~widgets/header'
import { Footer } from '~widgets/footer'
import { KeyboardPage } from '~pages/keyboard-page'
import styles from './styles.module.css'

function App() {
	return (
		<div className={styles.root}>
			<Header />
			<KeyboardPage />
			<Footer />
		</div>
	)
}

export default App
