import styles from './styles.module.css';
import Input from '../Input';
import { Xicon } from '../Icons';
import Submit from '../Submit';
import { useState } from 'react';
import { fetchingForm } from '../../utils/fetchingForm';
import { useAuth } from '../../context/AuthProvider';
import ToastNotificationError from '../ToastNotificationError';
import FileUpload from '../FileUpload';
import LoaderModal from '../LoaderModal';
import { UploadFileIcon } from '../Icons';

function ModalEditProfile({ profileData, changeIsOpen }) {
	const [values, setValues] = useState({
		celular: profileData.tel,
		foto: profileData.foto,
		localidad: profileData.location,
		pais: profileData.pais,
	});

	const [errors, setErrors] = useState(null);
	const [toastOpen, setToastOpen] = useState(false);
	const [isLoading, setIsloading] = useState(false);

	const { getAccessToken, getUserId } = useAuth();

	const handleChange = e => {
		const { name, value } = e.target;

		if (name === 'celular') {
			const numbersOnly = /^[0-9]*$/;
			if (numbersOnly.test(value) && value.length <= 18) {
				setValues({ ...values, [name]: value });
			}
		} else {
			setValues({ ...values, [name]: value });
		}
	};

	const handleChangeFile = file => {
		setValues({ ...values, foto: file[0] });
	};

	const handleSubmit = async e => {
		e.preventDefault();

		setIsloading(true);

		const token = getAccessToken();
		const userId = getUserId();

		const headers = {
			authorization: token,
			'Content-Type': 'multipart/form-data',
		};

		const responseRequest = await fetchingForm(
			`${import.meta.env.VITE_HOST}users/edit/${userId}`,
			'PUT',
			values,
			headers,
		);

		if (!responseRequest.ok) {
			setErrors(responseRequest.msg);
			setToastOpen(true);
			setIsloading(false);
		} else {
			setToastOpen(false);
			setIsloading(false);
			window.location.reload();
		}
	};

	return (
		<div className={styles.container}>
			{isLoading && (
				<LoaderModal content='Guardando los datos. Espere unos segundos...' />
			)}
			<form className={styles.form} onSubmit={handleSubmit}>
				{toastOpen && (
					<ToastNotificationError
						errors={errors}
						toastOpen={toastOpen}
						setToastOpen={setToastOpen}
					/>
				)}
				<div className={styles.closeicon} onClick={e => changeIsOpen()}>
					<Xicon width='50' height='50' />
				</div>
				<p className={styles.title}>Editar datos de perfil</p>
				<div className={styles.inputContainer}>
					<p className={styles.inputTitle}>Número de teléfono</p>
					<Input
						name='celular'
						value={values.celular}
						handleChange={handleChange}
						type='tel'
					/>
				</div>
				<div className={styles.inputContainer}>
					<p className={styles.inputTitle}>País</p>
					<Input
						name='pais'
						value={values.pais}
						handleChange={handleChange}
						type='text'
					/>
				</div>
				<div className={styles.inputContainer}>
					<p className={styles.inputTitle}>Localidad</p>
					<Input
						name='localidad'
						value={values.localidad}
						handleChange={handleChange}
						type='text'
					/>
				</div>
				<div className={styles.inputContainer}>
					<p className={styles.inputTitle}>Imagen de perfil</p>
					<FileUpload
						title='Arrastra una imagen o haz click para subirla'
						titleSize='base'
						subtitle='La imagen debe tener menos de 5MB'
						subtitleSize='base'
						handleChangeFile={handleChangeFile}
						options={{
							multiple: false,
							accept: {
								'image/*': [],
							},
							maxSize: 5242880,
						}}
					>
						<UploadFileIcon />
					</FileUpload>
				</div>
				<div className={styles.inputContainer}>
					<Submit text='Guardar datos' type={3} />
				</div>
			</form>
		</div>
	);
}

export default ModalEditProfile;
