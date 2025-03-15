import styles from './styles.module.css';
import BenefitsSection from './benefitsSection';
import HooksSection from './hooksSection';
import PriceSection from './priceSection';
import HelpSection from './helpSection';
import MapSection from './mapSection';
import LoginSection from './loginSection';

function Main() {
	return (
		<main className={styles.main}>
			<BenefitsSection />
			<HooksSection />
			<PriceSection />
			<HelpSection />
			<MapSection />
			<LoginSection />
		</main>
	);
}

export default Main;
