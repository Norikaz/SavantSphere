import React, { useRef } from 'react';
import Card from './Card';
import { DateTime } from 'luxon';
import { onShiftCard } from './CarouselHelper';

import './styles/index.css';

const Carousel = () => {
	const activeCard = useRef(0);
	const containerRef = useRef<HTMLDivElement>(null);

	return (
		<>
			<h1 className="header">Experiences</h1>
			<div className="carousel-container">
				<div className="carousel" ref={containerRef}>
					<div className="card">
						<Card
							jobTitle="SDE Intern"
							startDate={DateTime.local(2023, 6, 5)}
							endDate={DateTime.local(2023, 8, 25)}
							company="Amazon"
							pathToImage="images/amazon-orange-logo.jpeg"
							description={
								<>
									<strong>Designed a dashboard to streamline </strong>and
									enhance the way sellers view and comprehend the performance of
									their coupons. Additionally, I{' '}
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
									<strong>React, Node + Express, and PostgreSQL</strong> as well
									as industry best practices such as agile & Scrum with Trello
									and Slack, <strong>test driven development, and CI/CD</strong>
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
									<strong>React, Node + Express, and PostgreSQL</strong> as well
									as industry best practices such as agile & Scrum with Trello
									and Slack, <strong>test driven development, and CI/CD</strong>
								</>
							}
						/>
					</div>
				</div>
				<div className="carousel-control">
					<button onClick={() => onShiftCard(containerRef, activeCard, -1)}>
						left
					</button>
					<button onClick={() => onShiftCard(containerRef, activeCard, 1)}>
						right
					</button>
				</div>
			</div>
		</>
	);
};

export default Carousel;
