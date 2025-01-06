import { SandboxTyping } from '~widgets/sandbox-typing';
import { SandboxSettings } from '~features/sandbox-settings';
import { Spacer } from '~shared/ui';
import { mockText } from '../../mocks/text';
import styles from './styles.module.css';

const SandboxPage = () => {
	return (
		<Spacer className={styles.root} direction='column' fullHeight justify='center'>
			<Spacer direction='column' fullHeight fullWidth justify='start'>
				<SandboxSettings />
			</Spacer>
			<SandboxTyping text={mockText} />
			<Spacer direction='column' fullHeight fullWidth justify='end'>
				Что-то сюда добавить
			</Spacer>
		</Spacer>
	);
};

export default SandboxPage;