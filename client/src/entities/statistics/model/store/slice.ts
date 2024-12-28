import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Statistics, StatisticsState } from '../../types';

const initialState: StatisticsState = {
	statistics: {
		totalTyped: 0,
		correctChars: 0,
		incorrectChars: 0,
		accuracy: 0
	}
};

export const statisticsSlice = createSlice({
	name: 'statistics',
	initialState,
	reducers: {
		setStatistics: (state, action: PayloadAction<Statistics>) => {
			state.statistics = action.payload;
		}
	}
});

export const { setStatistics } = statisticsSlice.actions;
export const { reducer: statisticsReducer } = statisticsSlice;