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
							JavaScript / Node.JS <i>(advanced)</i>
						</li>
						<li>
							C / C++ <i>(proficient)</i>
						</li>
						<li>
							HTML / CSS <i>(proficient)</i>
						</li>
						<li>
							Java <i>(proficient)</i>
						</li>
						<li>
							Go <i>(novice)</i>
						</li>
					</ul>
				</div>
				<div>
					<h3>Databases</h3>
					<ul>
						<li>
							SQL <i>(intermediate)</i>
						</li>
						<li>
							PostgresSQL <i>(intermediate)</i>
						</li>
						<li>
							MongoDB <i>(novice)</i>
						</li>
						<li>
							MySQL <i>(beginner)</i>
						</li>
						<li>
							SQLite <i>(beginner)</i>
						</li>
					</ul>
				</div>
				<div>
					<h3>Frameworks / Libraries</h3>
					<ul>
						<li>
							React / Redux <i>(proficient)</i>
						</li>
						<li>
							ExpressJS <i>(proficient)</i>
						</li>
						<li>
							Django <i>(proficient)</i>
						</li>
						<li>
							Flask <i>(proficient)</i>
						</li>
						<li>
							Numpy / Pandas <i>(proficient)</i>
						</li>
						<li>
							Scikit-learn <i>(novice)</i>
						</li>
						<li>And more!</li>
					</ul>
				</div>
				<div>
					<h3>Other</h3>
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
