// 
var koa=require('koa');
var controller=require('koa-route');
var app=new koa();
var views=require('co-views');
//模板引擎
var render=views('./view',{
	map:{ html:'ejs'}
});

app.use(controller.get('/route_test',function*(){
	this.set('Cache-Control','no-cache');
	this.body='hello';
	console.log("route_test is success");
}));
app.use(controller.get('/ejs_test',function*(){
	this.body=yield render('test',{title:'hhh'});
}));
app.listen(3000);