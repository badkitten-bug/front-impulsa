import styles from './styles.module.css';
import ChasisSelect from '../../../../components/ChasisSelect';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

function DashboardChasis() {
	const goTo = useNavigate();

	const { id } = useParams();

	const changePage = typeInsurance => {
		goTo(`/dashboard/chasis/${typeInsurance}`);
	};

	return <>{!id ? <ChasisSelect changePage={changePage} /> : <Outlet />}</>;
}

export default DashboardChasis;
