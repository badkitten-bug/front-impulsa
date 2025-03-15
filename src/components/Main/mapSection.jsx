import styles from './styles.module.css';

function MapSection() {
	return (
		<section className={styles.mapSection}>
			<div className={styles.mapSection_title}>
				<h4> Encuéntranos más cerca de ti </h4>
				<p>Consulta nuestras oficinas para una atención persona a persona</p>
			</div>
			{/* <iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15019550.52192373!2d-113.2851446131722!3d23.21095411109573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84043a3b88685353%3A0xed64b4be6b099811!2zTcOpeGljbw!5e0!3m2!1ses!2sve!4v1714505818386!5m2!1ses!2sve'
				width='100%'
				height='400px'
				loading='lazy'
				referrerpolicy='no-referrer-when-downgrade'
			></iframe> */}

			<iframe
				src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2395.173106059576!2d-110.96972227989075!3d29.089695788586436!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2bc16f89e123ab8!2sSeguros+Monterrey+Hermosillo!5e0!3m2!1ses-419!2smx!4v1509490973704'
				width='100%'
				height='450'
				frameBorder='0'
			></iframe>
		</section>
	);
}

export default MapSection;
