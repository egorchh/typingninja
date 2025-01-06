import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { sandboxSettingsReducer } from '~features/sandbox-settings';
import { statisticsReducer } from '~entities/statistics';

export const store = configureStore({
	reducer: combineReducers({
		statistics: statisticsReducer,
		sandboxSettings: sandboxSettingsReducer
	}),
	devTools: true
});
