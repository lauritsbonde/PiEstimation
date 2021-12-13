import React, { useState } from 'react';
import style from '../../Styles/estimate.module.css';
import ManyPoints from './ManyPoints';
import Point from './Point';

const Estimate = () => {
	const maxPoints = 5000;
	const [estimate, setEstimate] = useState(0);
	const [pointsInCircle, setPointsInCircle] = useState(0);
	const [pointsInRectangle, setPointsInRectangle] = useState(0);
	const radius = Math.round(Math.min(window.innerWidth, window.innerHeight) * 0.66);
	const [points, setPoints] = useState([]);
	const [lastAmount, setLastAmount] = useState(0);
	const [colorFul, setColorFul] = useState(false);

	const setManyPoints = (pointsToSet) => {
		if (pointsToSet > 0 && pointsToSet <= maxPoints) {
			const newPoints = [];
			for (let i = 0; i < pointsToSet; i++) {
				const x = Math.random() * radius;
				const y = Math.random() * radius;
				newPoints.push({ x, y, color: colorFul ? randomHexColor() : '#ffffff' });
			}
			if (newPoints.length + points.length <= maxPoints) {
				const allPoints = [...points, ...newPoints];
				setLastAmount(points.length);
				setPoints(allPoints);
				estimatePi(allPoints);
			} else {
				setPoints([...newPoints]);
				estimatePi(newPoints);
			}
		}
	};

	const setNewPoint = () => {
		if (points.length <= maxPoints) {
			const x = Math.random() * radius;
			const y = Math.random() * radius;
			const newPoints = [...points, { x, y, color: colorFul ? randomHexColor() : '#ffffff' }];
			setLastAmount(points.length);
			setPoints(newPoints);
			estimatePi(newPoints);
		}
	};

	const randomHexColor = () => {
		const letters = '0123456789ABCDEF';
		let color = '#';
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	};

	const estimatePi = (points) => {
		const pointsInsideCircle = points.filter((point) => {
			// distance between point and center of circle
			const distance = Math.sqrt(Math.pow(point.x - radius / 2, 2) + Math.pow(point.y - radius / 2, 2));
			return distance <= radius / 2;
		});
		const pi = (pointsInsideCircle.length / points.length) * 4;
		setPointsInCircle(pointsInsideCircle.length);
		setPointsInRectangle(points.length);
		setEstimate(pi);
	};

	const changeColorful = () => {
		const newPoints = points.map((point) => {
			return { ...point, color: !colorFul ? randomHexColor() : '#ffffff' };
		});
		setPoints(newPoints);
		setColorFul(!colorFul);
	};

	return (
		<div>
			<div style={{ width: '100%', textAlign: 'center', padding: '1% 0 0 0' }}>
				<h1 style={{ margin: 0 }}>Estimating Pi!</h1>
				<p>
					Pi estimate: 4*({pointsInCircle} / {pointsInRectangle}) = {estimate}
				</p>
				<p>How? 4 * (number of points in circle / total number of points)</p>
				<p>
					<input
						type="checkbox"
						onClick={() => {
							changeColorful();
						}}
						id="colorful"
					/>
					<label htmlFor="colorful">Colorful Points!</label>
				</p>
				<button
					onClick={() => {
						setNewPoint();
					}}
				>
					Add point
				</button>
				<ManyPoints maxPoints={maxPoints} setManyPoints={setManyPoints} />
				<p>Max {maxPoints} points | could slow your browser</p>
			</div>
			<div className={style.square} style={{ width: radius + 'px', height: radius + 'px', backgroundColor: 'black', border: '4px solid white', margin: '5% auto' }}>
				<div className={style.circle}></div>
				{points.map((point, index) => (
					<Point key={index} x={point.x} y={point.y} index={index} difference={{ p: points.length, lastAmount }} color={point.color} />
				))}
			</div>
		</div>
	);
};

export default Estimate;
