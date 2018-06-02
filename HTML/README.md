

### 复杂答案的目录：

- [【Q】如何在手机页面上调用九宫格数字键盘？](submenu/02-如何在手机页面上调用九宫格数字键盘.md)

- [【Q】HTML全局属性(global attribute)有哪些？](submenu/HTML全局属性.md)

- [【Q】canvas是什么？怎么用？](submenu/canvas.md)

- [【Q】SVG是什么？](submenu/SVG.md)

- [【Q】html5新标签有哪些？](submenu/html5新标签有哪些.md)

- [【Q】webGL] (todo:延后)

- 【Q】manifest、worker、socket

- 【Q】input和textarea的区别

- 【Q】用一个div模拟textarea的实现

  

- [test](submenu/01.md)

---



### 简单答案的目录：

- [【Q】什么是HTML5？](#q什么是html5)
- [【Q】哪些浏览器支持HTML5？](#q哪些浏览器支持html5)
- [【Q】如果我不放入<! DOCTYPE html> ，HTML5还会工作么？](#q如果我不放入-doctype-html-html5还会工作么)
- [【Q】HTML5新的表单元素类型有哪些？](#qhtml5新的表单元素类型有哪些)
- [【Q】`<img>`的`title`和`alt`有什么区别？](#qimg的title和alt有什么区别)
- [【Q】doctype是什么？有什么用？](#qdoctype是什么有什么用)
- [【Q】xhtml1.0的书写规则](#qxhtml10的书写规则)
- [【Q】你是如何理解HTML语义化的，有什么好处？](#q你是如何理解-html-语义化的)
- [【Q】前端需要注意哪些SEO？](#q前端需要注意哪些seo)
- 
- 





---

### 答案简单的罗列如下：



### 【Q】什么是HTML5？

HTML5是最新的HTML标准，提供了一些新标签和新功能。比如canvas，SVG，拖放等。

HTML5是万维网联盟（W3C）和网络超文本应用技术工作组（WHATWG）之间合作输出的。



### 【Q】哪些浏览器支持HTML5？

Safari，Chrome，Firefox，Opera，IE9+都支持HTML5。IE8很多功能都不支持。





### 【Q】如果我不放入<! DOCTYPE html> ，HTML5还会工作么？

魔芋：在谷歌浏览器测试时，可以运行的。

但是在IE下，可能解析为怪异模式。

请不要这么做。





### 【Q】HTML5新的表单元素类型有哪些？

color,date,datetime-local,emal,address,time,url,range,telephone,number,search,week等。





### 【Q】`<img>`的`title`和`alt`有什么区别？

魔芋：title是附加的提示文字。通常当鼠标滑动到元素上的时候显示。

alt是图片缺失时，对图片的描述文字。





### 【Q】doctype是什么？有什么用？

01，是一个告诉浏览器当前HTML版本的指令。

02，不是一个HTML标签。

03，浏览器通过doctype来决定是使用兼容模式还是标准模式对文档进行渲染。

04，必须位于文档的头部。不区分大小写。

```
<!doctype html>
```




### 【Q】xhtml1.0的书写规则? 

①html文档第一行加入版本类型声明 

②我们习惯给HTML标签里加入可扩展标记语言命名空间（xmlns）的声明 

③文档分为head 和body两个部分。 

④所有标签都必须有相应的结束标签 

⑤所有标签的元素和属性的名字都必须使用小写

⑥所有标签必须合理嵌套。

⑦给所有属性都赋值。 

⑧img必须要有alt属性。

⑨ & 等需要被转码表示 




### 【Q】你是如何理解 HTML 语义化的?

01，语义化，就是通过HTML标签来表示页面包含的信息。

02，其中有HTML标签的语义化和CSS命名的语义化。

03，HTML标签语义化的的含义是：

​    通过使用含有语义的标签（如h1~h6，aside）来表示文档结构。

04，CSS语义化的含义是：

​    为HTML标签添加有意义的class和id来补充未表达的语义。

05，为什么需要语义化

- 结构清晰。便于维护。
- 盲人可以用阅读器来阅读。
- 使搜索引擎更好的抓取网页。利于收录。



###  【Q】前端需要注意哪些SEO?

01，合理的title，description，keywords。

02，语义化的HTML代码。好处，让搜索引擎更好搜索。

03，重要的HTML内容放前面。

04，重要的内容，不要用JS输出。爬虫不会执行JS获取内容。

05，少用iframe。搜索引擎不会抓取iframe的内容。

06，图片加上alt和title。

07，保证网站打开速度。















