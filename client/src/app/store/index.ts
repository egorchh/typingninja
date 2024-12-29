import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { statisticsReducer } from '~entities/statistics';
import { timerReducer } from '~entities/timer';

export const store = configureStore({
	reducer: combineReducers({
		statistics: statisticsReducer,
		timer: timerReducer
	}),
	devTools: true
});
