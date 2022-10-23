import styles from 'features/menu/view/Navbar/Navbar.module.css';

const setActiveLink = isActive => {
	let defaultLinkClassName = styles['nav-link'];
	let activeLinkClassName = styles.active;

	return isActive
		? `${defaultLinkClassName} ${activeLinkClassName}`
		: defaultLinkClassName;
};

export { setActiveLink };
