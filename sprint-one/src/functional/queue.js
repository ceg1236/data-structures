var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var addIndex = 0;
  var removeIndex = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[addIndex] = value; 
    size++;
    addIndex++;
  };

  someInstance.dequeue = function(){
    var out = storage[removeIndex];
    delete storage[removeIndex];
    if(size>0) {
      size--;
    }
    removeIndex++;
    return out; 
  };

  someInstance.size = function(){
    return size; 
  };

  return someInstance;
};
