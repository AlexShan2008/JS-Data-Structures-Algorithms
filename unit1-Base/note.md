##JS数据类型和控制机构
```
梳理类型与基本算法
```
###1.基本数据类型
```
1. Undefined 
2. Null
3. Boolean
4. Number
5. String
```
###2.复杂数据类型
```
Object

```
###3.typeof 返回结果
```
1. undefined 

1) 只声明了变量，但未初始化赋值；
2）该变量未定义；
3）该值本身就是undefined;

2. boolean 
如果这个值是布尔值

3.string 
如果这个值是字符串

4. number
如果这个值是数字

5. object
如果这个值是对象、数组或者null；

6. function
如果这个值是函数

```
###4.操作符
```
算数操作符    描述

    +        加法
    -        减法
    *        乘法
    /        除法
    %        取余
    ++       递增
    --       递减
    
赋值操作符    描述

    =        赋值
    +=       加/赋值 ( x += y ) == ( x = x + y )    
    -=       加/赋值 ( x -= y ) == ( x = x - y )    
    *=       加/赋值 ( x *= y ) == ( x = x * y )    
    /=       加/赋值 ( x /= y ) == ( x = x / y )    
    %=       加/赋值 ( x %= y ) == ( x = x % y )    
    
比较操作符    描述

    ==        相等     转换数据类型后再比较
    ===       全等     不做数据类型转换
    ！=       不等
    >         大于
    >=        大于等于
    <         小于
    <=        小于等于
    
逻辑操作符    描述

    &&        与
    ||        或
    ！        非       取反
    
位操作符    描述

    &        与
    |        或
    ~        非       
    ^        异或
    <<       左移
    >>       右移
    
delete操作符   删除对象里的属性；

var a ={
    name:"st"
};

delete a.name;
console.log(a);// a={ }

```
###5.真值和假值
```
数值类型     转换成布尔值

undefined        false
null             false 
布尔值           TRUE就是TRUE ，FALSE就是FALSE
数字             +0、 -0 和NaN都是FALSE，其他都是TRUE
字符串           如果字符串是空的（长度为0）就是FALSE，其他都是TRUE
对象             TRUE
```

###6.相等操作符使用==时
不同类型的值可以被看做相等，因为会对数据类型进行转换。
```
类型（x)                   类型（y）                  结果

null                       undefined                TRUE
undefined                  null                     TRUE
数字                       字符串                   x == toNumber(y)  会把字符串转换成数字后再比较
字符串                     数字                     toNumber(x) == y  会把字符串转换成数字后再比较
布尔值                     任意类型                 toNumber(x) == y   把布尔值true转换成1，false转换成0之后再比较
任意类型                   布尔值                   toNumber(x) == y   把布尔值true转换成1，false转换成0之后再比较
字符串或数字               对象                     x == toPrimitive(y) 
对象                       字符串或数字             toPrimitive(x) == y 

如果x,y是相同类型，J谁比较它们的值或对象值。其他没有列在这个表格的情况都会返回FALSE。

toNumber方法和toPrimitive方法是内部的，并根据以下表格对其进行估值；

值类型      结果
undefined   NaN
null        0
布尔值      如果是TRUE，返回1；如果是FALSE，返回0；
数字        数字对应的值；
字符串      将字符串解析成数字。如果字符串中包含字母，返回NaN;如果是有数字字符组成的，转换成数字；
对象        Number(toPrimitive(value))

toPrimitive方法对不同六类型返回的结果如下：

值类型       结果
对象         如果对象的ValueOf方法的结果是原始值，返回原始值；如果对象的toString方法返回原始值，就返回这个值；其他情况都返回一个错误。


```
###7.全等操作符===
如果比较的两个值的类型不同，比较结果就是FALSE。如果比较的两个值的类型相同，就会按下表判断。
```
类型                     值                       结果

数字          x和y数值相同（不是NaN）             TRUE
字符串        x和y是相同的字符                    TRUE
布尔值        x和y都是true和false                 TRUE
对象          x和y引用同一个对象                  TRUE


    let a = {
        name: "tony"
    };
    let b = {
        name: "tony"
    };
    
    因为是两个不同的对象，引用不同，所有不等。

    testTruthy(a == b); //false
    testTruthy(a === b);//false

```
###8.控制结构
>1. 条件语句
```
* if …else
* switch(flag){ case a: fn() ; break; case b: fn2(); break; default: fb() }
* flag === 1 ? fn ; fb;

```
>2. 循环语句
```
* for 
* while 
* do while

``` 
