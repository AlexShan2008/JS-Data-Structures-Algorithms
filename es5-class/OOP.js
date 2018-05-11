// 1. 方法挂在类的实例上；
// 每个类都拥有此方法；
// 每次创建类，就会创建此方法；
// 占用内存、增加实例开销
function Book(title) {
  this.title = title;
  this.printTitle = function () {
    console.log(this.title);
  };
}

let book1 = new Book('shan1');
book1.printTitle();

let book2 = new Book('shan2');
book2.printTitle();

console.log(book1);// Book {title: "shan1", printTitle: ƒ}
console.log(book2);// Book {title: "shan2", printTitle: ƒ}


// 2. 方法挂在类的原型上；
// 多次创建实例，但是printTtile方法只会创建一次，在所有实例中共享。
function Book(title) {
  this.title = title;
}

Book.prototype = {
  printTitle() {
    console.log(this.title);
  }
}

let book1 = new Book('shan1');
book1.printTitle();

let book2 = new Book('shan2');
book2.printTitle();

console.log(book1);// Book {title: "shan1"}
console.log(book2);// Book {title: "shan2"}

/**
 * 结论：
 * 1. 公共方法，应该将方法挂在原型上；减少内存和实例化的开销；
 * 2. 私有方法，应该将方法挂在实例上；
 */