import React from 'react'
import './styles/index.css'
import { Avatar, AvatarFallback, AvatarImage } from 'src/components/ui/avatar'

const AboutMeSam = () => {
	return (
		<div className="about-me">
			<Avatar>
				<AvatarImage src="/images/sam_profile_pic.jpg" className="sam-profile-pic" />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>

			<div>
				<h1>About me</h1>
				{/* className="description-sam" uses a flip animation on page load */}
				<p className="description-sam">
					Hello there! I am <span className="sam-glow">Samiul,</span> a student and an aspiring <span className="sam-glow">software developer</span>.
					I have experience in full stack web development using various different <span className="sam-glow">frameworks and libraries.</span>
				</p>

				<h1>Experiences</h1>
				<p className="description-sam">
					TODO: talk ab employment history, 2-3 diff old projects, use modal or a horizontol scrolling carousel w/ animations
				</p>

				<h1>Skills</h1>
				<p className="description-sam">
					TODO: list technical skills, languages, frameworks, sde tools ik ab. add progress bars or other indicator elements to visualize proficiency
				</p>

				<div>
					<h1>reserving this space for TRANSITION from my portfolio to Tasneems</h1>
				</div>

				<hr />

				{/* Tas Implement however you want */}
				<h1>About me</h1>
				{/* className="description" is using a fade effect on page load */}
				<p className="description">tas</p>
			</div>
		</div>
	)
}

export default AboutMeSam
