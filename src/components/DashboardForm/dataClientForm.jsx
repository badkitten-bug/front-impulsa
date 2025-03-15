import styles from './styles.module.css';
import InputQuoter from '../InputQuoter';
import Accordion from '../Accordion';
import { useDashboardFormContext } from '../../context/DashboardFormProvider';

function DataClientForm() {
	const { handleChangeInput, values } = useDashboardFormContext();
	return (
		<Accordion title='Datos del cliente'>
			<div className={styles.row1}>
				<p className={styles.title}>Nombre completo del cliente</p>
				<div className={styles.inputs}>
					<InputQuoter
						name='nombreApellidoCliente'
						typeInput='text'
						value={values.nombreApellidoCliente}
						handleChange={handleChangeInput}
					/>
				</div>
			</div>
			<div className={styles.row2}>
				<div>
					<p className={styles.title}>Fecha de nacimiento</p>
					<InputQuoter
						name='fecha_nacimiento_cliente'
						value={values.fecha_nacimiento_cliente}
						handleChange={handleChangeInput}
						typeInput='date'
						placeholder='Día'
					/>
				</div>
				<div className={styles.inputs}>
					<div>
						<p className={styles.title}>Estado Civil</p>
						<div>
							<InputQuoter
								name='id_estado_civil'
								value={values.id_estado_civil}
								handleChange={handleChangeInput}
								isSelectedInput={true}
								optionFields={[
									{ option: 'Soltero/a', typeof: '0' },
									{ option: 'Casado/a', typeof: '1' },
									{ option: 'Divorciado', typeof: '2' },
									{ option: 'Viudo/a', typeof: '3' },
								]}
								placeholder='Estado Civil'
							/>
						</div>
					</div>
				</div>
				<div>
					<p className={styles.title}>Ocupación</p>
					<InputQuoter
						name='ocupacionCliente'
						value={values.ocupacionCliente}
						handleChange={handleChangeInput}
						typeInput='text'
					/>
				</div>
			</div>
		</Accordion>
	);
}

export default DataClientForm;
