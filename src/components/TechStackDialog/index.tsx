import React from 'react';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '../ui/dialog';
import { Expand } from 'lucide-react';

import './styles/index.css';

const TechStackDialog = () => {
	return (
		<div className="tech-stack-dialog-container">
			<Dialog>
				<DialogTrigger className="tech-stack-dialog-btn">
					<Expand className="expand-icon" />
					Tech stacks
				</DialogTrigger>
				<DialogContent className="tech-stack-dialog-content">
					<DialogHeader>
						<DialogTitle>Tech Stacks</DialogTitle>
					</DialogHeader>
					<div className="tech-stacks-imgs">
						<div className="tech-stack-container">
							<div className="development-envoirment">
								<div className="development-header">
									<DialogTitle>Front End</DialogTitle>
									<p className="muted-text">Development Environment</p>
								</div>
								<img
									src="/images/react_logo.png"
									className="norik-profile-pic"
								/>
								<img
									src="/images/type_script_logo.png"
									className="norik-profile-pic"
								/>
							</div>
							<div className="testing-envoirment">
								<div className="development-header">
									<DialogTitle>Testing</DialogTitle>
									<p className="muted-text"> Environment</p>
								</div>
								<div>
									<img src="/images/jest.png" className="norik-profile-pic" />
									<img
										src="https://testing-library.com/img/octopus-128x128.png"
										className="norik-profile-pic"
									/>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className="tech-stack-container">
							<div className="development-envoirment">
								<div className="development-header">
									<DialogTitle>Back End</DialogTitle>
									<p className="muted-text">Development Environment</p>
								</div>
								<img
									src="/images/java_logo.png"
									className="norik-profile-pic"
								/>
								<img src="/images/spring.png" className="norik-profile-pic" />
							</div>
							<div className="testing-envoirment">
								<div className="development-header">
									<DialogTitle>Testing</DialogTitle>
									<p className="muted-text"> Environment</p>
								</div>
								<div>
									<img
										src="https://png2.cleanpng.com/sh/8b34e221d88e85d601894204ba5bfcf5/L0KzQYm3VsIzN6pAkJH0aYP2gLBuTfp2dpp5ReZuc4Swccb7jB1ifJp0hp98b3b3h7L5hb11baR5gdDwLYXxecW0lPV0fJpzRadrMnS4dYXoU8FibmUARqkDNEW1RIO8UcUzQWcAUas6NEKzQ4a1kP5o/kisspng-junit-test-automation-software-testing-unit-testin-5b2d5e4a31af49.7845242515296999142035.png"
										className="norik-profile-pic"
									/>
									<img
										src="https://site.mockito.org/javadoc/current/org/mockito/logo.png"
										className="norik-profile-pic"
									/>
								</div>
							</div>
						</div>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default TechStackDialog;
