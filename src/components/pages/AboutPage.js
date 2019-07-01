/**
 * AboutPage.js
 */
import React from 'react';
import Page from './Page';

const AboutPage = props => {
	console.log('about mounted');
	return (
		<Page className="AboutPage">
			<h1>About</h1>
		</Page>
	);
};

export default AboutPage;
