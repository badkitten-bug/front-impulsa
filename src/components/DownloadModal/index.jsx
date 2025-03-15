import styles from './styles.module.css';
import { Xicon } from '../Icons';
import { useEffect } from 'react';

function DownloadModal({ url, nameFile, text, isOpen, setIsOpen }) {
	useEffect(() => {
		const link = document.querySelector('a[download]');
		if (link) {
			link.click();
		}
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.containerText}>
				<div className={styles.closeicon} onClick={e => setIsOpen(!isOpen)}>
					<Xicon width='50' height='50' />
				</div>
				<div className={styles.titleContainer}>
					<p>{text}</p>
					<a href={url} download={nameFile}>
						si no se ha iniciado tu descarga, haz click aquí
					</a>
				</div>
			</div>
		</div>
	);
}

export default DownloadModal;
