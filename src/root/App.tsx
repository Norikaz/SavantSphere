import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ROUTES } from './routes-constants';
import HomePage from '../pages/HomePage';
import DevTeamOne from '../pages/AndrewNorik/DevTeamOne';
import DevTeamTwo from '../pages/TasneemSamiul/DevTeamTwo';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path={ROUTES.HOMEPAGE} element={<HomePage />} />
				<Route path={ROUTES.DEV_TEAM_ONE} element={<DevTeamOne />} />
				<Route path={ROUTES.DEV_TEAM_TWO} element={<DevTeamTwo />} />
			</Routes>
		</Router>
	);
};

export default App;
