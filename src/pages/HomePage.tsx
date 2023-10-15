import React from 'react'
import { Button } from 'src/components/ui/button'
import Footer from '../components/Footer'
import NavBar from '../components/Navbar'
import HeroSection from '../components/HeroSection'

const HomePage = () => {
	return (
		<div>
			<NavBar />
			<HeroSection />
			<Footer />
		</div>
	)
}

export default HomePage
