/**
 * Project Model
 */
const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
	name: {
		type: mongoose.SchemaTypes.String
	},
	body: {
		type: mongoose.SchemaTypes.String
	},
	tech: [{ type: mongoose.SchemaTypes.String }],
	githubUrl: {
		type: mongoose.SchemaTypes.String
	},
	liveUrl: {
		type: mongoose.SchemaTypes.String
	}
});

module.exports = mongoose.model('Project', projectSchema);
