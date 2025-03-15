import styles from './styles.module.css';

function CardSmall({ children, title, paragraph }) {
	// Función para buscar y reemplazar palabras en negrita
	const formatParagraph = text => {
		const regex = /\*(.*?)\*/g;
		return text.replace(regex, '<span>$1</span>');
	};

	return (
		<div className={styles.container}>
			<div className={styles.card_title}>
				{children}
				<h6 className={styles.title}>{title}</h6>
			</div>
			{/* Aplicamos la función formatParagraph al contenido de la prop */}
			<p
				className={styles.paragraph}
				dangerouslySetInnerHTML={{ __html: formatParagraph(paragraph) }}
			/>
		</div>
	);
}

export default CardSmall;
