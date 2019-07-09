/**
 * Authentication Middleware
 */
const validate = require('validator');
const jwt = require('jsonwebtoken');

module.exports.authenticate = (req, res, next) => {
	const token = req.get('Authorization');
	if (validate.isJWT(token)) {
		try {
			const decoded = jwt.decode(token);
			req.userEmail = decoded.email;
			next();
		} catch {
			return res.status(400).json({ msg: 'invalid token' });
		}
	}
};
