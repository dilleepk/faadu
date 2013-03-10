"use strict";
var util=require('util');

var home={
	index:function(req,res,next){
		res.render('home',{});

	},
};
module.exports=home;