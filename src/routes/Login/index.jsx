import './styles.module.css';
import Sigin from './Signin';
import { useAuth } from '../../context/AuthProvider';
import { Navigate } from 'react-router-dom';

function Login() {
	const { isAuthenticated } = useAuth();

	if (isAuthenticated) return <Navigate to='/dashboard' />;

	return (
		<>
			<Sigin />
		</>
	);
}

export default Login;
