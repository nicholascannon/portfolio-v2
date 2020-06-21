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
						<li>Golang (beginner)</li>
					</ul>
				</div>
				<div>
					<h3>Databases</h3>
					<ul>
						<li>SQL</li>
						<li>Postgres</li>
						<li>MySQL</li>
						<li>MongoDB</li>
						<li>SQLite</li>
					</ul>
				</div>
				<div>
					<h3>Frameworks &amp; Libraries</h3>
					<ul>
						<li>Flask &amp; Django</li>
						<li>React &amp; Redux</li>
						<li>ExpressJS</li>
						<li>Numpy &amp; Pandas</li>
						<li>Scikit-learn </li>
						<li>Tensorflow &amp; Keras</li>
						<li>SQLAlchemy</li>
						<li>Apache Airflow</li>
						<li>
							<em>And more!</em>
						</li>
					</ul>
				</div>
				<div>
					<h3>Cloud / Ops</h3>
					<ul>
						<li>Google Cloud Platform</li>
						<li>Digital Ocean</li>
						<li>Git</li>
						<li>TravisCI</li>
						<li>Docker &amp; Docker Compose</li>
					</ul>
				</div>
				<div>
					<h3>Misc</h3>
					<ul>
						<li>Test driven development</li>
						<li>Agile development</li>
						<li>NGINX</li>
					</ul>
				</div>
			</Modal>
		</Page>
	);
};

export default SkillsPage;
