import { RootState } from "~shared/types";

const selectTimerState = (state: RootState) => state.timer;
export const selectTimerMode = (state: RootState) => selectTimerState(state).mode;
export const selectTimeInMilliseconds = (state: RootState) => {
	const timerMode = selectTimerMode(state);
	const timeInMilliseconds = timerMode * 1000;

	return timeInMilliseconds;
};