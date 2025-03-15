import styles from './styles.module.css';

function Input({ children, value, name, type, placeholder, handleChange }) {
	return (
		<>
			<div className={styles.container}>
				{children}
				<input
					value={value}
					className={styles.input}
					name={name}
					type={type}
					placeholder={placeholder}
					onChange={handleChange}
				/>
			</div>
		</>
	);
}

export default Input;
