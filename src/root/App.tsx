import React from 'react'

import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ROUTES } from './routes-constants'
import HomePage from '../pages/HomePage'
import DevTeamOne from '../pages/AndrewNorik/DevTeamOne'
import DevTeamTwo from '../pages/TasneemSamiul/DevTeamTwo'
import ContactPage from '../pages/ContactPage'
import BestMatchPage from '../pages/BestMatchPage/'
import LoginPage from '../pages/LoginPage'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const App = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path={ROUTES.HOMEPAGE} element={<HomePage />} />
				<Route path={ROUTES.DEV_TEAM_ONE} element={<DevTeamOne />} />
				<Route path={ROUTES.DEV_TEAM_TWO} element={<DevTeamTwo />} />
				<Route path={ROUTES.CONTACT_PAGE} element={<ContactPage />} />
				<Route path={ROUTES.BEST_MATCH_PAGE} element={<BestMatchPage />} />
				<Route path={ROUTES.LOGIN_PAGE} element={<LoginPage />} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default App
