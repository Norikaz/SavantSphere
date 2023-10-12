import React from 'react';
import Card from '../Card';
import { DateTime } from 'luxon';

const Cards = () => {
	return (
		<>
			<div className="card">
				<Card
					jobTitle="SDE Intern"
					startDate={DateTime.local(2023, 6, 5)}
					endDate={DateTime.local(2023, 8, 25)}
					company="Amazon"
					pathToImage="images/amazon_logo.png"
					description={
						<>
							<strong>Designed a dashboard to streamline </strong>and enhance
							the way sellers view and comprehend the performance of their
							coupons. Additionally, I{' '}
							<strong>
								created an API and conducted end-to-end integration
							</strong>
							, incorporating data visualization libraries to offer sellers
							actionable insights aimed at{' '}
							<strong>improving coupon utilization.</strong>
						</>
					}
				/>
			</div>
			<div className="card inactive">
				<Card
					jobTitle="Full Stack Web Dev"
					startDate={DateTime.local(2022, 8, 10)}
					endDate={DateTime.local(2023, 5, 15)}
					company="CUNY Tech Prep"
					pathToImage="images/cuny_tech_prep_logo.jpeg"
					description={
						<>
							Learn in-demand technologies like{' '}
							<strong>React, Node + Express, and PostgreSQL</strong> as well as
							industry best practices such as agile & Scrum with Trello and
							Slack, <strong>test driven development, and CI/CD</strong>
						</>
					}
				/>
			</div>
			<div className="card inactive">
				<Card
					jobTitle="Software Product Sprint"
					startDate={DateTime.local(2021, 2, 7)}
					endDate={DateTime.local(2021, 5, 28)}
					company="CUNY Tech Prep"
					pathToImage="images/google_logo.png"
					description={
						<>
							Collaborated with a team of peers to design and implement a{' '}
							<strong>web application using Java, Javascript</strong>, HTML, and
							CSS over the course of 10 weeks, leveraging various{' '}
							<strong>
								Google Cloud Platform APIs, including App Engine and Datastore.
							</strong>
						</>
					}
				/>
			</div>
		</>
	);
};

export default Cards;
