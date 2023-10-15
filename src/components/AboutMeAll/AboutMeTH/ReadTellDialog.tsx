import React from 'react';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from 'src/components/ui/dialog';

const BooksAppDialog = () => {
	return (
		<Dialog>
			<DialogTrigger className="dialog-btn-v2">Learn More</DialogTrigger>
			<DialogContent className="dialog-content">
				<DialogHeader>
					<DialogTitle>Books App</DialogTitle>
					<DialogDescription>
						An application focused on book enthusiasts, offering features like
						trending book updates, user ratings, and discussion boards. Built
						primarily for iOS.
					</DialogDescription>
					<DialogDescription>
						<strong>Key Features:</strong>
						<ul>
							<li>User Login and Profile Management</li>
							<li>Search and Information for Books</li>
							<li>User Ratings and Reviews</li>
							<li>Friend and Social Engagement Features</li>
							<li>Discussion Boards for Each Book</li>
						</ul>
					</DialogDescription>
					<DialogDescription>
						<a href="https://github.com/Group11FinalProject/codepath-group-project-BookApp">
							<i className="fab fa-github"></i> View on GitHub
						</a>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};

export default BooksAppDialog;
