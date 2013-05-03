"use strict";
var cms=require('./cms');
var cache=require('../lib/cache');
module.exports=function(app){
	app.all('/cms/:page',cache.getk('cms',60,{},cms.loadpage),cms.index,cms.error);
};