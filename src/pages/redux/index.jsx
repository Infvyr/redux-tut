import { Link, useNavigate } from 'react-router-dom';

function ReduxIndexPage() {
	const navigate = useNavigate();

	const navigateBackToRoot = to => () => navigate(to);

	return (
		<>
			<h1 className="text-3xl">Redux index page</h1>
			<button
				className="my-5 bg-blue-500 px-2 text-white rounded"
				onClick={navigateBackToRoot('/')}
			>
				Back
			</button>

			<hr />

			<p>Redux projects here</p>
			<Link to="project-one" className="underline">
				Project 1
			</Link>
		</>
	);
}

export default ReduxIndexPage;
