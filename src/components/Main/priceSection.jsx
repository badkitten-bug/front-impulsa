import styles from './styles.module.css';
import CardAsk from '../CardAsk';
import CardLarge from '../CardLarge';

function PriceSection() {
	return (
		<section className={styles.priceSection}>
			<CardLarge />
			<div className={styles.priceSection_ask}>
				<div className={styles.priceSection_title} id='FAQ'>
					<h4>Preguntas Frecuentes</h4>
					<p>¿Tienes dudas sobre nuestros servicios?</p>
				</div>
				<CardAsk />
			</div>
		</section>
	);
}

export default PriceSection;
