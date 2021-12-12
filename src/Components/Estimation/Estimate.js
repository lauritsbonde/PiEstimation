import React, { useState } from 'react';
import style from '../../Styles/estimate.module.css';
import Point from './Point';

const Estimate = () => {
	const maxPoints = 5000;
	const [estimate, setEstimate] = useState(0);
	const [pointsInCircle, setPointsInCircle] = useState(0);
	const [pointsInRectangle, setPointsInRectangle] = useState(0);
	const radius = Math.round(Math.min(window.innerWidth, window.innerHeight) * 0.66);
	const [points, setPoints] = useState([]);
	const [pointsToSet, setPointsToSet] = useState(0);

	const pointsSettingChange = (e) => {
		if (e.target.value > 0 && e.target.value <= maxPoints) {
			setPointsToSet(e.target.value);
		}
	};

	const setManyPoints = () => {
		const newPoints = [];
		for (let i = 0; i < pointsToSet; i++) {
			const x = Math.random() * radius;
			const y = Math.random() * radius;
			newPoints.push({ x, y });
		}
		if (newPoints.length + points.length <= maxPoints) {
			setPoints([...points, ...newPoints]);
			estimatePi([...points, ...newPoints]);
		} else {
			setPoints([...newPoints]);
			estimatePi(newPoints);
		}
	};

	const setNewPoint = () => {
		if (points.length <= maxPoints) {
			const x = Math.random() * radius;
			const y = Math.random() * radius;
			const newPoints = [...points, { x, y }];
			setPoints(newPoints);
			estimatePi(newPoints);
		}
	};

	const estimatePi = (points) => {
		const pointsInsideCircle = points.filter((point) => {
			// distance between point and center of circle
			const distance = Math.sqrt(Math.pow(point.x - radius / 2, 2) + Math.pow(point.y - radius / 2, 2));
			console.log(distance);
			return distance <= radius / 2;
		});
		const pi = (pointsInsideCircle.length / points.length) * 4;
		setPointsInCircle(pointsInsideCircle.length);
		setPointsInRectangle(points.length);
		setEstimate(pi);
	};

	return (
		<div>
			<div style={{ width: '100%', textAlign: 'center', padding: '1% 0 0 0' }}>
				<h1 style={{ margin: 0 }}>Estimating Pi!</h1>
				<p>
					Pi estimate: 4*({pointsInCircle} / {pointsInRectangle}) = {estimate}
				</p>
				<p>How? 4 * (number of points in circle / total number of points)</p>
				<button
					onClick={() => {
						setNewPoint();
					}}
				>
					Add point
				</button>
				<p>
					Set many points:{' '}
					<input
						type="number"
						onChange={(e) => {
							pointsSettingChange(e);
						}}
					/>{' '}
					<button onClick={() => setManyPoints()}>Set!</button>
				</p>
				<p>Max {maxPoints} points | could slow your browser</p>
			</div>
			<div className={style.square} style={{ width: radius + 'px', height: radius + 'px', backgroundColor: 'black', border: '4px solid white', margin: '7.5% auto' }}>
				<div className={style.circle} style={{ width: radius + 'px', height: radius + 'px' }}></div>
				{points.map((point, index) => (
					<Point key={index} x={point.x} y={point.y} delay={index} />
				))}
			</div>
		</div>
	);
};

export default Estimate;
