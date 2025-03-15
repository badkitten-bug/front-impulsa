import styles from './styles.module.css';
import Loader from 'rsuite/Loader';
import 'rsuite/Loader/styles/index.css';

function LoaderModal({ content }) {
	return (
		<Loader
			size='lg'
			speed='normal'
			backdrop={true}
			content={content}
			vertical={true}
			className={styles.loader}
		/>
	);
}

export default LoaderModal;
