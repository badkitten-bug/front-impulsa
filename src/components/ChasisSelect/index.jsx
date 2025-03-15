import styles from './styles.module.css';
import CardChasis from '../CardChasis';
import {
	StudentIcon,
	MoneyIcon,
	OldPersonIcon,
	ShieldCardIcon,
	BussinesManIcon,
	MoneyPersonIcon,
} from '../Icons';

function ChasisSelect({ changePage }) {
	return (
		<div className={styles.container}>
			<div className={styles.titleContainer}>
				<p>CHASIS DE SEGUROS</p>
				<p>Selecciona la categoría de la cual desees descargar su chasis</p>
			</div>
			<div className={styles.cardContainer}>
				<CardChasis
					title='Educación'
					typeInsurance='1'
					managementInsuranceId={changePage}
				>
					<StudentIcon />
				</CardChasis>
				<CardChasis
					title='Ahorro'
					typeInsurance='2'
					managementInsuranceId={changePage}
				>
					<MoneyIcon />
				</CardChasis>
				<CardChasis
					title='Retiro y Pensión'
					typeInsurance='3'
					managementInsuranceId={changePage}
				>
					<OldPersonIcon />
				</CardChasis>
				<CardChasis
					title='Protección'
					typeInsurance='4'
					managementInsuranceId={changePage}
				>
					<ShieldCardIcon />
				</CardChasis>
				<CardChasis
					title='Empresarial'
					typeInsurance='5'
					managementInsuranceId={changePage}
				>
					<BussinesManIcon />
				</CardChasis>
				<CardChasis
					title='Inversiones'
					typeInsurance='6'
					managementInsuranceId={changePage}
				>
					<MoneyPersonIcon />
				</CardChasis>
			</div>
		</div>
	);
}

export default ChasisSelect;
