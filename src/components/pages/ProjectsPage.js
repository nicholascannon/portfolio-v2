/**
 * ProjectsPage.js
 */
import React from 'react';
import Page from './Page';
import { connect } from 'react-redux';

import './ProjectsPage.css';

class ProjectsPage extends React.Component {
	render() {
		const { projects } = this.props;

		return (
			<Page pageName="ProjectsPage">
				{projects ? (
					projects.map(project => (
						<div className="projectCard">
							<h1>{project.name}</h1>
							<hr />
							<h3>Description:</h3>
							<p>{project.body}</p>
							<h3>Tech:</h3>
							<ul>
								{project.tech.map(tech => (
									<li>{tech}</li>
								))}
							</ul>
							<a href={project.url}>View Code</a>
						</div>
					))
				) : (
					<h1>No Projects</h1>
				)}
			</Page>
		);
	}
}

const mapStateToProps = state => ({
	projects: state.projects.projects
});

export default connect(mapStateToProps, {})(ProjectsPage);
