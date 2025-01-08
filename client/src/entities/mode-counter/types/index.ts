export const TimeValues = {
	'15': 15,
	'30': 30,
	'60': 60,
	'120': 120,
	'custom': 'custom'
} as const;

export type TimeValueType = typeof TimeValues[keyof typeof TimeValues];

export type TimerState = {
	value: TimeValueType;
}