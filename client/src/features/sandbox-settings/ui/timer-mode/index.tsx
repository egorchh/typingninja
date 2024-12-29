import { setTimerMode } from "~entities/timer";
import { TimerMode as TimerModeType } from "~entities/timer/types";
import { useAppDispatch } from "~shared/hooks";

type Props = {
	mode: TimerModeType;
};

export const TimerMode = ({ mode }: Props) => {
	const dispatch = useAppDispatch();

	const handleSetTimerMode = () => {
		dispatch(setTimerMode(mode));
	};

	return (
		<span onClick={handleSetTimerMode}>{mode}</span>
	);
};