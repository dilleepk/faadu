"use strict";

var util = require('util');
var home=require('./home');

module.exports = function (app) {
	require('./cms')(app);
	app.all('/',home.index);
};
