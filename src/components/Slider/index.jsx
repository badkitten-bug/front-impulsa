import styles from './styles.module.css';
import sliderPhoto1 from '../../assets/slider-photo-1.webp';
import sliderPhoto2 from '../../assets/slider-photo-2.webp';
import sliderPhoto3 from '../../assets/slider-photo-3.webp';
import { useRef, useEffect } from 'react';

function Slider() {
	const sliderRef = useRef(null);
	const sliderIndicatorRef = useRef(null);
	const count = useRef(1);

	useEffect(() => {
		const sliderContainer = sliderRef.current;
		let sliderImageLast =
			sliderContainer.children[sliderContainer.children.length - 1];

		sliderContainer.insertAdjacentElement('afterbegin', sliderImageLast);

		const interval = setInterval(() => {
			let sliderImage = sliderContainer.children;
			let sliderImageFirst = sliderImage[0];
			sliderContainer.style.marginLeft = '-200%';
			sliderContainer.style.transition = 'ease 0.5s';
			setTimeout(() => {
				sliderContainer.style.transition = 'none';
				sliderContainer.insertAdjacentElement('beforeend', sliderImageFirst);
				sliderContainer.style.marginLeft = '-100%';
			}, 500);
		}, 6000);

		return () => clearInterval(interval);
	}, [count]);

	useEffect(() => {
		const interval = setInterval(() => {
			const indicators = sliderIndicatorRef.current.children;

			if (count.current > indicators.length - 1) {
				count.current = 0;
				indicators[indicators.length - 1].style.backgroundColor = '#ffffff62';
			}

			let indicator = indicators[count.current];
			let prevIndicator = indicators[count.current - 1];
			indicator.style.backgroundColor = '#ffffff';

			if (count.current > 0) {
				prevIndicator.style.backgroundColor = '#ffffff62';
			}

			count.current++;
		}, 6000);

		return () => clearInterval(interval);
	}, []);

	return (
		<section className={styles.slider}>
			<div className={styles.slider_container} ref={sliderRef}>
				<div className={styles.slider_image}>
					<div className={styles.sliderText_container}>
						<div className={styles.slider_text}>
							<p>Protege el futuro de los que más quieres.</p>
							<p>Seguro de vida.</p>
						</div>
					</div>
					<figure className={styles.slider_figure}>
						<img src={sliderPhoto2} alt='' />
					</figure>
				</div>
				<div className={styles.slider_image}>
					<div className={styles.sliderText_container}>
						<div className={styles.slider_text}>
							<p>El bienestar de tu famila no tiene precio.</p>
							<p>Seguro de gastos médicos.</p>
						</div>
					</div>
					<figure className={styles.slider_figure}>
						<img src={sliderPhoto3} alt='' />
					</figure>
				</div>
				<div className={styles.slider_image}>
					<div className={styles.sliderText_container}>
						<div className={styles.slider_text}>
							<p>El éxito de tus hijos depende de tu apoyo.</p>
							<p>Ahorros para educación.</p>
						</div>
					</div>
					<figure className={styles.slider_figure}>
						<img src={sliderPhoto1} alt='' />
					</figure>
				</div>
			</div>
			<div className={styles.slider_indicator} ref={sliderIndicatorRef}>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</section>
	);
}

export default Slider;
