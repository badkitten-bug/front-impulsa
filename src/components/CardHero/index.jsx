import styles from './styles.module.css';
import { Shield } from '../Icons';
import { CountUp } from 'use-count-up';

function CardHero() {
	return (
		<div className={styles.card_container}>
			<div className={styles.card_info}>
				<h1>Somos parte de tu vida.</h1>
				<p>
					En Impulsa Consultoría Patrimonial queremos que tu vida esté llena de
					tranquilidad, nos preocupamos por ofrecer servicios que te ayuden a
					asegurar tu futuro, el de tu familia y el de tu patrimonio. Cada uno
					de nuestros servicios está diseñado para ofrecerte el mejor beneficio.
				</p>
			</div>
		</div>
	);
}

export default CardHero;
