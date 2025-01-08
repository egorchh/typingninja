import { useEffect, useRef, useState } from "react";
import { INTERVAL_TIME_VALUE_IN_MILLISECONDS } from "../constants";

type Props = {
	start: boolean;
	end: boolean;
	interval?: number;
};

export const useTimer = ({ start, end, interval = INTERVAL_TIME_VALUE_IN_MILLISECONDS }: Props) => {
	const timerRef = useRef<NodeJS.Timeout | null>();
	const [elapsedTime, setElapsedTime] = useState<number>(0);

	useEffect(() => {
		if (start) {
			timerRef.current = setInterval(() => {
				setElapsedTime((prev) => prev + 1);
			}, interval);

			return () => {
				if (timerRef.current) {
					clearTimeout(timerRef.current);
				}
			};
		}
	}, [start, interval]);

	useEffect(() => {
		if (end && timerRef.current) {
			clearTimeout(timerRef.current);
		}
	}, [end]);

	return elapsedTime;
};