var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var inst = Object.create(queueMethods);
  inst.q = {};
  inst.line = 0;
  inst.toAdd = 0;
  inst.toRem = 0;
  return inst;
};

var queueMethods = {

enqueue : function(val) {
	this.q[this.toAdd] = val; 
	this.toAdd++;
	this.line++;
},

dequeue : function() {
	var out = this.q[this.toRem];
	delete out;						//What is going on?
	if(this.line>0) {this.line--;}
	this.toRem++;
	return out;
},

size : function() {
	return this.line;
}
};