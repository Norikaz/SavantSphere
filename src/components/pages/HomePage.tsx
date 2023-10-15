import React from 'react';
import Header from '../header/Header';
import Hero from '../home/hero/Hero';
import Slogan from '../home/slogan/slogan';
import TileGrid from '../home/tilegrid/TileGrid';

const HomePage = () => {
	return (
		<>
			<Header /> {/* Include Header here */}
			<Hero /> {/* Include Hero here */}
			<Slogan /> {/* Include Slogan here */}
			<TileGrid /> {/* Include TileGrid here */}
		</>
	);
};

export default HomePage;
