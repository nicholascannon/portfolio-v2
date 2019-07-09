/**
 * Project Model
 */
const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
	name: {
		type: mongoose.SchemaTypes.String,
		required: true
	},
	body: {
		type: mongoose.SchemaTypes.String,
		required: true
	},
	tech: [{ type: mongoose.SchemaTypes.String }],
	url: {
		type: mongoose.SchemaTypes.String,
		required: true
	}
});

module.exports = mongoose.model('Project', projectSchema);
