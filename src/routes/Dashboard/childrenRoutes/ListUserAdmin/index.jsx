import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { useDataUserContext } from '../../../../context/DataUserProvider';
import LoaderModal from '../../../../components/LoaderModal';
import { set } from 'rsuite/esm/internals/utils/date';

function ListUserAdmin() {
	const [isOpen, setIsOpen] = useState(false);
	const [user, setUser] = useState([]);
	const [loading, setLoading] = useState(false);
	const [filterStatus, setFilterStatus] = useState(''); // Estado para el filtro

	const changeIsOpen = () => {
		return setIsOpen(!isOpen);
	};

	const { data } = useDataUserContext();

	useEffect(() => {
		if (data?.data?.id_tipo_usuario !== 0) {
			window.location.href = '/dashboard/home';
		}
	}, [data]);

	const userAll = async () => {
		const response = await fetch(`${import.meta.env.VITE_HOST}users/all-user`, {
			method: 'GET',

		});
		const data = await response.json(); 3
		setUser(data.data);
	}
	const handleStatusChange = (event) => {
		setFilterStatus(event.target.value);
	};

	const updateUser = async (id, status, email) => {
		setLoading(true);
		setUser([])
		try {
			const response = await fetch(`${import.meta.env.VITE_HOST}users/update-status/${id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ status, email }),
			});
			const data = await response.json();

		} catch (error) {
			console.log(error);
		} finally {
			userAll()
			setLoading(false);
		}
	}

	useEffect(() => {
		userAll();
	}, []);

	const filteredUsers = user.filter((user) => {
		if (filterStatus === '') return true;
		return user.status === parseInt(filterStatus);
	});
	if (loading) return <LoaderModal content='Actualizando usuario' />;



	return (
		<div className={styles.container}>
			<h1>Lista de Usuarios</h1>
			{/* <div style={{
				display: 'flex',
				justifyContent: 'flex-end',
				alignItems: 'center',
				width: '80%',
				gap: '10px'
			}}>
				Filtro: <select id="statusFilter" style={{
					backgroundColor: '#f2f2f2',
					border: '1px solid #ddd',
					padding: '8px',
					textAlign: 'left',
					marginTop: '10px',
					marginBottom: '10px'
				}} value={filterStatus} onChange={handleStatusChange}>
					<option value="">Todos</option>
					<option value={0}>Pendiente</option>
					<option value={1}>Activo</option>
					<option value={2}>Bloqueado</option>
				</select>
			</div> */}
			<table style={{
				width: '80%',
				borderCollapse: 'collapse',
				borderSpacing: 0,
				marginTop: '20px',
				marginBottom: '20px'
			}}>
				<thead>
					<tr style={{
						backgroundColor: '#f2f2f2',
						border: '1px solid #ddd',
						padding: '8px',
						textAlign: 'left'
					}}>
						<th style={{
							paddingLeft: '25px',
							paddingTop: '12px',
							paddingBottom: '12px'
						}}>Nombre</th>
						<th>Correo</th>
						<th>Localidad</th>
						<th>Pais</th>
						<th>Telefono</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{!loading && user.map((user) => (
						<tr key={user.id_usuario}
							style={{
								border: '1px solid #ddd',
								padding: '8px',
								textAlign: 'left'
							}}>
							<td style={{
								paddingLeft: '25px'
							}}>{user.nombre_apellido}</td>
							<td>{user.email}</td>
							<td>{user.localidad}</td>
							<td>{user.pais}</td>
							<td>{user.celular}</td>
							<td>
								<select defaultValue={user.status} style={{
									backgroundColor: '#f2f2f2',
									border: '1px solid #ddd',
									padding: '8px',
									textAlign: 'left',
									marginTop: '10px',
									marginBottom: '10px'
								}}
									disabled={loading}
									onChange={(e) => updateUser(user.id, e.target.value, user.email)}
								>
									<option value={0}>Pendiente</option>
									<option value={1}>Activo</option>
									<option value={2}>Bloqueado</option>
								</select></td>

						</tr>
					))}
				</tbody>
			</table>

		</div>
	);
}

export default ListUserAdmin;
