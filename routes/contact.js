/**
 * Contact page API routes
 */
const router = require('express').Router();
const validate = require('validator');

const emailService = require('../services/email');

/**
 * API endpoint to send contact message to admin email.
 */
router.post('/', async (req, res, next) => {
	// Validate data
	if (!req.body.email || !req.body.name || !req.body.msg)
		return res.status(400).json({ msg: 'Please provide name, email and message' });
	if (!validate.isEmail(req.body.email))
		return res.status(400).json({ msg: `${req.body.email} is not a valid email` });
	if (req.body.name.trim() === '' || req.body.msg.trim() === '')
		return res.status(400).json({ msg: 'Please provide your name and a message' });

	try {
		await emailService.sendContactMail(req.body.name, req.body.email, req.body.msg);
		return res.status(200).json({ msg: 'sent' });
	} catch (e) {
		return next(e);
	}
});

module.exports = router;
