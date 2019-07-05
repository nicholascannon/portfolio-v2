/**
 * AboutPage.js
 */
import React from 'react';
import Page from './Page';

import profileImg from '../../imgs/profilePic.jpg';
import resume from '../../docs/Nicholas-Cannon-CV.pdf';

import './AboutPage.css';

const AboutPage = props => {
	return (
		<Page pageName="AboutPage">
			<div>
				<div className="profileImg">
					<img src={profileImg} />
				</div>
				<div className="content">
					<h1>Hi I'm Nicholas Cannon</h1>
					<h2>I like technology (and music)</h2>
					<p>
						I'm currently living in Perth, WA and am in my last year of study at the University of
						Western Australia majoring in Computer and Data Science.
					</p>
					<br />
					<p>
						I've been writing software and experimenting with different technologies since high
						school and have always been eager to improve my skills and solve problems with
						technology. I also enjoy sports, DJ'ing and making/listening to music.
					</p>
					<br />
					<div className="aboutButtons">
						<a href={resume} target="_blank">
							Resume
						</a>
						<a href="mailto:nicholascannon1@gmail.com" target="_blank">
							Email Me
						</a>
					</div>
				</div>
			</div>
			<div className="rect"></div>
		</Page>
	);
};

export default AboutPage;
