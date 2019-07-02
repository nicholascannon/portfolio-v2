/**
 * SkillsPage.js
 */
import React from 'react';
import Page from './Page';
import skills from '../../imgs/skills';

import './SkillsPage.css';

const SkillsPage = props => {
	return (
		<Page pageName="SkillsPage">
			<table className="skillsTable">
				{skills.map(skill => (
					<div>
						<img src={skill.src} />
						<p>{skill.name}</p>
					</div>
				))}
			</table>
			<div className="rect"></div>
		</Page>
	);
};

export default SkillsPage;
