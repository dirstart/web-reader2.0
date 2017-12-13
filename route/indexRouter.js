let express = require('express');
let router = express.Router();
let qs = require('querystring');
let service = require('../service/webAppService');

let http = require('http');

router.get('/first_test', (req, res) => {
	res.setHeader('Cache-Control', 'no-cache,no-store,must-revalidate');
	res.setHeader('pragma', 'no-cache');
	res.setHeader('Expires', '0');
	res.send('hello,world');
});

router.get('/ejs_test', (req, res) => {
	res.render('test', {
		name: 'hahah'
	});
});

router.get('/api_test', (req, res) => {
	res.send(service.GetJsonData());
});

// 首页
router.get('/', (req, res) => {
	res.render('index', {
		title: '千叶书城'
	})
	// res.send('index');
});

// 搜索页
router.get('/search', (req, res) => {
	res.render('search', {
		title: '搜索一下'
	})
});

// 分类页
router.get('/category', (req, res) => {
	res.render('category', {
		title: '分类'
	});
});

router.get('/book', (req, res) => {
	res.setHeader('Cache-Control', 'no-cache');
	let params = qs.parse(req._parsedUrl.query);
	console.log(params);
	let book_id = params.id;
	res.render('book', {
		book_id: book_id
	})
})



router.get('/api_search', (req, res, next) => {
	//console.log(req._parsedUrl);  // Url{protocol:null,path:'/api_serach?keyword=3'}各种方法
	//console.log(req._parsedUrl.query); //keyword=3
	let search_key = qs.parse(req._parsedUrl.query);
	//{keyword=3}
	let {
		start,
		end,
		keyword
	} = search_key;
	//es6的解构赋值
	service.GetSearchData(start, end, keyword, function(content) {
		res.send(content);
	});
});

router.get('/ajax/index', (req, res) => {
	res.setHeader('Cache-Control', 'no-cache');
	res.send(service.GetIndexData());
});

router.get('/ajax/rank', (req, res) => {
	res.setHeader('Cache-Control', 'no-cache');
	res.send(service.GetRankData());
})

router.get('/ajax/book', (req, res) => {
	res.setHeader('Cache-Control', 'no-cache');
	let params = qs.parse(req._parsedUrl.query);
	let id = params.id;
	if (!id) {
		id = '';
	}
	res.send(service.GetBookData(id));
})



module.exports = router;