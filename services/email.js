/**
 * Email Service
 */
const mail = require('@sendgrid/mail');
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

module.exports = {
	sendContactMail
};
