const array = [1, 2, 3];

// 1.Array.length

array.length;//3

// 2.Array.prototype

// If JavaScript doesn't provide a first() method natively,
// add a new method returning the first element of an array.

if (!Array.prototype.first) {
  Array.prototype.first = function () {
    return this[0];
  };
}


// Array.spilce(start,deleteCount,insertItem1,insertItem2);
// concat
// slice
// splice
// reduce
// forEach
// map 
// join
// indexOf
// lastIndexOf
// reverse
// sort
// toString
// valueOf
