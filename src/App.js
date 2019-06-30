import React from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import {
	HomePage,
	AboutPage,
	ContactPage,
	SkillsPage,
	ProjectsPage,
	NotFoundPage
} from './components/pages';
import Nav from './components/Nav';

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
			<React.Fragment>
				<Nav />
				<TransitionGroup>
					<CSSTransition timeout={500} classNames="fade" appear>
						<Switch>
							<Route key="1" exact path="/" component={HomePage} />
							<Route key="2" exact path="/about" component={AboutPage} />
							<Route key="3" exact path="/projects" component={ProjectsPage} />
							<Route key="4" exact path="/skills" component={SkillsPage} />
							<Route key="5" exact path="/contact" component={ContactPage} />
							<Route key="6" component={NotFoundPage} />
						</Switch>
					</CSSTransition>
				</TransitionGroup>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => ({});

export default connect(
	mapStateToProps,
	{}
)(App);
