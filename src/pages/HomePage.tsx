import React from 'react'
import { Button } from 'src/components/ui/button'
import Footer from '../components/Footer'
import NavBar from '../components/Navbar'

const HomePage = () => {
	return (
		<div>
			<NavBar />
			<p>This will be the landing page for our webapp</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eligendi labore provident ex officiis sint a soluta ab, cum nisi at non illum
				itaque quae, corporis vel vero, quas voluptatum.
			</p>
			<Footer />
		</div>
	)
}

export default HomePage
