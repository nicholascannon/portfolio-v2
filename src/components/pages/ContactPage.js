/**
 * ContactPage.js
 */
import React from 'react';
import Page from './Page';
import { CSSTransition } from 'react-transition-group';

import './ContactPage.css';

class ContactPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			msg: '',
			email: '',
			sent: false
		};
		this.onChange = e => {
			this.setState({ [e.target.name]: e.target.value });
		};
	}

	onSubmit = e => {
		e.preventDefault();
		this.setState({
			email: '',
			name: '',
			msg: '',
			sent: true
		});
	};

	render() {
		return (
			<Page pageName="ContactPage">
				{this.state.sent ? (
					<h1>Your message has sent!</h1>
				) : (
					<CSSTransition>
						<div className="contactBox">
							<form method="POST">
								<h1>Contact Me</h1>
								<label for="name">Name</label>
								<input
									type="text"
									name="name"
									id="name"
									value={this.state.name}
									onChange={this.onChange}
									placeholder="Name"
								/>
								<label for="name">Email</label>
								<input
									type="email"
									name="email"
									id="email"
									value={this.state.email}
									onChange={this.onChange}
									placeholder="Email"
								/>
								<label for="msg">Message</label>
								<textarea
									name="msg"
									id="msg"
									rows="10"
									value={this.state.msg}
									onChange={this.onChange}
									placeholder="Your message..."></textarea>
								<button type="submit" onClick={this.onSubmit}>
									SEND
								</button>
							</form>
						</div>
					</CSSTransition>
				)}
			</Page>
		);
	}
}

export default ContactPage;
