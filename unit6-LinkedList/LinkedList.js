function LinkedList() {
  /* eslint-disable no-alert, no-console */

  alert('foo');
  console.log('bar');

  /* eslint-enable no-alert, no-console */

  /**
   * 链表，LinkedList
   * 动态数据结构；
   * 我们可以从中任意添加和移除项，按需扩容；
   * 数组中的一个缺点：
   * （大多数语言中）数组的大小是固定的，从数组的起点或者中间差插入或移除项的成本很高，因为需要移动元素，JS也是如此。
   *
   * 链表存储有序的元素集合，但不同于数组，链表中的元素在内存中并不是连续放置的。
   * 每个元素由一个存储元素本身的节点和一个指向下一个元素的引用（也称指针或链接）组成。
   *
   * 相对于传统数组，链表的好处在于，添加或移除元素时不需要移动其他元素。
   * 链表需要使用指针。
   *
   * 数组可以直接访问任何位置的任何元素；
   * 链表需要从起点（表头）开始迭代列表，直到找到所需的元素。
   * 例： 火车；每节车皮就是链表的元素，车皮间的连接就是指针。
   *
   * append(element) 向链表尾部添加一个新的项；
   * insert（position, element) 向链表的特定位置插入一个新的项；
   * remove(element) 从链表中移除一项；
   * indexOf（element） 返回元素在链表中的索引。如果链表中没有就返回-1；
   * removeAt( position) 从链表的特定位置移除一项；
   * isEmpty() 如果链表中不包含任何元素，返回true,否则返回false;
   * size() 返回链表包含的元素个数；
   * toString() 由于链表中引入了Node类，需要重写继承自JS中Object对象默认的toString()方法，让其只输出元素是指。
   *
   * 链表最后一个节点的下一个元素始终未null；
   */
  
  let Node = function (element) {
    this.element = element;
    this.next = null;
  };
  let length = 0,
    head = null;
  //向链表尾部追加元素；
  this.append = function (element) {

    let node = new Node(element),
      current;

    if (head === null) {
      head = node;
    } else {
      current = head;

      //    循环链表，直到找到最后一项；
      while (current.next) {
        current = current.next;
      }

      //    找到最后一项，将其next赋为node，建立连接；
      current.next = node;
    }

    length++;


  };
  //在任意位置插入一个元素；
  this.insert = function (position, element) {

    //   检查越界值；
    if (position >= 0 && position <= length) {

      let node = new Node(element),
        current = head,
        previous,
        index = 0;

      if (position === 0) {

        node.next = current;
        head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }

      length++;

      return true;
    } else {
      return false;
    }
  };
  //从链表中移除元素；
  this.removeAt = function (position) {
    //检查越界条件；
    if (position > -1 && position < length) {
      let current = head,
        previous,
        index = 0;

      //移除第一项；
      if (position === 0) {
        head = current.next;
      } else {

        while (index++ < position) {

          previous = current;
          current = current.next;
        }

        //将previous于current的下一项链接起来，跳过current，从而移除它；
        previous.next = current.next;
      }

      length--;

      return current.element;

    } else {
      return null;
    }


  };
  this.remove = function (element) {

    let index = this.indexOf(element);
    return this.removeAt(index);
  };
  //返回元素的位置；
  this.indexOf = function (element) {

    let current = head,
      index = 0;

    while (current) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }

    return -1;
  };
  this.isEmpty = function () {
    return length === 0;
  };
  this.size = function () {
    return length;
  };
  this.getHead = function () {
    return head;
  };
  this.toString = function () {

    let current = head,
      string = '';

    while (current) {
      string += ',' + current.element;
      current = current.next;
    }

    return string.slice(1);
  };
}

let list = new LinkedList();
list.append(15);
list.append(10);
console.log(list);
