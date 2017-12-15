#### 1.实现了基本express框架的搭建,主要是route的编写和模板的指定以及工作流gulp的配置

*  *  *

### 学到了

#### 1.引入静态文件方式.`app.use(express.static(__dirname + "/static"));`  -  app.js。若是我们的css路径为与app.js同级的static中的`css/all.css`，则在我们的页面中，我们只要使用`<link rel="stylesheet" href="css/all.css">`，不需要再加上前缀`static/`

#### 2.`-webkit-tap-highlight-color: rgba(0, 0, 0);`使用之后就不会出现在某些浏览器上点击会有奇怪的高亮背景了。

#### 3.写了几个月的less,使用antd和element,再写原始的css发现还真是不好维护。刀耕火种的时代啊

#### 4.`background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.3));`放置于书籍封面图片上的已完成，白色的字体配上这样的背景色刚好可以突出其颜色，特别是当封面图也刚好是白色的时候。

#### 5.多行文本换行省略号的方式,以下是两行的示例，不过不要加 `no-wrap`，否则会发现失去效果了，原因是不允许换行，则没有了两行以上的说法了.

```
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
overflow: hidden;
```

#### 6.采用阿里icon-font作为图标，不得不说，icon-font做的让人很容易入手，不过关于svg部分自己尚未了解，准备近期入手。直接放在此项目上的时候在定位上出了一些错误。

#### 7.遇见了第一个实习公司遇到的`display:inline-block`的问题，又复习了一遍。当有这么一个结构--- 
```
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
```
如果我们设置每一个 ul li 为  ` display: inline-block ; width: 33.3% `的时候，这个时候第三个还是会被挤到第二排，因为多处的那个 4px。
> 解决方案一.我们可以发现我们是可以用`margin-right:-4px`这一行代码解决的。然而这种解决方案并不完美。下回来仔细讨论一下。
解决方案二.写成
```
<ul>
  <li></li><li></li><li></li>
</ul>
```
在我看来，这是一种滑稽的解决方案。

*  *  *

#### 进度更新，自我激励
#### 2017.12.14 教程的代码确实写的不怎么好，并且这个也是个比较古老的教程。没有用到最新的框架，没有用到less，stylus那些css框架。
![](https://raw.githubusercontent.com/dirstart/image_bed/master/web-reader1.png)

