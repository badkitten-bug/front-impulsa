import styles from './styles.module.css';
import DataClientForm from './dataClientForm';
import RecommendedForm from './recommendedForm';
import FamilyForm from './familyForm';
import ProtectionForm from './protectionForm';
import SaveForm from './saveForm';
import RetirementForm from './retirementForm';
import EducationForm from './educationForm';
import Goals from './goals';
import SubmitForm from './SubmitForm';

function DashboardForm() {
	return (
		<>
			<DataClientForm />
			<RecommendedForm />
			<FamilyForm />
			<ProtectionForm />
			<SaveForm />
			<RetirementForm />
			<EducationForm />
			<Goals />
			<SubmitForm />
		</>
	);
}

export default DashboardForm;
