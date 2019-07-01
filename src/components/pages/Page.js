/**
 * Page.js
 */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { closeNav } from '../../actions/navActions';

import './Page.css';

class Page extends React.Component {
	render() {
		return (
			<section className="Page">
				{!this.props.isHome ? (
					<Link to="/" id="brand">
						NICHOLAS CANNON
					</Link>
				) : null}
				{this.props.children}
			</section>
		);
	}
}

const mapStateToProps = state => ({
	navOpen: state.nav.isOpen
});

export default connect(
	mapStateToProps,
	{ closeNav }
)(Page);
