import React, { useState } from 'react';

import './styles/index.css';

interface PartTwoProps {
	setPartTwoOptions: React.Dispatch<
		React.SetStateAction<{
			timeFrame: string;
			description: string;
		}>
	>;
	formOptions: {
		timeFrame: string;
		description: string;
	};
}

const PartTwo = ({ setPartTwoOptions, formOptions }: PartTwoProps) => {
	return (
		<>
			<div className="date-slider-container">
				<label htmlFor="date-slider">Months to complete project</label>
				<input
					type="range"
					className="date-slider"
					min={1}
					max={12}
					value={formOptions.timeFrame}
					onChange={event => {
						setPartTwoOptions({
							...formOptions,
							timeFrame: event.target.value,
						});
					}}
				/>
				<span>{formOptions.timeFrame}</span>
			</div>
			<div className="tech-experience-container">
				<label htmlFor="description" className="task-description-label">
					Desired Experience in which technologies
				</label>
				<textarea
					name="description"
					placeholder="React, TypeScript, AWS ..."
					className="task-input"
					value={formOptions.description}
					onChange={event => {
						setPartTwoOptions({
							...formOptions,
							description: event.target.value,
						});
					}}
				/>
			</div>
		</>
	);
};

export default PartTwo;
