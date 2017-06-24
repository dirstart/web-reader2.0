var fs=require('fs');
//文件系统，像python一样

exports.get_test_data=function(){
	var content=fs.readFileSync('./mock/test.json','utf-8');
	return content;
};