import { createSlice } from '@reduxjs/toolkit';
import type { TimerState, TimerMode } from '../../types';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: TimerState = {
	mode: 30
};

export const timerSlice = createSlice({
	name: 'timer',
	initialState,
	reducers: {
		setTimerMode: (state, action: PayloadAction<TimerMode>) => {
			state.mode = action.payload;
		}
	}
});

export const { setTimerMode } = timerSlice.actions;
export const { reducer: timerReducer } = timerSlice;