import styles from './styles.module.css';
import { Xicon } from '../Icons';

function ToastNotificationOnly({ error, toastOpen, setToastOpen }) {
	return (
		<div className={styles.container}>
			<p>{error}</p>
			<div onClick={e => setToastOpen(!toastOpen)}>
				<Xicon />
			</div>
		</div>
	);
}

function ToastNotificationMultiples({ errors = [], toastOpen, setToastOpen }) {
	return (
		<div className={styles.container}>
			<div className={styles.containerError}>
				{errors.map((error, index) => {
					return <p key={index}>{error.msg}</p>;
				})}
			</div>
			<div onClick={e => setToastOpen(!toastOpen)}>
				<Xicon />
			</div>
		</div>
	);
}

function ToastNotificationError({ errors, toastOpen, setToastOpen }) {
	if (!toastOpen) return;

	return (
		<>
			{typeof errors === 'object' ? (
				<ToastNotificationMultiples
					errors={errors}
					toastOpen={toastOpen}
					setToastOpen={setToastOpen}
				/>
			) : (
				<ToastNotificationOnly
					error={errors}
					toastOpen={toastOpen}
					setToastOpen={setToastOpen}
				/>
			)}
		</>
	);
}

export default ToastNotificationError;
