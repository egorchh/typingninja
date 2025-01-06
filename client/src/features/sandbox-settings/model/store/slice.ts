import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TimeValues, TimeValueType } from '~entities/timer';
import {
	SandboxSettingsMode,
	SandboxSettingsState,
	SandboxSettingsModeType, 
	WordsValueType,
	WordsValue
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

			switch (action.payload) {
				case SandboxSettingsMode.Time:
					state.value = TimeValues[30];
					break;
				case SandboxSettingsMode.Words:
					state.value = WordsValue[25];
					break;
				default:
					state.value = TimeValues[30];
					break;
			} 
		},
		setSandboxSettingsValue: (state, action: PayloadAction<TimeValueType | WordsValueType>) => {
			state.value = action.payload;
		}
	}
});

export const { setSandboxSettingsMode, setSandboxSettingsValue } = sandboxSettingsSlice.actions;
export const { reducer: sandboxSettingsReducer } = sandboxSettingsSlice;