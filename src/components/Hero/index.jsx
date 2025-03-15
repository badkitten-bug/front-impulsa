import styles from './styles.module.css';
import heroWoman from '../../assets/hero-woman-desktop.webp';
import logoSegurosMonterrey from '../../assets/logo-seguros-monterrey.webp';
import Slider from '../Slider';
import CardHero from '../CardHero';
import Button from '../Buttom';
import { TypeAnimation } from 'react-type-animation';

function Hero() {
	return (
		<>
			<section className={styles.hero}>
				<div className={styles.hero_description}>
					<div className={styles.hero_title}>
						<div className={styles.hero_text}>
							<h1>
								<TypeAnimation
									sequence={[
										'Impulsa tu Educación',
										2000,
										'Impulsa tu Ahorro',
										2000,
										'Impulsa tu Retiro y Pensión',
										2000,
										'Impulsa tu Protección',
										2000,
										'Impulsa tu Empresa',
										2000,
										'Impulsa tus Inversiones',
									]}
									wrapper='span'
									speed={40}
									repeat={Infinity}
								/>
								y disfruta de todos los beneficios
							</h1>
							<p>
								Protegemos lo que más valoras. Con nosotros, tienes la
								tranquilidad de contar con un aliado confiable en todo momento.
								¡Descubre nuestras soluciones y vive sin preocupaciones!
							</p>
						</div>
						<div className={styles.hero_ctas}>
							<Button
								text='Contáctanos'
								href='mailto:info@icpmail.com.mx'
								type={1}
							/>
							<Button text='Más información' href='#servicios' type={2} />
						</div>
					</div>
					<CardHero />
				</div>
				<figure className={styles.hero_image}>
					<img src={heroWoman} alt='mujer sonriendo' />
					<div>
						<p>Contamos con el respaldo de New York Life Seguros Monterrey</p>
						<a href='https://www.mnyl.com.mx/' target='_blank'>
							<img
								src={logoSegurosMonterrey}
								alt='logotipo de seguros monterrey'
							/>
						</a>
					</div>
				</figure>
			</section>
			<Slider />
		</>
	);
}

export default Hero;
