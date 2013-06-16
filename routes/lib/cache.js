"use strict";
var util = require('util');
var store = {};
var t = 1;
var cache = {
	save: function(key, data, expire) {
		store[key] = {
			value: data,
			ttl: expire
		};
	},
	getk: function(key, expire, data, fwd) {
		return function(req, res, next) {
			var item = store[key];
			if (item) {
				req[key] = item.value;
				next();
			} else {
				fwd(data, function(err, result) {
					if (!err && result) {
						req[key] = result;
						cache.save(key, result, expire);
					}
					next();
				});
			}
		};
	},
	get: function(key, cb) {
		var item = store[key];
		var value;
		var err = null;
		if (item) {
			value = item.value;
		} else {
			err = new Error("not found key");
		}
		cb(err, value);
	}

};

module.exports=cache;

function removeCache() {
	var key;
	for (key in store) {
		var item = store[key];
		if (item.ttl <= 0) {
			console.log("deleting cache " + key);
			delete store[key];
		} else {
			item.ttl -= t;
		}
	}
}

(function() {
	setInterval(removeCache, t * 1000);
}());


(function() {
	if (require.main === module) {
		var key="girl";
		cache.save(key, "with dragon tatoo", 5);
		cache.get(key, function(err, obj) {
			console.log(err);
			console.log(key+": "+obj);
		});
	}
}());