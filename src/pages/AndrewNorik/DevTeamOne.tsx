import React from 'react';
import AboutMe from '../../components/AboutMeNZ';
import AboutMeAG from '../../components/AboutMeAG';
import Carousel from '../../components/Carousel';
import TechStackDialog from '../..//components/TechStackDialog';

import './styles/index.css';

const DevTeamOne = () => (
	<>
		<div className="section-nz">
			<AboutMe />
			<Carousel />
			<TechStackDialog />
		</div>
		<div className="wrapper">
			<AboutMeAG />
		</div>
	</>
);

export default DevTeamOne;
