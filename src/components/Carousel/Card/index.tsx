import React, { ReactComponentElement, ReactElement } from 'react';
import { DateTime } from 'luxon';
import './styles/index.css';

interface CardProps {
	jobTitle: string;
	startDate: DateTime;
	endDate: DateTime;
	company: string;
	pathToImage: string;
	description: ReactElement;
}

const Card = ({
	jobTitle,
	startDate,
	endDate,
	company,
	pathToImage,
	description,
}: CardProps) => {
	return (
		<>
			<section className="card-data">
				<header className="card-header">
					<h1>{jobTitle}</h1>
					<p>
						{' '}
						{startDate.toLocaleString()} - {endDate.toLocaleString()}{' '}
					</p>
				</header>
				<strong>{company}</strong>
				<p>{description}</p>
			</section>
			<aside className="side-section">
				<img src={pathToImage} className="company-logo" />
			</aside>
		</>
	);
};

export default Card;
