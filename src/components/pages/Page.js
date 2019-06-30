/**
 * Page.js
 */
import React from 'react';
import { connect } from 'react-redux';

import './Page.css';

class Page extends React.Component {
	render() {
		return <section className="Page">{this.props.children}</section>;
	}
}
export default Page;
