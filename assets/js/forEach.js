if ( !Array.prototype.forEach ) {undefined

Array.prototype.forEach = function forEach( callback, thisArg ) {undefined

var T, k;

if ( this == null ) {undefined

throw new TypeError( "this is null or not defined" );

}

var O = Object(this);

var len = O.length >>> 0;

if ( typeof callback !== "function" ) {undefined

throw new TypeError( callback + " is not a function" );

}

if ( arguments.length > 1 ) {undefined

T = thisArg;

}

k = 0;

while( k < len ) {undefined

var kValue;

if ( k in O ) {undefined

kValue = O[ k ];

callback.call( T, kValue, k, O );

}

k++;

}

};

}