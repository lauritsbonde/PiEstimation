import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Pi = ({ size, c, start }) => {
	const xrandom = Math.random() * 100 + 1;
	const yrandom = Math.random() * 100 + 1;
	const rrandom = Math.random() * 20 + 1;
	const [opacity] = useState(Math.random());
	const [onScreen, setOnScreen] = useState({ x: true, y: true });
	const [speed, setSpeed] = useState({ x: Math.random() > 0.5 ? xrandom : -1 * xrandom, y: Math.random() > 0.5 ? yrandom : -1 * yrandom, r: Math.random() > 0.5 ? rrandom : -1 * rrandom });
	const [pos, setPos] = useState({ x: start.x, y: start.y, r: start.r });
	const variant = {
		animate: {
			scale: 1,
			x: pos.x,
			y: pos.y,
			opacity: opacity,
			rotate: pos.r,
			transition: {
				duration: 1,
				ease: 'linear',
			},
		},
	};

	const flipY = () => {
		setSpeed({ x: speed.x, y: -1 * speed.y, r: speed.r });
	};

	const flipX = () => {
		setSpeed({ x: -1 * speed.x, y: speed.y, r: speed.r });
	};

	return (
		<motion.p
			style={{ fontSize: size + 'px' }}
			className={c}
			animate="animate"
			variants={variant}
			transition={{
				ease: 'linear',
			}}
			onAnimationComplete={() => {
				if ((pos.x > window.innerWidth || pos.x < 0) && onScreen.x) {
					setOnScreen({ ...onScreen, x: false });
					flipX();
				}
				if ((pos.y > window.innerHeight || pos.y < 0) && onScreen.y) {
					setOnScreen({ ...onScreen, y: false });
					flipY();
				}
				if (pos.x < window.innerWidth && pos.x > 0 && !onScreen.x) {
					setOnScreen({ ...onScreen, x: true });
				}
				if (pos.y < window.innerHeight && pos.y > 0 && !onScreen.y) {
					setOnScreen({ ...onScreen, y: true });
				}
				setPos({ x: pos.x + speed.x, y: pos.y + speed.y, r: pos.r + speed.r });
			}}
		>
			π
		</motion.p>
	);
};

export default Pi;
