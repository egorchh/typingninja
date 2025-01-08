import classNames from "classnames";
import { TimeValueType } from "~entities/mode-counter";
import { useAppDispatch } from "~shared/hooks";
import EditIcon from '../../assets/edit-icon.svg?react';
import { setSandboxSettingsValue } from "../../model";
import { WordsValueType } from "../../types";
import styles from "./styles.module.css";

type Props = {
	value: TimeValueType | WordsValueType;
	active: boolean;
};

const CUSTOM_VALUE = 'custom';

export const SettingsModeValue = ({ value, active }: Props) => {
	const dispatch = useAppDispatch();

	const handleSetTimerMode = () => {
		dispatch(setSandboxSettingsValue(value));
	};

	const isCustomValue = value === CUSTOM_VALUE;

	return (
		<span
			className={classNames(styles.root, { [styles.active]: active })}
			onClick={handleSetTimerMode}>
			{isCustomValue ? (
				<EditIcon className={classNames(styles.customIcon, { [styles.activeIcon]: active })} height={19} width={19} />
			) : value}
		</span>
	);
};