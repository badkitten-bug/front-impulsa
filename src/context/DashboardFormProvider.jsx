import { createContext, useContext, useState } from 'react';
import { fetchingForm } from '../utils/fetchingForm';
import { useAuth } from './AuthProvider';
import LoaderModal from '../components/LoaderModal';
import ToastNotificationError from '../components/ToastNotificationError';

const DashboardFormContext = createContext();

export const useDashboardFormContext = () => {
	return useContext(DashboardFormContext);
};

function DashboardFormProvaider({ children }) {
	const { getUserId, getAccessToken } = useAuth();

	const userId = getUserId();

	const token = getAccessToken();

	const [values, setValues] = useState({
		id_usuario: userId,
		nombreApellidoCliente: null,
		ocupacionCliente: null,
		fecha_nacimiento_cliente: null,
		pareja: null,
		id_estado_civil: null,
		recomendaciones: [],
		conyuge: [],
		hijos: null,
		datos_hijos: [],
		asegurado: null,
		tipo_seguro: null,
		datos_seguro: null,
		asegurado_pareja: null,
		tipo_seguro_pareja: null,
		datos_seguro_pareje: [],
		gasto_medico: [],
		invalidez: [],
		ahorro: null,
		retiro_pension: null,
		educacion: null,
		metas_y_objetivos: [],
		inversion_metas: '' || null,
		adecuado: null,
	});
	const [errors, setErrors] = useState(null);

	const [isLoading, setIsloading] = useState(false);
	const [toastOpen, setToastOpen] = useState(false);

	const handleChangeInput = e => {
		const { name, value } = e.target;

		setValues({ ...values, [name]: value });
	};

	const handleSubmitInput = async e => {
		e.preventDefault();

		setIsloading(true);


		const requestResponse = await fetchingForm(
			`${import.meta.env.VITE_HOST}quoter/create`,
			'POST',
			values,
			{ authorization: token },
		);

		if (!requestResponse.ok) {
			setIsloading(false);
			setErrors(requestResponse.msg);
			setToastOpen(true);
		} else {
			setIsloading(false);
		}
	};

	const registerMultipleInputs = (inputs, nameOfInput) => {
		setValues(prevState => ({ ...prevState, [nameOfInput]: inputs }));
	};

	if (isLoading) return <LoaderModal content='Enviando formulario...' />;

	return (
		<DashboardFormContext.Provider
			value={{
				handleChangeInput,
				registerMultipleInputs,
				values,
			}}
		>
			<form onSubmit={handleSubmitInput}>
				{toastOpen && (
					<ToastNotificationError
						errors={errors}
						toastOpen={toastOpen}
						setToastOpen={setToastOpen}
					/>
				)}
				{children}
			</form>
		</DashboardFormContext.Provider>
	);
}

export default DashboardFormProvaider;
