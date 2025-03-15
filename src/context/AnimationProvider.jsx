import { createContext } from 'react';
import { motion } from 'framer-motion';

export const AnimationContext = createContext();

function AnimationProvider({ children }) {
	const configAnimate = {
		opacity: 1,
		x: 0,
	};

	return (
		<AnimationContext.Provider value={''}>
			<motion.div
				initial={{ opacity: 0, x: 100 }}
				animate={configAnimate}
				transition={{ duration: 0.5 }}
			>
				{children}
			</motion.div>
		</AnimationContext.Provider>
	);
}

export default AnimationProvider;
