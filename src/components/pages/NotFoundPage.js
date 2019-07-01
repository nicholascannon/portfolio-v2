/**
 * NotFoundPage.js
 */
import React from 'react';
import Page from './Page';
import { Redirect } from 'react-router-dom';

import './NotFoundPage.css';

const NotFoundPage = props => {
	return (
		<Page pageName="NotFoundPage">
			<div className="content">
				<h1>
					Opps! Looks like you're lost, return <a href="/">home?</a>
				</h1>
			</div>
		</Page>
	);
};

export default NotFoundPage;
