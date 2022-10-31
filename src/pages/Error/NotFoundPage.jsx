import Button from 'components/Button';
import Space from 'components/Space';
import { useNavigate, useRouteError } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

function NotFoundPage() {
	const navigate = useNavigate();
	const error = useRouteError();
	const { statusText } = error;

	const goHome = () => navigate('/');

	return (
		<main className={styles.main}>
			<section className="h-screen flex items-center justify-center flex-col">
				<h1>{statusText || "Oops! There's an error!"}</h1>
				<Space />
				<Button className="btn-primary" onClick={goHome}>
					Go home
				</Button>
			</section>
		</main>
	);
}

export default NotFoundPage;
