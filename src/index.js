import App from 'App';
import { store } from 'app/redux/store';
import Dash from 'pages/Dash';
import ReduxIndexPage from 'pages/Redux';
import { lazy, StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const LazyNotFoundPage = lazy(() => import('pages/Error/NotFoundPage'));
const LazyCounter = lazy(() => import('features/counter/view/Counter'));
const LazyPosts = lazy(() => import('features/posts/view/Posts'));
const LazyApiPosts = lazy(() => import('features/posts/view/DynamicPosts'));

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
				path: 'redux/counter',
				element: (
					<Suspense fallback={<p>Loading...</p>}>
						<LazyCounter />
					</Suspense>
				),
			},
			{
				path: 'redux/posts',
				element: (
					<Suspense fallback={<p>Loading...</p>}>
						<LazyPosts />
					</Suspense>
				),
			},
			{
				path: 'redux/posts-api',
				element: (
					<Suspense fallback={<p>Loading...</p>}>
						<LazyApiPosts />
					</Suspense>
				),
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<StrictMode>
			<RouterProvider router={router} />
		</StrictMode>
	</Provider>
);
