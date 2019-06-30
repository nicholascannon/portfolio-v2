import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import {
	HomePage,
	AboutPage,
	ContactPage,
	SkillsPage,
	ProjectsPage,
	NotFoundPage
} from './components/pages';

import './App.css';

class App extends React.Component {
	render() {
		return (
			<Router>
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

export default App;
