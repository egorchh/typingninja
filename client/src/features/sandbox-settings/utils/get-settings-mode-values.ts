import { TimeValueType } from "~entities/mode-counter";
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