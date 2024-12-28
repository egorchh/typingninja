import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { statisticsReducer } from '~entities/statistics';

export const store = configureStore({
	reducer: combineReducers({
		statistics: statisticsReducer
	}),
	devTools: true
});
