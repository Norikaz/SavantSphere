import React from 'react';

import './styles/index.css';

const AboutMeAG = () => {
	return (
		<>
			<header className="drewheader">
				<img src="/images/REALBACKGROUD.png" className="background" />
				<img src="/images/layer1.png" className="foreground" />
				<a href="#" className="icon">
					<img
						src="https://i.pinimg.com/736x/10/ea/11/10ea11b776c5668d8d42d7dcbdb949bd.jpg"
						alt="Description of Image"
					/>
				</a>
				<p className="aboutMe">
					&quot;This is where my about me is going to go&quot;
				</p>
			</header>
		</>
	);
};

export default AboutMeAG;
