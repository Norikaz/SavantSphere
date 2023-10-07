import React from 'react';
import './styles/index.css';

const AboutMe = () => {
	return (
		<div className="about-me">
			<img
				src="/images/norik_profile_pic.jpg"
				alt="Not Found"
				className="norik-profile-pic"
			></img>
			<div>
				<h1>About me</h1>
				<p className="description">
					I am a software developer at Queens College University. I was
					<strong> intern for Amazon</strong> and learn how to{' '}
					<strong>develop, desgin and maintain </strong> full stack web apps.
				</p>
			</div>
		</div>
	);
};

export default AboutMe;
