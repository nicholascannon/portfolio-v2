import React from 'react';
import { Link } from 'react-router-dom';

import './QuickLinks.css';

export default function QuickLinks() {
	return (
		<div className="quickLinks">
			<div>
				<Link to="/about">ABOUT</Link>
				<Link to="/projects">PROJECTS</Link>
				<Link to="/skills">SKILLS</Link>
				<Link to="/contact">CONTACT</Link>
			</div>
		</div>
	);
}
