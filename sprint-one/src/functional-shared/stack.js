var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {
	  stack: {},
	  numContents: 0
	};

  extend(newStack, stackMethods);

  
  return newStack;
};

var extend = function(to, from) {
	for(var key in from) {
		to[key] = from[key];
	}
};


var stackMethods = {

	push: function(value) {
		this.stack[this.numContents] = value; 
		this.numContents++;

	},
	pop: function() {
		var position = this.numContents-1;
		var popped = this.stack[position];
		delete this.position;
		if(this.numContents>0) {
			this.numContents--;
		}
		return popped;
	},
	size: function () {
		return this.numContents;
	}
};




