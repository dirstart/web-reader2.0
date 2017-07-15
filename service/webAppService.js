let fs = require('fs');
let qs = require('querystring');
let http = require('http');

let get_json_data = () => {
	let content = fs.readFileSync('./mock/reader/test.json', 'utf-8');
	return content;
};

let get_index_data = () => {
	let content = fs.readFileSync('./mock/reader/home.json', 'utf-8');
	return content;
}

let get_search_data = (start, end, keyword, fn) => {
	let data = {
		s: keyword,
		start: start,
		end: end
	};
	data = qs.stringify(data);
	let http_request = {
		host: 'dushu.xiaomi.com',
		port: 80,
		path: '/store/v0/lib/query/onebox?' + data
	}
	http.request(http_request, function(_res) {
		let content = '';
		_res.setEncoding('utf-8');
		_res.on('data', function(chunk) {
			content += chunk;
		});
		_res.on('end', function() {
			return fn(content);
		});
	}).end();
};
let get_rank_data = () => {
	var content = fs.readFileSync('./mock/reader/rank.json', 'utf-8');
	return content;
}
let get_book_data = (id) => {
	if (!id) {
		id = "18218"
	}
	var content = fs.readFileSync('./mock/book/' + id + '.json', 'utf-8');
	return content;
}

module.exports = {
	GetJsonData: get_json_data,
	GetSearchData: get_search_data,
	GetIndexData: get_index_data,
	GetRankData: get_rank_data,
	GetBookData: get_book_data
};