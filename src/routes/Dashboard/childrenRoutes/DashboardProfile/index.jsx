import styles from './styles.module.css';
import CardProfile from '../../../../components/CardProfile';
import ModalEditProfile from '../../../../components/ModalEditProfile';
import { useState } from 'react';
import { useDataUserContext } from '../../../../context/DataUserProvider';
import blankPhoto from '../../../../assets/blank-photo.webp';
import LoaderModal from '../../../../components/LoaderModal';

function DashboardProfile() {
	const [isOpen, setIsOpen] = useState(false);

	const changeIsOpen = () => {
		return setIsOpen(!isOpen);
	};

	const { data, loading } = useDataUserContext();

	if (loading) return <LoaderModal content='Cargando datos del perfil...' />;

	const profileData = {
		name: data.data.nombre_apellido || 'José Ejemplo',
		tel: data.data.celular || '000000000',
		email: data.data.email || 'Ejemplo@gmail.com',
		location: data.data.localidad || 'Localidad',
		pais: data.data.pais || 'Pais',
		foto: data.data.foto || blankPhoto,
	};

	return (
		<div className={styles.container}>
			{isOpen && (
				<ModalEditProfile
					profileData={profileData}
					changeIsOpen={changeIsOpen}
				/>
			)}
			<CardProfile profileData={profileData} changeIsOpen={changeIsOpen} />
		</div>
	);
}

export default DashboardProfile;
