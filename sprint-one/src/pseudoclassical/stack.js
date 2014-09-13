var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.height = 0; 
  this.s = {};
};

Stack.prototype.size = function() {
	return this.height;
};
Stack.prototype.push = function(val) {
	this.s[this.height]=val;
	this.height++;
};
Stack.prototype.pop = function() {
	var p = this.s[this.height-1];
	delete p;
	if(this.height>0) {
		this.height--;
	}
	return p;
}
