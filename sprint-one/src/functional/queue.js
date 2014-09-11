var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size] = value; 
    size++;
  };

  someInstance.dequeue = function(){
  };

  someInstance.size = function(){
  };

  return someInstance;
};
