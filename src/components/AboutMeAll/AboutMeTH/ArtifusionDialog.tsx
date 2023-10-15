import React from 'react';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from 'src/components/ui/dialog';

const ArtifusionDialog = () => {
	return (
		<Dialog>
			<DialogTrigger className="dialog-btn-v2">Learn More</DialogTrigger>
			<DialogContent className="dialog-content">
				<DialogHeader>
					<DialogTitle>Artifusion</DialogTitle>
					<DialogDescription>
						A Full-Stack AI SaaS platform built using Next.js and Tailwind CSS.
						The platform features a range of AI tools including image and video
						generation, conversation models, and music creation.
					</DialogDescription>
					<DialogDescription>
						<strong>Key Features:</strong>
						<ul>
							<li>Subscription system using Stripe</li>
							<li>Real-time customer support using Crisp</li>
							<li>Authentication via Clerk</li>
							<li>API Limits and Database Monitoring with Prisma Studio</li>
						</ul>
					</DialogDescription>
					<DialogDescription>
						<a href="https://github.com/Tasneemhasanat97/artifusion">
							<i className="fab fa-github"></i> View on GitHub
						</a>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};

export default ArtifusionDialog;
