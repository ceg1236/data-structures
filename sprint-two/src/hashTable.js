var HashTable = function(){
  this._limit = 8;
  this._count = 0; // For resizing table, counts number of tuples
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var idx = getIndexBelowMaxForKey(k, this._limit);
  //retrieve a bucket
  var bucket = this._storage.get(idx);
  //if nonexistent, create it
  if( !bucket ) {
  	bucket = [];
  	this._storage.set(idx, bucket);
  }
  var found = false; 
  //iterate bucket
  for(var i = 0; i<bucket.length; i++) {
  	var tuple = bucket[i];
  	//key exists?
  	if(tuple[0]===k) {
  		tuple[1] = v;
  		found = true;

  		break;
  	}
  }
  //if no key found
  if( !found ) {
  	//store a new tuple
  	bucket.push([k,v]);
  	this._count++; // Increments number of tuples

  	if(this._count > 0.75*this._limit ) {
  		this._resize( this._limit * 2 );
  	}
  }

};

HashTable.prototype.retrieve = function(k){
  var idx = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(idx);

  if( !bucket ) {
  	return null;
  }

  for(var i = 0; i<bucket.length; i++) {
  	var tuple = bucket[i];
  	//key exists?
  	if(tuple[0]===k) {
  		return tuple[1];
  	}
  }
  return null;
};

HashTable.prototype.remove = function(k){

  var idx = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(idx);

  if( !bucket ) {
  	return null;
  }

  for(var i = 0; i<bucket.length; i++) {
  	var tuple = bucket[i];
  	//key exists?
  	if(tuple[0]===k) {
  		bucket.splice(i,1);
  		this._count--;

	  	if(this._count < 0.25*this._limit ) {
	  		this._resize( this._limit / 2 );
	  	}
  		return tuple[i];
  	}
  }

};

HashTable.prototype._resize = function(newLimit){
  
  // Save current table
  var oldStorge = this._storage;

	// Set new limit
	this._limit = newLimit;
	// Reset count
	this._count = 0;
	// Make a new storage w new size
  this._storage = makeLimitedArray(this._limit);
  var _this = this;
	//walk thru current storage
	oldStorge.each( function(bucket) {
		if (!bucket) {return;}
	  //for each bucket:
		for(var i = 0; i<bucket.length; i++) {
	    //for each tuple
			var tuple = bucket[i];
	    // call insert w this tuple
			_this.insert(tuple[0], tuple[1]);
		}
	});
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
