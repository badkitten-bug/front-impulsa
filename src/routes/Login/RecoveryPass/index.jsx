import './styles.module.css';
import { useAuth } from '../../../context/AuthProvider';
import { Navigate, useParams } from 'react-router-dom';
import ContainerFormulario from './ContainerFormulario';

function RecoveryPass() {
	const { isAuthenticated } = useAuth();
	const { token } = useParams(); // Obtener el token de los parámetros de la URL

	if (isAuthenticated) return <Navigate to='/dashboard' />;

	return (
		<>
			<ContainerFormulario token={token} />
		</>
	);
}

export default RecoveryPass;
