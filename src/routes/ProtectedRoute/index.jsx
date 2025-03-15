import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';

function ProtectedRoute() {
	const { isAuthenticated } = useAuth();

	return isAuthenticated ? <Outlet /> : <Navigate to='login' />;
}

export default ProtectedRoute;
