import styles from './styles.module.css';
import Clients from './clients';
import logoImpulsa from '../../assets/impulsa_logo.webp';

function StatisticsHeader() {
	return (
		<div className={styles.titleContainer}>
			<img
				className={styles.logo}
				src={logoImpulsa}
				alt='logo de aseguradoras impulsa'
			/>
			<p>Lista de clientes</p>
			<p>Muestra las estadísticas desglosadas de todos tus clientes</p>
		</div>
	);
}

function ClientsStatus({ data }) {
	return (
		<div className={styles.container}>
			<StatisticsHeader />
			{data === null ? 'No hay clientes registrados' : <Clients data={data} />}
		</div>
	);
}

export default ClientsStatus;
