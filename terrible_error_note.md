###1.关于koa版本的问题，这个问题主要涉及了，我主要想要改变的是，如何使用koa[version>3]的版本来写通
* var app=koa()   =>  var app=new koa()
* app.use(controller.get('/xx',function(){}))  
	=> app.use(controller.get('/xx',function*(){}))