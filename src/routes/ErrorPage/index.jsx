import styles from './styles.module.css';
import impulsaLogo from '../../assets/impulsa_logo.webp';
import Button from '../../components/Buttom';
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
	const goTo = useNavigate();

	const handleClick = e => {
		goTo(-1);
	};

	return (
		<div className={styles.container}>
			<p className={styles.title}>Oops... ha ocurrido un error</p>
			{/* <p className={styles.subtitle}>Esta página no existe</p> */}
			<Button text='Volver atrás' type={1} onClick={handleClick} />

			<img src={impulsaLogo} alt='logotipo de aseguradoras impulsa' />
		</div>
	);
}

export default ErrorPage;
