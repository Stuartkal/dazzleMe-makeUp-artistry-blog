import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Portfolio from '../Layouts/Portfolio/Portfolio';
import Videos from '../Layouts/Videos/Videos';
import Information from '../Layouts/Information/Info';

const Routes = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Route exact path="/" component={Portfolio} />
			<Route path="/videos" component={Videos} />
			<Route path="/about" component={Information} />
		</BrowserRouter>
	);
};

export default Routes;
