import React, { useEffect, useRef } from 'react';

import './styles/index.css';

interface ProgressBarProps {
	value: string;
}

const ProgressBar = ({ value }: ProgressBarProps) => {
	const barNode = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (!barNode.current) return;
		if (value == '50') {
			barNode.current.classList.add('half-bar');
			barNode.current.classList.remove('full-bar');
		}
		if (value == '100') {
			barNode.current.classList.add('full-bar');
			barNode.current.classList.remove('half-bar');
		}
	}, [value]);

	return (
		<div className="empty-bar">
			<div className="fill-amount" ref={barNode}>
				<p>{value}%</p>
			</div>
		</div>
	);
};

export default ProgressBar;
