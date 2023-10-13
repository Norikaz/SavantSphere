import React from 'react';
import AboutMe from "../../components/AboutMe's/AboutMeNZ";
import AboutMeAG from "../../components/AboutMe's/AboutMeAG";
import Carousel from '../../components/ui/Carousel';

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
