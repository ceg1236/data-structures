var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    var oldTail = list.tail;

    if(list.head===null && list.tail === null) {
      list.head = newNode;
    } else if (list.head === list.tail) {
      list.head.next = newNode;
    } else {
      oldTail.next = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function(){
    if(list.head.next){ 
      list.head = list.head.next;
    }

    return list.head.value;
    
 
  };

  list.contains = function(target){
    var runList = function(node) {
      if(node.value === target) {
        return true;
      } else if (node.next) {
        return runList(node.next);
      } else {
        return false;
      }


    }
    return runList(list.head);
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
