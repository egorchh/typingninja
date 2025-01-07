import { TimeValueType } from "~entities/timer";
import { TimeValues } from "~entities/timer/types";
import { SandboxSettingsMode, SandboxSettingsModeType, WordsValue, WordsValueType } from "../types";

export const sandboxSettingsModes: SandboxSettingsModeType[] = [
	SandboxSettingsMode.Time, 
	SandboxSettingsMode.Words, 
	SandboxSettingsMode.OtherTest
];

export const timeModeValues: TimeValueType[] = [TimeValues[15], TimeValues[30], TimeValues[60], TimeValues[120], TimeValues.custom];
export const wordsModeValues: WordsValueType[] = [WordsValue[10], WordsValue[25], WordsValue[50], WordsValue[100], WordsValue.custom];