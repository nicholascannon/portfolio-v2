/**
 * Page.js
 */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { closeNav } from '../../actions/navActions';

import './Page.css';

class Page extends React.Component {
	render() {
		return (
			<section className={`Page ${this.props.pageName ? this.props.pageName : ''}`}>
				{this.props.children}
			</section>
		);
	}
}
Page.propTypes = {
	pageName: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
	navOpen: state.nav.isOpen
});

export default connect(
	mapStateToProps,
	{}
)(Page);
