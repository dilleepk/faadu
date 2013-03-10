"use strict";

var util = require('util');
var home=require('./home');
module.exports = function (app) {
	app.all('/',home.index);
};
