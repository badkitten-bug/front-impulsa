import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../../context/AuthProvider';

function HeroClose() {
	const { changeAuth } = useAuth();

	const handleClick = () => {
		changeAuth();
		localStorage.removeItem('token');
		localStorage.removeItem('userId');
	};

	return (
		<main className={styles.main}>
			<div>
				<h1>¿Estás seguro que deseas salir?</h1>
				<Link className={styles.button} to='/' onClick={handleClick}>
					Salir
				</Link>
			</div>
		</main>
	);
}

export default HeroClose;
