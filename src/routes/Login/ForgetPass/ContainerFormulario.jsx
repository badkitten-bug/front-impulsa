import './styles.module.container.css';
import siginMan from '../../../assets/singin-man.webp';
import Formulario from './Formulario';

function ContainerFormulario() {
	return (
		<main className={'main'}>
			<picture className={'picture'}>
				<img src={siginMan} alt='' />
			</picture>
			<Formulario />
		</main>
	);
}

export default ContainerFormulario;
