import styles from './styles.module.css';
import { Xicon } from '../Icons';

function ToastNotificationOk({ ok, toastOpenOk, setToastOpenOk }) {
	if (!toastOpenOk) return;

	return (
		<div className={styles.container}>
			<p>{ok.data.msg}</p>
			<div onClick={e => setToastOpenOk(!toastOpenOk)}>
				<Xicon />
			</div>
		</div>
	);
}

export default ToastNotificationOk;
