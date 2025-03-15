import Button from '../Buttom';
import styles from './styles.module.css';

function HelpSection() {
	return (
		<section className={styles.helpSection}>
			<div className={styles.helpSection_title}>
				<h4>Únete como Agente Asociado</h4>
				<p>
					Sé parte de nuestro equipo, disfruta de grandes beneficios y crece con
					nosotros.
				</p>
			</div>
			<Button
				text='¡Quiero unirme! '
				href='https://wa.link/jn5s26'
				type={3}
				target='_blank'
			/>
		</section>
	);
}

export default HelpSection;
