import styles from './styles.module.css';
import Accordion from '../Accordion';
import InputQuoter from '../InputQuoter';
import { useState, useEffect } from 'react';
import { useDashboardFormContext } from '../../context/DashboardFormProvider';

function RetirementForm() {
	const [retirementData, setRetirementdata] = useState({
		edad_retiro: '' || null,
		plan_retiro: '' || null,
		tipo_plan: '' || null,
		plan_retiro_pareja: '' || null,
		tipo_plan_pareja: null,
		pago_seguro_social: '' || null,
		pago_seguro_social_pareja: '' || null,
		pension: '' || null,
		ingresos_retirado: '' || null,
	});

	const handleRetirementForm = e => {
		const { name, value } = e.target;

		if (name === 'edad_retiro' || name === 'ingresos_retirado') {
			const numbersOnly = /^[0-9]*$/;
			if (numbersOnly.test(value)) {
				setRetirementdata({ ...retirementData, [name]: value });
			}
		} else {
			setRetirementdata({ ...retirementData, [name]: value });
		}
	};

	const { registerMultipleInputs } = useDashboardFormContext();

	useEffect(() => {
		registerMultipleInputs(retirementData, 'retiro_pension');
	}, [retirementData]);

	return (
		<Accordion title='Retiro y Pensión'>
			<div className={styles.rowRetirement1}>
				<p className={styles.title}>¿A qué edad le gustaría retirarse?</p>
				<InputQuoter
					name='edad_retiro'
					value={retirementData.edad_retiro}
					handleChange={handleRetirementForm}
					typeInput='text'
				/>
			</div>
			<div className={styles.rowRetirement2}>
				<div>
					<p className={styles.titleSmall}>
						¿Cuenta usted con algún plan de retiro?
					</p>
					<InputQuoter
						name='plan_retiro'
						value={retirementData.plan_retiro}
						handleChange={handleRetirementForm}
						typeInput='radio'
						isCheckBoxOrRadio={true}
						CheckboxOrRadioFields={[
							{ label: 'Sí', typeOf: true, labelId: 'planRetiroSi' },
							{ label: 'No', typeOf: false, labelId: 'planRetiroNo' },
						]}
					/>
				</div>
				{JSON.parse(retirementData.plan_retiro) && (
					<div>
						<p className={styles.titleSmall}>
							En caso afirmativo ¿De que tipo?
						</p>
						<InputQuoter
							name='tipo_plan'
							value={retirementData.tipo_plan}
							handleChange={handleRetirementForm}
							typeInput='radio'
							isCheckBoxOrRadio={true}
							CheckboxOrRadioFields={[
								{
									label: 'Personal',
									typeOf: '0',
									labelId: 'tipoPlanRetiroPersonal',
								},
								{
									label: 'Empresa',
									typeOf: '1',
									labelId: 'tipoPlanRetiroEmpresa',
								},
							]}
						/>
					</div>
				)}

				<div>
					<p className={styles.titleSmall}>
						¿Cuenta su cónyuge con algún plan de retiro?
					</p>
					<InputQuoter
						name='plan_retiro_pareja'
						value={retirementData.plan_retiro_pareja}
						handleChange={handleRetirementForm}
						typeInput='radio'
						isCheckBoxOrRadio={true}
						CheckboxOrRadioFields={[
							{ label: 'Sí', typeOf: true, labelId: 'planRetiroParejaSi' },
							{ label: 'No', typeOf: false, labelId: 'planRetiroParejaNo' },
						]}
					/>
				</div>
				{JSON.parse(retirementData.plan_retiro_pareja) && (
					<div>
						<p className={styles.titleSmall}>
							En caso afirmativo ¿De que tipo?
						</p>
						<InputQuoter
							name='tipo_plan_pareja'
							value={retirementData.tipo_plan_pareja}
							handleChange={handleRetirementForm}
							typeInput='radio'
							isCheckBoxOrRadio={true}
							CheckboxOrRadioFields={[
								{
									label: 'Personal',
									typeOf: '0',
									labelId: 'tipoPlanParejaPersonal',
								},
								{
									label: 'Empresa',
									typeOf: '1',
									labelId: 'tipoPlanParejaEmpresa',
								},
							]}
						/>
					</div>
				)}
			</div>
			<div className={styles.rowRetirement3}>
				<p className={styles.titleSmall}>
					¿Durante los últimos 5 años ha cotizado ininterrumpidamente en el
					Seguro Social?
				</p>
				<div>
					<div className={styles.titleSmall}>
						<p>Cliente</p>
						<InputQuoter
							name='pago_seguro_social'
							value={retirementData.pago_seguro_social}
							handleChange={handleRetirementForm}
							typeInput='radio'
							isCheckBoxOrRadio={true}
							CheckboxOrRadioFields={[
								{ label: 'Sí', typeOf: true, labelId: 'pagoSeguroSocialSi' },
								{ label: 'No', typeOf: false, labelId: 'pagoSeguroSocialNo' },
							]}
						/>
					</div>
					<div className={styles.titleSmall}>
						<p>Cónyuge</p>
						<InputQuoter
							name='pago_seguro_social_pareja'
							value={retirementData.pago_seguro_social_pareja}
							handleChange={handleRetirementForm}
							typeInput='radio'
							isCheckBoxOrRadio={true}
							CheckboxOrRadioFields={[
								{
									label: 'Sí',
									typeOf: true,
									labelId: 'pagoSeguroSocialParejaSi',
								},
								{
									label: 'No',
									typeOf: false,
									labelId: 'pagoSeguroSocialParajeNo',
								},
							]}
						/>
					</div>
				</div>
			</div>
			<div className={styles.rowRetirement4}>
				<p className={styles.title}>¿Cuenta usted con algún tipo de pensión?</p>
				<InputQuoter
					name='pension'
					value={retirementData.pension}
					handleChange={handleRetirementForm}
					typeInput='radio'
					isCheckBoxOrRadio={true}
					CheckboxOrRadioFields={[
						{ label: 'Sí', typeOf: true, labelId: 'pensionSi' },
						{ label: 'No', typeOf: false, labelId: 'pensionNo' },
					]}
				/>
			</div>
			<div className={styles.rowRetirement5}>
				<p className={styles.title}>
					¿Qué ingreso mensual le gustaría recibir cuando se retire?
				</p>
				<InputQuoter
					name='ingresos_retirado'
					value={retirementData.ingresos_retirado || ''}
					handleChange={handleRetirementForm}
					typeInput='text'
					placeholder='$'
				/>
			</div>
		</Accordion>
	);
}

export default RetirementForm;
