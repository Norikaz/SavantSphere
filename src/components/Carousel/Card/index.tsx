import React from 'react';
import './styles/index.css';

interface CardProps {
	jobTitle: string;
}

const Card = () => {
	return (
		<div className="card">
			<section className="card-data">
				<header className="card-header">
					<h1>SDE Intern</h1>
					<p> - August 2023 </p>
				</header>
				<strong>Amazon</strong>
				<p>
					<strong>Designed a dashboard to streamline </strong>and enhance the
					way sellers view and comprehend the performance of their coupons.
					Additionally, I{' '}
					<strong>created an API and conducted end-to-end integration</strong>,
					incorporating data visualization libraries to offer sellers actionable
					insights aimed at <strong>improving coupon utilization.</strong>
				</p>
			</section>
			<aside className="side-section">
				<img src="/images/amazon-orange-logo.jpeg" className="company-logo" />
			</aside>
		</div>
	);
};

export default Card;
