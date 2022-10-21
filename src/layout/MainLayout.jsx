import { Outlet } from 'react-router-dom';

function MainLayout() {
	return (
		<main className="main-content">
			<Outlet />
		</main>
	);
}

export default MainLayout;
