/**
 * SkillsPage.js
 */
import React from 'react';
import Page from './Page';
import skills from '../../imgs/skills';

import Modal from '../Modal';

import './SkillsPage.css';

const SkillsPage = props => {
	return (
		<Page pageName="SkillsPage">
			<div className="skillsTable">
				{skills.map(skill => (
					<div key={skill.name}>
						<img src={skill.src} alt={skill.name} />
						<p>{skill.name}</p>
					</div>
				))}
			</div>
			<div className="rect"></div>
			<Modal header="More skills" btnText="MORE SKILLS">
				<div>
					<h3>Languages</h3>
					<ul>
						<li>
							Python <i>(advanced)</i>
						</li>
						<li>
							JavaScript &amp; Node.JS <i>(advanced)</i>
						</li>
						<li>C &amp; C++</li>
						<li>HTML &amp; CSS</li>
						<li>Java</li>
					</ul>
				</div>
				<div>
					<h3>Databases</h3>
					<ul>
						<li>SQL</li>
						<li>PostgresSQL</li>
						<li>MongoDB</li>
						<li>MySQL</li>
						<li>SQLite</li>
					</ul>
				</div>
				<div>
					<h3>Frameworks &amp; Libraries</h3>
					<ul>
						<li>Flask</li>
						<li>Django</li>
						<li>React &amp; Redux</li>
						<li>ExpressJS</li>
						<li>Numpy &amp; Pandas</li>
						<li>Scikit-learn &amp; Tensorflow</li>
						<li>SQLAlchemy</li>
						<li>
							<em>And more!</em>
						</li>
					</ul>
				</div>
				<div>
					<h3>Misc</h3>
					<ul>
						<li>Git version control</li>
						<li>Test driven development</li>
						<li>Agile development</li>
						<li>AWS</li>
						<li>Digital Ocean</li>
						<li>Docker</li>
						<li>Gunicorn</li>
						<li>NGINX</li>
					</ul>
				</div>
			</Modal>
		</Page>
	);
};

export default SkillsPage;
