import styles from './styles.module.css';
import { ArrowDown } from '../Icons';
import { useState } from 'react';

function Ask({ question, answers }) {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};
	return (
		<div className={styles.ask_cotainer}>
			<div className={styles.ask} onClick={handleClick}>
				<span>{question}</span>
				<ArrowDown />
			</div>
			{open && <div className={styles.answers}>{answers}</div>}
		</div>
	);
}

export default Ask;
