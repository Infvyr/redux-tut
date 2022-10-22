import { ReactComponent as ReactLogo } from 'assets/images/react.svg';
import Navbar from 'features/menu/component/Navbar';

function Sidebar() {
	return (
		<aside className="sidebar">
			<div className="mt-2 mb-14 h-20 flex justify-center">
				<ReactLogo className="motion-safe:animate-customSpin" />
			</div>

			<Navbar />
		</aside>
	);
}

export default Sidebar;
