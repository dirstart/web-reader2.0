###1.关于koa版本的问题，这个问题主要涉及了，我主要想要改变的是，如何使用koa[version>3]的版本来写通
* var app=koa()   =>  var app=new koa()
* app.use(controller.get('/xx',function(){}))  
	=> app.use(controller.get('/xx',function*(){}))

>现在大概明白了koa版本的主要问题源于高配的版本需要使用node version>7.6，并且高配的版本使用ES2017的语法，需要安装babel

###2.关于如果readFileSync这个API的问题，如果不指定编码格式会出现浏览器进入页面需要下载的情况，而如果指定了编码格式的话则会渲染在页面上。
问题详见:mock/book/18218.json      service/webAppService.js
```
let get_book_data = (id) => {
	if (!id) {
		id = "18218"
	}
	var content = fs.readFileSync('./mock/book/' + id + '.html', 'utf-8');
	return content;
}
```
如若不加'utf-8'编码参数，则在浏览器中出现文件下载的情况。