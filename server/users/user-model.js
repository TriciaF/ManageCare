'use strict';

const { Users } = require('./user-schema');
const bcrypt = require('bcryptjs');



const users = {
	create: function(username, password) {
		console.log('Enter create users: ', username, password);
		return Users.find({ username })
			.count()
			.then(count => {
				if (count !== 0) {
					// There is an existing user with the same username
					return Promise.reject({
						code: 422,
						reason: 'ValidationError',
						message: 'Username already taken',
						location: 'username'
					});
				} else {
					// If there is no existing user, hash the password
					const hash = bcrypt.hashSync(password, 10);
					return Users.create({
						username: username,
						password: hash,
					});
				}
			});
	},

	get: function() {
		console.log('Enter Get users');
		return Users.find();
	},
};


module.exports = { users };