import styles from './styles.module.css';

function Footer() {
	return (
		<footer className={styles.footer}>
			<div>
				<p>
					<span>Impulsa Consultoría Patrimonial</span>
					<span>
						Boulevard Luis Encinas #492, Esquina con calle 14 de Abril,
					</span>
					<span>
						Código Postal: 83209, Ciudad de Hermosillo, Sonora, México.
					</span>
					<span>Teléfono: 01(662) 2 15 8540, Ext: 7029</span>
				</p>
			</div>
			<div>
				<p>
					©2024 IMPULSA CONSULTORÍA PATRIMONIAL, TODOS LOS DERECHOS RESERVADOS
				</p>
			</div>
			<div>
				<p>
					<a href='/privacy-policy'>Política de Privacidad</a>
				</p>
			</div>
		</footer>
	);
}

export default Footer;
