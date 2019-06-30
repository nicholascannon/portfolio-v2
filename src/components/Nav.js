/**
 * Nav.js
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { toggleNav, closeNav } from '../actions/navActions';

import './Nav.css';
import menu from '../icons/icons8-menu-filled.svg';
import close from '../icons/iconfinder_icon-close-round_211651.svg';

class Nav extends Component {
	componentDidMount() {
		document.addEventListener('mousedown', this.clickedOutside);
	}
	componentWillUnmount() {
		document.removeEventListener('mousedown', this.clickedOutside);
	}
	clickedOutside = e => {
		if (this.refNode && !this.refNode.contains(e.target) && this.props.nav.isOpen) {
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
						<button onClick={this.props.toggleNav}>
							<img className="navIcon" src={close} />
						</button>
						<ul>
							<li>
								<NavLink
									to="/about"
									onClick={this.props.closeNav}
									activeStyle={{ color: '#005cb9' }}>
									About
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/projects"
									onClick={this.props.closeNav}
									activeStyle={{ color: '#005cb9' }}>
									Projects
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/skills"
									onClick={this.props.closeNav}
									activeStyle={{ color: '#005cb9' }}>
									Skills
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/contact"
									onClick={this.props.closeNav}
									activeStyle={{ color: '#005cb9' }}>
									Contact
								</NavLink>
							</li>
						</ul>
					</div>
				) : (
					<button onClick={this.props.toggleNav}>
						<img className="navIcon" src={menu} />
					</button>
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
