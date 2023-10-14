import React from 'react';
import AboutMe from '../../components/AboutMeAll/AboutMeNZ';
import AboutMeAG from '../../components/AboutMeAll/AboutMeAG';
import Carousel from '../../components/ui/Carousel';
import TechStackDialog from '../../components/ui/TechStackDialog';

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
