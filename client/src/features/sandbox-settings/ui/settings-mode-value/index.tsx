import classNames from "classnames";
import { TimeValueType } from "~entities/timer";
import { useAppDispatch } from "~shared/hooks";
import { setSandboxSettingsValue } from "../../model";
import { WordsValueType } from "../../types";
import styles from "./styles.module.css";

type Props = {
	value: TimeValueType | WordsValueType;
	active: boolean;
};

export const SettingsModeValue = ({ value, active }: Props) => {
	const dispatch = useAppDispatch();

	const handleSetTimerMode = () => {
		dispatch(setSandboxSettingsValue(value));
	};

	return (
		<span
			className={classNames(styles.root, { [styles.active]: active })}
			onClick={handleSetTimerMode}>
			{value}
		</span>
	);
};