import styles from './styles.module.css';
import Accordion from '../Accordion';
import InputQuoter from '../InputQuoter';
import { useDashboardFormContext } from '../../context/DashboardFormProvider';
import { useState, useEffect } from 'react';

function FamilyForm() {
	const [partner, setPartner] = useState({
		nombreApellidoPareja: '' || null,
		ocupacionPareja: '' || null,
		fecha_nacimiento_pareja: '' || null,
	});

	const [children, setChildren] = useState([
		{
			nombreApellidoHijo: '' || null,
			fecha_nacimiento_hijo: '' || null,
		},
		{
			nombreApellidoHijo: '' || null,
			fecha_nacimiento_hijo: '' || null,
		},
		{
			nombreApellidoHijo: '' || null,
			fecha_nacimiento_hijo: '' || null,
		},
		{
			nombreApellidoHijo: '' || null,
			fecha_nacimiento_hijo: '' || null,
		},
	]);

	const handleInputChangeChildren = (index, field, value) => {
		const updatedChildren = [...children];
		updatedChildren[index][field] = value;
		setChildren(updatedChildren);
	};

	const { handleChangeInput, registerMultipleInputs, values } =
		useDashboardFormContext();

	useEffect(() => {
		registerMultipleInputs(partner, 'conyuge');
		registerMultipleInputs(children, 'datos_hijos');
	}, [partner, children]);

	return (
		<Accordion title='Familia'>
			<div className={styles.rowFamily1}>
				<p className={styles.title}>
					Familia <span>¿El cliente tiene pareja?</span>
				</p>
				<div>
					<InputQuoter
						name='pareja'
						value={values.pareja}
						typeInput='radio'
						isCheckBoxOrRadio={true}
						CheckboxOrRadioFields={[
							{ label: 'Sí', typeOf: true, labelId: 'parejaSi' },
							{ label: 'No', typeOf: false, labelId: 'parejaNo' },
						]}
						handleChange={handleChangeInput}
					/>
				</div>
			</div>
			{JSON.parse(values.pareja) && (
				<div className={styles.rowFamily2}>
					<div>
						<p className={styles.title}>
							Nombre completo del conyugé del cliente:
						</p>
						<InputQuoter
							name='nombreApellidoPareja'
							value={partner.nombreApellidoPareja}
							handleChange={e =>
								setPartner({ ...partner, [e.target.name]: e.target.value })
							}
							typeInput='text'
							placeholder='Nombre completo del conyuge'
						/>
					</div>
					<div>
						<p className={styles.title}>Ocupación</p>
						<InputQuoter
							name='ocupacionPareja'
							value={partner.ocupacionPareja}
							handleChange={e =>
								setPartner({ ...partner, [e.target.name]: e.target.value })
							}
							typeInput='text'
							placeholder='Ocupación'
						/>
					</div>
					<div>
						<p className={styles.title}>Fecha de nacimiento del conyugé</p>
						<InputQuoter
							name='fecha_nacimiento_pareja'
							value={partner.fecha_nacimiento_pareja}
							handleChange={e =>
								setPartner({ ...partner, [e.target.name]: e.target.value })
							}
							typeInput='date'
							fieldSiz
						/>
					</div>
				</div>
			)}
			<div className={styles.rowFamily3}>
				<p className={styles.title}>
					Hijos <span>¿El cliente tiene hijos?</span>
				</p>
				<InputQuoter
					name='hijos'
					value={values.hijos}
					handleChange={handleChangeInput}
					typeInput='radio'
					isCheckBoxOrRadio={true}
					CheckboxOrRadioFields={[
						{ label: 'Sí', typeOf: true, labelId: 'hijosSi' },
						{ label: 'No', typeOf: false, labelId: 'hijosNo' },
					]}
				/>
			</div>
			{JSON.parse(values.hijos) && (
				<div className={styles.rowFamily4}>
					<div className={styles.inputsChildrenContainer}>
						<div>
							<p className={styles.title}>
								Nombre completo de hijo del cliente
							</p>
							<InputQuoter
								name='nombreApellidoHijo'
								value={children[0]?.nombreApellidoHijo}
								handleChange={e =>
									handleInputChangeChildren(
										0,
										'nombreApellidoHijo',
										e.target.value,
									)
								}
								typeInput='text'
								placeholder='Nombre completo'
							/>
						</div>
						<div>
							<p className={styles.title}>Fecha nacimiento del hijo</p>
							<InputQuoter
								name='fecha_nacimiento_hijo'
								value={children[0]?.fecha_nacimiento_hijo}
								handleChange={e =>
									handleInputChangeChildren(
										0,
										'fecha_nacimiento_hijo',
										e.target.value,
									)
								}
								typeInput='date'
								placeholder='Día'
							/>
						</div>
					</div>
					<div className={styles.inputsChildrenContainer}>
						<div>
							<p className={styles.title}>
								Nombre completo de hijo del cliente
							</p>
							<InputQuoter
								name='nombreApellidoHijo'
								value={children[1]?.nombreApellidoHijo}
								handleChange={e =>
									handleInputChangeChildren(
										1,
										'nombreApellidoHijo',
										e.target.value,
									)
								}
								typeInput='text'
								placeholder='Nombre completo'
							/>
						</div>
						<div>
							<p className={styles.title}>Fecha nacimiento del hijo</p>
							<InputQuoter
								name='fecha_nacimiento_hijo'
								value={children[1]?.fecha_nacimiento_hijo}
								handleChange={e =>
									handleInputChangeChildren(
										1,
										'fecha_nacimiento_hijo',
										e.target.value,
									)
								}
								typeInput='date'
								placeholder='Día'
							/>
						</div>
					</div>
					<div className={styles.inputsChildrenContainer}>
						<div>
							<p className={styles.title}>
								Nombre completo de hijo del cliente
							</p>
							<InputQuoter
								name='nombreApellidoHijo'
								value={children[2]?.nombreApellidoHijo}
								handleChange={e =>
									handleInputChangeChildren(
										2,
										'nombreApellidoHijo',
										e.target.value,
									)
								}
								typeInput='text'
								placeholder='Nombre completo'
							/>
						</div>
						<div>
							<p className={styles.title}>Fecha nacimiento del hijo</p>
							<InputQuoter
								name='fecha_nacimiento_hijo'
								value={children[2]?.fecha_nacimiento_hijo}
								handleChange={e =>
									handleInputChangeChildren(
										2,
										'fecha_nacimiento_hijo',
										e.target.value,
									)
								}
								typeInput='date'
								placeholder='Día'
							/>
						</div>
					</div>
					<div className={styles.inputsChildrenContainer}>
						<div>
							<p className={styles.title}>
								Nombre completo de hijo del cliente
							</p>
							<InputQuoter
								name='nombreApellidoHijo'
								value={children[3]?.nombreApellidoHijo}
								handleChange={e =>
									handleInputChangeChildren(
										3,
										'nombreApellidoHijo',
										e.target.value,
									)
								}
								typeInput='text'
								placeholder='Nombre completo'
							/>
						</div>
						<div>
							<p className={styles.title}>Fecha nacimiento del hijo</p>
							<InputQuoter
								name='fecha_nacimiento_hijo'
								value={children[3]?.fecha_nacimiento_hijo}
								handleChange={e =>
									handleInputChangeChildren(
										3,
										'fecha_nacimiento_hijo',
										e.target.value,
									)
								}
								typeInput='date'
								placeholder='Día'
							/>
						</div>
					</div>
				</div>
			)}
		</Accordion>
	);
}

export default FamilyForm;
