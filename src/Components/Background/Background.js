import React from 'react';
import Pi from './Pi';
import bgStyle from '../../Styles/background.module.css';

const Background = () => {
	const piAmount = Math.round(Math.random() * 50) + 10;
	const pis = [];
	for (let i = 0; i < piAmount; i++) {
		const pi = {
			size: Math.round(Math.random() * 45) + 10,
			start: {
				x: Math.round(Math.random() * window.innerWidth) + 1,
				y: Math.round(Math.random() * window.innerHeight) + 1,
				r: Math.random() * 360,
			},
		};
		pis.push(pi);
	}

	return (
		<div className={bgStyle.background}>
			{pis.map((pi, index) => {
				return <Pi key={index} size={pi.size} c={bgStyle.pi} start={pi.start} />;
			})}
		</div>
	);
};

export default Background;
