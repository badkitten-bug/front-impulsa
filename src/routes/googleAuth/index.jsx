import { useSearchParams, Navigate } from 'react-router-dom';
import { setLocalStorage } from '../../utils/manageLocalStorage';

function GoogleAuth() {
	const [searchParams] = useSearchParams();

	const access_token = searchParams.get('access_token');
	const userId = searchParams.get('user_id');

	setLocalStorage('token', access_token);
	setLocalStorage('userId', userId);

	return <Navigate to={'/dashboard'} />;
}

export default GoogleAuth;
