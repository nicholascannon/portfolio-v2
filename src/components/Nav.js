/**
 * Nav.js
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { toggleNav, closeNav } from '../actions/navActions';

import './Nav.css';

class Nav extends Component {
	componentDidMount() {
		document.addEventListener('mousedown', this.clickedOutside);
	}
	componentWillUnmount() {
		document.removeEventListener('mousedown', this.clickedOutside);
	}
	clickedOutside = e => {
		if (this.refNode && !this.refNode.contains(e.target)) {
			this.props.closeNav();
		}
	};

	render() {
		return (
			<nav
				className={`Nav${this.props.nav.isOpen ? 'Open' : ''}`}
				ref={node => (this.refNode = node)}>
				{this.props.nav.isOpen ? (
					<div className="NavBox">
						<button onClick={this.props.toggleNav}>X</button>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/about">About</Link>
							</li>
							<li>
								<Link to="/projects">Projects</Link>
							</li>
							<li>
								<Link to="/skills">Skills</Link>
							</li>
							<li>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
					</div>
				) : (
					<button onClick={this.props.toggleNav}>nav</button>
				)}
			</nav>
		);
	}
}

const mapStateToProps = state => ({
	nav: state.nav
});

export default connect(
	mapStateToProps,
	{ toggleNav, closeNav }
)(Nav);
