import React from 'react';
import './styles/index.css';
import Card from './Card';

const Carousel = () => {
	return (
		<>
			<h1 className="header">Experiences</h1>
			<div className="carousel-container">
				<div className="carousel">
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</>
	);
};

export default Carousel;
