/**
 * Authentication routes
 */
const router = require('express').Router();
const Admin = require('../models/Admin');
const bcrypt = require('bcrypt');
const authenticate = require('../middleware/auth').authenticate;

/**
 * Log user in and return JWT if valid credentials.
 */
router.post('/login', (req, res, next) => {
	if (!req.body.email || !req.body.password) {
		return res.status(403).json({ msg: 'Please supply email and password' });
	}

	Admin.findOne({ email: req.body.email }).then(admin => {
		if (!admin) return res.status(403).json({ msg: 'Invalid credentials' });
		bcrypt
			.compare(req.body.password, admin.password)
			.then(same => {
				if (!same) return res.status(403).json({ msg: 'Invalid credentials' });
				return res.json({ token: admin.genToken(), email: admin.email });
			})
			.catch(err => next(err));
	});
});

/**
 * Verify a token is still valid and is gets a valid admin in the db.
 */
router.get('/verify', authenticate, (req, res, next) => {
	Admin.findOne({ email: req.userEmail }).then(admin => {
		if (!admin)
			return res.status(403).json({ msg: `Could not find admin with email ${req.userEmail}` });

		return res.json({ email: admin.email });
	});
});
