import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TimeValues, TimeValueType } from '~entities/timer';
import {
	SandboxSettingsMode,
	SandboxSettingsState,
	SandboxSettingsModeType, 
	WordsValueType
} from '../../types';

const initialState: SandboxSettingsState = {
	mode: SandboxSettingsMode.Time,
	value: TimeValues[30]
};

export const sandboxSettingsSlice = createSlice({
	name: 'sandbox-settings',
	initialState,
	reducers: {
		setSandboxSettingsMode: (state, action: PayloadAction<SandboxSettingsModeType>) => {
			state.mode = action.payload;
		},
		setSandboxSettingsValue: (state, action: PayloadAction<TimeValueType | WordsValueType>) => {
			state.value = action.payload;
		}
	}
});

export const { setSandboxSettingsMode, setSandboxSettingsValue } = sandboxSettingsSlice.actions;
export const { reducer: sandboxSettingsReducer } = sandboxSettingsSlice;