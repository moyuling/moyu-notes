## 简单的Class问题


- Q:如何实现一个Class？
	> A:
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

- Q: Object.setPrototypeOf()的实现函数是？
	>A:
	```
	Object.setPrototypeOf = function (obj, proto) {
         obj.__proto__ = proto;
         return obj;
    }
	```
	
- Q: 如何保证代码的合理，易于阅读，和易维护？


	
	
