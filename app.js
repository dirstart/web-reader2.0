let express = require('express');
let app = express();
let ejs = require('ejs');
let indexRouter = require('./route/indexRouter');


app.use(indexRouter);
// app.use(express.static('static'));说明默认就是+了__dirname(本地路径)
// 通常来说静态文件都有它的缓存周期
app.use(express.static(__dirname + "/static"));
app.set('views', './views/pages');
// 设置视图的目录
app.engine('html', ejs.__express);
app.set('view engine', 'html');
// 通过上面这两句话实现使用.html的后缀


app.listen(3000);

// 此条为了测试在另外一台电脑上是否需要密钥.