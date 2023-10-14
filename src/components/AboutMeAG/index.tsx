import React, { useEffect } from 'react'
import 'src/components/AboutMeAG/styles/index.css'

const AboutMeAG: React.FC = () => {
	useEffect(() => {
		const handleScroll = () => {
			const offset = window.pageYOffset
			const backgroundElement = document.querySelector('.background') as HTMLElement | null
			const foregroundElement = document.querySelector('.foreground') as HTMLElement | null
			const profileElement = document.querySelector('.profile') as HTMLElement | null

			if (backgroundElement && foregroundElement && profileElement) {
				backgroundElement.style.backgroundPositionY = offset * 0.5 + 'px'
				foregroundElement.style.backgroundPositionY = -offset * 0 + 'px'
				profileElement.style.transform = `translate(-50%, calc(-50% + ${-offset * 0.0005}px))`
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<div className="parallax-container">
			<div className="background"></div>
			<div className="foreground"></div>
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
	)
}

export default AboutMeAG
