import styles from './styles.module.css';
import CardLogin from '../CardLogin';

function LoginSection() {
	return (
		<section className={styles.loginSection}>
			<CardLogin />
		</section>
	);
}

export default LoginSection;
