import React, { useEffect, useRef } from 'react';
import './styles/index.css';

const AboutMeAG: React.FC = () => {
	const backgroundRef = useRef<HTMLDivElement | null>(null);
	const foregroundRef = useRef<HTMLDivElement | null>(null);
	const profileRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		document.addEventListener('scroll', function () {
			const offset = window.pageYOffset;

			if (backgroundRef.current) {
				backgroundRef.current.style.backgroundPositionY = offset * 0 + 'px';
			}

			if (foregroundRef.current) {
				foregroundRef.current.style.backgroundPositionY = -offset * 0 + 'px';
			}

			if (profileRef.current) {
				profileRef.current.style.transform = `translate(-50%, calc(-50% + ${
					-offset * 0.0005
				}px))`;
			}
		});
	}, []);

	return (
		<div className="wrapper">
			<div className="parallax-container">
				<div ref={backgroundRef} className="background"></div>
				<div ref={foregroundRef} className="foreground"></div>
				<div className="drewheader">
					<a href="#" className="icon">
						<img
							src="https://media.licdn.com/dms/image/C4E03AQGWI8RvBh3l9g/profile-displayphoto-shrink_200_200/0/1566226126170?e=1702512000&v=beta&t=8xNoNJY3kp7ZkdeZrxc3kzu5qX1scKYCB64Yn0Bu5b8"
							alt="Description of Image"
						/>
					</a>
					<p className="aboutMe">
						I am currently studying at Queens College.
						<br />I previously interned at PYE Education.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutMeAG;
