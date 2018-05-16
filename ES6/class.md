## 简单的Class问题


- #### Q:如何实现一个Class？
A:

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
A:
```javascript
Object.setPrototypeOf = function (obj, proto) {
     obj.__proto__ = proto;
     return obj;
}
```
	
- #### Q: 如何保证代码的合理，易于阅读，和易维护？


- #### Q：遍历器的好处是？
A：
	
	一是为各种数据结构，提供一个统一的访问接口；
	
    二是使得数据结构的成员能够按某种次序排列；
    
    三是Iterator接口可以供for...of使用。
    
    
 - #### Q: 遍历器的遍历过程是？
 A：
 
 - （1）创建一个指针对象，指向当前数据结构的起始位置。遍历器对象本质上，就是一个指针对象。
 - （2）第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。
 - （3）第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。
 - （4）不断调用指针对象的next方法，直到它指向数据结构的结束位置。
















