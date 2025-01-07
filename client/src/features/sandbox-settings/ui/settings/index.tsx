import { SandboxSettingsMode } from '~features/sandbox-settings/types';
import { useAppSelector } from '~shared/hooks';
import { Spacer } from '~shared/ui';
import { sandboxSettingsModes } from '../../constants';
import { selectSandboxSettings } from '../../model';
import { getSettingsModeValues } from '../../utils/get-settings-mode-values';
import { SettingsMode } from '../settings-mode';
import { SettingsModeValue } from '../settings-mode-value';
import styles from './styles.module.css';

export const SandboxSettings = () => {
	const { mode: activeSandboxSettingsMode, value: activeSandboxSettingsValue } = useAppSelector(selectSandboxSettings);

	const isActiveModeHasValues =
		activeSandboxSettingsMode === SandboxSettingsMode.Time ||
		activeSandboxSettingsMode === SandboxSettingsMode.Words;

	return (
		<Spacer className={styles.root} gap='16' justify='center'>
			<Spacer gap='8'>
				{sandboxSettingsModes.map(mode => {
					const active = mode === activeSandboxSettingsMode;

					return (
						<SettingsMode key={mode} mode={mode} active={active} />
					);
				})}
			</Spacer>
			{isActiveModeHasValues && (
				<>
					<div className={styles.verticalSeparator} />
					<Spacer gap='8'>
						{getSettingsModeValues(activeSandboxSettingsMode).map(value => {
							const active = value === activeSandboxSettingsValue;

							return (
								<SettingsModeValue key={value} value={value} active={active} />
							);
						})}
					</Spacer>
				</>
			)}
		</Spacer>
	);
};