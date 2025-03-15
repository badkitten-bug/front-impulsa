import styles from './styles.module.css';
import Ask from './ask';

function CardAsk() {
	return (
		<div className={styles.container}>
			<Ask
				question='¿Qué es un seguro de vida?'
				answers='Un seguro de vida es un contrato entre una persona (asegurado) y una compañía de seguros (aseguradora), en el cual la aseguradora se compromete a pagar una suma de dinero a los beneficiarios designados por el asegurado en caso de su fallecimiento. Este tipo de seguro tiene como objetivo principal proporcionar protección financiera a los seres queridos del asegurado en caso de que éste fallezca, ayudando a cubrir gastos como deudas, educación, manutención y otros compromisos económicos.'
			/>
			<Ask
				question='¿Por qué necesito un seguro de vida?'
				answers='Contratar un seguro de vida es crucial para proteger financieramente a tus seres queridos en caso de tu fallecimiento, ya que cubre deudas, gastos funerarios, educación de los hijos y otros costos, garantizando su bienestar económico. Además, facilita la planificación del patrimonio, ofrece tranquilidad mental y, si tienes un negocio, asegura su continuidad. En resumen, un seguro de vida es una muestra de amor y responsabilidad hacia tu familia, asegurando su estabilidad cuando tú ya no estés.'
			/>
			<Ask
				question='¿Puedo cambiar mi plan de seguro de vida?'
				answers='Sí, puedes cambiar tu plan de seguro de vida. Debes revisar tu póliza actual y contactar a tu asesor de Impulsa México para evaluar tus necesidades y explorar las opciones disponibles. Luego, completa una solicitud de cambio, la cual será revisada y aprobada por la aseguradora. Considera posibles costos o penalizaciones, y asegúrate de recibir y revisar la nueva documentación de tu póliza.'
			/>
			<Ask
				question='¿Qué cubre mi seguro de vida?'
				answers='El seguro de vida de Impulsa México cubre el fallecimiento del asegurado, garantizando una suma asegurada a los beneficiarios designados. Además, puede incluir coberturas adicionales como invalidez total y permanente, enfermedades graves, y asistencia funeraria, dependiendo del plan contratado. Este seguro ofrece protección financiera y tranquilidad a los seres queridos del asegurado en caso de su ausencia.'
			/>
			<Ask
				question='¿Por qué debo escoger IMPULSA?'
				answers='Debes escoger Impulsa México porque ofrecemos una amplia gama de productos de seguros personalizados, diseñados para satisfacer tus necesidades específicas y brindarte tranquilidad. Contamos con una sólida reputación en el mercado, excelente servicio al cliente, y un equipo de expertos comprometidos con tu bienestar financiero. Además, nuestros seguros incluyen coberturas adicionales y beneficios exclusivos que te proporcionan una protección integral y confiable. '
			/>
			<Ask
				question='¿Tienen un producto de acuerdo a mis necesidades?'
				answers='En Impulsa México, contamos con una amplia variedad de productos de seguros diseñados para adaptarse a diferentes necesidades y situaciones, desde seguros de vida y salud hasta seguros de auto y hogar. Nuestros asesores expertos están disponibles para ayudarte a elegir el plan que mejor se ajuste a tus requerimientos específicos, garantizándote una protección personalizada y completa.'
			/>
			<Ask
				question='¿Alguien respalda a IMPULSA?'
				answers='Sí, Impulsa México cuenta con el respaldo de importantes reaseguradoras internacionales, lo que garantiza nuestra solidez financiera y capacidad para cumplir con nuestras obligaciones. Además, estamos regulados y supervisados por la Comisión Nacional de Seguros y Fianzas (CNSF), lo que asegura que operamos bajo estrictos estándares de calidad y transparencia.'
			/>
		</div>
	);
}

export default CardAsk;
