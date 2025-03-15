import styles from './styles.module.css';
import Accordion from '../Accordion';
import InputQuoter from '../InputQuoter';
import { useState, useEffect } from 'react';
import { useDashboardFormContext } from '../../context/DashboardFormProvider';

function Recommended() {
	const [recommended, setRecommended] = useState({
		nombreApellidoRecomendante: '' || null,
		celular: '' || null,
		email: '' || null,
	});

	const { registerMultipleInputs } = useDashboardFormContext();

	const handleChangeRecommended = e => {
		const { name, value } = e.target;

		if (name === 'celular') {
			const numbersOnly = /^[0-9]*$/;
			if (numbersOnly.test(value) && value.length <= 18) {
				setRecommended({ ...recommended, [name]: value });
			}
		} else {
			setRecommended({ ...recommended, [name]: value });
		}
	};

	useEffect(() => {
		registerMultipleInputs(recommended, 'recomendaciones');
	}, [recommended]);

	return (
		<Accordion title='Recomendados'>
			<div className={styles.recommendedContainer}>
				<p className={styles.title}>Fue recomendado por:</p>
				<div>
					<InputQuoter
						name='nombreApellidoRecomendante'
						value={recommended.nombreApellidoRecomendante}
						handleChange={handleChangeRecommended}
						typeInput='text'
						placeholder='Nombre completo de la persona que recomienda'
					/>
					<InputQuoter
						name='celular'
						value={recommended.celular || ''}
						handleChange={handleChangeRecommended}
						typeInput='text'
						placeholder='Celular de la persona'
					/>
					<InputQuoter
						name='email'
						value={recommended.email}
						handleChange={handleChangeRecommended}
						typeInput='email'
						placeholder='correo@ejemplo.com'
					/>
				</div>
			</div>
		</Accordion>
	);
}

export default Recommended;
