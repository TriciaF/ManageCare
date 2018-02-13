'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//schema definition for user login
const userSchema = mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	}
});

//validate passwords
userSchema.methods.validatePassword = function(password) {
	return bcrypt.compareSync(password, this.password);
};

userSchema.methods.serialize = function() {
	return {
		username: this.username,
	};
};


const Users = mongoose.model('Users', userSchema, 'users');
module.exports = { Users };