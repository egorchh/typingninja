import { Statistics } from "~entities/statistics";
import { selectStatistics } from "~entities/statistics";
import { useAppSelector } from "~shared/hooks";

const StatisticPage = () => {
	const statistics = useAppSelector(selectStatistics);

	return (
		<Statistics {...statistics} />
	);
};

export default StatisticPage;