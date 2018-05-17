## Generator


- ### Q：Generator是什么？

是ES6的一种异步编程方式。

是一个状态机，封装了多个内部状态。

是一个遍历器对象生成函数。

- ### Q：Generator返回什么？

返回一个遍历器对象。

- ### Q：Generator的内部过程是？
返回一个遍历器，这个遍历器会访问generator的每一个状态。

调用遍历器的next()。遍历器指针会函数头部或上一次停留的地方开始执行。直到遇到yield或return语句。

可以说generator是分段执行的，next执行，yield是暂停。



- ### Q：请写一个普通的Generator例子？

		function* moyu(){
			yield "mo";
			yield "yu";
			return "ending";
		}
		
		let name = moyu();//返回遍历器对象。

		name.next()//{value:"mo",done:true}
		name.next()//{value:"yu",done:true}
		name.next()//{value:"ending",done:true}
		name.next()//{value:undefined,done:false}


- ### Q：generator的格式是？

1.function与函数名之间有*。（ES6没有确定的规定，*一般是紧跟在function后面）

2.函数体内部使用yield语句，定义不同的内部状态。


- ### Q：generator和普通函数的区别？

1.generator也是普通函数。

2.generator调用也是函数名加()。

3.调用generator函数后，该函数不执行。返回的遍历器。



- ### Q：generator中的遍历器的运行逻辑是？

（1）遇到yield语句，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。

（2）下一次调用next方法时，再继续往下执行，直到遇到下一个yield语句。

（3）如果没有再遇到新的yield语句，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。

（4）如果该函数没有return语句，则返回的对象的value属性值为undefined。


- ### Q:yield后面可以接什么？

数字，字符串，布尔，表达式。
其中，表达式只有next访问到时，才会进行计算。


- ### Q：yield语句和return语句的异同点？

同：
 - 都能返回语句后面的表达式的值。
 
异：
 - 遇到yield，函数会暂停，并在下次访问从该位置向后执行。return不行。
 - 一个函数只能return一个值。yield可以返回多个值。


- ### Q：yield语句的数目是多少个？
可以是无数个。


- ### Q：yield语句能否用在普通函数里？
不能，会报语法错误。

- ### Q：yield语句能否放在一个表达式中？
可以，但是必须加圆括号，否则报错。

	"moyu" + yield//SyntaxError
	"moyu" + (yield);//ok

如果是赋值表达式的右边，可以不加括号。

	let moyu = yield;//ok

- ### Q：generator中如果没有yield，会怎么样？
会变成一个普通的暂缓执行函数。会在遍历器第一次访问时执行。


- ### Q：generator作为对象属性的写法是？


	let moyu = {
		say:function* (){}
	}

更简洁的方式：

	let moyu = {
		* say()()
	}






