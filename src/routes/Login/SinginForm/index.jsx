import styles from './styles.module.css';
import Input from '../../../components/Input';
import impulsaLogoWhite from '../../../assets/impulsa_logo_white.webp';
import { Link, useNavigate } from 'react-router-dom';
import Submit from '../../../components/Submit';
import AnimationProvider from '../../../context/AnimationProvider';
import { EmailIcon, GoogleIcon, PasswordIcon } from '../../../components/Icons';
import { useAuth } from '../../../context/AuthProvider';
import { useState } from 'react';
import { fetchingForm } from '../../../utils/fetchingForm';
import ToastNotificationError from '../../../components/ToastNotificationError';
import Button from '../../../components/Buttom';

function SiginForm() {
	const [values, setValues] = useState({
		email: '',
		contrasenia: '',
	});

	const [errors, setErrors] = useState([]);

	const [toastOpen, setToastOpen] = useState(false);

	const { saveUser } = useAuth();
	const goTo = useNavigate();

	const handleChangeInput = e => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const handleSubmitInput = async e => {
		e.preventDefault();

		const requestResponse = await fetchingForm(
			`${import.meta.env.VITE_HOST}auth/login`,
			'POST',
			values,
		);

		if (!requestResponse.ok) {
			setErrors(requestResponse.data);
			setToastOpen(true);
			return;
		}

		if (requestResponse.headers['authorization']) {
			saveUser(requestResponse);
			goTo('/dashboard');
		}
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
		<div className={styles.container}>
			{toastOpen && (
				<ToastNotificationError
					errors={errors}
					toastOpen={toastOpen}
					setToastOpen={setToastOpen}
				/>
			)}
			<AnimationProvider>
				<div className={styles.form}>
					<div className={styles.formTitle}>
						<img src={impulsaLogoWhite} alt='logo de seguros impulsa' />
						<div className={styles.formTitle_text}>
							<h4>Ingresar a la plataforma</h4>
							<p>A continuación ingresa tu correo y contraseña para entrar</p>
						</div>
					</div>
					<form className={styles.form_ctas} onSubmit={handleSubmitInput}>
						<div className={styles.inputs}>
							<Input
								name='email'
								value={values.email}
								handleChange={handleChangeInput}
								type='email'
								placeholder='Correo@ejemplo.com'
							>
								<EmailIcon />
							</Input>
							<Input
								name='contrasenia'
								value={values.contrasenia}
								handleChange={handleChangeInput}
								type='password'
								placeholder='Contraseña'
							>
								<PasswordIcon />
							</Input>
						</div>
						<Submit text='Ingresar' type={3} />
						<div onClick={google}>
							<Button text='Iniciar Sesión con Google' href='#' type={3}>
								<GoogleIcon />
							</Button>
						</div>
					</form>
				</div>
			</AnimationProvider>
			<footer className={styles.footer}>
				<Link to='/forget-pass' className={styles.passwordLink}>
					¿Olvidaste tu contraseña?
				</Link>
				<p>
					¿Aún no eres agente? <Link to='/register'>Regístrate Aquí</Link>
				</p>
			</footer>
		</div>
	);
}

export default SiginForm;
