/**
 * Authentication Middleware
 */
const validate = require('validator');
const jwt = require('jsonwebtoken');

module.exports.authenticate = (req, res, next) => {
	const token = req.get('Authorization');
	if (token && validate.isJWT(token)) {
		try {
			const decoded = jwt.verify(token, process.env.SECRET);
			req.userEmail = decoded.email;
			next();
		} catch (e) {
			return res.status(400).json({ msg: 'invalid token' });
		}
	} else {
		return res.status(400).json({ msg: 'invalid token' });
	}
};
