### 暂时未填充答案的

- Q: 什么是依赖收集？

- Q: defineOwnProperty?

- Q: async await?

- 请实现你所知道的对象继承的方法或方式？有几种？分别是什么？优缺点？请用实例说明。

- 

- 【】怎样添加、移除、移动、复制、创建和查找节点 

- 

- 面向对象编程:b怎么继承a 

- 请编写一个JavaScript函数 parseQueryString，它的用途是把URL参数解析为一个对象
  var obj = parseQueryString(url);
  alert(obj.key0) // 输出0

- ajax是什么? ajax的交互模型? 同步和异步的区别? 如何解决跨域问题?

  

---



### 答案要跳转的：



- [数组去重](submenu/arr-unique.md)
- [[].slice和Array.prototype.slice的区别](http://www.cnblogs.com/moyuling/p/9019292.html)
- [判断某个对象是否是数组？](http://www.cnblogs.com/moyuling/p/9019163.html)
- [javascript跨域通信](http://www.cnblogs.com/moyuling/p/9030059.html)
- [打开一个网页经历了那些过程？](http://web.jobbole.com/94150/)
- [javascript有哪些方法定义对象](http://www.cnblogs.com/moyuling/p/9030148.html)
- [javascript有哪几种数据类型](http://www.cnblogs.com/moyuling/p/9030502.html)
- [原始类型和引用类型的区别](http://www.cnblogs.com/moyuling/p/9030560.html)
- [操作符的相关问题](submenu/operator.md)
- [闭包之魔芋理解](submenu/closure.md)
- [DOM相关问题](submenu/dom.md)
- Cookie和session的区别
- [HTTP相关问题](submenu/http.md)
- [实现一个promise](submenu/promise.md)





---

### 答案简单的目录：



- [【01】javascript有哪几种数据类型](#qjavascript有哪几种数据类型)
- [【02】JS是什么？](#qjs是什么)
- [【03】什么是抽象？](#q什么是抽象？)
- [【04】请解释类和对象？](#q请解释类和对象？)
- [【05】面对对象的特征是什么？](#05面对对象的特征是什么)
- [【06】JS是用什么编写的？](#06js是用什么编写的)
- [【07】什么是CDN？](07什么是CDN)
- [【Q】js中函数调用的方法？](#qjs中函数调用的方法)
- [【Q】preventDefault和stopPropagation区别？](#qpreventDefault和stopPropagation区别)
- [【Q】ES6中let、const和var区别，说下块级作用域？](#qES6中let、const和var区别，说下块级作用域)
- [【Q】什么是变量提升？函数提升？](#q什么是变量提升？函数提升)
- [【Q】下面这个ul，如何点击每一列的时候alert其index?](#q下面这个ul，如何点击每一列的时候alert其index)





---



### 答案简单的罗列如下：



### 【01】javascript有哪几种数据类型?

6种基本类型：null,undefined,boolean,number,string,symbol（es6新加）

1种引用类型：object

(魔芋：这里引申一下：function，array是一种特殊的对象。RegExp，Date，JSON是一种特殊的接口，定义很多属性和方法。)



### 【02】JS是什么？

魔芋：是一种脚本语言，定义一些语法规则。通常用于浏览器上。

更详细的见wiki:https://en.wikipedia.org/wiki/JavaScript



### 【03】什么是抽象？

魔芋：从一些具体的实例中，抽取共同的特点，而形成一般化的概念的过程。



### 【04】请解释类和对象？

类：具有共同属性或行为的对象的抽象。类是对象的模板。

对象：现实世界中的实体，比如：树，花。在计算机中，是指可标识的存储区域。

类和对象：类是对象的抽象，对象是类的实例。

比如：张三和李四都是人，都可以吃喝等行为，都有身高体重等属性。



### 【05】面对对象的特征是什么？

魔芋：笼统的说：继承，封装，多态。

1）继承：通过类可以实现继承，子类继承父类的所有属性和方法，同时可以添加自身的属性和方法。

 

2）封装：将代码及处理数据绑定在一起的一种编程机制，该机制保证程序和数据不受外部干扰。

 

3）多态：包括重载和重写。

重载为编译时多态，重写是运行时多态。

重载必须是同类中名称相同参数不同（包括个数不同和类型不同），但返回类型不同不构成重载；

重写发生于子类对父类的覆盖，子类继承父类方法名相同、参数列表相同、返回类型相同才构成重写。



### 【06】JS是用什么编写的？

用的Unicode字符集。Unicode是ASCII和Latin-1的超集，并支持地球上几乎所有在用的语言。 



### 【07】什么是CDN？

魔芋：CDN（content delivery network）内容分发网络。

是包含可分享代码库的服务器网络。

CDN系统能够实时地根据网络流量和各节点的连接、负载状况以及到用户的距离和响应时间等综合信息将用户的请求重新导向离用户最近的服务节点上。

比如：许多不同的网站使用相同的 JavaScript 框架，那么把框架库存放在一个通用的位置供每个网页使用。提高用户访问网站的响应速度。



### 【Q】js中函数调用的方法？

01，作为函数调用。

02，作为对象方法调用。

03，作为构造函数。

04，通过他们的call()。apply()。bind()间接调用。



### 【Q】preventDefault和stopPropagation区别？

preventDefault()是阻止默认事件。

stopPropagation()是阻止冒泡事件。





### 【Q】ES6中let、const和var区别，说下块级作用域？

let、const、var 都是声明变量的。

let和const定义的变量是块级作用域的。var不是。

const定义的变量的值是不可改变的。



### 【Q】什么是变量提升？函数提升？

变量声明和函数声明都会提升，但函数会提升到变量前。



### 【Q】下面这个ul，如何点击每一列的时候alert其index?

```
	<ul id=”test”>
		<li>这是第一条</li>
		<li>这是第二条</li>
		<li>这是第三条</li>
	</ul>
```



答案：

```
let ul = document.getElementById("test");
let li = ul.getElementsByTagName("li");
let len = li.length;
for (let i = 0; i < len; i++) {
    li[i].addEventListener("click", function (e) {
        alert("domindex: " + i);
    })
}
```





