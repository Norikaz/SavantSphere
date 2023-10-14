import React from 'react'
import './styles/index.css'
import { Avatar, AvatarFallback, AvatarImage } from 'src/components/ui/avatar'
import SysAdminDialog from './SysAdminDialog'
import ProjectsDialog from './ProjectsDialog'
import { Card } from './animatedCard'

const AboutMeSam = () => {
	return (
		<div className="sam-portfolio">
			<div className="curve"></div>
			<div className="about-me description">
				<Card height={400} width={700} />
				<div>
					<h1>About me</h1>
					{/* className="description-sam" uses a flip animation on page load */}
					<p className="description-sam">
						Hello there! I am <strong>Samiul</strong>, a student and an aspiring <strong>software developer</strong>. I have experience in full stack
						web development using various different frameworks and libraries.
					</p>
					<h1>Experiences</h1>
					<p className="description-sam">
						- System Administrator (March 2020 - August 2021){' '}
						<span className="bounce">
							<SysAdminDialog />
						</span>
						<br />- Programming Projects{' '}
						<span className="bounce">
							<ProjectsDialog />
						</span>
					</p>
					<h1>Skills</h1>
					<p className="description-sam">Languages: Python, C++, C, Golang, Javascript, Typescript, HTML/CSS, C#.NET, SQL</p>
					<p className="description-sam">Frameworks: React, Next.js, Express.js, Django, Flask, FastAPI, TensorflowL</p>
					<p className="description-sam">Tools: Linux, Git, Github, AWS, GCP, Docker, Firebase</p>
				</div>
			</div>
		</div>
	)
}

export default AboutMeSam
