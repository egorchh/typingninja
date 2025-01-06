import classNames from "classnames";
import { useAppDispatch } from "~shared/hooks";
import { setSandboxSettingsMode } from "../../model";
import { SandboxSettingsModeType } from "../../types";
import styles from "./styles.module.css";

type Props = {
	mode: SandboxSettingsModeType;
	active: boolean;
};

export const SettingsMode = ({ mode, active }: Props) => {
	const dispatch = useAppDispatch();

	const handleSetSandboxSettingsMode = () => {
		dispatch(setSandboxSettingsMode(mode));
	};

	return (
		<span
			className={classNames(styles.root, { [styles.active]: active })}
			onClick={handleSetSandboxSettingsMode}>
			{mode}
		</span>
	);
};