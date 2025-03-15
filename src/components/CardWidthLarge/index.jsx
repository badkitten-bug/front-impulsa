import styles from './styles.module.css';
import { ArrowRightICon } from '../Icons';

function CardWidthLarge({ title, paragraph }) {
	return (
		<div className={styles.container}>
			<div>
				<p>{title}</p>
				<p>{paragraph}</p>
			</div>
			<div>
				<ArrowRightICon />
			</div>
		</div>
	);
}

export default CardWidthLarge;
