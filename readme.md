#### 1.实现了基本express框架的搭建,主要是route的编写和模板的指定以及工作流gulp的配置


### 学到了

#### 1.引入静态文件方式.`app.use(express.static(__dirname + "/static"));`  -  app.js。若是我们的css路径为与app.js同级的static中的`css/all.css`，则在我们的页面中，我们只要使用`<link rel="stylesheet" href="css/all.css">`，不需要再加上前缀`static/`

#### 2.`-webkit-tap-highlight-color: rgba(0, 0, 0);`使用之后就不会出现在某些浏览器上点击会有奇怪的高亮背景了。

#### 3.写了几个月的less,使用antd和element,再写原始的css发现还真是不好维护。刀耕火种的时代啊