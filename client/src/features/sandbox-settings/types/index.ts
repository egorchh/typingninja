import { TimeValueType } from "~entities/timer";

export const SandboxSettingsMode = {
	Time: 'time',
	Words: 'words',
	OtherTest: 'other-test'
} as const;

export type SandboxSettingsModeType = typeof SandboxSettingsMode[keyof typeof SandboxSettingsMode];

// TODO: Перенести в отдельную сущность?
export const WordsValue = {
	'10': 10,
	'25': 25,
	'50': 50,
	'100': 100,
	'custom': 'custom'
} as const;

export type WordsValueType = typeof WordsValue[keyof typeof WordsValue];

export type SandboxSettingsState = {
	mode: SandboxSettingsModeType;
	value: TimeValueType | WordsValueType;
};