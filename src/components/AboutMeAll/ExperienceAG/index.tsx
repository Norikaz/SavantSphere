import React, { useEffect, useRef } from 'react';
import './styles/index.css';

const ExperienceAG: React.FC = () => {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const boxesRefs = useRef<Array<HTMLDivElement | null>>([]);

	useEffect(() => {
		const checkBoxes = () => {
			const triggerBottom = (window.innerHeight / 5) * 4; // Define triggerBottom here

			console.log('triggerBottom:', triggerBottom);

			if (containerRef.current) {
				boxesRefs.current.forEach((boxRef, index) => {
					if (boxRef instanceof HTMLDivElement) {
						const boxTop = boxRef.getBoundingClientRect().top;

						console.log(`Box ${index} top:`, boxTop);

						if (boxTop < triggerBottom) {
							boxRef.classList.add('show');
						} else {
							boxRef.classList.remove('show');
						}
					}
				});
			}
		};

		checkBoxes();

		window.addEventListener('scroll', checkBoxes);

		return () => {
			window.removeEventListener('scroll', checkBoxes);
		};
	}, []);

	return (
		<div className="experiencesback" ref={containerRef}>
			<h1 className="experiences">Experiences</h1>
			<div className="box" ref={el => (boxesRefs.current[0] = el)}>
				<h2>
					Internship at <b>PYE Education</b>
				</h2>
			</div>
			<div className="box" ref={el => (boxesRefs.current[1] = el)}>
				<h2>
					<b>Google CSSI alumni</b>
				</h2>
			</div>
			<div className="box" ref={el => (boxesRefs.current[2] = el)}>
				<h2>
					Part Time at <b>Queens Public Library</b>
				</h2>
			</div>
			<div className="hero">
				<div className="cube"></div>
				<div className="cube"></div>
				<div className="cube"></div>
				<div className="cube"></div>
				<div className="cube"></div>
				<div className="cube"></div>
			</div>
		</div>
	);
};

export default ExperienceAG;
