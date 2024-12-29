export const calculateCPM = ({ milliseconds, charactersAmount }: { milliseconds: number; charactersAmount: number; }) => {
	const minutes = milliseconds / 1000;
	return charactersAmount / minutes;
};