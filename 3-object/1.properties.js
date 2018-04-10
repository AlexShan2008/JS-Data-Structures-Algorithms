// The Object.prototype property represents the Object prototype object.

// The __proto__ property of Object.prototype is an accessor property (a getter function and a setter function) that exposes the internal [[Prototype]] (either an object or null) of the object through which it is accessed.

// Returns a reference to the Object constructor function that created the instance object. Note that the value of this property is a reference to the function itself, not a string containing the function's name. The value is only read-only for primitive values such as 1, true and "test".

var o = {};
o.constructor === Object; // true

var o = new Object;
o.constructor === Object; // true

var a = [];
a.constructor === Array; // true

var a = new Array;
a.constructor === Array; // true

var n = new Number(3);
n.constructor === Number; // true


// 判断对象的类型
let obj = {};
let typeObj = Object.prototype.toString.call(obj).toLowerCase();
console.log(typeObj) //[object object] 