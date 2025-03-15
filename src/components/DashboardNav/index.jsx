import React, { useContext } from 'react';
import styles from './styles.module.css';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import {
	HomeIcon,
	ProfileIcon,
	StatisticsIcon,
	QuoterIcon,
	CloseIcon,
	ChasisIcon,
} from '../Icons';

import { DataUserContext } from '../../context/DataUserProvider';

function DashboardNav() {

	const { data } = useContext(DataUserContext);
	const user = data?.data
	const location = useLocation();

	return (
		<nav className={styles.nav}>
			<ul>
				<li
					className={clsx({
						[styles.linkContainer]: true,
						[styles.selected]: location.pathname === '/dashboard/home',
					})}
				>
					<Link className={styles.link} text='Inicio' to='home'>
						<div className={styles.mobileIcon}>
							<HomeIcon />
						</div>
						Inicio
					</Link>
				</li>
				{user?.id_tipo_usuario === 0 && (<li
					className={clsx({
						[styles.linkContainer]: true,
						[styles.selected]: location.pathname === '/dashboard/list-user',
					})}
				>
					<Link className={styles.link} text='Perfil' to='list-user'>

						Lista de Usuarios
					</Link>
				</li>)}
				<li
					className={clsx({
						[styles.linkContainer]: true,
						[styles.selected]: location.pathname === '/dashboard/profile',
					})}
				>
					<Link className={styles.link} text='Perfil' to='profile'>
						<div className={styles.mobileIcon}>
							<ProfileIcon />
						</div>
						Perfil
					</Link>
				</li>
				<li
					className={clsx({
						[styles.linkContainer]: true,
						[styles.selected]: location.pathname === '/dashboard/statistics',
					})}
				>
					<Link className={styles.link} text='Estadísticas' to='statistics'>
						<div className={styles.mobileIcon}>
							<StatisticsIcon />
						</div>
						Estadísticas
					</Link>
				</li>
				<li
					className={clsx({
						[styles.linkContainer]: true,
						[styles.selected]: location.pathname === '/dashboard/quoter',
					})}
				>
					<Link className={styles.link} text='Cotizador' to='quoter'>
						<div className={styles.mobileIcon}>
							<QuoterIcon />
						</div>
						Cuestionario ANF
					</Link>
				</li>
				<li
					className={clsx({
						[styles.linkContainer]: true,
						[styles.selected]: location.pathname === '/dashboard/chasis',
					})}
				>
					<Link className={styles.link} to='chasis'>
						<div className={styles.mobileIcon}>
							<ChasisIcon />
						</div>
						Chasis
					</Link>
				</li>
				<li
					className={clsx({
						[styles.linkContainer]: true,
						[styles.selected]: location.pathname === '/dashboard/close',
					})}
				>
					<Link className={styles.link} text='Salir' to='close'>
						<div className={styles.mobileIcon}>
							<CloseIcon />
						</div>
						Salir
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default DashboardNav;
