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













