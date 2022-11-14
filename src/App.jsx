import MainLayout from 'layout/Main/MainLayout';
import Sidebar from 'layout/Sidebar';
import { useRouteError } from 'react-router-dom';

function App() {
	const error = useRouteError();
	const errorPageClassName = error ? 'grid-cols-1' : 'lg:grid-cols-[300px_1fr]';

	return (
		<div className={`${errorPageClassName} block sm:grid min-h-screen`}>
			<Sidebar />
			<MainLayout />
		</div>
	);
}

export default App;
