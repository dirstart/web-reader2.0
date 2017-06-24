###1.关于koa版本的问题，这个问题主要涉及了，我主要想要改变的是，如何使用koa[version>3]的版本来写通
* var app=koa()   =>  var app=new koa()
* app.use(controller.get('/xx',function(){}))  
	=> app.use(controller.get('/xx',function*(){}))

>现在大概明白了koa版本的主要问题源于高配的版本需要使用node version>7.6，并且高配的版本使用ES2017的语法，需要安装babel