/* 
*  一、数组的常用操作
1. 转换成数组
2. 判断是否是数组
3. 创建数组(指定元素)
*/


// 1. Array.from() 将类数组转换成数组
// The Array.from() method creates a new Array instance from an array-like or iterable object.
// Syntax
// Array.from(arrayLike[, mapFn[, thisArg]])

// JavaScript Demo: Array.from()
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]
console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]


// 2.Array.isArray() 判断数据类型是否为数组
// The Array.isArray() method determines whether the passed value is an Array.
// Syntax
// Array.isArray(obj)

Array.isArray([1, 2, 3]);  // true


// 3.Array.of() 创建数组
// The Array.of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
// Syntax
// Array.of(element0[, element1[, ...[, elementN]]])

Array.of(7);       // [7] 
Array.of(1, 2, 3); // [1, 2, 3]

Array(7);          // [ , , , , , , ]
Array(1, 2, 3);    // [1, 2, 3]


/* 
*  二、数组的增、删、改、查
1. 追加数组 push(element1[, ...[, elementN]) unshift(element1[, ...[, elementN])
2. 删除元素 pop()  shift()
3. 修改数组 splice(start[, deleteCount[, item1[, item2[, ...]]]])
4. 截取数组 slice(begin[, end])
5. 拼接数组 concat()
*/

// 1. push() 增加末尾元素
// The push() method adds one or more elements to the end of an array and returns the new length of the array.
// Syntax
// arr.push(element1[, ...[, elementN]])

var animals = ['pigs', 'goats', 'sheep'];

console.log(animals.push('cows'));
// expected output: 4


// 2. unshift() 增加头部元素
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
// Syntax
// arr.unshift(element1[, ...[, elementN]])

var array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

// 3. pop() 删除末尾元素
// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
// Syntax
// arr.pop()

var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

// 4. shift() 删除头部元素
// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
// Syntax
// arr.shift()

var array1 = [1, 2, 3];
var firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1


// 5.splice() 修改数组，改变原数组
// The splice() method changes the contents of an array by removing existing elements and/or adding new elements.
// Syntax
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at 1st index position
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, 'May');
// replaces 1 element at 4th index
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']

// 6.slice()
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.
// Syntax
// arr.slice([begin[, end]])

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

// 7.conact() 拼接数组
// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
// Syntax
// var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])

var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];

console.log(array1.concat(array2));
// expected output: Array ["a", "b", "c", "d", "e", "f"]

var arr = [];
var b = 1;
console.log(arr.concat(b)) // [ 1 ]


/* 
*  三、遍历数组
1. forEach() 不能打断
2. map()
3. reduce()
*/

// 1. forEach()
// The forEach() method executes a provided function once for each array element.
// Syntax
// arr.forEach(function callback(currentValue[, index[, array]]) {
//     //your iterator
// }[, thisArg]);

var array1 = ['a', 'b', 'c'];

array1.forEach(function (element) {
    console.log(element);
});

// expected output: "a"
// expected output: "b"
// expected output: "c"

// 2. map()
// The map() method creates a new array with the results of calling a provided function on every element in the calling array.
// Syntax
// var new_array = arr.map(function callback(currentValue[, index[, array]]) {
//     // Return element for new_array
// }[, thisArg])

var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

// 3. reduce()
// The reduce() method applies a function against an accumulator and each element in the array(from left to right) to reduce it to a single value.
// Syntax
// arr.reduce(callback[, initialValue])

const array3 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array3.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array3.reduce(reducer, 5));
// expected output: 15


/* 
*  四、过滤数组
1. filter()
*/

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// Syntax
// var newArray = arr.filter(callback[, thisArg])

const words = ["spray", "limit", "elite", "exuberant", "destruction", "present", "happy"];

let longWords = words.filter(word => word.length > 6);

console.log(longWords);
// Filtered array longWords is ["exuberant", "destruction", "present"]

/* 
*  五、数组中查找元素
1. arr.indexOf(ele) return index
2. arr.lastIndexOf(ele) return index
3. arr.find(callback[, thisArg]) 
4. arr.keys() return iterator
5. arr.values() return iterator
6. arr.includes() return boolean
7. arr.every() return boolean
8. arr.some() return boolean
*/

// 1. indexOf() 返回第一个找到的元素位置，没有返回-1
// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// Syntax
// arr.indexOf(searchElement[, fromIndex])

var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1

// 2.lastIndexOf()
// The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
// Syntax
// arr.lastIndexOf(searchElement)
// arr.lastIndexOf(searchElement, fromIndex)

var animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// expected output: 3

console.log(animals.lastIndexOf('Tiger'));
// expected output: 1

// 3. find()
// The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
// Syntax
// arr.find(callback[, thisArg])

var array1 = [5, 12, 8, 130, 44];

var found = array1.find(function (element) {
    return element > 10;
});

console.log(found);
// expected output: 12


// 4.keys()
// The keys() method returns a new Array Iterator object that contains the keys for each index in the array.
// Syntax
// arr.keys()
var array1 = ['a', 'b', 'c'];
var iterator = array1.keys();

for (let key of iterator) {
    console.log(key); // expected output: 0 1 2
}

// Key iterator doesn't ignore holes
var arr = ['a', , 'c'];
var sparseKeys = Object.keys(arr);
var denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys);  // [0, 1, 2]

// 5.values()
// The values() method returns a new Array Iterator object that contains the values for each index in the array.
// Syntax
// arr.values()
var a = ['w', 'y', 'k', 'o', 'p'];
var iterator = a.values();

console.log(iterator.next().value); // w 
console.log(iterator.next().value); // y 
console.log(iterator.next().value); // k 
console.log(iterator.next().value); // o 
console.log(iterator.next().value); // p


// 6.includes()
// The includes() method determines whether an array includes a certain element, returning true or false as appropriate.
// Syntax
// arr.includes(searchElement[, fromIndex])
var array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

var pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false


// 7. every()
// The every() method tests whether all elements in the array pass the test implemented by the provided function.
// Syntax
// arr.every(callback[, thisArg])
function isBelowThreshold(currentValue) {
    return currentValue < 40;
}

var array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true

// 8. some()
// The some() method tests whether at least one element in the array passes the test implemented by the provided function.
// Syntax
// arr.some(callback[, thisArg])
var array = [1, 2, 3, 4, 5];

var even = function (element) {
    // checks whether an element is even
    return element % 2 === 0;
};

console.log(array.some(even));
// expected output: true


/* 
*  六、数组排序
1. sort()
2. reverse()
*/

// sort()
// The sort() method sorts the elements of an array in place and returns the array. The sort is not necessarily stable. The default sort order is according to string Unicode code points.
// Syntax
// arr.sort([compareFunction])

var months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

var array1 = [1, 30, 4, 21];
array1.sort();
console.log(array1);
// expected output: Array [1, 21, 30, 4]

// 升序
let newArr = array1.sort((a, b) => a - b);
console.log(newArr) //[ 1, 4, 21, 30 ]


// 2. reverse()
// The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
// Syntax
// a.reverse()

var array1 = ['one', 'two', 'three'];
var reversed = array1.reverse();

console.log(array1);
// expected output: Array ['three', 'two', 'one']

console.log(reversed);
// expected output: Array ['three', 'two', 'one']


/* 
*  七、数组转成字符串
1. join()
2. toString()
3. toLocalString()  时间日期转换为当地格式
*/

// 1. join()
// The join() method joins all elements of an array (or an array-like object) into a string and returns this string.
// Syntax
// arr.join([separator])
var elements = ['Fire', 'Wind', 'Rain'];

console.log(elements.join());
// expected output: Fire,Wind,Rain

console.log(elements.join(''));
// expected output: FireWindRain

console.log(elements.join('-'));
// expected output: Fire-Wind-Rain


// 2.toString()
// The toString() method returns a string representing the specified array and its elements.
// Syntax
// arr.toString()
var array1 = [1, 2, 'a', '1a'];

console.log(array1.toString());
// expected output: "1,2,a,1a"

// 3.toLocalString()
// The toLocaleString() method returns a string representing the elements of the array. The elements are converted to Strings using their toLocaleString methods and these Strings are separated by a locale-specific String (such as a comma “,”).
// Syntax
// arr.toLocaleString([locales[, options]]);

var array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
var localeString = array1.toLocaleString('en', { timeZone: "UTC" });

console.log(localeString);
// expected output: "1,a,12/21/1997, 2:12:00 PM",
// This assumes "en" locale and UTC timezone - your results may vary