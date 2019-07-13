/**
 * Contact page API routes
 */
const router = require('express').Router();
const emailService = require('../services/email');

router.post('/', async (req, res, next) => {
	if (!req.body.email || !req.body.name || !req.body.msg) {
		return res.status(400).json({ msg: 'Please provide name, email and message' });
	}

	// TODO: validate and sanitise user data

	try {
		await emailService.sendContactMail(req.body.name, req.body.email, req.body.msg);
		return res.status(200).json({ msg: 'sent' });
	} catch (e) {
		return next(e);
	}
});

module.exports = router;
