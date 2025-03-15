import styles from './styles.module.css';
import { EditProfileIcon } from '../Icons';
import dobleArrow from '../../assets/doble_arrow_right.png';
import DataUser from './dataUser';

function CardProfile({ profileData, changeIsOpen }) {
	return (
		<main className={styles.cardContainer}>
			<img
				src={dobleArrow}
				alt='dos flechas en el fondo'
				className={styles.dobleArrow}
			/>
			<div className={styles.card_title}>
				<p>Datos del Agente de Seguros</p>
				<div onClick={e => changeIsOpen()}>
					<EditProfileIcon />
				</div>
			</div>
			<DataUser profileData={profileData} changeIsOpen={changeIsOpen} />
		</main>
	);
}

export default CardProfile;
