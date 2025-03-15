import styles from './styles.module.css';
import ClientsStatus from '../../../../components/ClientsStatus';
import { useAuth } from '../../../../context/AuthProvider';
import useFetch from '../../../../hooks/useFetch';
import LoaderModal from '../../../../components/LoaderModal';
import Pagination from '../../../../components/Pagination';
import { useState } from 'react';

function DashboardStatistics() {
	const [page, setPage] = useState(1);
	const { getAccessToken, getUserId } = useAuth();

	const token = getAccessToken();
	const userId = getUserId();

	const { data, error, loading } = useFetch(
		`${import.meta.env.VITE_HOST}statistics/customers/${userId}?page=${page}&pageSize=${10}`,
		'GET',
		{ authorization: token },
	);

	const prevPage = () => {
		setPage(p => p - 1);
	};

	const nextPage = () => {
		setPage(p => p + 1);
	};

	if (loading) return <LoaderModal content='Cargando datos...' />;

	return (
		<div className={styles.container}>
			<ClientsStatus data={data} />
			{data === null ? null : (
				<Pagination
					data={data}
					page={page}
					prevPage={prevPage}
					nextPage={nextPage}
				/>
			)}
		</div>
	);
}

export default DashboardStatistics;
