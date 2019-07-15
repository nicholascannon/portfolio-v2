/**
 * About section model
 */
const mongoose = require('mongoose');

const aboutSchema = mongoose.Schema({
	heading: mongoose.SchemaTypes.String,
	subHeading: mongoose.SchemaTypes.String,
	body: mongoose.SchemaTypes.String
});

module.exports = mongoose.model('About', aboutSchema);
