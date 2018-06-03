# CSS 相关

### 复杂答案的目录：

- [【Q】CSS中具有继承性的属性？](submenu/css中具有继承性的属性.md)
- [【Q】specified value,computed value,used value计算方法](submenu/specified-value,computed-value,used-value计算方法.md)
- [【Q】PNG,GIF,JPG的区别及如何选](submenu/PNG,GIF,JPG的区别及如何选.md)
- [【Q】外边距折叠(collapsing margins)](submenu/外边距折叠.md)
- [【Q】display,float,position的关系](submenu/display,float,position的关系.md)
- [【Q】css hack原理及常用hack](submenu/css-hack原理及常用hack.md)
- 









---



### 简单答案的目录：

- [【Q】什么是FOUC?如何避免？](#q什么是fouc如何避免)
- [【Q】link与@import的区别？](#qlink与import的区别)



- CSS新属性。
- 盒模型。
- 垃圾回收。
- 





---



### 答案简单的罗列如下：

### 【Q】什么是FOUC?如何避免？

Flash Of Unstyled Content：

用户定义样式表加载之前浏览器使用默认样式显示文档，用户样式加载渲染之后再从新显示文档，造成页面闪烁。

解决方法：把样式表放到文档的`head`



### 【Q】link与@import的区别?

1. `link`是HTML方式， `@import`是CSS方式
2. `link`最大限度支持并行下载，`@import`过多嵌套导致串行下载，出现FOUC
3. `link`可以通过`rel="alternate stylesheet"`指定候选样式
4. 浏览器对`link`支持早于`@import`，可以使用`@import`对老浏览器隐藏样式
5. `@import`必须在样式规则之前，可以在css文件中引用其他文件
6. 总体来说：link优于@import

---







### todo:



- 【Q】什么是虚拟视窗（virtual viewport）

- [什么是盒模型？]()
- 【Q】placeholder的兼容性写法是？
- 【Q】css的基本语句构成是？