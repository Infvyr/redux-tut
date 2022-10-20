import { Outlet } from 'react-router-dom';

function MainLayout() {
	return (
		<main className="container mx-auto p-5">
			<Outlet />
		</main>
	);
}

export default MainLayout;
