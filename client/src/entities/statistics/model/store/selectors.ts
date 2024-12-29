import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "~shared/types";
import { StatisticsState } from "../../types";
import { calculateWPM, calculateCPM } from "../../utils";

const selectStatisticsState = (state: RootState) => state.statistics;
export const selectStatistics = createSelector([selectStatisticsState], (state: StatisticsState) => {
	const { correctChars } = state.statistics;
	const wpm = calculateWPM({ charactersAmount: correctChars, milliseconds: 3000 });
	const cpm = calculateCPM({ charactersAmount: correctChars, milliseconds: 3000 });

	return {
		...state.statistics,
		wpm,
		cpm
	};
});