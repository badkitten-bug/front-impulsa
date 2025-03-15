import styles from './styles.module.css';
import Submit from '../Submit';

function SubmitForm() {
	return (
		<div className={styles.submitContainer}>
			<Submit text='Enviar formulario' type={1} />
		</div>
	);
}

export default SubmitForm;
