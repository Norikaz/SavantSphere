import React from 'react'
import './styles/index.css'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../root/routes-constants'

const Footer = () => {
	return (
		<div className="footer-container">
			<h3>SavantSphere</h3>
			<ul className="footer-links">
				<li>
					<Link to={'/'}>About</Link>
				</li>
				<li>
					<Link to={ROUTES.CONTACT_PAGE}>Contact</Link>
				</li>
				<li>
					<Link to={'/'}>Developers</Link>
				</li>
				<li>
					<Link to={'/'}>Careers</Link>
				</li>
			</ul>
			<p>&copy; {new Date().getFullYear()} SavantSphere. All rights reserved.</p>
		</div>
	)
}

export default Footer
