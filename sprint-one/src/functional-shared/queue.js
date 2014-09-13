var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var makeInst = {
  	q:{},
  	line:0,
  	toAdd:0,
  	toRem:0
  }
  extend(makeInst, queueMethods);
  return makeInst;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
	this.q[this.toAdd] = value;
	this.toAdd++;
	this.line++;
};

queueMethods.dequeue = function() {
	var out = this.q[this.toRem];
	this.q[this.toRem] = null;  // What does this do ?
	if(this.line>0) {
		this.line--;
	}
	this.toRem++;
	return out; 
}

queueMethods.size = function() {
	return this.line;
}


