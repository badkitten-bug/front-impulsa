import styles from './styles.module.css';
import Button from '../Buttom';
import { Call, Person } from '../Icons';
import Nav from '../Nav';
import logo from '../../assets/impulsa_logo.webp';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header className={styles.header}>
			<img
				src={logo}
				alt='logo de aseguradora impulsa'
				className={styles.header_logo}
			/>
			<Nav />
			<div className={styles.header_ctas}>
				{/* <Link to='/'>
					<Call />
				</Link> */}
				<Link to='/login'>
					<Person />
				</Link>
				<div className={styles.button}>
					<Button
						text='Contáctanos'
						href='mailto:info@icpmail.com.mx'
						type={1}
					/>
				</div>
			</div>
		</header>
	);
}

export default Header;
