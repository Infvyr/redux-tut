import App from 'App';
import { store } from 'app/store';
import Dash from 'pages/Dash/Dash';
import ReduxIndexPage from 'pages/redux';
import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const LazyNotFoundPage = lazy(() => import('pages/NotFoundPage'));
const LazyCounter = lazy(() => import('components/Counter'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <LazyNotFoundPage />,
		children: [
			{
				path: '/',
				element: <Dash />,
			},
			{
				path: 'redux',
				element: <ReduxIndexPage />,
			},
			{
				path: 'redux/project-one',
				element: <LazyCounter />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	</Provider>
);
