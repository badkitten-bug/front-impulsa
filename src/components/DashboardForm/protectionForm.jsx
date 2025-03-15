import styles from './styles.module.css';
import Accordion from '../Accordion';
import InputQuoter from '../InputQuoter';
import { useDashboardFormContext } from '../../context/DashboardFormProvider';
import { useState, useEffect } from 'react';

function ProtectionForm() {
	const { handleChangeInput, registerMultipleInputs, values } =
		useDashboardFormContext();

	const [personalInsurance, setPersonalInsurance] = useState({
		monto_asegurado: '' || null,
		prima: '' || null,
		cantidad: '' || null,
		company: '' || null,
	});

	const handlePersonalInsurance = e => {
		const { name, value } = e.target;

		if (name === 'monto_asegurado' || name === 'prima') {
			const numbersOnly = /^[0-9]*$/;
			if (numbersOnly.test(value)) {
				setPersonalInsurance({ ...personalInsurance, [name]: value });
			}
		} else {
			setPersonalInsurance({ ...personalInsurance, [name]: value });
		}
	};

	const [patherInsurance, setPatherInsurance] = useState({
		monto_asegurado_pareja: '' || null,
		prima_pareja: '' || null,
		cantidad_pareja: '' || null,
		company_pareja: '' || null,
	});

	const handlePatherInsurance = e => {
		const { name, value } = e.target;

		if (name === 'monto_asegurado_pareja' || name === 'prima_pareja') {
			const numbersOnly = /^[0-9]*$/;
			if (numbersOnly.test(value)) {
				setPatherInsurance({ ...patherInsurance, [name]: value });
			}
		} else {
			setPatherInsurance({ ...patherInsurance, [name]: value });
		}
	};

	const [personalLifeInsurance, setPersonalLifeInsurance] = useState({
		seguro_gastos: '' || null,
		tipo_seguro_medico: '' || null,
		cantidad: '' || null,
		company_medico: '' || null,
		enfermedad: '' || null,
	});

	const handlePersonalLifeInsurance = e => {
		const { name, value } = e.target;

		if (name === 'cantidad') {
			const numbersOnly = /^[0-9]*$/;
			if (numbersOnly.test(value)) {
				setPersonalLifeInsurance({ ...personalLifeInsurance, [name]: value });
			}
		} else {
			setPersonalLifeInsurance({ ...personalLifeInsurance, [name]: value });
		}
	};

	const [disapplied, setDisapplied] = useState({
		percepcion_ingreso: '' || null,
		modo_ingreso: '' || null,
		tiempo_alcanze_economico: '' || null,
		dependencia: '' || null,
	});

	useEffect(() => {
		registerMultipleInputs(personalInsurance, 'datos_seguro');
		registerMultipleInputs(patherInsurance, 'datos_seguro_pareja');
		registerMultipleInputs(personalLifeInsurance, 'gasto_medico');
		registerMultipleInputs(disapplied, 'invalidez');
	}, [personalInsurance, patherInsurance, personalLifeInsurance, disapplied]);

	return (
		<Accordion title='Protección'>
			<div className={styles.rowProtection1}>
				<p className={styles.title}>
					Vida <span> ¿Tiene usted seguro de vida?</span>
				</p>
				<div>
					<InputQuoter
						name='asegurado'
						value={values.asegurado}
						handleChange={handleChangeInput}
						typeInput='radio'
						isCheckBoxOrRadio={true}
						CheckboxOrRadioFields={[
							{ label: 'Sí', typeOf: true, labelId: 'aseguradoSi' },
							{ label: 'No', typeOf: false, labelId: 'aseguradoNo' },
						]}
					/>
				</div>
			</div>
			{JSON.parse(values.asegurado) && (
				<div className={styles.rowProtection2}>
					<div className={styles.inputsRowProtection1}>
						<p className={styles.title}>En caso afirmativo ¿De que tipo?</p>
						<InputQuoter
							name='tipo_seguro'
							value={values.tipo_seguro}
							handleChange={handleChangeInput}
							typeInput='radio'
							isCheckBoxOrRadio={true}
							CheckboxOrRadioFields={[
								{
									label: 'Personal',
									typeOf: '0',
									labelId: 'tipoSeguroPersonal',
								},
								{
									label: 'Empresa',
									typeOf: '1',
									labelId: 'tipoSeguroEmpresa',
								},
							]}
						/>
					</div>
					<div className={styles.inputRowProtection2}>
						<div>
							<p className={styles.title}>
								¿Cuál es el monto de la suma asegurada?
							</p>
							<InputQuoter
								name='monto_asegurado'
								value={personalInsurance.monto_asegurado || ''}
								handleChange={handlePersonalInsurance}
								typeInput='text'
								placeholder='$'
							/>
						</div>
						<div>
							<p className={styles.title}>¿De cuanto es la prima?</p>
							<InputQuoter
								name='prima'
								value={personalInsurance.prima || ''}
								handleChange={handlePersonalInsurance}
								typeInput='text'
								placeholder='$'
							/>
						</div>
						<div>
							<p className={styles.title}>¿Por qué esa cantidad?</p>
							<InputQuoter
								name='cantidad'
								value={personalInsurance.cantidad}
								handleChange={e =>
									setPersonalInsurance({
										...personalInsurance,
										[e.target.name]: e.target.value,
									})
								}
								typeInput='text'
							/>
						</div>
						<div>
							<p className={styles.title}>¿Con que compañía lo maneja?</p>
							<InputQuoter
								name='company'
								value={personalInsurance.company}
								handleChange={e =>
									setPersonalInsurance({
										...personalInsurance,
										[e.target.name]: e.target.value,
									})
								}
								typeInput='text'
							/>
						</div>
					</div>
				</div>
			)}
			<div className={styles.rowProtection3}>
				<p className={styles.title}>
					Cónyuge <span> ¿Tiene usted seguro de vida?</span>
				</p>
				<div>
					<InputQuoter
						name='asegurado_pareja'
						value={values.asegurado_pareja}
						handleChange={handleChangeInput}
						typeInput='radio'
						isCheckBoxOrRadio={true}
						CheckboxOrRadioFields={[
							{ label: 'Sí', typeOf: true, labelId: 'conyugeAseguradoSi' },
							{ label: 'No', typeOf: false, labelId: 'conyugeAseguradoNo' },
						]}
					/>
				</div>
			</div>
			{JSON.parse(values.asegurado_pareja) && (
				<div className={styles.rowProtection4}>
					<div className={styles.inputsRowProtection1}>
						<p className={styles.title}>En caso afirmativo ¿De que tipo?</p>
						<InputQuoter
							name='tipo_seguro_pareja'
							value={values.tipo_seguro_pareja}
							handleChange={handleChangeInput}
							typeInput='radio'
							isCheckBoxOrRadio={true}
							CheckboxOrRadioFields={[
								{
									label: 'Personal',
									typeOf: '0',
									labelId: 'conyugeTipoSeguroPersonal',
								},
								{
									label: 'Empresa',
									typeOf: '1',
									labelId: 'conyugeTipoSeguroEmpresa',
								},
							]}
						/>
					</div>
					<div className={styles.inputRowProtection2}>
						<div>
							<p className={styles.title}>
								¿Cuál es el monto de la suma asegurada?
							</p>
							<InputQuoter
								name='monto_asegurado_pareja'
								value={patherInsurance.monto_asegurado_pareja || ''}
								handleChange={handlePatherInsurance}
								typeInput='text'
								placeholder='$'
							/>
						</div>
						<div>
							<p className={styles.title}>¿De cuanto es la prima?</p>
							<InputQuoter
								name='prima_pareja'
								value={patherInsurance.prima_pareja || ''}
								handleChange={handlePatherInsurance}
								typeInput='text'
								placeholder='$'
							/>
						</div>
						<div>
							<p className={styles.title}>¿Por qué esa cantidad?</p>
							<InputQuoter
								name='cantidad_pareja'
								value={patherInsurance.cantidad_pareja}
								handleChange={e =>
									setPatherInsurance({
										...patherInsurance,
										[e.target.name]: e.target.value,
									})
								}
								typeInput='text'
							/>
						</div>
						<div>
							<p className={styles.title}>¿Con que compañía lo maneja?</p>
							<InputQuoter
								name='company_pareja'
								value={patherInsurance.company_pareja}
								handleChange={e =>
									setPatherInsurance({
										...patherInsurance,
										[e.target.name]: e.target.value,
									})
								}
								typeInput='text'
							/>
						</div>
					</div>
				</div>
			)}
			{JSON.parse(values.asegurado_pareja) && (
				<div className={styles.rowProtection5}>
					<div>
						<p className={styles.titleLarge}>Tomando en cuenta lo anterior</p>
						<div>
							<p className={styles.title}>
								¿Qué ingreso mensual necesitaría su familia para vivir si usted
								o su cónyuge llegaran a faltar?
							</p>
							<InputQuoter
								name='cantidad'
								value={personalLifeInsurance.cantidad || ''}
								handleChange={handlePersonalLifeInsurance}
								typeInput='text'
								placeholder='$'
							/>
						</div>
					</div>
				</div>
			)}
			<div className={styles.rowProtection6}>
				<p className={styles.titleLarge}>Gastos médicos</p>
				<div>
					<div>
						<p className={styles.titleSmall}>
							¿Tiene seguros de gastos médicos?
						</p>
						<InputQuoter
							name='seguro_gastos'
							value={personalLifeInsurance.seguro_gastos}
							handleChange={e =>
								setPersonalLifeInsurance({
									...personalLifeInsurance,
									[e.target.name]: e.target.value,
								})
							}
							typeInput='radio'
							isCheckBoxOrRadio={true}
							CheckboxOrRadioFields={[
								{ label: 'Sí', typeOf: true, labelId: 'seguroVidaSi' },
								{ label: 'No', typeOf: false, labelId: 'seguroVidaNo' },
							]}
						/>
					</div>
					{JSON.parse(personalLifeInsurance.seguro_gastos) && (
						<div>
							<p className={styles.titleSmall}>
								En caso afirmativo ¿De que tipo?
							</p>
							<InputQuoter
								name='tipo_seguro_medico'
								value={personalLifeInsurance.tipo_seguro_medico}
								handleChange={e =>
									setPersonalLifeInsurance({
										...personalLifeInsurance,
										[e.target.name]: e.target.value,
									})
								}
								typeInput='radio'
								isCheckBoxOrRadio={true}
								CheckboxOrRadioFields={[
									{
										label: 'Personal',
										typeOf: '0',
										labelId: 'tipoSeguroVidaPersonal',
									},
									{
										label: 'Empresa',
										typeOf: '1',
										labelId: 'tipoSeguroVidaEmpresa',
									},
								]}
							/>
						</div>
					)}

					{JSON.parse(personalLifeInsurance.seguro_gastos) && (
						<div>
							<p className={styles.titleSmall}>
								¿Considera que es adecuado a sus necesidades?
							</p>
							<InputQuoter
								name='adecuado'
								value={values.adecuado}
								handleChange={handleChangeInput}
								typeInput='radio'
								isCheckBoxOrRadio={true}
								CheckboxOrRadioFields={[
									{
										label: 'Sí',
										typeOf: true,
										labelId: 'adecuadoSi',
									},
									{
										label: 'No',
										typeOf: false,
										labelId: 'adecuadoNo',
									},
								]}
							/>
						</div>
					)}
					{JSON.parse(personalLifeInsurance.seguro_gastos) && (
						<div className={styles.containerInputHealth}>
							<div>
								<p className={styles.title}>¿Con que compañía lo maneja?</p>
								<InputQuoter
									name='company_medico'
									value={personalLifeInsurance.company_medico}
									handleChange={e =>
										setPersonalLifeInsurance({
											...personalLifeInsurance,
											[e.target.name]: e.target.value,
										})
									}
									typeInput='text'
								/>
							</div>
							<div>
								<p className={styles.title}>
									¿Existe alguna enfermedad preexistente importante ya
									reclamada?
								</p>
								<InputQuoter
									name='enfermedad'
									value={personalLifeInsurance.enfermedad}
									handleChange={e =>
										setPersonalLifeInsurance({
											...personalLifeInsurance,
											[e.target.name]: e.target.value,
										})
									}
									typeInput='text'
								/>
							</div>
						</div>
					)}
				</div>
			</div>
			<div className={styles.rowProtection7}>
				<p className={styles.titleLarge}>Ingresos en caso de invalidez</p>
				<div>
					<div className={styles.containerInputHealth2}>
						<div>
							<p className={styles.titleSmall}>
								Si usted se invalidara debido a una lesión o enfermedad
								continuaría percibiendo ingresos?
							</p>
							<InputQuoter
								name='percepcion_ingreso'
								value={disapplied.percepcion_ingreso}
								handleChange={e =>
									setDisapplied({
										...disapplied,
										[e.target.name]: e.target.value,
									})
								}
								typeInput='radio'
								isCheckBoxOrRadio={true}
								CheckboxOrRadioFields={[
									{ label: 'Sí', typeOf: true, labelId: 'percepcionSi' },
									{ label: 'No', typeOf: false, labelId: 'percepcionNo' },
								]}
							/>
						</div>
						{JSON.parse(disapplied.percepcion_ingreso) && (
							<div>
								<p className={styles.titleSmall}>En caso afirmativo ¿Cómo?</p>
								<InputQuoter
									name='modo_ingreso'
									value={disapplied.modo_ingreso}
									handleChange={e =>
										setDisapplied({
											...disapplied,
											[e.target.name]: e.target.value,
										})
									}
									typeInput='text'
								/>
							</div>
						)}
						{JSON.parse(disapplied.percepcion_ingreso) && (
							<div>
								<p className={styles.titleSmall}>
									Si se invalidara ¿Cuánto tiempo podría vivir con sus ahorros e
									inversiones actuales?
								</p>
								<InputQuoter
									name='tiempo_alcanze_economico'
									value={disapplied.tiempo_alcanze_economico}
									handleChange={e =>
										setDisapplied({
											...disapplied,
											[e.target.name]: e.target.value,
										})
									}
									typeInput='text'
								/>
							</div>
						)}
						{JSON.parse(disapplied.percepcion_ingreso) && (
							<div>
								<p className={styles.titleSmall}>
									¿Tendría usted que depender de alguien?
								</p>
								<InputQuoter
									name='dependencia'
									value={disapplied.dependencia}
									handleChange={e =>
										setDisapplied({
											...disapplied,
											[e.target.name]: e.target.value,
										})
									}
									typeInput='radio'
									isCheckBoxOrRadio={true}
									CheckboxOrRadioFields={[
										{ label: 'Sí', typeOf: true, labelId: 'dependenciaSi' },
										{ label: 'No', typeOf: false, labelId: 'dependenciaNo' },
									]}
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		</Accordion>
	);
}

export default ProtectionForm;
