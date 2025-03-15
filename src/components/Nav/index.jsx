import styles from './styles.module.css';

function Nav() {
	return (
		<nav className={styles.nav}>
			<ul>
				<li>
					<a className={styles.link} href='#'>
						Inicio
					</a>
				</li>
				<li>
					<a className={styles.link} href='#ventajas'>
						Ventajas
					</a>
				</li>
				<li>
					<a className={styles.link} href='#servicios'>
						Servicios
					</a>
				</li>
				<li>
					<a className={styles.link} href='#FAQ'>
						FAQ
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
