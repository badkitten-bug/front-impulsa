import styles from './styles.module.css';
import Accordion from '../Accordion';
import InputQuoter from '../InputQuoter';
import { useState, useEffect } from 'react';
import { useDashboardFormContext } from '../../context/DashboardFormProvider';

function Goals() {
	const [topics, setTopics] = useState([
		{ id_meta_objetivo: '0', prioridad: null },
		{ id_meta_objetivo: '1', prioridad: null },
		{ id_meta_objetivo: '2', prioridad: null },
		{ id_meta_objetivo: '3', prioridad: null },
		{ id_meta_objetivo: '4', prioridad: null },
		{ id_meta_objetivo: '5', prioridad: null },
		{ id_meta_objetivo: '6', prioridad: null },
	]);

	const [inversionMetas, setInversionMetas] = useState('' || null);

	const handleInversionMetas = e => {
		const { name, value } = e.target;

		if (name === 'inversion_metas') {
			const numbersOnly = /^[0-9]*$/;
			if (numbersOnly.test(value)) {
				setInversionMetas(value);
			}
		}
	};

	const { handleChangeInput, registerMultipleInputs, values } =
		useDashboardFormContext();

	const handleInputChangeTopics = (index, field, value) => {
		const updatedTopics = [...topics];
		updatedTopics[index][field] = value;
		setTopics(updatedTopics);
	};

	useEffect(() => {
		registerMultipleInputs(topics, 'metas_y_objetivos');
		registerMultipleInputs(inversionMetas, 'inversion_metas');
	}, [topics, inversionMetas]);

	return (
		<Accordion title='Metas y Objetivos'>
			<div className={styles.rowGoals1}>
				<p className={styles.title}>
					¿Cual de los siguientes temas es el que más te gustaría explorar o
					recibir información?
					<span>{'  (Ordene del 1 al 7 siendo el 1 el más importante)'}</span>
				</p>
				<div>
					<div>
						<p className={styles.titleSmall}> Educación de los hijos.</p>
						<InputQuoter
							name='prioridad'
							value={topics[0]?.prioridad}
							handleChange={e =>
								handleInputChangeTopics(0, 'prioridad', e.target.value)
							}
							isSelectedInput={true}
							optionFields={[
								{ option: '1', typeof: '1' },
								{ option: '2', typeof: '2' },
								{ option: '3', typeof: '3' },
								{ option: '4', typeof: '4' },
								{ option: '5', typeof: '5' },
								{ option: '6', typeof: '6' },
								{ option: '7', typeof: '7' },
							]}
							placeholder='Prioridad'
							fieldSize='base'
						/>
					</div>
					<div>
						<p className={styles.titleSmall}>
							Ahorro personal, adolescentes o ahorro para cónyuge.
						</p>
						<InputQuoter
							name='prioridad'
							value={topics[1]?.prioridad}
							handleChange={e =>
								handleInputChangeTopics(1, 'prioridad', e.target.value)
							}
							isSelectedInput={true}
							optionFields={[
								{ option: '1', typeof: '1' },
								{ option: '2', typeof: '2' },
								{ option: '3', typeof: '3' },
								{ option: '4', typeof: '4' },
								{ option: '5', typeof: '5' },
								{ option: '6', typeof: '6' },
								{ option: '7', typeof: '7' },
							]}
							placeholder='Prioridad'
							fieldSize='base'
						/>
					</div>
					<div>
						<p className={styles.titleSmall}> Retiro y pensión.</p>
						<InputQuoter
							name='prioridad'
							value={topics[2]?.prioridad}
							handleChange={e =>
								handleInputChangeTopics(2, 'prioridad', e.target.value)
							}
							isSelectedInput={true}
							optionFields={[
								{ option: '1', typeof: '1' },
								{ option: '2', typeof: '2' },
								{ option: '3', typeof: '3' },
								{ option: '4', typeof: '4' },
								{ option: '5', typeof: '5' },
								{ option: '6', typeof: '6' },
								{ option: '7', typeof: '7' },
							]}
							placeholder='Prioridad'
							fieldSize='base'
						/>
					</div>
					<div>
						<p className={styles.titleSmall}> Protección con seguro de vida.</p>
						<InputQuoter
							name='prioridad'
							value={topics[3]?.prioridad}
							handleChange={e =>
								handleInputChangeTopics(3, 'prioridad', e.target.value)
							}
							isSelectedInput={true}
							optionFields={[
								{ option: '1', typeof: '1' },
								{ option: '2', typeof: '2' },
								{ option: '3', typeof: '3' },
								{ option: '4', typeof: '4' },
								{ option: '5', typeof: '5' },
								{ option: '6', typeof: '6' },
								{ option: '7', typeof: '7' },
							]}
							placeholder='Prioridad'
							fieldSize='base'
						/>
					</div>
					<div>
						<p className={styles.titleSmall}>
							Protección con gastos médicos mayores.
						</p>
						<InputQuoter
							name='prioridad'
							value={topics[4]?.prioridad}
							handleChange={e =>
								handleInputChangeTopics(4, 'prioridad', e.target.value)
							}
							isSelectedInput={true}
							optionFields={[
								{ option: '1', typeof: '1' },
								{ option: '2', typeof: '2' },
								{ option: '3', typeof: '3' },
								{ option: '4', typeof: '4' },
								{ option: '5', typeof: '5' },
								{ option: '6', typeof: '6' },
								{ option: '7', typeof: '7' },
							]}
							placeholder='Prioridad'
							fieldSize='base'
						/>
					</div>
					<div>
						<p className={styles.titleSmall}>
							Empresarial y/o fiscal {'(Ahorro o pensión)'}.
						</p>
						<InputQuoter
							name='prioridad'
							value={topics[5]?.prioridad}
							handleChange={e =>
								handleInputChangeTopics(5, 'prioridad', e.target.value)
							}
							isSelectedInput={true}
							optionFields={[
								{ option: '1', typeof: '1' },
								{ option: '2', typeof: '2' },
								{ option: '3', typeof: '3' },
								{ option: '4', typeof: '4' },
								{ option: '5', typeof: '5' },
								{ option: '6', typeof: '6' },
								{ option: '7', typeof: '7' },
							]}
							placeholder='Prioridad'
							fieldSize='base'
						/>
					</div>
					<div>
						<p className={styles.titleSmall}>Inversiones.</p>
						<InputQuoter
							name='prioridad'
							value={topics[6]?.prioridad}
							handleChange={e =>
								handleInputChangeTopics(6, 'prioridad', e.target.value)
							}
							isSelectedInput={true}
							optionFields={[
								{ option: '1', typeof: '1' },
								{ option: '2', typeof: '2' },
								{ option: '3', typeof: '3' },
								{ option: '4', typeof: '4' },
								{ option: '5', typeof: '5' },
								{ option: '6', typeof: '6' },
								{ option: '7', typeof: '7' },
							]}
							placeholder='Prioridad'
							fieldSize='base'
						/>
					</div>
				</div>
			</div>
			<div className={styles.rowGoals2}>
				<p className={styles.title}>
					¿Cuánto estaría dispuesto a invertir en ese tema?{' '}
					{'(Compromiso monetario)'}.
				</p>
				<InputQuoter
					name='inversion_metas'
					value={inversionMetas || ''}
					handleChange={handleInversionMetas}
					typeInput='text'
					placeholder='$'
				/>
			</div>
		</Accordion>
	);
}

export default Goals;
