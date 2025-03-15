import styles from './styles.module.css';
import Input from './input.jsx';
import Select from './Select.jsx';

function InputQuoter({
	name,
	value,
	typeInput,
	isSelectedInput = false,
	optionFields = [],
	placeholder,
	isCheckBoxOrRadio = false,
	CheckboxOrRadioFields = [],
	fieldSize,
	handleChange,
}) {
	return (
		<>
			{isSelectedInput ? (
				<Select
					fields={optionFields}
					name={name}
					value={value}
					handleChange={handleChange}
					placeholder={placeholder}
					fieldSize={fieldSize}
				/>
			) : (
				<Input
					type={typeInput}
					name={name}
					value={value}
					handleChange={handleChange}
					isCheckBoxOrRadio={isCheckBoxOrRadio}
					CheckboxOrRadioFields={CheckboxOrRadioFields}
					fieldSize={fieldSize}
					placeholder={placeholder}
				/>
			)}
		</>
	);
}

export default InputQuoter;
