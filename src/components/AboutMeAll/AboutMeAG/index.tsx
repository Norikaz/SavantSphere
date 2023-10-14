import React, { useEffect, useRef } from 'react';
import './styles/index.css';

const AboutMeAG: React.FC = () => {
	const backgroundRef = useRef<HTMLDivElement>(null);
	const foregroundRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			const offset: number = window.pageYOffset; // Changed let to const here
			if (backgroundRef.current) {
				backgroundRef.current.style.backgroundPositionY = offset * 0.09 + 'px';
			}
			if (foregroundRef.current) {
				foregroundRef.current.style.backgroundPositionY = -offset * 0 + 'px';
			}
			// Note: The ".profile" style transform isn't found in the provided HTML. You might want to integrate it if required.
		};
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className="parallax-container">
			<div className="spacer"></div>
			<div ref={backgroundRef} className="background"></div>
			<div ref={foregroundRef} className="foreground"></div>
			<div className="drewheader">
				<a href="#" className="icon">
					<img
						src={require('./styles/1566226126170.jpeg')}
						alt="Description of Image"
					/>
				</a>
				<p className="aboutMe">
					I am currently studying at Queens College.I previously interned at PYE
					Education.
				</p>
			</div>
		</div>
	);
};

export default AboutMeAG;
