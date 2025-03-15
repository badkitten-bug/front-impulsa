import styles from './styles.module.css';
import { EditProfileIcon } from '../Icons';
import profileImgTest from '../../assets/profile_img_test.png';

function DataUser({ profileData, changeIsOpen }) {
	return (
		<div className={styles.cardDataProfile}>
			<div className={styles.containerImg}>
				<figure>
					<img src={profileData.foto} alt='hombre con lentes de sol soriendo' />
				</figure>
				<div className={styles.editBtnMovile} onClick={e => changeIsOpen()}>
					<EditProfileIcon />
				</div>
			</div>
			<div className={styles.data}>
				<h1>Nombre Completo</h1>
				<p>{profileData.name}</p>
				<p>{profileData.tel}</p>
				<p>{profileData.email}</p>
				<p>{profileData.location + ', ' + profileData.pais}</p>
			</div>
		</div>
	);
}

export default DataUser;
