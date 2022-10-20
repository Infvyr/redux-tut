import { NavLink } from 'react-router-dom';
import { ReactComponent as ReactLogo } from 'assets/react.svg';

function Sidebar() {
	const setActiveLink = isActive => {
		let activeClassName = 'bg-amber-100 text-black';

		return isActive
			? `block px-5 py-2 group-hover:bg-amber-100 transition-colors duration-300 ${activeClassName}`
			: 'block px-5 py-2 group-hover:bg-amber-100 transition-colors duration-300';
	};

	return (
		<aside className="bg-amber-50 p-5 shadow">
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
							end
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
