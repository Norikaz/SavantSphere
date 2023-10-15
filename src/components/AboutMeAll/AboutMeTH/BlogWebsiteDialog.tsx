import React from 'react';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from 'src/components/ui/dialog';

const BlogWebsiteDialog = () => {
	return (
		<Dialog>
			<DialogTrigger className="dialog-btn-v2">Learn More</DialogTrigger>
			<DialogContent className="dialog-content">
				<DialogHeader>
					<DialogTitle>Portfolio Website</DialogTitle>
					<DialogDescription>
						Built using the MERN stack, my portfolio website showcases my
						skills, experiences, and projects. It serves as a comprehensive
						resume and a testament to my development prowess.
					</DialogDescription>
					<DialogDescription>
						<strong>Key Features:</strong>
						<ul>
							<li>Dynamic Blogging Capabilities</li>
							<li>User-Friendly Interface</li>
							<li>Responsive Design</li>
							<li>Server-side Rendering for Improved SEO</li>
						</ul>
					</DialogDescription>
					<DialogDescription>
						<a href="https://github.com/Tasneemhasanat97/portfolio-website">
							<i className="fab fa-github"></i> View on GitHub
						</a>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};

export default BlogWebsiteDialog;
