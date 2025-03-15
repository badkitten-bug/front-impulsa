import SingUpForm from '../SingUpForm';
import styles from './styles.module.css';

function SingUp() {
	return (
		<div className={styles.container}>
			<SingUpForm />
			<footer className={styles.footer}>
				<p>
					¿Ya eres agente? <Link to='#'>Ingresa Aquí</Link>
				</p>
			</footer>
		</div>
	);
}

export default SingUp;
