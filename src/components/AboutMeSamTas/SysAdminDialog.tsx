import React from 'react';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from 'src/components/ui/dialog';

const DialogPopup = () => {
	return (
		<Dialog>
			<DialogTrigger className="dialog-btn-v2">Learn More</DialogTrigger>
			<DialogContent className="dialog-content">
				<DialogHeader>
					<DialogTitle>
						System Administrator (March 2020 - August 2021)
					</DialogTitle>
					<DialogDescription>
						Elmhurst Gastroenterology and Colonoscopy · Part-time
					</DialogDescription>
					<DialogDescription>
						- Setup and managed computer network, hardware and software for the
						entire medical office.
					</DialogDescription>
					<DialogDescription>
						- Created scripts and automation for tedious tasks such as logging,
						billing and general book-keeping, which helped save time and money
						for the company.
					</DialogDescription>
					<DialogDescription>
						- Created an application for the medical office which would help
						fasten up the process for inputting patients into the internal
						system much faster than manually recording data into Excel sheets.
					</DialogDescription>
					<DialogDescription>
						- Migrated thousands of pages of manually managed CSV data into an
						easily accessible REST API with a clean user interface. API was
						secured using OAuth 2.0 for SSO
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};

export default DialogPopup;
