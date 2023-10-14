import React, { useState } from 'react';

import './styles/index.css';

interface FormTwoProps {
	setTimeFrame: React.Dispatch<React.SetStateAction<string>>;
	timeFrame: string;
}

const PartTwo = ({ setTimeFrame, timeFrame }: FormTwoProps) => {
	return (
		<>
			<div className="date-slider-container">
				<label htmlFor="date-slider">Expected Time for project</label>
				<input
					type="range"
					className="date-slider"
					min={1}
					max={12}
					value={timeFrame}
					onChange={event => {
						setTimeFrame(event.target.value);
					}}
				/>
				<span>{timeFrame}</span>
			</div>
			<div className="tech-experience-container">
				<label htmlFor="description" className="task-description-label">
					Desired Experience in which technologies
				</label>
				<textarea
					name="description"
					placeholder="React, TypeScript, AWS ..."
					className="task-input"
				/>
			</div>
		</>
	);
};

export default PartTwo;
