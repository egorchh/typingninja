import { SandboxSettingsMode } from '~features/sandbox-settings/types';
import { useAppSelector } from '~shared/hooks';
import { Spacer } from '~shared/ui';
import { sandboxSettingsModes, timeModeValues, wordsModeValues } from '../../constants';
import { selectSandboxSettings } from '../../model';
import { SettingsMode } from '../settings-mode';
import { SettingsModeValue } from '../settings-mode-value';
import styles from './styles.module.css';

export const SandboxSettings = () => {
	const { mode: activeSandboxSettingsMode, value: activeSandboxSettingsValue } = useAppSelector(selectSandboxSettings);

	return (
		<Spacer className={styles.content} gap='16' justify='center'>
			<Spacer gap='8'>
				{sandboxSettingsModes.map(mode => {
					const active = mode === activeSandboxSettingsMode;

					return (
						<SettingsMode key={mode} mode={mode} active={active} />
					);
				})}
			</Spacer>
			<p>|</p>
			{activeSandboxSettingsMode === SandboxSettingsMode.Time && (
				<Spacer gap='8'>
					{timeModeValues.map(value => {
						const active = value === activeSandboxSettingsValue;

						return (
							<SettingsModeValue key={value} value={value} active={active} />
						);
					})}
				</Spacer>
			)}
			{activeSandboxSettingsMode === SandboxSettingsMode.Words && (
				<Spacer gap='8'>
					{wordsModeValues.map(value => {
						const active = value === activeSandboxSettingsValue;

						return (
							<SettingsModeValue key={value} value={value} active={active} />
						);
					})}
				</Spacer>
			)}
		</Spacer>
	);
};