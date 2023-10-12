import React from 'react';
import AboutMe from '../../components/AboutMe';
import AboutMeAG from '../../components/AboutMeAG';
import Carousel from '../../components/Carousel';

import './styles/index.css';

const DevTeamOne = () => (
	<>
		<div className="section-nz">
			<AboutMe />
			<Carousel />
		</div>
		<div className="wrapper">
			<AboutMeAG />
		</div>
	</>
);

export default DevTeamOne;
