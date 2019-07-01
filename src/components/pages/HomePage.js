/**
 * HomePage.js
 */
import React from 'react';
import Page from './Page';

import './HomePage.css';

const HomePage = props => {
	return (
		<Page pageName="HomePage">
			<div id="rect"></div>
			<div id="headers">
				<h1>Nicholas Cannon</h1>
				<p>Software Developer</p>
			</div>
		</Page>
	);
};

export default HomePage;
