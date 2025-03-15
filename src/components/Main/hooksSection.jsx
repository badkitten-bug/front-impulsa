import styles from './styles.module.css';
import CardSmall from '../CardSmall';
import {
	BussinesManIcon,
	MoneyIcon,
	MoneyPersonIcon,
	OldPersonIcon,
	ShieldCardIcon,
	StudentIcon,
	WomanIcon,
} from '../Icons';
import { useEffect, useState } from 'react';

const initialList = [
	{
		title: 'Educación',
		paragraph:
			'Asegura la educación de tus hijos con un plan a futuro para sus estudios, ellos te lo van a agredecer siempre.',
		icon: <StudentIcon />,
	},
	{
		title: 'Ahorro',
		paragraph:
			'Genera un ahorro durante un plazo determinado y recibirás el monto invertido mas los intereses GARANTIZADOS que realices tus proyectos y sueños personales.',
		icon: <MoneyIcon />,
	},
	{
		title: 'Retiro',
		paragraph:
			'Plan con atractivos rendimientos para tí, recibes un solo pago al momento de llegar a la etapa de retirarse otorgándote la tranquilidad de tener un Capital en esta etapa de la vida.',
		icon: <OldPersonIcon />,
	},
	{
		title: 'Protección Integral',
		paragraph:
			'Garantiza la tranquilidad de tus dependientes dejándoles un Patrimonio Económico en caso de fallecimiento, ivalidez, incapacidad laboral o enfermedad.',
		icon: <ShieldCardIcon />,
	},
	{
		title: 'Empresarial',
		paragraph:
			'Proyecto para Líderes de Empresas ajustable a las necesidades de Ahorro ó Protección. Beneficios y ventajas en el tema de Deducción de Impuestos.',
		icon: <BussinesManIcon />,
	},
	{
		title: 'Inversión',
		paragraph:
			'Inversión de Capital con atractivos rendimientos, garantiza el crecimiento del Patrimonio ante entornos económicos difíciles con la garantía de que nunca serán menores al 1% en moneda UDIS.',
		icon: <MoneyPersonIcon />,
	},
	{
		title: 'Ahorro Mujer',
		paragraph: `Brinda Respaldo Patrimonial a las Mujeres para lograr objetivos, gran liquidez por los vencimientos anticipados. Alcanza las metas que te propongas. Adicional: incluye la cobertura de Cáncer en Mujeres.`,
		icon: <WomanIcon />,
	},
];

const list = [...initialList, ...initialList];

function HooksSection() {
	return (
		<section className={styles.hooksSection} id='servicios'>
			<div className={styles.hooksSection_title}>
				<h4> Productos que te IMPULSA</h4>
				<p>Descubre nuestra amplia variedad en nuestros servicios</p>
			</div>
			<div className={styles.hooksSection_cards}>
				<div className={styles.hooksSection_cards_inner}>
					{list.map((item, index) => (
						<CardSmall
							key={index}
							title={item.title}
							paragraph={item.paragraph}
						>
							{item.icon}
						</CardSmall>
					))}
				</div>
			</div>
		</section>
	);
}

export default HooksSection;
