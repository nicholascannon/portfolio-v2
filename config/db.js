/**
 * Database set up and configuration
 */
const mongoose = require('mongoose');
const chalk = require('chalk');
const bcrypt = require('bcryptjs');

const Admin = require('../models/Admin');
const About = require('../models/About');

module.exports = async () => {
	/**
	 * Connect to Database
	 */
	if (!process.env.MONGO_URI) {
		console.error(`${chalk.red('✗ Error:')} no MongoDB URI`);
		process.exit(1);
	}
	mongoose.set('useNewUrlParser', true);
	mongoose.set('useCreateIndex', true);
	mongoose.set('useUnifiedTopology', true);
	mongoose.set('useFindAndModify', true);
	const printMongoDBError = err => {
		console.error(`${chalk.red('✗ Error:')} connecting to MongoDB: ${err.message}`);
		process.exit(1);
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
				process.exit(1);
			}

			const salt = await bcrypt.genSalt(10);
			const hash = await bcrypt.hash(process.env.ADMIN_PWD, salt);
			await Admin.create({ email: process.env.ADMIN_EMAIL, password: hash });
			console.log(`${chalk.green('✓')} Created admin account!`);
		} else if (accounts.length > 1) {
			console.error(`${chalk.red('✗ Error:')} More than 1 admin account!`);
			process.exit(1);
		} else {
			console.log(`${chalk.yellow('!')} Using admin account with email: ${accounts[0].email}`);
		}
	} catch (err) {
		console.error(`${chalk.red('✗ Error:')} Fetching admins: ${err.message}`);
		process.exit(1);
	}

	/**
	 * Sections setup
	 */
	try {
		// ABOUT
		const about = await About.find();
		if (about.length > 1) {
			// More than one about, error out
			throw new Error('More than one about object exists!');
		} else if (about.length === 0) {
			// create new default about object
			await About.create({
				heading: "Hi I'm Nicholas Cannon",
				subHeading: 'I like technology (and music)',
				body:
					"I'm currently living in Perth, WA and am in my last year of study at the University of Western Australia majoring in Computer and Data Science. I've been writing software and experimenting with different technologies since high school and have always been eager to improve my skills and solve problems with technology. I also enjoy sports, DJ'ing and making/listening to music."
			});
			console.log(`${chalk.yellow('!')} Created new default about object`);
		} else {
			console.log(`${chalk.green('✓')} Only 1 about object found!`);
		}
	} catch (e) {
		console.error(`${chalk.red('✗ Error:')} Setting up sections: ${e.message}`);
		process.exit(1);
	}
};
