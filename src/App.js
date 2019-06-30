import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import {
	HomePage,
	AboutPage,
	ContactPage,
	SkillsPage,
	ProjectsPage,
	NotFoundPage
} from './components/pages';
import Nav from './components/Nav';

import { closeNav } from './actions/navActions';

import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		window.addEventListener('resize', this.windowResize);
		this.windowResize();
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.windowResize);
	}
	windowResize = () => {
		if (window.innerWidth < 576) {
			document.getElementById('App').className = 'mobile';
		} else if (window.innerWidth < 768) {
			document.getElementById('App').className = 'tablet';
		} else {
			document.getElementById('App').className = '';
		}
	};

	render() {
		return (
			<Router>
				<Nav />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/about" component={AboutPage} />
					<Route exact path="/projects" component={ProjectsPage} />
					<Route exact path="/skills" component={SkillsPage} />
					<Route exact path="/contact" component={ContactPage} />
					<Route component={NotFoundPage} />
				</Switch>
			</Router>
		);
	}
}

const mapStateToProps = state => ({});

export default connect(
	mapStateToProps,
	{}
)(App);
