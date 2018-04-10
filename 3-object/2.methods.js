/* 
* 一、 对象的创建
* Object
1. Object.assign(target, ...sources)   组合对象
2. Object.create(proto[, propertiesObject])  创建新对象，集成属性及方法
*/



// 1. Object.assign(target, ...sources)
// The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.

const object1 = {
    a: 1,
    b: 2,
    c: 3
};

const object2 = Object.assign({ c: 4, d: 5 }, object1);

console.log(object2.c, object2.d);
// expected output: 3 5


// 2. Object.create(proto[, propertiesObject]) 
//   The Object.create() method creates a new object, using an existing object to provide the newly created object's __proto__ . (see browser console for visual evidence.)

const person = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};

const me = Object.create(person);

me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"

/* 
* 二、对象的转换
* 1. obj.toString()
* 2. Object.toSource();
*/

// 1. obj.toString()
//   The toString() method returns a string representing the object.
function Dog(name) {
    this.name = name;
}

dog1 = new Dog('Gabby');

Dog.prototype.toString = function dogToString() {
    return this.name;
}

console.log(dog1.toString());
  // expected output: "Gabby"

  var o = new Object();
o.toString(); // returns [object Object]

// 2. Object.toSource();
// The toSource() method returns a string representing the source code of the object.
function Person(name) {
    this.name = name;
  }
  
  Person.prototype.toSource = function Person_toSource() {
    return 'new Person(' + uneval(this.name) + ')';
  };
  
  console.log(new Person('Joe').toSource()); // ---> new Person("Joe")


  /* 
  * 三、操控对象的属性
  * 1. getPropertotypeOf
  * 2. hasOwnProperty() 子有属性，非继承
  * 3. isPrototypeOf() 
  * 4. Object.defineProperty() 定义属性
  */

// 1. Object.getPrototypeOf(obj)
const prototype1 = {};
const object1 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object1) === prototype1);
// expected output: true


// 2. hasOwnPropertyOf()
// The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).
const object1 = new Object();
object1.property1 = 42;

console.log(object1.hasOwnProperty('property1'));
// expected output: true

console.log(object1.hasOwnProperty('toString'));
// expected output: false

console.log(object1.hasOwnProperty('hasOwnProperty'));
// expected output: false

// 3. isPrototypeOf()
// The isPrototypeOf() method checks if an object exists in another object's prototype chain.
function object1() {}
function object2() {}

object1.prototype = Object.create(object2.prototype);

const object3 = new object1();

console.log(object1.prototype.isPrototypeOf(object3));
// expected output: true

console.log(object2.prototype.isPrototypeOf(object3));
// expected output: true


// 4. Object.defineProperty() 
// The static method Object.defineProperty() defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});

object1.property1 = 77;
// throws an error in strict mode

console.log(object1.property1);
// expected output: 42


/* 
* 四、获取对象的key和value
* 1. Object.keys()
* 2. Object.values() 
*/

// 1. Object.keys()
// simple array
var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// array like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// array like object with random key ordering
var anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // console: ['2', '7', '100']

// getFoo is a property which isn't enumerable
var myObj = Object.create({}, {
  getFoo: {
    value: function () { return this.foo; }
  } 
});
myObj.foo = 1;
console.log(Object.keys(myObj)); // console: ['foo']

// 2.Object.values() 
// The Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well).
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.values(object1));
  // expected output: Array ["somestring", 42, false]

