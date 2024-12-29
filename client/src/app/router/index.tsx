import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppRoutes } from '~shared/constants/routes';
import { Layout } from './layout';

const SandboxPage = lazy(() => import('~pages/sandbox-page'));
const StatisticPage = lazy(() => import('~pages/statistic-page'));

export const Router = () => {
	return (
		<Routes>
			<Route path={AppRoutes.SandboxPage} element={<Layout />}>
				<Route index element={<SandboxPage />} />
				<Route path={AppRoutes.StatisticsPage} element={<StatisticPage />} />
			</Route>
		</Routes>
	);
};