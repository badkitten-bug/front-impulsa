import './styles.module.formulario.css';
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
import ToastNotificationOk from '../../../components/ToastNotificationOk';

function Formulario() {
	const [values, setValues] = useState({
		email: '',
	});

	const [errors, setErrors] = useState([]);

	const [toastOpen, setToastOpen] = useState(false);

	const { saveUser } = useAuth();
	const goTo = useNavigate();

	const [toastOpenOk, setToastOpenOk] = useState(false);
	const [dataOk, setDataOk] = useState({});
	const [loading, setLoading] = useState(false);

	const handleChangeInput = e => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const handleSubmitInput = async e => {
		e.preventDefault();
		setLoading(true);
		if (values.email === '') {
			setErrors('El campo de correo electrónico es obligatorio');
			setToastOpen(true);
			return;
		}
		try {
			const requestResponse = await fetchingForm(
				`${import.meta.env.VITE_HOST}auth/forget-pass`,
				'POST',
				values,
			);


			setToastOpenOk(true);
			setDataOk({
				data:
				{
					msg: "Si el correo existe en nuestra base de datos, se enviarán las instrucciones para recuperar tu contraseña"
				}
			});
			setTimeout(() => {

				goTo('/');
			}, 5000);
		} catch (error) {
			console.log(error, "ESTO ES UN ERROR LOCO")
			setErrors(error);
			setToastOpen(true);

		} finally {
			setLoading(false);
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
		<div className={'container'}>
			{toastOpen && (
				<ToastNotificationError
					errors={errors}
					toastOpen={toastOpen}
					setToastOpen={setToastOpen}
				/>
			)}
			{toastOpenOk && (
				<ToastNotificationOk
					ok={dataOk}
					toastOpenOk={toastOpenOk}
					setToastOpenOk={setToastOpenOk}
				/>
			)}
			<AnimationProvider>
				<div className={'form'}>
					<div className={'formTitle'}>
						<img src={impulsaLogoWhite} alt='logo de seguros impulsa' />
						<div className={'formTitle_text'}>
							<h4>Recuperar contraseña</h4>
							<p>Por favor, ingresa tu correo electrónico para recuperar tu contraseña.</p>
						</div>
					</div>
					<form className={'form_ctas'} onSubmit={handleSubmitInput}>
						<div className={'inputs'}>
							<Input
								name='email'
								value={values.email}
								handleChange={handleChangeInput}
								type='email'
								placeholder='Correo@ejemplo.com'
							>
								<EmailIcon />
							</Input>

						</div>
						<Submit text='Recuperar contraseña' type={3} loading={loading} />

					</form>
				</div>
			</AnimationProvider>
			<footer className={'footer'}>
				<p>
					¿Aún no eres agente? <Link to='/register'>Regístrate Aquí</Link>
				</p>
			</footer>
		</div>
	);
}

export default Formulario;
