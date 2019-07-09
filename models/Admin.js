/**
 * Admin model.
 *
 * Should only have one admin model exist in the db. There will
 * be no API routes for changin this Admin model or adding new ones.
 */
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const adminSchema = mongoose.Schema({
	email: {
		type: mongoose.SchemaTypes.String,
		required: true
	},
	password: {
		type: mongoose.SchemaTypes.String,
		required: true
	}
});

adminSchema.methods.genToken = function() {
	jwt.sign({ email: this.email }, process.env.SECRET, { expiresIn: '1d' });
};

module.exports = mongoose.model('Admin', adminSchema);
