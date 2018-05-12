#常见的代码判断

```javascript
10 + " objects"         // => "10 objects". 数字10转换成字符串
"7" * "4"               // => 28: 两个字符串均转换为数字
var n = 1 - "x";        // => NaN: 字符串"x"无法转换为数字
n + " objects"          // => "NaN objects": NaN转换为字符串"NaN"
```