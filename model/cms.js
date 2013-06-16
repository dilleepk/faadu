"use strict";
var my=require('mysql');
var config=require('../config').db;

var connection=my.createConnection({
	host:config.host,
	user:config.user,
	password:config.pass,
	database:config.database
});

var cms={
	init: function(){
		connection.connect();
	},
	query: function(qtext,cb){
		connection.query(qtext,function(err,rows){
			cb(err,rows);
		});
	}
};

module.exports=cms;

(function(){
	cms.init();
}());

(function(){
	if(require.main===module){
		cms.query("select * from cms",function(err,rows){
			console.log(err);
			console.log(rows);
		});
	}
}());