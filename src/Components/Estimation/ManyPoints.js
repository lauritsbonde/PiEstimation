import React, { useState } from 'react';

const ManyPoints = ({ maxPoints, setManyPoints }) => {
	const [pointsToSet, setPointsToSet] = useState(0);
	const pointsSettingChange = (e) => {
		if (e.target.value > 0 && e.target.value <= maxPoints) {
			setPointsToSet(e.target.value);
		}
	};
	return (
		<p>
			Set many points:{' '}
			<input
				type="number"
				onChange={(e) => {
					pointsSettingChange(e);
				}}
			/>{' '}
			<button onClick={() => setManyPoints(pointsToSet)}>Set!</button>
		</p>
	);
};

export default ManyPoints;
