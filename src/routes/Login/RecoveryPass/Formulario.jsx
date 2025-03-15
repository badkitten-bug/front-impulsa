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
import Button from '../../../components/Buttom';
import axios from 'axios';
import ToastNotificationOk from '../../../components/ToastNotificationOk';

function Formulario({ token }) {
	const [values, setValues] = useState({
		password: '',
		password2: '',
		token: token,
	});

	const [errors, setErrors] = useState([]);

	const [toastOpen, setToastOpen] = useState(false);
	const [toastOpenOk, setToastOpenOk] = useState(false);
	const [dataOk, setDataOk] = useState({});
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
		const requestResponse = await axios(`${import.meta.env.VITE_HOST}auth/update-password`,
			{
				method: 'POST',
				data: values,
			}
		);

		if (!requestResponse.status === 200) {
			setErrors(requestResponse.data.msg);
			setToastOpen(true);
			return;
		} else {
			setToastOpenOk(true);
			setDataOk(requestResponse);
			setTimeout(() => {
				goTo('/login')
			}, 5000)
		}


		setLoading(false);

		/* if (requestResponse.headers['authorization']) {
			saveUser(requestResponse);
			goTo('/dashboard');
		} */
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
							<h4>Ingrese su nueva contrasña</h4>
							<p>Por favor, ingresa tu nueva contraseña para actualizar tu cuenta.</p>
						</div>
					</div>
					<form className={'form_ctas'} onSubmit={handleSubmitInput}>
						<div className={'inputs'}>
							<Input
								name='password'
								value={values.password}
								handleChange={handleChangeInput}
								type='password'
								placeholder='Contraseña'
							>
								<PasswordIcon />
							</Input>
							<Input
								name='password2'
								value={values.password2}
								handleChange={handleChangeInput}
								type='password'
								placeholder='Confirmar contraseña'
							>
								<PasswordIcon />
							</Input>

						</div>
						<Submit text='Cambiar' type={3} loading={loading} />

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
