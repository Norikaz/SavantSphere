import React from 'react';
import { Link } from "react-router-dom"; 
import { ROUTES } from '../root/routes-constants'; 


const HomePage = () => {
	return (  
		<div>   
			<p>This will be the landing page for our webapp</p>  
			<Link to={ROUTES.DEV_TEAM_ONE}>Andrew & Norik</Link>   
			<br />  
			<Link to={ROUTES.DEV_TEAM_TWO}>Tasneem & Samiul</Link>  
		</div>  
	)  
	
};

export default HomePage;
