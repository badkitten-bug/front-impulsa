import './styles.module.css';
import { useAuth } from '../../../context/AuthProvider';
import { Navigate } from 'react-router-dom';
import ContainerFormulario from './ContainerFormulario';

function ForgetPass() {
	const { isAuthenticated } = useAuth();

	if (isAuthenticated) return <Navigate to='/dashboard' />;

	return (
		<>
			<ContainerFormulario />
		</>
	);
}

export default ForgetPass;
