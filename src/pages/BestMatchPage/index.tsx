import React, { useState } from 'react';
import { Button } from '../../components/ui/button';
import FormOne from '../../components/Forms/BestMatchForms/FormOne';
import ProgressBar from '../../components/ui/ProgressBar';
import FormTwo from '../../components/Forms/BestMatchForms/FormTwo';

import './styles/index.css';

const MAX_SLIDES = 2;
const MIN_SLIDES = 1;

const BestMatchPage = () => {
	const [step, setStep] = useState(1);
	const [formOneOptions, setFormOneOptions] = useState({
		skill: '',
		description: '',
	});
	const [timeFrame, setTimeFrame] = useState('1');

	const onPrevSlide = () => {
		setStep(step - 1);
	};

	const onNextSlide = () => {
		setStep(step + 1);
	};

	return (
		<>
			<div className="form-container">
				<header>
					<h1>Find The Best Match</h1>
					<ProgressBar value={`${step == 1 ? '50' : '100'}`} />
				</header>
				<form className="form-step-container">
					{step == 1 && (
						<FormOne
							setFormOneOptions={setFormOneOptions}
							formOptions={formOneOptions}
						/>
					)}
					{step == 2 && (
						<FormTwo setTimeFrame={setTimeFrame} timeFrame={timeFrame} />
					)}
					<div className="step-controller">
						<Button
							className="match-form-btn"
							onClick={onPrevSlide}
							disabled={step == MIN_SLIDES}
						>
							previous
						</Button>
						<Button
							className="match-form-btn"
							onClick={onNextSlide}
							disabled={step == MAX_SLIDES}
						>
							next
						</Button>
						{step == 2 && (
							<Button className="match-form-btn submit">submit</Button>
						)}
					</div>
				</form>
			</div>
		</>
	);
};

export default BestMatchPage;
