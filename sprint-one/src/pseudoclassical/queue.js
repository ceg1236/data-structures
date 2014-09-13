var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.l = 0;
  this.add = 0;
  this.rem = 0;
  this.q = {};
};

Queue.prototype.size = function() {
	return this.l;
};
Queue.prototype.enqueue = function(val) {
	this.q[this.add] = val; 
	this.add++;
	this.l++;
};
Queue.prototype.dequeue = function () {
	var out = this.q[this.rem];
	delete this.q[this.rem];
	this.toRem++;
	if(this.l>0) {
		this.l--;
	}
	return out;
}

