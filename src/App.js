import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import Particels from 'react-particles-js';
import particleSettings from './particleSettings';

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

const routes = [
	{ path: '/', Component: HomePage },
	{ path: '/about', Component: AboutPage },
	{ path: '/contact', Component: ContactPage },
	{ path: '/skills', Component: SkillsPage },
	{ path: '/projects', Component: ProjectsPage }
];

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
				<Particels
					style={{ position: 'absolute', top: '0', right: '0', z_index: '-1' }}
					params={particleSettings}
				/>
				<Nav />
				<Switch>
					{routes.map(({ path, Component }) => (
						<Route key={path} exact path={path}>
							{({ match }) => (
								<CSSTransition
									in={match != null}
									timeout={500}
									classNames="page"
									unmountOnExit
									appear>
									<Component />
								</CSSTransition>
							)}
						</Route>
					))}
					<Route key="notfound" component={NotFoundPage} />
				</Switch>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => ({});

export default withRouter(
	connect(
		mapStateToProps,
		{}
	)(App)
);
