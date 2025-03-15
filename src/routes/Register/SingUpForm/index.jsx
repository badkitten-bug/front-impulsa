import styles from './styles.module.css';
import impulsaLogoWhite from '../../../assets/impulsa_logo_white.webp';
import Input from '../../../components/Input';
import Submit from '../../../components/Submit';
import AnimationProvider from '../../../context/AnimationProvider';
import { Link, useNavigate } from 'react-router-dom';
import {
	EmailIcon,
	GoogleIcon,
	PasswordIcon,
	PersonLoginIcon,
} from '../../../components/Icons';
import { useState } from 'react';
import { manageLocalStorage } from '../../../utils/manageLocalStorage';
import { fetchingForm } from '../../../utils/fetchingForm';
import { useAuth } from '../../../context/AuthProvider';
import ToastNotificationError from '../../../components/ToastNotificationError';
import Button from '../../../components/Buttom';
import ToastNotificationOk from '../../../components/ToastNotificationOk';

function SingUpForm() {
	const [values, setValues] = useState({
		nombre_apellido: '',
		email: manageLocalStorage('email') || '',
		contrasenia: '',
		repetirContra: '',
	});
	const [errors, setErrors] = useState([]);

	const [toastOpen, setToastOpen] = useState(false);
	const [toastOpenOk, setToastOpenOk] = useState(false);
	const [ok, setOk] = useState([]);
	const [loading, setLoading] = useState(false);

	const { saveUser } = useAuth();

	const goTo = useNavigate();

	const handleChangeInput = e => {
		const { name, value } = e.target;

		setValues({ ...values, [name]: value });
	};

	const handleSubmitInput = async e => {
		e.preventDefault();
		setLoading(true);
		const requestResponse = await fetchingForm(
			`${import.meta.env.VITE_HOST}auth/register`,
			'POST',
			values,
		);

		if (!requestResponse.ok) {
			setErrors(requestResponse.data);
			setToastOpen(true);
			return;
		}

		if (requestResponse.headers['authorization']) {
			/* saveUser(requestResponse); */
			/* goTo('/dashboard'); */
			setOk({
				data: {
					msg: 'Usuario registrado correctamente, en espera de activación'
				}
			});
			setValues({
				nombre_apellido: '',
				email: manageLocalStorage('email') || '',
				contrasenia: '',
				repetirContra: '',
			})
			setToastOpenOk(true);
			setTimeout(() => { goTo('/'); }, 5000);
		}
		setLoading(false);
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
					setToastOpen={setToastOpen}
					toastOpen={toastOpen}
				/>
			)}
			{toastOpenOk && (<ToastNotificationOk
				ok={ok}
				setToastOpenOk={setToastOpenOk}
				toastOpenOk={toastOpenOk}
			/>)}
			<AnimationProvider>
				<div className={styles.form}>
					<div className={styles.formTitle}>
						<img src={impulsaLogoWhite} alt='' />
						<div className={styles.formTitle_text}>
							<h4>Regístrate en la plataforma</h4>
							<p>
								A continuación ingresa tu nombre, correo y contraseña para
								entrar
							</p>
						</div>
					</div>
					<form className={styles.form_ctas} onSubmit={handleSubmitInput}>
						<div className={styles.inputs}>
							<Input
								name='nombre_apellido'
								value={values.nombre_apellido}
								handleChange={handleChangeInput}
								type='text'
								placeholder='Nombre completo'
							>
								<PersonLoginIcon />
							</Input>
							<Input
								name='email'
								type='email'
								value={values.email}
								handleChange={handleChangeInput}
								placeholder='Correo@ejemplo.com'
							>
								<EmailIcon />
							</Input>
							<Input
								name='contrasenia'
								type='password'
								value={values.contrasenia}
								handleChange={handleChangeInput}
								placeholder='Contraseña'
							>
								<PasswordIcon />
							</Input>
							<Input
								name='repetirContra'
								type='password'
								value={values.repetirContra}
								handleChange={handleChangeInput}
								placeholder='Repitir contraseña'
							>
								<PasswordIcon />
							</Input>
						</div>
						<Submit text={'Regístrarse'} type={3} loading={loading} />
						<div onClick={google} className={styles.googleCta}>
							<Button text='Unirme ahora con cuenta Google' href='#' type={3}>
								<GoogleIcon />
							</Button>
						</div>
					</form>
				</div>
			</AnimationProvider>
			<footer className={styles.footer}>
				<p>
					¿Ya eres un agente? <Link to='/login'>Ingresa Aquí</Link>
				</p>
			</footer>
		</div>
	);
}

export default SingUpForm;
