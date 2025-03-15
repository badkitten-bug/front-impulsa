import styles from './styles.module.css';
import FileUpload from '../../../../../../components/FileUpload';
import { UploadPDFIcon } from '../../../../../../components/Icons';
import Submit from '../../../../../../components/Submit';
import Input from '../../../../../../components/Input';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { fetchingForm } from '../../../../../../utils/fetchingForm';
import { useAuth } from '../../../../../../context/AuthProvider';
import { downloadFiles } from '../../../../../../utils/donwloadFiles';
import DownloadModal from '../../../../../../components/DownloadModal';
import LoaderModal from '../../../../../../components/LoaderModal';
import ToastNotificationError from '../../../../../../components/ToastNotificationError';

function ChasisDetail() {
	const { id, year, type, payment } = useParams();

	const { getAccessToken } = useAuth();

	const [values, setValues] = useState({
		file: null,
	});

	const [url, setUrl] = useState(null);
	const [activeBtn, setActiveBtn] = useState(0);
	const [isOpen, setIsOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState(null);
	const [toastOpen, setToastOpen] = useState(null);

	const handleChangeFile = file => {
		setValues({ ...values, file: file[0] });
		setActiveBtn(1);
	};

	// Función para determinar el file_type según los parámetros
	const determineFileType = () => {
		// ID 1: Educación - SB{edad} (edad = year)
		if (id === '1' && year !== undefined) {
			return `SB${year}`;
		}
		
		// ID 2: Ahorro - O10, O20, SD10, SD20
		if (id === '2') {
			if (type === 'orvi99') {
				return payment === '10' ? 'O10' : 'O20';
			} else if (type === 'startdotal') {
				return payment === '10' ? 'SD10' : 'SD20';
			}
		}
		
		// ID 3: Retiro y Pensión - RO10, RO20, NP15, ISTP, IS5, IS10, IS15
		if (id === '3') {
			if (type === 'retirooptimo') {
				return payment === '10' ? 'RO10' : 'RO20';
			} else if (type === 'nuevaplenitud') {
				return 'NP15';
			} else if (type === 'imaginaser5') {
				return 'IS5';
			} else if (type === 'imaginaser10') {
				return 'IS10';
			} else if (type === 'imaginaser15') {
				return 'IS15';
			} else if (type === 'istpension') {
				return 'ISTP';
			} else if (type === 'orvi') {
				return payment === '10' ? 'OR10' : 'OR20';
			}
		}
		
		// ID 4: Protección - ST10, ST20
		if (id === '4') {
			if (type === 'startemporal') {
				return payment === '10' ? 'ST10' : 'ST20';
			}
		}
		
		// ID 5: Empresarial - ST10, ST20, SD10, SD20
		if (id === '5') {
			if (type === 'startemporal') {
				return payment === '10' ? 'ST10' : 'ST20';
			} else if (type === 'stardotal') {
				return payment === '10' ? 'SD10' : 'SD20';
			}
		}
		
		// ID 6: Inversiones - ISPU
		if (id === '6') {
			return 'ISPU';
		}
		
		// Valor por defecto
		return '';
	};

	const handleSubmit = async e => {
		e.preventDefault();

		if (activeBtn === 0) return;

		setLoading(true);
		const token = getAccessToken();
		const chasisNumber = id;
		let apiUrl = `${import.meta.env.VITE_HOST}chasis/${chasisNumber}`;
		
		if (year) {
			apiUrl += `/year/${year}`;
		}
		
		if (type && payment) {
			apiUrl += `/type/${type}/payment/${payment}`;
		}
		
		// Obtener el file_type según los parámetros
		const fileType = determineFileType();
		if (fileType) {
			apiUrl += `/${fileType}`;
		}

		const headers = {
			authorization: token,
			'Content-Type': 'multipart/form-data',
		};

		const requestResponse = await fetchingForm(
			apiUrl,
			'POST',
			values,
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
			setActiveBtn(0);
		}
	};

	if (loading) return <LoaderModal content='Cargando tus chasis' />;

	return (
		<form className={styles.container} onSubmit={handleSubmit}>
			{toastOpen && (
				<ToastNotificationError
					errors={errors}
					setToastOpen={setToastOpen}
					toastOpen={toastOpen}
				/>
			)}
			<FileUpload
				title='Arrastra y suelta un archivo'
				titleSize='lg'
				subtitle='El archivo debe estar en formato PDF y tener menos de 17MB'
				subtitleSize='base'
				bgHidden={true}
				handleChangeFile={handleChangeFile}
				isImage={false}
				options={{
					multiple: false,
					accept: {
						'application/pdf': [],
					},
					maxSize: 17825792,
				}}
			>
				<UploadPDFIcon />
			</FileUpload>
			<div className={styles.submit}>
				<Submit text='Subir PDF' type={activeBtn} />
			</div>
			{isOpen && (
				<DownloadModal
					url={url}
					nameFile='chasis.xlsx'
					text='¡Tu chasis ya esta listo!'
					isOpen={isOpen}
					setIsOpen={setIsOpen}
				/>
			)}
		</form>
	);
}

export default ChasisDetail;
