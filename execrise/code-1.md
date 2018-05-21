### 代码练习题

- Q: 0==null 输出什么？
	>A：false



- Q :猜猜

	function Foo() {
        getName = function () {
            alert(1)
        }
        return this
    }
    
    Foo.getName = function () { alert(2) }
    Foo.prototype.getName = function () { alert(3) }
    
    function getName() { alert(5) }
    
    var getName = function () { alert(4) }
    
    Foo.getName() 
    getName() 
    Foo().getName()
    getName()
    new Foo.getName()
    new Foo().getName()
    new new Foo().getName()
    
    
	 result:
    
     2 
     4
     1
     1
     2
     3
     3
  
  
  
- ### 代码判断

```javascript
10 + " objects"         // => "10 objects". 数字10转换成字符串
"7" * "4"               // => 28: 两个字符串均转换为数字
var n = 1 - "x";        // => NaN: 字符串"x"无法转换为数字
n + " objects"          // => "NaN objects": NaN转换为字符串"NaN"
```


-


	var tmp = 1;
	    function f(){
	        if(false) {
	            var tmp = 2;
	        }
	        console.log(tmp);
	    }
	    f(); 
	    
	    

---

	var add = (function(){
	    var counter = 0;
	    return function(){
	        return counter+=1;
	    }
	    
	})();
	
	add();
	add();
	add();
	
	// counter :3


---

	let a = function b() {
        console.log('第一次输出：'+b)
        b = 3 ;
        console.log('第二次输出：'+b)
    }











































