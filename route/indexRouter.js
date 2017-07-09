let express=require('express');
let router=express.Router();
let qs=require('querystring');
let service=require('../service/webAppService');

let http=require('http');

router.get('/',(req,res)=>{
	res.setHeader('Cache-Control','no-cache,no-store,must-revalidate');
	res.setHeader('pragma','no-cache');
	res.setHeader('Expires','0');
	res.send('hello,world');
});

router.get('/test',(req,res)=>{
	res.render('test',{name:'hahah'});
});

router.get('/api_test',(req,res)=>{
	res.send(service.GetJsonData());
});

router.get('/api_search',(req,res,next)=>{
	//console.log(req._parsedUrl);  // Url{protocol:null,path:'/api_serach?keyword=3'}各种方法
	//console.log(req._parsedUrl.query); //keyword=3
	let search_key=qs.parse(req._parsedUrl.query); 
	//{keyword=3}
	let {start,end,keyword}=search_key;
	//es6的解构赋值

	res.send(service.GetSearchData(start,end,keyword));

});
module.exports=router;