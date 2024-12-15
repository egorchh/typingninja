import { Routes, Route } from 'react-router-dom';
import { KeyboardPage } from '~pages/keyboard-page';
import { AppRoutes } from '~shared/constants/routes';
import { Layout } from './layout';

export const Router = () => {
	return (
		<Routes>
			<Route path={AppRoutes.KeyboardPage} element={<Layout />}>
				<Route index element={<KeyboardPage />} />
			</Route>
		</Routes>
	)
}