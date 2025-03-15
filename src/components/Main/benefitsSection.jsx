import styles from './styles.module.css';
import CardWidthLarge from '../CardWidthLarge';
import hands from '../../assets/hands.webp';

function BenefitsSection() {
	return (
		<section className={styles.benefitsSection} id='ventajas'>
			<div className={styles.benefitsSection_title}>
				<h4>Ventajas de ser miembro IMPULSA</h4>
				<p>
					Buscar una buena aseguradora es <span>esencial</span> por varias
					razones importantes. En primer lugar, proporciona una{' '}
					<span>protección financiera crucial</span> en caso de imprevistos como
					accidentes, enfermedades o pérdidas materiales. Esto significa que
					puedes <span>enfrentar situaciones difíciles</span> sin preocuparte
					por el <span>impacto económico</span> negativo que podrían tener en ti
					o en tu familia.
				</p>
			</div>
			<div className={styles.benefitsSection_info}>
				<div className={styles.benefitsSection_cards}>
					<span>Descubre nuestras atractivas ventajas:</span>
					<CardWidthLarge
						title='Protección Financiera Integral'
						paragraph='IMPULSA nos brinda protección financiera en caso de accidentes, enfermedades o pérdidas materiales, permitiéndonos enfrentar situaciones difíciles sin preocuparnos por el impacto económico.'
					/>
					<CardWidthLarge
						title='Respaldo Empresarial para Mujeres'
						paragraph='IMPULSA ofrece respaldo patrimonial y cobertura especial de cáncer para mujeres empresarias, ayudándonos a alcanzar nuestras metas con confianza y liquidez anticipada.'
					/>
					<CardWidthLarge
						title='Plan de Educación para el Futuro de Nuestros Hijos'
						paragraph='IMPULSA asegura la educación de nuestros hijos con un plan a futuro, garantizando su continuidad y desarrollo sin importar las circunstancias.'
					/>
					<CardWidthLarge
						title='Ahorro y Retiro con Rendimientos Atractivos'
						paragraph='IMPULSA nos permite ahorrar con intereses garantizados y recibir un pago único al retiro, asegurando nuestro bienestar financiero y proyectos personales.'
					/>
				</div>
				<figure>
					<img src={hands} alt='dos personas estrechados sus manos' />
				</figure>
			</div>
		</section>
	);
}

export default BenefitsSection;
