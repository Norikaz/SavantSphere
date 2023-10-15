import React, { useState } from 'react';
import { Button } from '../../components/ui/button';
import PartOne from '../../components/Forms/BestMatchForms/PartOne';
import PartTwo from '../../components/Forms/BestMatchForms/PartTwo';
import ProgressBar from '../../components/ui/ProgressBar';

import './styles/index.css';

const MAX_SLIDES = 2;
const MIN_SLIDES = 1;

const BestMatchPage = () => {
	const [step, setStep] = useState(1);
	const [partOneOptions, setPartOneOptions] = useState({
		skill: '',
		description: '',
	});
	const [partTwoOptions, setPartTwoOptions] = useState({
		timeFrame: '',
		description: '',
	});

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
					<h1>
						Find The Best Match{' '}
						<span className="muted-text">
							Well connect you with our talent that best meets your needs
						</span>
					</h1>
					<ProgressBar value={`${step == 1 ? '50' : '100'}`} />
				</header>
				<form className="form-step-container">
					{step == 1 && (
						<PartOne
							setPartOneOptions={setPartOneOptions}
							formOptions={partOneOptions}
						/>
					)}
					{step == 2 && (
						<PartTwo
							setPartTwoOptions={setPartTwoOptions}
							formOptions={partTwoOptions}
						/>
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
