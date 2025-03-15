import styles from './styles.module.css';
import Accordion from '../Accordion';
import InputQuoter from '../InputQuoter';
import { useState, useEffect } from 'react';
import { useDashboardFormContext } from '../../context/DashboardFormProvider';

function SaveForm() {
	const [saveData, setSaveData] = useState({
		ahorro_sistemico: '' || null,
		cantidad_mensual: '' || null,
		instrumento_financiero: '' || null,
	});

	const handleSaveData = e => {
		const { name, value } = e.target;

		if (name === 'cantidad_mensual') {
			const numbersOnly = /^[0-9]*$/;
			if (numbersOnly.test(value)) {
				setSaveData({ ...saveData, [name]: value });
			}
		} else {
			setSaveData({ ...saveData, [name]: value });
		}
	};

	const { registerMultipleInputs } = useDashboardFormContext();

	useEffect(() => {
		registerMultipleInputs(saveData, 'ahorro');
	}, [saveData]);

	return (
		<Accordion title='Ahorro'>
			<div className={styles.rowSave1}>
				<p className={styles.title}>
					¿Cuenta usted con un programa de ahorro sistemático?
				</p>
				<InputQuoter
					name='ahorro_sistemico'
					value={saveData.ahorro_sistemico}
					handleChange={handleSaveData}
					typeInput='radio'
					isCheckBoxOrRadio={true}
					CheckboxOrRadioFields={[
						{ label: 'Sí', typeOf: true, labelId: 'programaAhorroSi' },
						{ label: 'No', typeOf: false, labelId: 'programaAhorroNo' },
					]}
				/>
			</div>
			{JSON.parse(saveData.ahorro_sistemico) && (
				<div className={styles.rowSave2}>
					<p className={styles.title}>¿Cuánto está ahorrando al mes?</p>
					<InputQuoter
						name='cantidad_mensual'
						value={saveData.cantidad_mensual || ''}
						handleChange={handleSaveData}
						typeInput='text'
						placeholder='$'
					/>
				</div>
			)}
			{JSON.parse(saveData.ahorro_sistemico) && (
				<div className={styles.rowSave3}>
					<p className={styles.title}>¿A través de que instrumento?</p>
					<InputQuoter
						name='instrumento_financiero'
						value={saveData.instrumento_financiero}
						handleChange={handleSaveData}
						typeInput='text'
					/>
				</div>
			)}
		</Accordion>
	);
}

export default SaveForm;
