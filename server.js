/**
 * server.js
 *
 * written by Nicholas Cannon
 */
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const chalk = require('chalk');
const compression = require('compression');
const helmet = require('helmet');
const dotenv = require('dotenv');
const errorhandler = require('errorhandler');

/**
 * Load environment variables
 */
dotenv.config({ path: '.env' });
console.log(`${chalk.green('✓')} loaded .env file`);

/**
 * Create Application
 */
const app = express();
app.set('port', process.env.PORT || 8000);

/**
 * Connect to Database
 */
if (!process.env.MONGO_URI) {
	console.log(`${chalk.red('✗')} Error: no MongoDB URI`);
	process.exit(0);
}

/**
 * Middleware
 */
app.use(helmet());
app.use(compression());
app.use(logger('dev'));
app.use(express.json());

/**
 * Routes
 */
app.get('/', (req, res, next) => {
	return res.json({ msg: 'working' });
});

/**
 * Error handler
 */
if (process.env.NODE_ENV === 'development') {
	app.use(errorhandler());
	console.log(`${chalk.yellow('!')} using development error handler`);
} else {
	app.use((err, req, res, next) => {
		console.error(err);
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
