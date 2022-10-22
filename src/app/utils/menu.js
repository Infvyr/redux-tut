const setActiveLink = isActive => {
	let defaultLinkClassName = 'nav-link';
	let activeLinkClassName = 'bg-amber-100 text-black';

	return isActive
		? `${defaultLinkClassName} ${activeLinkClassName}`
		: defaultLinkClassName;
};

export { setActiveLink };
