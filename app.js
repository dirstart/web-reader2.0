var koa=require('koa');
var koa_static=require('koa-static-server');
var controller=require('koa-route');
var service=require('./service/webAppService.js');
var app=new koa();
var views=require('co-views');
//模板引擎
var render=views('./view',{
	map:{ html:'ejs'}
});
app.use(koa_static({
	rootDir:'./static/',
	rootPath:'/s/',
	// 下面没有点，因为这个是url之中的路径，就是网址中的路径
	maxage:0
	//静态文件都有缓存，为了性能
}));

app.use(controller.get('/route_test',function*(){
	this.set('Cache-Control','no-cache');
	this.body='hello';
	console.log("route_test is success");
}));
app.use(controller.get('/ejs_test',function*(){
	this.body=yield render('test',{title:'hhh'});
}));
app.use(controller.get('/api_test',function*(){
	this.body=service.get_test_data();
}));
app.listen(3000);