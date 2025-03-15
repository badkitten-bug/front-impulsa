import styles from './styles.module.css';
import DashboardFormProvaider from '../../../../context/DashboardFormProvider';
import DashboardForm from '../../../../components/DashboardForm';

function DashboardQuoter() {
	return (
		<div className={styles.container}>
			<DashboardFormProvaider>
				<DashboardForm />
			</DashboardFormProvaider>
		</div>
	);
}

export default DashboardQuoter;
