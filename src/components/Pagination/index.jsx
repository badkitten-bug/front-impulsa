import styles from './styles.module.css';
import { ArrowLeft, ArrowRight } from '../Icons';
import clsx from 'clsx';

function Pagination({ data, page, prevPage, nextPage }) {
	const paginationInfo = {
		totalPages: data.valoresPaginacion.totalPages,
		currentPage: data.valoresPaginacion.currentPage,
	};

	const arrowLeftClassNames = clsx({
		[styles.arrowLeft]: true,
		[styles.disabled]: page === 1,
	});
	const arrowRightClassNames = clsx({
		[styles.arrowRight]: true,
		[styles.disabled]: page === paginationInfo.totalPages,
	});

	const handleClickLeft = () => {
		if (page === 1) return;
		prevPage();
	};

	const handleClickRight = () => {
		if (page === paginationInfo.totalPages) return;
		nextPage();
	};

	return (
		<div className={styles.container}>
			<div className={arrowLeftClassNames} onClick={handleClickLeft}>
				<ArrowLeft />
			</div>
			<div className={styles.info}>
				<p>
					{paginationInfo.currentPage} / {paginationInfo.totalPages}
				</p>
			</div>
			<div className={arrowRightClassNames} onClick={handleClickRight}>
				<ArrowRight />
			</div>
		</div>
	);
}

export default Pagination;
