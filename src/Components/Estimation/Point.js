import React from 'react';
import { motion } from 'framer-motion';

const Point = ({ x, y }) => {
	const hidden = {
		x,
		y,
		opacity: 0,
		scale: 100,
	};

	const visible = {
		opacity: 1,
		scale: 1,
		x: x,
		y: y,
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
			type: 'spring',
			stiffness: 150,
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
