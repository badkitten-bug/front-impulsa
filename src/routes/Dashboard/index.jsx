import styles from './styles.module.css';
import { Outlet } from 'react-router-dom';
import DashboardHeader from '../../components/DashboardHeader';
import { useEffect, useState } from 'react';
import DataUserProvider from '../../context/DataUserProvider';

function Dashboard() {
	const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setViewportWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<>
			<DataUserProvider>
				<div className={styles.container}>
					{viewportWidth > 580 ? <DashboardHeader /> : null}
					<Outlet />
					{viewportWidth <= 580 ? <DashboardHeader /> : null}
				</div>
			</DataUserProvider>
		</>
	);
}

export default Dashboard;
