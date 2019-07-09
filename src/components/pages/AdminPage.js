import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Page from './Page';

import './AdminPage.css';

class AdminPage extends Component {
	render() {
		return this.props.isAuthenticated ? (
			<Page pageName="AdminPage">
				<h1>Admin!</h1>
			</Page>
		) : (
			<Redirect to="/" />
		);
	}
}

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(
	mapStateToProps,
	{}
)(AdminPage);
