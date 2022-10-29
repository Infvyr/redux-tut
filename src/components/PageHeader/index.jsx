import Button from 'components/Button';
import { FormPrevious } from 'grommet-icons';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './PageHeader.module.css';

function PageHeader({ backTo = '/' }) {
	const navigate = useNavigate();
	const location = useLocation();
	const [pathName, setPathName] = useState('');

	const pageTitle =
		pathName.charAt(0).toUpperCase() + pathName.slice(1).replace('-', ' ');

	const navigateBackTo = () => () => navigate(backTo);

	useEffect(() => {
		(() => {
			try {
				if (location.pathname !== '') {
					let splitPathname = location.pathname.split('/');
					if (splitPathname.length > 0) {
						setPathName(splitPathname.slice(-1)[0]);
					}
				}
			} catch (err) {
				console.error(err);
				setPathName('');
			}
		})();
	}, [location.pathname]);

	return (
		<section className="card">
			<div className={styles.wrapper}>
				<Button
					className={`btn-primary ${styles.button}`}
					onClick={navigateBackTo('/')}
				>
					<FormPrevious color="white" size="21px" />
					Back
				</Button>
				<h1 className={styles.title}>{pageTitle}</h1>
			</div>
		</section>
	);
}

export default PageHeader;
