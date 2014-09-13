var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var inst = Object.create(stackMethods);
  inst.s = {};
  inst.h = 0;
  return inst;
};

var stackMethods = {
	size:function() {
		return this.h;
	},
	push:function(val){
		this.s[this.h]=val;
		this.h++;
	},
	pop:function() {
		var out = this.s[this.h-1];
		delete this.s[this.h-1];
		if(this.h>0) {
			this.h--;
		}
		return out;
	}
};


