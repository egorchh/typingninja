export type Statistics = {
	totalTyped: number;
	correctChars: number;
	incorrectChars: number;
	accuracy: number;
}

export type StatisticsState = {
	statistics: Statistics;
};