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
				<div>
					{projects ? (
						projects.map(project => (
							<div className="projectCard">
								<div className="projectHeader">
									<h1>{project.name}</h1>
									<hr />
								</div>
								<div className="projectDetails">
									<h3>Description:</h3>
									<p>{project.body}</p>
									<br />
									<h3>Tech:</h3>
									<ul>
										{project.tech.map(tech => (
											<li>{tech}</li>
										))}
									</ul>
								</div>
								<a href={project.url} target="_blank" rel="noopener noreferrer">
									View Code
								</a>
							</div>
						))
					) : (
						<h1>No Projects</h1>
					)}
				</div>
			</Page>
		);
	}
}

const mapStateToProps = state => ({
	projects: state.projects.projects
});

export default connect(mapStateToProps, {})(ProjectsPage);
