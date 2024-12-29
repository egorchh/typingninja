import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
	// Default timer value in milliseconds
	defaultTime: number;
	isAnyButtonWasPressed: boolean;
	onTimerExpiredCallback: VoidFunction;
};

const INTERVAL_TIME = 1000;

export const useTimer = ({ defaultTime, isAnyButtonWasPressed, onTimerExpiredCallback }: Props) => {
	const timerRef = useRef<NodeJS.Timeout | null>();
	const [time, setTime] = useState<number>(() => defaultTime / 1000);

	const updateDefaultTime = useCallback(() => {
		setTime(defaultTime / 1000);
	}, [defaultTime]);

	useEffect(() => {
		updateDefaultTime();
	}, [updateDefaultTime]);

	useEffect(() => {
		if (isAnyButtonWasPressed) {
			timerRef.current = setInterval(() => {
				setTime((time) => time - 1);
			}, INTERVAL_TIME);

			return () => {
				if (timerRef.current) {
					clearTimeout(timerRef.current);
				}
			};
		}
	}, [isAnyButtonWasPressed, defaultTime]);

	useEffect(() => {
		if (time === 0 && timerRef.current) {
			clearTimeout(timerRef.current);
			onTimerExpiredCallback();
		}
	}, [time, onTimerExpiredCallback]);

	return {
		time
	};
};