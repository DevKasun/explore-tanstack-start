import { Outlet } from '@tanstack/react-router';
import Header from '~/components/header';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};

export default MainLayout;
