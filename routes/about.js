/**
 * About API endpoints
 */
const router = require('express').Router();
const About = require('../models/About');
const authenticate = require('../middleware/auth').authenticate;

router.get('/', (req, res, next) => {
	About.findOne()
		.select('heading subHeading body')
		.then(about =>
			res.json({ heading: about.heading, subHeading: about.subHeading, body: about.body })
		)
		.catch(err => next(err));
});

router.post('/', authenticate, (req, res, next) => {
	const { heading, subHeading, body } = req.body;

	if (!heading || !subHeading || !body) {
		return res.status(400).json({ msg: 'Please supply a heading, sub heading and body' });
	}

	About.findOneAndUpdate({}, { heading, subHeading, body }, { new: true })
		.then(about =>
			res.json({
				heading: about.heading,
				subHeading: about.subHeading,
				body: about.body,
				msg: 'Successfully Updated'
			})
		)
		.catch(err => next(err));
});

module.exports = router;
