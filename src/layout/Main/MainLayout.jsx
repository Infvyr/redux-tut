import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.css';

function MainLayout() {
	return (
		<main className={styles.main}>
			<div className={styles.inner}>
				<Outlet />
			</div>
		</main>
	);
}

export default MainLayout;
