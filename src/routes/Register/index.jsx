import styles from './styles.module.css';
import singUp from '../../assets/singup-family.webp';
import SingUp from './SingUpForm';
import { useAuth } from '../../context/AuthProvider';
import { Navigate } from 'react-router-dom';

function Register() {
	const { isAuthenticated } = useAuth();

	if (isAuthenticated) return <Navigate to='/dashboard' />;

	return (
		<main className={styles.main}>
			<SingUp />
			<picture className={styles.picture}>
				<img src={singUp} alt='familia junto divirtiendose y sonriendo' />
			</picture>
		</main>
	);
}

export default Register;
