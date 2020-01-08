import React, { Component } from 'react';
import { connect } from 'react-redux';

import { saveProject, editProject, deleteProject } from '../../../actions/projectActions';
import Modal from '../../Modal';

import './AdminProjectSection.css';
import close from '../../../icons/iconfinder_icon-close-round_211651.svg';

class AdminProjectsSection extends Component {
	constructor(props) {
		super(props);

		this.state = {
			uuid: '',
			name: '',
			body: '',
			tech: '',
			url: ''
		};
		this.saveModel = React.createRef();
	}

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	saveProject = e => {
		e.preventDefault();

		// copy state and prepare the project data
		const state = { ...this.state };
		delete state.uuid; // can't send this when creating a project
		state.tech = this.state.tech.split(', ');
		this.props.saveProject(state);

		this.setState({
			uuid: '',
			name: '',
			body: '',
			tech: [],
			url: ''
		});
	};

	editProject = e => {
		e.preventDefault();

		// copy state
		const state = { ...this.state };
		state.tech = this.state.tech.split(', ');
		this.props.editProject(state);

		this.setState({
			uuid: '',
			name: '',
			body: '',
			tech: '',
			url: ''
		});
	};

	// sets the internal state values to the project being edited
	onEditOpen = project => {
		this.setState({
			uuid: project._id,
			name: project.name,
			body: project.body,
			tech: project.tech.join(', '),
			url: project.url
		});
	};

	render() {
		const { projects } = this.props;

		return (
			<React.Fragment>
				<div className="project-list">
					{projects && projects.length ? (
						<ul>
							{projects.map(project => (
								<li key={project._id}>
									<h3>{project.name}</h3>
									<Modal
										header={`Edit project ${project.name}`}
										btnText="Edit"
										onOpen={() => this.onEditOpen(project)}>
										<form onSubmit={this.editProject}>
											<label htmlFor="name">Name:</label>
											<input
												type="text"
												name="name"
												id="name"
												onChange={this.onChange}
												value={this.state.name}
											/>
											<label htmlFor="body">Body:</label>
											<input
												type="text"
												name="body"
												id="body"
												onChange={this.onChange}
												value={this.state.body}
											/>
											<label htmlFor="tech">Tech:</label>
											<input
												type="text"
												name="tech"
												id="tech"
												onChange={this.onChange}
												value={this.state.tech}
											/>
											<label htmlFor="url">URL:</label>
											<input
												type="text"
												name="url"
												id="url"
												onChange={this.onChange}
												value={this.state.url}
											/>
											<button type="submit">Save Project</button>
										</form>
									</Modal>
									<button
										className="deleteBtn"
										onClick={() => this.props.deleteProject(project._id)}>
										<img className="navIcon" src={close} alt="close" />
									</button>
								</li>
							))}
						</ul>
					) : (
						<p>No Projects</p>
					)}
				</div>
				<Modal header="Add New Project" btnText="Add Project" ref={this.saveModel}>
					<form onSubmit={this.saveProject}>
						<label htmlFor="name">Name:</label>
						<input type="text" name="name" id="name" onChange={this.onChange} />
						<label htmlFor="body">Body:</label>
						<input type="text" name="body" id="body" onChange={this.onChange} />
						<label htmlFor="tech">Tech:</label>
						<input type="text" name="tech" id="tech" onChange={this.onChange} />
						<label htmlFor="url">URL:</label>
						<input type="text" name="url" id="url" onChange={this.onChange} />
						<button type="submit">Save Project</button>
					</form>
				</Modal>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => ({
	projects: state.projects.projects
});

export default connect(mapStateToProps, { saveProject, editProject, deleteProject })(
	AdminProjectsSection
);
