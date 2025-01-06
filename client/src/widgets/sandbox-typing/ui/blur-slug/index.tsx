import { Spacer } from '~shared/ui';
import CupIcon from '../../assets/cup.svg?react';
import styles from './styles.module.css';

export const BlurSlug = () => {
	return (
		<Spacer className={styles.root} gap='12' align='center'>
			<CupIcon width={25} height={25} />
			<p className={styles.description}>Ready? Click here or press any key to continue</p>
		</Spacer>
	);
};