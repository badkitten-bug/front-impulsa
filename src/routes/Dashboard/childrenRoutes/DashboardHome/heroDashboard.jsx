import styles from './styles.module.css';
import { formatCurrentDate } from '../../../../utils/formatCurrentDate.js';

function HomeHeroDashboard() {
	return (
		<main className={styles.main}>
			<div>
				<h1>¡Bienvenido al Sistema para Asesores Impulsa!</h1>
				<p>{formatCurrentDate()}</p>
			</div>
		</main>
	);
}

export default HomeHeroDashboard;
