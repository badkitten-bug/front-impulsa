import styles from './styles.module.css';
import { clsx } from 'clsx';

function Button({ text, href, type, onClick, target, children }) {
	const clsxConfig = clsx({
		[styles.initial_btn]: text || type,
		[styles.btn_type_1]: type === 1,
		[styles.btn_type_2]: type === 2,
		[styles.btn_type_3]: type === 3,
	});
	return (
		<a className={clsxConfig} href={href} onClick={onClick} target={target}>
			{children}
			{text}
		</a>
	);
}

export default Button;
