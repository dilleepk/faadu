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
	query:function(qtext,cb){
		connection.connect();
		connection.query(qtext,function(err,rows){
			connection.end();
			cb(err,rows);
		});
	}
};

module.exports=cms;

(function(){
	if(require.main===module){
		cms.query("select * from cms",function(err,rows){
			console.log(err);
			console.log(rows);
		});
	}
}());