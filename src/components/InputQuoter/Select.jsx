import styles from './styles.module.css';
import { clsx } from 'clsx';

function Select({
	fields = [],
	name,
	value,
	handleChange,
	placeholder,
	fieldSize,
}) {
	const clsxConfig = clsx({
		[styles.select]: true,
		[styles.base]: fieldSize === 'base',
		[styles.sm]: fieldSize === 'sm',
		[styles.md]: fieldSize === 'md',
		[styles.lg]: fieldSize === 'lg',
	});

	const renderToSeclect = fields.map((el, index) => (
		<option key={index} value={el.typeof}>
			{el.option}
		</option>
	));

	return (
		<>
			<select
				name={name}
				className={clsxConfig}
				value={value}
				onChange={handleChange}
			>
				<option disabled selected>
					{placeholder}
				</option>
				{renderToSeclect}
			</select>
		</>
	);
}

export default Select;
