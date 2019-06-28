/**
 * app.js
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
const path = require('path');

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
 * Connect to Database
 */
if (!process.env.MONGO_URI) {
	console.error(`${chalk.red('✗ Error:')} no MongoDB URI`);
	process.exit(0);
}
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
const printMongoDBError = err => {
	console.error(`${chalk.red('✗ Error:')} connecting to MongoDB: ${err.message}`);
	process.exit(0);
};
mongoose.connect(process.env.MONGO_URI).catch(err => printMongoDBError(err));
mongoose.connection.on('err', err => printMongoDBError(err));
mongoose.connection.on('open', () => console.log(`${chalk.green('✓')} Connected to MongoDB`));

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
app.get('/api/', (req, res, next) => {
	return res.json({ msg: 'working' });
});
app.use('/api/', (req, res, next) => {
	return res.status(404).json({ msg: `invalid route ${req.originalUrl}` });
});

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
