var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
	this.value = value; 
	this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
	var flag = false; 
	
	var walk = function(node) {
		for(var i = 0; i < node.children.length; i++) {
			if(node.children[i].value === target) {
				flag = true;
			} else {
				walk(node.children[i]);
			}
		}
		return flag;
	}
	return walk(this);

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
