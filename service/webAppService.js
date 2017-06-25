var fs=require('fs');
var qs=require('querystring');
var http=require('http');
//文件系统，像python一样

// 方法一.获取本地的mock数据
exports.get_test_data=function(){
	var content=fs.readFileSync('./mock/test.json','utf-8');
	return content;
};
// 方法二.利用线上的接口获取数据
exports.get_search_data=function(start,end,keyword){
	return function(callback){
		//object对象转成
		//{a:'1'}（它就是object)，后端接受的是http://127.0.0.1/api?a=1
		var data={
			start:start,
			end:end,
			s:keyword
		};
		var content=qs.stringify(data);
		console.log("查询的地址是:"+content);
		var http_request={
			hostname:'dushu.xiaomi.com',
			port:80,
			path:'/store/v0/lib/query/onebox?'+content
		};

		req_obj=http.request(http_request,function(_res){
			var content='';
			_res.setEncoding('utf-8');
			_res.on('data',function(chunk){
				content=content+chunk;
				//拼接所有的数据
			});//返回数据，触发data方法，注意：返回的是一部分数据
			_res.on('end',function(){
				callback(null,content);
			});//end之后所有数据都返回了
		});
		req_obj.on('error',function(){

		});
		req_obj.end();//发送这个请求
	};
};

exports.get_index_data=function(){
	var content=fs.readFileSync('./mock/home.json','utf-8');
	return content;
}