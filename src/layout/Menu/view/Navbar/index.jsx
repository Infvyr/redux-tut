import { setActiveLink } from 'app/utils/Menu';
import { MENU_ITEMS } from 'layout/data/menu';
import { NavLink } from 'react-router-dom';
import styles from 'layout/Menu/view/Navbar/Navbar.module.css';

function Navbar() {
	if (MENU_ITEMS.length === 0) {
		return <p>No menu items found! Pls, add one.</p>;
	}

	return (
		<nav>
			<ul className={styles.ul}>
				{!!MENU_ITEMS.length &&
					MENU_ITEMS.map(({ key, name, url, icon }) => (
						<li key={key} className={styles.li}>
							<NavLink
								to={url}
								className={({ isActive }) => setActiveLink(isActive)}
								end={url === '/'}
							>
								<span className={styles.icon}>{icon}</span>
								<span className={styles.name}>{name}</span>
							</NavLink>
						</li>
					))}
			</ul>
		</nav>
	);
}

export default Navbar;
