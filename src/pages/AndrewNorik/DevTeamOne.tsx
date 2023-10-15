import React from 'react'
import AboutMe from '../../components/AboutMeAll/AboutMeNZ'
import AboutMeAG from '../../components/AboutMeAll/AboutMeAG'
import Carousel from '../../components/ui/Carousel'
import TechStackDialog from '../../components/ui/TechStackDialog'
import ExperienceAG from '../../components/AboutMeAll/ExperienceAG'
import TechStackAG from '../../components/AboutMeAll/TechStackAG'
import AGspacer from '../../components/AboutMeAll/AGspacer'
import Footer from '../../components/Footer'

import './styles/index.css'

const DevTeamOne = () => (
	<>
		<div className="section-nz">
			<AboutMe />
			<Carousel />
			<TechStackDialog />
		</div>
		<AGspacer />
		<div className="wrapper">
			<AboutMeAG />
		</div>
		<ExperienceAG />
		<TechStackAG />
		<Footer />
	</>
)

export default DevTeamOne
