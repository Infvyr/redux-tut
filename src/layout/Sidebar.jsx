import { NavLink } from 'react-router-dom';
import { ReactComponent as ReactLogo } from 'assets/react.svg';

function Sidebar() {
	const setActiveLink = isActive => {
		let defaultLinkClassName = 'nav-link';
		let activeLinkClassName = 'bg-amber-100 text-black';

		return isActive
			? `${defaultLinkClassName} ${activeLinkClassName}`
			: defaultLinkClassName;
	};

	return (
		<aside className="sidebar">
			<div className="mt-2 mb-14 h-20 flex justify-center">
				<ReactLogo className="motion-safe:animate-customSpin" />
			</div>
			<nav>
				<ul className="flex flex-col gap-y-2">
					<li className="group">
						<NavLink
							to="/"
							className={({ isActive }) => setActiveLink(isActive)}
							end
						>
							Dash
						</NavLink>
					</li>
					<li className="group">
						<NavLink
							to="redux"
							className={({ isActive }) => setActiveLink(isActive)}
						>
							Redux
						</NavLink>
					</li>
				</ul>
			</nav>
		</aside>
	);
}

export default Sidebar;
