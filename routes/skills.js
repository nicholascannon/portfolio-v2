/**
 * Skills API routes.
 * /api/skills/
 */
const router = require('express').Router();
const SkillTopic = require('../models/SkillTopic');

/**
 * Get all skills topics.
 */
router.get('/', (req, res, next) => {
	SkillTopic.find()
		.then(skillTopics =>
			res
				.status(skillsTopics ? 200 : 404)
				.json(skillTopics ? skillsTopics : { msg: 'No skills entered' })
		)
		.catch(err => next(err));
});

/**
 * Create new SkillTopic
 */
//app.post();

module.exports = router;
