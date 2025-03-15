import styles from './styles.module.css';
import siginMan from '../../../assets/singin-man.webp';
import SiginForm from '../SinginForm';

function Sigin() {
	return (
		<main className={styles.main}>
			<picture className={styles.picture}>
				<img src={siginMan} alt='' />
			</picture>
			<SiginForm />
		</main>
	);
}

export default Sigin;
