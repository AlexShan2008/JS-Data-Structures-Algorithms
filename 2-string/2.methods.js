/* 
* 一、增、删、改、查
1. concat()
2. +          推荐用'+'进行字符串拼接
3. slice() 截取
4. split() 铰接
5. substring() 截取子字符串
6. substr() 截取子字符串
7. replace() 替换元素
*/

// 1. concat  不推荐使用
// The concat() method concatenates the string arguments to the calling string and returns a new string.

// 2.slice() return new string
// The slice() method extracts a section of a string and returns it as a new string.

// Syntax
// str.slice(beginIndex[, endIndex]) 左右包含
var str1 = 'The morning is upon us.', // the length of str1 is 23.
    str2 = str1.slice(1, 8),
    str3 = str1.slice(4, -2),
    str4 = str1.slice(12),
    str5 = str1.slice(30);
console.log(str2); // OUTPUT: he morn
console.log(str3); // OUTPUT: morning is upon u
console.log(str4); // OUTPUT: is upon us.
console.log(str5); // OUTPUT: ""

var str = 'The morning is upon us.';
str.slice(-3);     // returns 'us.'
str.slice(-3, -1); // returns 'us'
str.slice(0, -1);  // returns 'The morning is upon us'

// Removing spaces from a string
var names = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ';

console.log(names);

var re = /\s*;\s*/;
var nameList = names.split(re);

console.log(nameList);

// Returning a limited number of splits
var myString = 'Hello World. How are you doing?';
var splits = myString.split(' ', 3);

console.log(splits); //["Hello", "World.", "How"]

// Splitting with a RegExp to include parts of the separator in the result
var myString = 'Hello 1 word. Sentence number 2.';
var splits = myString.split(/(\d)/);

console.log(splits);//[ "Hello ", "1", " word. Sentence number ", "2", "." ]

// Reversing a String using split()
var str = 'asdfghjkl';
var strReverse = str.split('').reverse().join(''); // 'lkjhgfdsa'
// split() returns an array on which reverse() and join() can be applied

var str = 'résumé';
var strReverse = str.split(/(?:)/u).reverse().join('');
// => "́emuśer"

// 3.str.substring(indexStart[, indexEnd])

// 4.str.substr(start[, length])

var text = 'Mozilla';
console.log(text.substring(2, 5)); // => "zil"
console.log(text.substr(2, 3)); // => "zil"

// 5. str.replace(regexp|substr, newSubstr|function)
var str = 'Twas the night before Xmas...';
var newstr = str.replace(/xmas/i, 'Christmas');
console.log(newstr);  // Twas the night before Christmas...

var re = /apples/gi;
var str = 'Apples are round, and apples are juicy.';
var newstr = str.replace(re, 'oranges');
console.log(newstr);  // oranges are round, and oranges are juicy.

/* 
* 二、补位
1. padStart()
2. padEnd()
*/

// 1. str.padStart(targetLength [, padString])
'abc'.padStart(10);         // "       abc"
'abc'.padStart(10, "foo");  // "foofoofabc"
'abc'.padStart(6, "123465"); // "123abc"
'abc'.padStart(8, "0");     // "00000abc"
'abc'.padStart(1);          // "abc"

// Pollyfill 
if (!String.prototype.padStart) {
    String.prototype.padStart = function padStart(targetLength, padString) {
        targetLength = targetLength >> 0; //truncate if number or convert non-number to 0;
        padString = String((typeof padString !== 'undefined' ? padString : ' '));
        if (this.length > targetLength) {
            return String(this);
        }
        else {
            targetLength = targetLength - this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
            }
            return padString.slice(0, targetLength) + String(this);
        }
    };
}

// 2. str.padEnd(targetLength [, padString])
// Polyfill
if (!String.prototype.padEnd) {
    String.prototype.padEnd = function padEnd(targetLength,padString) {
        targetLength = targetLength>>0; //floor if number or convert non-number to 0;
        padString = String((typeof padString !== 'undefined' ? padString : ' '));
        if (this.length > targetLength) {
            return String(this);
        }
        else {
            targetLength = targetLength-this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
            }
            return String(this) + padString.slice(0,targetLength);
        }
    };
}


/* 
* 三、查找
1. includes()
2. indexOf()
*/

// 1. str.includes(searchString[, position])
'Blue Whale'.includes('blue'); // returns false

// Polyfill
if (!String.prototype.includes) {
    String.prototype.includes = function(search, start) {
      'use strict';
      if (typeof start !== 'number') {
        start = 0;
      }
      
      if (start + search.length > this.length) {
        return false;
      } else {
        return this.indexOf(search, start) !== -1;
      }
    };
  }


// 2. str.indexOf(searchValue[, fromIndex])
'Blue Whale'.indexOf('Blue');     // returns  0
'Blue Whale'.indexOf('Blute');    // returns -1
'Blue Whale'.indexOf('Whale', 0); // returns  5


/* 
* 四、匹配
1. match() return [result [,]] 
*/

// 1. str.match(regexp)
// The match() method retrieves the matches when matching a string against a regular expression.

var str = 'For more information, see Chapter 3.4.5.1';
var re = /see (chapter \d+(\.\d)*)/i;
var found = str.match(re);

console.log(found);

// logs [ 'see Chapter 3.4.5.1',
//        'Chapter 3.4.5.1',
//        '.1',
//        index: 22,
//        input: 'For more information, see Chapter 3.4.5.1' ]

// 'see Chapter 3.4.5.1' is the whole match.
// 'Chapter 3.4.5.1' was captured by '(chapter \d+(\.\d)*)'.
// '.1' was the last value captured by '(\.\d)'.
// The 'index' property (22) is the zero-based index of the whole match.
// The 'input' property is the original string that was parsed.


var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var regexp = /[A-E]/gi;
var matches_array = str.match(regexp);

console.log(matches_array);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']

  

