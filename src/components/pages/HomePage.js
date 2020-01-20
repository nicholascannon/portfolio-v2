/**
 * HomePage.js
 */
import React from 'react';
import Page from './Page';
// import { Link } from 'react-router-dom';
import QuickLinks from '../QuickLinks';

import './HomePage.css';

const HomePage = props => {
	return (
		<Page pageName="HomePage">
			<div id="rect"></div>
			<div id="headers">
				<h1>Nicholas Cannon</h1>
				<p>Software Developer</p>
			</div>
			{/* <div className="quickLinks">
				<div>
					<Link to="/about">ABOUT</Link>
					<Link to="/projects">PROJECTS</Link>
					<Link to="/skills">SKILLS</Link>
					<Link to="/contact">CONTACT</Link>
				</div>
			</div> */}
			<QuickLinks />
		</Page>
	);
};

export default HomePage;
