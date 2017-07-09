let fs = require('fs');
let qs = require('querystring');
let http = require('http');

let get_json_data = () => {
	let content = fs.readFileSync('./mock/test.json', 'utf-8');
	return content;
};

var get_search_data = function(start, end, keyword) {
	var data = {
		s: keyword,
		start: start,
		end: end
	};
	data = qs.stringify(data);
	var http_request = {
		host: 'dushu.xiaomi.com',
		port: 80,
		path: '/store/v0/lib/query/onebox?' + data
	}
	http.request(http_request, function(_res) {
		var content = '';
		_res.setEncoding('utf-8');
		_res.on('data', function(chunk) {
			content += chunk;
		});
		_res.on('end', function() {
			console.log(content);
			//请求到数据了哈哈哈哈哈哈
			return content;
		});
	}).end();
}

module.exports = {
	GetJsonData: get_json_data,
	GetSearchData: get_search_data
};