import { createContext, useContext } from 'react';
import useFetch from '../hooks/useFetch';
import { useAuth } from './AuthProvider';
import { removeDataInLocalStorage } from '../utils/manageLocalStorage';
import { useNavigate } from 'react-router-dom';

export const DataUserContext = createContext();

export const useDataUserContext = () => {
	return useContext(DataUserContext);
};

function DataUserProvider({ children }) {
	const { getUserId, getAccessToken, changeAuth } = useAuth();

	const userId = getUserId();
	const token = getAccessToken();
	const headers = { authorization: token };
	const goTo = useNavigate();

	const { data, error, loading } = useFetch(
		`${import.meta.env.VITE_HOST}users/profile/${userId}`,
		'GET',
		headers,
	);

	if (error?.status === 403 || error?.status === 401) {
		removeDataInLocalStorage('token');
		removeDataInLocalStorage('userId');
		changeAuth();
		goTo('/login');
	}

	return (
		<DataUserContext.Provider value={{ data, loading }}>
			{children}
		</DataUserContext.Provider>
	);
}

export default DataUserProvider;
