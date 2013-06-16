"use strict";
var cms=require('./cms');
var cache=require('../lib/cache');
module.exports=function(app){
	app.all('/reviews/:page',cache.getk('cms',10,{},cms.loadpage),cms.index,cms.error);
};