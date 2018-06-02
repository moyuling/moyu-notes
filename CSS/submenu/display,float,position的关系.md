### 【Q】display,float,position的关系

1. 如果`display`为none，元素不显示。
2. 否则，如果position值为absolute或者fixed，元素绝对定位，float的计算值为none，display根据下面的表格进行调整。
3. 否则，如果float不是none，框是浮动的，display根据下表进行调整。
4. 其他情况下display的值为指定值。

![img](https://images2018.cnblogs.com/blog/715962/201805/715962-20180513012245079-391725349.png)