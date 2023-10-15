import React from 'react'
import '../Navbar/styles/index.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="navbar-logo">
				<img
					src={
						'https://cdn.discordapp.com/attachments/1108517991076868096/1163145095936225402/logo_Background_Removed.png?ex=653e8249&is=652c0d49&hm=cd56e40a16b22dd88a7865c85b7b2d38e779c667d1da4377dd73f2966ac6c08f&'
					}
					alt="Logo"
					className="logo-image"
				/>
				<a href="/" className="logo-text">
					SavantSphere
				</a>
			</div>
			<ul className="navbar-list">
				<Link to={'/dev-team-Andrew-Norik'} className="navbar-item port-pg">
					Andrew & Norik
				</Link>
				<Link to={'/dev-team-Tasneem-Samiul'} className="navbar-item port-pg">
					Tasneem & Samiul
				</Link>
				<Link to={'/find-best-match'} className="navbar-item">
					Find Best Match
				</Link>
				<Link to={'/contact'} className="navbar-item">
					Contact Us
				</Link>
				<Link to={'/login'} className="navbar-item">
					Login
				</Link>
			</ul>
		</nav>
	)
}

export default Navbar
