import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ROUTES } from './routes-constants';
import DevTeamOne from '../components/pages/DevTeamOne';
import DevTeamTwo from '../components/pages/DevTeamTwo';
import HomePage from '../components/pages/HomePage';

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
