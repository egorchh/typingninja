import { useCallback, useEffect, useRef, useState } from "react";
import { INTERVAL_TIME_VALUE_IN_MILLISECONDS } from "../constants";

type Props = {
	// Default time value in milliseconds
	defaultTime: number;
	isTextContainerBlur: boolean;
	isAnyButtonWasPressed: boolean;
	onTimerExpiredCallback: VoidFunction;
};

export const useTimeMode = ({ defaultTime, isAnyButtonWasPressed, isTextContainerBlur, onTimerExpiredCallback }: Props) => {
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
				if (!isTextContainerBlur) {
					setTime((time) => time - 1);
				}
			}, INTERVAL_TIME_VALUE_IN_MILLISECONDS);

			return () => {
				if (timerRef.current) {
					clearTimeout(timerRef.current);
				}
			};
		}
	}, [isAnyButtonWasPressed, defaultTime, isTextContainerBlur]);

	useEffect(() => {
		if (time === 0 && timerRef.current) {
			clearTimeout(timerRef.current);
			onTimerExpiredCallback();
		}
	}, [time, onTimerExpiredCallback]);

	return time;
};