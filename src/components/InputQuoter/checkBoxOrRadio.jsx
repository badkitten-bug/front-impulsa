import styles from './styles.module.css';
import { clsx } from 'clsx';

function CheckboxOrRadio({
	type,
	name,
	value,
	CheckboxOrRadioFields,
	handleChange,
	fieldSize,
}) {
	const clsxConfig = clsx({
		[styles.fieldset]: true,
		[styles.base]: fieldSize === 'base',
		[styles.sm]: fieldSize === 'sm',
		[styles.md]: fieldSize === 'md',
		[styles.lg]: fieldSize === 'lg',
		[styles.xl]: fieldSize === 'xl',
		[styles.xxl]: fieldSize === 'xxl',
		[styles.xxxl]: fieldSize === 'xxxl',
	});

	const fieldsToRender = CheckboxOrRadioFields.map((el, index) => (
		<div key={index}>
			<input
				type={type}
				name={name}
				value={el.typeOf}
				onChange={handleChange}
				id={el.labelId}
			/>
			<label className={styles.label} htmlFor={el.labelId}>
				{el.label}
			</label>
		</div>
	));

	return (
		<>
			<fieldset className={clsxConfig}>{fieldsToRender}</fieldset>
		</>
	);
}

export default CheckboxOrRadio;
