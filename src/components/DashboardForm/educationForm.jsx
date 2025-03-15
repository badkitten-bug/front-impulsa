import styles from './styles.module.css';
import Accordion from '../Accordion';
import InputQuoter from '../InputQuoter';
import { useState, useEffect } from 'react';
import { useDashboardFormContext } from '../../context/DashboardFormProvider';

function EducationForm() {
	const [educationData, setEducationData] = useState({
		ahorros_educacion: '' || null,
		universidad: '' || null,
		ahorro_mensual: '' || null,
		instrumento_ahorro: '' || null,
		monto_acumulado: '' || null,
		capacidad_ahorro: '' || null,
	});

	const handleEducationData = e => {
		const { name, value } = e.target;

		if (
			name === 'ahorro_mensual' ||
			name === 'monto_acumulado' ||
			name === 'capacidad_ahorro'
		) {
			const numbersOnly = /^[0-9]*$/;
			if (numbersOnly.test(value)) {
				setEducationData({ ...educationData, [name]: value });
			}
		} else {
			setEducationData({ ...educationData, [name]: value });
		}
	};

	const { registerMultipleInputs } = useDashboardFormContext();

	useEffect(() => {
		registerMultipleInputs(educationData, 'educacion');
	}, [educationData]);

	return (
		<Accordion title='Educación'>
			<div className={styles.rowEducation1}>
				<p className={styles.title}>
					¿Tiene ahorros destinados que le ayudarán a cubrir la educación
					universitaria de sus hijos?
				</p>
				<InputQuoter
					name='ahorros_educacion'
					value={educationData.ahorros_educacion}
					handleChange={e =>
						setEducationData({
							...educationData,
							[e.target.name]: e.target.value,
						})
					}
					typeInput='radio'
					isCheckBoxOrRadio={true}
					CheckboxOrRadioFields={[
						{ label: 'Sí', typeOf: true, labelId: 'ahorrosEducacionSi' },
						{ label: 'No', typeOf: false, labelId: 'ahorrosEducacionNo' },
					]}
				/>
			</div>
			{JSON.parse(educationData.ahorros_educacion) && (
				<div className={styles.rowEducation2}>
					<div>
						<p className={styles.title}>¿En que universidad ha pensado?</p>
						<InputQuoter
							name='universidad'
							value={educationData.universidad}
							handleChange={handleEducationData}
							typeInput='text'
						/>
					</div>
					<div>
						<p className={styles.title}>
							¿Cuánto está ahorrando mensualmente para la educación de sus hijo?
						</p>
						<InputQuoter
							name='ahorro_mensual'
							value={educationData.ahorro_mensual || ''}
							handleChange={handleEducationData}
							typeInput='text'
							placeholder='$'
						/>
					</div>
					<div>
						<p className={styles.title}>¿A través de que instrumento?</p>
						<InputQuoter
							name='instrumento_ahorro'
							value={educationData.instrumento_ahorro}
							handleChange={handleEducationData}
							typeInput='text'
						/>
					</div>
					<div>
						<p className={styles.title}>¿Cuánto ha acumulado?</p>
						<InputQuoter
							name='monto_acumulado'
							value={educationData.monto_acumulado || ''}
							handleChange={handleEducationData}
							typeInput='text'
							placeholder='$'
						/>
					</div>
					<div>
						<p className={styles.title}>
							Hoy por hoy, ¿Cuánto más podría ahorrar mensualmente para la
							universidad?
						</p>
						<InputQuoter
							name='capacidad_ahorro'
							value={educationData.capacidad_ahorro}
							handleChange={handleEducationData}
							typeInput='text'
						/>
					</div>
				</div>
			)}
		</Accordion>
	);
}

export default EducationForm;
