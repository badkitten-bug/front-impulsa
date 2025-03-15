import styles from './styles.module.css';
import Button from '../Buttom';
import { GoogleIcon } from '../../components/Icons';
import Submit from '../Submit';
import { useNavigate } from 'react-router-dom';
import { fetchingForm } from '../../utils/fetchingForm';

function CardLogin() {
	const navigate = useNavigate();

	const handleSubmit = e => {
		e.preventDefault();

		const { email } = Object.fromEntries(new window.FormData(e.target));

		localStorage.setItem('email', email);

		navigate('/register', { replace: true });
	};

	function redirect(url) {
		window.location.href = url;
	}

	const google = async () => {
		const requesResponse = await fetchingForm(
			`${import.meta.env.VITE_HOST}auth/google`,
			'POST',
		);
		redirect(requesResponse.data.url);
	};

	return (
		<div className={styles.form}>
			<div className={styles.form_title}>
				<span>Únete ahora</span>
				<p>e impulsa tus proyectos, tu familia y tu salud</p>
			</div>
			<div className={styles.form_loginGoogle} onClick={google}>
				<Button text='Unirme ahora con cuenta Google' href='#' type={3}>
					<GoogleIcon />
				</Button>
			</div>
			<form
				method='post'
				className={styles.form_emailLogin}
				onSubmit={handleSubmit}
			>
				<label htmlFor='email'>Ingresa tu correo electrónico:</label>
				<input
					name='email'
					type='email'
					id='email'
					placeholder='Correo@ejemplo.com'
				/>
				<Submit text='Unirme ahora a IMPULSA' type={1} />
			</form>
			<span className={styles.form_legalConditions}>
				Al registrarse aceptas nuestras <a href='/privacy-policy'>Políticas de Privacidad</a>
			</span>
		</div>
	);
}

export default CardLogin;
