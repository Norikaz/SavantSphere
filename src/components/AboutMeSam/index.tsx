import React from 'react'
import './styles/index.css'
import { Avatar, AvatarFallback, AvatarImage } from 'src/components/ui/avatar'
import SysAdminDialog from './SysAdminDialog'
import ProjectsDialog from './ProjectsDialog'

const AboutMeSam = () => {
	return (
		<div className="about-me">
			<Avatar>
				<AvatarImage src="/images/sam_profile_pic.jpg" className="sam-profile-pic" />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>

			<div>
				<h1 className="description">About me</h1>
				{/* className="description-sam" uses a flip animation on page load */}
				<p className="description-sam">
					Hello there! I am <span className="sam-glow">Samiul,</span> a student and an aspiring <strong>software developer</strong>. I have experience
					in full stack web development using various different frameworks and libraries.
				</p>

				<h1 className="description">Experiences</h1>
				<p className="description-sam">
					- System Administrator (March 2020 - August 2021) <SysAdminDialog />
					<br />
					- Programming Projects <ProjectsDialog />
				</p>

				<h1 className="description">Skills</h1>
				<p className="description-sam">Languages: Python, C++, C, Golang, Javascript, Typescript, HTML/CSS, C#.NET, SQL</p>
				<p className="description-sam">Frameworks: React, Next.js, Express.js, Django, Flask, FastAPI, TensorflowL</p>
				<p className="description-sam">Tools: Linux, Git, Github, AWS, GCP, Docker, Firebase</p>
			</div>
		</div>
	)
}

export default AboutMeSam
