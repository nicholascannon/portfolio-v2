/**
 * Database set up and configuration
 */
const mongoose = require('mongoose');
const chalk = require('chalk');
const Admin = require('../models/Admin');
const bcrypt = require('bcrypt');

module.exports = async () => {
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
	 * Admin account setup
	 */
	try {
		const accounts = await Admin.find();
		if (accounts.length === 0) {
			// no admin account exists, create one
			if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PWD) {
				console.error(`${chalk.red('✗ Error:')} Please provide admin account email and password!`);
				process.exit(0);
			}

			const salt = await bcrypt.genSalt(10);
			const hash = await bcrypt.hash(process.env.ADMIN_PWD, salt);
			await Admin.create({ email: process.env.ADMIN_EMAIL, password: hash });
			console.log(`${chalk.green('✓')} Created admin account!`);
		} else if (accounts.length > 1) {
			console.error(`${chalk.red('✗ Error:')} More than 1 admin account!`);
			process.exit(0);
		} else {
			console.log(`${chalk.yellow('!')} Using admin account with email: ${accounts[0].email}`);
		}
	} catch (err) {
		console.error(`${chalk.red('✗ Error:')} Fetching admins: ${err.message}`);
		process.exit(0);
	}
};
