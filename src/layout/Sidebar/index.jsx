import { ReactComponent as ReactLogo } from 'assets/images/react.svg';
import Navbar from 'features/menu/component/Navbar';
import styles from './Sidebar.module.css';

function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<div className={styles['logo-wrapper']}>
				<ReactLogo className={styles.logo} />
			</div>

			<Navbar />
		</aside>
	);
}

export default Sidebar;
