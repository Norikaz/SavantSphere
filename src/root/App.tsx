import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ROUTES } from './routes-constants';
import HomPage from '../pages/HomePage';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomPage />} />
			</Routes>
		</Router>
	);
};

export default App;
