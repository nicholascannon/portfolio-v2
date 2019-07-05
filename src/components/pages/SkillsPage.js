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
			<table className="skillsTable">
				{skills.map(skill => (
					<div key={skill.name}>
						<img src={skill.src} />
						<p>{skill.name}</p>
					</div>
				))}
			</table>
			<div className="rect"></div>
			<Modal header="More skills" btnText="More skills">
				<div>
					<h3>Databases</h3>
					<ul>
						<li>MongoDB</li>
						<li>MySQL</li>
						<li>PostgresSQL</li>
						<li>SQLite</li>
					</ul>
				</div>
				<div>
					<h3>Languages</h3>
					<ul>
						<li>JavaScript</li>
						<li>Python</li>
						<li>C / C++</li>
						<li>HTML</li>
						<li>CSS</li>
						<li>Java</li>
						<li>And more!</li>
					</ul>
				</div>
				<div>
					<h3>Frameworks</h3>
					<ul>
						<li>ReactJS</li>
						<li>ExpressJS</li>
						<li>JQuery</li>
						<li>Bootsrtap</li>
						<li>Django</li>
						<li>Flask</li>
					</ul>
				</div>
				<div>
					<h3>DevOps / Cloud</h3>
					<ul>
						<li>AWS</li>
						<li>Digital Ocean</li>
						<li>Docker</li>
						<li>NGINX</li>
					</ul>
				</div>
				<div>
					<h3>Design</h3>
					<ul>
						<li>PhotoShop</li>
						<li>AdobeXD</li>
					</ul>
				</div>
				<div>
					<h3>Other</h3>
					<ul>
						<li>Git</li>
						<li>GitHub</li>
						<li>Bitbucket</li>
						<li>TDD / BDD</li>
						<li>Agile development</li>
					</ul>
				</div>
			</Modal>
		</Page>
	);
};

export default SkillsPage;
