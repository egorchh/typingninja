import { RootState } from "~shared/types";

export const selectStatistics = (state: RootState) => state.statistics.statistics;