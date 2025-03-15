import styles from './styles.module.css';
import FileUpload from '../../../../../../components/FileUpload';
import { UploadPDFIcon } from '../../../../../../components/Icons';
import Submit from '../../../../../../components/Submit';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchingForm } from '../../../../../../utils/fetchingForm';
import { useAuth } from '../../../../../../context/AuthProvider';
import { downloadFiles } from '../../../../../../utils/donwloadFiles';
import DownloadModal from '../../../../../../components/DownloadModal';
import LoaderModal from '../../../../../../components/LoaderModal';
import ToastNotificationError from '../../../../../../components/ToastNotificationError';

function ChasisDetailDual() {
	// En la ruta ':id/type/imaginaser/payment/:payment', "imaginaser" es parte fija
	const { id, payment } = useParams();
	const navigate = useNavigate();
	
	// El tipo siempre es "imaginaser" para este componente
	const type = 'imaginaser';

	// Depuración de parámetros
	useEffect(() => {
		console.log("Parámetros de URL:", { id, type, payment });
		console.log("URL actual:", window.location.pathname);
	}, [id, payment]);

	const { getAccessToken } = useAuth();

	const [values, setValues] = useState({
		fileImagina: null,
		filePension: null,
	});

	const [url, setUrl] = useState(null);
	const [activeBtnImagina, setActiveBtnImagina] = useState(0);
	const [activeBtnPension, setActiveBtnPension] = useState(0);
	const [isOpen, setIsOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState(null);
	const [toastOpen, setToastOpen] = useState(null);

	const handleChangeFileImagina = file => {
		setValues({ ...values, fileImagina: file[0] });
		setActiveBtnImagina(1);
	};

	const handleChangeFilePension = file => {
		setValues({ ...values, filePension: file[0] });
		setActiveBtnPension(1);
	};

	// Función para determinar el file_type según los parámetros
	const determineFileType = () => {
		// ID 3: Retiro y Pensión - Imagina Ser (IS5, IS10, IS15)
		// Como type siempre es 'imaginaser' en este componente, la comprobación es más sencilla
		if (id === '3') {
			if (payment === '5') {
				return 'IS5';
			} else if (payment === '10') {
				return 'IS10';
			} else if (payment === '15') {
				return 'IS15';
			} else if (payment === 'todos') {
				return 'IS';
			}
		}
		
		// ID 6: Inversiones - ISPU-Dual
		if (id === '6') {
			return 'ISPU-Dual'; // Nuevo tipo para inversiones con carga dual
		}
		
		// Valor por defecto
		return '';
	};

	const handleSubmit = async e => {
		e.preventDefault();

		// Verificar que ambos archivos están cargados
		if (activeBtnImagina === 0 || activeBtnPension === 0) {
			setErrors('Debes cargar ambos archivos PDF.');
			setToastOpen(true);
			return;
		}

		setLoading(true);
		const token = getAccessToken();
		const chasisNumber = id;
		
		// Obtener el file_type según los parámetros (ahora type siempre es 'imaginaser')
		const fileType = determineFileType();
		
		// Construir URL corregida - usando el valor fijo de type
		const apiUrl = `${import.meta.env.VITE_HOST}chasis/${chasisNumber}/type/${type}/payment/${payment}/${fileType}`;
		
		console.log("URL de la petición:", apiUrl); // Log para depuración

		// Crear FormData con ambos archivos
		const formData = new FormData();
		formData.append('fileImagina', values.fileImagina);
		formData.append('filePension', values.filePension);

		const headers = {
			authorization: token,
			'Content-Type': 'multipart/form-data',
		};

		try {
			const requestResponse = await fetchingForm(
				apiUrl,
				'POST',
				formData,
				headers,
				'blob',
			);

			if (!requestResponse.ok) {
				setErrors(requestResponse.msg);
				setToastOpen(true);
				setLoading(false);
				setIsOpen(false);
			} else {
				const url = downloadFiles(requestResponse.data);
				setUrl(url);
				setIsOpen(true);
				setLoading(false);
				setActiveBtnImagina(0);
				setActiveBtnPension(0);
			}
		} catch (error) {
			setErrors(error.message || 'Error al procesar la solicitud');
			setToastOpen(true);
			setLoading(false);
		}
	};

	if (loading) return <LoaderModal content='Cargando tus chasis' />;

	return (
		<div className={styles.dualContainer}>
			{toastOpen && (
				<ToastNotificationError
					errors={errors}
					setToastOpen={setToastOpen}
					toastOpen={toastOpen}
				/>
			)}
			
			<h1 className={styles.title}>IMAGINA SER - {payment === 'todos' ? 'Todos los pagos' : `${payment} pagos`}</h1>
			
			<button className={styles.backButton} onClick={() => navigate(`/dashboard/chasis/${id}/type/${type}`)}>
				← Volver
			</button>
			
			<form className={styles.dualForm} onSubmit={handleSubmit}>
				<div className={styles.sideContainer}>
					<h2 className={styles.sideTitle}>Imagina Ser</h2>
					<FileUpload
						title='Arrastra y suelta un archivo'
						titleSize='lg'
						subtitle='Sube el PDF de Imagina Ser (menos de 17MB)'
						subtitleSize='base'
						bgHidden={true}
						handleChangeFile={handleChangeFileImagina}
						isImage={false}
						options={{
							multiple: false,
							accept: {
								'application/pdf': [],
							},
							maxSize: 17825792,
						}}
						titleColor="var(--primary-color)"
						subtitleColor="var(--primary-color)"
					>
						<div className={styles.pdfIconContainer}>
							<UploadPDFIcon color="var(--primary-color)" />
						</div>
					</FileUpload>
					<div className={styles.status}>
						{activeBtnImagina ? 'Archivo listo ✓' : 'Esperando archivo...'}
					</div>
				</div>
				
				<div className={styles.divider}></div>
				
				<div className={styles.sideContainer}>
					<h2 className={styles.sideTitle}>Pensiones</h2>
					<FileUpload
						title='Arrastra y suelta un archivo'
						titleSize='lg'
						subtitle='Sube el PDF de Pensiones (menos de 17MB)'
						subtitleSize='base'
						bgHidden={true}
						handleChangeFile={handleChangeFilePension}
						isImage={false}
						options={{
							multiple: false,
							accept: {
								'application/pdf': [],
							},
							maxSize: 17825792,
						}}
						titleColor="var(--primary-color)"
						subtitleColor="var(--primary-color)"
					>
						<div className={styles.pdfIconContainer}>
							<UploadPDFIcon color="var(--primary-color)" />
						</div>
					</FileUpload>
					<div className={styles.status}>
						{activeBtnPension ? 'Archivo listo ✓' : 'Esperando archivo...'}
					</div>
				</div>
				
				<div className={styles.submitContainer}>
					<Submit text='Procesar ambos PDFs' type={activeBtnImagina && activeBtnPension ? 1 : 0} />
				</div>
			</form>
			
			{isOpen && (
				<DownloadModal
					url={url}
					nameFile='chasis.xlsx'
					text='¡Tu chasis ya esta listo!'
					isOpen={isOpen}
					setIsOpen={setIsOpen}
				/>
			)}
		</div>
	);
}

export default ChasisDetailDual; 