/**
 * Email Service
 */
const chalk = require('chalk');
const mail = require('@sendgrid/mail');
console.log(`${chalk.yellow('!')} using sendgrid key ${process.env.SENDGRID_KEY}`);
mail.setApiKey(process.env.SENDGRID_KEY);

/**
 * Send contact email to admin
 */
const sendContactMail = async (name, email, msg) => {
	await mail.send({
		to: process.env.ADMIN_EMAIL,
		from: process.env.ADMIN_EMAIL,
		subject: `Portfolio Message`,
		html: `<h1>${name} sent a message from your portfolio!</h1><p>${msg}</p><strong>${email}</strong>`
	});
};

/**
 * Send error email to admin
 */
const sendErrorEmail = async err => {
	await mail.send({
		to: process.env.ADMIN_EMAIL,
		from: process.env.ADMIN_EMAIL,
		subject: `Portfolio ERROR!`,
		html: `<h1>Portfolio API threw an error</h1><p>${err}</p>`
	});
};

module.exports = {
	sendContactMail,
	sendErrorEmail
};
