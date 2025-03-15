import { clsx } from 'clsx';
import styles from './styles.module.css';

function Submit({ text, type, children, loading = false }) {
	const clsxConfig = clsx({
		[styles.initial_btn]: text || type,
		[styles.btn_type_0]: type === 0,
		[styles.btn_type_1]: type === 1,
		[styles.btn_type_2]: type === 2,
		[styles.btn_type_3]: type === 3,
		[styles.btn_type_4]: type === 4,
	});
	return (
		<button className={clsxConfig} disabled={loading} type='submit'>
			{!loading ? text : 'Enviando...'}

		</button>
	);
}

export default Submit;
