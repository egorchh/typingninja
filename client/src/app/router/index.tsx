import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppRoutes } from '~shared/constants/routes';
import { Layout } from './layout';

const KeyboardPage = lazy(() => import('~pages/keyboard-page'));
const StatisticPage = lazy(() => import('~pages/statistic-page'));

export const Router = () => {
	return (
		<Routes>
			<Route path={AppRoutes.KeyboardPage} element={<Layout />}>
				<Route index element={<KeyboardPage />} />
				<Route path={AppRoutes.StatisticPage} element={<StatisticPage />} />
			</Route>
		</Routes>
	);
};