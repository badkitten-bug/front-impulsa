import styles from './styles.module.css';
import man from '../../assets/man.webp';
import impulsaLogo from '../../assets/impulsa_logo.webp';
import Button from '../Buttom';

function CardLarge() {
	return (
		<div className={styles.container}>
			<div className={styles.cardLarge_text}>
				<img src={impulsaLogo} alt='logotipo de aseguradora impulsa' />
				<div>
					<p>
						<span>¡Agenda tu Cita!</span>
						Encuentra el plan que mejor se adapte a ti, a través de una pequeña
						encuesta que le ayudará a nuestro equipo a conocer tu situación.
					</p>
					<Button text='¡Contáctanos!' href='https://wa.link/jn5s26' type={1} />
				</div>
			</div>
			<figure className={styles.cardLarge_image}>
				<img
					src={man}
					alt='persona con la mano señalando texto que esta a la izquierda'
				/>
			</figure>
		</div>
	);
}

export default CardLarge;
