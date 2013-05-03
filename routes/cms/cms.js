"use strict";

var util = require('util');
var cache = require('../lib/cache');
var cm = require('../../model/cms');
var ckey = 'cms';
var cms = {
	loadpage: function(data, cb) {
		cm.query("select * from cms where active=1", function(err, rows) {
			var res = {};

			if (!err && rows.length) {
				rows.forEach(function(val) {
					res[val.url] = val;
				});
			}
			cb(err, res);
		})
	},
	index: function(req, res, next) {
		var page = {};
		if (req[ckey]) {
			page=req[ckey];
			page=page['/'+req.params.page];
			if(!page){
				return next(new Error('pagenot found'));
			}
			var options = {
				header:page.head,
				content:page.body,
				footer:page.footer
			};
			console.log(options);
			res.render('cms/page', {'cms':options});
		}else{
			next(new Error("page not in cache") );
		}
	},

	error: function(err, req, res, next) {
		res.send(404,err);
	}
};

module.exports = cms;