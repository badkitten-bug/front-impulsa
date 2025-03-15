import React, { useContext } from 'react';
import styles from './styles.module.css';
import DashboardNav from '../DashboardNav';
import logoImpulsa from '../../assets/impulsa_logo.webp';
import { DataUserContext } from '../../context/DataUserProvider';
function DashboardHeader() {
	const { data } = useContext(DataUserContext);
	return (
		<header className={styles.header}>
			<img
				className={styles.logo}
				src={logoImpulsa}
				alt='logo de aseguradoras impulsa'
			/>
			<DashboardNav />
		</header>
	);
}

export default DashboardHeader;
