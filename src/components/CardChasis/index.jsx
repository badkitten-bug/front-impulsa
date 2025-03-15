import styles from './styles.module.css';

function CardChasis({ children, title, typeInsurance, managementInsuranceId }) {
	const handleClick = () => {
		managementInsuranceId(typeInsurance);
	};

	return (
		<div className={styles.container} onClick={handleClick}>
			{children}
			<p className={styles.title}>{title}</p>
		</div>
	);
}

export default CardChasis;
