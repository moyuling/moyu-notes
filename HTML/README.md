

# HTML学习



- [如何在手机页面上调用九宫格数字键盘？](02-如何在手机页面上调用九宫格数字键盘.md)


- [你是如何理解 HTML 语义化的，有什么好处？](http://www.cnblogs.com/moyuling/p/9030000.html)
- [前端需要注意哪些SEO？](http://www.cnblogs.com/moyuling/p/9030006.html)
- [html5新标签有哪些？](http://www.cnblogs.com/moyuling/p/9030014.html)
- [HTML全局属性(global attribute)有哪些](HTML全局属性.md)






- [canvas是什么？怎么用](canvas.md)
- [SVG是什么？](SVG.md)
- [webGL] (todo:延后)


- manifest、worker、socket
- input和textarea的区别
- 用一个div模拟textarea的实现



- [【Q】什么是HTML5？](#[Q]什么是HTML5？)
- [【Q】哪些浏览器支持HTML5？](#[Q]哪些浏览器支持HTML5？)







---

# 答案简单的罗列如下：



### [Q]什么是HTML5？

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
<doctype html>
```













