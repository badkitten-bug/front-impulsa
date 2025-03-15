import styles from './styles.module.css';
import { ArrowDown, ArrowUp } from '../Icons';
import { useState } from 'react';
import { clsx } from 'clsx';

function Accordion({ children, title }) {
	const [open, setOpen] = useState(false);

	const clsxConfig = clsx({
		[styles.section_children]: true,
		[styles.show]: open,
	});

	const arrowRender = open ? <ArrowUp /> : <ArrowDown />;

	return (
		<section className={styles.section}>
			<div className={styles.section_title} onClick={e => setOpen(!open)}>
				<p>{title}</p>
				{arrowRender}
			</div>
			<div className={clsxConfig}>{children}</div>
		</section>
	);
}

export default Accordion;
