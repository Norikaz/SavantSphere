import React, { useState } from 'react';

import './styles/index.css';

interface FormOneProps {
	setFormOneOptions: React.Dispatch<
		React.SetStateAction<{
			skill: string;
			description: string;
		}>
	>;
	formOptions: {
		skill: string;
		description: string;
	};
}
const FormOne = ({ setFormOneOptions, formOptions }: FormOneProps) => {
	const handleRadioChange = (value: string) => {
		setFormOneOptions({ ...formOptions, skill: value });
	};

	const handleTextChange = (value: string) => {
		setFormOneOptions({ ...formOptions, description: value });
	};

	return (
		<>
			<div className="skill-concentration">
				<h3>
					Concentration
					<span className="muted-text">
						What section do you perfer the developer to be proficient in
					</span>
				</h3>

				<input
					type="radio"
					name="web-dev"
					value="web"
					checked={formOptions.skill == 'web'}
					onChange={event => {
						handleRadioChange(event.target.value);
					}}
				/>
				<label htmlFor="web-dev" className="skill">
					Web
				</label>

				<input
					type="radio"
					name="moblie-dev"
					value="moblie"
					checked={formOptions.skill == 'moblie'}
					onChange={event => {
						handleRadioChange(event.target.value);
					}}
				/>
				<label htmlFor="moblie-dev" className="skill">
					Moblie
				</label>

				<input
					type="radio"
					name="ai-machine-learning"
					value="AI"
					checked={formOptions.skill == 'AI'}
					onChange={event => {
						handleRadioChange(event.target.value);
					}}
				/>
				<label htmlFor="moblie-dev" className="skill">
					AI and Machine Learning
				</label>

				<input
					type="radio"
					name="Information Security"
					value="security"
					checked={formOptions.skill == 'security'}
					onChange={event => {
						handleRadioChange(event.target.value);
					}}
				/>
				<label htmlFor="Information Security">Information Security</label>
			</div>
			<div className="task-description-container">
				<label htmlFor="description" className="task-description-label">
					Task Description
				</label>
				<textarea
					name="description"
					placeholder="Describe your problem"
					className="task-input"
				/>
			</div>
		</>
	);
};

export default FormOne;
