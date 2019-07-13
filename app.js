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
const path = require('path');
const setupDB = require('./config/db');

/**
 * Load environment variables
 */
dotenv.config({ path: '.env' });
console.log(`${chalk.green('✓')} loaded .env file`);

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

/**
 * Serve frontend in production
 */
if (process.env.NODE_ENV === 'production') {
	console.log(`${chalk.yellow('!')} Serving frontend from build folder`);
	app.use(express.static(path.resolve(__dirname, 'build')));
	app.get('*', (req, res) => {
		return res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
	});
}

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
