import styles from './styles.module.css';
import '@github/relative-time-element';

function ClientsStatus({ data = [] }) {
	const mappedClients = data.dataClientes.map(client => ({
		id: client.cliente_estado_alta.createdAt,
		name: client.nombreApellido,
		state: client.cliente_estado_alta.estado,
		occupation: client.ocupacion,
		createdAt: client.createdAt,
	}));

	const clientsToRender = mappedClients.map((client, index) => {
		return (
			<div className={styles.statusContainer}>
				<div className={styles.section1}>
					<p>{client.name}</p>
					<p>Ocupación: {client.occupation}</p>
					<p>
						Registro:{' '}
						<relative-time
							datetime={client.createdAt}
							lang='es'
							format='relative'
						></relative-time>
					</p>
				</div>
				<div className={styles.section2}>
					<p>{client.state || 'Aprobado'}</p>
				</div>
			</div>
		);
	});

	return <div className={styles.allClients}>{clientsToRender}</div>;
}

export default ClientsStatus;
