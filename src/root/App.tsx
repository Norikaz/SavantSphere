import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ROUTES } from './routes-constants';
import HomePage from '../pages/HomePage';
import DevTeamOne from '../pages/AndrewNorik/DevTeamOne';
import DevTeamTwo from '../pages/TasneemSamiul/DevTeamTwo';
import ContactPage from '../pages/ContactPage';
import BestMatchPage from '../pages/BestMatchPage/';
import SignUpPage from '../pages/SignUpPage';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path={ROUTES.HOMEPAGE} element={<HomePage />} />
				<Route path={ROUTES.DEV_TEAM_ONE} element={<DevTeamOne />} />
				<Route path={ROUTES.DEV_TEAM_TWO} element={<DevTeamTwo />} />
				<Route path={ROUTES.CONTACT_PAGE} element={<ContactPage />} />
				<Route path={ROUTES.BEST_MATCH_PAGE} element={<BestMatchPage />} />
				<Route path={ROUTES.SIGN_UP_PAGE} element={<SignUpPage />} />
			</Routes>
		</Router>
	);
};

export default App;
