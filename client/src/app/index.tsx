import './styles/index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router';
import { store } from './store';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</Provider>
	);
}

export default App;
