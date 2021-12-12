import React from 'react';
import { motion } from 'framer-motion';

const Point = ({ x, y, delay }) => {
	const hidden = {
		x,
		y,
		opacity: 0,
		scale: 100 - Math.pow(delay, 0.6),
	};

	const visible = {
		opacity: 1,
		scale: 1,
		x: x,
		y: y,
		transition: {
			duration: 0.5,
			ease: delay < 500 ? 'easeInOut' : '',
			type: delay < 500 ? 'spring' : '',
			stiffness: delay < 500 ? 150 : 0,
			delay: Math.log(delay, 10),
		},
	};

	return (
		<motion.div
			style={{ position: 'absolute', height: '10px', width: '10px', backgroundColor: 'white', borderRadius: '50%' }}
			initial="hidden"
			animate="visible"
			variants={{ hidden, visible }}
		></motion.div>
	);
};

export default Point;
