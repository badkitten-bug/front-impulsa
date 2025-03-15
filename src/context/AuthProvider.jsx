import { createContext, useContext, useState, useEffect } from 'react';
import {
	setLocalStorage,
	getDataInLocalStorage,
} from '../utils/manageLocalStorage';

const AuthContext = createContext({
	isAuthenticated: false,
	changeAuth: () => {},
	getAccessToken: () => {},
	saveUser: userData => {},
	getUserId: () => {},
});

export const useAuth = () => {
	return useContext(AuthContext);
};

function AuthProvider({ children }) {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [accessToken, setAccessToken] = useState('');
	const [userId, setUserId] = useState(null);

	useEffect(() => {
		checkAuth();
	}, []);

	const checkAuth = () => {
		if (getAccessToken()) {
			setIsAuthenticated(true);
			setAccessToken(getDataInLocalStorage('token'));
			setUserId(getDataInLocalStorage('userId'));
		} else {
			setIsAuthenticated(false);
		}
	};

	const changeAuth = () => {
		setIsAuthenticated(!isAuthenticated);
	};

	const getAccessToken = () => {
		const token = getDataInLocalStorage('token');

		if (token) {
			return token;
		}

		return null;
	};

	const getUserId = () => {
		return userId;
	};

	const saveUser = userData => {
		setAccessToken(userData.headers['authorization']);
		setUserId(userData.data.uuid.userExists);

		setLocalStorage('token', userData.headers['authorization']);
		setLocalStorage('userId', userData.data.uuid.userExists);
		setIsAuthenticated(true);
	};

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated,
				changeAuth,
				getAccessToken,
				saveUser,
				getUserId,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthProvider;
