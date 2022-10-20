import { useRouteError } from 'react-router-dom';

function NotFoundPage() {
	const error = useRouteError();
	console.error(error);

	return <div>Page not found</div>;
}

export default NotFoundPage;
