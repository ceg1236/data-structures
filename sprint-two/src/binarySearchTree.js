var makeBinarySearchTree = function(value){
	var node = Object.create(TreeMethods);
	node.value = value; 
	node.left = null;
	node.right = null;

	return node;
};


var TreeMethods = {

	insert: function(value) {
		var newNode = makeBinarySearchTree(value);

		var place = function(n) {
			if(n.value < newNode.value) {
				(n.right!==null) ? place(n.right) : n.right = newNode;
			} else {
				(n.left!==null) ? place(n.left) : n.left = newNode;
			}
		}
		return place(newNode);
	}, 
	contains: function(target) {
		var search = function(n) {
			if(!n.right && !n.left) {
				return false;
			}
			if(n.value === target) {
				return true;
			} else if(n.right > target) {
				return search(n.left);
			} else {
				return search(n.right);
			}

		}
		return search(this);
	}, 
	depthFirstLog: function(){}
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
