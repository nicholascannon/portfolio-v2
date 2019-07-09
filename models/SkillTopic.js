/**
 * SkillTopic Model
 */
const mongoose = require('mongoose');

const skillTopicSchema = mongoose.Schema({
	topic: {
		type: mongoose.SchemaTypes.String,
		required: true
	},
	skills: [{ type: mongoose.SchemaTypes.String }]
});

module.exports = mongoose.model('SkillTopic', skillTopicSchema);
