import { setActiveLink } from 'app/utils/menu';
import { MENU_ITEMS } from 'layout/data/menu';
import { NavLink } from 'react-router-dom';

function Navbar() {
	if (MENU_ITEMS.length === 0) {
		return <p>No menu items found! Pls, add one.</p>;
	}

	return (
		<nav>
			<ul className="flex flex-col gap-y-2">
				{!!MENU_ITEMS.length &&
					MENU_ITEMS.map(({ key, name, url, icon }) => (
						<li key={key} className="group">
							<NavLink
								to={url}
								className={({ isActive }) => setActiveLink(isActive)}
								end
							>
								<span className="w-5 h-5 inline-flex place-items-center">
									{icon}
								</span>
								<span>{name}</span>
							</NavLink>
						</li>
					))}
			</ul>
		</nav>
	);
}

export default Navbar;
