import React from 'react';
import './styles/index.css';
import BlogWebsiteDialog from './BlogWebsiteDialog';
import ArtifusionDialog from './ArtifusionDialog';
import ReadTellDialog from './ReadTellDialog';
import { Card } from './animatedCard';

const AboutMeTas = () => {
	return (
		<div className="tas-portfolio">
			<div className="about-me description">
				<Card height={400} width={700} />
				<div>
					<h1>About me</h1>
					<p className="tas-description">
						Greetings! I am <strong>Tasneem Hasanat</strong>, a Computer Science
						student at Queens College, CUNY, based in New York. I am an aspiring{' '}
						<strong>full-stack developer</strong> with a keen focus on various
						technologies.
					</p>
					<h1>Contact</h1>
					<p className="tas-description">
						Phone: (917) 660-1741 <br />
						Email: tasneem.hasanat01@qmail.cuny.edu <br />
						LinkedIn:{' '}
						<a href="https://www.linkedin.com/in/tasneemhasanat97">
							Profile
						</a>{' '}
						<br />
						Website: <a href="https://thqio.com">thqio.com</a>
					</p>
					<h1>Experiences</h1>
					<p className="tas-description">
						- CUNY Tech Prep: Software Development/Data Science <br />
						- Whizara: Software Programming Instructor <br />- Code Path: Web
						Developer Teaching Assistant
					</p>
					<h1>Projects</h1>
					<p className="tas-description">
						- Blog Website{' '}
						<span className="bounce">
							<BlogWebsiteDialog />
						</span>{' '}
						<br />- Artifusion{' '}
						<span className="bounce">
							<ArtifusionDialog />
						</span>{' '}
						<br />- Read & Tell{' '}
						<span className="bounce">
							<ReadTellDialog />
						</span>
					</p>
					<h1>Skills</h1>
					<p className="tas-description">
						Languages: Java, Python, Javascript, C++, SQL <br />
						Technologies: Xcode, Git, VS, AWS, React, Node, Express, Bootstrap,
						Tailwind, MongoDB, Docker, Swift, Firebase, Kubernetes <br />
						Certifications: CodePath’s iOS Development, CodePath’s
						Web-Development
					</p>
					<h1>Languages Spoken</h1>
					<p className="tas-description">Bengali, Hindi, Urdu, English</p>
				</div>
			</div>
		</div>
	);
};

export default AboutMeTas;
