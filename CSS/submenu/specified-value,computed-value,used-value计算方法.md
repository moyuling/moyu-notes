###   【Q】specified value,computed value,used value计算方法

- specified value（规范值）: 计算方法如下：

- 1. 如果样式表设置了一个值，使用这个值
  2. 如果没有设置值，这个属性是继承属性，从父元素继承
  3. 如果没设置，并且不是继承属性，使用css规范指定的初始值

------

- computed value（计算值）:

 以specified value根据规范定义的行为进行计算，通常将相对值计算为绝对值，例如em根据font-size进行计算。

一些使用百分数并且需要布局来决定最终值的属性，如width，margin。

百分数就直接作为computed value。line-height的无单位值也直接作为computed value。

这些值将在计算used value时得到绝对值。

computed value的主要作用是用于继承。

------

 

- used value（使用值）：属性计算后的最终值，对于大多数属性可以通过window.getComputedStyle获得，尺寸值单位为像素。

以下属性依赖于布局：

 

- background-position
- bottom, left, right, top
- height, width
- margin-bottom, margin-left, margin-right, margin-top
- min-height, min-width
- padding-bottom, padding-left, padding-right, padding-top
- text-indent

