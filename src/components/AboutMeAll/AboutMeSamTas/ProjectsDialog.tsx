import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from 'src/components/ui/dialog'

const SysAdminDialog = () => {
	return (
		<Dialog>
			<DialogTrigger className="dialog-btn-v2">Learn More</DialogTrigger>
			<DialogContent className="dialog-content">
				<DialogHeader>
					<DialogTitle>Programming Projects</DialogTitle>
					<DialogDescription>
						<em>Twitch Clips (Python, Flask, FastAPI, Graphene)</em> — A web app for twitch where users can post clips and comment on them. They can
						also view historical data for twitch viewership and games. The data is also available for other developers via a GraphQL API
					</DialogDescription>
					<DialogDescription>
						<em>Twerpy (C++, Unity)</em> — A two-dimensional RPG tile game that lets the player roam in an open world. The player can interact with
						NPCs and accept quests in exchange for in-game rewards if successful. The project is built entirely on vanilla C++20 and utilizes the
						standard template library. There are no external dependencies used on this project.
					</DialogDescription>
					<DialogDescription>
						<em>Sportify (C++, Tensorflow, OpenCV, JUCE)</em> — A command line app which accesses the users webcam and microphone and uses multiple
						pre-trained machine learning models (by MediaPipe) to determine what sport is being played on the the inputted display device.
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}

export default SysAdminDialog
