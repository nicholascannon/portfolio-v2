/**
 * app.js
 *
 * written by Nicholas Cannon
 */
const express = require('express');
const logger = require('morgan');
const chalk = require('chalk');
const compression = require('compression');
const helmet = require('helmet');
const dotenv = require('dotenv');
const errorhandler = require('errorhandler');
const setupDB = require('./config/db');

/**
 * Load environment variables from dev or prod .env file
 */
dotenv.config({ path: process.env.NODE_ENV === 'development' ? '.dev.env' : '.env' });
console.log(
	`${chalk.green('✓')} loaded ${process.env.NODE_ENV === 'development' ? 'dev' : 'prod'} .env file`
);

/**
 * Create Application
 */
const app = express();
app.set('port', process.env.SERVER_PORT || 8000);

/**
 * Set up database
 */
setupDB();

/**
 * Middleware
 */
app.use(helmet());
app.use(compression());
app.use(logger('dev'));
app.use(express.json());

/**
 * API Routes
 */
app.use('/api/skills/', require('./routes/skills'));
app.use('/api/projects/', require('./routes/projects'));
app.use('/api/auth/', require('./routes/auth'));
app.use('/api/contact/', require('./routes/contact'));
app.use('/api/about/', require('./routes/about'));

/**
 * Error handler
 */
if (process.env.NODE_ENV === 'development') {
	app.use(errorhandler());
	console.log(`${chalk.yellow('!')} using development error handler`);
} else {
	app.use(async (err, req, res, next) => {
		console.error(err);
		try {
			const emailService = require('./services/email');
			await emailService.sendErrorEmail(err);
		} catch (e) {
			console.error(e);
		}
		res.status(500).json({ msg: 'Server error!' });
	});
}

/**
 * Start server
 */
app.listen(app.get('port'), () => {
	console.log(`${chalk.green('✓')} Server running on port ${app.get('port')}...`);
});

module.exports = app;
