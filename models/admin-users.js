'use strict';

var mongoose = require('mongoose');

var schema = mongoose.schema;

var adminUser = new schema({
				username: String,
				password: String
});

var adminUser = mongoose.model('adminUser', adminUser);

module.exports = adminUser;