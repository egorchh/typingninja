import { TimeValueType } from "~entities/timer";
import { timeModeValues, wordsModeValues } from "../constants";
import { 
	SandboxSettingsMode, 
	SandboxSettingsModeType, 
	WordsValueType
} from "../types";

export const getSettingsModeValues = (mode: SandboxSettingsModeType): TimeValueType[] | WordsValueType[] => {
	switch (mode) {
		case SandboxSettingsMode.Time:
			return timeModeValues;
		case SandboxSettingsMode.Words:
			return wordsModeValues;
		default:
			return [];
	}
};