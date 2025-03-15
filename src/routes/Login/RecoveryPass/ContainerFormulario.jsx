import './styles.module.container.css';
import siginMan from '../../../assets/singin-man.webp';
import Formulario from './Formulario';

function ContainerFormulario({ token }) {
	return (
		<main className={'main'}>
			<picture className={'picture'}>
				<img src={siginMan} alt='' />
			</picture>
			<Formulario token={token} />
		</main>
	);
}

export default ContainerFormulario;
