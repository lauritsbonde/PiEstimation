import React from 'react';
import { motion } from 'framer-motion';

const Point = ({ x, y, index, difference, color }) => {
	const newPointAmount = difference.p - difference.lastAmount;
	const hiddenFew = {
		x,
		y,
		opacity: 0,
		scale: 100,
	};

	const visibleFew = {
		opacity: 1,
		scale: 1,
		x: x,
		y: y,
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
			type: 'spring',
			stiffness: 150,
			delay: Math.log(index - difference.lastAmount + 1, 5),
		},
	};

	const hiddenMany = {
		x,
		y,
		opacity: 0,
		scale: 3,
	};

	const visibleMany = {
		opacity: 1,
		scale: 1,
		x: x,
		y: y,
		transition: {
			duration: 0.5,
			ease: 'easeIn',
		},
	};

	const changePoint = 500;

	return (
		<motion.div
			style={{ position: 'absolute', height: '10px', width: '10px', backgroundColor: color, borderRadius: '50%' }}
			initial={newPointAmount <= changePoint ? hiddenFew : hiddenMany}
			animate={newPointAmount <= changePoint ? visibleFew : visibleMany}
			variants={newPointAmount <= changePoint ? { hiddenFew, visibleFew } : { hiddenMany, visibleMany }}
		></motion.div>
	);
};

export default Point;
