import CheckboxOrRadio from './checkBoxOrRadio';
import styles from './styles.module.css';
import { clsx } from 'clsx';

function Input({
	type,
	name,
	value,
	handleChange,
	isCheckBoxOrRadio,
	CheckboxOrRadioFields,
	fieldSize,
	placeholder,
}) {
	const clsxConfig = clsx({
		[styles.input]: true,
		[styles.base]: fieldSize === 'base',
		[styles.sm]: fieldSize === 'sm',
		[styles.md]: fieldSize === 'md',
		[styles.lg]: fieldSize === 'lg',
		[styles.xl]: fieldSize === 'xl',
		[styles.xxl]: fieldSize === 'xxl',
		[styles.xxxl]: fieldSize === 'xxxl',
	});

	const inputToRender = (
		<input
			type={type}
			name={name}
			value={value}
			onChange={handleChange}
			className={clsxConfig}
			placeholder={placeholder}
			min='1900-01-01'
			max='2024-12-31'
			lang='es'
		/>
	);

	return (
		<>
			{isCheckBoxOrRadio ? (
				<CheckboxOrRadio
					type={type}
					name={name}
					value={value}
					handleChange={handleChange}
					CheckboxOrRadioFields={CheckboxOrRadioFields}
				/>
			) : (
				inputToRender
			)}
		</>
	);
}

export default Input;
