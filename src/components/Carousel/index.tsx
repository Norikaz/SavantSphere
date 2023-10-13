import React, { useRef } from 'react';
import Cards from './Cards';
import { onShiftCard } from './carouselHelper';
import { Button } from '../../components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import './styles/index.css';

const Carousel = () => {
	const activeCard = useRef(0);
	const containerRef = useRef<HTMLDivElement>(null);

	return (
		<>
			<h1 className="header">Experiences</h1>
			<div className="carousel-container">
				<div className="carousel" ref={containerRef}>
					<Cards />
				</div>
			</div>
			<div className="carousel-control">
				<Button
					className="left-arrow-btn"
					onClick={() => onShiftCard(containerRef, activeCard, -1)}
				>
					<ChevronLeft />
				</Button>
				<Button
					className="right-arrow-btn"
					onClick={() => onShiftCard(containerRef, activeCard, 1)}
				>
					<ChevronRight />
				</Button>
			</div>
		</>
	);
};
export default Carousel;
