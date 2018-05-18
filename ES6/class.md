## 简单的Class问题


- #### Q:如何实现一个Class？


	```javascript
       	class Moyu{
       	    constructor(name){
       	        this.name = name;
       	    }
       	    sayHello(){
       	        console.log("hello "+this.name);
       	    }
       	}
       	let mo = new Moyu("world");
       	mo.sayHello();//hello world
       	```

- #### Q: Object.setPrototypeOf()的实现函数是？

```javascript
Object.setPrototypeOf = function (obj, proto) {
     obj.__proto__ = proto;
     return obj;
}
```
	
- #### Q: 如何保证代码的合理，易于阅读，和易维护？


- #### Q：遍历器的好处是？

	
	一是为各种数据结构，提供一个统一的访问接口；
	
    二是使得数据结构的成员能够按某种次序排列；
    
    三是Iterator接口可以供for...of使用。
    
    
 - #### Q: 遍历器的遍历过程是？

 
 - （1）创建一个指针对象，指向当前数据结构的起始位置。遍历器对象本质上，就是一个指针对象。
 - （2）第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。
 - （3）第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。
 - （4）不断调用指针对象的next方法，直到它指向数据结构的结束位置。


- #### Q：如何对一个对象部署遍历器接口？




- #### Q：for of 可以遍历的有？


数组，Set，Map，类数组读写(arguments对象，NodeList对象，HTMLCollection对象)，Generator对象，字符串。


- #### Q： 遍历一个数组的有几种方式？优缺点是？

	
	let moyu = [1,2,3];
	
	for(let i=0,len=moyu.length;i<len;i++){
		//ES5常用方法
	    console.log(moyu[i]);
	}
	moyu.forEach(function(value){
	    //不好，无法中途跳出循环，无法break，return。
	    console.log(value);
	});
	
	for( let index in moyu){
	    //不好，会遍历数组的其他方法或原型链上的方法
	    console.log(moyu[index]);
	}
	
	for (let value of moyu ){
	    //推荐使用。
	    console.log(value);
	}



- #### Q: ES6新加了哪些功能？

- let,const 
- Class
- Set,WeakSet,Map,WeakMap
- Symbol
- 解构赋值
- iterator(迭代器)
- Generator（生成器）
- reflect
- for of
- Module
- 修饰器
- Promise
- Proxy
- 新增加的数组方法。
- 新增加的字符串方法。（模板字符串）
- 新增加的正则方法。
- Arrow function（箭头函数。）
- 修改二进制，八进制的开头。
- 默认参数


- #### Q: 浏览器到底是如何编译代码的？


- #### Q :canvas的属性和方法有哪些？

- #### Q：SVG的属性和方法有哪些？








