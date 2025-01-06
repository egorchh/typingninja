import { TimeValues, TimeValueType } from "~entities/timer";
import { RootState } from "~shared/types";
import { WordsValueType } from "../../types";

export const selectSandboxSettings = (state: RootState) => state.sandboxSettings;
export const selectSandboxSettingsMode = (state: RootState) => selectSandboxSettings(state).mode;

export const selectSandboxSettingsTime = (state: RootState) => selectSandboxSettings(state).value as TimeValueType;
export const selectSandboxSettingsTimeInMilliseconds = (state: RootState) => {
	const timeValue = selectSandboxSettingsTime(state);

	if (timeValue === TimeValues.custom) {
		return 0;
	}

	return timeValue * 1000;
};

export const selectSandboxSettingsWordsAmount = (state: RootState) => selectSandboxSettings(state).value as WordsValueType;