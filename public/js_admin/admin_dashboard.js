/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.5.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( _i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
					dataPriv.get( this, "events" ) || Object.create( null )
				)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px";
				tr.style.height = "1px";
				trChild.style.height = "9px";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = parseInt( trStyle.height ) > 3;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = (
					dataPriv.get( cur, "events" ) || Object.create( null )
				)[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script
			if ( !isSuccess && jQuery.inArray( "script", s.dataTypes ) > -1 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			if ( typeof props.top === "number" ) {
				props.top += "px";
			}
			if ( typeof props.left === "number" ) {
				props.left += "px";
			}
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./resources/assets/valex/assets/js/custom.js":
/*!****************************************************!*\
  !*** ./resources/assets/valex/assets/js/custom.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

$(function () {
  'use strict'; // ______________LOADER

  $("#global-loader").fadeOut("slow"); // This template is mobile first so active menu in navbar
  // has submenu displayed by default but not in desktop
  // so the code below will hide the active menu if it's in desktop

  if (window.matchMedia('(min-width: 992px)').matches) {
    $('.main-navbar .active').removeClass('show');
    $('.main-header-menu .active').removeClass('show');
  } // Shows header dropdown while hiding others


  $('.main-header .dropdown > a').on('click', function (e) {
    e.preventDefault();
    $(this).parent().toggleClass('show');
    $(this).parent().siblings().removeClass('show');
    $(this).find('.drop-flag').removeClass('show');
  });
  $('.country-flag1').on('click', function (e) {
    $('.main-header .dropdown > a').parent().siblings().removeClass('show');
  }); // ______________Full screen

  $(document).on("click", ".fullscreen-button", function toggleFullScreen() {
    if (document.fullScreenElement !== undefined && document.fullScreenElement === null || document.msFullscreenElement !== undefined && document.msFullscreenElement === null || document.mozFullScreen !== undefined && !document.mozFullScreen || document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  }); // ______________ RATING STAR

  var ratingOptions = {
    selectors: {
      starsSelector: '.rating-stars',
      starSelector: '.rating-star',
      starActiveClass: 'is--active',
      starHoverClass: 'is--hover',
      starNoHoverClass: 'is--no-hover',
      targetFormElementSelector: '.rating-value'
    }
  };
  $(".rating-stars").ratingStars(ratingOptions); // ______________Cover Image

  $(".cover-image").each(function () {
    var attr = $(this).attr('data-image-src');

    if (_typeof(attr) !== ( true ? "undefined" : undefined) && attr !== false) {
      $(this).css('background', 'url(' + attr + ') center center');
    }
  }); // ______________Toast

  $(".toast").toast();
  /* Headerfixed */

  $(window).on("scroll", function (e) {
    if ($(window).scrollTop() >= 66) {
      $('main-header').addClass('fixed-header');
    } else {
      $('.main-header').removeClass('fixed-header');
    }
  }); // ______________Search

  $('body, .main-header form[role="search"] button[type="reset"]').on('click keyup', function (event) {
    if (event.which == 27 && $('.main-header form[role="search"]').hasClass('active') || $(event.currentTarget).attr('type') == 'reset') {
      closeSearch();
    }
  });

  function closeSearch() {
    var $form = $('.main-header form[role="search"].active');
    $form.find('input').val('');
    $form.removeClass('active');
  } // Show Search if form is not active // event.preventDefault() is important, this prevents the form from submitting


  $(document).on('click', '.main-header form[role="search"]:not(.active) button[type="submit"]', function (event) {
    event.preventDefault();
    var $form = $(this).closest('form'),
        $input = $form.find('input');
    $form.addClass('active');
    $input.focus();
  }); // if your form is ajax remember to call `closeSearch()` to close the search container

  $(document).on('click', '.main-header form[role="search"].active button[type="submit"]', function (event) {
    event.preventDefault();
    var $form = $(this).closest('form'),
        $input = $form.find('input');
    $('#showSearchTerm').text($input.val());
    closeSearch();
  });
  /* ----------------------------------- */
  // Showing submenu in navbar while hiding previous open submenu

  $('.main-navbar .with-sub').on('click', function (e) {
    e.preventDefault();
    $(this).parent().toggleClass('show');
    $(this).parent().siblings().removeClass('show');
  }); // this will hide dropdown menu from open in mobile

  $('.dropdown-menu .main-header-arrow').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.dropdown').removeClass('show');
  }); // this will show navbar in left for mobile only

  $('#mainNavShow, #azNavbarShow').on('click', function (e) {
    e.preventDefault();
    $('body').addClass('main-navbar-show');
  }); // this will hide currently open content of page
  // only works for mobile

  $('#mainContentLeftShow').on('click touch', function (e) {
    e.preventDefault();
    $('body').addClass('main-content-left-show');
  }); // This will hide left content from showing up in mobile only

  $('#mainContentLeftHide').on('click touch', function (e) {
    e.preventDefault();
    $('body').removeClass('main-content-left-show');
  }); // this will hide content body from showing up in mobile only

  $('#mainContentBodyHide').on('click touch', function (e) {
    e.preventDefault();
    $('body').removeClass('main-content-body-show');
  }); // navbar backdrop for mobile only

  $('body').append('<div class="main-navbar-backdrop"></div>');
  $('.main-navbar-backdrop').on('click touchstart', function () {
    $('body').removeClass('main-navbar-show');
  }); // Close dropdown menu of header menu

  $(document).on('click touchstart', function (e) {
    e.stopPropagation(); // closing of dropdown menu in header when clicking outside of it

    var dropTarg = $(e.target).closest('.main-header .dropdown').length;

    if (!dropTarg) {
      $('.main-header .dropdown').removeClass('show');
    } // closing nav sub menu of header when clicking outside of it


    if (window.matchMedia('(min-width: 992px)').matches) {
      // Navbar
      var navTarg = $(e.target).closest('.main-navbar .nav-item').length;

      if (!navTarg) {
        $('.main-navbar .show').removeClass('show');
      } // Header Menu


      var menuTarg = $(e.target).closest('.main-header-menu .nav-item').length;

      if (!menuTarg) {
        $('.main-header-menu .show').removeClass('show');
      }

      if ($(e.target).hasClass('main-menu-sub-mega')) {
        $('.main-header-menu .show').removeClass('show');
      }
    } else {
      //
      if (!$(e.target).closest('#mainMenuShow').length) {
        var hm = $(e.target).closest('.main-header-menu').length;

        if (!hm) {
          $('body').removeClass('main-header-menu-show');
        }
      }
    }
  });
  $('#mainMenuShow').on('click', function (e) {
    e.preventDefault();
    $('body').toggleClass('main-header-menu-show');
  });
  $('.main-header-menu .with-sub').on('click', function (e) {
    e.preventDefault();
    $(this).parent().toggleClass('show');
    $(this).parent().siblings().removeClass('show');
  });
  $('.main-header-menu-header .close').on('click', function (e) {
    e.preventDefault();
    $('body').removeClass('main-header-menu-show');
  });
  $(".card-header-right .card-option .fe fe-chevron-left").on("click", function () {
    var a = $(this);

    if (a.hasClass("icofont-simple-right")) {
      a.parents(".card-option").animate({
        width: "35px"
      });
    } else {
      a.parents(".card-option").animate({
        width: "180px"
      });
    }

    $(this).toggleClass("fe fe-chevron-right").fadeIn("slow");
  }); // ___________TOOLTIP	

  $('[data-toggle="tooltip"]').tooltip(); // colored tooltip

  $('[data-toggle="tooltip-primary"]').tooltip({
    template: '<div class="tooltip tooltip-primary" role="tooltip"><div class="arrow"><\/div><div class="tooltip-inner"><\/div><\/div>'
  });
  $('[data-toggle="tooltip-secondary"]').tooltip({
    template: '<div class="tooltip tooltip-secondary" role="tooltip"><div class="arrow"><\/div><div class="tooltip-inner"><\/div><\/div>'
  }); // __________POPOVER

  $('[data-toggle="popover"]').popover();
  $('[data-popover-color="head-primary"]').popover({
    template: '<div class="popover popover-head-primary" role="tooltip"><div class="arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
  });
  $('[data-popover-color="head-secondary"]').popover({
    template: '<div class="popover popover-head-secondary" role="tooltip"><div class="arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
  });
  $('[data-popover-color="primary"]').popover({
    template: '<div class="popover popover-primary" role="tooltip"><div class="arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
  });
  $('[data-popover-color="secondary"]').popover({
    template: '<div class="popover popover-secondary" role="tooltip"><div class="arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
  });
  $(document).on('click', function (e) {
    $('[data-toggle="popover"],[data-original-title]').each(function () {
      //the 'is' for buttons that trigger popups
      //the 'has' for icons within a button that triggers a popup
      if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
        (($(this).popover('hide').data('bs.popover') || {}).inState || {}).click = false; // fix for BS 3.3.6
      }
    });
  }); // Enable Eva-icons with SVG markup

  eva.replace(); // ______________Horizontal-menu Active Class

  $(document).ready(function () {
    $(".horizontalMenu-list li a").each(function () {
      var pageUrl = window.location.href.split(/[?#]/)[0];

      if (this.href == pageUrl) {
        $(this).addClass("active");
        $(this).parent().addClass("active"); // add active to li of the current link

        $(this).parent().parent().prev().addClass("active"); // add active class to an anchor

        $(this).parent().parent().prev().click(); // click the item to make it drop
      }
    });
  }); // ______________Active Class

  $(document).ready(function () {
    $(".horizontalMenu-list li a").each(function () {
      var pageUrl = window.location.href.split(/[?#]/)[0];

      if (this.href == pageUrl) {
        $(this).addClass("active");
        $(this).parent().addClass("active"); // add active to li of the current link

        $(this).parent().parent().prev().addClass("active"); // add active class to an anchor

        $(this).parent().parent().prev().click(); // click the item to make it drop
      }
    });
    $(".horizontal-megamenu li a").each(function () {
      var pageUrl = window.location.href.split(/[?#]/)[0];

      if (this.href == pageUrl) {
        $(this).addClass("active");
        $(this).parent().addClass("active"); // add active to li of the current link

        $(this).parent().parent().parent().parent().parent().parent().parent().prev().addClass("active"); // add active class to an anchor

        $(this).parent().parent().prev().click(); // click the item to make it drop
      }
    });
    $(".horizontalMenu-list .sub-menu .sub-menu li a").each(function () {
      var pageUrl = window.location.href.split(/[?#]/)[0];

      if (this.href == pageUrl) {
        $(this).addClass("active");
        $(this).parent().addClass("active"); // add active to li of the current link

        $(this).parent().parent().parent().parent().prev().addClass("active"); // add active class to an anchor

        $(this).parent().parent().prev().click(); // click the item to make it drop
      }
    });
  }); // ______________ Back to Top

  $(window).on("scroll", function (e) {
    if ($(this).scrollTop() > 0) {
      $('#back-to-top').fadeIn('slow');
    } else {
      $('#back-to-top').fadeOut('slow');
    }
  });
  $("#back-to-top").on("click", function (e) {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  }); // ______________Switcher

  /*Skin modes*/

  $(document).on("click", '#myonoffswitch7', function () {
    if (this.checked) {
      $('body').addClass('body-default');
      $('body').removeClass('body-style1');
      localStorage.setItem("body-default", "True");
    } else {
      $('body').removeClass('body-default');
      localStorage.setItem("body-default", "false");
    }
  });
  $(document).on("click", '#myonoffswitch6', function () {
    if (this.checked) {
      $('body').addClass('body-style1');
      $('body').removeClass('body-default');
      localStorage.setItem("body-style1", "True");
    } else {
      $('body').removeClass('body-style1');
      localStorage.setItem("body-style1", "false");
    }
  });
  /*Horizontal Styles*/

  $(document).on("click", '#myonoffswitch2', function () {
    if (this.checked) {
      $('body').addClass('horizontal-light');
      $('body').removeClass('horizontal-color');
      $('body').removeClass('horizontal-dark');
      $('body').removeClass('horizontal-gradient');
      localStorage.setItem("horizontal-light", "True");
    } else {
      $('body').removeClass('horizontal-light');
      localStorage.setItem("horizontal-light", "false");
    }
  });
  $(document).on("click", '#myonoffswitch3', function () {
    if (this.checked) {
      $('body').addClass('horizontal-color');
      $('body').removeClass('horizontal-light');
      $('body').removeClass('horizontal-dark');
      $('body').removeClass('horizontal-gradient');
      localStorage.setItem("horizontal-color", "True");
    } else {
      $('body').removeClass('horizontal-color');
      localStorage.setItem("horizontal-color", "false");
    }
  });
  $(document).on("click", '#myonoffswitch4', function () {
    if (this.checked) {
      $('body').addClass('horizontal-dark');
      $('body').removeClass('horizontal-color');
      $('body').removeClass('horizontal-light');
      $('body').removeClass('horizontal-gradient');
      localStorage.setItem("horizontal-dark", "True");
    } else {
      $('body').removeClass('horizontal-dark');
      localStorage.setItem("horizontal-dark", "false");
    }
  });
  $(document).on("click", '#myonoffswitch5', function () {
    if (this.checked) {
      $('body').addClass('horizontal-gradient');
      $('body').removeClass('horizontal-color');
      $('body').removeClass('horizontal-light');
      $('body').removeClass('horizontal-dark');
      localStorage.setItem("horizontal-gradient", "True");
    } else {
      $('body').removeClass('horizontal-gradient');
      localStorage.setItem("horizontal-gradient", "false");
    }
  });
  $(document).on("click", '#myonoffswitch8', function () {
    if (this.checked) {
      $('body').addClass('reset');
      $('body').removeClass('horizontal-color');
      $('body').removeClass('horizontal-light');
      $('body').removeClass('horizontal-dark');
      $('body').removeClass('horizontal-gradient');
      $('body').removeClass('themestyle');
      localStorage.setItem("reset", "True");
    } else {
      $('body').removeClass('reset');
      localStorage.setItem("reset", "false");
    }
  });
  /*Leftmenu Styles*/

  $(document).on("click", '#myonoffswitch9', function () {
    if (this.checked) {
      $('body').addClass('leftmenu-light');
      $('body').removeClass('leftmenu-color');
      $('body').removeClass('leftmenu-dark');
      $('body').removeClass('leftmenu-gradient');
      localStorage.setItem("leftmenu-light", "True");
    } else {
      $('body').removeClass('leftmenu-light');
      localStorage.setItem("leftmenu-light", "false");
    }
  });
  $(document).on("click", '#myonoffswitch10', function () {
    if (this.checked) {
      $('body').addClass('leftmenu-color');
      $('body').removeClass('leftmenu-light');
      $('body').removeClass('leftmenu-dark');
      $('body').removeClass('leftmenu-gradient');
      localStorage.setItem("leftmenu-color", "True");
    } else {
      $('body').removeClass('leftmenu-color');
      localStorage.setItem("leftmenu-color", "false");
    }
  });
  $(document).on("click", '#myonoffswitch11', function () {
    if (this.checked) {
      $('body').addClass('leftmenu-dark');
      $('body').removeClass('leftmenu-color');
      $('body').removeClass('leftmenu-light');
      $('body').removeClass('leftmenu-gradient');
      localStorage.setItem("leftmenu-dark", "True");
    } else {
      $('body').removeClass('leftmenu-dark');
      localStorage.setItem("leftmenu-dark", "false");
    }
  });
  $(document).on("click", '#myonoffswitch12', function () {
    if (this.checked) {
      $('body').addClass('leftmenu-gradient');
      $('body').removeClass('leftmenu-color');
      $('body').removeClass('leftmenu-light');
      $('body').removeClass('leftmenu-dark');
      localStorage.setItem("leftmenu-gradient", "True");
    } else {
      $('body').removeClass('leftmenu-gradient');
      localStorage.setItem("leftmenu-gradient", "false");
    }
  });
  $(document).on("click", '#myonoffswitch13', function () {
    if (this.checked) {
      $('body').addClass('reset');
      $('body').removeClass('leftmenu-color');
      $('body').removeClass('leftmenu-light');
      $('body').removeClass('leftmenu-dark');
      $('body').removeClass('leftmenu-gradient');
      $('body').removeClass('leftbgimage1');
      $('body').removeClass('leftbgimage2');
      $('body').removeClass('leftbgimage3');
      $('body').removeClass('leftbgimage4');
      $('body').removeClass('leftbgimage5');
      $('body').removeClass('leftbgimage6');
      $('body').removeClass('leftbgimage7');
      $('body').removeClass('leftbgimage8');
      $('body').removeClass('leftbgimage9');
      $('body').removeClass('leftbgimage10');
      $('body').removeClass('body-style1');
      localStorage.setItem("reset", "True");
    } else {
      $('body').removeClass('reset');
      localStorage.setItem("reset", "false");
    }
  });
  /*--- Left-menu Image --*/

  $('#leftmenuimage1').on('click', function () {
    $('body').removeClass('leftbgimage2');
    $('body').removeClass('leftbgimage3');
    $('body').removeClass('leftbgimage4');
    $('body').removeClass('leftbgimage5');
    $('body').removeClass('leftbgimage6');
    $('body').removeClass('leftbgimage7');
    $('body').removeClass('leftbgimage8');
    $('body').removeClass('leftbgimage9');
    $('body').removeClass('leftbgimage10');
    $('body').addClass('leftbgimage1');
    return false;
  });
  $('#leftmenuimage2').on('click', function () {
    $('body').removeClass('leftbgimage1');
    $('body').removeClass('leftbgimage3');
    $('body').removeClass('leftbgimage4');
    $('body').removeClass('leftbgimage5');
    $('body').removeClass('leftbgimage6');
    $('body').removeClass('leftbgimage7');
    $('body').removeClass('leftbgimage8');
    $('body').removeClass('leftbgimage9');
    $('body').removeClass('leftbgimage10');
    $('body').addClass('leftbgimage2');
    return false;
  });
  $('#leftmenuimage3').on('click', function () {
    $('body').removeClass('leftbgimage1');
    $('body').removeClass('leftbgimage2');
    $('body').removeClass('leftbgimage4');
    $('body').removeClass('leftbgimage5');
    $('body').removeClass('leftbgimage6');
    $('body').removeClass('leftbgimage7');
    $('body').removeClass('leftbgimage8');
    $('body').removeClass('leftbgimage9');
    $('body').removeClass('leftbgimage10');
    $('body').addClass('leftbgimage3');
    return false;
  });
  $('#leftmenuimage4').on('click', function () {
    $('body').removeClass('leftbgimage1');
    $('body').removeClass('leftbgimage2');
    $('body').removeClass('leftbgimage3');
    $('body').removeClass('leftbgimage5');
    $('body').removeClass('leftbgimage6');
    $('body').removeClass('leftbgimage7');
    $('body').removeClass('leftbgimage8');
    $('body').removeClass('leftbgimage9');
    $('body').removeClass('leftbgimage10');
    $('body').addClass('leftbgimage4');
    return false;
  });
  $('#leftmenuimage5').on('click', function () {
    $('body').removeClass('leftbgimage1');
    $('body').removeClass('leftbgimage2');
    $('body').removeClass('leftbgimage3');
    $('body').removeClass('leftbgimage4');
    $('body').removeClass('leftbgimage6');
    $('body').removeClass('leftbgimage7');
    $('body').removeClass('leftbgimage8');
    $('body').removeClass('leftbgimage9');
    $('body').removeClass('leftbgimage10');
    $('body').addClass('leftbgimage5');
    return false;
  });
  $('#leftmenuimage6').on('click', function () {
    $('body').removeClass('leftbgimage1');
    $('body').removeClass('leftbgimage2');
    $('body').removeClass('leftbgimage3');
    $('body').removeClass('leftbgimage4');
    $('body').removeClass('leftbgimage5');
    $('body').removeClass('leftbgimage7');
    $('body').removeClass('leftbgimage8');
    $('body').removeClass('leftbgimage9');
    $('body').removeClass('leftbgimage10');
    $('body').addClass('leftbgimage6');
    return false;
  });
  $('#leftmenuimage7').on('click', function () {
    $('body').removeClass('leftbgimage1');
    $('body').removeClass('leftbgimage2');
    $('body').removeClass('leftbgimage3');
    $('body').removeClass('leftbgimage4');
    $('body').removeClass('leftbgimage5');
    $('body').removeClass('leftbgimage6');
    $('body').removeClass('leftbgimage8');
    $('body').removeClass('leftbgimage9');
    $('body').removeClass('leftbgimage10');
    $('body').addClass('leftbgimage7');
    return false;
  });
  $('#leftmenuimage8').on('click', function () {
    $('body').removeClass('leftbgimage1');
    $('body').removeClass('leftbgimage2');
    $('body').removeClass('leftbgimage3');
    $('body').removeClass('leftbgimage4');
    $('body').removeClass('leftbgimage5');
    $('body').removeClass('leftbgimage6');
    $('body').removeClass('leftbgimage7');
    $('body').removeClass('leftbgimage9');
    $('body').removeClass('leftbgimage10');
    $('body').addClass('leftbgimage8');
    return false;
  });
  $('#leftmenuimage9').on('click', function () {
    $('body').removeClass('leftbgimage1');
    $('body').removeClass('leftbgimage2');
    $('body').removeClass('leftbgimage3');
    $('body').removeClass('leftbgimage4');
    $('body').removeClass('leftbgimage5');
    $('body').removeClass('leftbgimage6');
    $('body').removeClass('leftbgimage7');
    $('body').removeClass('leftbgimage8');
    $('body').removeClass('leftbgimage10');
    $('body').addClass('leftbgimage9');
    return false;
  });
  $('#leftmenuimage10').on('click', function () {
    $('body').removeClass('leftbgimage1');
    $('body').removeClass('leftbgimage2');
    $('body').removeClass('leftbgimage3');
    $('body').removeClass('leftbgimage4');
    $('body').removeClass('leftbgimage5');
    $('body').removeClass('leftbgimage6');
    $('body').removeClass('leftbgimage7');
    $('body').removeClass('leftbgimage8');
    $('body').removeClass('leftbgimage9');
    $('body').addClass('leftbgimage10');
    return false;
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/assets/valex/assets/js/eva-icons.min.js":
/*!***********************************************************!*\
  !*** ./resources/assets/valex/assets/js/eva-icons.min.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (a, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}("undefined" != typeof self ? self : this, function () {
  return function (e) {
    var h = {};

    function r(a) {
      if (h[a]) return h[a].exports;
      var t = h[a] = {
        i: a,
        l: !1,
        exports: {}
      };
      return e[a].call(t.exports, t, t.exports, r), t.l = !0, t.exports;
    }

    return r.m = e, r.c = h, r.d = function (a, t, e) {
      r.o(a, t) || Object.defineProperty(a, t, {
        enumerable: !0,
        get: e
      });
    }, r.r = function (a) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(a, "__esModule", {
        value: !0
      });
    }, r.t = function (t, a) {
      if (1 & a && (t = r(t)), 8 & a) return t;
      if (4 & a && "object" == _typeof(t) && t && t.__esModule) return t;
      var e = Object.create(null);
      if (r.r(e), Object.defineProperty(e, "default", {
        enumerable: !0,
        value: t
      }), 2 & a && "string" != typeof t) for (var h in t) {
        r.d(e, h, function (a) {
          return t[a];
        }.bind(null, h));
      }
      return e;
    }, r.n = function (a) {
      var t = a && a.__esModule ? function () {
        return a["default"];
      } : function () {
        return a;
      };
      return r.d(t, "a", t), t;
    }, r.o = function (a, t) {
      return Object.prototype.hasOwnProperty.call(a, t);
    }, r.p = "", r(r.s = "./package/src/index.js");
  }({
    "./node_modules/classnames/dedupe.js":
    /*!*******************************************!*\
      !*** ./node_modules/classnames/dedupe.js ***!
      \*******************************************/

    /*! no static exports found */
    function node_modulesClassnamesDedupeJs(t, e, a) {
      var h;
      /*!
        Copyright (c) 2017 Jed Watson.
        Licensed under the MIT License (MIT), see
        http://jedwatson.github.io/classnames
      */

      /*!
        Copyright (c) 2017 Jed Watson.
        Licensed under the MIT License (MIT), see
        http://jedwatson.github.io/classnames
      */

      !function () {
        "use strict";

        var a = function () {
          function g() {}

          function i(a, t) {
            for (var e = t.length, h = 0; h < e; ++h) {
              r(a, t[h]);
            }
          }

          g.prototype = Object.create(null);
          var h = {}.hasOwnProperty;
          var d = /\s+/;

          function r(a, t) {
            if (t) {
              var e = _typeof(t);

              "string" === e ? function (a, t) {
                for (var e = t.split(d), h = e.length, r = 0; r < h; ++r) {
                  a[e[r]] = !0;
                }
              }(a, t) : Array.isArray(t) ? i(a, t) : "object" === e ? function (a, t) {
                for (var e in t) {
                  h.call(t, e) && (a[e] = !!t[e]);
                }
              }(a, t) : "number" === e && (a[t] = !0);
            }
          }

          return function () {
            for (var a = arguments.length, t = Array(a), e = 0; e < a; e++) {
              t[e] = arguments[e];
            }

            var h = new g();
            i(h, t);
            var r = [];

            for (var d in h) {
              h[d] && r.push(d);
            }

            return r.join(" ");
          };
        }();

        void 0 !== t && t.exports ? (a["default"] = a, t.exports = a) : void 0 === (h = function () {
          return a;
        }.apply(e, [])) || (t.exports = h);
      }();
    },
    "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./package/src/animation.scss":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./package/src/animation.scss ***!
      \*******************************************************************************************************/

    /*! no static exports found */
    function node_modulesCssLoaderIndexJsNode_modulesSassLoaderLibLoaderJsPackageSrcAnimationScss(a, t, e) {
      (a.exports = e(
      /*! ../../node_modules/css-loader/lib/css-base.js */
      "./node_modules/css-loader/lib/css-base.js")(!1)).push([a.i, "/**\r\n * @license\r\n * Copyright Akveo. All Rights Reserved.\r\n * Licensed under the MIT License. See License.txt in the project root for license information.\r\n */\n.eva-animation {\n  animation-duration: 1s;\n  animation-fill-mode: both; }\n\n.eva-infinite {\n  animation-iteration-count: infinite; }\n\n.eva-icon-shake {\n  animation-name: eva-shake; }\n\n.eva-icon-zoom {\n  animation-name: eva-zoomIn; }\n\n.eva-icon-pulse {\n  animation-name: eva-pulse; }\n\n.eva-icon-flip {\n  animation-name: eva-flipInY; }\n\n.eva-hover {\n  display: inline-block; }\n\n.eva-hover:hover .eva-icon-hover-shake, .eva-parent-hover:hover .eva-icon-hover-shake {\n  animation-name: eva-shake; }\n\n.eva-hover:hover .eva-icon-hover-zoom, .eva-parent-hover:hover .eva-icon-hover-zoom {\n  animation-name: eva-zoomIn; }\n\n.eva-hover:hover .eva-icon-hover-pulse, .eva-parent-hover:hover .eva-icon-hover-pulse {\n  animation-name: eva-pulse; }\n\n.eva-hover:hover .eva-icon-hover-flip, .eva-parent-hover:hover .eva-icon-hover-flip {\n  animation-name: eva-flipInY; }\n\n@keyframes eva-flipInY {\n  from {\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    animation-timing-function: ease-in;\n    opacity: 0; }\n  40% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    animation-timing-function: ease-in; }\n  60% {\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1; }\n  80% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg); }\n  to {\n    transform: perspective(400px); } }\n\n@keyframes eva-shake {\n  from,\n  to {\n    transform: translate3d(0, 0, 0); }\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translate3d(-3px, 0, 0); }\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translate3d(3px, 0, 0); } }\n\n@keyframes eva-pulse {\n  from {\n    transform: scale3d(1, 1, 1); }\n  50% {\n    transform: scale3d(1.2, 1.2, 1.2); }\n  to {\n    transform: scale3d(1, 1, 1); } }\n\n@keyframes eva-zoomIn {\n  from {\n    opacity: 1;\n    transform: scale3d(0.5, 0.5, 0.5); }\n  50% {\n    opacity: 1; } }\n", ""]);
    },
    "./node_modules/css-loader/lib/css-base.js":
    /*!*************************************************!*\
      !*** ./node_modules/css-loader/lib/css-base.js ***!
      \*************************************************/

    /*! no static exports found */
    function node_modulesCssLoaderLibCssBaseJs(a, t) {
      a.exports = function (e) {
        var g = [];
        return g.toString = function () {
          return this.map(function (a) {
            var t = function (a, t) {
              var e = a[1] || "",
                  h = a[3];
              if (!h) return e;

              if (t && "function" == typeof btoa) {
                var r = (g = h, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(g)))) + " */"),
                    d = h.sources.map(function (a) {
                  return "/*# sourceURL=" + h.sourceRoot + a + " */";
                });
                return [e].concat(d).concat([r]).join("\n");
              }

              var g;
              return [e].join("\n");
            }(a, e);

            return a[2] ? "@media " + a[2] + "{" + t + "}" : t;
          }).join("");
        }, g.i = function (a, t) {
          "string" == typeof a && (a = [[null, a, ""]]);

          for (var e = {}, h = 0; h < this.length; h++) {
            var r = this[h][0];
            "number" == typeof r && (e[r] = !0);
          }

          for (h = 0; h < a.length; h++) {
            var d = a[h];
            "number" == typeof d[0] && e[d[0]] || (t && !d[2] ? d[2] = t : t && (d[2] = "(" + d[2] + ") and (" + t + ")"), g.push(d));
          }
        }, g;
      };
    },
    "./node_modules/isomorphic-style-loader/insertCss.js":
    /*!***********************************************************!*\
      !*** ./node_modules/isomorphic-style-loader/insertCss.js ***!
      \***********************************************************/

    /*! no static exports found */
    function node_modulesIsomorphicStyleLoaderInsertCssJs(a, t, e) {
      "use strict";
      /*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */

      var A = {};

      a.exports = function (a, t) {
        for (var e, h = void 0 === t ? {} : t, r = h.replace, d = void 0 !== r && r, g = h.prepend, i = void 0 !== g && g, n = h.prefix, o = void 0 === n ? "s" : n, l = [], c = 0; c < a.length; c++) {
          var p = a[c],
              m = p[0],
              y = p[1],
              z = p[2],
              M = p[3],
              v = "" + o + m + "-" + c;

          if (l.push(v), !A[v] || d) {
            A[v] = 1;
            var L = document.getElementById(v),
                s = !1;
            L || (s = !0, (L = document.createElement("style")).setAttribute("type", "text/css"), L.id = v, z && L.setAttribute("media", z));
            var w = y;
            M && "function" == typeof btoa && (w += "\n/*# sourceMappingURL=data:application/json;base64," + (e = JSON.stringify(M), btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function (a, t) {
              return String.fromCharCode("0x" + t);
            }))) + "*/", w += "\n/*# sourceURL=" + M.file + "?" + v + "*/"), "textContent" in L ? L.textContent = w : L.styleSheet.cssText = w, s && (i ? document.head.insertBefore(L, document.head.childNodes[0]) : document.head.appendChild(L));
          } else A[v]++;
        }

        return function (a) {
          a.forEach(function (a) {
            if (--A[a] <= 0) {
              var t = document.getElementById(a);
              t && t.parentNode.removeChild(t);
            }
          });
        }.bind(null, l);
      };
    },
    "./package-build/eva-icons.json":
    /*!**************************************!*\
      !*** ./package-build/eva-icons.json ***!
      \**************************************/

    /*! exports provided: activity, alert-circle, alert-triangle, archive, arrow-back, arrow-circle-down, arrow-circle-left, arrow-circle-right, arrow-circle-up, arrow-down, arrow-downward, arrow-forward, arrow-ios-back, arrow-ios-downward, arrow-ios-forward, arrow-ios-upward, arrow-left, arrow-right, arrow-up, arrow-upward, arrowhead-down, arrowhead-left, arrowhead-right, arrowhead-up, at, attach-2, attach, award, backspace, bar-chart-2, bar-chart, battery, behance, bell-off, bell, bluetooth, book-open, book, bookmark, briefcase, browser, brush, bulb, calendar, camera, car, cast, charging, checkmark-circle-2, checkmark-circle, checkmark-square-2, checkmark-square, checkmark, chevron-down, chevron-left, chevron-right, chevron-up, clipboard, clock, close-circle, close-square, close, cloud-download, cloud-upload, code-download, code, collapse, color-palette, color-picker, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, credit-card, crop, cube, diagonal-arrow-left-down, diagonal-arrow-left-up, diagonal-arrow-right-down, diagonal-arrow-right-up, done-all, download, droplet-off, droplet, edit-2, edit, email, expand, external-link, eye-off-2, eye-off, eye, facebook, file-add, file-remove, file-text, file, film, flag, flash-off, flash, flip-2, flip, folder-add, folder-remove, folder, funnel, gift, github, globe-2, globe-3, globe, google, grid, hard-drive, hash, headphones, heart, home, image-2, image, inbox, info, keypad, layers, layout, link-2, link, linkedin, list, lock, log-in, log-out, map, maximize, menu-2, menu-arrow, menu, message-circle, message-square, mic-off, mic, minimize, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, npm, options-2, options, pantone, paper-plane, pause-circle, people, percent, person-add, person-delete, person-done, person-remove, person, phone-call, phone-missed, phone-off, phone, pie-chart-2, pie-chart, pin, play-circle, plus-circle, plus-square, plus, power, pricetags, printer, question-mark-circle, question-mark, radio-button-off, radio-button-on, radio, recording, refresh, repeat, rewind-left, rewind-right, save, scissors, search, settings-2, settings, shake, share, shield-off, shield, shopping-bag, shopping-cart, shuffle-2, shuffle, skip-back, skip-forward, slash, smartphone, speaker, square, star, stop-circle, sun, swap, sync, text, thermometer-minus, thermometer-plus, thermometer, toggle-left, toggle-right, trash-2, trash, trending-down, trending-up, tv, twitter, umbrella, undo, unlock, upload, video-off, video, volume-down, volume-mute, volume-off, volume-up, wifi-off, wifi, activity-outline, alert-circle-outline, alert-triangle-outline, archive-outline, arrow-back-outline, arrow-circle-down-outline, arrow-circle-left-outline, arrow-circle-right-outline, arrow-circle-up-outline, arrow-down-outline, arrow-downward-outline, arrow-forward-outline, arrow-ios-back-outline, arrow-ios-downward-outline, arrow-ios-forward-outline, arrow-ios-upward-outline, arrow-left-outline, arrow-right-outline, arrow-up-outline, arrow-upward-outline, arrowhead-down-outline, arrowhead-left-outline, arrowhead-right-outline, arrowhead-up-outline, at-outline, attach-2-outline, attach-outline, award-outline, backspace-outline, bar-chart-2-outline, bar-chart-outline, battery-outline, behance-outline, bell-off-outline, bell-outline, bluetooth-outline, book-open-outline, book-outline, bookmark-outline, briefcase-outline, browser-outline, brush-outline, bulb-outline, calendar-outline, camera-outline, car-outline, cast-outline, charging-outline, checkmark-circle-2-outline, checkmark-circle-outline, checkmark-outline, checkmark-square-2-outline, checkmark-square-outline, chevron-down-outline, chevron-left-outline, chevron-right-outline, chevron-up-outline, clipboard-outline, clock-outline, close-circle-outline, close-outline, close-square-outline, cloud-download-outline, cloud-upload-outline, code-download-outline, code-outline, collapse-outline, color-palette-outline, color-picker-outline, compass-outline, copy-outline, corner-down-left-outline, corner-down-right-outline, corner-left-down-outline, corner-left-up-outline, corner-right-down-outline, corner-right-up-outline, corner-up-left-outline, corner-up-right-outline, credit-card-outline, crop-outline, cube-outline, diagonal-arrow-left-down-outline, diagonal-arrow-left-up-outline, diagonal-arrow-right-down-outline, diagonal-arrow-right-up-outline, done-all-outline, download-outline, droplet-off-outline, droplet-outline, edit-2-outline, edit-outline, email-outline, expand-outline, external-link-outline, eye-off-2-outline, eye-off-outline, eye-outline, facebook-outline, file-add-outline, file-outline, file-remove-outline, file-text-outline, film-outline, flag-outline, flash-off-outline, flash-outline, flip-2-outline, flip-outline, folder-add-outline, folder-outline, folder-remove-outline, funnel-outline, gift-outline, github-outline, globe-2-outline, globe-outline, google-outline, grid-outline, hard-drive-outline, hash-outline, headphones-outline, heart-outline, home-outline, image-outline, inbox-outline, info-outline, keypad-outline, layers-outline, layout-outline, link-2-outline, link-outline, linkedin-outline, list-outline, loader-outline, lock-outline, log-in-outline, log-out-outline, map-outline, maximize-outline, menu-2-outline, menu-arrow-outline, menu-outline, message-circle-outline, message-square-outline, mic-off-outline, mic-outline, minimize-outline, minus-circle-outline, minus-outline, minus-square-outline, monitor-outline, moon-outline, more-horizontal-outline, more-vertical-outline, move-outline, music-outline, navigation-2-outline, navigation-outline, npm-outline, options-2-outline, options-outline, pantone-outline, paper-plane-outline, pause-circle-outline, people-outline, percent-outline, person-add-outline, person-delete-outline, person-done-outline, person-outline, person-remove-outline, phone-call-outline, phone-missed-outline, phone-off-outline, phone-outline, pie-chart-outline, pin-outline, play-circle-outline, plus-circle-outline, plus-outline, plus-square-outline, power-outline, pricetags-outline, printer-outline, question-mark-circle-outline, question-mark-outline, radio-button-off-outline, radio-button-on-outline, radio-outline, recording-outline, refresh-outline, repeat-outline, rewind-left-outline, rewind-right-outline, save-outline, scissors-outline, search-outline, settings-2-outline, settings-outline, shake-outline, share-outline, shield-off-outline, shield-outline, shopping-bag-outline, shopping-cart-outline, shuffle-2-outline, shuffle-outline, skip-back-outline, skip-forward-outline, slash-outline, smartphone-outline, speaker-outline, square-outline, star-outline, stop-circle-outline, sun-outline, swap-outline, sync-outline, text-outline, thermometer-minus-outline, thermometer-outline, thermometer-plus-outline, toggle-left-outline, toggle-right-outline, trash-2-outline, trash-outline, trending-down-outline, trending-up-outline, tv-outline, twitter-outline, umbrella-outline, undo-outline, unlock-outline, upload-outline, video-off-outline, video-outline, volume-down-outline, volume-mute-outline, volume-off-outline, volume-up-outline, wifi-off-outline, wifi-outline, default */
    function packageBuildEvaIconsJson(a) {
      a.exports = {
        activity: '<g data-name="Layer 2"><g data-name="activity"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M14.33 20h-.21a2 2 0 0 1-1.76-1.58L9.68 6l-2.76 6.4A1 1 0 0 1 6 13H3a1 1 0 0 1 0-2h2.34l2.51-5.79a2 2 0 0 1 3.79.38L14.32 18l2.76-6.38A1 1 0 0 1 18 11h3a1 1 0 0 1 0 2h-2.34l-2.51 5.79A2 2 0 0 1 14.33 20z"/></g></g>',
        "alert-circle": '<g data-name="Layer 2"><g data-name="alert-circle"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 15a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm1-4a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0z"/></g></g>',
        "alert-triangle": '<g data-name="Layer 2"><g data-name="alert-triangle"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M22.56 16.3L14.89 3.58a3.43 3.43 0 0 0-5.78 0L1.44 16.3a3 3 0 0 0-.05 3A3.37 3.37 0 0 0 4.33 21h15.34a3.37 3.37 0 0 0 2.94-1.66 3 3 0 0 0-.05-3.04zM12 17a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm1-4a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0z"/></g></g>',
        archive: '<g data-name="Layer 2"><g data-name="archive"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M18 3H6a3 3 0 0 0-2 5.22V18a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.22A3 3 0 0 0 18 3zm-3 10.13a.87.87 0 0 1-.87.87H9.87a.87.87 0 0 1-.87-.87v-.26a.87.87 0 0 1 .87-.87h4.26a.87.87 0 0 1 .87.87zM18 7H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z"/></g></g>',
        "arrow-back": '<g data-name="Layer 2"><g data-name="arrow-back"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z"/></g></g>',
        "arrow-circle-down": '<g data-name="Layer 2"><g data-name="arrow-circle-down"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3.69 11.86l-3 2.86a.49.49 0 0 1-.15.1.54.54 0 0 1-.16.1.94.94 0 0 1-.76 0 1 1 0 0 1-.33-.21l-3-3a1 1 0 0 1 1.42-1.42l1.29 1.3V8a1 1 0 0 1 2 0v5.66l1.31-1.25a1 1 0 0 1 1.38 1.45z"/></g></g>',
        "arrow-circle-left": '<g data-name="Layer 2"><g data-name="arrow-circle-left"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M22 12a10 10 0 1 0-10 10 10 10 0 0 0 10-10zm-11.86 3.69l-2.86-3a.49.49 0 0 1-.1-.15.54.54 0 0 1-.1-.16.94.94 0 0 1 0-.76 1 1 0 0 1 .21-.33l3-3a1 1 0 0 1 1.42 1.42L10.41 11H16a1 1 0 0 1 0 2h-5.66l1.25 1.31a1 1 0 0 1-1.45 1.38z"/></g></g>',
        "arrow-circle-right": '<g data-name="Layer 2"><g data-name="arrow-circle-right"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M2 12A10 10 0 1 0 12 2 10 10 0 0 0 2 12zm11.86-3.69l2.86 3a.49.49 0 0 1 .1.15.54.54 0 0 1 .1.16.94.94 0 0 1 0 .76 1 1 0 0 1-.21.33l-3 3a1 1 0 0 1-1.42-1.42l1.3-1.29H8a1 1 0 0 1 0-2h5.66l-1.25-1.31a1 1 0 0 1 1.45-1.38z"/></g></g>',
        "arrow-circle-up": '<g data-name="Layer 2"><g data-name="arrow-circle-up"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M12 22A10 10 0 1 0 2 12a10 10 0 0 0 10 10zM8.31 10.14l3-2.86a.49.49 0 0 1 .15-.1.54.54 0 0 1 .16-.1.94.94 0 0 1 .76 0 1 1 0 0 1 .33.21l3 3a1 1 0 0 1-1.42 1.42L13 10.41V16a1 1 0 0 1-2 0v-5.66l-1.31 1.25a1 1 0 0 1-1.38-1.45z"/></g></g>',
        "arrow-down": '<g data-name="Layer 2"><g data-name="arrow-downward"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05 2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17z"/></g></g>',
        "arrow-downward": '<g data-name="Layer 2"><g data-name="arrow-down"><rect width="24" height="24" opacity="0"/><path d="M18.77 13.36a1 1 0 0 0-1.41-.13L13 16.86V5a1 1 0 0 0-2 0v11.86l-4.36-3.63a1 1 0 1 0-1.28 1.54l6 5 .15.09.13.07a1 1 0 0 0 .72 0l.13-.07.15-.09 6-5a1 1 0 0 0 .13-1.41z"/></g></g>',
        "arrow-forward": '<g data-name="Layer 2"><g data-name="arrow-forward"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M5 13h11.86l-3.63 4.36a1 1 0 0 0 1.54 1.28l5-6a1.19 1.19 0 0 0 .09-.15c0-.05.05-.08.07-.13A1 1 0 0 0 20 12a1 1 0 0 0-.07-.36c0-.05-.05-.08-.07-.13a1.19 1.19 0 0 0-.09-.15l-5-6A1 1 0 0 0 14 5a1 1 0 0 0-.64.23 1 1 0 0 0-.13 1.41L16.86 11H5a1 1 0 0 0 0 2z"/></g></g>',
        "arrow-ios-back": '<g data-name="Layer 2"><g data-name="arrow-ios-back"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"/></g></g>',
        "arrow-ios-downward": '<g data-name="Layer 2"><g data-name="arrow-ios-downward"><rect width="24" height="24" opacity="0"/><path d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16z"/></g></g>',
        "arrow-ios-forward": '<g data-name="Layer 2"><g data-name="arrow-ios-forward"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z"/></g></g>',
        "arrow-ios-upward": '<g data-name="Layer 2"><g data-name="arrow-ios-upward"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M18 15a1 1 0 0 1-.64-.23L12 10.29l-5.37 4.32a1 1 0 0 1-1.41-.15 1 1 0 0 1 .15-1.41l6-4.83a1 1 0 0 1 1.27 0l6 5a1 1 0 0 1 .13 1.41A1 1 0 0 1 18 15z"/></g></g>',
        "arrow-left": '<g data-name="Layer 2"><g data-name="arrow-left"><rect width="24" height="24" opacity="0"/><path d="M13.54 18a2.06 2.06 0 0 1-1.3-.46l-5.1-4.21a1.7 1.7 0 0 1 0-2.66l5.1-4.21a2.1 2.1 0 0 1 2.21-.26 1.76 1.76 0 0 1 1.05 1.59v8.42a1.76 1.76 0 0 1-1.05 1.59 2.23 2.23 0 0 1-.91.2z"/></g></g>',
        "arrow-right": '<g data-name="Layer 2"><g data-name="arrow-right"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M10.46 18a2.23 2.23 0 0 1-.91-.2 1.76 1.76 0 0 1-1.05-1.59V7.79A1.76 1.76 0 0 1 9.55 6.2a2.1 2.1 0 0 1 2.21.26l5.1 4.21a1.7 1.7 0 0 1 0 2.66l-5.1 4.21a2.06 2.06 0 0 1-1.3.46z"/></g></g>',
        "arrow-up": '<g data-name="Layer 2"><g data-name="arrow-up"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M16.21 16H7.79a1.76 1.76 0 0 1-1.59-1 2.1 2.1 0 0 1 .26-2.21l4.21-5.1a1.76 1.76 0 0 1 2.66 0l4.21 5.1A2.1 2.1 0 0 1 17.8 15a1.76 1.76 0 0 1-1.59 1z"/></g></g>',
        "arrow-upward": '<g data-name="Layer 2"><g data-name="arrow-upward"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M5.23 10.64a1 1 0 0 0 1.41.13L11 7.14V19a1 1 0 0 0 2 0V7.14l4.36 3.63a1 1 0 1 0 1.28-1.54l-6-5-.15-.09-.13-.07a1 1 0 0 0-.72 0l-.13.07-.15.09-6 5a1 1 0 0 0-.13 1.41z"/></g></g>',
        "arrowhead-down": '<g data-name="Layer 2"><g data-name="arrowhead-down"><rect width="24" height="24" opacity="0"/><path d="M17.37 12.39L12 16.71l-5.36-4.48a1 1 0 1 0-1.28 1.54l6 5a1 1 0 0 0 1.27 0l6-4.83a1 1 0 0 0 .15-1.41 1 1 0 0 0-1.41-.14z"/><path d="M11.36 11.77a1 1 0 0 0 1.27 0l6-4.83a1 1 0 0 0 .15-1.41 1 1 0 0 0-1.41-.15L12 9.71 6.64 5.23a1 1 0 0 0-1.28 1.54z"/></g></g>',
        "arrowhead-left": '<g data-name="Layer 2"><g data-name="arrowhead-left"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M11.64 5.23a1 1 0 0 0-1.41.13l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37 1 1 0 0 0 .78-1.63L7.29 12l4.48-5.37a1 1 0 0 0-.13-1.4z"/><path d="M14.29 12l4.48-5.37a1 1 0 0 0-1.54-1.28l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37 1 1 0 0 0 .78-1.63z"/></g></g>',
        "arrowhead-right": '<g data-name="Layer 2"><g data-name="arrowhead-right"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M18.78 11.37l-4.78-6a1 1 0 0 0-1.41-.15 1 1 0 0 0-.15 1.41L16.71 12l-4.48 5.37a1 1 0 0 0 .13 1.41A1 1 0 0 0 13 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 .01-1.27z"/><path d="M7 5.37a1 1 0 0 0-1.61 1.26L9.71 12l-4.48 5.36a1 1 0 0 0 .13 1.41A1 1 0 0 0 6 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 0-1.27z"/></g></g>',
        "arrowhead-up": '<g data-name="Layer 2"><g data-name="arrowhead-up"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M6.63 11.61L12 7.29l5.37 4.48A1 1 0 0 0 18 12a1 1 0 0 0 .77-.36 1 1 0 0 0-.13-1.41l-6-5a1 1 0 0 0-1.27 0l-6 4.83a1 1 0 0 0-.15 1.41 1 1 0 0 0 1.41.14z"/><path d="M12.64 12.23a1 1 0 0 0-1.27 0l-6 4.83a1 1 0 0 0-.15 1.41 1 1 0 0 0 1.41.15L12 14.29l5.37 4.48A1 1 0 0 0 18 19a1 1 0 0 0 .77-.36 1 1 0 0 0-.13-1.41z"/></g></g>',
        at: '<g data-name="Layer 2"><g data-name="at"><rect width="24" height="24" opacity="0"/><path d="M13 2a10 10 0 0 0-5 19.1 10.15 10.15 0 0 0 4 .9 10 10 0 0 0 6.08-2.06 1 1 0 0 0 .19-1.4 1 1 0 0 0-1.41-.19A8 8 0 1 1 12.77 4 8.17 8.17 0 0 1 20 12.22v.68a1.71 1.71 0 0 1-1.78 1.7 1.82 1.82 0 0 1-1.62-1.88V8.4a1 1 0 0 0-1-1 1 1 0 0 0-1 .87 5 5 0 0 0-3.44-1.36A5.09 5.09 0 1 0 15.31 15a3.6 3.6 0 0 0 5.55.61A3.67 3.67 0 0 0 22 12.9v-.68A10.2 10.2 0 0 0 13 2zm-1.82 13.09A3.09 3.09 0 1 1 14.27 12a3.1 3.1 0 0 1-3.09 3.09z"/></g></g>',
        "attach-2": '<g data-name="Layer 2"><g data-name="attach-2"><rect width="24" height="24" opacity="0"/><path d="M12 22a5.86 5.86 0 0 1-6-5.7V6.13A4.24 4.24 0 0 1 10.33 2a4.24 4.24 0 0 1 4.34 4.13v10.18a2.67 2.67 0 0 1-5.33 0V6.92a1 1 0 0 1 1-1 1 1 0 0 1 1 1v9.39a.67.67 0 0 0 1.33 0V6.13A2.25 2.25 0 0 0 10.33 4 2.25 2.25 0 0 0 8 6.13V16.3a3.86 3.86 0 0 0 4 3.7 3.86 3.86 0 0 0 4-3.7V6.13a1 1 0 1 1 2 0V16.3a5.86 5.86 0 0 1-6 5.7z"/></g></g>',
        attach: '<g data-name="Layer 2"><g data-name="attach"><rect width="24" height="24" opacity="0"/><path d="M9.29 21a6.23 6.23 0 0 1-4.43-1.88 6 6 0 0 1-.22-8.49L12 3.2A4.11 4.11 0 0 1 15 2a4.48 4.48 0 0 1 3.19 1.35 4.36 4.36 0 0 1 .15 6.13l-7.4 7.43a2.54 2.54 0 0 1-1.81.75 2.72 2.72 0 0 1-1.95-.82 2.68 2.68 0 0 1-.08-3.77l6.83-6.86a1 1 0 0 1 1.37 1.41l-6.83 6.86a.68.68 0 0 0 .08.95.78.78 0 0 0 .53.23.56.56 0 0 0 .4-.16l7.39-7.43a2.36 2.36 0 0 0-.15-3.31 2.38 2.38 0 0 0-3.27-.15L6.06 12a4 4 0 0 0 .22 5.67 4.22 4.22 0 0 0 3 1.29 3.67 3.67 0 0 0 2.61-1.06l7.39-7.43a1 1 0 1 1 1.42 1.41l-7.39 7.43A5.65 5.65 0 0 1 9.29 21z"/></g></g>',
        award: '<g data-name="Layer 2"><g data-name="award"><rect width="24" height="24" opacity="0"/><path d="M19 20.75l-2.31-9A5.94 5.94 0 0 0 18 8 6 6 0 0 0 6 8a5.94 5.94 0 0 0 1.34 3.77L5 20.75a1 1 0 0 0 1.48 1.11l5.33-3.13 5.68 3.14A.91.91 0 0 0 18 22a1 1 0 0 0 1-1.25zM12 4a4 4 0 1 1-4 4 4 4 0 0 1 4-4z"/></g></g>',
        backspace: '<g data-name="Layer 2"><g data-name="backspace"><rect width="24" height="24" opacity="0"/><path d="M20.14 4h-9.77a3 3 0 0 0-2 .78l-.1.11-6 7.48a1 1 0 0 0 .11 1.37l6 5.48a3 3 0 0 0 2 .78h9.77A1.84 1.84 0 0 0 22 18.18V5.82A1.84 1.84 0 0 0 20.14 4zm-3.43 9.29a1 1 0 0 1 0 1.42 1 1 0 0 1-1.42 0L14 13.41l-1.29 1.3a1 1 0 0 1-1.42 0 1 1 0 0 1 0-1.42l1.3-1.29-1.3-1.29a1 1 0 0 1 1.42-1.42l1.29 1.3 1.29-1.3a1 1 0 0 1 1.42 1.42L15.41 12z"/></g></g>',
        "bar-chart-2": '<g data-name="Layer 2"><g data-name="bar-chart-2"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M12 8a1 1 0 0 0-1 1v11a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z"/><path d="M19 4a1 1 0 0 0-1 1v15a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1z"/><path d="M5 12a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1z"/></g></g>',
        "bar-chart": '<g data-name="Layer 2"><g data-name="bar-chart"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M12 4a1 1 0 0 0-1 1v15a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1z"/><path d="M19 12a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1z"/><path d="M5 8a1 1 0 0 0-1 1v11a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z"/></g></g>',
        battery: '<g data-name="Layer 2"><g data-name="battery"><rect width="24" height="24" opacity="0"/><path d="M15.83 6H4.17A2.31 2.31 0 0 0 2 8.43v7.14A2.31 2.31 0 0 0 4.17 18h11.66A2.31 2.31 0 0 0 18 15.57V8.43A2.31 2.31 0 0 0 15.83 6z"/><path d="M21 9a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1z"/></g></g>',
        behance: '<g data-name="Layer 2"><g data-name="behance"><rect width="24" height="24" opacity="0"/><path d="M14.76 11.19a1 1 0 0 0-1 1.09h2.06a1 1 0 0 0-1.06-1.09z"/><path d="M9.49 12.3H8.26v1.94h1c1 0 1.44-.33 1.44-1s-.46-.94-1.21-.94z"/><path d="M10.36 10.52c0-.53-.35-.85-.95-.85H8.26v1.74h.85c.89 0 1.25-.32 1.25-.89z"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zM9.7 15.2H7V8.7h2.7c1.17 0 1.94.61 1.94 1.6a1.4 1.4 0 0 1-1.12 1.43A1.52 1.52 0 0 1 12 13.37c0 1.16-1 1.83-2.3 1.83zm3.55-6h3v.5h-3zM17 13.05h-3.3v.14a1.07 1.07 0 0 0 1.09 1.19.9.9 0 0 0 1-.63H17a2 2 0 0 1-2.17 1.55 2.15 2.15 0 0 1-2.36-2.3v-.44a2.11 2.11 0 0 1 2.28-2.25A2.12 2.12 0 0 1 17 12.58z"/></g></g>',
        "bell-off": '<g data-name="Layer 2"><g data-name="bell-off"><rect width="24" height="24" opacity="0"/><path d="M15.88 18.71l-.59-.59L14 16.78l-.07-.07L6.58 9.4 5.31 8.14a5.68 5.68 0 0 0 0 .59v4.67l-1.8 1.81A1.64 1.64 0 0 0 4.64 18H8v.34A3.84 3.84 0 0 0 12 22a3.88 3.88 0 0 0 4-3.22zM14 18.34A1.88 1.88 0 0 1 12 20a1.88 1.88 0 0 1-2-1.66V18h4z"/><path d="M7.13 4.3l1.46 1.46 9.53 9.53 2 2 .31.3a1.58 1.58 0 0 0 .45-.6 1.62 1.62 0 0 0-.35-1.78l-1.8-1.81V8.94a6.86 6.86 0 0 0-5.83-6.88 6.71 6.71 0 0 0-5.32 1.61 6.88 6.88 0 0 0-.58.54z"/><path d="M20.71 19.29L19.41 18l-2-2-9.52-9.53L6.42 5 4.71 3.29a1 1 0 0 0-1.42 1.42L5.53 7l1.75 1.7 7.31 7.3.07.07L16 17.41l.59.59 2.7 2.71a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g>',
        bell: '<g data-name="Layer 2"><g data-name="bell"><rect width="24" height="24" opacity="0"/><path d="M20.52 15.21l-1.8-1.81V8.94a6.86 6.86 0 0 0-5.82-6.88 6.74 6.74 0 0 0-7.62 6.67v4.67l-1.8 1.81A1.64 1.64 0 0 0 4.64 18H8v.34A3.84 3.84 0 0 0 12 22a3.84 3.84 0 0 0 4-3.66V18h3.36a1.64 1.64 0 0 0 1.16-2.79zM14 18.34A1.88 1.88 0 0 1 12 20a1.88 1.88 0 0 1-2-1.66V18h4z"/></g></g>',
        bluetooth: '<g data-name="Layer 2"><g data-name="bluetooth"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M13.63 12l4-3.79a1.14 1.14 0 0 0-.13-1.77l-4.67-3.23a1.17 1.17 0 0 0-1.21-.08 1.15 1.15 0 0 0-.62 1v6.2l-3.19-4a1 1 0 0 0-1.56 1.3L9.72 12l-3.5 4.43a1 1 0 0 0 .16 1.4A1 1 0 0 0 7 18a1 1 0 0 0 .78-.38L11 13.56v6.29A1.16 1.16 0 0 0 12.16 21a1.16 1.16 0 0 0 .67-.21l4.64-3.18a1.17 1.17 0 0 0 .49-.85 1.15 1.15 0 0 0-.34-.91zM13 5.76l2.5 1.73L13 9.85zm0 12.49v-4.07l2.47 2.38z"/></g></g>',
        "book-open": '<g data-name="Layer 2"><g data-name="book-open"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M21 4.34a1.24 1.24 0 0 0-1.08-.23L13 5.89v14.27l7.56-1.94A1.25 1.25 0 0 0 21.5 17V5.32a1.25 1.25 0 0 0-.5-.98z"/><path d="M11 5.89L4.06 4.11A1.27 1.27 0 0 0 3 4.34a1.25 1.25 0 0 0-.48 1V17a1.25 1.25 0 0 0 .94 1.21L11 20.16z"/></g></g>',
        book: '<g data-name="Layer 2"><g data-name="book"><rect width="24" height="24" opacity="0"/><path d="M19 3H7a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM7 19a1 1 0 0 1 0-2h11v2z"/></g></g>',
        bookmark: '<g data-name="Layer 2"><g data-name="bookmark"><rect width="24" height="24" opacity="0"/><path d="M6 21a1 1 0 0 1-.49-.13A1 1 0 0 1 5 20V5.33A2.28 2.28 0 0 1 7.2 3h9.6A2.28 2.28 0 0 1 19 5.33V20a1 1 0 0 1-.5.86 1 1 0 0 1-1 0l-5.67-3.21-5.33 3.2A1 1 0 0 1 6 21z"/></g></g>',
        briefcase: '<g data-name="Layer 2"><g data-name="briefcase"><rect width="24" height="24" opacity="0"/><path d="M7 21h10V7h-1V5.5A2.5 2.5 0 0 0 13.5 3h-3A2.5 2.5 0 0 0 8 5.5V7H7zm3-15.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V7h-4z"/><path d="M19 7v14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3z"/><path d="M5 7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3z"/></g></g>',
        browser: '<g data-name="Layer 2"><g data-name="browser"><rect width="24" height="24" opacity="0"/><path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm-6 3a1 1 0 1 1-1 1 1 1 0 0 1 1-1zM8 6a1 1 0 1 1-1 1 1 1 0 0 1 1-1zm11 12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7h14z"/></g></g>',
        brush: '<g data-name="Layer 2"><g data-name="brush"><rect width="24" height="24" opacity="0"/><path d="M7.12 12.55a4 4 0 0 0-3.07 3.86v3.11a.47.47 0 0 0 .48.48l3.24-.06a3.78 3.78 0 0 0 3.44-2.2 3.65 3.65 0 0 0-4.09-5.19z"/><path d="M19.26 4.46a2.14 2.14 0 0 0-2.88.21L10 11.08a.47.47 0 0 0 0 .66L12.25 14a.47.47 0 0 0 .66 0l6.49-6.47a2.06 2.06 0 0 0 .6-1.47 2 2 0 0 0-.74-1.6z"/></g></g>',
        bulb: '<g data-name="Layer 2"><g data-name="bulb"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M12 7a5 5 0 0 0-3 9v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a5 5 0 0 0-3-9z"/><path d="M12 6a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1z"/><path d="M21 11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z"/><path d="M5 11H3a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z"/><path d="M7.66 6.42L6.22 5a1 1 0 0 0-1.39 1.47l1.44 1.39a1 1 0 0 0 .73.28 1 1 0 0 0 .72-.31 1 1 0 0 0-.06-1.41z"/><path d="M19.19 5.05a1 1 0 0 0-1.41 0l-1.44 1.37a1 1 0 0 0 0 1.41 1 1 0 0 0 .72.31 1 1 0 0 0 .69-.28l1.44-1.39a1 1 0 0 0 0-1.42z"/></g></g>',
        calendar: '<g data-name="Layer 2"><g data-name="calendar"><rect width="24" height="24" opacity="0"/><path d="M18 4h-1V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zM8 17a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm8 0h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zm3-6H5V7a1 1 0 0 1 1-1h1v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h1a1 1 0 0 1 1 1z"/></g></g>',
        camera: '<g data-name="Layer 2"><g data-name="camera"><rect width="24" height="24" opacity="0"/><circle cx="12" cy="14" r="1.5"/><path d="M19 7h-3V5.5A2.5 2.5 0 0 0 13.5 3h-3A2.5 2.5 0 0 0 8 5.5V7H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zm-9-1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V7h-4zm2 12a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5z"/></g></g>',
        car: '<g data-name="Layer 2"><g data-name="car"><rect width="24" height="24" opacity="0"/><path d="M21.6 11.22L17 7.52V5a1.91 1.91 0 0 0-1.81-2H3.79A1.91 1.91 0 0 0 2 5v10a2 2 0 0 0 1.2 1.88 3 3 0 1 0 5.6.12h6.36a3 3 0 1 0 5.64 0h.2a1 1 0 0 0 1-1v-4a1 1 0 0 0-.4-.78zM20 12.48V15h-3v-4.92zM7 18a1 1 0 1 1-1-1 1 1 0 0 1 1 1zm12 0a1 1 0 1 1-1-1 1 1 0 0 1 1 1z"/></g></g>',
        cast: '<g data-name="Layer 2"><g data-name="cast"><polyline points="24 24 0 24 0 0" opacity="0"/><path d="M18.4 3H5.6A2.7 2.7 0 0 0 3 5.78V7a1 1 0 0 0 2 0V5.78A.72.72 0 0 1 5.6 5h12.8a.72.72 0 0 1 .6.78v12.44a.72.72 0 0 1-.6.78H17a1 1 0 0 0 0 2h1.4a2.7 2.7 0 0 0 2.6-2.78V5.78A2.7 2.7 0 0 0 18.4 3z"/><path d="M3.86 14A1 1 0 0 0 3 15.17a1 1 0 0 0 1.14.83 2.49 2.49 0 0 1 2.12.72 2.52 2.52 0 0 1 .51 2.84 1 1 0 0 0 .48 1.33 1.06 1.06 0 0 0 .42.09 1 1 0 0 0 .91-.58A4.52 4.52 0 0 0 3.86 14z"/><path d="M3.86 10.08a1 1 0 0 0 .28 2 6 6 0 0 1 5.09 1.71 6 6 0 0 1 1.53 5.95 1 1 0 0 0 .68 1.26.9.9 0 0 0 .28 0 1 1 0 0 0 1-.72 8 8 0 0 0-8.82-10.2z"/><circle cx="4" cy="19" r="1"/></g></g>',
        charging: '<g data-name="Layer 2"><g data-name="charging"><rect width="24" height="24" opacity="0"/><path d="M11.28 13H7a1 1 0 0 1-.86-.5 1 1 0 0 1 0-1L9.28 6H4.17A2.31 2.31 0 0 0 2 8.43v7.14A2.31 2.31 0 0 0 4.17 18h4.25z"/><path d="M15.83 6h-4.25l-2.86 5H13a1 1 0 0 1 .86.5 1 1 0 0 1 0 1L10.72 18h5.11A2.31 2.31 0 0 0 18 15.57V8.43A2.31 2.31 0 0 0 15.83 6z"/><path d="M21 9a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1z"/></g></g>',
        "checkmark-circle-2": '<g data-name="Layer 2"><g data-name="checkmark-circle-2"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z"/></g></g>',
        "checkmark-circle": '<g data-name="Layer 2"><g data-name="checkmark-circle"><rect width="24" height="24" opacity="0"/><path d="M9.71 11.29a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 16a1 1 0 0 0 .72-.34l7-8a1 1 0 0 0-1.5-1.32L12 13.54z"/><path d="M21 11a1 1 0 0 0-1 1 8 8 0 0 1-8 8A8 8 0 0 1 6.33 6.36 7.93 7.93 0 0 1 12 4a8.79 8.79 0 0 1 1.9.22 1 1 0 1 0 .47-1.94A10.54 10.54 0 0 0 12 2a10 10 0 0 0-7 17.09A9.93 9.93 0 0 0 12 22a10 10 0 0 0 10-10 1 1 0 0 0-1-1z"/></g></g>',
        "checkmark-square-2": '<g data-name="Layer 2"><g data-name="checkmark-square-2"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm-1.7 6.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z"/></g></g>',
        "checkmark-square": '<g data-name="Layer 2"><g data-name="checkmark-square"><rect width="24" height="24" opacity="0"/><path d="M20 11.83a1 1 0 0 0-1 1v5.57a.6.6 0 0 1-.6.6H5.6a.6.6 0 0 1-.6-.6V5.6a.6.6 0 0 1 .6-.6h9.57a1 1 0 1 0 0-2H5.6A2.61 2.61 0 0 0 3 5.6v12.8A2.61 2.61 0 0 0 5.6 21h12.8a2.61 2.61 0 0 0 2.6-2.6v-5.57a1 1 0 0 0-1-1z"/><path d="M10.72 11a1 1 0 0 0-1.44 1.38l2.22 2.33a1 1 0 0 0 .72.31 1 1 0 0 0 .72-.3l6.78-7a1 1 0 1 0-1.44-1.4l-6.05 6.26z"/></g></g>',
        checkmark: '<g data-name="Layer 2"><g data-name="checkmark"><rect width="24" height="24" opacity="0"/><path d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z"/></g></g>',
        "chevron-down": '<g data-name="Layer 2"><g data-name="chevron-down"><rect width="24" height="24" opacity="0"/><path d="M12 15.5a1 1 0 0 1-.71-.29l-4-4a1 1 0 1 1 1.42-1.42L12 13.1l3.3-3.18a1 1 0 1 1 1.38 1.44l-4 3.86a1 1 0 0 1-.68.28z"/></g></g>',
        "chevron-left": '<g data-name="Layer 2"><g data-name="chevron-left"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M13.36 17a1 1 0 0 1-.72-.31l-3.86-4a1 1 0 0 1 0-1.4l4-4a1 1 0 1 1 1.42 1.42L10.9 12l3.18 3.3a1 1 0 0 1 0 1.41 1 1 0 0 1-.72.29z"/></g></g>',
        "chevron-right": '<g data-name="Layer 2"><g data-name="chevron-right"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M10.5 17a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42L13.1 12 9.92 8.69a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l3.86 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-.7.32z"/></g></g>',
        "chevron-up": '<g data-name="Layer 2"><g data-name="chevron-up"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M16 14.5a1 1 0 0 1-.71-.29L12 10.9l-3.3 3.18a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.42l4-3.86a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.42 1 1 0 0 1-.69.28z"/></g></g>',
        clipboard: '<g data-name="Layer 2"><g data-name="clipboard"><rect width="24" height="24" opacity="0"/><path d="M18 4v3a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3z"/><rect x="7" y="2" width="10" height="6" rx="1" ry="1"/></g></g>',
        clock: '<g data-name="Layer 2"><g data-name="clock"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4 11h-4a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v3h3a1 1 0 0 1 0 2z"/></g></g>',
        "close-circle": '<g data-name="Layer 2"><g data-name="close-circle"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm2.71 11.29a1 1 0 0 1 0 1.42 1 1 0 0 1-1.42 0L12 13.41l-1.29 1.3a1 1 0 0 1-1.42 0 1 1 0 0 1 0-1.42l1.3-1.29-1.3-1.29a1 1 0 0 1 1.42-1.42l1.29 1.3 1.29-1.3a1 1 0 0 1 1.42 1.42L13.41 12z"/></g></g>',
        "close-square": '<g data-name="Layer 2"><g data-name="close-square"><rect width="24" height="24" opacity="0"/><path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm-3.29 10.29a1 1 0 0 1 0 1.42 1 1 0 0 1-1.42 0L12 13.41l-1.29 1.3a1 1 0 0 1-1.42 0 1 1 0 0 1 0-1.42l1.3-1.29-1.3-1.29a1 1 0 0 1 1.42-1.42l1.29 1.3 1.29-1.3a1 1 0 0 1 1.42 1.42L13.41 12z"/></g></g>',
        close: '<g data-name="Layer 2"><g data-name="close"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g>',
        "cloud-download": '<g data-name="Layer 2"><g data-name="cloud-download"><rect width="24" height="24" opacity="0"/><path d="M21.9 11c0-.11-.06-.22-.09-.33a4.17 4.17 0 0 0-.18-.57c-.05-.12-.12-.24-.18-.37s-.15-.3-.24-.44S21 9.08 21 9s-.2-.25-.31-.37-.21-.2-.32-.3L20 8l-.36-.24a3.68 3.68 0 0 0-.44-.23l-.39-.18a4.13 4.13 0 0 0-.5-.15 3 3 0 0 0-.41-.09h-.18A6 6 0 0 0 6.33 7h-.18a3 3 0 0 0-.41.09 4.13 4.13 0 0 0-.5.15l-.39.18a3.68 3.68 0 0 0-.44.23L4.05 8l-.37.31c-.11.1-.22.19-.32.3s-.21.25-.31.37-.18.23-.26.36-.16.29-.24.44-.13.25-.18.37a4.17 4.17 0 0 0-.18.57c0 .11-.07.22-.09.33A5.23 5.23 0 0 0 2 12a5.5 5.5 0 0 0 .09.91c0 .1.05.19.07.29a5.58 5.58 0 0 0 .18.58l.12.29a5 5 0 0 0 .3.56l.14.22a.56.56 0 0 0 .05.08L3 15a5 5 0 0 0 4 2 2 2 0 0 1 .59-1.41A2 2 0 0 1 9 15a1.92 1.92 0 0 1 1 .27V12a2 2 0 0 1 4 0v3.37a2 2 0 0 1 1-.27 2.05 2.05 0 0 1 1.44.61A2 2 0 0 1 17 17a5 5 0 0 0 4-2l.05-.05a.56.56 0 0 0 .05-.08l.14-.22a5 5 0 0 0 .3-.56l.12-.29a5.58 5.58 0 0 0 .18-.58c0-.1.05-.19.07-.29A5.5 5.5 0 0 0 22 12a5.23 5.23 0 0 0-.1-1z"/><path d="M14.31 16.38L13 17.64V12a1 1 0 0 0-2 0v5.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 21a1 1 0 0 0 .69-.28l3-2.9a1 1 0 1 0-1.38-1.44z"/><rect width="24" height="24" opacity="0"/><path d="M21.9 11c0-.11-.06-.22-.09-.33a4.17 4.17 0 0 0-.18-.57c-.05-.12-.12-.24-.18-.37s-.15-.3-.24-.44S21 9.08 21 9s-.2-.25-.31-.37-.21-.2-.32-.3L20 8l-.36-.24a3.68 3.68 0 0 0-.44-.23l-.39-.18a4.13 4.13 0 0 0-.5-.15 3 3 0 0 0-.41-.09h-.18A6 6 0 0 0 6.33 7h-.18a3 3 0 0 0-.41.09 4.13 4.13 0 0 0-.5.15l-.39.18a3.68 3.68 0 0 0-.44.23L4.05 8l-.37.31c-.11.1-.22.19-.32.3s-.21.25-.31.37-.18.23-.26.36-.16.29-.24.44-.13.25-.18.37a4.17 4.17 0 0 0-.18.57c0 .11-.07.22-.09.33A5.23 5.23 0 0 0 2 12a5.5 5.5 0 0 0 .09.91c0 .1.05.19.07.29a5.58 5.58 0 0 0 .18.58l.12.29a5 5 0 0 0 .3.56l.14.22a.56.56 0 0 0 .05.08L3 15a5 5 0 0 0 4 2 2 2 0 0 1 .59-1.41A2 2 0 0 1 9 15a1.92 1.92 0 0 1 1 .27V12a2 2 0 0 1 4 0v3.37a2 2 0 0 1 1-.27 2.05 2.05 0 0 1 1.44.61A2 2 0 0 1 17 17a5 5 0 0 0 4-2l.05-.05a.56.56 0 0 0 .05-.08l.14-.22a5 5 0 0 0 .3-.56l.12-.29a5.58 5.58 0 0 0 .18-.58c0-.1.05-.19.07-.29A5.5 5.5 0 0 0 22 12a5.23 5.23 0 0 0-.1-1z"/><path d="M14.31 16.38L13 17.64V12a1 1 0 0 0-2 0v5.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 21a1 1 0 0 0 .69-.28l3-2.9a1 1 0 1 0-1.38-1.44z"/></g></g>',
        "cloud-upload": '<g data-name="Layer 2"><g data-name="cloud-upload"><rect width="24" height="24" opacity="0"/><path d="M21.9 12c0-.11-.06-.22-.09-.33a4.17 4.17 0 0 0-.18-.57c-.05-.12-.12-.24-.18-.37s-.15-.3-.24-.44S21 10.08 21 10s-.2-.25-.31-.37-.21-.2-.32-.3L20 9l-.36-.24a3.68 3.68 0 0 0-.44-.23l-.39-.18a4.13 4.13 0 0 0-.5-.15 3 3 0 0 0-.41-.09L17.67 8A6 6 0 0 0 6.33 8l-.18.05a3 3 0 0 0-.41.09 4.13 4.13 0 0 0-.5.15l-.39.18a3.68 3.68 0 0 0-.44.23l-.36.3-.37.31c-.11.1-.22.19-.32.3s-.21.25-.31.37-.18.23-.26.36-.16.29-.24.44-.13.25-.18.37a4.17 4.17 0 0 0-.18.57c0 .11-.07.22-.09.33A5.23 5.23 0 0 0 2 13a5.5 5.5 0 0 0 .09.91c0 .1.05.19.07.29a5.58 5.58 0 0 0 .18.58l.12.29a5 5 0 0 0 .3.56l.14.22a.56.56 0 0 0 .05.08L3 16a5 5 0 0 0 4 2h3v-1.37a2 2 0 0 1-1 .27 2.05 2.05 0 0 1-1.44-.61 2 2 0 0 1 .05-2.83l3-2.9A2 2 0 0 1 12 10a2 2 0 0 1 1.41.59l3 3a2 2 0 0 1 0 2.82A2 2 0 0 1 15 17a1.92 1.92 0 0 1-1-.27V18h3a5 5 0 0 0 4-2l.05-.05a.56.56 0 0 0 .05-.08l.14-.22a5 5 0 0 0 .3-.56l.12-.29a5.58 5.58 0 0 0 .18-.58c0-.1.05-.19.07-.29A5.5 5.5 0 0 0 22 13a5.23 5.23 0 0 0-.1-1z"/><path d="M12.71 11.29a1 1 0 0 0-1.4 0l-3 2.9a1 1 0 1 0 1.38 1.44L11 14.36V20a1 1 0 0 0 2 0v-5.59l1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g>',
        "code-download": '<g data-name="Layer 2"><g data-name="code-download"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M4.29 12l4.48-5.36a1 1 0 1 0-1.54-1.28l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37 1 1 0 0 0 .78-1.63z"/><path d="M21.78 11.37l-4.78-6a1 1 0 0 0-1.56 1.26L19.71 12l-4.48 5.37a1 1 0 0 0 .13 1.41A1 1 0 0 0 16 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 .01-1.27z"/><path d="M15.72 11.41a1 1 0 0 0-1.41 0L13 12.64V8a1 1 0 0 0-2 0v4.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 16a1 1 0 0 0 .69-.28l3-2.9a1 1 0 0 0 .03-1.41z"/></g></g>',
        code: '<g data-name="Layer 2"><g data-name="code"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M8.64 5.23a1 1 0 0 0-1.41.13l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37 1 1 0 0 0 .78-1.63L4.29 12l4.48-5.36a1 1 0 0 0-.13-1.41z"/><path d="M21.78 11.37l-4.78-6a1 1 0 0 0-1.41-.15 1 1 0 0 0-.15 1.41L19.71 12l-4.48 5.37a1 1 0 0 0 .13 1.41A1 1 0 0 0 16 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 .01-1.27z"/></g></g>',
        collapse: '<g data-name="Layer 2"><g data-name="collapse"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M19 9h-2.58l3.29-3.29a1 1 0 1 0-1.42-1.42L15 7.57V5a1 1 0 0 0-1-1 1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2z"/><path d="M10 13H5a1 1 0 0 0 0 2h2.57l-3.28 3.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L9 16.42V19a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1z"/></g></g>',
        "color-palette": '<g data-name="Layer 2"><g data-name="color-palette"><rect width="24" height="24" opacity="0"/><path d="M19.54 5.08A10.61 10.61 0 0 0 11.91 2a10 10 0 0 0-.05 20 2.58 2.58 0 0 0 2.53-1.89 2.52 2.52 0 0 0-.57-2.28.5.5 0 0 1 .37-.83h1.65A6.15 6.15 0 0 0 22 11.33a8.48 8.48 0 0 0-2.46-6.25zm-12.7 9.66a1.5 1.5 0 1 1 .4-2.08 1.49 1.49 0 0 1-.4 2.08zM8.3 9.25a1.5 1.5 0 1 1-.55-2 1.5 1.5 0 0 1 .55 2zM11 7a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 11 7zm5.75.8a1.5 1.5 0 1 1 .55-2 1.5 1.5 0 0 1-.55 2z"/></g></g>',
        "color-picker": '<g data-name="Layer 2"><g data-name="color-picker"><rect width="24" height="24" opacity="0"/><path d="M19.4 7.34L16.66 4.6A1.92 1.92 0 0 0 14 4.53l-2 2-1.29-1.24a1 1 0 0 0-1.42 1.42L10.53 8 5 13.53a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l5.58-5.58 1.24 1.24a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-1.24-1.24 2-2a1.92 1.92 0 0 0-.07-2.71zm-13 7.6L12 9.36l2.69 2.7-2.79 2.79"/></g></g>',
        compass: '<g data-name="Layer 2"><g data-name="compass"><rect width="24" height="24" opacity="0"/><polygon points="10.8 13.21 12.49 12.53 13.2 10.79 11.51 11.47 10.8 13.21"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3.93 7.42l-1.75 4.26a1 1 0 0 1-.55.55l-4.21 1.7A1 1 0 0 1 9 16a1 1 0 0 1-.71-.31h-.05a1 1 0 0 1-.18-1l1.75-4.26a1 1 0 0 1 .55-.55l4.21-1.7a1 1 0 0 1 1.1.25 1 1 0 0 1 .26.99z"/></g></g>',
        copy: '<g data-name="Layer 2"><g data-name="copy"><rect width="24" height="24" opacity="0"/><path d="M18 9h-3V5.67A2.68 2.68 0 0 0 12.33 3H5.67A2.68 2.68 0 0 0 3 5.67v6.66A2.68 2.68 0 0 0 5.67 15H9v3a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3zm-9 3v1H5.67a.67.67 0 0 1-.67-.67V5.67A.67.67 0 0 1 5.67 5h6.66a.67.67 0 0 1 .67.67V9h-1a3 3 0 0 0-3 3z"/></g></g>',
        "corner-down-left": '<g data-name="Layer 2"><g data-name="corner-down-left"><rect x=".05" y=".05" width="24" height="24" transform="rotate(-89.76 12.05 12.05)" opacity="0"/><path d="M20 6a1 1 0 0 0-1-1 1 1 0 0 0-1 1v5a1 1 0 0 1-.29.71A1 1 0 0 1 17 12H8.08l2.69-3.39a1 1 0 0 0-1.52-1.17l-4 5a1 1 0 0 0 0 1.25l4 5a1 1 0 0 0 .78.37 1 1 0 0 0 .62-.22 1 1 0 0 0 .15-1.41l-2.66-3.36h8.92a3 3 0 0 0 3-3z"/></g></g>',
        "corner-down-right": '<g data-name="Layer 2"><g data-name="corner-down-right"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M19.78 12.38l-4-5a1 1 0 0 0-1.56 1.24l2.7 3.38H8a1 1 0 0 1-1-1V6a1 1 0 0 0-2 0v5a3 3 0 0 0 3 3h8.92l-2.7 3.38a1 1 0 0 0 .16 1.4A1 1 0 0 0 15 19a1 1 0 0 0 .78-.38l4-5a1 1 0 0 0 0-1.24z"/></g></g>',
        "corner-left-down": '<g data-name="Layer 2"><g data-name="corner-left-down"><rect width="24" height="24" opacity="0"/><path d="M18 5h-5a3 3 0 0 0-3 3v8.92l-3.38-2.7a1 1 0 0 0-1.24 1.56l5 4a1 1 0 0 0 1.24 0l5-4a1 1 0 1 0-1.24-1.56L12 16.92V8a1 1 0 0 1 1-1h5a1 1 0 0 0 0-2z"/></g></g>',
        "corner-left-up": '<g data-name="Layer 2"><g data-name="corner-left-up"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M18 17h-5a1 1 0 0 1-1-1V7.08l3.38 2.7A1 1 0 0 0 16 10a1 1 0 0 0 .78-.38 1 1 0 0 0-.16-1.4l-5-4a1 1 0 0 0-1.24 0l-5 4a1 1 0 0 0 1.24 1.56L10 7.08V16a3 3 0 0 0 3 3h5a1 1 0 0 0 0-2z"/></g></g>',
        "corner-right-down": '<g data-name="Layer 2"><g data-name="corner-right-down"><rect width="24" height="24" opacity="0"/><path d="M18.78 14.38a1 1 0 0 0-1.4-.16L14 16.92V8a3 3 0 0 0-3-3H6a1 1 0 0 0 0 2h5a1 1 0 0 1 1 1v8.92l-3.38-2.7a1 1 0 0 0-1.24 1.56l5 4a1 1 0 0 0 1.24 0l5-4a1 1 0 0 0 .16-1.4z"/></g></g>',
        "corner-right-up": '<g data-name="Layer 2"><g data-name="corner-right-up"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M18.62 8.22l-5-4a1 1 0 0 0-1.24 0l-5 4a1 1 0 0 0 1.24 1.56L12 7.08V16a1 1 0 0 1-1 1H6a1 1 0 0 0 0 2h5a3 3 0 0 0 3-3V7.08l3.38 2.7A1 1 0 0 0 18 10a1 1 0 0 0 .78-.38 1 1 0 0 0-.16-1.4z"/></g></g>',
        "corner-up-left": '<g data-name="Layer 2"><g data-name="corner-up-left"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M16 10H7.08l2.7-3.38a1 1 0 1 0-1.56-1.24l-4 5a1 1 0 0 0 0 1.24l4 5A1 1 0 0 0 9 17a1 1 0 0 0 .62-.22 1 1 0 0 0 .16-1.4L7.08 12H16a1 1 0 0 1 1 1v5a1 1 0 0 0 2 0v-5a3 3 0 0 0-3-3z"/></g></g>',
        "corner-up-right": '<g data-name="Layer 2"><g data-name="corner-up-right"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M19.78 10.38l-4-5a1 1 0 0 0-1.56 1.24l2.7 3.38H8a3 3 0 0 0-3 3v5a1 1 0 0 0 2 0v-5a1 1 0 0 1 1-1h8.92l-2.7 3.38a1 1 0 0 0 .16 1.4A1 1 0 0 0 15 17a1 1 0 0 0 .78-.38l4-5a1 1 0 0 0 0-1.24z"/></g></g>',
        "credit-card": '<g data-name="Layer 2"><g data-name="credit-card"><rect width="24" height="24" opacity="0"/><path d="M19 5H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zm-8 10H7a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zm6 0h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2zm3-6H4V8a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z"/></g></g>',
        crop: '<g data-name="Layer 2"><g data-name="crop"><rect width="24" height="24" opacity="0"/><path d="M21 16h-3V8.56A2.56 2.56 0 0 0 15.44 6H8V3a1 1 0 0 0-2 0v3H3a1 1 0 0 0 0 2h3v7.44A2.56 2.56 0 0 0 8.56 18H16v3a1 1 0 0 0 2 0v-3h3a1 1 0 0 0 0-2zM8.56 16a.56.56 0 0 1-.56-.56V8h7.44a.56.56 0 0 1 .56.56V16z"/></g></g>',
        cube: '<g data-name="Layer 2"><g data-name="cube"><rect width="24" height="24" opacity="0"/><path d="M11.25 11.83L3 8.36v7.73a1.69 1.69 0 0 0 1 1.52L11.19 21h.06z"/><path d="M12 10.5l8.51-3.57a1.62 1.62 0 0 0-.51-.38l-7.2-3.37a1.87 1.87 0 0 0-1.6 0L4 6.55a1.62 1.62 0 0 0-.51.38z"/><path d="M12.75 11.83V21h.05l7.2-3.39a1.69 1.69 0 0 0 1-1.51V8.36z"/></g></g>',
        "diagonal-arrow-left-down": '<g data-name="Layer 2"><g data-name="diagonal-arrow-left-down"><rect width="24" height="24" opacity="0"/><path d="M17.71 6.29a1 1 0 0 0-1.42 0L8 14.59V9a1 1 0 0 0-2 0v8a1 1 0 0 0 1 1h8a1 1 0 0 0 0-2H9.41l8.3-8.29a1 1 0 0 0 0-1.42z"/></g></g>',
        "diagonal-arrow-left-up": '<g data-name="Layer 2"><g data-name="diagonal-arrow-left-up"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M17.71 16.29L9.42 8H15a1 1 0 0 0 0-2H7.05a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1H7a1 1 0 0 0 1-1V9.45l8.26 8.26a1 1 0 0 0 1.42 0 1 1 0 0 0 .03-1.42z"/></g></g>',
        "diagonal-arrow-right-down": '<g data-name="Layer 2"><g data-name="diagonal-arrow-right-down"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M17 8a1 1 0 0 0-1 1v5.59l-8.29-8.3a1 1 0 0 0-1.42 1.42l8.3 8.29H9a1 1 0 0 0 0 2h8a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z"/></g></g>',
        "diagonal-arrow-right-up": '<g data-name="Layer 2"><g data-name="diagonal-arrow-right-up"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z"/></g></g>',
        "done-all": '<g data-name="Layer 2"><g data-name="done-all"><rect width="24" height="24" opacity="0"/><path d="M16.62 6.21a1 1 0 0 0-1.41.17l-7 9-3.43-4.18a1 1 0 1 0-1.56 1.25l4.17 5.18a1 1 0 0 0 .78.37 1 1 0 0 0 .83-.38l7.83-10a1 1 0 0 0-.21-1.41z"/><path d="M21.62 6.21a1 1 0 0 0-1.41.17l-7 9-.61-.75-1.26 1.62 1.1 1.37a1 1 0 0 0 .78.37 1 1 0 0 0 .78-.38l7.83-10a1 1 0 0 0-.21-1.4z"/><path d="M8.71 13.06L10 11.44l-.2-.24a1 1 0 0 0-1.43-.2 1 1 0 0 0-.15 1.41z"/></g></g>',
        download: '<g data-name="Layer 2"><g data-name="download"><rect width="24" height="24" opacity="0"/><rect x="4" y="18" width="16" height="2" rx="1" ry="1"/><rect x="3" y="17" width="4" height="2" rx="1" ry="1" transform="rotate(-90 5 18)"/><rect x="17" y="17" width="4" height="2" rx="1" ry="1" transform="rotate(-90 19 18)"/><path d="M12 15a1 1 0 0 1-.58-.18l-4-2.82a1 1 0 0 1-.24-1.39 1 1 0 0 1 1.4-.24L12 12.76l3.4-2.56a1 1 0 0 1 1.2 1.6l-4 3a1 1 0 0 1-.6.2z"/><path d="M12 13a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1z"/></g></g>',
        "droplet-off": '<g data-name="Layer 2"><g data-name="droplet-off"><rect width="24" height="24" opacity="0"/><path d="M19 16.14A7.73 7.73 0 0 0 17.34 8l-4.56-4.69a1 1 0 0 0-.71-.31 1 1 0 0 0-.72.3L8.74 5.92z"/><path d="M6 8.82a7.73 7.73 0 0 0 .64 9.9A7.44 7.44 0 0 0 11.92 21a7.34 7.34 0 0 0 4.64-1.6z"/><path d="M20.71 19.29l-16-16a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g>',
        droplet: '<g data-name="Layer 2"><g data-name="droplet"><rect x=".1" y=".1" width="24" height="24" transform="rotate(.48 11.987 11.887)" opacity="0"/><path d="M12 21.1a7.4 7.4 0 0 1-5.28-2.28 7.73 7.73 0 0 1 .1-10.77l4.64-4.65a.94.94 0 0 1 .71-.3 1 1 0 0 1 .71.31l4.56 4.72a7.73 7.73 0 0 1-.09 10.77A7.33 7.33 0 0 1 12 21.1z"/></g></g>',
        "edit-2": '<g data-name="Layer 2"><g data-name="edit-2"><rect width="24" height="24" opacity="0"/><path d="M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2z"/><path d="M5 18h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71L16.66 2.6A2 2 0 0 0 14 2.53l-9 9a2 2 0 0 0-.57 1.21L4 16.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 18zM15.27 4L18 6.73l-2 1.95L13.32 6z"/></g></g>',
        edit: '<g data-name="Layer 2"><g data-name="edit"><rect width="24" height="24" opacity="0"/><path d="M19.4 7.34L16.66 4.6A2 2 0 0 0 14 4.53l-9 9a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71zM16 10.68L13.32 8l1.95-2L18 8.73z"/></g></g>',
        email: '<g data-name="Layer 2"><g data-name="email"><rect width="24" height="24" opacity="0"/><path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm0 2l-6.5 4.47a1 1 0 0 1-1 0L5 6z"/></g></g>',
        expand: '<g data-name="Layer 2"><g data-name="expand"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M20 5a1 1 0 0 0-1-1h-5a1 1 0 0 0 0 2h2.57l-3.28 3.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L18 7.42V10a1 1 0 0 0 1 1 1 1 0 0 0 1-1z"/><path d="M10.71 13.29a1 1 0 0 0-1.42 0L6 16.57V14a1 1 0 0 0-1-1 1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2H7.42l3.29-3.29a1 1 0 0 0 0-1.42z"/></g></g>',
        "external-link": '<g data-name="Layer 2"><g data-name="external-link"><rect width="24" height="24" opacity="0"/><path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z"/><path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z"/></g></g>',
        "eye-off-2": '<g data-name="Layer 2"><g data-name="eye-off-2"><rect width="24" height="24" opacity="0"/><path d="M17.81 13.39A8.93 8.93 0 0 0 21 7.62a1 1 0 1 0-2-.24 7.07 7.07 0 0 1-14 0 1 1 0 1 0-2 .24 8.93 8.93 0 0 0 3.18 5.77l-2.3 2.32a1 1 0 0 0 1.41 1.41l2.61-2.6a9.06 9.06 0 0 0 3.1.92V19a1 1 0 0 0 2 0v-3.56a9.06 9.06 0 0 0 3.1-.92l2.61 2.6a1 1 0 0 0 1.41-1.41z"/></g></g>',
        "eye-off": '<g data-name="Layer 2"><g data-name="eye-off"><rect width="24" height="24" opacity="0"/><circle cx="12" cy="12" r="1.5"/><path d="M15.29 18.12L14 16.78l-.07-.07-1.27-1.27a4.07 4.07 0 0 1-.61.06A3.5 3.5 0 0 1 8.5 12a4.07 4.07 0 0 1 .06-.61l-2-2L5 7.87a15.89 15.89 0 0 0-2.87 3.63 1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25a9.48 9.48 0 0 0 3.23-.67z"/><path d="M8.59 5.76l2.8 2.8A4.07 4.07 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 4.07 4.07 0 0 1-.06.61l2.68 2.68.84.84a15.89 15.89 0 0 0 2.91-3.63 1 1 0 0 0 0-1c-.64-1.11-4.16-6.68-10.14-6.5a9.48 9.48 0 0 0-3.23.67z"/><path d="M20.71 19.29L19.41 18l-2-2-9.52-9.53L6.42 5 4.71 3.29a1 1 0 0 0-1.42 1.42L5.53 7l1.75 1.7 7.31 7.3.07.07L16 17.41l.59.59 2.7 2.71a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g>',
        eye: '<g data-name="Layer 2"><g data-name="eye"><rect width="24" height="24" opacity="0"/><circle cx="12" cy="12" r="1.5"/><path d="M21.87 11.5c-.64-1.11-4.16-6.68-10.14-6.5-5.53.14-8.73 5-9.6 6.5a1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25c5.53-.14 8.74-5 9.6-6.5a1 1 0 0 0 0-1zm-9.87 4a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5z"/></g></g>',
        facebook: '<g data-name="Layer 2"><g data-name="facebook"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5z"/></g></g>',
        "file-add": '<g data-name="Layer 2"><g data-name="file-add"><rect width="24" height="24" opacity="0"/><path d="M19.74 7.33l-4.44-5a1 1 0 0 0-.74-.33h-8A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V8a1 1 0 0 0-.26-.67zM14 15h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2zm.71-7a.79.79 0 0 1-.71-.85V4l3.74 4z"/></g></g>',
        "file-remove": '<g data-name="Layer 2"><g data-name="file-remove"><rect width="24" height="24" opacity="0"/><path d="M19.74 7.33l-4.44-5a1 1 0 0 0-.74-.33h-8A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V8a1 1 0 0 0-.26-.67zM14 15h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zm.71-7a.79.79 0 0 1-.71-.85V4l3.74 4z"/></g></g>',
        "file-text": '<g data-name="Layer 2"><g data-name="file-text"><rect width="24" height="24" opacity="0"/><path d="M19.74 7.33l-4.44-5a1 1 0 0 0-.74-.33h-8A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V8a1 1 0 0 0-.26-.67zM9 12h3a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2zm6 6H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zm-.29-10a.79.79 0 0 1-.71-.85V4l3.74 4z"/></g></g>',
        file: '<g data-name="Layer 2"><g data-name="file"><rect width="24" height="24" opacity="0"/><path d="M19.74 7.33l-4.44-5a1 1 0 0 0-.74-.33h-8A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V8a1 1 0 0 0-.26-.67zM14 4l3.74 4h-3a.79.79 0 0 1-.74-.85z"/></g></g>',
        film: '<g data-name="Layer 2"><g data-name="film"><rect width="24" height="24" opacity="0"/><path d="M18.26 3H5.74A2.74 2.74 0 0 0 3 5.74v12.52A2.74 2.74 0 0 0 5.74 21h12.52A2.74 2.74 0 0 0 21 18.26V5.74A2.74 2.74 0 0 0 18.26 3zM7 11H5V9h2zm-2 2h2v2H5zm14-2h-2V9h2zm-2 2h2v2h-2zm2-7.26V7h-2V5h1.26a.74.74 0 0 1 .74.74zM5.74 5H7v2H5V5.74A.74.74 0 0 1 5.74 5zM5 18.26V17h2v2H5.74a.74.74 0 0 1-.74-.74zm14 0a.74.74 0 0 1-.74.74H17v-2h2z"/></g></g>',
        flag: '<g data-name="Layer 2"><g data-name="flag"><polyline points="24 24 0 24 0 0" opacity="0"/><path d="M19.27 4.68a1.79 1.79 0 0 0-1.6-.25 7.53 7.53 0 0 1-2.17.28 8.54 8.54 0 0 1-3.13-.78A10.15 10.15 0 0 0 8.5 3c-2.89 0-4 1-4.2 1.14a1 1 0 0 0-.3.72V20a1 1 0 0 0 2 0v-4.3a6.28 6.28 0 0 1 2.5-.41 8.54 8.54 0 0 1 3.13.78 10.15 10.15 0 0 0 3.87.93 7.66 7.66 0 0 0 3.5-.7 1.74 1.74 0 0 0 1-1.55V6.11a1.77 1.77 0 0 0-.73-1.43z"/></g></g>',
        "flash-off": '<g data-name="Layer 2"><g data-name="flash-off"><rect width="24" height="24" opacity="0"/><path d="M17.33 14.5l2.5-3.74A1 1 0 0 0 19 9.2h-5.89l.77-7.09a1 1 0 0 0-.65-1 1 1 0 0 0-1.17.38L8.94 6.11z"/><path d="M6.67 9.5l-2.5 3.74A1 1 0 0 0 5 14.8h5.89l-.77 7.09a1 1 0 0 0 .65 1.05 1 1 0 0 0 .34.06 1 1 0 0 0 .83-.44l3.12-4.67z"/><path d="M20.71 19.29l-16-16a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g>',
        flash: '<g data-name="Layer 2"><g data-name="flash"><rect width="24" height="24" opacity="0"/><path d="M11.11 23a1 1 0 0 1-.34-.06 1 1 0 0 1-.65-1.05l.77-7.09H5a1 1 0 0 1-.83-1.56l7.89-11.8a1 1 0 0 1 1.17-.38 1 1 0 0 1 .65 1l-.77 7.14H19a1 1 0 0 1 .83 1.56l-7.89 11.8a1 1 0 0 1-.83.44z"/></g></g>',
        "flip-2": '<g data-name="Layer 2"><g data-name="flip-2"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M6.09 19h12l-1.3 1.29a1 1 0 0 0 1.42 1.42l3-3a1 1 0 0 0 0-1.42l-3-3a1 1 0 0 0-1.42 0 1 1 0 0 0 0 1.42l1.3 1.29h-12a1.56 1.56 0 0 1-1.59-1.53V13a1 1 0 0 0-2 0v2.47A3.56 3.56 0 0 0 6.09 19z"/><path d="M5.79 9.71a1 1 0 1 0 1.42-1.42L5.91 7h12a1.56 1.56 0 0 1 1.59 1.53V11a1 1 0 0 0 2 0V8.53A3.56 3.56 0 0 0 17.91 5h-12l1.3-1.29a1 1 0 0 0 0-1.42 1 1 0 0 0-1.42 0l-3 3a1 1 0 0 0 0 1.42z"/></g></g>',
        flip: '<g data-name="Layer 2"><g data-name="flip-in"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M5 6.09v12l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3a1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 0-1.42 1 1 0 0 0-1.42 0L7 18.09v-12A1.56 1.56 0 0 1 8.53 4.5H11a1 1 0 0 0 0-2H8.53A3.56 3.56 0 0 0 5 6.09z"/><path d="M14.29 5.79a1 1 0 0 0 1.42 1.42L17 5.91v12a1.56 1.56 0 0 1-1.53 1.59H13a1 1 0 0 0 0 2h2.47A3.56 3.56 0 0 0 19 17.91v-12l1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-3-3a1 1 0 0 0-1.42 0z"/></g></g>',
        "folder-add": '<g data-name="Layer 2"><g data-name="folder-add"><rect width="24" height="24" opacity="0"/><path d="M19.5 7.05h-7L9.87 3.87a1 1 0 0 0-.77-.37H4.5A2.47 2.47 0 0 0 2 5.93v12.14a2.47 2.47 0 0 0 2.5 2.43h15a2.47 2.47 0 0 0 2.5-2.43V9.48a2.47 2.47 0 0 0-2.5-2.43zM14 15h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2z"/></g></g>',
        "folder-remove": '<g data-name="Layer 2"><g data-name="folder-remove"><rect width="24" height="24" opacity="0"/><path d="M19.5 7.05h-7L9.87 3.87a1 1 0 0 0-.77-.37H4.5A2.47 2.47 0 0 0 2 5.93v12.14a2.47 2.47 0 0 0 2.5 2.43h15a2.47 2.47 0 0 0 2.5-2.43V9.48a2.47 2.47 0 0 0-2.5-2.43zM14 15h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2z"/></g></g>',
        folder: '<g data-name="Layer 2"><g data-name="folder"><rect width="24" height="24" opacity="0"/><path d="M19.5 20.5h-15A2.47 2.47 0 0 1 2 18.07V5.93A2.47 2.47 0 0 1 4.5 3.5h4.6a1 1 0 0 1 .77.37l2.6 3.18h7A2.47 2.47 0 0 1 22 9.48v8.59a2.47 2.47 0 0 1-2.5 2.43z"/></g></g>',
        funnel: '<g data-name="Layer 2"><g data-name="funnel"><rect width="24" height="24" opacity="0"/><path d="M13.9 22a1 1 0 0 1-.6-.2l-4-3.05a1 1 0 0 1-.39-.8v-3.27l-4.8-9.22A1 1 0 0 1 5 4h14a1 1 0 0 1 .86.49 1 1 0 0 1 0 1l-5 9.21V21a1 1 0 0 1-.55.9 1 1 0 0 1-.41.1z"/></g></g>',
        gift: '<g data-name="Layer 2"><g data-name="gift"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M4.64 15.27v4.82a.92.92 0 0 0 .92.91h5.62v-5.73z"/><path d="M12.82 21h5.62a.92.92 0 0 0 .92-.91v-4.82h-6.54z"/><path d="M20.1 7.09h-1.84a2.82 2.82 0 0 0 .29-1.23A2.87 2.87 0 0 0 15.68 3 4.21 4.21 0 0 0 12 5.57 4.21 4.21 0 0 0 8.32 3a2.87 2.87 0 0 0-2.87 2.86 2.82 2.82 0 0 0 .29 1.23H3.9c-.5 0-.9.59-.9 1.31v3.93c0 .72.4 1.31.9 1.31h7.28V7.09h1.64v6.55h7.28c.5 0 .9-.59.9-1.31V8.4c0-.72-.4-1.31-.9-1.31zm-11.78 0a1.23 1.23 0 1 1 0-2.45c1.4 0 2.19 1.44 2.58 2.45zm7.36 0H13.1c.39-1 1.18-2.45 2.58-2.45a1.23 1.23 0 1 1 0 2.45z"/></g></g>',
        github: '<g data-name="Layer 2"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M12 1A10.89 10.89 0 0 0 1 11.77 10.79 10.79 0 0 0 8.52 22c.55.1.75-.23.75-.52v-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0-1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84A4.15 4.15 0 0 1 19 11.2c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95c0 .35.2.63.75.52A10.8 10.8 0 0 0 23 11.77 10.89 10.89 0 0 0 12 1" data-name="github"/></g>',
        "globe-2": '<g data-name="Layer 2"><g data-name="globe-2"><rect width="24" height="24" opacity="0"/><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 2a8.19 8.19 0 0 1 1.79.21 2.61 2.61 0 0 1-.78 1c-.22.17-.46.31-.7.46a4.56 4.56 0 0 0-1.85 1.67 6.49 6.49 0 0 0-.62 3.3c0 1.36 0 2.16-.95 2.87-1.37 1.07-3.46.47-4.76-.07A8.33 8.33 0 0 1 4 12a8 8 0 0 1 8-8zm4.89 14.32a6.79 6.79 0 0 0-.63-1.14c-.11-.16-.22-.32-.32-.49-.39-.68-.25-1 .38-2l.1-.17a4.77 4.77 0 0 0 .58-2.43 5.42 5.42 0 0 1 .09-1c.16-.73 1.71-.93 2.67-1a7.94 7.94 0 0 1-2.86 8.28z"/></g></g>',
        "globe-3": '<g data-name="Layer 2"><g data-name="globe-3"><rect width="24" height="24" opacity="0"/><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zM5 15.8a8.42 8.42 0 0 0 2 .27 5 5 0 0 0 3.14-1c1.71-1.34 1.71-3.06 1.71-4.44a4.76 4.76 0 0 1 .37-2.34 2.86 2.86 0 0 1 1.12-.91 9.75 9.75 0 0 0 .92-.61 4.55 4.55 0 0 0 1.4-1.87A8 8 0 0 1 19 8.12c-1.43.2-3.46.67-3.86 2.53A7 7 0 0 0 15 12a2.93 2.93 0 0 1-.29 1.47l-.1.17c-.65 1.08-1.38 2.31-.39 4 .12.21.25.41.38.61a2.29 2.29 0 0 1 .52 1.08A7.89 7.89 0 0 1 12 20a8 8 0 0 1-7-4.2z"/></g></g>',
        globe: '<g data-name="Layer 2"><g data-name="globe"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M22 12A10 10 0 0 0 12 2a10 10 0 0 0 0 20 10 10 0 0 0 10-10zm-2.07-1H17a12.91 12.91 0 0 0-2.33-6.54A8 8 0 0 1 19.93 11zM9.08 13H15a11.44 11.44 0 0 1-3 6.61A11 11 0 0 1 9.08 13zm0-2A11.4 11.4 0 0 1 12 4.4a11.19 11.19 0 0 1 3 6.6zm.36-6.57A13.18 13.18 0 0 0 7.07 11h-3a8 8 0 0 1 5.37-6.57zM4.07 13h3a12.86 12.86 0 0 0 2.35 6.56A8 8 0 0 1 4.07 13zm10.55 6.55A13.14 13.14 0 0 0 17 13h2.95a8 8 0 0 1-5.33 6.55z"/></g></g>',
        google: '<g data-name="Layer 2"><g data-name="google"><polyline points="0 0 24 0 24 24 0 24" opacity="0"/><path d="M17.5 14a5.51 5.51 0 0 1-4.5 3.93 6.15 6.15 0 0 1-7-5.45A6 6 0 0 1 12 6a6.12 6.12 0 0 1 2.27.44.5.5 0 0 0 .64-.21l1.44-2.65a.52.52 0 0 0-.23-.7A10 10 0 0 0 2 12.29 10.12 10.12 0 0 0 11.57 22 10 10 0 0 0 22 12.52v-2a.51.51 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h5"/></g></g>',
        grid: '<g data-name="Layer 2"><g data-name="grid"><rect width="24" height="24" opacity="0"/><path d="M9 3H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/><path d="M19 3h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/><path d="M9 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2z"/><path d="M19 13h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2z"/></g></g>',
        "hard-drive": '<g data-name="Layer 2"><g data-name="hard-drive"><rect width="24" height="24" opacity="0"/><path d="M20.79 11.34l-3.34-6.68A3 3 0 0 0 14.76 3H9.24a3 3 0 0 0-2.69 1.66l-3.34 6.68a2 2 0 0 0-.21.9V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5.76a2 2 0 0 0-.21-.9zM8 17a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm8 0h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zM5.62 11l2.72-5.45a1 1 0 0 1 .9-.55h5.52a1 1 0 0 1 .9.55L18.38 11z"/></g></g>',
        hash: '<g data-name="Layer 2"><g data-name="hash"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M20 14h-4.3l.73-4H20a1 1 0 0 0 0-2h-3.21l.69-3.81A1 1 0 0 0 16.64 3a1 1 0 0 0-1.22.82L14.67 8h-3.88l.69-3.81A1 1 0 0 0 10.64 3a1 1 0 0 0-1.22.82L8.67 8H4a1 1 0 0 0 0 2h4.3l-.73 4H4a1 1 0 0 0 0 2h3.21l-.69 3.81A1 1 0 0 0 7.36 21a1 1 0 0 0 1.22-.82L9.33 16h3.88l-.69 3.81a1 1 0 0 0 .84 1.19 1 1 0 0 0 1.22-.82l.75-4.18H20a1 1 0 0 0 0-2zM9.7 14l.73-4h3.87l-.73 4z"/></g></g>',
        headphones: '<g data-name="Layer 2"><g data-name="headphones"><rect width="24" height="24" opacity="0"/><path d="M12 2A10.2 10.2 0 0 0 2 12.37V17a4 4 0 1 0 4-4 3.91 3.91 0 0 0-2 .56v-1.19A8.2 8.2 0 0 1 12 4a8.2 8.2 0 0 1 8 8.37v1.19a3.91 3.91 0 0 0-2-.56 4 4 0 1 0 4 4v-4.63A10.2 10.2 0 0 0 12 2z"/></g></g>',
        heart: '<g data-name="Layer 2"><g data-name="heart"><rect width="24" height="24" opacity="0"/><path d="M12 21a1 1 0 0 1-.71-.29l-7.77-7.78a5.26 5.26 0 0 1 0-7.4 5.24 5.24 0 0 1 7.4 0L12 6.61l1.08-1.08a5.24 5.24 0 0 1 7.4 0 5.26 5.26 0 0 1 0 7.4l-7.77 7.78A1 1 0 0 1 12 21z"/></g></g>',
        home: '<g data-name="Layer 2"><g data-name="home"><rect width="24" height="24" opacity="0"/><rect x="10" y="14" width="4" height="7"/><path d="M20.42 10.18L12.71 2.3a1 1 0 0 0-1.42 0l-7.71 7.89A2 2 0 0 0 3 11.62V20a2 2 0 0 0 1.89 2H8v-9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v9h3.11A2 2 0 0 0 21 20v-8.38a2.07 2.07 0 0 0-.58-1.44z"/></g></g>',
        "image-2": '<g data-name="Layer 2"><g data-name="image-2"><rect width="24" height="24" opacity="0"/><path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM8 7a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 8 7zm11 10.83A1.09 1.09 0 0 1 18 19H6l7.57-6.82a.69.69 0 0 1 .93 0l4.5 4.48z"/></g></g>',
        image: '<g data-name="Layer 2"><g data-name="image"><rect width="24" height="24" opacity="0"/><path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM6 5h12a1 1 0 0 1 1 1v8.36l-3.2-2.73a2.77 2.77 0 0 0-3.52 0L5 17.7V6a1 1 0 0 1 1-1z"/><circle cx="8" cy="8.5" r="1.5"/></g></g>',
        inbox: '<g data-name="Layer 2"><g data-name="inbox"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M20.79 11.34l-3.34-6.68A3 3 0 0 0 14.76 3H9.24a3 3 0 0 0-2.69 1.66l-3.34 6.68a2 2 0 0 0-.21.9V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5.76a2 2 0 0 0-.21-.9zM8.34 5.55a1 1 0 0 1 .9-.55h5.52a1 1 0 0 1 .9.55L18.38 11H16a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1H5.62z"/></g></g>',
        info: '<g data-name="Layer 2"><g data-name="info"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14a1 1 0 0 1-2 0v-5a1 1 0 0 1 2 0zm-1-7a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/></g></g>',
        keypad: '<g data-name="Layer 2"><g data-name="keypad"><rect width="24" height="24" opacity="0"/><path d="M5 2a3 3 0 1 0 3 3 3 3 0 0 0-3-3z"/><path d="M12 2a3 3 0 1 0 3 3 3 3 0 0 0-3-3z"/><path d="M19 8a3 3 0 1 0-3-3 3 3 0 0 0 3 3z"/><path d="M5 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3z"/><path d="M12 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3z"/><path d="M19 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3z"/><path d="M5 16a3 3 0 1 0 3 3 3 3 0 0 0-3-3z"/><path d="M12 16a3 3 0 1 0 3 3 3 3 0 0 0-3-3z"/><path d="M19 16a3 3 0 1 0 3 3 3 3 0 0 0-3-3z"/></g></g>',
        layers: '<g data-name="Layer 2"><g data-name="layers"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M3.24 7.29l8.52 4.63a.51.51 0 0 0 .48 0l8.52-4.63a.44.44 0 0 0-.05-.81L12.19 3a.5.5 0 0 0-.38 0L3.29 6.48a.44.44 0 0 0-.05.81z"/><path d="M20.71 10.66l-1.83-.78-6.64 3.61a.51.51 0 0 1-.48 0L5.12 9.88l-1.83.78a.48.48 0 0 0 0 .85l8.52 4.9a.46.46 0 0 0 .48 0l8.52-4.9a.48.48 0 0 0-.1-.85z"/><path d="M20.71 15.1l-1.56-.68-6.91 3.76a.51.51 0 0 1-.48 0l-6.91-3.76-1.56.68a.49.49 0 0 0 0 .87l8.52 5a.51.51 0 0 0 .48 0l8.52-5a.49.49 0 0 0-.1-.87z"/></g></g>',
        layout: '<g data-name="Layer 2"><g data-name="layout"><rect width="24" height="24" opacity="0"/><path d="M21 8V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v2z"/><path d="M3 10v8a3 3 0 0 0 3 3h5V10z"/><path d="M13 10v11h5a3 3 0 0 0 3-3v-8z"/></g></g>',
        "link-2": '<g data-name="Layer 2"><g data-name="link-2"><rect width="24" height="24" opacity="0"/><path d="M13.29 9.29l-4 4a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4-4a1 1 0 0 0-1.42-1.42z"/><path d="M12.28 17.4L11 18.67a4.2 4.2 0 0 1-5.58.4 4 4 0 0 1-.27-5.93l1.42-1.43a1 1 0 0 0 0-1.42 1 1 0 0 0-1.42 0l-1.27 1.28a6.15 6.15 0 0 0-.67 8.07 6.06 6.06 0 0 0 9.07.6l1.42-1.42a1 1 0 0 0-1.42-1.42z"/><path d="M19.66 3.22a6.18 6.18 0 0 0-8.13.68L10.45 5a1.09 1.09 0 0 0-.17 1.61 1 1 0 0 0 1.42 0L13 5.3a4.17 4.17 0 0 1 5.57-.4 4 4 0 0 1 .27 5.95l-1.42 1.43a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l1.42-1.42a6.06 6.06 0 0 0-.6-9.06z"/></g></g>',
        link: '<g data-name="Layer 2"><g data-name="link"><rect width="24" height="24" opacity="0"/><path d="M8 12a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2H9a1 1 0 0 0-1 1z"/><path d="M9 16H7.21A4.13 4.13 0 0 1 3 12.37 4 4 0 0 1 7 8h2a1 1 0 0 0 0-2H7.21a6.15 6.15 0 0 0-6.16 5.21A6 6 0 0 0 7 18h2a1 1 0 0 0 0-2z"/><path d="M23 11.24A6.16 6.16 0 0 0 16.76 6h-1.51C14.44 6 14 6.45 14 7a1 1 0 0 0 1 1h1.79A4.13 4.13 0 0 1 21 11.63 4 4 0 0 1 17 16h-2a1 1 0 0 0 0 2h2a6 6 0 0 0 6-6.76z"/></g></g>',
        linkedin: '<g data-name="Layer 2"><g data-name="linkedin"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M15.15 8.4a5.83 5.83 0 0 0-5.85 5.82v5.88a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a1.94 1.94 0 0 1 2.15-1.93 2 2 0 0 1 1.75 2v5.81a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a5.83 5.83 0 0 0-5.85-5.82z"/><rect x="3" y="9.3" width="4.5" height="11.7" rx=".9" ry=".9"/><circle cx="5.25" cy="5.25" r="2.25"/></g></g>',
        list: '<g data-name="Layer 2"><g data-name="list"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><circle cx="4" cy="7" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="17" r="1"/><rect x="7" y="11" width="14" height="2" rx=".94" ry=".94"/><rect x="7" y="16" width="14" height="2" rx=".94" ry=".94"/><rect x="7" y="6" width="14" height="2" rx=".94" ry=".94"/></g></g>',
        lock: '<g data-name="Layer 2"><g data-name="lock"><rect width="24" height="24" opacity="0"/><circle cx="12" cy="15" r="1"/><path d="M17 8h-1V6.11a4 4 0 1 0-8 0V8H7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zm-7-1.89A2.06 2.06 0 0 1 12 4a2.06 2.06 0 0 1 2 2.11V8h-4zM12 18a3 3 0 1 1 3-3 3 3 0 0 1-3 3z"/></g></g>',
        "log-in": '<g data-name="Layer 2"><g data-name="log-in"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M19 4h-2a1 1 0 0 0 0 2h1v12h-1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"/><path d="M11.8 7.4a1 1 0 0 0-1.6 1.2L12 11H4a1 1 0 0 0 0 2h8.09l-1.72 2.44a1 1 0 0 0 .24 1.4 1 1 0 0 0 .58.18 1 1 0 0 0 .81-.42l2.82-4a1 1 0 0 0 0-1.18z"/></g></g>',
        "log-out": '<g data-name="Layer 2"><g data-name="log-out"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M7 6a1 1 0 0 0 0-2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2H6V6z"/><path d="M20.82 11.42l-2.82-4a1 1 0 0 0-1.39-.24 1 1 0 0 0-.24 1.4L18.09 11H10a1 1 0 0 0 0 2h8l-1.8 2.4a1 1 0 0 0 .2 1.4 1 1 0 0 0 .6.2 1 1 0 0 0 .8-.4l3-4a1 1 0 0 0 .02-1.18z"/></g></g>',
        map: '<g data-name="Layer 2"><g data-name="map"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M20.41 5.89l-4-1.8H15.59L12 5.7 8.41 4.09h-.05L8.24 4h-.6l-4 1.8a1 1 0 0 0-.64 1V19a1 1 0 0 0 .46.84A1 1 0 0 0 4 20a1 1 0 0 0 .41-.09L8 18.3l3.59 1.61h.05a.85.85 0 0 0 .72 0h.05L16 18.3l3.59 1.61A1 1 0 0 0 20 20a1 1 0 0 0 .54-.16A1 1 0 0 0 21 19V6.8a1 1 0 0 0-.59-.91zM9 6.55l2 .89v10l-2-.89zm10 10.9l-2-.89v-10l2 .89z"/></g></g>',
        maximize: '<g data-name="Layer 2"><g data-name="maximize"><rect width="24" height="24" opacity="0"/><path d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM13 12h-1v1a1 1 0 0 1-2 0v-1H9a1 1 0 0 1 0-2h1V9a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2z"/></g></g>',
        "menu-2": '<g data-name="Layer 2"><g data-name="menu-2"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><circle cx="4" cy="12" r="1"/><rect x="7" y="11" width="14" height="2" rx=".94" ry=".94"/><rect x="3" y="16" width="18" height="2" rx=".94" ry=".94"/><rect x="3" y="6" width="18" height="2" rx=".94" ry=".94"/></g></g>',
        "menu-arrow": '<g data-name="Layer 2"><g data-name="menu-arrow"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M20.05 11H5.91l1.3-1.29a1 1 0 0 0-1.42-1.42l-3 3a1 1 0 0 0 0 1.42l3 3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L5.91 13h14.14a1 1 0 0 0 .95-.95V12a1 1 0 0 0-.95-1z"/><rect x="3" y="17" width="18" height="2" rx=".95" ry=".95"/><rect x="3" y="5" width="18" height="2" rx=".95" ry=".95"/></g></g>',
        menu: '<g data-name="Layer 2"><g data-name="menu"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><rect x="3" y="11" width="18" height="2" rx=".95" ry=".95"/><rect x="3" y="16" width="18" height="2" rx=".95" ry=".95"/><rect x="3" y="6" width="18" height="2" rx=".95" ry=".95"/></g></g>',
        "message-circle": '<g data-name="Layer 2"><g data-name="message-circle"><rect width="24" height="24" opacity="0"/><path d="M19.07 4.93a10 10 0 0 0-16.28 11 1.06 1.06 0 0 1 .09.64L2 20.8a1 1 0 0 0 .27.91A1 1 0 0 0 3 22h.2l4.28-.86a1.26 1.26 0 0 1 .64.09 10 10 0 0 0 11-16.28zM8 13a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/></g></g>',
        "message-square": '<g data-name="Layer 2"><g data-name="message-square"><rect width="24" height="24" opacity="0"/><path d="M19 3H5a3 3 0 0 0-3 3v15a1 1 0 0 0 .51.87A1 1 0 0 0 3 22a1 1 0 0 0 .51-.14L8 19.14a1 1 0 0 1 .55-.14H19a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM8 12a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/></g></g>',
        "mic-off": '<g data-name="Layer 2"><g data-name="mic-off"><rect width="24" height="24" opacity="0"/><path d="M15.58 12.75A4 4 0 0 0 16 11V6a4 4 0 0 0-7.92-.75"/><path d="M19 11a1 1 0 0 0-2 0 4.86 4.86 0 0 1-.69 2.48L17.78 15A7 7 0 0 0 19 11z"/><path d="M12 15h.16L8 10.83V11a4 4 0 0 0 4 4z"/><path d="M20.71 19.29l-16-16a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/><path d="M15 20h-2v-2.08a7 7 0 0 0 1.65-.44l-1.6-1.6A4.57 4.57 0 0 1 12 16a5 5 0 0 1-5-5 1 1 0 0 0-2 0 7 7 0 0 0 6 6.92V20H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z"/></g></g>',
        mic: '<g data-name="Layer 2"><g data-name="mic"><rect width="24" height="24" opacity="0"/><path d="M12 15a4 4 0 0 0 4-4V6a4 4 0 0 0-8 0v5a4 4 0 0 0 4 4z"/><path d="M19 11a1 1 0 0 0-2 0 5 5 0 0 1-10 0 1 1 0 0 0-2 0 7 7 0 0 0 6 6.92V20H8.89a.89.89 0 0 0-.89.89v.22a.89.89 0 0 0 .89.89h6.22a.89.89 0 0 0 .89-.89v-.22a.89.89 0 0 0-.89-.89H13v-2.08A7 7 0 0 0 19 11z"/></g></g>',
        minimize: '<g data-name="Layer 2"><g data-name="minimize"><rect width="24" height="24" opacity="0"/><path d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM13 12H9a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2z"/></g></g>',
        "minus-circle": '<g data-name="Layer 2"><g data-name="minus-circle"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3 11H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z"/></g></g>',
        "minus-square": '<g data-name="Layer 2"><g data-name="minus-square"><rect width="24" height="24" opacity="0"/><path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm-3 10H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z"/></g></g>',
        minus: '<g data-name="Layer 2"><g data-name="minus"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M19 13H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2z"/></g></g>',
        monitor: '<g data-name="Layer 2"><g data-name="monitor"><rect width="24" height="24" opacity="0"/><path d="M19 3H5a3 3 0 0 0-3 3v5h20V6a3 3 0 0 0-3-3z"/><path d="M2 14a3 3 0 0 0 3 3h6v2H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-4v-2h6a3 3 0 0 0 3-3v-1H2z"/></g></g>',
        moon: '<g data-name="Layer 2"><g data-name="moon"><rect width="24" height="24" opacity="0"/><path d="M12.3 22h-.1a10.31 10.31 0 0 1-7.34-3.15 10.46 10.46 0 0 1-.26-14 10.13 10.13 0 0 1 4-2.74 1 1 0 0 1 1.06.22 1 1 0 0 1 .24 1 8.4 8.4 0 0 0 1.94 8.81 8.47 8.47 0 0 0 8.83 1.94 1 1 0 0 1 1.27 1.29A10.16 10.16 0 0 1 19.6 19a10.28 10.28 0 0 1-7.3 3z"/></g></g>',
        "more-horizontal": '<g data-name="Layer 2"><g data-name="more-horizotnal"><rect width="24" height="24" opacity="0"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/><circle cx="5" cy="12" r="2"/></g></g>',
        "more-vertical": '<g data-name="Layer 2"><g data-name="more-vertical"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="5" r="2"/><circle cx="12" cy="19" r="2"/></g></g>',
        move: '<g data-name="Layer 2"><g data-name="move"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M21.71 11.31l-3-3a1 1 0 0 0-1.42 1.42L18.58 11H13V5.41l1.29 1.3A1 1 0 0 0 15 7a1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.42l-3-3A1 1 0 0 0 12 2a1 1 0 0 0-.7.29l-3 3a1 1 0 0 0 1.41 1.42L11 5.42V11H5.41l1.3-1.29a1 1 0 0 0-1.42-1.42l-3 3A1 1 0 0 0 2 12a1 1 0 0 0 .29.71l3 3A1 1 0 0 0 6 16a1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.42L5.42 13H11v5.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 22a1 1 0 0 0 .7-.29l3-3a1 1 0 0 0-1.42-1.42L13 18.58V13h5.59l-1.3 1.29a1 1 0 0 0 0 1.42A1 1 0 0 0 18 16a1 1 0 0 0 .71-.29l3-3A1 1 0 0 0 22 12a1 1 0 0 0-.29-.69z"/></g></g>',
        music: '<g data-name="Layer 2"><g data-name="music"><rect width="24" height="24" opacity="0"/><path d="M19 15V4a1 1 0 0 0-.38-.78 1 1 0 0 0-.84-.2l-9 2A1 1 0 0 0 8 6v8.34a3.49 3.49 0 1 0 2 3.18 4.36 4.36 0 0 0 0-.52V6.8l7-1.55v7.09a3.49 3.49 0 1 0 2 3.17 4.57 4.57 0 0 0 0-.51z"/></g></g>',
        "navigation-2": '<g data-name="Layer 2"><g data-name="navigation-2"><rect width="24" height="24" opacity="0"/><path d="M13.67 22h-.06a1 1 0 0 1-.92-.8l-1.54-7.57a1 1 0 0 0-.78-.78L2.8 11.31a1 1 0 0 1-.12-1.93l16-5.33A1 1 0 0 1 20 5.32l-5.33 16a1 1 0 0 1-1 .68z"/></g></g>',
        navigation: '<g data-name="Layer 2"><g data-name="navigation"><rect width="24" height="24" opacity="0"/><path d="M20 20a.94.94 0 0 1-.55-.17l-6.9-4.56a1 1 0 0 0-1.1 0l-6.9 4.56a1 1 0 0 1-1.44-1.28l8-16a1 1 0 0 1 1.78 0l8 16a1 1 0 0 1-.23 1.2A1 1 0 0 1 20 20z"/></g></g>',
        npm: '<g data-name="Layer 2"><g data-name="npm"><rect width="24" height="24" opacity="0"/><path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h7V11h4v10h1a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z"/></g></g>',
        "options-2": '<g data-name="Layer 2"><g data-name="options-2"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M19 9a3 3 0 0 0-2.82 2H3a1 1 0 0 0 0 2h13.18A3 3 0 1 0 19 9z"/><path d="M3 7h1.18a3 3 0 0 0 5.64 0H21a1 1 0 0 0 0-2H9.82a3 3 0 0 0-5.64 0H3a1 1 0 0 0 0 2z"/><path d="M21 17h-7.18a3 3 0 0 0-5.64 0H3a1 1 0 0 0 0 2h5.18a3 3 0 0 0 5.64 0H21a1 1 0 0 0 0-2z"/></g></g>',
        options: '<g data-name="Layer 2"><g data-name="options"><rect width="24" height="24" opacity="0"/><path d="M7 14.18V3a1 1 0 0 0-2 0v11.18a3 3 0 0 0 0 5.64V21a1 1 0 0 0 2 0v-1.18a3 3 0 0 0 0-5.64z"/><path d="M21 13a3 3 0 0 0-2-2.82V3a1 1 0 0 0-2 0v7.18a3 3 0 0 0 0 5.64V21a1 1 0 0 0 2 0v-5.18A3 3 0 0 0 21 13z"/><path d="M15 5a3 3 0 1 0-4 2.82V21a1 1 0 0 0 2 0V7.82A3 3 0 0 0 15 5z"/></g></g>',
        pantone: '<g data-name="Layer 2"><g data-name="pantone"><rect width="24" height="24" opacity="0"/><path d="M20 13.18h-2.7l-1.86 2L11.88 19l-1.41 1.52L10 21h10a1 1 0 0 0 1-1v-5.82a1 1 0 0 0-1-1z"/><path d="M18.19 9.3l-4.14-3.86a.89.89 0 0 0-.71-.26 1 1 0 0 0-.7.31l-.82.89v10.71a5.23 5.23 0 0 1-.06.57l6.48-6.95a1 1 0 0 0-.05-1.41z"/><path d="M10.82 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v13.09a3.91 3.91 0 0 0 7.82 0zm-2 13.09a1.91 1.91 0 0 1-3.82 0V15h3.82zm0-4.09H5v-3h3.82zm0-5H5V5h3.82z"/></g></g>',
        "paper-plane": '<g data-name="Layer 2"><g data-name="paper-plane"><rect width="24" height="24" opacity="0"/><path d="M21 4a1.31 1.31 0 0 0-.06-.27v-.09a1 1 0 0 0-.2-.3 1 1 0 0 0-.29-.19h-.09a.86.86 0 0 0-.31-.15H20a1 1 0 0 0-.3 0l-18 6a1 1 0 0 0 0 1.9l8.53 2.84 2.84 8.53a1 1 0 0 0 1.9 0l6-18A1 1 0 0 0 21 4zm-4.7 2.29l-5.57 5.57L5.16 10zM14 18.84l-1.86-5.57 5.57-5.57z"/></g></g>',
        "pause-circle": '<g data-name="Layer 2"><g data-name="pause-circle"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-2 13a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0zm6 0a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0z"/></g></g>',
        people: '<g data-name="Layer 2"><g data-name="people"><rect width="24" height="24" opacity="0"/><path d="M9 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z"/><path d="M17 13a3 3 0 1 0-3-3 3 3 0 0 0 3 3z"/><path d="M21 20a1 1 0 0 0 1-1 5 5 0 0 0-8.06-3.95A7 7 0 0 0 2 20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1"/></g></g>',
        percent: '<g data-name="Layer 2"><g data-name="percent"><rect width="24" height="24" opacity="0"/><path d="M8 11a3.5 3.5 0 1 0-3.5-3.5A3.5 3.5 0 0 0 8 11zm0-5a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 8 6z"/><path d="M16 14a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 16 14zm0 5a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 16 19z"/><path d="M19.74 4.26a.89.89 0 0 0-1.26 0L4.26 18.48a.91.91 0 0 0-.26.63.89.89 0 0 0 1.52.63L19.74 5.52a.89.89 0 0 0 0-1.26z"/></g></g>',
        "person-add": '<g data-name="Layer 2"><g data-name="person-add"><rect width="24" height="24" opacity="0"/><path d="M21 6h-1V5a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0V8h1a1 1 0 0 0 0-2z"/><path d="M10 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z"/><path d="M16 21a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1"/></g></g>',
        "person-delete": '<g data-name="Layer 2"><g data-name="person-delete"><rect width="24" height="24" opacity="0"/><path d="M20.47 7.5l.73-.73a1 1 0 0 0-1.47-1.47L19 6l-.73-.73a1 1 0 0 0-1.47 1.5l.73.73-.73.73a1 1 0 0 0 1.47 1.47L19 9l.73.73a1 1 0 0 0 1.47-1.5z"/><path d="M10 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z"/><path d="M16 21a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1z"/></g></g>',
        "person-done": '<g data-name="Layer 2"><g data-name="person-done"><rect width="24" height="24" opacity="0"/><path d="M21.66 4.25a1 1 0 0 0-1.41.09l-1.87 2.15-.63-.71a1 1 0 0 0-1.5 1.33l1.39 1.56a1 1 0 0 0 .75.33 1 1 0 0 0 .74-.34l2.61-3a1 1 0 0 0-.08-1.41z"/><path d="M10 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z"/><path d="M16 21a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1"/></g></g>',
        "person-remove": '<g data-name="Layer 2"><g data-name="person-remove"><rect width="24" height="24" opacity="0"/><path d="M21 6h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z"/><path d="M10 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z"/><path d="M16 21a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1"/></g></g>',
        person: '<g data-name="Layer 2"><g data-name="person"><rect width="24" height="24" opacity="0"/><path d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z"/><path d="M18 21a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1z"/></g></g>',
        "phone-call": '<g data-name="Layer 2"><g data-name="phone-call"><rect width="24" height="24" opacity="0"/><path d="M13 8a3 3 0 0 1 3 3 1 1 0 0 0 2 0 5 5 0 0 0-5-5 1 1 0 0 0 0 2z"/><path d="M13 4a7 7 0 0 1 7 7 1 1 0 0 0 2 0 9 9 0 0 0-9-9 1 1 0 0 0 0 2z"/><path d="M21.75 15.91a1 1 0 0 0-.72-.65l-6-1.37a1 1 0 0 0-.92.26c-.14.13-.15.14-.8 1.38a9.91 9.91 0 0 1-4.87-4.89C9.71 10 9.72 10 9.85 9.85a1 1 0 0 0 .26-.92L8.74 3a1 1 0 0 0-.65-.72 3.79 3.79 0 0 0-.72-.18A3.94 3.94 0 0 0 6.6 2 4.6 4.6 0 0 0 2 6.6 15.42 15.42 0 0 0 17.4 22a4.6 4.6 0 0 0 4.6-4.6 4.77 4.77 0 0 0-.06-.76 4.34 4.34 0 0 0-.19-.73z"/></g></g>',
        "phone-missed": '<g data-name="Layer 2"><g data-name="phone-missed"><rect width="24" height="24" opacity="0"/><path d="M21.94 16.64a4.34 4.34 0 0 0-.19-.73 1 1 0 0 0-.72-.65l-6-1.37a1 1 0 0 0-.92.26c-.14.13-.15.14-.8 1.38a10 10 0 0 1-4.88-4.89C9.71 10 9.72 10 9.85 9.85a1 1 0 0 0 .26-.92L8.74 3a1 1 0 0 0-.65-.72 3.79 3.79 0 0 0-.72-.18A3.94 3.94 0 0 0 6.6 2 4.6 4.6 0 0 0 2 6.6 15.42 15.42 0 0 0 17.4 22a4.6 4.6 0 0 0 4.6-4.6 4.77 4.77 0 0 0-.06-.76z"/><path d="M15.8 8.7a1.05 1.05 0 0 0 1.47 0L18 8l.73.73a1 1 0 0 0 1.47-1.5l-.73-.73.73-.73a1 1 0 0 0-1.47-1.47L18 5l-.73-.73a1 1 0 0 0-1.47 1.5l.73.73-.73.73a1.05 1.05 0 0 0 0 1.47z"/></g></g>',
        "phone-off": '<g data-name="Layer 2"><g data-name="phone-off"><rect width="24" height="24" opacity="0"/><path d="M9.27 12.06a10.37 10.37 0 0 1-.8-1.42C9.71 10 9.72 10 9.85 9.85a1 1 0 0 0 .26-.92L8.74 3a1 1 0 0 0-.65-.72 3.79 3.79 0 0 0-.72-.18A3.94 3.94 0 0 0 6.6 2 4.6 4.6 0 0 0 2 6.6a15.33 15.33 0 0 0 3.27 9.46z"/><path d="M21.94 16.64a4.34 4.34 0 0 0-.19-.73 1 1 0 0 0-.72-.65l-6-1.37a1 1 0 0 0-.92.26c-.14.13-.15.14-.8 1.38a10.88 10.88 0 0 1-1.41-.8l-4 4A15.33 15.33 0 0 0 17.4 22a4.6 4.6 0 0 0 4.6-4.6 4.77 4.77 0 0 0-.06-.76z"/><path d="M19.74 4.26a.89.89 0 0 0-1.26 0L4.26 18.48a.91.91 0 0 0-.26.63.89.89 0 0 0 1.52.63L19.74 5.52a.89.89 0 0 0 0-1.26z"/></g></g>',
        phone: '<g data-name="Layer 2"><g data-name="phone"><rect width="24" height="24" opacity="0"/><path d="M17.4 22A15.42 15.42 0 0 1 2 6.6 4.6 4.6 0 0 1 6.6 2a3.94 3.94 0 0 1 .77.07 3.79 3.79 0 0 1 .72.18 1 1 0 0 1 .65.75l1.37 6a1 1 0 0 1-.26.92c-.13.14-.14.15-1.37.79a9.91 9.91 0 0 0 4.87 4.89c.65-1.24.66-1.25.8-1.38a1 1 0 0 1 .92-.26l6 1.37a1 1 0 0 1 .72.65 4.34 4.34 0 0 1 .19.73 4.77 4.77 0 0 1 .06.76A4.6 4.6 0 0 1 17.4 22z"/></g></g>',
        "pie-chart-2": '<g data-name="Layer 2"><g data-name="pie-chart-2"><rect width="24" height="24" opacity="0"/><path d="M14.5 10.33h6.67A.83.83 0 0 0 22 9.5 7.5 7.5 0 0 0 14.5 2a.83.83 0 0 0-.83.83V9.5a.83.83 0 0 0 .83.83zm.83-6.6a5.83 5.83 0 0 1 4.94 4.94h-4.94z"/><path d="M21.08 12h-8.15a.91.91 0 0 1-.91-.91V2.92A.92.92 0 0 0 11 2a10 10 0 1 0 11 11 .92.92 0 0 0-.92-1z"/></g></g>',
        "pie-chart": '<g data-name="Layer 2"><g data-name="pie-chart"><rect width="24" height="24" opacity="0"/><path d="M14.5 10.33h6.67A.83.83 0 0 0 22 9.5 7.5 7.5 0 0 0 14.5 2a.83.83 0 0 0-.83.83V9.5a.83.83 0 0 0 .83.83z"/><path d="M21.08 12h-8.15a.91.91 0 0 1-.91-.91V2.92A.92.92 0 0 0 11 2a10 10 0 1 0 11 11 .92.92 0 0 0-.92-1z"/></g></g>',
        pin: '<g data-name="Layer 2"><g data-name="pin"><rect width="24" height="24" opacity="0"/><circle cx="12" cy="9.5" r="1.5"/><path d="M12 2a8 8 0 0 0-8 7.92c0 5.48 7.05 11.58 7.35 11.84a1 1 0 0 0 1.3 0C13 21.5 20 15.4 20 9.92A8 8 0 0 0 12 2zm0 11a3.5 3.5 0 1 1 3.5-3.5A3.5 3.5 0 0 1 12 13z"/></g></g>',
        "play-circle": '<g data-name="Layer 2"><g data-name="play-circle"><rect width="24" height="24" opacity="0"/><polygon points="11.5 14.6 14.31 12 11.5 9.4 11.5 14.6"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4 11.18l-3.64 3.37a1.74 1.74 0 0 1-1.16.45 1.68 1.68 0 0 1-.69-.15 1.6 1.6 0 0 1-1-1.48V8.63a1.6 1.6 0 0 1 1-1.48 1.7 1.7 0 0 1 1.85.3L16 10.82a1.6 1.6 0 0 1 0 2.36z"/></g></g>',
        "plus-circle": '<g data-name="Layer 2"><g data-name="plus-circle"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3 11h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2z"/></g></g>',
        "plus-square": '<g data-name="Layer 2"><g data-name="plus-square"><rect width="24" height="24" opacity="0"/><path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm-3 10h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2z"/></g></g>',
        plus: '<g data-name="Layer 2"><g data-name="plus"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z"/></g></g>',
        power: '<g data-name="Layer 2"><g data-name="power"><rect width="24" height="24" opacity="0"/><path d="M12 13a1 1 0 0 0 1-1V2a1 1 0 0 0-2 0v10a1 1 0 0 0 1 1z"/><path d="M16.59 3.11a1 1 0 0 0-.92 1.78 8 8 0 1 1-7.34 0 1 1 0 1 0-.92-1.78 10 10 0 1 0 9.18 0z"/></g></g>',
        pricetags: '<g data-name="Layer 2"><g data-name="pricetags"><rect width="24" height="24" opacity="0"/><path d="M21.47 11.58l-6.42-6.41a1 1 0 0 0-.61-.29L5.09 4a1 1 0 0 0-.8.29 1 1 0 0 0-.29.8l.88 9.35a1 1 0 0 0 .29.61l6.41 6.42a1.84 1.84 0 0 0 1.29.53 1.82 1.82 0 0 0 1.28-.53l7.32-7.32a1.82 1.82 0 0 0 0-2.57zm-9.91 0a1.5 1.5 0 1 1 0-2.12 1.49 1.49 0 0 1 0 2.1z"/></g></g>',
        printer: '<g data-name="Layer 2"><g data-name="printer"><rect width="24" height="24" opacity="0"/><path d="M19.36 7H18V5a1.92 1.92 0 0 0-1.83-2H7.83A1.92 1.92 0 0 0 6 5v2H4.64A2.66 2.66 0 0 0 2 9.67v6.66A2.66 2.66 0 0 0 4.64 19h.86a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2h.86A2.66 2.66 0 0 0 22 16.33V9.67A2.66 2.66 0 0 0 19.36 7zM8 5h8v2H8zm-.5 14v-4h9v4z"/></g></g>',
        "question-mark-circle": '<g data-name="Layer 2"><g data-name="menu-arrow-circle"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 16a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm1-5.16V14a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.5-1.5 1 1 0 0 1-2 0 3.5 3.5 0 1 1 4.5 3.34z"/></g></g>',
        "question-mark": '<g data-name="Layer 2"><g data-name="menu-arrow"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"/><circle cx="12" cy="19" r="1"/></g></g>',
        "radio-button-off": '<g data-name="Layer 2"><g data-name="radio-button-off"><rect width="24" height="24" opacity="0"/><path d="M12 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10zm0-18a8 8 0 1 0 8 8 8 8 0 0 0-8-8z"/></g></g>',
        "radio-button-on": '<g data-name="Layer 2"><g data-name="radio-button-on"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5z"/></g></g>',
        radio: '<g data-name="Layer 2"><g data-name="radio"><rect width="24" height="24" opacity="0"/><path d="M12 8a3 3 0 0 0-1 5.83 1 1 0 0 0 0 .17v6a1 1 0 0 0 2 0v-6a1 1 0 0 0 0-.17A3 3 0 0 0 12 8z"/><path d="M3.5 11a6.87 6.87 0 0 1 2.64-5.23 1 1 0 1 0-1.28-1.54A8.84 8.84 0 0 0 1.5 11a8.84 8.84 0 0 0 3.36 6.77 1 1 0 1 0 1.28-1.54A6.87 6.87 0 0 1 3.5 11z"/><path d="M16.64 6.24a1 1 0 0 0-1.28 1.52A4.28 4.28 0 0 1 17 11a4.28 4.28 0 0 1-1.64 3.24A1 1 0 0 0 16 16a1 1 0 0 0 .64-.24A6.2 6.2 0 0 0 19 11a6.2 6.2 0 0 0-2.36-4.76z"/><path d="M8.76 6.36a1 1 0 0 0-1.4-.12A6.2 6.2 0 0 0 5 11a6.2 6.2 0 0 0 2.36 4.76 1 1 0 0 0 1.4-.12 1 1 0 0 0-.12-1.4A4.28 4.28 0 0 1 7 11a4.28 4.28 0 0 1 1.64-3.24 1 1 0 0 0 .12-1.4z"/><path d="M19.14 4.23a1 1 0 1 0-1.28 1.54A6.87 6.87 0 0 1 20.5 11a6.87 6.87 0 0 1-2.64 5.23 1 1 0 0 0 1.28 1.54A8.84 8.84 0 0 0 22.5 11a8.84 8.84 0 0 0-3.36-6.77z"/></g></g>',
        recording: '<g data-name="Layer 2"><g data-name="recording"><rect width="24" height="24" opacity="0"/><path d="M18 8a4 4 0 0 0-4 4 3.91 3.91 0 0 0 .56 2H9.44a3.91 3.91 0 0 0 .56-2 4 4 0 1 0-4 4h12a4 4 0 0 0 0-8z"/></g></g>',
        refresh: '<g data-name="Layer 2"><g data-name="refresh"><rect width="24" height="24" opacity="0"/><path d="M20.3 13.43a1 1 0 0 0-1.25.65A7.14 7.14 0 0 1 12.18 19 7.1 7.1 0 0 1 5 12a7.1 7.1 0 0 1 7.18-7 7.26 7.26 0 0 1 4.65 1.67l-2.17-.36a1 1 0 0 0-1.15.83 1 1 0 0 0 .83 1.15l4.24.7h.17a1 1 0 0 0 .34-.06.33.33 0 0 0 .1-.06.78.78 0 0 0 .2-.11l.09-.11c0-.05.09-.09.13-.15s0-.1.05-.14a1.34 1.34 0 0 0 .07-.18l.75-4a1 1 0 0 0-2-.38l-.27 1.45A9.21 9.21 0 0 0 12.18 3 9.1 9.1 0 0 0 3 12a9.1 9.1 0 0 0 9.18 9A9.12 9.12 0 0 0 21 14.68a1 1 0 0 0-.7-1.25z"/></g></g>',
        repeat: '<g data-name="Layer 2"><g data-name="repeat"><rect width="24" height="24" opacity="0"/><path d="M17.91 5h-12l1.3-1.29a1 1 0 0 0-1.42-1.42l-3 3a1 1 0 0 0 0 1.42l3 3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L5.91 7h12a1.56 1.56 0 0 1 1.59 1.53V11a1 1 0 0 0 2 0V8.53A3.56 3.56 0 0 0 17.91 5z"/><path d="M18.21 14.29a1 1 0 0 0-1.42 1.42l1.3 1.29h-12a1.56 1.56 0 0 1-1.59-1.53V13a1 1 0 0 0-2 0v2.47A3.56 3.56 0 0 0 6.09 19h12l-1.3 1.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 0-1.42z"/></g></g>',
        "rewind-left": '<g data-name="Layer 2"><g data-name="rewind-left"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M18.45 6.2a2.1 2.1 0 0 0-2.21.26l-4.74 3.92V7.79a1.76 1.76 0 0 0-1.05-1.59 2.1 2.1 0 0 0-2.21.26l-5.1 4.21a1.7 1.7 0 0 0 0 2.66l5.1 4.21a2.06 2.06 0 0 0 1.3.46 2.23 2.23 0 0 0 .91-.2 1.76 1.76 0 0 0 1.05-1.59v-2.59l4.74 3.92a2.06 2.06 0 0 0 1.3.46 2.23 2.23 0 0 0 .91-.2 1.76 1.76 0 0 0 1.05-1.59V7.79a1.76 1.76 0 0 0-1.05-1.59z"/></g></g>',
        "rewind-right": '<g data-name="Layer 2"><g data-name="rewind-right"><rect width="24" height="24" opacity="0"/><path d="M20.86 10.67l-5.1-4.21a2.1 2.1 0 0 0-2.21-.26 1.76 1.76 0 0 0-1.05 1.59v2.59L7.76 6.46a2.1 2.1 0 0 0-2.21-.26 1.76 1.76 0 0 0-1 1.59v8.42a1.76 1.76 0 0 0 1 1.59 2.23 2.23 0 0 0 .91.2 2.06 2.06 0 0 0 1.3-.46l4.74-3.92v2.59a1.76 1.76 0 0 0 1.05 1.59 2.23 2.23 0 0 0 .91.2 2.06 2.06 0 0 0 1.3-.46l5.1-4.21a1.7 1.7 0 0 0 0-2.66z"/></g></g>',
        save: '<g data-name="Layer 2"><g data-name="save"><rect width="24" height="24" opacity="0"/><rect x="10" y="17" width="4" height="4"/><path d="M20.12 8.71l-4.83-4.83A3 3 0 0 0 13.17 3H10v6h5a1 1 0 0 1 0 2H9a1 1 0 0 1-1-1V3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h2v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4h2a3 3 0 0 0 3-3v-7.17a3 3 0 0 0-.88-2.12z"/></g></g>',
        scissors: '<g data-name="Layer 2"><g data-name="scissors"><rect width="24" height="24" opacity="0"/><path d="M20.21 5.71a1 1 0 1 0-1.42-1.42l-6.28 6.31-3.3-3.31A3 3 0 0 0 9.5 6a3 3 0 1 0-3 3 3 3 0 0 0 1.29-.3L11.1 12l-3.29 3.3A3 3 0 0 0 6.5 15a3 3 0 1 0 3 3 3 3 0 0 0-.29-1.26zM6.5 7a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm0 12a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/><path d="M15.21 13.29a1 1 0 0 0-1.42 1.42l5 5a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g>',
        search: '<g data-name="Layer 2"><g data-name="search"><rect width="24" height="24" opacity="0"/><path d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"/></g></g>',
        "settings-2": '<g data-name="Layer 2"><g data-name="settings-2"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><circle cx="12" cy="12" r="1.5"/><path d="M20.32 9.37h-1.09c-.14 0-.24-.11-.3-.26a.34.34 0 0 1 0-.37l.81-.74a1.63 1.63 0 0 0 .5-1.18 1.67 1.67 0 0 0-.5-1.19L18.4 4.26a1.67 1.67 0 0 0-2.37 0l-.77.74a.38.38 0 0 1-.41 0 .34.34 0 0 1-.22-.29V3.68A1.68 1.68 0 0 0 13 2h-1.94a1.69 1.69 0 0 0-1.69 1.68v1.09c0 .14-.11.24-.26.3a.34.34 0 0 1-.37 0L8 4.26a1.72 1.72 0 0 0-1.19-.5 1.65 1.65 0 0 0-1.18.5L4.26 5.6a1.67 1.67 0 0 0 0 2.4l.74.74a.38.38 0 0 1 0 .41.34.34 0 0 1-.29.22H3.68A1.68 1.68 0 0 0 2 11.05v1.89a1.69 1.69 0 0 0 1.68 1.69h1.09c.14 0 .24.11.3.26a.34.34 0 0 1 0 .37l-.81.74a1.72 1.72 0 0 0-.5 1.19 1.66 1.66 0 0 0 .5 1.19l1.34 1.36a1.67 1.67 0 0 0 2.37 0l.77-.74a.38.38 0 0 1 .41 0 .34.34 0 0 1 .22.29v1.09A1.68 1.68 0 0 0 11.05 22h1.89a1.69 1.69 0 0 0 1.69-1.68v-1.09c0-.14.11-.24.26-.3a.34.34 0 0 1 .37 0l.76.77a1.72 1.72 0 0 0 1.19.5 1.65 1.65 0 0 0 1.18-.5l1.34-1.34a1.67 1.67 0 0 0 0-2.37l-.73-.73a.34.34 0 0 1 0-.37.34.34 0 0 1 .29-.22h1.09A1.68 1.68 0 0 0 22 13v-1.94a1.69 1.69 0 0 0-1.68-1.69zM12 15.5a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5z"/></g></g>',
        settings: '<g data-name="Layer 2"><g data-name="settings"><rect width="24" height="24" opacity="0"/><circle cx="12" cy="12" r="1.5"/><path d="M21.89 10.32L21.1 7.8a2.26 2.26 0 0 0-2.88-1.51l-.34.11a1.74 1.74 0 0 1-1.59-.26l-.11-.08a1.76 1.76 0 0 1-.69-1.43v-.28a2.37 2.37 0 0 0-.68-1.68 2.26 2.26 0 0 0-1.6-.67h-2.55a2.32 2.32 0 0 0-2.29 2.33v.24a1.94 1.94 0 0 1-.73 1.51l-.13.1a1.93 1.93 0 0 1-1.78.29 2.14 2.14 0 0 0-1.68.12 2.18 2.18 0 0 0-1.12 1.33l-.82 2.6a2.34 2.34 0 0 0 1.48 2.94h.16a1.83 1.83 0 0 1 1.12 1.22l.06.16a2.06 2.06 0 0 1-.23 1.86 2.37 2.37 0 0 0 .49 3.3l2.07 1.57a2.25 2.25 0 0 0 1.35.43A2 2 0 0 0 9 22a2.25 2.25 0 0 0 1.47-1l.23-.33a1.8 1.8 0 0 1 1.43-.77 1.75 1.75 0 0 1 1.5.78l.12.17a2.24 2.24 0 0 0 3.22.53L19 19.86a2.38 2.38 0 0 0 .5-3.23l-.26-.38A2 2 0 0 1 19 14.6a1.89 1.89 0 0 1 1.21-1.28l.2-.07a2.36 2.36 0 0 0 1.48-2.93zM12 15.5a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5z"/></g></g>',
        shake: '<g data-name="Layer 2"><g data-name="shake"><rect width="24" height="24" opacity="0"/><path d="M5.5 18a1 1 0 0 1-.64-.24A8.81 8.81 0 0 1 1.5 11a8.81 8.81 0 0 1 3.36-6.76 1 1 0 1 1 1.28 1.52A6.9 6.9 0 0 0 3.5 11a6.9 6.9 0 0 0 2.64 5.24 1 1 0 0 1 .13 1.4 1 1 0 0 1-.77.36z"/><path d="M12 7a4.09 4.09 0 0 1 1 .14V3a1 1 0 0 0-2 0v4.14A4.09 4.09 0 0 1 12 7z"/><path d="M12 15a4.09 4.09 0 0 1-1-.14V20a1 1 0 0 0 2 0v-5.14a4.09 4.09 0 0 1-1 .14z"/><path d="M16 16a1 1 0 0 1-.77-.36 1 1 0 0 1 .13-1.4A4.28 4.28 0 0 0 17 11a4.28 4.28 0 0 0-1.64-3.24 1 1 0 1 1 1.28-1.52A6.2 6.2 0 0 1 19 11a6.2 6.2 0 0 1-2.36 4.76A1 1 0 0 1 16 16z"/><path d="M8 16a1 1 0 0 1-.64-.24A6.2 6.2 0 0 1 5 11a6.2 6.2 0 0 1 2.36-4.76 1 1 0 1 1 1.28 1.52A4.28 4.28 0 0 0 7 11a4.28 4.28 0 0 0 1.64 3.24 1 1 0 0 1 .13 1.4A1 1 0 0 1 8 16z"/><path d="M18.5 18a1 1 0 0 1-.77-.36 1 1 0 0 1 .13-1.4A6.9 6.9 0 0 0 20.5 11a6.9 6.9 0 0 0-2.64-5.24 1 1 0 1 1 1.28-1.52A8.81 8.81 0 0 1 22.5 11a8.81 8.81 0 0 1-3.36 6.76 1 1 0 0 1-.64.24z"/><path d="M12 12a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm0-1zm0 0zm0 0zm0 0zm0 0zm0 0zm0 0z"/></g></g>',
        share: '<g data-name="Layer 2"><g data-name="share"><rect width="24" height="24" opacity="0"/><path d="M18 15a3 3 0 0 0-2.1.86L8 12.34V12v-.33l7.9-3.53A3 3 0 1 0 15 6v.34L7.1 9.86a3 3 0 1 0 0 4.28l7.9 3.53V18a3 3 0 1 0 3-3z"/></g></g>',
        "shield-off": '<g data-name="Layer 2"><g data-name="shield-off"><rect width="24" height="24" opacity="0"/><path d="M3.73 6.56A2 2 0 0 0 3 8.09v.14a15.17 15.17 0 0 0 7.72 13.2l.3.17a2 2 0 0 0 2 0l.3-.17a15.22 15.22 0 0 0 3-2.27z"/><path d="M18.84 16A15.08 15.08 0 0 0 21 8.23v-.14a2 2 0 0 0-1-1.75L13 2.4a2 2 0 0 0-2 0L7.32 4.49z"/><path d="M4.71 3.29a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g>',
        shield: '<g data-name="Layer 2"><g data-name="shield"><rect width="24" height="24" opacity="0"/><path d="M12 21.85a2 2 0 0 1-1-.25l-.3-.17A15.17 15.17 0 0 1 3 8.23v-.14a2 2 0 0 1 1-1.75l7-3.94a2 2 0 0 1 2 0l7 3.94a2 2 0 0 1 1 1.75v.14a15.17 15.17 0 0 1-7.72 13.2l-.3.17a2 2 0 0 1-.98.25z"/></g></g>',
        "shopping-bag": '<g data-name="Layer 2"><g data-name="shopping-bag"><rect width="24" height="24" opacity="0"/><path d="M20.12 6.71l-2.83-2.83A3 3 0 0 0 15.17 3H8.83a3 3 0 0 0-2.12.88L3.88 6.71A3 3 0 0 0 3 8.83V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8.83a3 3 0 0 0-.88-2.12zM12 16a4 4 0 0 1-4-4 1 1 0 0 1 2 0 2 2 0 0 0 4 0 1 1 0 0 1 2 0 4 4 0 0 1-4 4zM6.41 7l1.71-1.71A1.05 1.05 0 0 1 8.83 5h6.34a1.05 1.05 0 0 1 .71.29L17.59 7z"/></g></g>',
        "shopping-cart": '<g data-name="Layer 2"><g data-name="shopping-cart"><rect width="24" height="24" opacity="0"/><path d="M21.08 7a2 2 0 0 0-1.7-1H6.58L6 3.74A1 1 0 0 0 5 3H3a1 1 0 0 0 0 2h1.24L7 15.26A1 1 0 0 0 8 16h9a1 1 0 0 0 .89-.55l3.28-6.56A2 2 0 0 0 21.08 7z"/><circle cx="7.5" cy="19.5" r="1.5"/><circle cx="17.5" cy="19.5" r="1.5"/></g></g>',
        "shuffle-2": '<g data-name="Layer 2"><g data-name="shuffle-2"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M18.71 14.29a1 1 0 0 0-1.42 1.42l.29.29H16a4 4 0 0 1 0-8h1.59l-.3.29a1 1 0 0 0 0 1.42A1 1 0 0 0 18 10a1 1 0 0 0 .71-.29l2-2A1 1 0 0 0 21 7a1 1 0 0 0-.29-.71l-2-2a1 1 0 0 0-1.42 1.42l.29.29H16a6 6 0 0 0-5 2.69A6 6 0 0 0 6 6H4a1 1 0 0 0 0 2h2a4 4 0 0 1 0 8H4a1 1 0 0 0 0 2h2a6 6 0 0 0 5-2.69A6 6 0 0 0 16 18h1.59l-.3.29a1 1 0 0 0 0 1.42A1 1 0 0 0 18 20a1 1 0 0 0 .71-.29l2-2A1 1 0 0 0 21 17a1 1 0 0 0-.29-.71z"/></g></g>',
        shuffle: '<g data-name="Layer 2"><g data-name="shuffle"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M18 9.31a1 1 0 0 0 1 1 1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-4.3a1 1 0 0 0-1 1 1 1 0 0 0 1 1h1.89L12 10.59 6.16 4.76a1 1 0 0 0-1.41 1.41L10.58 12l-6.29 6.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L18 7.42z"/><path d="M19 13.68a1 1 0 0 0-1 1v1.91l-2.78-2.79a1 1 0 0 0-1.42 1.42L16.57 18h-1.88a1 1 0 0 0 0 2H19a1 1 0 0 0 1-1.11v-4.21a1 1 0 0 0-1-1z"/></g></g>',
        "skip-back": '<g data-name="Layer 2"><g data-name="skip-back"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M16.45 6.2a2.1 2.1 0 0 0-2.21.26l-5.1 4.21-.14.15V7a1 1 0 0 0-2 0v10a1 1 0 0 0 2 0v-3.82l.14.15 5.1 4.21a2.06 2.06 0 0 0 1.3.46 2.23 2.23 0 0 0 .91-.2 1.76 1.76 0 0 0 1.05-1.59V7.79a1.76 1.76 0 0 0-1.05-1.59z"/></g></g>',
        "skip-forward": '<g data-name="Layer 2"><g data-name="skip-forward"><rect width="24" height="24" opacity="0"/><path d="M16 6a1 1 0 0 0-1 1v3.82l-.14-.15-5.1-4.21a2.1 2.1 0 0 0-2.21-.26 1.76 1.76 0 0 0-1 1.59v8.42a1.76 1.76 0 0 0 1 1.59 2.23 2.23 0 0 0 .91.2 2.06 2.06 0 0 0 1.3-.46l5.1-4.21.14-.15V17a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1z"/></g></g>',
        slash: '<g data-name="Layer 2"><g data-name="slash"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm8 10a7.92 7.92 0 0 1-1.69 4.9L7.1 5.69A7.92 7.92 0 0 1 12 4a8 8 0 0 1 8 8zM4 12a7.92 7.92 0 0 1 1.69-4.9L16.9 18.31A7.92 7.92 0 0 1 12 20a8 8 0 0 1-8-8z"/></g></g>',
        smartphone: '<g data-name="Layer 2"><g data-name="smartphone"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M17 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm-5 16a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 12 18zm2.5-10h-5a1 1 0 0 1 0-2h5a1 1 0 0 1 0 2z"/></g></g>',
        speaker: '<g data-name="Layer 2"><g data-name="speaker"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><circle cx="12" cy="15.5" r="1.5"/><circle cx="12" cy="8" r="1"/><path d="M17 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm-5 3a3 3 0 1 1-3 3 3 3 0 0 1 3-3zm0 14a3.5 3.5 0 1 1 3.5-3.5A3.5 3.5 0 0 1 12 19z"/></g></g>',
        square: '<g data-name="Layer 2"><g data-name="square"><rect width="24" height="24" opacity="0"/><path d="M18 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3zM6 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"/></g></g>',
        star: '<g data-name="Layer 2"><g data-name="star"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M17.56 21a1 1 0 0 1-.46-.11L12 18.22l-5.1 2.67a1 1 0 0 1-1.45-1.06l1-5.63-4.12-4a1 1 0 0 1-.25-1 1 1 0 0 1 .81-.68l5.7-.83 2.51-5.13a1 1 0 0 1 1.8 0l2.54 5.12 5.7.83a1 1 0 0 1 .81.68 1 1 0 0 1-.25 1l-4.12 4 1 5.63a1 1 0 0 1-.4 1 1 1 0 0 1-.62.18z"/></g></g>',
        "stop-circle": '<g data-name="Layer 2"><g data-name="stop-circle"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4 12.75A1.25 1.25 0 0 1 14.75 16h-5.5A1.25 1.25 0 0 1 8 14.75v-5.5A1.25 1.25 0 0 1 9.25 8h5.5A1.25 1.25 0 0 1 16 9.25z"/><rect x="10" y="10" width="4" height="4"/></g></g>',
        sun: '<g data-name="Layer 2"><g data-name="sun"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M12 6a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1z"/><path d="M21 11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z"/><path d="M6 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1z"/><path d="M6.22 5a1 1 0 0 0-1.39 1.47l1.44 1.39a1 1 0 0 0 .73.28 1 1 0 0 0 .72-.31 1 1 0 0 0 0-1.41z"/><path d="M17 8.14a1 1 0 0 0 .69-.28l1.44-1.39A1 1 0 0 0 17.78 5l-1.44 1.42a1 1 0 0 0 0 1.41 1 1 0 0 0 .66.31z"/><path d="M12 18a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1z"/><path d="M17.73 16.14a1 1 0 0 0-1.39 1.44L17.78 19a1 1 0 0 0 .69.28 1 1 0 0 0 .72-.3 1 1 0 0 0 0-1.42z"/><path d="M6.27 16.14l-1.44 1.39a1 1 0 0 0 0 1.42 1 1 0 0 0 .72.3 1 1 0 0 0 .67-.25l1.44-1.39a1 1 0 0 0-1.39-1.44z"/><path d="M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4z"/></g></g>',
        swap: '<g data-name="Layer 2"><g data-name="swap"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M4 9h13l-1.6 1.2a1 1 0 0 0-.2 1.4 1 1 0 0 0 .8.4 1 1 0 0 0 .6-.2l4-3a1 1 0 0 0 0-1.59l-3.86-3a1 1 0 0 0-1.23 1.58L17.08 7H4a1 1 0 0 0 0 2z"/><path d="M20 16H7l1.6-1.2a1 1 0 0 0-1.2-1.6l-4 3a1 1 0 0 0 0 1.59l3.86 3a1 1 0 0 0 .61.21 1 1 0 0 0 .79-.39 1 1 0 0 0-.17-1.4L6.92 18H20a1 1 0 0 0 0-2z"/></g></g>',
        sync: '<g data-name="Layer 2"><g data-name="sync"><rect width="24" height="24" opacity="0"/><path d="M21.66 10.37a.62.62 0 0 0 .07-.19l.75-4a1 1 0 0 0-2-.36l-.37 2a9.22 9.22 0 0 0-16.58.84 1 1 0 0 0 .55 1.3 1 1 0 0 0 1.31-.55A7.08 7.08 0 0 1 12.07 5a7.17 7.17 0 0 1 6.24 3.58l-1.65-.27a1 1 0 1 0-.32 2l4.25.71h.16a.93.93 0 0 0 .34-.06.33.33 0 0 0 .1-.06.78.78 0 0 0 .2-.11l.08-.1a1.07 1.07 0 0 0 .14-.16.58.58 0 0 0 .05-.16z"/><path d="M19.88 14.07a1 1 0 0 0-1.31.56A7.08 7.08 0 0 1 11.93 19a7.17 7.17 0 0 1-6.24-3.58l1.65.27h.16a1 1 0 0 0 .16-2L3.41 13a.91.91 0 0 0-.33 0H3a1.15 1.15 0 0 0-.32.14 1 1 0 0 0-.18.18l-.09.1a.84.84 0 0 0-.07.19.44.44 0 0 0-.07.17l-.75 4a1 1 0 0 0 .8 1.22h.18a1 1 0 0 0 1-.82l.37-2a9.22 9.22 0 0 0 16.58-.83 1 1 0 0 0-.57-1.28z"/></g></g>',
        text: '<g data-name="Layer 2"><g data-name="text"><rect width="24" height="24" opacity="0"/><path d="M20 4H4a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0V6h6v13H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-2V6h6v2a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1z"/></g></g>',
        "thermometer-minus": '<g data-name="Layer 2"><g data-name="thermometer-minus"><rect width="24" height="24" opacity="0"/><rect x="2" y="5" width="6" height="2" rx="1" ry="1"/><path d="M14 22a5 5 0 0 1-3-9V5a3 3 0 0 1 3-3 3 3 0 0 1 3 3v8a5 5 0 0 1-3 9zm1-12.46V5a.93.93 0 0 0-.29-.69A1 1 0 0 0 14 4a1 1 0 0 0-1 1v4.54z"/></g></g>',
        "thermometer-plus": '<g data-name="Layer 2"><g data-name="thermometer-plus"><rect width="24" height="24" opacity="0"/><rect x="2" y="5" width="6" height="2" rx="1" ry="1"/><rect x="2" y="5" width="6" height="2" rx="1" ry="1" transform="rotate(-90 5 6)"/><path d="M14 22a5 5 0 0 1-3-9V5a3 3 0 0 1 3-3 3 3 0 0 1 3 3v8a5 5 0 0 1-3 9zm1-12.46V5a.93.93 0 0 0-.29-.69A1 1 0 0 0 14 4a1 1 0 0 0-1 1v4.54z"/></g></g>',
        thermometer: '<g data-name="Layer 2"><g data-name="thermometer"><rect width="24" height="24" opacity="0"/><path d="M12 22a5 5 0 0 1-3-9V5a3 3 0 0 1 3-3 3 3 0 0 1 3 3v8a5 5 0 0 1-3 9zm1-12.46V5a.93.93 0 0 0-.29-.69A1 1 0 0 0 12 4a1 1 0 0 0-1 1v4.54z"/></g></g>',
        "toggle-left": '<g data-name="Layer 2"><g data-name="toggle-left"><rect x=".02" y=".02" width="23.97" height="23.97" transform="rotate(179.92 12.002 11.998)" opacity="0"/><path d="M15 5H9a7 7 0 0 0 0 14h6a7 7 0 0 0 0-14zM9 15a3 3 0 1 1 3-3 3 3 0 0 1-3 3z"/><path d="M9 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></g></g>',
        "toggle-right": '<g data-name="Layer 2"><g data-name="toggle-right"><rect width="24" height="24" opacity="0"/><circle cx="15" cy="12" r="1"/><path d="M15 5H9a7 7 0 0 0 0 14h6a7 7 0 0 0 0-14zm0 10a3 3 0 1 1 3-3 3 3 0 0 1-3 3z"/></g></g>',
        "trash-2": '<g data-name="Layer 2"><g data-name="trash-2"><rect width="24" height="24" opacity="0"/><path d="M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 16a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0zm0-11.67c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4zM16 16a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0z"/></g></g>',
        trash: '<g data-name="Layer 2"><g data-name="trash"><rect width="24" height="24" opacity="0"/><path d="M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4z"/></g></g>',
        "trending-down": '<g data-name="Layer 2"><g data-name="trending-down"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M21 12a1 1 0 0 0-2 0v2.3l-4.24-5a1 1 0 0 0-1.27-.21L9.22 11.7 4.77 6.36a1 1 0 1 0-1.54 1.28l5 6a1 1 0 0 0 1.28.22l4.28-2.57 4 4.71H15a1 1 0 0 0 0 2h5a1.1 1.1 0 0 0 .36-.07l.14-.08a1.19 1.19 0 0 0 .15-.09.75.75 0 0 0 .14-.17 1.1 1.1 0 0 0 .09-.14.64.64 0 0 0 .05-.17A.78.78 0 0 0 21 17z"/></g></g>',
        "trending-up": '<g data-name="Layer 2"><g data-name="trending-up"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M21 7a.78.78 0 0 0 0-.21.64.64 0 0 0-.05-.17 1.1 1.1 0 0 0-.09-.14.75.75 0 0 0-.14-.17l-.12-.07a.69.69 0 0 0-.19-.1h-.2A.7.7 0 0 0 20 6h-5a1 1 0 0 0 0 2h2.83l-4 4.71-4.32-2.57a1 1 0 0 0-1.28.22l-5 6a1 1 0 0 0 .13 1.41A1 1 0 0 0 4 18a1 1 0 0 0 .77-.36l4.45-5.34 4.27 2.56a1 1 0 0 0 1.27-.21L19 9.7V12a1 1 0 0 0 2 0V7z"/></g></g>',
        tv: '<g data-name="Layer 2"><g data-name="tv"><rect width="24" height="24" opacity="0"/><path d="M18 6h-3.59l2.3-2.29a1 1 0 1 0-1.42-1.42L12 5.59l-3.29-3.3a1 1 0 1 0-1.42 1.42L9.59 6H6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm1 13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1z"/></g></g>',
        twitter: '<g data-name="Layer 2"><g data-name="twitter"><polyline points="0 0 24 0 24 24 0 24" opacity="0"/><path d="M8.08 20A11.07 11.07 0 0 0 19.52 9 8.09 8.09 0 0 0 21 6.16a.44.44 0 0 0-.62-.51 1.88 1.88 0 0 1-2.16-.38 3.89 3.89 0 0 0-5.58-.17A4.13 4.13 0 0 0 11.49 9C8.14 9.2 5.84 7.61 4 5.43a.43.43 0 0 0-.75.24 9.68 9.68 0 0 0 4.6 10.05A6.73 6.73 0 0 1 3.38 18a.45.45 0 0 0-.14.84A11 11 0 0 0 8.08 20"/></g></g>',
        umbrella: '<g data-name="Layer 2"><g data-name="umbrella"><rect width="24" height="24" opacity="0"/><path d="M12 2A10 10 0 0 0 2 12a1 1 0 0 0 1 1h8v6a3 3 0 0 0 6 0 1 1 0 0 0-2 0 1 1 0 0 1-2 0v-6h8a1 1 0 0 0 1-1A10 10 0 0 0 12 2z"/></g></g>',
        undo: '<g data-name="Layer 2"><g data-name="undo"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M20.22 21a1 1 0 0 1-1-.76 8.91 8.91 0 0 0-7.8-6.69v1.12a1.78 1.78 0 0 1-1.09 1.64A2 2 0 0 1 8.18 16l-5.06-4.41a1.76 1.76 0 0 1 0-2.68l5.06-4.42a2 2 0 0 1 2.18-.3 1.78 1.78 0 0 1 1.09 1.64V7A10.89 10.89 0 0 1 21.5 17.75a10.29 10.29 0 0 1-.31 2.49 1 1 0 0 1-1 .76z"/></g></g>',
        unlock: '<g data-name="Layer 2"><g data-name="unlock"><rect width="24" height="24" opacity="0"/><circle cx="12" cy="15" r="1"/><path d="M17 8h-7V6a2 2 0 0 1 4 0 1 1 0 0 0 2 0 4 4 0 0 0-8 0v2H7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zm-5 10a3 3 0 1 1 3-3 3 3 0 0 1-3 3z"/></g></g>',
        upload: '<g data-name="Layer 2"><g data-name="upload"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><rect x="4" y="4" width="16" height="2" rx="1" ry="1" transform="rotate(180 12 5)"/><rect x="17" y="5" width="4" height="2" rx="1" ry="1" transform="rotate(90 19 6)"/><rect x="3" y="5" width="4" height="2" rx="1" ry="1" transform="rotate(90 5 6)"/><path d="M8 14a1 1 0 0 1-.8-.4 1 1 0 0 1 .2-1.4l4-3a1 1 0 0 1 1.18 0l4 2.82a1 1 0 0 1 .24 1.39 1 1 0 0 1-1.4.24L12 11.24 8.6 13.8a1 1 0 0 1-.6.2z"/><path d="M12 21a1 1 0 0 1-1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1z"/></g></g>',
        "video-off": '<g data-name="Layer 2"><g data-name="video-off"><rect width="24" height="24" opacity="0"/><path d="M14.22 17.05L4.88 7.71 3.12 6 3 5.8A3 3 0 0 0 2 8v8a3 3 0 0 0 3 3h9a2.94 2.94 0 0 0 1.66-.51z"/><path d="M21 7.15a1.7 1.7 0 0 0-1.85.3l-2.15 2V8a3 3 0 0 0-3-3H7.83l1.29 1.29 6.59 6.59 2 2 2 2a1.73 1.73 0 0 0 .6.11 1.68 1.68 0 0 0 .69-.15 1.6 1.6 0 0 0 1-1.48V8.63a1.6 1.6 0 0 0-1-1.48z"/><path d="M17 15.59l-2-2L8.41 7l-2-2-1.7-1.71a1 1 0 0 0-1.42 1.42l.54.53L5.59 7l9.34 9.34 1.46 1.46 2.9 2.91a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g>',
        video: '<g data-name="Layer 2"><g data-name="video"><rect width="24" height="24" opacity="0"/><path d="M21 7.15a1.7 1.7 0 0 0-1.85.3l-2.15 2V8a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-1.45l2.16 2a1.74 1.74 0 0 0 1.16.45 1.68 1.68 0 0 0 .69-.15 1.6 1.6 0 0 0 1-1.48V8.63A1.6 1.6 0 0 0 21 7.15z"/></g></g>',
        "volume-down": '<g data-name="Layer 2"><g data-name="volume-down"><rect width="24" height="24" opacity="0"/><path d="M20.78 8.37a1 1 0 1 0-1.56 1.26 4 4 0 0 1 0 4.74A1 1 0 0 0 20 16a1 1 0 0 0 .78-.37 6 6 0 0 0 0-7.26z"/><path d="M16.47 3.12a1 1 0 0 0-1 0L9 7.57H4a1 1 0 0 0-1 1v6.86a1 1 0 0 0 1 1h5l6.41 4.4A1.06 1.06 0 0 0 16 21a1 1 0 0 0 1-1V4a1 1 0 0 0-.53-.88z"/></g></g>',
        "volume-mute": '<g data-name="Layer 2"><g data-name="volume-mute"><rect width="24" height="24" opacity="0"/><path d="M17 21a1.06 1.06 0 0 1-.57-.17L10 16.43H5a1 1 0 0 1-1-1V8.57a1 1 0 0 1 1-1h5l6.41-4.4A1 1 0 0 1 18 4v16a1 1 0 0 1-1 1z"/></g></g>',
        "volume-off": '<g data-name="Layer 2"><g data-name="volume-off"><rect width="24" height="24" opacity="0"/><path d="M16.91 14.08l1.44 1.44a6 6 0 0 0-.07-7.15 1 1 0 1 0-1.56 1.26 4 4 0 0 1 .19 4.45z"/><path d="M21 12a6.51 6.51 0 0 1-1.78 4.39l1.42 1.42A8.53 8.53 0 0 0 23 12a8.75 8.75 0 0 0-3.36-6.77 1 1 0 1 0-1.28 1.54A6.8 6.8 0 0 1 21 12z"/><path d="M15 12.17V4a1 1 0 0 0-1.57-.83L9 6.2z"/><path d="M4.74 7.57H2a1 1 0 0 0-1 1v6.86a1 1 0 0 0 1 1h5l6.41 4.4A1.06 1.06 0 0 0 14 21a1 1 0 0 0 1-1v-2.17z"/><path d="M4.71 3.29a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g>',
        "volume-up": '<g data-name="Layer 2"><g data-name="volume-up"><rect width="24" height="24" opacity="0"/><path d="M18.28 8.37a1 1 0 1 0-1.56 1.26 4 4 0 0 1 0 4.74A1 1 0 0 0 17.5 16a1 1 0 0 0 .78-.37 6 6 0 0 0 0-7.26z"/><path d="M19.64 5.23a1 1 0 1 0-1.28 1.54A6.8 6.8 0 0 1 21 12a6.8 6.8 0 0 1-2.64 5.23 1 1 0 0 0-.13 1.41A1 1 0 0 0 19 19a1 1 0 0 0 .64-.23A8.75 8.75 0 0 0 23 12a8.75 8.75 0 0 0-3.36-6.77z"/><path d="M14.47 3.12a1 1 0 0 0-1 0L7 7.57H2a1 1 0 0 0-1 1v6.86a1 1 0 0 0 1 1h5l6.41 4.4A1.06 1.06 0 0 0 14 21a1 1 0 0 0 1-1V4a1 1 0 0 0-.53-.88z"/></g></g>',
        "wifi-off": '<g data-name="Layer 2"><g data-name="wifi-off"><rect width="24" height="24" opacity="0"/><circle cx="12" cy="19" r="1"/><path d="M12.44 11l-1.9-1.89-2.46-2.44-1.55-1.55-1.82-1.83a1 1 0 0 0-1.42 1.42l1.38 1.37 1.46 1.46 2.23 2.24 1.55 1.54 2.74 2.74 2.79 2.8 3.85 3.85a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/><path d="M21.72 7.93A13.93 13.93 0 0 0 12 4a14.1 14.1 0 0 0-4.44.73l1.62 1.62a11.89 11.89 0 0 1 11.16 3 1 1 0 0 0 .69.28 1 1 0 0 0 .72-.31 1 1 0 0 0-.03-1.39z"/><path d="M3.82 6.65a14.32 14.32 0 0 0-1.54 1.28 1 1 0 0 0 1.38 1.44 13.09 13.09 0 0 1 1.6-1.29z"/><path d="M17 13.14a1 1 0 0 0 .71.3 1 1 0 0 0 .72-1.69A9 9 0 0 0 12 9h-.16l2.35 2.35A7 7 0 0 1 17 13.14z"/><path d="M7.43 10.26a8.8 8.8 0 0 0-1.9 1.49A1 1 0 0 0 7 13.14a7.3 7.3 0 0 1 2-1.41z"/><path d="M8.53 15.4a1 1 0 1 0 1.39 1.44 3.06 3.06 0 0 1 3.84-.25l-2.52-2.52a5 5 0 0 0-2.71 1.33z"/></g></g>',
        wifi: '<g data-name="Layer 2"><g data-name="wifi"><rect width="24" height="24" opacity="0"/><circle cx="12" cy="19" r="1"/><path d="M12 14a5 5 0 0 0-3.47 1.4 1 1 0 1 0 1.39 1.44 3.08 3.08 0 0 1 4.16 0 1 1 0 1 0 1.39-1.44A5 5 0 0 0 12 14z"/><path d="M12 9a9 9 0 0 0-6.47 2.75A1 1 0 0 0 7 13.14a7 7 0 0 1 10.08 0 1 1 0 0 0 .71.3 1 1 0 0 0 .72-1.69A9 9 0 0 0 12 9z"/><path d="M21.72 7.93a14 14 0 0 0-19.44 0 1 1 0 0 0 1.38 1.44 12 12 0 0 1 16.68 0 1 1 0 0 0 .69.28 1 1 0 0 0 .72-.31 1 1 0 0 0-.03-1.41z"/></g></g>',
        "activity-outline": '<g data-name="Layer 2"><g data-name="activity"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M14.33 20h-.21a2 2 0 0 1-1.76-1.58L9.68 6l-2.76 6.4A1 1 0 0 1 6 13H3a1 1 0 0 1 0-2h2.34l2.51-5.79a2 2 0 0 1 3.79.38L14.32 18l2.76-6.38A1 1 0 0 1 18 11h3a1 1 0 0 1 0 2h-2.34l-2.51 5.79A2 2 0 0 1 14.33 20z"/></g></g>',
        "alert-circle-outline": '<g data-name="Layer 2"><g data-name="alert-circle"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><circle cx="12" cy="16" r="1"/><path d="M12 7a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1z"/></g></g>',
        "alert-triangle-outline": '<g data-name="Layer 2"><g data-name="alert-triangle"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M22.56 16.3L14.89 3.58a3.43 3.43 0 0 0-5.78 0L1.44 16.3a3 3 0 0 0-.05 3A3.37 3.37 0 0 0 4.33 21h15.34a3.37 3.37 0 0 0 2.94-1.66 3 3 0 0 0-.05-3.04zm-1.7 2.05a1.31 1.31 0 0 1-1.19.65H4.33a1.31 1.31 0 0 1-1.19-.65 1 1 0 0 1 0-1l7.68-12.73a1.48 1.48 0 0 1 2.36 0l7.67 12.72a1 1 0 0 1 .01 1.01z"/><circle cx="12" cy="16" r="1"/><path d="M12 8a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z"/></g></g>',
        "archive-outline": '<g data-name="Layer 2"><g data-name="archive"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M21 6a3 3 0 0 0-3-3H6a3 3 0 0 0-2 5.22V18a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.22A3 3 0 0 0 21 6zM6 5h12a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2zm12 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h12z"/><rect x="9" y="12" width="6" height="2" rx=".87" ry=".87"/></g></g>',
        "arrow-back-outline": '<g data-name="Layer 2"><g data-name="arrow-back"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z"/></g></g>',
        "arrow-circle-down-outline": '<g data-name="Layer 2"><g data-name="arrow-circle-down"><rect width="24" height="24" opacity="0"/><path d="M14.31 12.41L13 13.66V8a1 1 0 0 0-2 0v5.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3a1 1 0 0 0 .33.21.94.94 0 0 0 .76 0 .54.54 0 0 0 .16-.1.49.49 0 0 0 .15-.1l3-2.86a1 1 0 0 0-1.38-1.45z"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/></g></g>',
        "arrow-circle-left-outline": '<g data-name="Layer 2"><g data-name="arrow-circle-left"><rect width="24" height="24" opacity="0"/><path d="M16 11h-5.66l1.25-1.31a1 1 0 0 0-1.45-1.38l-2.86 3a1 1 0 0 0-.09.13.72.72 0 0 0-.11.19.88.88 0 0 0-.06.28L7 12a1 1 0 0 0 .08.38 1 1 0 0 0 .21.32l3 3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L10.41 13H16a1 1 0 0 0 0-2z"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/></g></g>',
        "arrow-circle-right-outline": '<g data-name="Layer 2"><g data-name="arrow-circle-right"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M17 12v-.09a.88.88 0 0 0-.06-.28.72.72 0 0 0-.11-.19 1 1 0 0 0-.09-.13l-2.86-3a1 1 0 0 0-1.45 1.38L13.66 11H8a1 1 0 0 0 0 2h5.59l-1.3 1.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 .21-.32A1 1 0 0 0 17 12z"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/></g></g>',
        "arrow-circle-up-outline": '<g data-name="Layer 2"><g data-name="arrow-circle-up"><rect width="24" height="24" opacity="0"/><path d="M12.71 7.29a1 1 0 0 0-.32-.21A1 1 0 0 0 12 7h-.1a.82.82 0 0 0-.27.06.72.72 0 0 0-.19.11 1 1 0 0 0-.13.09l-3 2.86a1 1 0 0 0 1.38 1.45L11 10.34V16a1 1 0 0 0 2 0v-5.59l1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/></g></g>',
        "arrow-down-outline": '<g data-name="Layer 2"><g data-name="arrow-down"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05 2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17zm-3.91-7L12 14.82 16 10z"/></g></g>',
        "arrow-downward-outline": '<g data-name="Layer 2"><g data-name="arrow-downward"><rect width="24" height="24" opacity="0"/><path d="M18.77 13.36a1 1 0 0 0-1.41-.13L13 16.86V5a1 1 0 0 0-2 0v11.86l-4.36-3.63a1 1 0 1 0-1.28 1.54l6 5 .15.09.13.07a1 1 0 0 0 .72 0l.13-.07.15-.09 6-5a1 1 0 0 0 .13-1.41z"/></g></g>',
        "arrow-forward-outline": '<g data-name="Layer 2"><g data-name="arrow-forward"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M5 13h11.86l-3.63 4.36a1 1 0 0 0 1.54 1.28l5-6a1.19 1.19 0 0 0 .09-.15c0-.05.05-.08.07-.13A1 1 0 0 0 20 12a1 1 0 0 0-.07-.36c0-.05-.05-.08-.07-.13a1.19 1.19 0 0 0-.09-.15l-5-6A1 1 0 0 0 14 5a1 1 0 0 0-.64.23 1 1 0 0 0-.13 1.41L16.86 11H5a1 1 0 0 0 0 2z"/></g></g>',
        "arrow-ios-back-outline": '<g data-name="Layer 2"><g data-name="arrow-ios-back"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"/></g></g>',
        "arrow-ios-downward-outline": '<g data-name="Layer 2"><g data-name="arrow-ios-downward"><rect width="24" height="24" opacity="0"/><path d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16z"/></g></g>',
        "arrow-ios-forward-outline": '<g data-name="Layer 2"><g data-name="arrow-ios-forward"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z"/></g></g>',
        "arrow-ios-upward-outline": '<g data-name="Layer 2"><g data-name="arrow-ios-upward"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M18 15a1 1 0 0 1-.64-.23L12 10.29l-5.37 4.32a1 1 0 0 1-1.41-.15 1 1 0 0 1 .15-1.41l6-4.83a1 1 0 0 1 1.27 0l6 5a1 1 0 0 1 .13 1.41A1 1 0 0 1 18 15z"/></g></g>',
        "arrow-left-outline": '<g data-name="Layer 2"><g data-name="arrow-left"><rect width="24" height="24" opacity="0"/><path d="M13.54 18a2.06 2.06 0 0 1-1.3-.46l-5.1-4.21a1.7 1.7 0 0 1 0-2.66l5.1-4.21a2.1 2.1 0 0 1 2.21-.26 1.76 1.76 0 0 1 1.05 1.59v8.42a1.76 1.76 0 0 1-1.05 1.59 2.23 2.23 0 0 1-.91.2zm-4.86-6l4.82 4V8.09z"/></g></g>',
        "arrow-right-outline": '<g data-name="Layer 2"><g data-name="arrow-right"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M10.46 18a2.23 2.23 0 0 1-.91-.2 1.76 1.76 0 0 1-1.05-1.59V7.79A1.76 1.76 0 0 1 9.55 6.2a2.1 2.1 0 0 1 2.21.26l5.1 4.21a1.7 1.7 0 0 1 0 2.66l-5.1 4.21a2.06 2.06 0 0 1-1.3.46zm0-10v7.9l4.86-3.9z"/></g></g>',
        "arrow-up-outline": '<g data-name="Layer 2"><g data-name="arrow-up"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M16.21 16H7.79a1.76 1.76 0 0 1-1.59-1 2.1 2.1 0 0 1 .26-2.21l4.21-5.1a1.76 1.76 0 0 1 2.66 0l4.21 5.1A2.1 2.1 0 0 1 17.8 15a1.76 1.76 0 0 1-1.59 1zM8 14h7.9L12 9.18z"/></g></g>',
        "arrow-upward-outline": '<g data-name="Layer 2"><g data-name="arrow-upward"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M5.23 10.64a1 1 0 0 0 1.41.13L11 7.14V19a1 1 0 0 0 2 0V7.14l4.36 3.63a1 1 0 1 0 1.28-1.54l-6-5-.15-.09-.13-.07a1 1 0 0 0-.72 0l-.13.07-.15.09-6 5a1 1 0 0 0-.13 1.41z"/></g></g>',
        "arrowhead-down-outline": '<g data-name="Layer 2"><g data-name="arrowhead-down"><rect width="24" height="24" opacity="0"/><path d="M17.37 12.39L12 16.71l-5.36-4.48a1 1 0 1 0-1.28 1.54l6 5a1 1 0 0 0 1.27 0l6-4.83a1 1 0 0 0 .15-1.41 1 1 0 0 0-1.41-.14z"/><path d="M11.36 11.77a1 1 0 0 0 1.27 0l6-4.83a1 1 0 0 0 .15-1.41 1 1 0 0 0-1.41-.15L12 9.71 6.64 5.23a1 1 0 0 0-1.28 1.54z"/></g></g>',
        "arrowhead-left-outline": '<g data-name="Layer 2"><g data-name="arrowhead-left"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M11.64 5.23a1 1 0 0 0-1.41.13l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37 1 1 0 0 0 .78-1.63L7.29 12l4.48-5.37a1 1 0 0 0-.13-1.4z"/><path d="M14.29 12l4.48-5.37a1 1 0 0 0-1.54-1.28l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37 1 1 0 0 0 .78-1.63z"/></g></g>',
        "arrowhead-right-outline": '<g data-name="Layer 2"><g data-name="arrowhead-right"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M18.78 11.37l-4.78-6a1 1 0 0 0-1.41-.15 1 1 0 0 0-.15 1.41L16.71 12l-4.48 5.37a1 1 0 0 0 .13 1.41A1 1 0 0 0 13 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 .01-1.27z"/><path d="M7 5.37a1 1 0 0 0-1.61 1.26L9.71 12l-4.48 5.36a1 1 0 0 0 .13 1.41A1 1 0 0 0 6 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 0-1.27z"/></g></g>',
        "arrowhead-up-outline": '<g data-name="Layer 2"><g data-name="arrowhead-up"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M6.63 11.61L12 7.29l5.37 4.48A1 1 0 0 0 18 12a1 1 0 0 0 .77-.36 1 1 0 0 0-.13-1.41l-6-5a1 1 0 0 0-1.27 0l-6 4.83a1 1 0 0 0-.15 1.41 1 1 0 0 0 1.41.14z"/><path d="M12.64 12.23a1 1 0 0 0-1.27 0l-6 4.83a1 1 0 0 0-.15 1.41 1 1 0 0 0 1.41.15L12 14.29l5.37 4.48A1 1 0 0 0 18 19a1 1 0 0 0 .77-.36 1 1 0 0 0-.13-1.41z"/></g></g>',
        "at-outline": '<g data-name="Layer 2"><g data-name="at"><rect width="24" height="24" opacity="0"/><path d="M13 2a10 10 0 0 0-5 19.1 10.15 10.15 0 0 0 4 .9 10 10 0 0 0 6.08-2.06 1 1 0 0 0 .19-1.4 1 1 0 0 0-1.41-.19A8 8 0 1 1 12.77 4 8.17 8.17 0 0 1 20 12.22v.68a1.71 1.71 0 0 1-1.78 1.7 1.82 1.82 0 0 1-1.62-1.88V8.4a1 1 0 0 0-1-1 1 1 0 0 0-1 .87 5 5 0 0 0-3.44-1.36A5.09 5.09 0 1 0 15.31 15a3.6 3.6 0 0 0 5.55.61A3.67 3.67 0 0 0 22 12.9v-.68A10.2 10.2 0 0 0 13 2zm-1.82 13.09A3.09 3.09 0 1 1 14.27 12a3.1 3.1 0 0 1-3.09 3.09z"/></g></g>',
        "attach-2-outline": '<g data-name="Layer 2"><g data-name="attach-2"><rect width="24" height="24" opacity="0"/><path d="M12 22a5.86 5.86 0 0 1-6-5.7V6.13A4.24 4.24 0 0 1 10.33 2a4.24 4.24 0 0 1 4.34 4.13v10.18a2.67 2.67 0 0 1-5.33 0V6.92a1 1 0 0 1 1-1 1 1 0 0 1 1 1v9.39a.67.67 0 0 0 1.33 0V6.13A2.25 2.25 0 0 0 10.33 4 2.25 2.25 0 0 0 8 6.13V16.3a3.86 3.86 0 0 0 4 3.7 3.86 3.86 0 0 0 4-3.7V6.13a1 1 0 1 1 2 0V16.3a5.86 5.86 0 0 1-6 5.7z"/></g></g>',
        "attach-outline": '<g data-name="Layer 2"><g data-name="attach"><rect width="24" height="24" opacity="0"/><path d="M9.29 21a6.23 6.23 0 0 1-4.43-1.88 6 6 0 0 1-.22-8.49L12 3.2A4.11 4.11 0 0 1 15 2a4.48 4.48 0 0 1 3.19 1.35 4.36 4.36 0 0 1 .15 6.13l-7.4 7.43a2.54 2.54 0 0 1-1.81.75 2.72 2.72 0 0 1-1.95-.82 2.68 2.68 0 0 1-.08-3.77l6.83-6.86a1 1 0 0 1 1.37 1.41l-6.83 6.86a.68.68 0 0 0 .08.95.78.78 0 0 0 .53.23.56.56 0 0 0 .4-.16l7.39-7.43a2.36 2.36 0 0 0-.15-3.31 2.38 2.38 0 0 0-3.27-.15L6.06 12a4 4 0 0 0 .22 5.67 4.22 4.22 0 0 0 3 1.29 3.67 3.67 0 0 0 2.61-1.06l7.39-7.43a1 1 0 1 1 1.42 1.41l-7.39 7.43A5.65 5.65 0 0 1 9.29 21z"/></g></g>',
        "award-outline": '<g data-name="Layer 2"><g data-name="award"><rect width="24" height="24" opacity="0"/><path d="M19 20.75l-2.31-9A5.94 5.94 0 0 0 18 8 6 6 0 0 0 6 8a5.94 5.94 0 0 0 1.34 3.77L5 20.75a1 1 0 0 0 1.48 1.11l5.33-3.13 5.68 3.14A.91.91 0 0 0 18 22a1 1 0 0 0 1-1.25zM12 4a4 4 0 1 1-4 4 4 4 0 0 1 4-4zm.31 12.71a1 1 0 0 0-1 0l-3.75 2.2L9 13.21a5.94 5.94 0 0 0 5.92 0L16.45 19z"/></g></g>',
        "backspace-outline": '<g data-name="Layer 2"><g data-name="backspace"><rect width="24" height="24" opacity="0"/><path d="M20.14 4h-9.77a3 3 0 0 0-2 .78l-.1.11-6 7.48a1 1 0 0 0 .11 1.37l6 5.48a3 3 0 0 0 2 .78h9.77A1.84 1.84 0 0 0 22 18.18V5.82A1.84 1.84 0 0 0 20.14 4zM20 18h-9.63a1 1 0 0 1-.67-.26l-5.33-4.85 5.38-6.67a1 1 0 0 1 .62-.22H20z"/><path d="M11.29 14.71a1 1 0 0 0 1.42 0l1.29-1.3 1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L15.41 12l1.3-1.29a1 1 0 0 0-1.42-1.42L14 10.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l1.3 1.29-1.3 1.29a1 1 0 0 0 0 1.42z"/></g></g>',
        "bar-chart-2-outline": '<g data-name="Layer 2"><g data-name="bar-chart-2"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M12 8a1 1 0 0 0-1 1v11a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z"/><path d="M19 4a1 1 0 0 0-1 1v15a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1z"/><path d="M5 12a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1z"/></g></g>',
        "bar-chart-outline": '<g data-name="Layer 2"><g data-name="bar-chart"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M12 4a1 1 0 0 0-1 1v15a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1z"/><path d="M19 12a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1z"/><path d="M5 8a1 1 0 0 0-1 1v11a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z"/></g></g>',
        "battery-outline": '<g data-name="Layer 2"><g data-name="battery"><rect width="24" height="24" opacity="0"/><path d="M15.83 6H4.17A2.31 2.31 0 0 0 2 8.43v7.14A2.31 2.31 0 0 0 4.17 18h11.66A2.31 2.31 0 0 0 18 15.57V8.43A2.31 2.31 0 0 0 15.83 6zm.17 9.57a.52.52 0 0 1-.17.43H4.18a.5.5 0 0 1-.18-.43V8.43A.53.53 0 0 1 4.17 8h11.65a.5.5 0 0 1 .18.43z"/><path d="M21 9a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1z"/></g></g>',
        "behance-outline": '<g data-name="Layer 2"><g data-name="behance"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M10.52 11.78a1.4 1.4 0 0 0 1.12-1.43c0-1-.77-1.6-1.94-1.6H7v6.5h2.7c1.3-.05 2.3-.72 2.3-1.88a1.52 1.52 0 0 0-1.48-1.59zM8.26 9.67h1.15c.6 0 .95.32.95.85s-.38.89-1.25.89h-.85zm1 4.57h-1V12.3h1.23c.75 0 1.17.38 1.17 1s-.42.94-1.44.94z"/><path d="M14.75 10.3a2.11 2.11 0 0 0-2.28 2.25V13a2.15 2.15 0 0 0 2.34 2.31A2 2 0 0 0 17 13.75h-1.21a.9.9 0 0 1-1 .63 1.07 1.07 0 0 1-1.09-1.19v-.14H17v-.47a2.12 2.12 0 0 0-2.25-2.28zm1 2h-2.02a1 1 0 0 1 1-1.09 1 1 0 0 1 1 1.09z"/><rect x="13.25" y="9.2" width="3" height=".5"/></g></g>',
        "bell-off-outline": '<g data-name="Layer 2"><g data-name="bell-off"><rect width="24" height="24" opacity="0"/><path d="M8.9 5.17A4.67 4.67 0 0 1 12.64 4a4.86 4.86 0 0 1 4.08 4.9v4.5a1.92 1.92 0 0 0 .1.59l3.6 3.6a1.58 1.58 0 0 0 .45-.6 1.62 1.62 0 0 0-.35-1.78l-1.8-1.81V8.94a6.86 6.86 0 0 0-5.82-6.88 6.71 6.71 0 0 0-5.32 1.61 6.88 6.88 0 0 0-.58.54l1.47 1.43a4.79 4.79 0 0 1 .43-.47z"/><path d="M14 16.86l-.83-.86H5.51l1.18-1.18a2 2 0 0 0 .59-1.42v-3.29l-2-2a5.68 5.68 0 0 0 0 .59v4.7l-1.8 1.81A1.63 1.63 0 0 0 4.64 18H8v.34A3.84 3.84 0 0 0 12 22a3.88 3.88 0 0 0 4-3.22l-.83-.78zM12 20a1.88 1.88 0 0 1-2-1.66V18h4v.34A1.88 1.88 0 0 1 12 20z"/><path d="M20.71 19.29L19.41 18l-2-2-9.52-9.53L6.42 5 4.71 3.29a1 1 0 0 0-1.42 1.42L5.53 7l1.75 1.7 7.31 7.3.07.07L16 17.41l.59.59 2.7 2.71a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g>',
        "bell-outline": '<g data-name="Layer 2"><g data-name="bell"><rect width="24" height="24" opacity="0"/><path d="M20.52 15.21l-1.8-1.81V8.94a6.86 6.86 0 0 0-5.82-6.88 6.74 6.74 0 0 0-7.62 6.67v4.67l-1.8 1.81A1.64 1.64 0 0 0 4.64 18H8v.34A3.84 3.84 0 0 0 12 22a3.84 3.84 0 0 0 4-3.66V18h3.36a1.64 1.64 0 0 0 1.16-2.79zM14 18.34A1.88 1.88 0 0 1 12 20a1.88 1.88 0 0 1-2-1.66V18h4zM5.51 16l1.18-1.18a2 2 0 0 0 .59-1.42V8.73A4.73 4.73 0 0 1 8.9 5.17 4.67 4.67 0 0 1 12.64 4a4.86 4.86 0 0 1 4.08 4.9v4.5a2 2 0 0 0 .58 1.42L18.49 16z"/></g></g>',
        "bluetooth-outline": '<g data-name="Layer 2"><g data-name="bluetooth"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M13.63 12l4-3.79a1.14 1.14 0 0 0-.13-1.77l-4.67-3.23a1.17 1.17 0 0 0-1.21-.08 1.15 1.15 0 0 0-.62 1v6.2l-3.19-4a1 1 0 0 0-1.56 1.3L9.72 12l-3.5 4.43a1 1 0 0 0 .16 1.4A1 1 0 0 0 7 18a1 1 0 0 0 .78-.38L11 13.56v6.29A1.16 1.16 0 0 0 12.16 21a1.16 1.16 0 0 0 .67-.21l4.64-3.18a1.17 1.17 0 0 0 .49-.85 1.15 1.15 0 0 0-.34-.91zM13 5.76l2.5 1.73L13 9.85zm0 12.49v-4.07l2.47 2.38z"/></g></g>',
        "book-open-outline": '<g data-name="Layer 2"><g data-name="book-open"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M20.62 4.22a1 1 0 0 0-.84-.2L12 5.77 4.22 4A1 1 0 0 0 3 5v12.2a1 1 0 0 0 .78 1l8 1.8h.44l8-1.8a1 1 0 0 0 .78-1V5a1 1 0 0 0-.38-.78zM5 6.25l6 1.35v10.15L5 16.4zM19 16.4l-6 1.35V7.6l6-1.35z"/></g></g>',
        "book-outline": '<g data-name="Layer 2"><g data-name="book"><rect width="24" height="24" opacity="0"/><path d="M19 3H7a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM7 5h11v10H7a3 3 0 0 0-1 .18V6a1 1 0 0 1 1-1zm0 14a1 1 0 0 1 0-2h11v2z"/></g></g>',
        "bookmark-outline": '<g data-name="Layer 2"><g data-name="bookmark"><rect width="24" height="24" opacity="0"/><path d="M6.09 21.06a1 1 0 0 1-1-1L4.94 5.4a2.26 2.26 0 0 1 2.18-2.35L16.71 3a2.27 2.27 0 0 1 2.23 2.31l.14 14.66a1 1 0 0 1-.49.87 1 1 0 0 1-1 0l-5.7-3.16-5.29 3.23a1.2 1.2 0 0 1-.51.15zm5.76-5.55a1.11 1.11 0 0 1 .5.12l4.71 2.61-.12-12.95c0-.2-.13-.34-.21-.33l-9.6.09c-.08 0-.19.13-.19.33l.12 12.9 4.28-2.63a1.06 1.06 0 0 1 .51-.14z"/></g></g>',
        "briefcase-outline": '<g data-name="Layer 2"><g data-name="briefcase"><rect width="24" height="24" opacity="0"/><path d="M19 7h-3V5.5A2.5 2.5 0 0 0 13.5 3h-3A2.5 2.5 0 0 0 8 5.5V7H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zm-4 2v10H9V9zm-5-3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V7h-4zM4 18v-8a1 1 0 0 1 1-1h2v10H5a1 1 0 0 1-1-1zm16 0a1 1 0 0 1-1 1h-2V9h2a1 1 0 0 1 1 1z"/></g></g>',
        "browser-outline": '<g data-name="Layer 2"><g data-name="browser"><rect width="24" height="24" opacity="0"/><path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7h14zM5 9V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3z"/><circle cx="8" cy="7.03" r="1"/><circle cx="12" cy="7.03" r="1"/></g></g>',
        "brush-outline": '<g data-name="Layer 2"><g data-name="brush"><rect width="24" height="24" opacity="0"/><path d="M20 6.83a2.76 2.76 0 0 0-.82-2 2.89 2.89 0 0 0-4 0l-6.6 6.6h-.22a4.42 4.42 0 0 0-4.3 4.31L4 19a1 1 0 0 0 .29.73A1.05 1.05 0 0 0 5 20l3.26-.06a4.42 4.42 0 0 0 4.31-4.3v-.23l6.61-6.6A2.74 2.74 0 0 0 20 6.83zM8.25 17.94L6 18v-2.23a2.4 2.4 0 0 1 2.4-2.36 2.15 2.15 0 0 1 2.15 2.19 2.4 2.4 0 0 1-2.3 2.34zm9.52-10.55l-5.87 5.87a4.55 4.55 0 0 0-.52-.64 3.94 3.94 0 0 0-.64-.52l5.87-5.86a.84.84 0 0 1 1.16 0 .81.81 0 0 1 .23.59.79.79 0 0 1-.23.56z"/></g></g>',
        "bulb-outline": '<g data-name="Layer 2"><g data-name="bulb"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M12 7a5 5 0 0 0-3 9v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a5 5 0 0 0-3-9zm1.5 7.59a1 1 0 0 0-.5.87V20h-2v-4.54a1 1 0 0 0-.5-.87A3 3 0 0 1 9 12a3 3 0 0 1 6 0 3 3 0 0 1-1.5 2.59z"/><path d="M12 6a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1z"/><path d="M21 11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z"/><path d="M5 11H3a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z"/><path d="M7.66 6.42L6.22 5a1 1 0 0 0-1.39 1.47l1.44 1.39a1 1 0 0 0 .73.28 1 1 0 0 0 .72-.31 1 1 0 0 0-.06-1.41z"/><path d="M19.19 5.05a1 1 0 0 0-1.41 0l-1.44 1.37a1 1 0 0 0 0 1.41 1 1 0 0 0 .72.31 1 1 0 0 0 .69-.28l1.44-1.39a1 1 0 0 0 0-1.42z"/></g></g>',
        "calendar-outline": '<g data-name="Layer 2"><g data-name="calendar"><rect width="24" height="24" opacity="0"/><path d="M18 4h-1V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zM6 6h1v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h1a1 1 0 0 1 1 1v4H5V7a1 1 0 0 1 1-1zm12 14H6a1 1 0 0 1-1-1v-6h14v6a1 1 0 0 1-1 1z"/><circle cx="8" cy="16" r="1"/><path d="M16 15h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z"/></g></g>',
        "camera-outline": '<g data-name="Layer 2"><g data-name="camera"><rect width="24" height="24" opacity="0"/><path d="M19 7h-3V5.5A2.5 2.5 0 0 0 13.5 3h-3A2.5 2.5 0 0 0 8 5.5V7H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zm-9-1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V7h-4zM20 18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z"/><path d="M12 10.5a3.5 3.5 0 1 0 3.5 3.5 3.5 3.5 0 0 0-3.5-3.5zm0 5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5z"/></g></g>',
        "car-outline": '<g data-name="Layer 2"><g data-name="car"><rect width="24" height="24" opacity="0"/><path d="M21.6 11.22L17 7.52V5a1.91 1.91 0 0 0-1.81-2H3.79A1.91 1.91 0 0 0 2 5v10a2 2 0 0 0 1.2 1.88 3 3 0 1 0 5.6.12h6.36a3 3 0 1 0 5.64 0h.2a1 1 0 0 0 1-1v-4a1 1 0 0 0-.4-.78zM20 12.48V15h-3v-4.92zM7 18a1 1 0 1 1-1-1 1 1 0 0 1 1 1zm5-3H4V5h11v10zm7 3a1 1 0 1 1-1-1 1 1 0 0 1 1 1z"/></g></g>',
        "cast-outline": '<g data-name="Layer 2"><g data-name="cast"><polyline points="24 24 0 24 0 0" opacity="0"/><path d="M18.4 3H5.6A2.7 2.7 0 0 0 3 5.78V7a1 1 0 0 0 2 0V5.78A.72.72 0 0 1 5.6 5h12.8a.72.72 0 0 1 .6.78v12.44a.72.72 0 0 1-.6.78H17a1 1 0 0 0 0 2h1.4a2.7 2.7 0 0 0 2.6-2.78V5.78A2.7 2.7 0 0 0 18.4 3z"/><path d="M3.86 14A1 1 0 0 0 3 15.17a1 1 0 0 0 1.14.83 2.49 2.49 0 0 1 2.12.72 2.52 2.52 0 0 1 .51 2.84 1 1 0 0 0 .48 1.33 1.06 1.06 0 0 0 .42.09 1 1 0 0 0 .91-.58A4.52 4.52 0 0 0 3.86 14z"/><path d="M3.86 10.08a1 1 0 0 0 .28 2 6 6 0 0 1 5.09 1.71 6 6 0 0 1 1.53 5.95 1 1 0 0 0 .68 1.26.9.9 0 0 0 .28 0 1 1 0 0 0 1-.72 8 8 0 0 0-8.82-10.2z"/><circle cx="4" cy="19" r="1"/></g></g>',
        "charging-outline": '<g data-name="Layer 2"><g data-name="charging"><rect width="24" height="24" opacity="0"/><path d="M21 9a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1z"/><path d="M15.83 6h-3.1l-1.14 2h4.23a.5.5 0 0 1 .18.43v7.14a.52.52 0 0 1-.17.43H13l-1.15 2h4A2.31 2.31 0 0 0 18 15.57V8.43A2.31 2.31 0 0 0 15.83 6z"/><path d="M4 15.57V8.43A.53.53 0 0 1 4.17 8H7l1.13-2h-4A2.31 2.31 0 0 0 2 8.43v7.14A2.31 2.31 0 0 0 4.17 18h3.1l1.14-2H4.18a.5.5 0 0 1-.18-.43z"/><path d="M9 20a1 1 0 0 1-.87-1.5l3.15-5.5H7a1 1 0 0 1-.86-.5 1 1 0 0 1 0-1l4-7a1 1 0 0 1 1.74 1L8.72 11H13a1 1 0 0 1 .86.5 1 1 0 0 1 0 1l-4 7A1 1 0 0 1 9 20z"/></g></g>',
        "checkmark-circle-2-outline": '<g data-name="Layer 2"><g data-name="checkmark-circle-2"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M14.7 8.39l-3.78 5-1.63-2.11a1 1 0 0 0-1.58 1.23l2.43 3.11a1 1 0 0 0 .79.38 1 1 0 0 0 .79-.39l4.57-6a1 1 0 1 0-1.6-1.22z"/></g></g>',
        "checkmark-circle-outline": '<g data-name="Layer 2"><g data-name="checkmark-circle"><rect width="24" height="24" opacity="0"/><path d="M9.71 11.29a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 16a1 1 0 0 0 .72-.34l7-8a1 1 0 0 0-1.5-1.32L12 13.54z"/><path d="M21 11a1 1 0 0 0-1 1 8 8 0 0 1-8 8A8 8 0 0 1 6.33 6.36 7.93 7.93 0 0 1 12 4a8.79 8.79 0 0 1 1.9.22 1 1 0 1 0 .47-1.94A10.54 10.54 0 0 0 12 2a10 10 0 0 0-7 17.09A9.93 9.93 0 0 0 12 22a10 10 0 0 0 10-10 1 1 0 0 0-1-1z"/></g></g>',
        "checkmark-outline": '<g data-name="Layer 2"><g data-name="checkmark"><rect width="24" height="24" opacity="0"/><path d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z"/></g></g>',
        "checkmark-square-2-outline": '<g data-name="Layer 2"><g data-name="checkmark-square-2"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1z"/><path d="M14.7 8.39l-3.78 5-1.63-2.11a1 1 0 0 0-1.58 1.23l2.43 3.11a1 1 0 0 0 .79.38 1 1 0 0 0 .79-.39l4.57-6a1 1 0 1 0-1.6-1.22z"/></g></g>',
        "checkmark-square-outline": '<g data-name="Layer 2"><g data-name="checkmark-square"><rect width="24" height="24" opacity="0"/><path d="M20 11.83a1 1 0 0 0-1 1v5.57a.6.6 0 0 1-.6.6H5.6a.6.6 0 0 1-.6-.6V5.6a.6.6 0 0 1 .6-.6h9.57a1 1 0 1 0 0-2H5.6A2.61 2.61 0 0 0 3 5.6v12.8A2.61 2.61 0 0 0 5.6 21h12.8a2.61 2.61 0 0 0 2.6-2.6v-5.57a1 1 0 0 0-1-1z"/><path d="M10.72 11a1 1 0 0 0-1.44 1.38l2.22 2.33a1 1 0 0 0 .72.31 1 1 0 0 0 .72-.3l6.78-7a1 1 0 1 0-1.44-1.4l-6.05 6.26z"/></g></g>',
        "chevron-down-outline": '<g data-name="Layer 2"><g data-name="chevron-down"><rect width="24" height="24" opacity="0"/><path d="M12 15.5a1 1 0 0 1-.71-.29l-4-4a1 1 0 1 1 1.42-1.42L12 13.1l3.3-3.18a1 1 0 1 1 1.38 1.44l-4 3.86a1 1 0 0 1-.68.28z"/></g></g>',
        "chevron-left-outline": '<g data-name="Layer 2"><g data-name="chevron-left"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M13.36 17a1 1 0 0 1-.72-.31l-3.86-4a1 1 0 0 1 0-1.4l4-4a1 1 0 1 1 1.42 1.42L10.9 12l3.18 3.3a1 1 0 0 1 0 1.41 1 1 0 0 1-.72.29z"/></g></g>',
        "chevron-right-outline": '<g data-name="Layer 2"><g data-name="chevron-right"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M10.5 17a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42L13.1 12 9.92 8.69a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l3.86 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-.7.32z"/></g></g>',
        "chevron-up-outline": '<g data-name="Layer 2"><g data-name="chevron-up"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M16 14.5a1 1 0 0 1-.71-.29L12 10.9l-3.3 3.18a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.42l4-3.86a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.42 1 1 0 0 1-.69.28z"/></g></g>',
        "clipboard-outline": '<g data-name="Layer 2"><g data-name="clipboard"><rect width="24" height="24" opacity="0"/><path d="M18 5V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v1a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zM8 4h8v4H8V4zm11 15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7a1 1 0 0 1 1 1z"/></g></g>',
        "clock-outline": '<g data-name="Layer 2"><g data-name="clock"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M16 11h-3V8a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2z"/></g></g>',
        "close-circle-outline": '<g data-name="Layer 2"><g data-name="close-circle"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M14.71 9.29a1 1 0 0 0-1.42 0L12 10.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l1.3 1.29-1.3 1.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l1.29-1.3 1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L13.41 12l1.3-1.29a1 1 0 0 0 0-1.42z"/></g></g>',
        "close-outline": '<g data-name="Layer 2"><g data-name="close"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g>',
        "close-square-outline": '<g data-name="Layer 2"><g data-name="close-square"><rect width="24" height="24" opacity="0"/><path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1z"/><path d="M14.71 9.29a1 1 0 0 0-1.42 0L12 10.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l1.3 1.29-1.3 1.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l1.29-1.3 1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L13.41 12l1.3-1.29a1 1 0 0 0 0-1.42z"/></g></g>',
        "cloud-download-outline": '<g data-name="Layer 2"><g data-name="cloud-download"><rect width="24" height="24" opacity="0"/><path d="M14.31 16.38L13 17.64V12a1 1 0 0 0-2 0v5.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 21a1 1 0 0 0 .69-.28l3-2.9a1 1 0 1 0-1.38-1.44z"/><path d="M17.67 7A6 6 0 0 0 6.33 7a5 5 0 0 0-3.08 8.27A1 1 0 1 0 4.75 14 3 3 0 0 1 7 9h.1a1 1 0 0 0 1-.8 4 4 0 0 1 7.84 0 1 1 0 0 0 1 .8H17a3 3 0 0 1 2.25 5 1 1 0 0 0 .09 1.42 1 1 0 0 0 .66.25 1 1 0 0 0 .75-.34A5 5 0 0 0 17.67 7z"/></g></g>',
        "cloud-upload-outline": '<g data-name="Layer 2"><g data-name="cloud-upload"><rect width="24" height="24" opacity="0"/><path d="M12.71 11.29a1 1 0 0 0-1.4 0l-3 2.9a1 1 0 1 0 1.38 1.44L11 14.36V20a1 1 0 0 0 2 0v-5.59l1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/><path d="M17.67 7A6 6 0 0 0 6.33 7a5 5 0 0 0-3.08 8.27A1 1 0 1 0 4.75 14 3 3 0 0 1 7 9h.1a1 1 0 0 0 1-.8 4 4 0 0 1 7.84 0 1 1 0 0 0 1 .8H17a3 3 0 0 1 2.25 5 1 1 0 0 0 .09 1.42 1 1 0 0 0 .66.25 1 1 0 0 0 .75-.34A5 5 0 0 0 17.67 7z"/></g></g>',
        "code-download-outline": '<g data-name="Layer 2"><g data-name="code-download"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M4.29 12l4.48-5.36a1 1 0 1 0-1.54-1.28l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37 1 1 0 0 0 .78-1.63z"/><path d="M21.78 11.37l-4.78-6a1 1 0 0 0-1.56 1.26L19.71 12l-4.48 5.37a1 1 0 0 0 .13 1.41A1 1 0 0 0 16 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 .01-1.27z"/><path d="M15.72 11.41a1 1 0 0 0-1.41 0L13 12.64V8a1 1 0 0 0-2 0v4.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 16a1 1 0 0 0 .69-.28l3-2.9a1 1 0 0 0 .03-1.41z"/></g></g>',
        "code-outline": '<g data-name="Layer 2"><g data-name="code"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M8.64 5.23a1 1 0 0 0-1.41.13l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37 1 1 0 0 0 .78-1.63L4.29 12l4.48-5.36a1 1 0 0 0-.13-1.41z"/><path d="M21.78 11.37l-4.78-6a1 1 0 0 0-1.41-.15 1 1 0 0 0-.15 1.41L19.71 12l-4.48 5.37a1 1 0 0 0 .13 1.41A1 1 0 0 0 16 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 .01-1.27z"/></g></g>',
        "collapse-outline": '<g data-name="Layer 2"><g data-name="collapse"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M19 9h-2.58l3.29-3.29a1 1 0 1 0-1.42-1.42L15 7.57V5a1 1 0 0 0-1-1 1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2z"/><path d="M10 13H5a1 1 0 0 0 0 2h2.57l-3.28 3.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L9 16.42V19a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1z"/></g></g>',
        "color-palette-outline": '<g data-name="Layer 2"><g data-name="color-palette"><rect width="24" height="24" opacity="0"/><path d="M19.54 5.08A10.61 10.61 0 0 0 11.91 2a10 10 0 0 0-.05 20 2.58 2.58 0 0 0 2.53-1.89 2.52 2.52 0 0 0-.57-2.28.5.5 0 0 1 .37-.83h1.65A6.15 6.15 0 0 0 22 11.33a8.48 8.48 0 0 0-2.46-6.25zM15.88 15h-1.65a2.49 2.49 0 0 0-1.87 4.15.49.49 0 0 1 .12.49c-.05.21-.28.34-.59.36a8 8 0 0 1-7.82-9.11A8.1 8.1 0 0 1 11.92 4H12a8.47 8.47 0 0 1 6.1 2.48 6.5 6.5 0 0 1 1.9 4.77A4.17 4.17 0 0 1 15.88 15z"/><circle cx="12" cy="6.5" r="1.5"/><path d="M15.25 7.2a1.5 1.5 0 1 0 2.05.55 1.5 1.5 0 0 0-2.05-.55z"/><path d="M8.75 7.2a1.5 1.5 0 1 0 .55 2.05 1.5 1.5 0 0 0-.55-2.05z"/><path d="M6.16 11.26a1.5 1.5 0 1 0 2.08.4 1.49 1.49 0 0 0-2.08-.4z"/></g></g>',
        "color-picker-outline": '<g data-name="Layer 2"><g data-name="color-picker"><rect width="24" height="24" opacity="0"/><path d="M19.4 7.34L16.66 4.6A1.92 1.92 0 0 0 14 4.53l-2 2-1.29-1.24a1 1 0 0 0-1.42 1.42L10.53 8 5 13.53a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l5.58-5.58 1.24 1.24a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-1.24-1.24 2-2a1.92 1.92 0 0 0-.07-2.71zM9.08 17.62l-3 .28.27-3L12 9.36l2.69 2.7zm7-7L13.36 8l1.91-2L18 8.73z"/></g></g>',
        "compass-outline": '<g data-name="Layer 2"><g data-name="compass"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M15.68 8.32a1 1 0 0 0-1.1-.25l-4.21 1.7a1 1 0 0 0-.55.55l-1.75 4.26a1 1 0 0 0 .18 1h.05A1 1 0 0 0 9 16a1 1 0 0 0 .38-.07l4.21-1.7a1 1 0 0 0 .55-.55l1.75-4.26a1 1 0 0 0-.21-1.1zm-4.88 4.89l.71-1.74 1.69-.68-.71 1.74z"/></g></g>',
        "copy-outline": '<g data-name="Layer 2"><g data-name="copy"><rect width="24" height="24" opacity="0"/><path d="M18 21h-6a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3zm-6-10a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1z"/><path d="M9.73 15H5.67A2.68 2.68 0 0 1 3 12.33V5.67A2.68 2.68 0 0 1 5.67 3h6.66A2.68 2.68 0 0 1 15 5.67V9.4h-2V5.67a.67.67 0 0 0-.67-.67H5.67a.67.67 0 0 0-.67.67v6.66a.67.67 0 0 0 .67.67h4.06z"/></g></g>',
        "corner-down-left-outline": '<g data-name="Layer 2"><g data-name="corner-down-left"><rect x=".05" y=".05" width="24" height="24" transform="rotate(-89.76 12.05 12.05)" opacity="0"/><path d="M20 6a1 1 0 0 0-1-1 1 1 0 0 0-1 1v5a1 1 0 0 1-.29.71A1 1 0 0 1 17 12H8.08l2.69-3.39a1 1 0 0 0-1.52-1.17l-4 5a1 1 0 0 0 0 1.25l4 5a1 1 0 0 0 .78.37 1 1 0 0 0 .62-.22 1 1 0 0 0 .15-1.41l-2.66-3.36h8.92a3 3 0 0 0 3-3z"/></g></g>',
        "corner-down-right-outline": '<g data-name="Layer 2"><g data-name="corner-down-right"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M19.78 12.38l-4-5a1 1 0 0 0-1.56 1.24l2.7 3.38H8a1 1 0 0 1-1-1V6a1 1 0 0 0-2 0v5a3 3 0 0 0 3 3h8.92l-2.7 3.38a1 1 0 0 0 .16 1.4A1 1 0 0 0 15 19a1 1 0 0 0 .78-.38l4-5a1 1 0 0 0 0-1.24z"/></g></g>',
        "corner-left-down-outline": '<g data-name="Layer 2"><g data-name="corner-left-down"><rect width="24" height="24" opacity="0"/><path d="M18 5h-5a3 3 0 0 0-3 3v8.92l-3.38-2.7a1 1 0 0 0-1.24 1.56l5 4a1 1 0 0 0 1.24 0l5-4a1 1 0 1 0-1.24-1.56L12 16.92V8a1 1 0 0 1 1-1h5a1 1 0 0 0 0-2z"/></g></g>',
        "corner-left-up-outline": '<g data-name="Layer 2"><g data-name="corner-left-up"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M18 17h-5a1 1 0 0 1-1-1V7.08l3.38 2.7A1 1 0 0 0 16 10a1 1 0 0 0 .78-.38 1 1 0 0 0-.16-1.4l-5-4a1 1 0 0 0-1.24 0l-5 4a1 1 0 0 0 1.24 1.56L10 7.08V16a3 3 0 0 0 3 3h5a1 1 0 0 0 0-2z"/></g></g>',
        "corner-right-down-outline": '<g data-name="Layer 2"><g data-name="corner-right-down"><rect width="24" height="24" opacity="0"/><path d="M18.78 14.38a1 1 0 0 0-1.4-.16L14 16.92V8a3 3 0 0 0-3-3H6a1 1 0 0 0 0 2h5a1 1 0 0 1 1 1v8.92l-3.38-2.7a1 1 0 0 0-1.24 1.56l5 4a1 1 0 0 0 1.24 0l5-4a1 1 0 0 0 .16-1.4z"/></g></g>',
        "corner-right-up-outline": '<g data-name="Layer 2"><g data-name="corner-right-up"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M18.62 8.22l-5-4a1 1 0 0 0-1.24 0l-5 4a1 1 0 0 0 1.24 1.56L12 7.08V16a1 1 0 0 1-1 1H6a1 1 0 0 0 0 2h5a3 3 0 0 0 3-3V7.08l3.38 2.7A1 1 0 0 0 18 10a1 1 0 0 0 .78-.38 1 1 0 0 0-.16-1.4z"/></g></g>',
        "corner-up-left-outline": '<g data-name="Layer 2"><g data-name="corner-up-left"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M16 10H7.08l2.7-3.38a1 1 0 1 0-1.56-1.24l-4 5a1 1 0 0 0 0 1.24l4 5A1 1 0 0 0 9 17a1 1 0 0 0 .62-.22 1 1 0 0 0 .16-1.4L7.08 12H16a1 1 0 0 1 1 1v5a1 1 0 0 0 2 0v-5a3 3 0 0 0-3-3z"/></g></g>',
        "corner-up-right-outline": '<g data-name="Layer 2"><g data-name="corner-up-right"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M19.78 10.38l-4-5a1 1 0 0 0-1.56 1.24l2.7 3.38H8a3 3 0 0 0-3 3v5a1 1 0 0 0 2 0v-5a1 1 0 0 1 1-1h8.92l-2.7 3.38a1 1 0 0 0 .16 1.4A1 1 0 0 0 15 17a1 1 0 0 0 .78-.38l4-5a1 1 0 0 0 0-1.24z"/></g></g>',
        "credit-card-outline": '<g data-name="Layer 2"><g data-name="credit-card"><rect width="24" height="24" opacity="0"/><path d="M19 5H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zM4 8a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1H4zm16 8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5h16z"/><path d="M7 15h4a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2z"/><path d="M15 15h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2z"/></g></g>',
        "crop-outline": '<g data-name="Layer 2"><g data-name="crop"><rect width="24" height="24" opacity="0"/><path d="M21 16h-3V8.56A2.56 2.56 0 0 0 15.44 6H8V3a1 1 0 0 0-2 0v3H3a1 1 0 0 0 0 2h3v7.44A2.56 2.56 0 0 0 8.56 18H16v3a1 1 0 0 0 2 0v-3h3a1 1 0 0 0 0-2zM8.56 16a.56.56 0 0 1-.56-.56V8h7.44a.56.56 0 0 1 .56.56V16z"/></g></g>',
        "cube-outline": '<g data-name="Layer 2"><g data-name="cube"><rect width="24" height="24" opacity="0"/><path d="M20.66 7.26c0-.07-.1-.14-.15-.21l-.09-.1a2.5 2.5 0 0 0-.86-.68l-6.4-3a2.7 2.7 0 0 0-2.26 0l-6.4 3a2.6 2.6 0 0 0-.86.68L3.52 7a1 1 0 0 0-.15.2A2.39 2.39 0 0 0 3 8.46v7.06a2.49 2.49 0 0 0 1.46 2.26l6.4 3a2.7 2.7 0 0 0 2.27 0l6.4-3A2.49 2.49 0 0 0 21 15.54V8.46a2.39 2.39 0 0 0-.34-1.2zm-8.95-2.2a.73.73 0 0 1 .58 0l5.33 2.48L12 10.15 6.38 7.54zM5.3 16a.47.47 0 0 1-.3-.43V9.1l6 2.79v6.72zm13.39 0L13 18.61v-6.72l6-2.79v6.44a.48.48 0 0 1-.31.46z"/></g></g>',
        "diagonal-arrow-left-down-outline": '<g data-name="Layer 2"><g data-name="diagonal-arrow-left-down"><rect width="24" height="24" opacity="0"/><path d="M17.71 6.29a1 1 0 0 0-1.42 0L8 14.59V9a1 1 0 0 0-2 0v8a1 1 0 0 0 1 1h8a1 1 0 0 0 0-2H9.41l8.3-8.29a1 1 0 0 0 0-1.42z"/></g></g>',
        "diagonal-arrow-left-up-outline": '<g data-name="Layer 2"><g data-name="diagonal-arrow-left-up"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M17.71 16.29L9.42 8H15a1 1 0 0 0 0-2H7.05a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1H7a1 1 0 0 0 1-1V9.45l8.26 8.26a1 1 0 0 0 1.42 0 1 1 0 0 0 .03-1.42z"/></g></g>',
        "diagonal-arrow-right-down-outline": '<g data-name="Layer 2"><g data-name="diagonal-arrow-right-down"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M17 8a1 1 0 0 0-1 1v5.59l-8.29-8.3a1 1 0 0 0-1.42 1.42l8.3 8.29H9a1 1 0 0 0 0 2h8a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z"/></g></g>',
        "diagonal-arrow-right-up-outline": '<g data-name="Layer 2"><g data-name="diagonal-arrow-right-up"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z"/></g></g>',
        "done-all-outline": '<g data-name="Layer 2"><g data-name="done-all"><rect width="24" height="24" opacity="0"/><path d="M16.62 6.21a1 1 0 0 0-1.41.17l-7 9-3.43-4.18a1 1 0 1 0-1.56 1.25l4.17 5.18a1 1 0 0 0 .78.37 1 1 0 0 0 .83-.38l7.83-10a1 1 0 0 0-.21-1.41z"/><path d="M21.62 6.21a1 1 0 0 0-1.41.17l-7 9-.61-.75-1.26 1.62 1.1 1.37a1 1 0 0 0 .78.37 1 1 0 0 0 .78-.38l7.83-10a1 1 0 0 0-.21-1.4z"/><path d="M8.71 13.06L10 11.44l-.2-.24a1 1 0 0 0-1.43-.2 1 1 0 0 0-.15 1.41z"/></g></g>',
        "download-outline": '<g data-name="Layer 2"><g data-name="download"><rect width="24" height="24" opacity="0"/><rect x="4" y="18" width="16" height="2" rx="1" ry="1"/><rect x="3" y="17" width="4" height="2" rx="1" ry="1" transform="rotate(-90 5 18)"/><rect x="17" y="17" width="4" height="2" rx="1" ry="1" transform="rotate(-90 19 18)"/><path d="M12 15a1 1 0 0 1-.58-.18l-4-2.82a1 1 0 0 1-.24-1.39 1 1 0 0 1 1.4-.24L12 12.76l3.4-2.56a1 1 0 0 1 1.2 1.6l-4 3a1 1 0 0 1-.6.2z"/><path d="M12 13a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1z"/></g></g>',
        "droplet-off-outline": '<g data-name="Layer 2"><g data-name="droplet-off-outline"><rect width="24" height="24" opacity="0"/><path d="M12 19a5.4 5.4 0 0 1-3.88-1.64 5.73 5.73 0 0 1-.69-7.11L6 8.82a7.74 7.74 0 0 0 .7 9.94A7.37 7.37 0 0 0 12 21a7.36 7.36 0 0 0 4.58-1.59L15.15 18A5.43 5.43 0 0 1 12 19z"/><path d="M12 5.43l3.88 4a5.71 5.71 0 0 1 1.49 5.15L19 16.15A7.72 7.72 0 0 0 17.31 8l-4.6-4.7A1 1 0 0 0 12 3a1 1 0 0 0-.72.3L8.73 5.9l1.42 1.42z"/><path d="M20.71 19.29l-16-16a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g>',
        "droplet-outline": '<g data-name="Layer 2"><g data-name="droplet-outline"><rect x=".1" y=".1" width="24" height="24" transform="rotate(.48 11.987 11.887)" opacity="0"/><path d="M12 21.1a7.4 7.4 0 0 1-5.28-2.28 7.73 7.73 0 0 1 .1-10.77l4.64-4.65a.94.94 0 0 1 .71-.3 1 1 0 0 1 .71.31l4.56 4.72a7.73 7.73 0 0 1-.09 10.77A7.33 7.33 0 0 1 12 21.1zm.13-15.57L8.24 9.45a5.74 5.74 0 0 0-.07 8A5.43 5.43 0 0 0 12 19.1a5.42 5.42 0 0 0 3.9-1.61 5.72 5.72 0 0 0 .06-8z"/></g></g>',
        "edit-2-outline": '<g data-name="Layer 2"><g data-name="edit-2"><rect width="24" height="24" opacity="0"/><path d="M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2z"/><path d="M5 18h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71L16.66 2.6A2 2 0 0 0 14 2.53l-9 9a2 2 0 0 0-.57 1.21L4 16.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 18zM15.27 4L18 6.73l-2 1.95L13.32 6zm-8.9 8.91L12 7.32l2.7 2.7-5.6 5.6-3 .28z"/></g></g>',
        "edit-outline": '<g data-name="Layer 2"><g data-name="edit"><rect width="24" height="24" opacity="0"/><path d="M19.4 7.34L16.66 4.6A2 2 0 0 0 14 4.53l-9 9a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71zM9.08 17.62l-3 .28.27-3L12 9.32l2.7 2.7zM16 10.68L13.32 8l1.95-2L18 8.73z"/></g></g>',
        "email-outline": '<g data-name="Layer 2"><g data-name="email"><rect width="24" height="24" opacity="0"/><path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2 1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1z"/></g></g>',
        "expand-outline": '<g data-name="Layer 2"><g data-name="expand"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M20 5a1 1 0 0 0-1-1h-5a1 1 0 0 0 0 2h2.57l-3.28 3.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L18 7.42V10a1 1 0 0 0 1 1 1 1 0 0 0 1-1z"/><path d="M10.71 13.29a1 1 0 0 0-1.42 0L6 16.57V14a1 1 0 0 0-1-1 1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2H7.42l3.29-3.29a1 1 0 0 0 0-1.42z"/></g></g>',
        "external-link-outline": '<g data-name="Layer 2"><g data-name="external-link"><rect width="24" height="24" opacity="0"/><path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z"/><path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z"/></g></g>',
        "eye-off-2-outline": '<g data-name="Layer 2"><g data-name="eye-off-2"><rect width="24" height="24" opacity="0"/><path d="M17.81 13.39A8.93 8.93 0 0 0 21 7.62a1 1 0 1 0-2-.24 7.07 7.07 0 0 1-14 0 1 1 0 1 0-2 .24 8.93 8.93 0 0 0 3.18 5.77l-2.3 2.32a1 1 0 0 0 1.41 1.41l2.61-2.6a9.06 9.06 0 0 0 3.1.92V19a1 1 0 0 0 2 0v-3.56a9.06 9.06 0 0 0 3.1-.92l2.61 2.6a1 1 0 0 0 1.41-1.41z"/></g></g>',
        "eye-off-outline": '<g data-name="Layer 2"><g data-name="eye-off"><rect width="24" height="24" opacity="0"/><path d="M4.71 3.29a1 1 0 0 0-1.42 1.42l5.63 5.63a3.5 3.5 0 0 0 4.74 4.74l5.63 5.63a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM12 13.5a1.5 1.5 0 0 1-1.5-1.5v-.07l1.56 1.56z"/><path d="M12.22 17c-4.3.1-7.12-3.59-8-5a13.7 13.7 0 0 1 2.24-2.72L5 7.87a15.89 15.89 0 0 0-2.87 3.63 1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25a9.48 9.48 0 0 0 3.23-.67l-1.58-1.58a7.74 7.74 0 0 1-1.7.25z"/><path d="M21.87 11.5c-.64-1.11-4.17-6.68-10.14-6.5a9.48 9.48 0 0 0-3.23.67l1.58 1.58a7.74 7.74 0 0 1 1.7-.25c4.29-.11 7.11 3.59 8 5a13.7 13.7 0 0 1-2.29 2.72L19 16.13a15.89 15.89 0 0 0 2.91-3.63 1 1 0 0 0-.04-1z"/></g></g>',
        "eye-outline": '<g data-name="Layer 2"><g data-name="eye"><rect width="24" height="24" opacity="0"/><path d="M21.87 11.5c-.64-1.11-4.16-6.68-10.14-6.5-5.53.14-8.73 5-9.6 6.5a1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25c5.53-.14 8.74-5 9.6-6.5a1 1 0 0 0 0-1zM12.22 17c-4.31.1-7.12-3.59-8-5 1-1.61 3.61-4.9 7.61-5 4.29-.11 7.11 3.59 8 5-1.03 1.61-3.61 4.9-7.61 5z"/><path d="M12 8.5a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 12 8.5zm0 5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5z"/></g></g>',
        "facebook-outline": '<g data-name="Layer 2"><g data-name="facebook"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M13 22H9a1 1 0 0 1-1-1v-6.2H6a1 1 0 0 1-1-1v-3.6a1 1 0 0 1 1-1h2V7.5A5.77 5.77 0 0 1 14 2h3a1 1 0 0 1 1 1v3.6a1 1 0 0 1-1 1h-3v1.6h3a1 1 0 0 1 .8.39 1 1 0 0 1 .16.88l-1 3.6a1 1 0 0 1-1 .73H14V21a1 1 0 0 1-1 1zm-3-2h2v-6.2a1 1 0 0 1 1-1h2.24l.44-1.6H13a1 1 0 0 1-1-1V7.5a2 2 0 0 1 2-1.9h2V4h-2a3.78 3.78 0 0 0-4 3.5v2.7a1 1 0 0 1-1 1H7v1.6h2a1 1 0 0 1 1 1z"/></g></g>',
        "file-add-outline": '<g data-name="Layer 2"><g data-name="file-add"><rect width="24" height="24" opacity="0"/><path d="M19.74 8.33l-5.44-6a1 1 0 0 0-.74-.33h-7A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V9a1 1 0 0 0-.26-.67zM14 5l2.74 3h-2a.79.79 0 0 1-.74-.85zm3.44 15H6.56a.53.53 0 0 1-.56-.5v-15a.53.53 0 0 1 .56-.5H12v3.15A2.79 2.79 0 0 0 14.71 10H18v9.5a.53.53 0 0 1-.56.5z"/><path d="M14 13h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2z"/></g></g>',
        "file-outline": '<g data-name="Layer 2"><g data-name="file"><rect width="24" height="24" opacity="0"/><path d="M19.74 8.33l-5.44-6a1 1 0 0 0-.74-.33h-7A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V9a1 1 0 0 0-.26-.67zM17.65 9h-3.94a.79.79 0 0 1-.71-.85V4h.11zm-.21 11H6.56a.53.53 0 0 1-.56-.5v-15a.53.53 0 0 1 .56-.5H11v4.15A2.79 2.79 0 0 0 13.71 11H18v8.5a.53.53 0 0 1-.56.5z"/></g></g>',
        "file-remove-outline": '<g data-name="Layer 2"><g data-name="file-remove"><rect width="24" height="24" opacity="0"/><path d="M19.74 8.33l-5.44-6a1 1 0 0 0-.74-.33h-7A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V9a1 1 0 0 0-.26-.67zM14 5l2.74 3h-2a.79.79 0 0 1-.74-.85zm3.44 15H6.56a.53.53 0 0 1-.56-.5v-15a.53.53 0 0 1 .56-.5H12v3.15A2.79 2.79 0 0 0 14.71 10H18v9.5a.53.53 0 0 1-.56.5z"/><path d="M14 13h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z"/></g></g>',
        "file-text-outline": '<g data-name="Layer 2"><g data-name="file-text"><rect width="24" height="24" opacity="0"/><path d="M15 16H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z"/><path d="M9 14h3a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2z"/><path d="M19.74 8.33l-5.44-6a1 1 0 0 0-.74-.33h-7A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V9a1 1 0 0 0-.26-.67zM14 5l2.74 3h-2a.79.79 0 0 1-.74-.85zm3.44 15H6.56a.53.53 0 0 1-.56-.5v-15a.53.53 0 0 1 .56-.5H12v3.15A2.79 2.79 0 0 0 14.71 10H18v9.5a.53.53 0 0 1-.56.5z"/></g></g>',
        "film-outline": '<g data-name="Layer 2"><g data-name="film"><rect width="24" height="24" opacity="0"/><path d="M18.26 3H5.74A2.74 2.74 0 0 0 3 5.74v12.52A2.74 2.74 0 0 0 5.74 21h12.52A2.74 2.74 0 0 0 21 18.26V5.74A2.74 2.74 0 0 0 18.26 3zM7 11H5V9h2zm-2 2h2v2H5zm4-8h6v14H9zm10 6h-2V9h2zm-2 2h2v2h-2zm2-7.26V7h-2V5h1.26a.74.74 0 0 1 .74.74zM5.74 5H7v2H5V5.74A.74.74 0 0 1 5.74 5zM5 18.26V17h2v2H5.74a.74.74 0 0 1-.74-.74zm14 0a.74.74 0 0 1-.74.74H17v-2h2z"/></g></g>',
        "flag-outline": '<g data-name="Layer 2"><g data-name="flag"><polyline points="24 24 0 24 0 0" opacity="0"/><path d="M19.27 4.68a1.79 1.79 0 0 0-1.6-.25 7.53 7.53 0 0 1-2.17.28 8.54 8.54 0 0 1-3.13-.78A10.15 10.15 0 0 0 8.5 3c-2.89 0-4 1-4.2 1.14a1 1 0 0 0-.3.72V20a1 1 0 0 0 2 0v-4.3a6.28 6.28 0 0 1 2.5-.41 8.54 8.54 0 0 1 3.13.78 10.15 10.15 0 0 0 3.87.93 7.66 7.66 0 0 0 3.5-.7 1.74 1.74 0 0 0 1-1.55V6.11a1.77 1.77 0 0 0-.73-1.43zM18 14.59a6.32 6.32 0 0 1-2.5.41 8.36 8.36 0 0 1-3.13-.79 10.34 10.34 0 0 0-3.87-.92 9.51 9.51 0 0 0-2.5.29V5.42A6.13 6.13 0 0 1 8.5 5a8.36 8.36 0 0 1 3.13.79 10.34 10.34 0 0 0 3.87.92 9.41 9.41 0 0 0 2.5-.3z"/></g></g>',
        "flash-off-outline": '<g data-name="Layer 2"><g data-name="flash-off"><rect width="24" height="24" opacity="0"/><path d="M20.71 19.29l-16-16a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/><path d="M12.54 18.06l.27-2.42L10 12.8H6.87l1.24-1.86L6.67 9.5l-2.5 3.74A1 1 0 0 0 5 14.8h5.89l-.77 7.09a1 1 0 0 0 .65 1.05 1 1 0 0 0 .34.06 1 1 0 0 0 .83-.44l3.12-4.67-1.44-1.44z"/><path d="M11.46 5.94l-.27 2.42L14 11.2h3.1l-1.24 1.86 1.44 1.44 2.5-3.74A1 1 0 0 0 19 9.2h-5.89l.77-7.09a1 1 0 0 0-.65-1 1 1 0 0 0-1.17.38L8.94 6.11l1.44 1.44z"/></g></g>',
        "flash-outline": '<g data-name="Layer 2"><g data-name="flash"><rect width="24" height="24" opacity="0"/><path d="M11.11 23a1 1 0 0 1-.34-.06 1 1 0 0 1-.65-1.05l.77-7.09H5a1 1 0 0 1-.83-1.56l7.89-11.8a1 1 0 0 1 1.17-.38 1 1 0 0 1 .65 1l-.77 7.14H19a1 1 0 0 1 .83 1.56l-7.89 11.8a1 1 0 0 1-.83.44zM6.87 12.8H12a1 1 0 0 1 .74.33 1 1 0 0 1 .25.78l-.45 4.15 4.59-6.86H12a1 1 0 0 1-1-1.11l.45-4.15z"/></g></g>',
        "flip-2-outline": '<g data-name="Layer 2"><g data-name="flip-2"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M6.09 19h12l-1.3 1.29a1 1 0 0 0 1.42 1.42l3-3a1 1 0 0 0 0-1.42l-3-3a1 1 0 0 0-1.42 0 1 1 0 0 0 0 1.42l1.3 1.29h-12a1.56 1.56 0 0 1-1.59-1.53V13a1 1 0 0 0-2 0v2.47A3.56 3.56 0 0 0 6.09 19z"/><path d="M5.79 9.71a1 1 0 1 0 1.42-1.42L5.91 7h12a1.56 1.56 0 0 1 1.59 1.53V11a1 1 0 0 0 2 0V8.53A3.56 3.56 0 0 0 17.91 5h-12l1.3-1.29a1 1 0 0 0 0-1.42 1 1 0 0 0-1.42 0l-3 3a1 1 0 0 0 0 1.42z"/></g></g>',
        "flip-outline": '<g data-name="Layer 2"><g data-name="flip-in"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M5 6.09v12l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3a1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 0-1.42 1 1 0 0 0-1.42 0L7 18.09v-12A1.56 1.56 0 0 1 8.53 4.5H11a1 1 0 0 0 0-2H8.53A3.56 3.56 0 0 0 5 6.09z"/><path d="M14.29 5.79a1 1 0 0 0 1.42 1.42L17 5.91v12a1.56 1.56 0 0 1-1.53 1.59H13a1 1 0 0 0 0 2h2.47A3.56 3.56 0 0 0 19 17.91v-12l1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-3-3a1 1 0 0 0-1.42 0z"/></g></g>',
        "folder-add-outline": '<g data-name="Layer 2"><g data-name="folder-add"><rect width="24" height="24" opacity="0"/><path d="M14 13h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2z"/><path d="M19.5 7.05h-7L9.87 3.87a1 1 0 0 0-.77-.37H4.5A2.47 2.47 0 0 0 2 5.93v12.14a2.47 2.47 0 0 0 2.5 2.43h15a2.47 2.47 0 0 0 2.5-2.43V9.48a2.47 2.47 0 0 0-2.5-2.43zm.5 11a.46.46 0 0 1-.5.43h-15a.46.46 0 0 1-.5-.43V5.93a.46.46 0 0 1 .5-.43h4.13l2.6 3.18a1 1 0 0 0 .77.37h7.5a.46.46 0 0 1 .5.43z"/></g></g>',
        "folder-outline": '<g data-name="Layer 2"><g data-name="folder"><rect width="24" height="24" opacity="0"/><path d="M19.5 20.5h-15A2.47 2.47 0 0 1 2 18.07V5.93A2.47 2.47 0 0 1 4.5 3.5h4.6a1 1 0 0 1 .77.37l2.6 3.18h7A2.47 2.47 0 0 1 22 9.48v8.59a2.47 2.47 0 0 1-2.5 2.43zM4 13.76v4.31a.46.46 0 0 0 .5.43h15a.46.46 0 0 0 .5-.43V9.48a.46.46 0 0 0-.5-.43H12a1 1 0 0 1-.77-.37L8.63 5.5H4.5a.46.46 0 0 0-.5.43z"/></g></g>',
        "folder-remove-outline": '<g data-name="Layer 2"><g data-name="folder-remove"><rect width="24" height="24" opacity="0"/><path d="M14 13h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z"/><path d="M19.5 7.05h-7L9.87 3.87a1 1 0 0 0-.77-.37H4.5A2.47 2.47 0 0 0 2 5.93v12.14a2.47 2.47 0 0 0 2.5 2.43h15a2.47 2.47 0 0 0 2.5-2.43V9.48a2.47 2.47 0 0 0-2.5-2.43zm.5 11a.46.46 0 0 1-.5.43h-15a.46.46 0 0 1-.5-.43V5.93a.46.46 0 0 1 .5-.43h4.13l2.6 3.18a1 1 0 0 0 .77.37h7.5a.46.46 0 0 1 .5.43z"/></g></g>',
        "funnel-outline": '<g data-name="Layer 2"><g data-name="funnel"><rect width="24" height="24" opacity="0"/><path d="M13.9 22a1 1 0 0 1-.6-.2l-4-3.05a1 1 0 0 1-.39-.8v-3.27l-4.8-9.22A1 1 0 0 1 5 4h14a1 1 0 0 1 .86.49 1 1 0 0 1 0 1l-5 9.21V21a1 1 0 0 1-.55.9 1 1 0 0 1-.41.1zm-3-4.54l2 1.53v-4.55A1 1 0 0 1 13 14l4.3-8H6.64l4.13 8a1 1 0 0 1 .11.46z"/></g></g>',
        "gift-outline": '<g data-name="Layer 2"><g data-name="gift"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M19.2 7h-.39A3 3 0 0 0 19 6a3.08 3.08 0 0 0-3.14-3A4.46 4.46 0 0 0 12 5.4 4.46 4.46 0 0 0 8.14 3 3.08 3.08 0 0 0 5 6a3 3 0 0 0 .19 1H4.8A2 2 0 0 0 3 9.2v3.6A2.08 2.08 0 0 0 4.5 15v4.37A1.75 1.75 0 0 0 6.31 21h11.38a1.75 1.75 0 0 0 1.81-1.67V15a2.08 2.08 0 0 0 1.5-2.2V9.2A2 2 0 0 0 19.2 7zM19 9.2v3.6a.56.56 0 0 1 0 .2h-6V9h6a.56.56 0 0 1 0 .2zM15.86 5A1.08 1.08 0 0 1 17 6a1.08 1.08 0 0 1-1.14 1H13.4a2.93 2.93 0 0 1 2.46-2zM7 6a1.08 1.08 0 0 1 1.14-1 2.93 2.93 0 0 1 2.45 2H8.14A1.08 1.08 0 0 1 7 6zM5 9.2A.56.56 0 0 1 5 9h6v4H5a.56.56 0 0 1 0-.2zM6.5 15H11v4H6.5zm6.5 4v-4h4.5v4z"/></g></g>',
        "github-outline": '<g data-name="Layer 2"><rect width="24" height="24" opacity="0"/><path d="M16.24 22a1 1 0 0 1-1-1v-2.6a2.15 2.15 0 0 0-.54-1.66 1 1 0 0 1 .61-1.67C17.75 14.78 20 14 20 9.77a4 4 0 0 0-.67-2.22 2.75 2.75 0 0 1-.41-2.06 3.71 3.71 0 0 0 0-1.41 7.65 7.65 0 0 0-2.09 1.09 1 1 0 0 1-.84.15 10.15 10.15 0 0 0-5.52 0 1 1 0 0 1-.84-.15 7.4 7.4 0 0 0-2.11-1.09 3.52 3.52 0 0 0 0 1.41 2.84 2.84 0 0 1-.43 2.08 4.07 4.07 0 0 0-.67 2.23c0 3.89 1.88 4.93 4.7 5.29a1 1 0 0 1 .82.66 1 1 0 0 1-.21 1 2.06 2.06 0 0 0-.55 1.56V21a1 1 0 0 1-2 0v-.57a6 6 0 0 1-5.27-2.09 3.9 3.9 0 0 0-1.16-.88 1 1 0 1 1 .5-1.94 4.93 4.93 0 0 1 2 1.36c1 1 2 1.88 3.9 1.52a3.89 3.89 0 0 1 .23-1.58c-2.06-.52-5-2-5-7a6 6 0 0 1 1-3.33.85.85 0 0 0 .13-.62 5.69 5.69 0 0 1 .33-3.21 1 1 0 0 1 .63-.57c.34-.1 1.56-.3 3.87 1.2a12.16 12.16 0 0 1 5.69 0c2.31-1.5 3.53-1.31 3.86-1.2a1 1 0 0 1 .63.57 5.71 5.71 0 0 1 .33 3.22.75.75 0 0 0 .11.57 6 6 0 0 1 1 3.34c0 5.07-2.92 6.54-5 7a4.28 4.28 0 0 1 .22 1.67V21a1 1 0 0 1-.94 1z"/></g>',
        "globe-2-outline": '<g data-name="Layer 2"><g data-name="globe-2"><rect width="24" height="24" opacity="0"/><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 2a8.19 8.19 0 0 1 1.79.21 2.61 2.61 0 0 1-.78 1c-.22.17-.46.31-.7.46a4.56 4.56 0 0 0-1.85 1.67 6.49 6.49 0 0 0-.62 3.3c0 1.36 0 2.16-.95 2.87-1.37 1.07-3.46.47-4.76-.07A8.33 8.33 0 0 1 4 12a8 8 0 0 1 8-8zM5 15.8a8.42 8.42 0 0 0 2 .27 5 5 0 0 0 3.14-1c1.71-1.34 1.71-3.06 1.71-4.44a4.76 4.76 0 0 1 .37-2.34 2.86 2.86 0 0 1 1.12-.91 9.75 9.75 0 0 0 .92-.61 4.55 4.55 0 0 0 1.4-1.87A8 8 0 0 1 19 8.12c-1.43.2-3.46.67-3.86 2.53A7 7 0 0 0 15 12a2.93 2.93 0 0 1-.29 1.47l-.1.17c-.65 1.08-1.38 2.31-.39 4 .12.21.25.41.38.61a2.29 2.29 0 0 1 .52 1.08A7.89 7.89 0 0 1 12 20a8 8 0 0 1-7-4.2zm11.93 2.52a6.79 6.79 0 0 0-.63-1.14c-.11-.16-.22-.32-.32-.49-.39-.68-.25-1 .38-2l.1-.17a4.77 4.77 0 0 0 .54-2.43 5.42 5.42 0 0 1 .09-1c.16-.73 1.71-.93 2.67-1a7.94 7.94 0 0 1-2.86 8.28z"/></g></g>',
        "globe-outline": '<g data-name="Layer 2"><g data-name="globe"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M22 12A10 10 0 0 0 12 2a10 10 0 0 0 0 20 10 10 0 0 0 10-10zm-2.07-1H17a12.91 12.91 0 0 0-2.33-6.54A8 8 0 0 1 19.93 11zM9.08 13H15a11.44 11.44 0 0 1-3 6.61A11 11 0 0 1 9.08 13zm0-2A11.4 11.4 0 0 1 12 4.4a11.19 11.19 0 0 1 3 6.6zm.36-6.57A13.18 13.18 0 0 0 7.07 11h-3a8 8 0 0 1 5.37-6.57zM4.07 13h3a12.86 12.86 0 0 0 2.35 6.56A8 8 0 0 1 4.07 13zm10.55 6.55A13.14 13.14 0 0 0 17 13h2.95a8 8 0 0 1-5.33 6.55z"/></g></g>',
        "google-outline": '<g data-name="Layer 2"><g data-name="google"><polyline points="0 0 24 0 24 24 0 24" opacity="0"/><path d="M12 22h-.43A10.16 10.16 0 0 1 2 12.29a10 10 0 0 1 14.12-9.41 1.48 1.48 0 0 1 .77.86 1.47 1.47 0 0 1-.1 1.16L15.5 7.28a1.44 1.44 0 0 1-1.83.64A4.5 4.5 0 0 0 8.77 9a4.41 4.41 0 0 0-1.16 3.34 4.36 4.36 0 0 0 1.66 3 4.52 4.52 0 0 0 3.45 1 3.89 3.89 0 0 0 2.63-1.57h-2.9A1.45 1.45 0 0 1 11 13.33v-2.68a1.45 1.45 0 0 1 1.45-1.45h8.1A1.46 1.46 0 0 1 22 10.64v1.88A10 10 0 0 1 12 22zm0-18a8 8 0 0 0-8 8.24A8.12 8.12 0 0 0 11.65 20 8 8 0 0 0 20 12.42V11.2h-7v1.58h5.31l-.41 1.3a6 6 0 0 1-4.9 4.25A6.58 6.58 0 0 1 8 17a6.33 6.33 0 0 1-.72-9.3A6.52 6.52 0 0 1 14 5.91l.77-1.43A7.9 7.9 0 0 0 12 4z"/></g></g>',
        "grid-outline": '<g data-name="Layer 2"><g data-name="grid"><rect width="24" height="24" opacity="0"/><path d="M9 3H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM5 9V5h4v4z"/><path d="M19 3h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-4 6V5h4v4z"/><path d="M9 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm-4 6v-4h4v4z"/><path d="M19 13h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm-4 6v-4h4v4z"/></g></g>',
        "hard-drive-outline": '<g data-name="Layer 2"><g data-name="hard-drive"><rect width="24" height="24" opacity="0"/><path d="M20.79 11.34l-3.34-6.68A3 3 0 0 0 14.76 3H9.24a3 3 0 0 0-2.69 1.66l-3.34 6.68a2 2 0 0 0-.21.9V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5.76a2 2 0 0 0-.21-.9zM8.34 5.55a1 1 0 0 1 .9-.55h5.52a1 1 0 0 1 .9.55L18.38 11H5.62zM18 19H6a1 1 0 0 1-1-1v-5h14v5a1 1 0 0 1-1 1z"/><path d="M16 15h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z"/><circle cx="8" cy="16" r="1"/></g></g>',
        "hash-outline": '<g data-name="Layer 2"><g data-name="hash"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M20 14h-4.3l.73-4H20a1 1 0 0 0 0-2h-3.21l.69-3.81A1 1 0 0 0 16.64 3a1 1 0 0 0-1.22.82L14.67 8h-3.88l.69-3.81A1 1 0 0 0 10.64 3a1 1 0 0 0-1.22.82L8.67 8H4a1 1 0 0 0 0 2h4.3l-.73 4H4a1 1 0 0 0 0 2h3.21l-.69 3.81A1 1 0 0 0 7.36 21a1 1 0 0 0 1.22-.82L9.33 16h3.88l-.69 3.81a1 1 0 0 0 .84 1.19 1 1 0 0 0 1.22-.82l.75-4.18H20a1 1 0 0 0 0-2zM9.7 14l.73-4h3.87l-.73 4z"/></g></g>',
        "headphones-outline": '<g data-name="Layer 2"><g data-name="headphones"><rect width="24" height="24" opacity="0"/><path d="M12 2A10.2 10.2 0 0 0 2 12.37V17a4 4 0 1 0 4-4 3.91 3.91 0 0 0-2 .56v-1.19A8.2 8.2 0 0 1 12 4a8.2 8.2 0 0 1 8 8.37v1.19a3.91 3.91 0 0 0-2-.56 4 4 0 1 0 4 4v-4.63A10.2 10.2 0 0 0 12 2zM6 15a2 2 0 1 1-2 2 2 2 0 0 1 2-2zm12 4a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"/></g></g>',
        "heart-outline": '<g data-name="Layer 2"><g data-name="heart"><rect width="24" height="24" opacity="0"/><path d="M12 21a1 1 0 0 1-.71-.29l-7.77-7.78a5.26 5.26 0 0 1 0-7.4 5.24 5.24 0 0 1 7.4 0L12 6.61l1.08-1.08a5.24 5.24 0 0 1 7.4 0 5.26 5.26 0 0 1 0 7.4l-7.77 7.78A1 1 0 0 1 12 21zM7.22 6a3.2 3.2 0 0 0-2.28.94 3.24 3.24 0 0 0 0 4.57L12 18.58l7.06-7.07a3.24 3.24 0 0 0 0-4.57 3.32 3.32 0 0 0-4.56 0l-1.79 1.8a1 1 0 0 1-1.42 0L9.5 6.94A3.2 3.2 0 0 0 7.22 6z"/></g></g>',
        "home-outline": '<g data-name="Layer 2"><g data-name="home"><rect width="24" height="24" opacity="0"/><path d="M20.42 10.18L12.71 2.3a1 1 0 0 0-1.42 0l-7.71 7.89A2 2 0 0 0 3 11.62V20a2 2 0 0 0 1.89 2h14.22A2 2 0 0 0 21 20v-8.38a2.07 2.07 0 0 0-.58-1.44zM10 20v-6h4v6zm9 0h-3v-7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H5v-8.42l7-7.15 7 7.19z"/></g></g>',
        "image-outline": '<g data-name="Layer 2"><g data-name="image"><rect width="24" height="24" opacity="0"/><path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM6 5h12a1 1 0 0 1 1 1v8.36l-3.2-2.73a2.77 2.77 0 0 0-3.52 0L5 17.7V6a1 1 0 0 1 1-1zm12 14H6.56l7-5.84a.78.78 0 0 1 .93 0L19 17v1a1 1 0 0 1-1 1z"/><circle cx="8" cy="8.5" r="1.5"/></g></g>',
        "inbox-outline": '<g data-name="Layer 2"><g data-name="inbox"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M20.79 11.34l-3.34-6.68A3 3 0 0 0 14.76 3H9.24a3 3 0 0 0-2.69 1.66l-3.34 6.68a2 2 0 0 0-.21.9V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5.76a2 2 0 0 0-.21-.9zM8.34 5.55a1 1 0 0 1 .9-.55h5.52a1 1 0 0 1 .9.55L18.38 11H16a1 1 0 0 0-1 1v3H9v-3a1 1 0 0 0-1-1H5.62zM18 19H6a1 1 0 0 1-1-1v-5h2v3a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3h2v5a1 1 0 0 1-1 1z"/></g></g>',
        "info-outline": '<g data-name="Layer 2"><g data-name="info"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><circle cx="12" cy="8" r="1"/><path d="M12 10a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1z"/></g></g>',
        "keypad-outline": '<g data-name="Layer 2"><g data-name="keypad"><rect width="24" height="24" opacity="0"/><path d="M5 2a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/><path d="M12 2a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/><path d="M19 8a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/><path d="M5 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/><path d="M12 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/><path d="M19 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/><path d="M5 16a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/><path d="M12 16a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/><path d="M19 16a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/></g></g>',
        "layers-outline": '<g data-name="Layer 2"><g data-name="layers"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M21 11.35a1 1 0 0 0-.61-.86l-2.15-.92 2.26-1.3a1 1 0 0 0 .5-.92 1 1 0 0 0-.61-.86l-8-3.41a1 1 0 0 0-.78 0l-8 3.41a1 1 0 0 0-.61.86 1 1 0 0 0 .5.92l2.26 1.3-2.15.92a1 1 0 0 0-.61.86 1 1 0 0 0 .5.92l2.26 1.3-2.15.92a1 1 0 0 0-.61.86 1 1 0 0 0 .5.92l8 4.6a1 1 0 0 0 1 0l8-4.6a1 1 0 0 0 .5-.92 1 1 0 0 0-.61-.86l-2.15-.92 2.26-1.3a1 1 0 0 0 .5-.92zm-9-6.26l5.76 2.45L12 10.85 6.24 7.54zm-.5 7.78a1 1 0 0 0 1 0l3.57-2 1.69.72L12 14.85l-5.76-3.31 1.69-.72zm6.26 2.67L12 18.85l-5.76-3.31 1.69-.72 3.57 2.05a1 1 0 0 0 1 0l3.57-2.05z"/></g></g>',
        "layout-outline": '<g data-name="Layer 2"><g data-name="layout"><rect width="24" height="24" opacity="0"/><path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM6 5h12a1 1 0 0 1 1 1v2H5V6a1 1 0 0 1 1-1zM5 18v-8h6v9H6a1 1 0 0 1-1-1zm13 1h-5v-9h6v8a1 1 0 0 1-1 1z"/></g></g>',
        "link-2-outline": '<g data-name="Layer 2"><g data-name="link-2"><rect width="24" height="24" opacity="0"/><path d="M13.29 9.29l-4 4a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4-4a1 1 0 0 0-1.42-1.42z"/><path d="M12.28 17.4L11 18.67a4.2 4.2 0 0 1-5.58.4 4 4 0 0 1-.27-5.93l1.42-1.43a1 1 0 0 0 0-1.42 1 1 0 0 0-1.42 0l-1.27 1.28a6.15 6.15 0 0 0-.67 8.07 6.06 6.06 0 0 0 9.07.6l1.42-1.42a1 1 0 0 0-1.42-1.42z"/><path d="M19.66 3.22a6.18 6.18 0 0 0-8.13.68L10.45 5a1.09 1.09 0 0 0-.17 1.61 1 1 0 0 0 1.42 0L13 5.3a4.17 4.17 0 0 1 5.57-.4 4 4 0 0 1 .27 5.95l-1.42 1.43a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l1.42-1.42a6.06 6.06 0 0 0-.6-9.06z"/></g></g>',
        "link-outline": '<g data-name="Layer 2"><g data-name="link"><rect width="24" height="24" opacity="0"/><path d="M8 12a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2H9a1 1 0 0 0-1 1z"/><path d="M9 16H7.21A4.13 4.13 0 0 1 3 12.37 4 4 0 0 1 7 8h2a1 1 0 0 0 0-2H7.21a6.15 6.15 0 0 0-6.16 5.21A6 6 0 0 0 7 18h2a1 1 0 0 0 0-2z"/><path d="M23 11.24A6.16 6.16 0 0 0 16.76 6h-1.51C14.44 6 14 6.45 14 7a1 1 0 0 0 1 1h1.79A4.13 4.13 0 0 1 21 11.63 4 4 0 0 1 17 16h-2a1 1 0 0 0 0 2h2a6 6 0 0 0 6-6.76z"/></g></g>',
        "linkedin-outline": '<g data-name="Layer 2"><g data-name="linkedin"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M20 22h-1.67a2 2 0 0 1-2-2v-5.37a.92.92 0 0 0-.69-.93.84.84 0 0 0-.67.19.85.85 0 0 0-.3.65V20a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2v-5.46a6.5 6.5 0 1 1 13 0V20a2 2 0 0 1-2 2zm-4.5-10.31a3.73 3.73 0 0 1 .47 0 2.91 2.91 0 0 1 2.36 2.9V20H20v-5.46a4.5 4.5 0 1 0-9 0V20h1.67v-5.46a2.85 2.85 0 0 1 2.83-2.85z"/><path d="M6 22H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2zM4 10v10h2V10z"/><path d="M5 7a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1z"/></g></g>',
        "list-outline": '<g data-name="Layer 2"><g data-name="list"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><circle cx="4" cy="7" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="17" r="1"/><rect x="7" y="11" width="14" height="2" rx=".94" ry=".94"/><rect x="7" y="16" width="14" height="2" rx=".94" ry=".94"/><rect x="7" y="6" width="14" height="2" rx=".94" ry=".94"/></g></g>',
        "loader-outline": '<g data-name="Layer 2"><g data-name="loader"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M12 2a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1z"/><path d="M21 11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z"/><path d="M6 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1z"/><path d="M6.22 5a1 1 0 0 0-1.39 1.47l1.44 1.39a1 1 0 0 0 .73.28 1 1 0 0 0 .72-.31 1 1 0 0 0 0-1.41z"/><path d="M17 8.14a1 1 0 0 0 .69-.28l1.44-1.39A1 1 0 0 0 17.78 5l-1.44 1.42a1 1 0 0 0 0 1.41 1 1 0 0 0 .66.31z"/><path d="M12 18a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1z"/><path d="M17.73 16.14a1 1 0 0 0-1.39 1.44L17.78 19a1 1 0 0 0 .69.28 1 1 0 0 0 .72-.3 1 1 0 0 0 0-1.42z"/><path d="M6.27 16.14l-1.44 1.39a1 1 0 0 0 0 1.42 1 1 0 0 0 .72.3 1 1 0 0 0 .67-.25l1.44-1.39a1 1 0 0 0-1.39-1.44z"/></g></g>',
        "lock-outline": '<g data-name="Layer 2"><g data-name="lock"><rect width="24" height="24" opacity="0"/><path d="M17 8h-1V6.11a4 4 0 1 0-8 0V8H7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zm-7-1.89A2.06 2.06 0 0 1 12 4a2.06 2.06 0 0 1 2 2.11V8h-4zM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1z"/><path d="M12 12a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/></g></g>',
        "log-in-outline": '<g data-name="Layer 2"><g data-name="log-in"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M19 4h-2a1 1 0 0 0 0 2h1v12h-1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"/><path d="M11.8 7.4a1 1 0 0 0-1.6 1.2L12 11H4a1 1 0 0 0 0 2h8.09l-1.72 2.44a1 1 0 0 0 .24 1.4 1 1 0 0 0 .58.18 1 1 0 0 0 .81-.42l2.82-4a1 1 0 0 0 0-1.18z"/></g></g>',
        "log-out-outline": '<g data-name="Layer 2"><g data-name="log-out"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M7 6a1 1 0 0 0 0-2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2H6V6z"/><path d="M20.82 11.42l-2.82-4a1 1 0 0 0-1.39-.24 1 1 0 0 0-.24 1.4L18.09 11H10a1 1 0 0 0 0 2h8l-1.8 2.4a1 1 0 0 0 .2 1.4 1 1 0 0 0 .6.2 1 1 0 0 0 .8-.4l3-4a1 1 0 0 0 .02-1.18z"/></g></g>',
        "map-outline": '<g data-name="Layer 2"><g data-name="map"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M20.41 5.89l-4-1.8H15.59L12 5.7 8.41 4.09h-.05L8.24 4h-.6l-4 1.8a1 1 0 0 0-.64 1V19a1 1 0 0 0 .46.84A1 1 0 0 0 4 20a1 1 0 0 0 .41-.09L8 18.3l3.59 1.61h.05a.85.85 0 0 0 .72 0h.05L16 18.3l3.59 1.61A1 1 0 0 0 20 20a1 1 0 0 0 .54-.16A1 1 0 0 0 21 19V6.8a1 1 0 0 0-.59-.91zM5 7.44l2-.89v10l-2 .89zm4-.89l2 .89v10l-2-.89zm4 .89l2-.89v10l-2 .89zm6 10l-2-.89v-10l2 .89z"/></g></g>',
        "maximize-outline": '<g data-name="Layer 2"><g data-name="maximize"><rect width="24" height="24" opacity="0"/><path d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"/><path d="M13 10h-1V9a1 1 0 0 0-2 0v1H9a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2z"/></g></g>',
        "menu-2-outline": '<g data-name="Layer 2"><g data-name="menu-2"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><circle cx="4" cy="12" r="1"/><rect x="7" y="11" width="14" height="2" rx=".94" ry=".94"/><rect x="3" y="16" width="18" height="2" rx=".94" ry=".94"/><rect x="3" y="6" width="18" height="2" rx=".94" ry=".94"/></g></g>',
        "menu-arrow-outline": '<g data-name="Layer 2"><g data-name="menu-arrow"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M20.05 11H5.91l1.3-1.29a1 1 0 0 0-1.42-1.42l-3 3a1 1 0 0 0 0 1.42l3 3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L5.91 13h14.14a1 1 0 0 0 .95-.95V12a1 1 0 0 0-.95-1z"/><rect x="3" y="17" width="18" height="2" rx=".95" ry=".95"/><rect x="3" y="5" width="18" height="2" rx=".95" ry=".95"/></g></g>',
        "menu-outline": '<g data-name="Layer 2"><g data-name="menu"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><rect x="3" y="11" width="18" height="2" rx=".95" ry=".95"/><rect x="3" y="16" width="18" height="2" rx=".95" ry=".95"/><rect x="3" y="6" width="18" height="2" rx=".95" ry=".95"/></g></g>',
        "message-circle-outline": '<g data-name="Layer 2"><g data-name="message-circle"><circle cx="12" cy="12" r="1"/><circle cx="16" cy="12" r="1"/><circle cx="8" cy="12" r="1"/><path d="M19.07 4.93a10 10 0 0 0-16.28 11 1.06 1.06 0 0 1 .09.64L2 20.8a1 1 0 0 0 .27.91A1 1 0 0 0 3 22h.2l4.28-.86a1.26 1.26 0 0 1 .64.09 10 10 0 0 0 11-16.28zm.83 8.36a8 8 0 0 1-11 6.08 3.26 3.26 0 0 0-1.25-.26 3.43 3.43 0 0 0-.56.05l-2.82.57.57-2.82a3.09 3.09 0 0 0-.21-1.81 8 8 0 0 1 6.08-11 8 8 0 0 1 9.19 9.19z"/><rect width="24" height="24" opacity="0"/></g></g>',
        "message-square-outline": '<g data-name="Layer 2"><g data-name="message-square"><rect width="24" height="24" opacity="0"/><circle cx="12" cy="11" r="1"/><circle cx="16" cy="11" r="1"/><circle cx="8" cy="11" r="1"/><path d="M19 3H5a3 3 0 0 0-3 3v15a1 1 0 0 0 .51.87A1 1 0 0 0 3 22a1 1 0 0 0 .51-.14L8 19.14a1 1 0 0 1 .55-.14H19a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 13a1 1 0 0 1-1 1H8.55a3 3 0 0 0-1.55.43l-3 1.8V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z"/></g></g>',
        "mic-off-outline": '<g data-name="Layer 2"><g data-name="mic-off"><rect width="24" height="24" opacity="0"/><path d="M10 6a2 2 0 0 1 4 0v5a1 1 0 0 1 0 .16l1.6 1.59A4 4 0 0 0 16 11V6a4 4 0 0 0-7.92-.75L10 7.17z"/><path d="M19 11a1 1 0 0 0-2 0 4.86 4.86 0 0 1-.69 2.48L17.78 15A7 7 0 0 0 19 11z"/><path d="M12 15h.16L8 10.83V11a4 4 0 0 0 4 4z"/><path d="M20.71 19.29l-16-16a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/><path d="M15 20h-2v-2.08a7 7 0 0 0 1.65-.44l-1.6-1.6A4.57 4.57 0 0 1 12 16a5 5 0 0 1-5-5 1 1 0 0 0-2 0 7 7 0 0 0 6 6.92V20H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z"/></g></g>',
        "mic-outline": '<g data-name="Layer 2"><g data-name="mic"><rect width="24" height="24" opacity="0"/><path d="M12 15a4 4 0 0 0 4-4V6a4 4 0 0 0-8 0v5a4 4 0 0 0 4 4zm-2-9a2 2 0 0 1 4 0v5a2 2 0 0 1-4 0z"/><path d="M19 11a1 1 0 0 0-2 0 5 5 0 0 1-10 0 1 1 0 0 0-2 0 7 7 0 0 0 6 6.92V20H8.89a.89.89 0 0 0-.89.89v.22a.89.89 0 0 0 .89.89h6.22a.89.89 0 0 0 .89-.89v-.22a.89.89 0 0 0-.89-.89H13v-2.08A7 7 0 0 0 19 11z"/></g></g>',
        "minimize-outline": '<g data-name="Layer 2"><g data-name="minimize"><rect width="24" height="24" opacity="0"/><path d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"/><path d="M13 10H9a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z"/></g></g>',
        "minus-circle-outline": '<g data-name="Layer 2"><g data-name="minus-circle"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M15 11H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z"/></g></g>',
        "minus-outline": '<g data-name="Layer 2"><g data-name="minus"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M19 13H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2z"/></g></g>',
        "minus-square-outline": '<g data-name="Layer 2"><g data-name="minus-square"><rect width="24" height="24" opacity="0"/><path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1z"/><path d="M15 11H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z"/></g></g>',
        "monitor-outline": '<g data-name="Layer 2"><g data-name="monitor"><rect width="24" height="24" opacity="0"/><path d="M19 3H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h6v2H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-4v-2h6a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z"/></g></g>',
        "moon-outline": '<g data-name="Layer 2"><g data-name="moon"><rect width="24" height="24" opacity="0"/><path d="M12.3 22h-.1a10.31 10.31 0 0 1-7.34-3.15 10.46 10.46 0 0 1-.26-14 10.13 10.13 0 0 1 4-2.74 1 1 0 0 1 1.06.22 1 1 0 0 1 .24 1 8.4 8.4 0 0 0 1.94 8.81 8.47 8.47 0 0 0 8.83 1.94 1 1 0 0 1 1.27 1.29A10.16 10.16 0 0 1 19.6 19a10.28 10.28 0 0 1-7.3 3zM7.46 4.92a7.93 7.93 0 0 0-1.37 1.22 8.44 8.44 0 0 0 .2 11.32A8.29 8.29 0 0 0 12.22 20h.08a8.34 8.34 0 0 0 6.78-3.49A10.37 10.37 0 0 1 7.46 4.92z"/></g></g>',
        "more-horizontal-outline": '<g data-name="Layer 2"><g data-name="more-horizotnal"><rect width="24" height="24" opacity="0"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/><circle cx="5" cy="12" r="2"/></g></g>',
        "more-vertical-outline": '<g data-name="Layer 2"><g data-name="more-vertical"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="5" r="2"/><circle cx="12" cy="19" r="2"/></g></g>',
        "move-outline": '<g data-name="Layer 2"><g data-name="move"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M21.71 11.31l-3-3a1 1 0 0 0-1.42 1.42L18.58 11H13V5.41l1.29 1.3A1 1 0 0 0 15 7a1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.42l-3-3A1 1 0 0 0 12 2a1 1 0 0 0-.7.29l-3 3a1 1 0 0 0 1.41 1.42L11 5.42V11H5.41l1.3-1.29a1 1 0 0 0-1.42-1.42l-3 3A1 1 0 0 0 2 12a1 1 0 0 0 .29.71l3 3A1 1 0 0 0 6 16a1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.42L5.42 13H11v5.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 22a1 1 0 0 0 .7-.29l3-3a1 1 0 0 0-1.42-1.42L13 18.58V13h5.59l-1.3 1.29a1 1 0 0 0 0 1.42A1 1 0 0 0 18 16a1 1 0 0 0 .71-.29l3-3A1 1 0 0 0 22 12a1 1 0 0 0-.29-.69z"/></g></g>',
        "music-outline": '<g data-name="Layer 2"><g data-name="music"><rect width="24" height="24" opacity="0"/><path d="M19 15V4a1 1 0 0 0-.38-.78 1 1 0 0 0-.84-.2l-9 2A1 1 0 0 0 8 6v8.34a3.49 3.49 0 1 0 2 3.18 4.36 4.36 0 0 0 0-.52V6.8l7-1.55v7.09a3.49 3.49 0 1 0 2 3.17 4.57 4.57 0 0 0 0-.51zM6.54 19A1.49 1.49 0 1 1 8 17.21a1.53 1.53 0 0 1 0 .3A1.49 1.49 0 0 1 6.54 19zm9-2A1.5 1.5 0 1 1 17 15.21a1.53 1.53 0 0 1 0 .3A1.5 1.5 0 0 1 15.51 17z"/></g></g>',
        "navigation-2-outline": '<g data-name="Layer 2"><g data-name="navigation-2"><rect width="24" height="24" opacity="0"/><path d="M13.67 22h-.06a1 1 0 0 1-.92-.8L11 13l-8.2-1.69a1 1 0 0 1-.12-1.93l16-5.33A1 1 0 0 1 20 5.32l-5.33 16a1 1 0 0 1-1 .68zm-6.8-11.9l5.19 1.06a1 1 0 0 1 .79.78l1.05 5.19 3.52-10.55z"/></g></g>',
        "navigation-outline": '<g data-name="Layer 2"><g data-name="navigation"><rect width="24" height="24" opacity="0"/><path d="M20 20a.94.94 0 0 1-.55-.17L12 14.9l-7.45 4.93a1 1 0 0 1-1.44-1.28l8-16a1 1 0 0 1 1.78 0l8 16a1 1 0 0 1-.23 1.2A1 1 0 0 1 20 20zm-8-7.3a1 1 0 0 1 .55.17l4.88 3.23L12 5.24 6.57 16.1l4.88-3.23a1 1 0 0 1 .55-.17z"/></g></g>',
        "npm-outline": '<g data-name="Layer 2"><g data-name="npm"><rect width="24" height="24" opacity="0"/><path d="M18 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3zM6 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"/><rect x="12" y="9" width="4" height="10"/></g></g>',
        "options-2-outline": '<g data-name="Layer 2"><g data-name="options-2"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M19 9a3 3 0 0 0-2.82 2H3a1 1 0 0 0 0 2h13.18A3 3 0 1 0 19 9zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/><path d="M3 7h1.18a3 3 0 0 0 5.64 0H21a1 1 0 0 0 0-2H9.82a3 3 0 0 0-5.64 0H3a1 1 0 0 0 0 2zm4-2a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/><path d="M21 17h-7.18a3 3 0 0 0-5.64 0H3a1 1 0 0 0 0 2h5.18a3 3 0 0 0 5.64 0H21a1 1 0 0 0 0-2zm-10 2a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/></g></g>',
        "options-outline": '<g data-name="Layer 2"><g data-name="options"><rect width="24" height="24" opacity="0"/><path d="M7 14.18V3a1 1 0 0 0-2 0v11.18a3 3 0 0 0 0 5.64V21a1 1 0 0 0 2 0v-1.18a3 3 0 0 0 0-5.64zM6 18a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/><path d="M21 13a3 3 0 0 0-2-2.82V3a1 1 0 0 0-2 0v7.18a3 3 0 0 0 0 5.64V21a1 1 0 0 0 2 0v-5.18A3 3 0 0 0 21 13zm-3 1a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/><path d="M15 5a3 3 0 1 0-4 2.82V21a1 1 0 0 0 2 0V7.82A3 3 0 0 0 15 5zm-3 1a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/></g></g>',
        "pantone-outline": '<g data-name="Layer 2"><g data-name="pantone"><rect width="24" height="24" opacity="0"/><path d="M20 13.18h-4.06l2.3-2.47a1 1 0 0 0 0-1.41l-4.19-3.86a.93.93 0 0 0-.71-.26 1 1 0 0 0-.7.31l-1.82 2V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v13.09A3.91 3.91 0 0 0 6.91 21H20a1 1 0 0 0 1-1v-5.82a1 1 0 0 0-1-1zm-6.58-5.59l2.67 2.49-5.27 5.66v-5.36zM8.82 10v3H5v-3zm0-5v3H5V5zM5 17.09V15h3.82v2.09a1.91 1.91 0 0 1-3.82 0zM19 19h-8.49l3.56-3.82H19z"/></g></g>',
        "paper-plane-outline": '<g data-name="Layer 2"><g data-name="paper-plane"><rect width="24" height="24" opacity="0"/><path d="M21 4a1.31 1.31 0 0 0-.06-.27v-.09a1 1 0 0 0-.2-.3 1 1 0 0 0-.29-.19h-.09a.86.86 0 0 0-.31-.15H20a1 1 0 0 0-.3 0l-18 6a1 1 0 0 0 0 1.9l8.53 2.84 2.84 8.53a1 1 0 0 0 1.9 0l6-18A1 1 0 0 0 21 4zm-4.7 2.29l-5.57 5.57L5.16 10zM14 18.84l-1.86-5.57 5.57-5.57z"/></g></g>',
        "pause-circle-outline": '<g data-name="Layer 2"><g data-name="pause-circle"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M15 8a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z"/><path d="M9 8a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z"/></g></g>',
        "people-outline": '<g data-name="Layer 2"><g data-name="people"><rect width="24" height="24" opacity="0"/><path d="M9 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"/><path d="M17 13a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/><path d="M17 14a5 5 0 0 0-3.06 1.05A7 7 0 0 0 2 20a1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 6.9 6.9 0 0 0-.86-3.35A3 3 0 0 1 20 19a1 1 0 0 0 2 0 5 5 0 0 0-5-5z"/></g></g>',
        "percent-outline": '<g data-name="Layer 2"><g data-name="percent"><rect width="24" height="24" opacity="0"/><path d="M8 11a3.5 3.5 0 1 0-3.5-3.5A3.5 3.5 0 0 0 8 11zm0-5a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 8 6z"/><path d="M16 14a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 16 14zm0 5a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 16 19z"/><path d="M19.74 4.26a.89.89 0 0 0-1.26 0L4.26 18.48a.91.91 0 0 0-.26.63.89.89 0 0 0 1.52.63L19.74 5.52a.89.89 0 0 0 0-1.26z"/></g></g>',
        "person-add-outline": '<g data-name="Layer 2"><g data-name="person-add"><rect width="24" height="24" opacity="0"/><path d="M21 6h-1V5a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0V8h1a1 1 0 0 0 0-2z"/><path d="M10 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"/><path d="M10 13a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z"/></g></g>',
        "person-delete-outline": '<g data-name="Layer 2"><g data-name="person-delete"><rect width="24" height="24" opacity="0"/><path d="M20.47 7.5l.73-.73a1 1 0 0 0-1.47-1.47L19 6l-.73-.73a1 1 0 0 0-1.47 1.5l.73.73-.73.73a1 1 0 0 0 1.47 1.47L19 9l.73.73a1 1 0 0 0 1.47-1.5z"/><path d="M10 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"/><path d="M10 13a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z"/></g></g>',
        "person-done-outline": '<g data-name="Layer 2"><g data-name="person-done"><rect width="24" height="24" opacity="0"/><path d="M21.66 4.25a1 1 0 0 0-1.41.09l-1.87 2.15-.63-.71a1 1 0 0 0-1.5 1.33l1.39 1.56a1 1 0 0 0 .75.33 1 1 0 0 0 .74-.34l2.61-3a1 1 0 0 0-.08-1.41z"/><path d="M10 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"/><path d="M10 13a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z"/></g></g>',
        "person-outline": '<g data-name="Layer 2"><g data-name="person"><rect width="24" height="24" opacity="0"/><path d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"/><path d="M12 13a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z"/></g></g>',
        "person-remove-outline": '<g data-name="Layer 2"><g data-name="person-remove"><rect width="24" height="24" opacity="0"/><path d="M21 6h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z"/><path d="M10 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"/><path d="M10 13a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z"/></g></g>',
        "phone-call-outline": '<g data-name="Layer 2"><g data-name="phone-call"><rect width="24" height="24" opacity="0"/><path d="M13 8a3 3 0 0 1 3 3 1 1 0 0 0 2 0 5 5 0 0 0-5-5 1 1 0 0 0 0 2z"/><path d="M13 4a7 7 0 0 1 7 7 1 1 0 0 0 2 0 9 9 0 0 0-9-9 1 1 0 0 0 0 2z"/><path d="M21.75 15.91a1 1 0 0 0-.72-.65l-6-1.37a1 1 0 0 0-.92.26c-.14.13-.15.14-.8 1.38a9.91 9.91 0 0 1-4.87-4.89C9.71 10 9.72 10 9.85 9.85a1 1 0 0 0 .26-.92L8.74 3a1 1 0 0 0-.65-.72 3.79 3.79 0 0 0-.72-.18A3.94 3.94 0 0 0 6.6 2 4.6 4.6 0 0 0 2 6.6 15.42 15.42 0 0 0 17.4 22a4.6 4.6 0 0 0 4.6-4.6 4.77 4.77 0 0 0-.06-.76 4.34 4.34 0 0 0-.19-.73zM17.4 20A13.41 13.41 0 0 1 4 6.6 2.61 2.61 0 0 1 6.6 4h.33L8 8.64l-.54.28c-.86.45-1.54.81-1.18 1.59a11.85 11.85 0 0 0 7.18 7.21c.84.34 1.17-.29 1.62-1.16l.29-.55L20 17.07v.33a2.61 2.61 0 0 1-2.6 2.6z"/></g></g>',
        "phone-missed-outline": '<g data-name="Layer 2"><g data-name="phone-missed"><rect width="24" height="24" opacity="0"/><path d="M21.94 16.64a4.34 4.34 0 0 0-.19-.73 1 1 0 0 0-.72-.65l-6-1.37a1 1 0 0 0-.92.26c-.14.13-.15.14-.8 1.38a10 10 0 0 1-4.88-4.89C9.71 10 9.72 10 9.85 9.85a1 1 0 0 0 .26-.92L8.74 3a1 1 0 0 0-.65-.72 3.79 3.79 0 0 0-.72-.18A3.94 3.94 0 0 0 6.6 2 4.6 4.6 0 0 0 2 6.6 15.42 15.42 0 0 0 17.4 22a4.6 4.6 0 0 0 4.6-4.6 4.77 4.77 0 0 0-.06-.76zM17.4 20A13.41 13.41 0 0 1 4 6.6 2.61 2.61 0 0 1 6.6 4h.33L8 8.64l-.55.29c-.87.45-1.5.78-1.17 1.58a11.85 11.85 0 0 0 7.18 7.21c.84.34 1.17-.29 1.62-1.16l.29-.55L20 17.07v.33a2.61 2.61 0 0 1-2.6 2.6z"/><path d="M15.8 8.7a1.05 1.05 0 0 0 1.47 0L18 8l.73.73a1 1 0 0 0 1.47-1.5l-.73-.73.73-.73a1 1 0 0 0-1.47-1.47L18 5l-.73-.73a1 1 0 0 0-1.47 1.5l.73.73-.73.73a1.05 1.05 0 0 0 0 1.47z"/></g></g>',
        "phone-off-outline": '<g data-name="Layer 2"><g data-name="phone-off"><rect width="24" height="24" opacity="0"/><path d="M19.74 4.26a.89.89 0 0 0-1.26 0L4.26 18.48a.91.91 0 0 0-.26.63.89.89 0 0 0 1.52.63L19.74 5.52a.89.89 0 0 0 0-1.26z"/><path d="M6.7 14.63A13.29 13.29 0 0 1 4 6.6 2.61 2.61 0 0 1 6.6 4h.33L8 8.64l-.55.29c-.87.45-1.5.78-1.17 1.58a11.57 11.57 0 0 0 1.57 3l1.43-1.42a10.37 10.37 0 0 1-.8-1.42C9.71 10 9.72 10 9.85 9.85a1 1 0 0 0 .26-.92L8.74 3a1 1 0 0 0-.65-.72 3.79 3.79 0 0 0-.72-.18A3.94 3.94 0 0 0 6.6 2 4.6 4.6 0 0 0 2 6.6a15.33 15.33 0 0 0 3.27 9.46z"/><path d="M21.94 16.64a4.34 4.34 0 0 0-.19-.73 1 1 0 0 0-.72-.65l-6-1.37a1 1 0 0 0-.92.26c-.14.13-.15.14-.8 1.38a10.88 10.88 0 0 1-1.41-.8l-1.43 1.43a11.52 11.52 0 0 0 2.94 1.56c.84.34 1.17-.29 1.62-1.16l.29-.55L20 17.07v.33a2.61 2.61 0 0 1-2.6 2.6 13.29 13.29 0 0 1-8-2.7l-1.46 1.43A15.33 15.33 0 0 0 17.4 22a4.6 4.6 0 0 0 4.6-4.6 4.77 4.77 0 0 0-.06-.76z"/></g></g>',
        "phone-outline": '<g data-name="Layer 2"><g data-name="phone"><rect width="24" height="24" opacity="0"/><path d="M17.4 22A15.42 15.42 0 0 1 2 6.6 4.6 4.6 0 0 1 6.6 2a3.94 3.94 0 0 1 .77.07 3.79 3.79 0 0 1 .72.18 1 1 0 0 1 .65.75l1.37 6a1 1 0 0 1-.26.92c-.13.14-.14.15-1.37.79a9.91 9.91 0 0 0 4.87 4.89c.65-1.24.66-1.25.8-1.38a1 1 0 0 1 .92-.26l6 1.37a1 1 0 0 1 .72.65 4.34 4.34 0 0 1 .19.73 4.77 4.77 0 0 1 .06.76A4.6 4.6 0 0 1 17.4 22zM6.6 4A2.61 2.61 0 0 0 4 6.6 13.41 13.41 0 0 0 17.4 20a2.61 2.61 0 0 0 2.6-2.6v-.33L15.36 16l-.29.55c-.45.87-.78 1.5-1.62 1.16a11.85 11.85 0 0 1-7.18-7.21c-.36-.78.32-1.14 1.18-1.59L8 8.64 6.93 4z"/></g></g>',
        "pie-chart-outline": '<g data-name="Layer 2"><g data-name="pie-chart"><rect width="24" height="24" opacity="0"/><path d="M13 2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 9 9 0 0 0-9-9zm1 8V4.07A7 7 0 0 1 19.93 10z"/><path d="M20.82 14.06a1 1 0 0 0-1.28.61A8 8 0 1 1 9.33 4.46a1 1 0 0 0-.66-1.89 10 10 0 1 0 12.76 12.76 1 1 0 0 0-.61-1.27z"/></g></g>',
        "pin-outline": '<g data-name="Layer 2"><g data-name="pin"><rect width="24" height="24" opacity="0"/><path d="M12 2a8 8 0 0 0-8 7.92c0 5.48 7.05 11.58 7.35 11.84a1 1 0 0 0 1.3 0C13 21.5 20 15.4 20 9.92A8 8 0 0 0 12 2zm0 17.65c-1.67-1.59-6-6-6-9.73a6 6 0 0 1 12 0c0 3.7-4.33 8.14-6 9.73z"/><path d="M12 6a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 12 6zm0 5a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 12 11z"/></g></g>',
        "play-circle-outline": '<g data-name="Layer 2"><g data-name="play-circle"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M12.34 7.45a1.7 1.7 0 0 0-1.85-.3 1.6 1.6 0 0 0-1 1.48v6.74a1.6 1.6 0 0 0 1 1.48 1.68 1.68 0 0 0 .69.15 1.74 1.74 0 0 0 1.16-.45L16 13.18a1.6 1.6 0 0 0 0-2.36zm-.84 7.15V9.4l2.81 2.6z"/></g></g>',
        "plus-circle-outline": '<g data-name="Layer 2"><g data-name="plus-circle"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M15 11h-2V9a1 1 0 0 0-2 0v2H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2z"/></g></g>',
        "plus-outline": '<g data-name="Layer 2"><g data-name="plus"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z"/></g></g>',
        "plus-square-outline": '<g data-name="Layer 2"><g data-name="plus-square"><rect width="24" height="24" opacity="0"/><path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1z"/><path d="M15 11h-2V9a1 1 0 0 0-2 0v2H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2z"/></g></g>',
        "power-outline": '<g data-name="Layer 2"><g data-name="power"><rect width="24" height="24" opacity="0"/><path d="M12 13a1 1 0 0 0 1-1V2a1 1 0 0 0-2 0v10a1 1 0 0 0 1 1z"/><path d="M16.59 3.11a1 1 0 0 0-.92 1.78 8 8 0 1 1-7.34 0 1 1 0 1 0-.92-1.78 10 10 0 1 0 9.18 0z"/></g></g>',
        "pricetags-outline": '<g data-name="Layer 2"><g data-name="pricetags"><rect width="24" height="24" opacity="0"/><path d="M12.87 22a1.84 1.84 0 0 1-1.29-.53l-6.41-6.42a1 1 0 0 1-.29-.61L4 5.09a1 1 0 0 1 .29-.8 1 1 0 0 1 .8-.29l9.35.88a1 1 0 0 1 .61.29l6.42 6.41a1.82 1.82 0 0 1 0 2.57l-7.32 7.32a1.82 1.82 0 0 1-1.28.53zm-6-8.11l6 6 7.05-7.05-6-6-7.81-.73z"/><circle cx="10.5" cy="10.5" r="1.5"/></g></g>',
        "printer-outline": '<g data-name="Layer 2"><g data-name="printer"><rect width="24" height="24" opacity="0"/><path d="M19.36 7H18V5a1.92 1.92 0 0 0-1.83-2H7.83A1.92 1.92 0 0 0 6 5v2H4.64A2.66 2.66 0 0 0 2 9.67v6.66A2.66 2.66 0 0 0 4.64 19h.86a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2h.86A2.66 2.66 0 0 0 22 16.33V9.67A2.66 2.66 0 0 0 19.36 7zM8 5h8v2H8zm-.5 14v-4h9v4zM20 16.33a.66.66 0 0 1-.64.67h-.86v-2a2 2 0 0 0-2-2h-9a2 2 0 0 0-2 2v2h-.86a.66.66 0 0 1-.64-.67V9.67A.66.66 0 0 1 4.64 9h14.72a.66.66 0 0 1 .64.67z"/></g></g>',
        "question-mark-circle-outline": '<g data-name="Layer 2"><g data-name="menu-arrow-circle"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M12 6a3.5 3.5 0 0 0-3.5 3.5 1 1 0 0 0 2 0A1.5 1.5 0 1 1 12 11a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.16A3.49 3.49 0 0 0 12 6z"/><circle cx="12" cy="17" r="1"/></g></g>',
        "question-mark-outline": '<g data-name="Layer 2"><g data-name="question-mark"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"/><circle cx="12" cy="19" r="1"/></g></g>',
        "radio-button-off-outline": '<g data-name="Layer 2"><g data-name="radio-button-off"><rect width="24" height="24" opacity="0"/><path d="M12 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10zm0-18a8 8 0 1 0 8 8 8 8 0 0 0-8-8z"/></g></g>',
        "radio-button-on-outline": '<g data-name="Layer 2"><g data-name="radio-button-on"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3z"/></g></g>',
        "radio-outline": '<g data-name="Layer 2"><g data-name="radio"><rect width="24" height="24" opacity="0"/><path d="M12 8a3 3 0 0 0-1 5.83 1 1 0 0 0 0 .17v6a1 1 0 0 0 2 0v-6a1 1 0 0 0 0-.17A3 3 0 0 0 12 8zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/><path d="M3.5 11a6.87 6.87 0 0 1 2.64-5.23 1 1 0 1 0-1.28-1.54A8.84 8.84 0 0 0 1.5 11a8.84 8.84 0 0 0 3.36 6.77 1 1 0 1 0 1.28-1.54A6.87 6.87 0 0 1 3.5 11z"/><path d="M16.64 6.24a1 1 0 0 0-1.28 1.52A4.28 4.28 0 0 1 17 11a4.28 4.28 0 0 1-1.64 3.24A1 1 0 0 0 16 16a1 1 0 0 0 .64-.24A6.2 6.2 0 0 0 19 11a6.2 6.2 0 0 0-2.36-4.76z"/><path d="M8.76 6.36a1 1 0 0 0-1.4-.12A6.2 6.2 0 0 0 5 11a6.2 6.2 0 0 0 2.36 4.76 1 1 0 0 0 1.4-.12 1 1 0 0 0-.12-1.4A4.28 4.28 0 0 1 7 11a4.28 4.28 0 0 1 1.64-3.24 1 1 0 0 0 .12-1.4z"/><path d="M19.14 4.23a1 1 0 1 0-1.28 1.54A6.87 6.87 0 0 1 20.5 11a6.87 6.87 0 0 1-2.64 5.23 1 1 0 0 0 1.28 1.54A8.84 8.84 0 0 0 22.5 11a8.84 8.84 0 0 0-3.36-6.77z"/></g></g>',
        "recording-outline": '<g data-name="Layer 2"><g data-name="recording"><rect width="24" height="24" opacity="0"/><path d="M18 8a4 4 0 0 0-4 4 3.91 3.91 0 0 0 .56 2H9.44a3.91 3.91 0 0 0 .56-2 4 4 0 1 0-4 4h12a4 4 0 0 0 0-8zM4 12a2 2 0 1 1 2 2 2 2 0 0 1-2-2zm14 2a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"/></g></g>',
        "refresh-outline": '<g data-name="Layer 2"><g data-name="refresh"><rect width="24" height="24" opacity="0"/><path d="M20.3 13.43a1 1 0 0 0-1.25.65A7.14 7.14 0 0 1 12.18 19 7.1 7.1 0 0 1 5 12a7.1 7.1 0 0 1 7.18-7 7.26 7.26 0 0 1 4.65 1.67l-2.17-.36a1 1 0 0 0-1.15.83 1 1 0 0 0 .83 1.15l4.24.7h.17a1 1 0 0 0 .34-.06.33.33 0 0 0 .1-.06.78.78 0 0 0 .2-.11l.09-.11c0-.05.09-.09.13-.15s0-.1.05-.14a1.34 1.34 0 0 0 .07-.18l.75-4a1 1 0 0 0-2-.38l-.27 1.45A9.21 9.21 0 0 0 12.18 3 9.1 9.1 0 0 0 3 12a9.1 9.1 0 0 0 9.18 9A9.12 9.12 0 0 0 21 14.68a1 1 0 0 0-.7-1.25z"/></g></g>',
        "repeat-outline": '<g data-name="Layer 2"><g data-name="repeat"><rect width="24" height="24" opacity="0"/><path d="M17.91 5h-12l1.3-1.29a1 1 0 0 0-1.42-1.42l-3 3a1 1 0 0 0 0 1.42l3 3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L5.91 7h12a1.56 1.56 0 0 1 1.59 1.53V11a1 1 0 0 0 2 0V8.53A3.56 3.56 0 0 0 17.91 5z"/><path d="M18.21 14.29a1 1 0 0 0-1.42 1.42l1.3 1.29h-12a1.56 1.56 0 0 1-1.59-1.53V13a1 1 0 0 0-2 0v2.47A3.56 3.56 0 0 0 6.09 19h12l-1.3 1.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 0-1.42z"/></g></g>',
        "rewind-left-outline": '<g data-name="Layer 2"><g data-name="rewind-left"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M18.45 6.2a2.1 2.1 0 0 0-2.21.26l-4.74 3.92V7.79a1.76 1.76 0 0 0-1.05-1.59 2.1 2.1 0 0 0-2.21.26l-5.1 4.21a1.7 1.7 0 0 0 0 2.66l5.1 4.21a2.06 2.06 0 0 0 1.3.46 2.23 2.23 0 0 0 .91-.2 1.76 1.76 0 0 0 1.05-1.59v-2.59l4.74 3.92a2.06 2.06 0 0 0 1.3.46 2.23 2.23 0 0 0 .91-.2 1.76 1.76 0 0 0 1.05-1.59V7.79a1.76 1.76 0 0 0-1.05-1.59zM9.5 16l-4.82-4L9.5 8.09zm8 0l-4.82-4 4.82-3.91z"/></g></g>',
        "rewind-right-outline": '<g data-name="Layer 2"><g data-name="rewind-right"><rect width="24" height="24" opacity="0"/><path d="M20.86 10.67l-5.1-4.21a2.1 2.1 0 0 0-2.21-.26 1.76 1.76 0 0 0-1.05 1.59v2.59L7.76 6.46a2.1 2.1 0 0 0-2.21-.26 1.76 1.76 0 0 0-1 1.59v8.42a1.76 1.76 0 0 0 1 1.59 2.23 2.23 0 0 0 .91.2 2.06 2.06 0 0 0 1.3-.46l4.74-3.92v2.59a1.76 1.76 0 0 0 1.05 1.59 2.23 2.23 0 0 0 .91.2 2.06 2.06 0 0 0 1.3-.46l5.1-4.21a1.7 1.7 0 0 0 0-2.66zM6.5 15.91V8l4.82 4zm8 0V8l4.82 4z"/></g></g>',
        "save-outline": '<g data-name="Layer 2"><g data-name="save"><rect width="24" height="24" opacity="0"/><path d="M20.12 8.71l-4.83-4.83A3 3 0 0 0 13.17 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-7.17a3 3 0 0 0-.88-2.12zM10 19v-2h4v2zm9-1a1 1 0 0 1-1 1h-2v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2v5a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2h-3V5h3.17a1.05 1.05 0 0 1 .71.29l4.83 4.83a1 1 0 0 1 .29.71z"/></g></g>',
        "scissors-outline": '<g data-name="Layer 2"><g data-name="scissors"><rect width="24" height="24" opacity="0"/><path d="M20.21 5.71a1 1 0 1 0-1.42-1.42l-6.28 6.31-3.3-3.31A3 3 0 0 0 9.5 6a3 3 0 1 0-3 3 3 3 0 0 0 1.29-.3L11.1 12l-3.29 3.3A3 3 0 0 0 6.5 15a3 3 0 1 0 3 3 3 3 0 0 0-.29-1.26zM6.5 7a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm0 12a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/><path d="M15.21 13.29a1 1 0 0 0-1.42 1.42l5 5a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g>',
        "search-outline": '<g data-name="Layer 2"><g data-name="search"><rect width="24" height="24" opacity="0"/><path d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"/></g></g>',
        "settings-2-outline": '<g data-name="Layer 2"><g data-name="settings-2"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M12.94 22h-1.89a1.68 1.68 0 0 1-1.68-1.68v-1.09a.34.34 0 0 0-.22-.29.38.38 0 0 0-.41 0l-.74.8a1.67 1.67 0 0 1-2.37 0L4.26 18.4a1.66 1.66 0 0 1-.5-1.19 1.72 1.72 0 0 1 .5-1.21l.74-.74a.34.34 0 0 0 0-.37c-.06-.15-.16-.26-.3-.26H3.68A1.69 1.69 0 0 1 2 12.94v-1.89a1.68 1.68 0 0 1 1.68-1.68h1.09a.34.34 0 0 0 .29-.22.38.38 0 0 0 0-.41L4.26 8a1.67 1.67 0 0 1 0-2.37L5.6 4.26a1.65 1.65 0 0 1 1.18-.5 1.72 1.72 0 0 1 1.22.5l.74.74a.34.34 0 0 0 .37 0c.15-.06.26-.16.26-.3V3.68A1.69 1.69 0 0 1 11.06 2H13a1.68 1.68 0 0 1 1.68 1.68v1.09a.34.34 0 0 0 .22.29.38.38 0 0 0 .41 0l.69-.8a1.67 1.67 0 0 1 2.37 0l1.37 1.34a1.67 1.67 0 0 1 .5 1.19 1.63 1.63 0 0 1-.5 1.21l-.74.74a.34.34 0 0 0 0 .37c.06.15.16.26.3.26h1.09A1.69 1.69 0 0 1 22 11.06V13a1.68 1.68 0 0 1-1.68 1.68h-1.09a.34.34 0 0 0-.29.22.34.34 0 0 0 0 .37l.77.77a1.67 1.67 0 0 1 0 2.37l-1.31 1.33a1.65 1.65 0 0 1-1.18.5 1.72 1.72 0 0 1-1.19-.5l-.77-.74a.34.34 0 0 0-.37 0c-.15.06-.26.16-.26.3v1.09A1.69 1.69 0 0 1 12.94 22zm-1.57-2h1.26v-.77a2.33 2.33 0 0 1 1.46-2.14 2.36 2.36 0 0 1 2.59.47l.54.54.88-.88-.54-.55a2.34 2.34 0 0 1-.48-2.56 2.33 2.33 0 0 1 2.14-1.45H20v-1.29h-.77a2.33 2.33 0 0 1-2.14-1.46 2.36 2.36 0 0 1 .47-2.59l.54-.54-.88-.88-.55.54a2.39 2.39 0 0 1-4-1.67V4h-1.3v.77a2.33 2.33 0 0 1-1.46 2.14 2.36 2.36 0 0 1-2.59-.47l-.54-.54-.88.88.54.55a2.39 2.39 0 0 1-1.67 4H4v1.26h.77a2.33 2.33 0 0 1 2.14 1.46 2.36 2.36 0 0 1-.47 2.59l-.54.54.88.88.55-.54a2.39 2.39 0 0 1 4 1.67z" data-name="&lt;Group&gt;"/><path d="M12 15.5a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5zm0-5a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5z"/></g></g>',
        "settings-outline": '<g data-name="Layer 2"><g data-name="settings"><rect width="24" height="24" opacity="0"/><path d="M8.61 22a2.25 2.25 0 0 1-1.35-.46L5.19 20a2.37 2.37 0 0 1-.49-3.22 2.06 2.06 0 0 0 .23-1.86l-.06-.16a1.83 1.83 0 0 0-1.12-1.22h-.16a2.34 2.34 0 0 1-1.48-2.94L2.93 8a2.18 2.18 0 0 1 1.12-1.41 2.14 2.14 0 0 1 1.68-.12 1.93 1.93 0 0 0 1.78-.29l.13-.1a1.94 1.94 0 0 0 .73-1.51v-.24A2.32 2.32 0 0 1 10.66 2h2.55a2.26 2.26 0 0 1 1.6.67 2.37 2.37 0 0 1 .68 1.68v.28a1.76 1.76 0 0 0 .69 1.43l.11.08a1.74 1.74 0 0 0 1.59.26l.34-.11A2.26 2.26 0 0 1 21.1 7.8l.79 2.52a2.36 2.36 0 0 1-1.46 2.93l-.2.07A1.89 1.89 0 0 0 19 14.6a2 2 0 0 0 .25 1.65l.26.38a2.38 2.38 0 0 1-.5 3.23L17 21.41a2.24 2.24 0 0 1-3.22-.53l-.12-.17a1.75 1.75 0 0 0-1.5-.78 1.8 1.8 0 0 0-1.43.77l-.23.33A2.25 2.25 0 0 1 9 22a2 2 0 0 1-.39 0zM4.4 11.62a3.83 3.83 0 0 1 2.38 2.5v.12a4 4 0 0 1-.46 3.62.38.38 0 0 0 0 .51L8.47 20a.25.25 0 0 0 .37-.07l.23-.33a3.77 3.77 0 0 1 6.2 0l.12.18a.3.3 0 0 0 .18.12.25.25 0 0 0 .19-.05l2.06-1.56a.36.36 0 0 0 .07-.49l-.26-.38A4 4 0 0 1 17.1 14a3.92 3.92 0 0 1 2.49-2.61l.2-.07a.34.34 0 0 0 .19-.44l-.78-2.49a.35.35 0 0 0-.2-.19.21.21 0 0 0-.19 0l-.34.11a3.74 3.74 0 0 1-3.43-.57L15 7.65a3.76 3.76 0 0 1-1.49-3v-.31a.37.37 0 0 0-.1-.26.31.31 0 0 0-.21-.08h-2.54a.31.31 0 0 0-.29.33v.25a3.9 3.9 0 0 1-1.52 3.09l-.13.1a3.91 3.91 0 0 1-3.63.59.22.22 0 0 0-.14 0 .28.28 0 0 0-.12.15L4 11.12a.36.36 0 0 0 .22.45z" data-name="&lt;Group&gt;"/><path d="M12 15.5a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5zm0-5a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5z"/></g></g>',
        "shake-outline": '<g data-name="Layer 2"><g data-name="shake"><rect width="24" height="24" opacity="0"/><path d="M5.5 18a1 1 0 0 1-.64-.24A8.81 8.81 0 0 1 1.5 11a8.81 8.81 0 0 1 3.36-6.76 1 1 0 1 1 1.28 1.52A6.9 6.9 0 0 0 3.5 11a6.9 6.9 0 0 0 2.64 5.24 1 1 0 0 1 .13 1.4 1 1 0 0 1-.77.36z"/><path d="M12 7a4.09 4.09 0 0 1 1 .14V3a1 1 0 0 0-2 0v4.14A4.09 4.09 0 0 1 12 7z"/><path d="M12 15a4.09 4.09 0 0 1-1-.14V20a1 1 0 0 0 2 0v-5.14a4.09 4.09 0 0 1-1 .14z"/><path d="M16 16a1 1 0 0 1-.77-.36 1 1 0 0 1 .13-1.4A4.28 4.28 0 0 0 17 11a4.28 4.28 0 0 0-1.64-3.24 1 1 0 1 1 1.28-1.52A6.2 6.2 0 0 1 19 11a6.2 6.2 0 0 1-2.36 4.76A1 1 0 0 1 16 16z"/><path d="M8 16a1 1 0 0 1-.64-.24A6.2 6.2 0 0 1 5 11a6.2 6.2 0 0 1 2.36-4.76 1 1 0 1 1 1.28 1.52A4.28 4.28 0 0 0 7 11a4.28 4.28 0 0 0 1.64 3.24 1 1 0 0 1 .13 1.4A1 1 0 0 1 8 16z"/><path d="M18.5 18a1 1 0 0 1-.77-.36 1 1 0 0 1 .13-1.4A6.9 6.9 0 0 0 20.5 11a6.9 6.9 0 0 0-2.64-5.24 1 1 0 1 1 1.28-1.52A8.81 8.81 0 0 1 22.5 11a8.81 8.81 0 0 1-3.36 6.76 1 1 0 0 1-.64.24z"/><path d="M12 12a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm0-1zm0 0zm0 0zm0 0zm0 0zm0 0zm0 0z"/></g></g>',
        "share-outline": '<g data-name="Layer 2"><g data-name="share"><rect width="24" height="24" opacity="0"/><path d="M18 15a3 3 0 0 0-2.1.86L8 12.34V12v-.33l7.9-3.53A3 3 0 1 0 15 6v.34L7.1 9.86a3 3 0 1 0 0 4.28l7.9 3.53V18a3 3 0 1 0 3-3zm0-10a1 1 0 1 1-1 1 1 1 0 0 1 1-1zM5 13a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm13 6a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/></g></g>',
        "shield-off-outline": '<g data-name="Layer 2"><g data-name="shield-off"><rect width="24" height="24" opacity="0"/><path d="M4.71 3.29a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/><path d="M12.3 19.68l-.3.17-.3-.17A13.15 13.15 0 0 1 5 8.23v-.14L5.16 8 3.73 6.56A2 2 0 0 0 3 8.09v.14a15.17 15.17 0 0 0 7.72 13.2l.3.17a2 2 0 0 0 2 0l.3-.17a15.22 15.22 0 0 0 3-2.27l-1.42-1.42a12.56 12.56 0 0 1-2.6 1.94z"/><path d="M20 6.34L13 2.4a2 2 0 0 0-2 0L7.32 4.49 8.78 6 12 4.15l7 3.94v.14a13 13 0 0 1-1.63 6.31L18.84 16A15.08 15.08 0 0 0 21 8.23v-.14a2 2 0 0 0-1-1.75z"/></g></g>',
        "shield-outline": '<g data-name="Layer 2"><g data-name="shield"><rect width="24" height="24" opacity="0"/><path d="M12 21.85a2 2 0 0 1-1-.25l-.3-.17A15.17 15.17 0 0 1 3 8.23v-.14a2 2 0 0 1 1-1.75l7-3.94a2 2 0 0 1 2 0l7 3.94a2 2 0 0 1 1 1.75v.14a15.17 15.17 0 0 1-7.72 13.2l-.3.17a2 2 0 0 1-.98.25zm0-17.7L5 8.09v.14a13.15 13.15 0 0 0 6.7 11.45l.3.17.3-.17A13.15 13.15 0 0 0 19 8.23v-.14z"/></g></g>',
        "shopping-bag-outline": '<g data-name="Layer 2"><g data-name="shopping-bag"><rect width="24" height="24" opacity="0"/><path d="M20.12 6.71l-2.83-2.83A3 3 0 0 0 15.17 3H8.83a3 3 0 0 0-2.12.88L3.88 6.71A3 3 0 0 0 3 8.83V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8.83a3 3 0 0 0-.88-2.12zm-12-1.42A1.05 1.05 0 0 1 8.83 5h6.34a1.05 1.05 0 0 1 .71.29L17.59 7H6.41zM18 19H6a1 1 0 0 1-1-1V9h14v9a1 1 0 0 1-1 1z"/><path d="M15 11a1 1 0 0 0-1 1 2 2 0 0 1-4 0 1 1 0 0 0-2 0 4 4 0 0 0 8 0 1 1 0 0 0-1-1z"/></g></g>',
        "shopping-cart-outline": '<g data-name="Layer 2"><g data-name="shopping-cart"><rect width="24" height="24" opacity="0"/><path d="M21.08 7a2 2 0 0 0-1.7-1H6.58L6 3.74A1 1 0 0 0 5 3H3a1 1 0 0 0 0 2h1.24L7 15.26A1 1 0 0 0 8 16h9a1 1 0 0 0 .89-.55l3.28-6.56A2 2 0 0 0 21.08 7zm-4.7 7H8.76L7.13 8h12.25z"/><circle cx="7.5" cy="19.5" r="1.5"/><circle cx="17.5" cy="19.5" r="1.5"/></g></g>',
        "shuffle-2-outline": '<g data-name="Layer 2"><g data-name="shuffle-2"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M18.71 14.29a1 1 0 0 0-1.42 1.42l.29.29H16a4 4 0 0 1 0-8h1.59l-.3.29a1 1 0 0 0 0 1.42A1 1 0 0 0 18 10a1 1 0 0 0 .71-.29l2-2A1 1 0 0 0 21 7a1 1 0 0 0-.29-.71l-2-2a1 1 0 0 0-1.42 1.42l.29.29H16a6 6 0 0 0-5 2.69A6 6 0 0 0 6 6H4a1 1 0 0 0 0 2h2a4 4 0 0 1 0 8H4a1 1 0 0 0 0 2h2a6 6 0 0 0 5-2.69A6 6 0 0 0 16 18h1.59l-.3.29a1 1 0 0 0 0 1.42A1 1 0 0 0 18 20a1 1 0 0 0 .71-.29l2-2A1 1 0 0 0 21 17a1 1 0 0 0-.29-.71z"/></g></g>',
        "shuffle-outline": '<g data-name="Layer 2"><g data-name="shuffle"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M18 9.31a1 1 0 0 0 1 1 1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-4.3a1 1 0 0 0-1 1 1 1 0 0 0 1 1h1.89L12 10.59 6.16 4.76a1 1 0 0 0-1.41 1.41L10.58 12l-6.29 6.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L18 7.42z"/><path d="M19 13.68a1 1 0 0 0-1 1v1.91l-2.78-2.79a1 1 0 0 0-1.42 1.42L16.57 18h-1.88a1 1 0 0 0 0 2H19a1 1 0 0 0 1-1.11v-4.21a1 1 0 0 0-1-1z"/></g></g>',
        "skip-back-outline": '<g data-name="Layer 2"><g data-name="skip-back"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M16.45 6.2a2.1 2.1 0 0 0-2.21.26l-5.1 4.21-.14.15V7a1 1 0 0 0-2 0v10a1 1 0 0 0 2 0v-3.82l.14.15 5.1 4.21a2.06 2.06 0 0 0 1.3.46 2.23 2.23 0 0 0 .91-.2 1.76 1.76 0 0 0 1.05-1.59V7.79a1.76 1.76 0 0 0-1.05-1.59zM15.5 16l-4.82-4 4.82-3.91z"/></g></g>',
        "skip-forward-outline": '<g data-name="Layer 2"><g data-name="skip-forward"><rect width="24" height="24" opacity="0"/><path d="M16 6a1 1 0 0 0-1 1v3.82l-.14-.15-5.1-4.21a2.1 2.1 0 0 0-2.21-.26 1.76 1.76 0 0 0-1 1.59v8.42a1.76 1.76 0 0 0 1 1.59 2.23 2.23 0 0 0 .91.2 2.06 2.06 0 0 0 1.3-.46l5.1-4.21.14-.15V17a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1zm-7.5 9.91V8l4.82 4z"/></g></g>',
        "slash-outline": '<g data-name="Layer 2"><g data-name="slash"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm8 10a7.92 7.92 0 0 1-1.69 4.9L7.1 5.69A7.92 7.92 0 0 1 12 4a8 8 0 0 1 8 8zM4 12a7.92 7.92 0 0 1 1.69-4.9L16.9 18.31A7.92 7.92 0 0 1 12 20a8 8 0 0 1-8-8z"/></g></g>',
        "smartphone-outline": '<g data-name="Layer 2"><g data-name="smartphone"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M17 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm1 17a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1z"/><circle cx="12" cy="16.5" r="1.5"/><path d="M14.5 6h-5a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2z"/></g></g>',
        "speaker-outline": '<g data-name="Layer 2"><g data-name="speaker"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M12 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/><path d="M12 12a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 12 12zm0 5a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 12 17z"/><path d="M17 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm1 17a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1z"/></g></g>',
        "square-outline": '<g data-name="Layer 2"><g data-name="square"><rect width="24" height="24" opacity="0"/><path d="M18 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3zM6 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"/></g></g>',
        "star-outline": '<g data-name="Layer 2"><g data-name="star"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M17.56 21a1 1 0 0 1-.46-.11L12 18.22l-5.1 2.67a1 1 0 0 1-1.45-1.06l1-5.63-4.12-4a1 1 0 0 1-.25-1 1 1 0 0 1 .81-.68l5.7-.83 2.51-5.13a1 1 0 0 1 1.8 0l2.54 5.12 5.7.83a1 1 0 0 1 .81.68 1 1 0 0 1-.25 1l-4.12 4 1 5.63a1 1 0 0 1-.4 1 1 1 0 0 1-.62.18zM12 16.1a.92.92 0 0 1 .46.11l3.77 2-.72-4.21a1 1 0 0 1 .29-.89l3-2.93-4.2-.62a1 1 0 0 1-.71-.56L12 5.25 10.11 9a1 1 0 0 1-.75.54l-4.2.62 3 2.93a1 1 0 0 1 .29.89l-.72 4.16 3.77-2a.92.92 0 0 1 .5-.04z"/></g></g>',
        "stop-circle-outline": '<g data-name="Layer 2"><g data-name="stop-circle"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M14.75 8h-5.5A1.25 1.25 0 0 0 8 9.25v5.5A1.25 1.25 0 0 0 9.25 16h5.5A1.25 1.25 0 0 0 16 14.75v-5.5A1.25 1.25 0 0 0 14.75 8zM14 14h-4v-4h4z"/></g></g>',
        "sun-outline": '<g data-name="Layer 2"><g data-name="sun"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M12 6a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1z"/><path d="M21 11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z"/><path d="M6 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1z"/><path d="M6.22 5a1 1 0 0 0-1.39 1.47l1.44 1.39a1 1 0 0 0 .73.28 1 1 0 0 0 .72-.31 1 1 0 0 0 0-1.41z"/><path d="M17 8.14a1 1 0 0 0 .69-.28l1.44-1.39A1 1 0 0 0 17.78 5l-1.44 1.42a1 1 0 0 0 0 1.41 1 1 0 0 0 .66.31z"/><path d="M12 18a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1z"/><path d="M17.73 16.14a1 1 0 0 0-1.39 1.44L17.78 19a1 1 0 0 0 .69.28 1 1 0 0 0 .72-.3 1 1 0 0 0 0-1.42z"/><path d="M6.27 16.14l-1.44 1.39a1 1 0 0 0 0 1.42 1 1 0 0 0 .72.3 1 1 0 0 0 .67-.25l1.44-1.39a1 1 0 0 0-1.39-1.44z"/><path d="M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"/></g></g>',
        "swap-outline": '<g data-name="Layer 2"><g data-name="swap"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M4 9h13l-1.6 1.2a1 1 0 0 0-.2 1.4 1 1 0 0 0 .8.4 1 1 0 0 0 .6-.2l4-3a1 1 0 0 0 0-1.59l-3.86-3a1 1 0 0 0-1.23 1.58L17.08 7H4a1 1 0 0 0 0 2z"/><path d="M20 16H7l1.6-1.2a1 1 0 0 0-1.2-1.6l-4 3a1 1 0 0 0 0 1.59l3.86 3a1 1 0 0 0 .61.21 1 1 0 0 0 .79-.39 1 1 0 0 0-.17-1.4L6.92 18H20a1 1 0 0 0 0-2z"/></g></g>',
        "sync-outline": '<g data-name="Layer 2"><g data-name="sync"><rect width="24" height="24" opacity="0"/><path d="M21.66 10.37a.62.62 0 0 0 .07-.19l.75-4a1 1 0 0 0-2-.36l-.37 2a9.22 9.22 0 0 0-16.58.84 1 1 0 0 0 .55 1.3 1 1 0 0 0 1.31-.55A7.08 7.08 0 0 1 12.07 5a7.17 7.17 0 0 1 6.24 3.58l-1.65-.27a1 1 0 1 0-.32 2l4.25.71h.16a.93.93 0 0 0 .34-.06.33.33 0 0 0 .1-.06.78.78 0 0 0 .2-.11l.08-.1a1.07 1.07 0 0 0 .14-.16.58.58 0 0 0 .05-.16z"/><path d="M19.88 14.07a1 1 0 0 0-1.31.56A7.08 7.08 0 0 1 11.93 19a7.17 7.17 0 0 1-6.24-3.58l1.65.27h.16a1 1 0 0 0 .16-2L3.41 13a.91.91 0 0 0-.33 0H3a1.15 1.15 0 0 0-.32.14 1 1 0 0 0-.18.18l-.09.1a.84.84 0 0 0-.07.19.44.44 0 0 0-.07.17l-.75 4a1 1 0 0 0 .8 1.22h.18a1 1 0 0 0 1-.82l.37-2a9.22 9.22 0 0 0 16.58-.83 1 1 0 0 0-.57-1.28z"/></g></g>',
        "text-outline": '<g data-name="Layer 2"><g data-name="text"><rect width="24" height="24" opacity="0"/><path d="M20 4H4a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0V6h6v13H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-2V6h6v2a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1z"/></g></g>',
        "thermometer-minus-outline": '<g data-name="Layer 2"><g data-name="thermometer-minus"><rect width="24" height="24" opacity="0"/><rect x="2" y="5" width="6" height="2" rx="1" ry="1"/><path d="M14 22a5 5 0 0 1-3-9V5a3 3 0 0 1 3-3 3 3 0 0 1 3 3v8a5 5 0 0 1-3 9zm0-18a1 1 0 0 0-1 1v8.54a1 1 0 0 1-.5.87A3 3 0 0 0 11 17a3 3 0 0 0 6 0 3 3 0 0 0-1.5-2.59 1 1 0 0 1-.5-.87V5a.93.93 0 0 0-.29-.69A1 1 0 0 0 14 4z"/></g></g>',
        "thermometer-outline": '<g data-name="Layer 2"><g data-name="thermometer"><rect width="24" height="24" opacity="0"/><path d="M12 22a5 5 0 0 1-3-9V5a3 3 0 0 1 3-3 3 3 0 0 1 3 3v8a5 5 0 0 1-3 9zm0-18a1 1 0 0 0-1 1v8.54a1 1 0 0 1-.5.87A3 3 0 0 0 9 17a3 3 0 0 0 6 0 3 3 0 0 0-1.5-2.59 1 1 0 0 1-.5-.87V5a.93.93 0 0 0-.29-.69A1 1 0 0 0 12 4z"/></g></g>',
        "thermometer-plus-outline": '<g data-name="Layer 2"><g data-name="thermometer-plus"><rect width="24" height="24" opacity="0"/><rect x="2" y="5" width="6" height="2" rx="1" ry="1"/><rect x="2" y="5" width="6" height="2" rx="1" ry="1" transform="rotate(-90 5 6)"/><path d="M14 22a5 5 0 0 1-3-9V5a3 3 0 0 1 3-3 3 3 0 0 1 3 3v8a5 5 0 0 1-3 9zm0-18a1 1 0 0 0-1 1v8.54a1 1 0 0 1-.5.87A3 3 0 0 0 11 17a3 3 0 0 0 6 0 3 3 0 0 0-1.5-2.59 1 1 0 0 1-.5-.87V5a.93.93 0 0 0-.29-.69A1 1 0 0 0 14 4z"/></g></g>',
        "toggle-left-outline": '<g data-name="Layer 2"><g data-name="toggle-left"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M15 5H9a7 7 0 0 0 0 14h6a7 7 0 0 0 0-14zm0 12H9A5 5 0 0 1 9 7h6a5 5 0 0 1 0 10z"/><path d="M9 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/></g></g>',
        "toggle-right-outline": '<g data-name="Layer 2"><g data-name="toggle-right"><rect width="24" height="24" opacity="0"/><path d="M15 5H9a7 7 0 0 0 0 14h6a7 7 0 0 0 0-14zm0 12H9A5 5 0 0 1 9 7h6a5 5 0 0 1 0 10z"/><path d="M15 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/></g></g>',
        "trash-2-outline": '<g data-name="Layer 2"><g data-name="trash-2"><rect width="24" height="24" opacity="0"/><path d="M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4zM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8h12z"/><path d="M9 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z"/><path d="M15 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z"/></g></g>',
        "trash-outline": '<g data-name="Layer 2"><g data-name="trash"><rect width="24" height="24" opacity="0"/><path d="M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4zM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8h12z"/></g></g>',
        "trending-down-outline": '<g data-name="Layer 2"><g data-name="trending-down"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M21 12a1 1 0 0 0-2 0v2.3l-4.24-5a1 1 0 0 0-1.27-.21L9.22 11.7 4.77 6.36a1 1 0 1 0-1.54 1.28l5 6a1 1 0 0 0 1.28.22l4.28-2.57 4 4.71H15a1 1 0 0 0 0 2h5a1.1 1.1 0 0 0 .36-.07l.14-.08a1.19 1.19 0 0 0 .15-.09.75.75 0 0 0 .14-.17 1.1 1.1 0 0 0 .09-.14.64.64 0 0 0 .05-.17A.78.78 0 0 0 21 17z"/></g></g>',
        "trending-up-outline": '<g data-name="Layer 2"><g data-name="trending-up"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M21 7a.78.78 0 0 0 0-.21.64.64 0 0 0-.05-.17 1.1 1.1 0 0 0-.09-.14.75.75 0 0 0-.14-.17l-.12-.07a.69.69 0 0 0-.19-.1h-.2A.7.7 0 0 0 20 6h-5a1 1 0 0 0 0 2h2.83l-4 4.71-4.32-2.57a1 1 0 0 0-1.28.22l-5 6a1 1 0 0 0 .13 1.41A1 1 0 0 0 4 18a1 1 0 0 0 .77-.36l4.45-5.34 4.27 2.56a1 1 0 0 0 1.27-.21L19 9.7V12a1 1 0 0 0 2 0V7z"/></g></g>',
        "tv-outline": '<g data-name="Layer 2"><g data-name="tv"><rect width="24" height="24" opacity="0"/><path d="M18 6h-3.59l2.3-2.29a1 1 0 1 0-1.42-1.42L12 5.59l-3.29-3.3a1 1 0 1 0-1.42 1.42L9.59 6H6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm1 13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1z"/></g></g>',
        "twitter-outline": '<g data-name="Layer 2"><g data-name="twitter"><polyline points="0 0 24 0 24 24 0 24" opacity="0"/><path d="M8.51 20h-.08a10.87 10.87 0 0 1-4.65-1.09A1.38 1.38 0 0 1 3 17.47a1.41 1.41 0 0 1 1.16-1.18 6.63 6.63 0 0 0 2.54-.89 9.49 9.49 0 0 1-3.51-9.07 1.41 1.41 0 0 1 1-1.15 1.35 1.35 0 0 1 1.43.41 7.09 7.09 0 0 0 4.88 2.75 4.5 4.5 0 0 1 1.41-3.1 4.47 4.47 0 0 1 6.37.19.7.7 0 0 0 .78.1A1.39 1.39 0 0 1 21 7.13a6.66 6.66 0 0 1-1.28 2.6A10.79 10.79 0 0 1 8.51 20zm0-2h.08a8.79 8.79 0 0 0 9.09-8.59 1.32 1.32 0 0 1 .37-.85 5.19 5.19 0 0 0 .62-1 2.56 2.56 0 0 1-1.91-.85A2.45 2.45 0 0 0 15 6a2.5 2.5 0 0 0-1.79.69 2.53 2.53 0 0 0-.72 2.42l.26 1.14-1.17.08a8.3 8.3 0 0 1-6.54-2.4 7.12 7.12 0 0 0 3.73 6.46l.95.54-.63.9a5.62 5.62 0 0 1-2.68 1.92A8.34 8.34 0 0 0 8.5 18zM19 6.65z"/></g></g>',
        "umbrella-outline": '<g data-name="Layer 2"><g data-name="umbrella"><rect width="24" height="24" opacity="0"/><path d="M12 2A10 10 0 0 0 2 12a1 1 0 0 0 1 1h8v6a3 3 0 0 0 6 0 1 1 0 0 0-2 0 1 1 0 0 1-2 0v-6h8a1 1 0 0 0 1-1A10 10 0 0 0 12 2zm-7.94 9a8 8 0 0 1 15.88 0z"/></g></g>',
        "undo-outline": '<g data-name="Layer 2"><g data-name="undo"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M20.22 21a1 1 0 0 1-1-.76 8.91 8.91 0 0 0-7.8-6.69v1.12a1.78 1.78 0 0 1-1.09 1.64A2 2 0 0 1 8.18 16l-5.06-4.41a1.76 1.76 0 0 1 0-2.68l5.06-4.42a2 2 0 0 1 2.18-.3 1.78 1.78 0 0 1 1.09 1.64V7A10.89 10.89 0 0 1 21.5 17.75a10.29 10.29 0 0 1-.31 2.49 1 1 0 0 1-1 .76zm-9.77-9.5a11.07 11.07 0 0 1 8.81 4.26A9 9 0 0 0 10.45 9a1 1 0 0 1-1-1V6.08l-4.82 4.17 4.82 4.21v-2a1 1 0 0 1 1-.96z"/></g></g>',
        "unlock-outline": '<g data-name="Layer 2"><g data-name="unlock"><rect width="24" height="24" opacity="0"/><path d="M17 8h-7V6a2 2 0 0 1 4 0 1 1 0 0 0 2 0 4 4 0 0 0-8 0v2H7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zm1 11a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1z"/><path d="M12 12a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/></g></g>',
        "upload-outline": '<g data-name="Layer 2"><g data-name="upload"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><rect x="4" y="4" width="16" height="2" rx="1" ry="1" transform="rotate(180 12 5)"/><rect x="17" y="5" width="4" height="2" rx="1" ry="1" transform="rotate(90 19 6)"/><rect x="3" y="5" width="4" height="2" rx="1" ry="1" transform="rotate(90 5 6)"/><path d="M8 14a1 1 0 0 1-.8-.4 1 1 0 0 1 .2-1.4l4-3a1 1 0 0 1 1.18 0l4 2.82a1 1 0 0 1 .24 1.39 1 1 0 0 1-1.4.24L12 11.24 8.6 13.8a1 1 0 0 1-.6.2z"/><path d="M12 21a1 1 0 0 1-1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1z"/></g></g>',
        "video-off-outline": '<g data-name="Layer 2"><g data-name="video-off"><rect width="24" height="24" opacity="0"/><path d="M17 15.59l-2-2L8.41 7l-2-2-1.7-1.71a1 1 0 0 0-1.42 1.42l.54.53L5.59 7l9.34 9.34 1.46 1.46 2.9 2.91a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/><path d="M14 17H5a1 1 0 0 1-1-1V8a1 1 0 0 1 .4-.78L3 5.8A3 3 0 0 0 2 8v8a3 3 0 0 0 3 3h9a2.94 2.94 0 0 0 1.66-.51L14.14 17a.7.7 0 0 1-.14 0z"/><path d="M21 7.15a1.7 1.7 0 0 0-1.85.3l-2.15 2V8a3 3 0 0 0-3-3H7.83l2 2H14a1 1 0 0 1 1 1v4.17l4.72 4.72a1.73 1.73 0 0 0 .6.11 1.68 1.68 0 0 0 .69-.15 1.6 1.6 0 0 0 1-1.48V8.63A1.6 1.6 0 0 0 21 7.15zm-1 7.45L17.19 12 20 9.4z"/></g></g>',
        "video-outline": '<g data-name="Layer 2"><g data-name="video"><rect width="24" height="24" opacity="0"/><path d="M21 7.15a1.7 1.7 0 0 0-1.85.3l-2.15 2V8a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-1.45l2.16 2a1.74 1.74 0 0 0 1.16.45 1.68 1.68 0 0 0 .69-.15 1.6 1.6 0 0 0 1-1.48V8.63A1.6 1.6 0 0 0 21 7.15zM15 16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1zm5-1.4L17.19 12 20 9.4z"/></g></g>',
        "volume-down-outline": '<g data-name="Layer 2"><g data-name="volume-down"><rect width="24" height="24" opacity="0"/><path d="M20.78 8.37a1 1 0 1 0-1.56 1.26 4 4 0 0 1 0 4.74A1 1 0 0 0 20 16a1 1 0 0 0 .78-.37 6 6 0 0 0 0-7.26z"/><path d="M16.47 3.12a1 1 0 0 0-1 0L9 7.57H4a1 1 0 0 0-1 1v6.86a1 1 0 0 0 1 1h5l6.41 4.4A1.06 1.06 0 0 0 16 21a1 1 0 0 0 1-1V4a1 1 0 0 0-.53-.88zM15 18.1l-5.1-3.5a1 1 0 0 0-.57-.17H5V9.57h4.33a1 1 0 0 0 .57-.17L15 5.9z"/></g></g>',
        "volume-mute-outline": '<g data-name="Layer 2"><g data-name="volume-mute"><rect width="24" height="24" opacity="0"/><path d="M17 21a1.06 1.06 0 0 1-.57-.17L10 16.43H5a1 1 0 0 1-1-1V8.57a1 1 0 0 1 1-1h5l6.41-4.4A1 1 0 0 1 18 4v16a1 1 0 0 1-1 1zM6 14.43h4.33a1 1 0 0 1 .57.17l5.1 3.5V5.9l-5.1 3.5a1 1 0 0 1-.57.17H6z"/></g></g>',
        "volume-off-outline": '<g data-name="Layer 2"><g data-name="volume-off"><rect width="24" height="24" opacity="0"/><path d="M4.71 3.29a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/><path d="M16.91 14.08l1.44 1.44a6 6 0 0 0-.07-7.15 1 1 0 1 0-1.56 1.26 4 4 0 0 1 .19 4.45z"/><path d="M21 12a6.51 6.51 0 0 1-1.78 4.39l1.42 1.42A8.53 8.53 0 0 0 23 12a8.75 8.75 0 0 0-3.36-6.77 1 1 0 1 0-1.28 1.54A6.8 6.8 0 0 1 21 12z"/><path d="M13.5 18.1l-5.1-3.5a1 1 0 0 0-.57-.17H3.5V9.57h3.24l-2-2H2.5a1 1 0 0 0-1 1v6.86a1 1 0 0 0 1 1h5l6.41 4.4a1.06 1.06 0 0 0 .57.17 1 1 0 0 0 1-1v-1.67l-2-2z"/><path d="M13.5 5.9v4.77l2 2V4a1 1 0 0 0-1.57-.83L9.23 6.4l1.44 1.44z"/></g></g>',
        "volume-up-outline": '<g data-name="Layer 2"><g data-name="volume-up"><rect width="24" height="24" opacity="0"/><path d="M18.28 8.37a1 1 0 1 0-1.56 1.26 4 4 0 0 1 0 4.74A1 1 0 0 0 17.5 16a1 1 0 0 0 .78-.37 6 6 0 0 0 0-7.26z"/><path d="M19.64 5.23a1 1 0 1 0-1.28 1.54A6.8 6.8 0 0 1 21 12a6.8 6.8 0 0 1-2.64 5.23 1 1 0 0 0-.13 1.41A1 1 0 0 0 19 19a1 1 0 0 0 .64-.23A8.75 8.75 0 0 0 23 12a8.75 8.75 0 0 0-3.36-6.77z"/><path d="M15 3.12a1 1 0 0 0-1 0L7.52 7.57h-5a1 1 0 0 0-1 1v6.86a1 1 0 0 0 1 1h5l6.41 4.4a1.06 1.06 0 0 0 .57.17 1 1 0 0 0 1-1V4a1 1 0 0 0-.5-.88zm-1.47 15L8.4 14.6a1 1 0 0 0-.57-.17H3.5V9.57h4.33a1 1 0 0 0 .57-.17l5.1-3.5z"/></g></g>',
        "wifi-off-outline": '<g data-name="Layer 2"><g data-name="wifi-off"><rect width="24" height="24" opacity="0"/><circle cx="12" cy="19" r="1"/><path d="M12.44 11l-1.9-1.89-2.46-2.44-1.55-1.55-1.82-1.83a1 1 0 0 0-1.42 1.42l1.38 1.37 1.46 1.46 2.23 2.24 1.55 1.54 2.74 2.74 2.79 2.8 3.85 3.85a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/><path d="M21.72 7.93A13.93 13.93 0 0 0 12 4a14.1 14.1 0 0 0-4.44.73l1.62 1.62a11.89 11.89 0 0 1 11.16 3 1 1 0 0 0 .69.28 1 1 0 0 0 .72-.31 1 1 0 0 0-.03-1.39z"/><path d="M3.82 6.65a14.32 14.32 0 0 0-1.54 1.28 1 1 0 0 0 1.38 1.44 13.09 13.09 0 0 1 1.6-1.29z"/><path d="M17 13.14a1 1 0 0 0 .71.3 1 1 0 0 0 .72-1.69A9 9 0 0 0 12 9h-.16l2.35 2.35A7 7 0 0 1 17 13.14z"/><path d="M7.43 10.26a8.8 8.8 0 0 0-1.9 1.49A1 1 0 0 0 7 13.14a7.3 7.3 0 0 1 2-1.41z"/><path d="M8.53 15.4a1 1 0 1 0 1.39 1.44 3.06 3.06 0 0 1 3.84-.25l-2.52-2.52a5 5 0 0 0-2.71 1.33z"/></g></g>',
        "wifi-outline": '<g data-name="Layer 2"><g data-name="wifi"><rect width="24" height="24" opacity="0"/><circle cx="12" cy="19" r="1"/><path d="M12 14a5 5 0 0 0-3.47 1.4 1 1 0 1 0 1.39 1.44 3.08 3.08 0 0 1 4.16 0 1 1 0 1 0 1.39-1.44A5 5 0 0 0 12 14z"/><path d="M12 9a9 9 0 0 0-6.47 2.75A1 1 0 0 0 7 13.14a7 7 0 0 1 10.08 0 1 1 0 0 0 .71.3 1 1 0 0 0 .72-1.69A9 9 0 0 0 12 9z"/><path d="M21.72 7.93a14 14 0 0 0-19.44 0 1 1 0 0 0 1.38 1.44 12 12 0 0 1 16.68 0 1 1 0 0 0 .69.28 1 1 0 0 0 .72-.31 1 1 0 0 0-.03-1.41z"/></g></g>'
      };
    },
    "./package/src/animation.scss":
    /*!************************************!*\
      !*** ./package/src/animation.scss ***!
      \************************************/

    /*! no static exports found */
    function packageSrcAnimationScss(a, t, e) {
      var h = e(
      /*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./animation.scss */
      "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./package/src/animation.scss"),
          r = e(
      /*! ../../node_modules/isomorphic-style-loader/insertCss.js */
      "./node_modules/isomorphic-style-loader/insertCss.js"),
          d = "string" == typeof h ? [[a.i, h, ""]] : h;
      (t = a.exports = h.locals || {})._getContent = function () {
        return d;
      }, t._getCss = function () {
        return "" + h;
      }, t._insertCss = function (a) {
        return r(d, a);
      };
    },
    "./package/src/default-attrs.json":
    /*!****************************************!*\
      !*** ./package/src/default-attrs.json ***!
      \****************************************/

    /*! exports provided: xmlns, width, height, viewBox, default */
    function packageSrcDefaultAttrsJson(a) {
      a.exports = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24"
      };
    },
    "./package/src/icon.js":
    /*!*****************************!*\
      !*** ./package/src/icon.js ***!
      \*****************************/

    /*! exports provided: default */
    function packageSrcIconJs(a, t, e) {
      "use strict";

      e.r(t);
      var h = e(
      /*! classnames/dedupe */
      "./node_modules/classnames/dedupe.js"),
          n = e.n(h),
          r = e(
      /*! ./default-attrs.json */
      "./package/src/default-attrs.json");

      function o(a, t) {
        if (null == a) return {};

        var e,
            h,
            r = function (a, t) {
          if (null == a) return {};
          var e,
              h,
              r = {},
              d = Object.keys(a);

          for (h = 0; h < d.length; h++) {
            e = d[h], 0 <= t.indexOf(e) || (r[e] = a[e]);
          }

          return r;
        }(a, t);

        if (Object.getOwnPropertySymbols) {
          var d = Object.getOwnPropertySymbols(a);

          for (h = 0; h < d.length; h++) {
            e = d[h], 0 <= t.indexOf(e) || Object.prototype.propertyIsEnumerable.call(a, e) && (r[e] = a[e]);
          }
        }

        return r;
      }

      function l(t) {
        for (var a = 1; a < arguments.length; a++) {
          var e = null != arguments[a] ? arguments[a] : {},
              h = Object.keys(e);
          "function" == typeof Object.getOwnPropertySymbols && (h = h.concat(Object.getOwnPropertySymbols(e).filter(function (a) {
            return Object.getOwnPropertyDescriptor(e, a).enumerable;
          }))), h.forEach(function (a) {
            d(t, a, e[a]);
          });
        }

        return t;
      }

      function d(a, t, e) {
        return t in a ? Object.defineProperty(a, t, {
          value: e,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : a[t] = e, a;
      }

      function g(a, t) {
        for (var e = 0; e < t.length; e++) {
          var h = t[e];
          h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(a, h.key, h);
        }
      }
      /**
       * @license
       * Copyright Akveo. All Rights Reserved.
       * Licensed under the MIT License. See License.txt in the project root for license information.
       */


      var c = {
        hover: !0
      },
          p = function p(a) {
        return "string" == typeof a || a instanceof String;
      },
          i = function () {
        function e(a, t) {
          !function (a, t) {
            if (!(a instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, e), this.name = a, this.contents = t, this.attrs = l({}, r, {
            "class": "eva eva-".concat(a)
          });
        }

        var a, t, h;
        return a = e, (t = [{
          key: "toSvg",
          value: function value() {
            var t,
                a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                e = a.animation,
                h = o(a, ["animation"]),
                r = function (a) {
              if (!a) return null;
              a.hover && (a.hover = p(a.hover) ? JSON.parse(a.hover) : a.hover);
              var t = l({}, c, a),
                  e = t.hover ? "eva-icon-hover-".concat(t.type) : "eva-icon-".concat(t.type);
              return t["class"] = n()({
                "eva-animation": !0,
                "eva-infinite": p(a.infinite) ? JSON.parse(a.infinite) : a.infinite
              }, e), t;
            }(e),
                d = r ? r["class"] : "",
                g = l({}, this.attrs, h, {
              "class": n()(this.attrs["class"], a["class"], d)
            }),
                i = "<svg ".concat((t = g, Object.keys(t).map(function (a) {
              return "".concat(a, '="').concat(t[a], '"');
            }).join(" ")), ">").concat(this.contents, "</svg>");

            return r && r.hover ? '<i class="eva-hover">'.concat(i, "</i>") : i;
          }
        }, {
          key: "toString",
          value: function value() {
            return this.contents;
          }
        }]) && g(a.prototype, t), h && g(a, h), e;
      }();

      t["default"] = i;
    },
    "./package/src/icons.js":
    /*!******************************!*\
      !*** ./package/src/icons.js ***!
      \******************************/

    /*! exports provided: default */
    function packageSrcIconsJs(a, t, e) {
      "use strict";

      e.r(t);
      var h = e(
      /*! ./icon */
      "./package/src/icon.js"),
          r = e(
      /*! ../../package-build/eva-icons.json */
      "./package-build/eva-icons.json");
      /**
       * @license
       * Copyright Akveo. All Rights Reserved.
       * Licensed under the MIT License. See License.txt in the project root for license information.
       */

      t["default"] = Object.keys(r).map(function (a) {
        return new h["default"](a, r[a]);
      }).reduce(function (a, t) {
        return a[t.name] = t, a;
      }, {});
    },
    "./package/src/index.js":
    /*!******************************!*\
      !*** ./package/src/index.js ***!
      \******************************/

    /*! exports provided: icons, replace */
    function packageSrcIndexJs(a, t, e) {
      "use strict";

      e.r(t);
      var h = e(
      /*! ./icons */
      "./package/src/icons.js");
      e.d(t, "icons", function () {
        return h["default"];
      });
      var r = e(
      /*! ./replace */
      "./package/src/replace.js");
      e.d(t, "replace", function () {
        return r["default"];
      });
      var d = e(
      /*! ./animation.scss */
      "./package/src/animation.scss");
      /**
       * @license
       * Copyright Akveo. All Rights Reserved.
       * Licensed under the MIT License. See License.txt in the project root for license information.
       */

      "undefined" != typeof window && e.n(d).a._insertCss();
    },
    "./package/src/replace.js":
    /*!********************************!*\
      !*** ./package/src/replace.js ***!
      \********************************/

    /*! exports provided: default */
    function packageSrcReplaceJs(a, t, e) {
      "use strict";

      e.r(t);
      var h = e(
      /*! classnames/dedupe */
      "./node_modules/classnames/dedupe.js"),
          c = e.n(h),
          p = e(
      /*! ./icons */
      "./package/src/icons.js");

      function m(t) {
        for (var a = 1; a < arguments.length; a++) {
          var e = null != arguments[a] ? arguments[a] : {},
              h = Object.keys(e);
          "function" == typeof Object.getOwnPropertySymbols && (h = h.concat(Object.getOwnPropertySymbols(e).filter(function (a) {
            return Object.getOwnPropertyDescriptor(e, a).enumerable;
          }))), h.forEach(function (a) {
            y(t, a, e[a]);
          });
        }

        return t;
      }

      function y(a, t, e) {
        return t in a ? Object.defineProperty(a, t, {
          value: e,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : a[t] = e, a;
      }

      function z(a, t) {
        if (null == a) return {};

        var e,
            h,
            r = function (a, t) {
          if (null == a) return {};
          var e,
              h,
              r = {},
              d = Object.keys(a);

          for (h = 0; h < d.length; h++) {
            e = d[h], 0 <= t.indexOf(e) || (r[e] = a[e]);
          }

          return r;
        }
        /**
         * @license
         * Copyright Akveo. All Rights Reserved.
         * Licensed under the MIT License. See License.txt in the project root for license information.
         */
        (a, t);

        if (Object.getOwnPropertySymbols) {
          var d = Object.getOwnPropertySymbols(a);

          for (h = 0; h < d.length; h++) {
            e = d[h], 0 <= t.indexOf(e) || Object.prototype.propertyIsEnumerable.call(a, e) && (r[e] = a[e]);
          }
        }

        return r;
      }

      var M = {
        "data-eva-animation": "type",
        "data-eva-hover": "hover",
        "data-eva-infinite": "infinite"
      },
          v = {
        "data-eva": "name",
        "data-eva-width": "width",
        "data-eva-height": "height",
        "data-eva-fill": "fill"
      };

      t["default"] = function () {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        if ("undefined" == typeof document) throw new Error("`eva.replace()` only works in a browser environment.");
        var a = document.querySelectorAll("[data-eva]");
        Array.from(a).forEach(function (a) {
          return function (a) {
            var t,
                e,
                h,
                r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                d = (h = a, Array.from(h.attributes).reduce(function (a, t) {
              var e;
              return M[t.name] ? a.animation = m({}, a.animation, y({}, M[t.name], t.value)) : a = m({}, a, v[(e = t).name] ? y({}, v[e.name], e.value) : y({}, e.name, e.value)), a;
            }, {})),
                g = d.name,
                i = z(d, ["name"]),
                n = p["default"][g].toSvg(m({}, r, i, {
              animation: (t = r.animation, e = i.animation, t || e ? m({}, t, e) : null)
            }, {
              "class": c()(r["class"], i["class"])
            })),
                o = new DOMParser().parseFromString(n, "text/html"),
                l = o.querySelector(".eva-hover") || o.querySelector("svg");
            a.parentNode.replaceChild(l, a);
          }(a, t);
        });
      };
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./resources/assets/valex/assets/js/sticky.js":
/*!****************************************************!*\
  !*** ./resources/assets/valex/assets/js/sticky.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  var stickyElement = $(".sticky"),
      stickyClass = "sticky-pin",
      stickyPos = stickyElement.offset().top,
      //Distance from the top of the window.
  stickyHeight; ///Create a negative margin to prevent content 'jumps':

  stickyElement.after('<div class="jumps-prevent"></div>');

  function jumpsPrevent() {
    stickyHeight = stickyElement.innerHeight();
    stickyElement.css({
      "margin-bottom": "-" + stickyHeight + "px"
    });
    stickyElement.next().css({
      "padding-top": +stickyHeight + "px"
    });
  }

  ;
  jumpsPrevent(); //Run.
  //Function trigger:

  $(window).resize(function () {
    jumpsPrevent();
  }); //Sticker function:

  function stickerFn() {
    var winTop = $(this).scrollTop(); //Check element position:

    winTop >= stickyPos ? stickyElement.addClass(stickyClass) : stickyElement.removeClass(stickyClass); //Boolean class switcher.
  }

  ;
  stickerFn(); //Run.
  //Function trigger:

  $(window).scroll(function () {
    stickerFn();
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/assets/valex/assets/plugins/bootstrap/js/bootstrap.bundle.min.js":
/*!************************************************************************************!*\
  !*** ./resources/assets/valex/assets/plugins/bootstrap/js/bootstrap.bundle.min.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? e(exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function (t, p) {
  "use strict";

  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }

  function s(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }

  function l(o) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
          e = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(r).filter(function (t) {
        return Object.getOwnPropertyDescriptor(r, t).enumerable;
      }))), e.forEach(function (t) {
        var e, n, i;
        e = o, i = r[n = t], n in e ? Object.defineProperty(e, n, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[n] = i;
      });
    }

    return o;
  }

  p = p && p.hasOwnProperty("default") ? p["default"] : p;
  var e = "transitionend";

  function n(t) {
    var e = this,
        n = !1;
    return p(this).one(m.TRANSITION_END, function () {
      n = !0;
    }), setTimeout(function () {
      n || m.triggerTransitionEnd(e);
    }, t), this;
  }

  var m = {
    TRANSITION_END: "bsTransitionEnd",
    getUID: function getUID(t) {
      for (; t += ~~(1e6 * Math.random()), document.getElementById(t);) {
        ;
      }

      return t;
    },
    getSelectorFromElement: function getSelectorFromElement(t) {
      var e = t.getAttribute("data-target");

      if (!e || "#" === e) {
        var n = t.getAttribute("href");
        e = n && "#" !== n ? n.trim() : "";
      }

      try {
        return document.querySelector(e) ? e : null;
      } catch (t) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(t) {
      if (!t) return 0;
      var e = p(t).css("transition-duration"),
          n = p(t).css("transition-delay"),
          i = parseFloat(e),
          o = parseFloat(n);
      return i || o ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(n))) : 0;
    },
    reflow: function reflow(t) {
      return t.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(t) {
      p(t).trigger(e);
    },
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(e);
    },
    isElement: function isElement(t) {
      return (t[0] || t).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(t, e, n) {
      for (var i in n) {
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
              r = e[i],
              s = r && m.isElement(r) ? "element" : (a = r, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
          if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".');
        }
      }

      var a;
    },
    findShadowRoot: function findShadowRoot(t) {
      if (!document.documentElement.attachShadow) return null;
      if ("function" != typeof t.getRootNode) return t instanceof ShadowRoot ? t : t.parentNode ? m.findShadowRoot(t.parentNode) : null;
      var e = t.getRootNode();
      return e instanceof ShadowRoot ? e : null;
    }
  };
  p.fn.emulateTransitionEnd = n, p.event.special[m.TRANSITION_END] = {
    bindType: e,
    delegateType: e,
    handle: function handle(t) {
      if (p(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
    }
  };

  var o = "alert",
      r = "bs.alert",
      a = "." + r,
      c = p.fn[o],
      h = {
    CLOSE: "close" + a,
    CLOSED: "closed" + a,
    CLICK_DATA_API: "click" + a + ".data-api"
  },
      u = "alert",
      f = "fade",
      d = "show",
      g = function () {
    function i(t) {
      this._element = t;
    }

    var t = i.prototype;
    return t.close = function (t) {
      var e = this._element;
      t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
    }, t.dispose = function () {
      p.removeData(this._element, r), this._element = null;
    }, t._getRootElement = function (t) {
      var e = m.getSelectorFromElement(t),
          n = !1;
      return e && (n = document.querySelector(e)), n || (n = p(t).closest("." + u)[0]), n;
    }, t._triggerCloseEvent = function (t) {
      var e = p.Event(h.CLOSE);
      return p(t).trigger(e), e;
    }, t._removeElement = function (e) {
      var n = this;

      if (p(e).removeClass(d), p(e).hasClass(f)) {
        var t = m.getTransitionDurationFromElement(e);
        p(e).one(m.TRANSITION_END, function (t) {
          return n._destroyElement(e, t);
        }).emulateTransitionEnd(t);
      } else this._destroyElement(e);
    }, t._destroyElement = function (t) {
      p(t).detach().trigger(h.CLOSED).remove();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = p(this),
            e = t.data(r);
        e || (e = new i(this), t.data(r, e)), "close" === n && e[n](this);
      });
    }, i._handleDismiss = function (e) {
      return function (t) {
        t && t.preventDefault(), e.close(this);
      };
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }]), i;
  }();

  p(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g())), p.fn[o] = g._jQueryInterface, p.fn[o].Constructor = g, p.fn[o].noConflict = function () {
    return p.fn[o] = c, g._jQueryInterface;
  };

  var _ = "button",
      v = "bs.button",
      y = "." + v,
      E = ".data-api",
      b = p.fn[_],
      w = "active",
      C = "btn",
      T = "focus",
      S = '[data-toggle^="button"]',
      D = '[data-toggle="buttons"]',
      I = 'input:not([type="hidden"])',
      A = ".active",
      O = ".btn",
      N = {
    CLICK_DATA_API: "click" + y + E,
    FOCUS_BLUR_DATA_API: "focus" + y + E + " blur" + y + E
  },
      k = function () {
    function n(t) {
      this._element = t;
    }

    var t = n.prototype;
    return t.toggle = function () {
      var t = !0,
          e = !0,
          n = p(this._element).closest(D)[0];

      if (n) {
        var i = this._element.querySelector(I);

        if (i) {
          if ("radio" === i.type) if (i.checked && this._element.classList.contains(w)) t = !1;else {
            var o = n.querySelector(A);
            o && p(o).removeClass(w);
          }

          if (t) {
            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
            i.checked = !this._element.classList.contains(w), p(i).trigger("change");
          }

          i.focus(), e = !1;
        }
      }

      e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(w)), t && p(this._element).toggleClass(w);
    }, t.dispose = function () {
      p.removeData(this._element, v), this._element = null;
    }, n._jQueryInterface = function (e) {
      return this.each(function () {
        var t = p(this).data(v);
        t || (t = new n(this), p(this).data(v, t)), "toggle" === e && t[e]();
      });
    }, s(n, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }]), n;
  }();

  p(document).on(N.CLICK_DATA_API, S, function (t) {
    t.preventDefault();
    var e = t.target;
    p(e).hasClass(C) || (e = p(e).closest(O)), k._jQueryInterface.call(p(e), "toggle");
  }).on(N.FOCUS_BLUR_DATA_API, S, function (t) {
    var e = p(t.target).closest(O)[0];
    p(e).toggleClass(T, /^focus(in)?$/.test(t.type));
  }), p.fn[_] = k._jQueryInterface, p.fn[_].Constructor = k, p.fn[_].noConflict = function () {
    return p.fn[_] = b, k._jQueryInterface;
  };

  var L = "carousel",
      x = "bs.carousel",
      P = "." + x,
      H = ".data-api",
      j = p.fn[L],
      R = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: "hover",
    wrap: !0,
    touch: !0
  },
      F = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean",
    touch: "boolean"
  },
      M = "next",
      W = "prev",
      U = "left",
      B = "right",
      q = {
    SLIDE: "slide" + P,
    SLID: "slid" + P,
    KEYDOWN: "keydown" + P,
    MOUSEENTER: "mouseenter" + P,
    MOUSELEAVE: "mouseleave" + P,
    TOUCHSTART: "touchstart" + P,
    TOUCHMOVE: "touchmove" + P,
    TOUCHEND: "touchend" + P,
    POINTERDOWN: "pointerdown" + P,
    POINTERUP: "pointerup" + P,
    DRAG_START: "dragstart" + P,
    LOAD_DATA_API: "load" + P + H,
    CLICK_DATA_API: "click" + P + H
  },
      K = "carousel",
      Q = "active",
      V = "slide",
      Y = "carousel-item-right",
      z = "carousel-item-left",
      X = "carousel-item-next",
      G = "carousel-item-prev",
      $ = "pointer-event",
      J = ".active",
      Z = ".active.carousel-item",
      tt = ".carousel-item",
      et = ".carousel-item img",
      nt = ".carousel-item-next, .carousel-item-prev",
      it = ".carousel-indicators",
      ot = "[data-slide], [data-slide-to]",
      rt = '[data-ride="carousel"]',
      st = {
    TOUCH: "touch",
    PEN: "pen"
  },
      at = function () {
    function r(t, e) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(it), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners();
    }

    var t = r.prototype;
    return t.next = function () {
      this._isSliding || this._slide(M);
    }, t.nextWhenVisible = function () {
      !document.hidden && p(this._element).is(":visible") && "hidden" !== p(this._element).css("visibility") && this.next();
    }, t.prev = function () {
      this._isSliding || this._slide(W);
    }, t.pause = function (t) {
      t || (this._isPaused = !0), this._element.querySelector(nt) && (m.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }, t.cycle = function (t) {
      t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, t.to = function (t) {
      var e = this;
      this._activeElement = this._element.querySelector(Z);

      var n = this._getItemIndex(this._activeElement);

      if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) p(this._element).one(q.SLID, function () {
        return e.to(t);
      });else {
        if (n === t) return this.pause(), void this.cycle();
        var i = n < t ? M : W;

        this._slide(i, this._items[t]);
      }
    }, t.dispose = function () {
      p(this._element).off(P), p.removeData(this._element, x), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, t._getConfig = function (t) {
      return t = l({}, R, t), m.typeCheckConfig(L, t, F), t;
    }, t._handleSwipe = function () {
      var t = Math.abs(this.touchDeltaX);

      if (!(t <= 40)) {
        var e = t / this.touchDeltaX;
        0 < e && this.prev(), e < 0 && this.next();
      }
    }, t._addEventListeners = function () {
      var e = this;
      this._config.keyboard && p(this._element).on(q.KEYDOWN, function (t) {
        return e._keydown(t);
      }), "hover" === this._config.pause && p(this._element).on(q.MOUSEENTER, function (t) {
        return e.pause(t);
      }).on(q.MOUSELEAVE, function (t) {
        return e.cycle(t);
      }), this._config.touch && this._addTouchEventListeners();
    }, t._addTouchEventListeners = function () {
      var n = this;

      if (this._touchSupported) {
        var e = function e(t) {
          n._pointerEvent && st[t.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = t.originalEvent.clientX : n._pointerEvent || (n.touchStartX = t.originalEvent.touches[0].clientX);
        },
            i = function i(t) {
          n._pointerEvent && st[t.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX), n._handleSwipe(), "hover" === n._config.pause && (n.pause(), n.touchTimeout && clearTimeout(n.touchTimeout), n.touchTimeout = setTimeout(function (t) {
            return n.cycle(t);
          }, 500 + n._config.interval));
        };

        p(this._element.querySelectorAll(et)).on(q.DRAG_START, function (t) {
          return t.preventDefault();
        }), this._pointerEvent ? (p(this._element).on(q.POINTERDOWN, function (t) {
          return e(t);
        }), p(this._element).on(q.POINTERUP, function (t) {
          return i(t);
        }), this._element.classList.add($)) : (p(this._element).on(q.TOUCHSTART, function (t) {
          return e(t);
        }), p(this._element).on(q.TOUCHMOVE, function (t) {
          var e;
          (e = t).originalEvent.touches && 1 < e.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = e.originalEvent.touches[0].clientX - n.touchStartX;
        }), p(this._element).on(q.TOUCHEND, function (t) {
          return i(t);
        }));
      }
    }, t._keydown = function (t) {
      if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
        case 37:
          t.preventDefault(), this.prev();
          break;

        case 39:
          t.preventDefault(), this.next();
      }
    }, t._getItemIndex = function (t) {
      return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(tt)) : [], this._items.indexOf(t);
    }, t._getItemByDirection = function (t, e) {
      var n = t === M,
          i = t === W,
          o = this._getItemIndex(e),
          r = this._items.length - 1;

      if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;
      var s = (o + (t === W ? -1 : 1)) % this._items.length;
      return -1 === s ? this._items[this._items.length - 1] : this._items[s];
    }, t._triggerSlideEvent = function (t, e) {
      var n = this._getItemIndex(t),
          i = this._getItemIndex(this._element.querySelector(Z)),
          o = p.Event(q.SLIDE, {
        relatedTarget: t,
        direction: e,
        from: i,
        to: n
      });

      return p(this._element).trigger(o), o;
    }, t._setActiveIndicatorElement = function (t) {
      if (this._indicatorsElement) {
        var e = [].slice.call(this._indicatorsElement.querySelectorAll(J));
        p(e).removeClass(Q);

        var n = this._indicatorsElement.children[this._getItemIndex(t)];

        n && p(n).addClass(Q);
      }
    }, t._slide = function (t, e) {
      var n,
          i,
          o,
          r = this,
          s = this._element.querySelector(Z),
          a = this._getItemIndex(s),
          l = e || s && this._getItemByDirection(t, s),
          c = this._getItemIndex(l),
          h = Boolean(this._interval);

      if (o = t === M ? (n = z, i = X, U) : (n = Y, i = G, B), l && p(l).hasClass(Q)) this._isSliding = !1;else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) {
        this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l);
        var u = p.Event(q.SLID, {
          relatedTarget: l,
          direction: o,
          from: a,
          to: c
        });

        if (p(this._element).hasClass(V)) {
          p(l).addClass(i), m.reflow(l), p(s).addClass(n), p(l).addClass(n);
          var f = parseInt(l.getAttribute("data-interval"), 10);
          this._config.interval = f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, f) : this._config.defaultInterval || this._config.interval;
          var d = m.getTransitionDurationFromElement(s);
          p(s).one(m.TRANSITION_END, function () {
            p(l).removeClass(n + " " + i).addClass(Q), p(s).removeClass(Q + " " + i + " " + n), r._isSliding = !1, setTimeout(function () {
              return p(r._element).trigger(u);
            }, 0);
          }).emulateTransitionEnd(d);
        } else p(s).removeClass(Q), p(l).addClass(Q), this._isSliding = !1, p(this._element).trigger(u);

        h && this.cycle();
      }
    }, r._jQueryInterface = function (i) {
      return this.each(function () {
        var t = p(this).data(x),
            e = l({}, R, p(this).data());
        "object" == _typeof(i) && (e = l({}, e, i));
        var n = "string" == typeof i ? i : e.slide;
        if (t || (t = new r(this, e), p(this).data(x, t)), "number" == typeof i) t.to(i);else if ("string" == typeof n) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n]();
        } else e.interval && e.ride && (t.pause(), t.cycle());
      });
    }, r._dataApiClickHandler = function (t) {
      var e = m.getSelectorFromElement(this);

      if (e) {
        var n = p(e)[0];

        if (n && p(n).hasClass(K)) {
          var i = l({}, p(n).data(), p(this).data()),
              o = this.getAttribute("data-slide-to");
          o && (i.interval = !1), r._jQueryInterface.call(p(n), i), o && p(n).data(x).to(o), t.preventDefault();
        }
      }
    }, s(r, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return R;
      }
    }]), r;
  }();

  p(document).on(q.CLICK_DATA_API, ot, at._dataApiClickHandler), p(window).on(q.LOAD_DATA_API, function () {
    for (var t = [].slice.call(document.querySelectorAll(rt)), e = 0, n = t.length; e < n; e++) {
      var i = p(t[e]);

      at._jQueryInterface.call(i, i.data());
    }
  }), p.fn[L] = at._jQueryInterface, p.fn[L].Constructor = at, p.fn[L].noConflict = function () {
    return p.fn[L] = j, at._jQueryInterface;
  };

  var lt = "collapse",
      ct = "bs.collapse",
      ht = "." + ct,
      ut = p.fn[lt],
      ft = {
    toggle: !0,
    parent: ""
  },
      dt = {
    toggle: "boolean",
    parent: "(string|element)"
  },
      pt = {
    SHOW: "show" + ht,
    SHOWN: "shown" + ht,
    HIDE: "hide" + ht,
    HIDDEN: "hidden" + ht,
    CLICK_DATA_API: "click" + ht + ".data-api"
  },
      mt = "show",
      gt = "collapse",
      _t = "collapsing",
      vt = "collapsed",
      yt = "width",
      Et = "height",
      bt = ".show, .collapsing",
      wt = '[data-toggle="collapse"]',
      Ct = function () {
    function a(e, t) {
      this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));

      for (var n = [].slice.call(document.querySelectorAll(wt)), i = 0, o = n.length; i < o; i++) {
        var r = n[i],
            s = m.getSelectorFromElement(r),
            a = [].slice.call(document.querySelectorAll(s)).filter(function (t) {
          return t === e;
        });
        null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(r));
      }

      this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
    }

    var t = a.prototype;
    return t.toggle = function () {
      p(this._element).hasClass(mt) ? this.hide() : this.show();
    }, t.show = function () {
      var t,
          e,
          n = this;

      if (!this._isTransitioning && !p(this._element).hasClass(mt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(bt)).filter(function (t) {
        return "string" == typeof n._config.parent ? t.getAttribute("data-parent") === n._config.parent : t.classList.contains(gt);
      })).length && (t = null), !(t && (e = p(t).not(this._selector).data(ct)) && e._isTransitioning))) {
        var i = p.Event(pt.SHOW);

        if (p(this._element).trigger(i), !i.isDefaultPrevented()) {
          t && (a._jQueryInterface.call(p(t).not(this._selector), "hide"), e || p(t).data(ct, null));

          var o = this._getDimension();

          p(this._element).removeClass(gt).addClass(_t), this._element.style[o] = 0, this._triggerArray.length && p(this._triggerArray).removeClass(vt).attr("aria-expanded", !0), this.setTransitioning(!0);
          var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
              s = m.getTransitionDurationFromElement(this._element);
          p(this._element).one(m.TRANSITION_END, function () {
            p(n._element).removeClass(_t).addClass(gt).addClass(mt), n._element.style[o] = "", n.setTransitioning(!1), p(n._element).trigger(pt.SHOWN);
          }).emulateTransitionEnd(s), this._element.style[o] = this._element[r] + "px";
        }
      }
    }, t.hide = function () {
      var t = this;

      if (!this._isTransitioning && p(this._element).hasClass(mt)) {
        var e = p.Event(pt.HIDE);

        if (p(this._element).trigger(e), !e.isDefaultPrevented()) {
          var n = this._getDimension();

          this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", m.reflow(this._element), p(this._element).addClass(_t).removeClass(gt).removeClass(mt);
          var i = this._triggerArray.length;
          if (0 < i) for (var o = 0; o < i; o++) {
            var r = this._triggerArray[o],
                s = m.getSelectorFromElement(r);
            if (null !== s) p([].slice.call(document.querySelectorAll(s))).hasClass(mt) || p(r).addClass(vt).attr("aria-expanded", !1);
          }
          this.setTransitioning(!0);
          this._element.style[n] = "";
          var a = m.getTransitionDurationFromElement(this._element);
          p(this._element).one(m.TRANSITION_END, function () {
            t.setTransitioning(!1), p(t._element).removeClass(_t).addClass(gt).trigger(pt.HIDDEN);
          }).emulateTransitionEnd(a);
        }
      }
    }, t.setTransitioning = function (t) {
      this._isTransitioning = t;
    }, t.dispose = function () {
      p.removeData(this._element, ct), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
    }, t._getConfig = function (t) {
      return (t = l({}, ft, t)).toggle = Boolean(t.toggle), m.typeCheckConfig(lt, t, dt), t;
    }, t._getDimension = function () {
      return p(this._element).hasClass(yt) ? yt : Et;
    }, t._getParent = function () {
      var t,
          n = this;
      m.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
      var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
          i = [].slice.call(t.querySelectorAll(e));
      return p(i).each(function (t, e) {
        n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]);
      }), t;
    }, t._addAriaAndCollapsedClass = function (t, e) {
      var n = p(t).hasClass(mt);
      e.length && p(e).toggleClass(vt, !n).attr("aria-expanded", n);
    }, a._getTargetFromElement = function (t) {
      var e = m.getSelectorFromElement(t);
      return e ? document.querySelector(e) : null;
    }, a._jQueryInterface = function (i) {
      return this.each(function () {
        var t = p(this),
            e = t.data(ct),
            n = l({}, ft, t.data(), "object" == _typeof(i) && i ? i : {});

        if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(ct, e)), "string" == typeof i) {
          if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');
          e[i]();
        }
      });
    }, s(a, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return ft;
      }
    }]), a;
  }();

  p(document).on(pt.CLICK_DATA_API, wt, function (t) {
    "A" === t.currentTarget.tagName && t.preventDefault();
    var n = p(this),
        e = m.getSelectorFromElement(this),
        i = [].slice.call(document.querySelectorAll(e));
    p(i).each(function () {
      var t = p(this),
          e = t.data(ct) ? "toggle" : n.data();

      Ct._jQueryInterface.call(t, e);
    });
  }), p.fn[lt] = Ct._jQueryInterface, p.fn[lt].Constructor = Ct, p.fn[lt].noConflict = function () {
    return p.fn[lt] = ut, Ct._jQueryInterface;
  };

  for (var Tt = "undefined" != typeof window && "undefined" != typeof document, St = ["Edge", "Trident", "Firefox"], Dt = 0, It = 0; It < St.length; It += 1) {
    if (Tt && 0 <= navigator.userAgent.indexOf(St[It])) {
      Dt = 1;
      break;
    }
  }

  var At = Tt && window.Promise ? function (t) {
    var e = !1;
    return function () {
      e || (e = !0, window.Promise.resolve().then(function () {
        e = !1, t();
      }));
    };
  } : function (t) {
    var e = !1;
    return function () {
      e || (e = !0, setTimeout(function () {
        e = !1, t();
      }, Dt));
    };
  };

  function Ot(t) {
    return t && "[object Function]" === {}.toString.call(t);
  }

  function Nt(t, e) {
    if (1 !== t.nodeType) return [];
    var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
    return e ? n[e] : n;
  }

  function kt(t) {
    return "HTML" === t.nodeName ? t : t.parentNode || t.host;
  }

  function Lt(t) {
    if (!t) return document.body;

    switch (t.nodeName) {
      case "HTML":
      case "BODY":
        return t.ownerDocument.body;

      case "#document":
        return t.body;
    }

    var e = Nt(t),
        n = e.overflow,
        i = e.overflowX,
        o = e.overflowY;
    return /(auto|scroll|overlay)/.test(n + o + i) ? t : Lt(kt(t));
  }

  var xt = Tt && !(!window.MSInputMethodContext || !document.documentMode),
      Pt = Tt && /MSIE 10/.test(navigator.userAgent);

  function Ht(t) {
    return 11 === t ? xt : 10 === t ? Pt : xt || Pt;
  }

  function jt(t) {
    if (!t) return document.documentElement;

    for (var e = Ht(10) ? document.body : null, n = t.offsetParent || null; n === e && t.nextElementSibling;) {
      n = (t = t.nextElementSibling).offsetParent;
    }

    var i = n && n.nodeName;
    return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === Nt(n, "position") ? jt(n) : n : t ? t.ownerDocument.documentElement : document.documentElement;
  }

  function Rt(t) {
    return null !== t.parentNode ? Rt(t.parentNode) : t;
  }

  function Ft(t, e) {
    if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
    var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
        i = n ? t : e,
        o = n ? e : t,
        r = document.createRange();
    r.setStart(i, 0), r.setEnd(o, 0);
    var s,
        a,
        l = r.commonAncestorContainer;
    if (t !== l && e !== l || i.contains(o)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && jt(s.firstElementChild) !== s ? jt(l) : l;
    var c = Rt(t);
    return c.host ? Ft(c.host, e) : Ft(t, Rt(e).host);
  }

  function Mt(t) {
    var e = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
        n = t.nodeName;
    if ("BODY" !== n && "HTML" !== n) return t[e];
    var i = t.ownerDocument.documentElement;
    return (t.ownerDocument.scrollingElement || i)[e];
  }

  function Wt(t, e) {
    var n = "x" === e ? "Left" : "Top",
        i = "Left" === n ? "Right" : "Bottom";
    return parseFloat(t["border" + n + "Width"], 10) + parseFloat(t["border" + i + "Width"], 10);
  }

  function Ut(t, e, n, i) {
    return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], Ht(10) ? parseInt(n["offset" + t]) + parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0);
  }

  function Bt(t) {
    var e = t.body,
        n = t.documentElement,
        i = Ht(10) && getComputedStyle(n);
    return {
      height: Ut("Height", e, n, i),
      width: Ut("Width", e, n, i)
    };
  }

  var qt = function () {
    function i(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }

    return function (t, e, n) {
      return e && i(t.prototype, e), n && i(t, n), t;
    };
  }(),
      Kt = function Kt(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t;
  },
      Qt = Object.assign || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];

      for (var i in n) {
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
      }
    }

    return t;
  };

  function Vt(t) {
    return Qt({}, t, {
      right: t.left + t.width,
      bottom: t.top + t.height
    });
  }

  function Yt(t) {
    var e = {};

    try {
      if (Ht(10)) {
        e = t.getBoundingClientRect();
        var n = Mt(t, "top"),
            i = Mt(t, "left");
        e.top += n, e.left += i, e.bottom += n, e.right += i;
      } else e = t.getBoundingClientRect();
    } catch (t) {}

    var o = {
      left: e.left,
      top: e.top,
      width: e.right - e.left,
      height: e.bottom - e.top
    },
        r = "HTML" === t.nodeName ? Bt(t.ownerDocument) : {},
        s = r.width || t.clientWidth || o.right - o.left,
        a = r.height || t.clientHeight || o.bottom - o.top,
        l = t.offsetWidth - s,
        c = t.offsetHeight - a;

    if (l || c) {
      var h = Nt(t);
      l -= Wt(h, "x"), c -= Wt(h, "y"), o.width -= l, o.height -= c;
    }

    return Vt(o);
  }

  function zt(t, e) {
    var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        i = Ht(10),
        o = "HTML" === e.nodeName,
        r = Yt(t),
        s = Yt(e),
        a = Lt(t),
        l = Nt(e),
        c = parseFloat(l.borderTopWidth, 10),
        h = parseFloat(l.borderLeftWidth, 10);
    n && o && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
    var u = Vt({
      top: r.top - s.top - c,
      left: r.left - s.left - h,
      width: r.width,
      height: r.height
    });

    if (u.marginTop = 0, u.marginLeft = 0, !i && o) {
      var f = parseFloat(l.marginTop, 10),
          d = parseFloat(l.marginLeft, 10);
      u.top -= c - f, u.bottom -= c - f, u.left -= h - d, u.right -= h - d, u.marginTop = f, u.marginLeft = d;
    }

    return (i && !n ? e.contains(a) : e === a && "BODY" !== a.nodeName) && (u = function (t, e) {
      var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
          i = Mt(e, "top"),
          o = Mt(e, "left"),
          r = n ? -1 : 1;
      return t.top += i * r, t.bottom += i * r, t.left += o * r, t.right += o * r, t;
    }(u, e)), u;
  }

  function Xt(t) {
    if (!t || !t.parentElement || Ht()) return document.documentElement;

    for (var e = t.parentElement; e && "none" === Nt(e, "transform");) {
      e = e.parentElement;
    }

    return e || document.documentElement;
  }

  function Gt(t, e, n, i) {
    var o = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
        r = {
      top: 0,
      left: 0
    },
        s = o ? Xt(t) : Ft(t, e);
    if ("viewport" === i) r = function (t) {
      var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
          n = t.ownerDocument.documentElement,
          i = zt(t, n),
          o = Math.max(n.clientWidth, window.innerWidth || 0),
          r = Math.max(n.clientHeight, window.innerHeight || 0),
          s = e ? 0 : Mt(n),
          a = e ? 0 : Mt(n, "left");
      return Vt({
        top: s - i.top + i.marginTop,
        left: a - i.left + i.marginLeft,
        width: o,
        height: r
      });
    }(s, o);else {
      var a = void 0;
      "scrollParent" === i ? "BODY" === (a = Lt(kt(e))).nodeName && (a = t.ownerDocument.documentElement) : a = "window" === i ? t.ownerDocument.documentElement : i;
      var l = zt(a, s, o);
      if ("HTML" !== a.nodeName || function t(e) {
        var n = e.nodeName;
        if ("BODY" === n || "HTML" === n) return !1;
        if ("fixed" === Nt(e, "position")) return !0;
        var i = kt(e);
        return !!i && t(i);
      }(s)) r = l;else {
        var c = Bt(t.ownerDocument),
            h = c.height,
            u = c.width;
        r.top += l.top - l.marginTop, r.bottom = h + l.top, r.left += l.left - l.marginLeft, r.right = u + l.left;
      }
    }
    var f = "number" == typeof (n = n || 0);
    return r.left += f ? n : n.left || 0, r.top += f ? n : n.top || 0, r.right -= f ? n : n.right || 0, r.bottom -= f ? n : n.bottom || 0, r;
  }

  function $t(t, e, i, n, o) {
    var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === t.indexOf("auto")) return t;
    var s = Gt(i, n, r, o),
        a = {
      top: {
        width: s.width,
        height: e.top - s.top
      },
      right: {
        width: s.right - e.right,
        height: s.height
      },
      bottom: {
        width: s.width,
        height: s.bottom - e.bottom
      },
      left: {
        width: e.left - s.left,
        height: s.height
      }
    },
        l = Object.keys(a).map(function (t) {
      return Qt({
        key: t
      }, a[t], {
        area: (e = a[t], e.width * e.height)
      });
      var e;
    }).sort(function (t, e) {
      return e.area - t.area;
    }),
        c = l.filter(function (t) {
      var e = t.width,
          n = t.height;
      return e >= i.clientWidth && n >= i.clientHeight;
    }),
        h = 0 < c.length ? c[0].key : l[0].key,
        u = t.split("-")[1];
    return h + (u ? "-" + u : "");
  }

  function Jt(t, e, n) {
    var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return zt(n, i ? Xt(e) : Ft(e, n), i);
  }

  function Zt(t) {
    var e = t.ownerDocument.defaultView.getComputedStyle(t),
        n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
        i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
    return {
      width: t.offsetWidth + i,
      height: t.offsetHeight + n
    };
  }

  function te(t) {
    var e = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom"
    };
    return t.replace(/left|right|bottom|top/g, function (t) {
      return e[t];
    });
  }

  function ee(t, e, n) {
    n = n.split("-")[0];
    var i = Zt(t),
        o = {
      width: i.width,
      height: i.height
    },
        r = -1 !== ["right", "left"].indexOf(n),
        s = r ? "top" : "left",
        a = r ? "left" : "top",
        l = r ? "height" : "width",
        c = r ? "width" : "height";
    return o[s] = e[s] + e[l] / 2 - i[l] / 2, o[a] = n === a ? e[a] - i[c] : e[te(a)], o;
  }

  function ne(t, e) {
    return Array.prototype.find ? t.find(e) : t.filter(e)[0];
  }

  function ie(t, n, e) {
    return (void 0 === e ? t : t.slice(0, function (t, e, n) {
      if (Array.prototype.findIndex) return t.findIndex(function (t) {
        return t[e] === n;
      });
      var i = ne(t, function (t) {
        return t[e] === n;
      });
      return t.indexOf(i);
    }(t, "name", e))).forEach(function (t) {
      t["function"] && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
      var e = t["function"] || t.fn;
      t.enabled && Ot(e) && (n.offsets.popper = Vt(n.offsets.popper), n.offsets.reference = Vt(n.offsets.reference), n = e(n, t));
    }), n;
  }

  function oe(t, n) {
    return t.some(function (t) {
      var e = t.name;
      return t.enabled && e === n;
    });
  }

  function re(t) {
    for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) {
      var o = e[i],
          r = o ? "" + o + n : t;
      if ("undefined" != typeof document.body.style[r]) return r;
    }

    return null;
  }

  function se(t) {
    var e = t.ownerDocument;
    return e ? e.defaultView : window;
  }

  function ae(t, e, n, i) {
    n.updateBound = i, se(t).addEventListener("resize", n.updateBound, {
      passive: !0
    });
    var o = Lt(t);
    return function t(e, n, i, o) {
      var r = "BODY" === e.nodeName,
          s = r ? e.ownerDocument.defaultView : e;
      s.addEventListener(n, i, {
        passive: !0
      }), r || t(Lt(s.parentNode), n, i, o), o.push(s);
    }(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n;
  }

  function le() {
    var t, e;
    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, se(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function (t) {
      t.removeEventListener("scroll", e.updateBound);
    }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e));
  }

  function ce(t) {
    return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
  }

  function he(n, i) {
    Object.keys(i).forEach(function (t) {
      var e = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(t) && ce(i[t]) && (e = "px"), n.style[t] = i[t] + e;
    });
  }

  var ue = Tt && /Firefox/i.test(navigator.userAgent);

  function fe(t, e, n) {
    var i = ne(t, function (t) {
      return t.name === e;
    }),
        o = !!i && t.some(function (t) {
      return t.name === n && t.enabled && t.order < i.order;
    });

    if (!o) {
      var r = "`" + e + "`",
          s = "`" + n + "`";
      console.warn(s + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!");
    }

    return o;
  }

  var de = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
      pe = de.slice(3);

  function me(t) {
    var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        n = pe.indexOf(t),
        i = pe.slice(n + 1).concat(pe.slice(0, n));
    return e ? i.reverse() : i;
  }

  var ge = "flip",
      _e = "clockwise",
      ve = "counterclockwise";

  function ye(t, o, r, e) {
    var s = [0, 0],
        a = -1 !== ["right", "left"].indexOf(e),
        n = t.split(/(\+|\-)/).map(function (t) {
      return t.trim();
    }),
        i = n.indexOf(ne(n, function (t) {
      return -1 !== t.search(/,|\s/);
    }));
    n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
    var l = /\s*,\s*|\s+/,
        c = -1 !== i ? [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))] : [n];
    return (c = c.map(function (t, e) {
      var n = (1 === e ? !a : a) ? "height" : "width",
          i = !1;
      return t.reduce(function (t, e) {
        return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, i = !0, t) : i ? (t[t.length - 1] += e, i = !1, t) : t.concat(e);
      }, []).map(function (t) {
        return function (t, e, n, i) {
          var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
              r = +o[1],
              s = o[2];
          if (!r) return t;
          if (0 !== s.indexOf("%")) return "vh" !== s && "vw" !== s ? r : ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r;
          var a = void 0;

          switch (s) {
            case "%p":
              a = n;
              break;

            case "%":
            case "%r":
            default:
              a = i;
          }

          return Vt(a)[e] / 100 * r;
        }(t, n, o, r);
      });
    })).forEach(function (n, i) {
      n.forEach(function (t, e) {
        ce(t) && (s[i] += t * ("-" === n[e - 1] ? -1 : 1));
      });
    }), s;
  }

  var Ee = {
    placement: "bottom",
    positionFixed: !1,
    eventsEnabled: !0,
    removeOnDestroy: !1,
    onCreate: function onCreate() {},
    onUpdate: function onUpdate() {},
    modifiers: {
      shift: {
        order: 100,
        enabled: !0,
        fn: function fn(t) {
          var e = t.placement,
              n = e.split("-")[0],
              i = e.split("-")[1];

          if (i) {
            var o = t.offsets,
                r = o.reference,
                s = o.popper,
                a = -1 !== ["bottom", "top"].indexOf(n),
                l = a ? "left" : "top",
                c = a ? "width" : "height",
                h = {
              start: Kt({}, l, r[l]),
              end: Kt({}, l, r[l] + r[c] - s[c])
            };
            t.offsets.popper = Qt({}, s, h[i]);
          }

          return t;
        }
      },
      offset: {
        order: 200,
        enabled: !0,
        fn: function fn(t, e) {
          var n = e.offset,
              i = t.placement,
              o = t.offsets,
              r = o.popper,
              s = o.reference,
              a = i.split("-")[0],
              l = void 0;
          return l = ce(+n) ? [+n, 0] : ye(n, r, s, a), "left" === a ? (r.top += l[0], r.left -= l[1]) : "right" === a ? (r.top += l[0], r.left += l[1]) : "top" === a ? (r.left += l[0], r.top -= l[1]) : "bottom" === a && (r.left += l[0], r.top += l[1]), t.popper = r, t;
        },
        offset: 0
      },
      preventOverflow: {
        order: 300,
        enabled: !0,
        fn: function fn(t, i) {
          var e = i.boundariesElement || jt(t.instance.popper);
          t.instance.reference === e && (e = jt(e));
          var n = re("transform"),
              o = t.instance.popper.style,
              r = o.top,
              s = o.left,
              a = o[n];
          o.top = "", o.left = "", o[n] = "";
          var l = Gt(t.instance.popper, t.instance.reference, i.padding, e, t.positionFixed);
          o.top = r, o.left = s, o[n] = a, i.boundaries = l;
          var c = i.priority,
              h = t.offsets.popper,
              u = {
            primary: function primary(t) {
              var e = h[t];
              return h[t] < l[t] && !i.escapeWithReference && (e = Math.max(h[t], l[t])), Kt({}, t, e);
            },
            secondary: function secondary(t) {
              var e = "right" === t ? "left" : "top",
                  n = h[e];
              return h[t] > l[t] && !i.escapeWithReference && (n = Math.min(h[e], l[t] - ("right" === t ? h.width : h.height))), Kt({}, e, n);
            }
          };
          return c.forEach(function (t) {
            var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
            h = Qt({}, h, u[e](t));
          }), t.offsets.popper = h, t;
        },
        priority: ["left", "right", "top", "bottom"],
        padding: 5,
        boundariesElement: "scrollParent"
      },
      keepTogether: {
        order: 400,
        enabled: !0,
        fn: function fn(t) {
          var e = t.offsets,
              n = e.popper,
              i = e.reference,
              o = t.placement.split("-")[0],
              r = Math.floor,
              s = -1 !== ["top", "bottom"].indexOf(o),
              a = s ? "right" : "bottom",
              l = s ? "left" : "top",
              c = s ? "width" : "height";
          return n[a] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[c]), n[l] > r(i[a]) && (t.offsets.popper[l] = r(i[a])), t;
        }
      },
      arrow: {
        order: 500,
        enabled: !0,
        fn: function fn(t, e) {
          var n;
          if (!fe(t.instance.modifiers, "arrow", "keepTogether")) return t;
          var i = e.element;

          if ("string" == typeof i) {
            if (!(i = t.instance.popper.querySelector(i))) return t;
          } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;

          var o = t.placement.split("-")[0],
              r = t.offsets,
              s = r.popper,
              a = r.reference,
              l = -1 !== ["left", "right"].indexOf(o),
              c = l ? "height" : "width",
              h = l ? "Top" : "Left",
              u = h.toLowerCase(),
              f = l ? "left" : "top",
              d = l ? "bottom" : "right",
              p = Zt(i)[c];
          a[d] - p < s[u] && (t.offsets.popper[u] -= s[u] - (a[d] - p)), a[u] + p > s[d] && (t.offsets.popper[u] += a[u] + p - s[d]), t.offsets.popper = Vt(t.offsets.popper);

          var m = a[u] + a[c] / 2 - p / 2,
              g = Nt(t.instance.popper),
              _ = parseFloat(g["margin" + h], 10),
              v = parseFloat(g["border" + h + "Width"], 10),
              y = m - t.offsets.popper[u] - _ - v;

          return y = Math.max(Math.min(s[c] - p, y), 0), t.arrowElement = i, t.offsets.arrow = (Kt(n = {}, u, Math.round(y)), Kt(n, f, ""), n), t;
        },
        element: "[x-arrow]"
      },
      flip: {
        order: 600,
        enabled: !0,
        fn: function fn(p, m) {
          if (oe(p.instance.modifiers, "inner")) return p;
          if (p.flipped && p.placement === p.originalPlacement) return p;
          var g = Gt(p.instance.popper, p.instance.reference, m.padding, m.boundariesElement, p.positionFixed),
              _ = p.placement.split("-")[0],
              v = te(_),
              y = p.placement.split("-")[1] || "",
              E = [];

          switch (m.behavior) {
            case ge:
              E = [_, v];
              break;

            case _e:
              E = me(_);
              break;

            case ve:
              E = me(_, !0);
              break;

            default:
              E = m.behavior;
          }

          return E.forEach(function (t, e) {
            if (_ !== t || E.length === e + 1) return p;
            _ = p.placement.split("-")[0], v = te(_);
            var n,
                i = p.offsets.popper,
                o = p.offsets.reference,
                r = Math.floor,
                s = "left" === _ && r(i.right) > r(o.left) || "right" === _ && r(i.left) < r(o.right) || "top" === _ && r(i.bottom) > r(o.top) || "bottom" === _ && r(i.top) < r(o.bottom),
                a = r(i.left) < r(g.left),
                l = r(i.right) > r(g.right),
                c = r(i.top) < r(g.top),
                h = r(i.bottom) > r(g.bottom),
                u = "left" === _ && a || "right" === _ && l || "top" === _ && c || "bottom" === _ && h,
                f = -1 !== ["top", "bottom"].indexOf(_),
                d = !!m.flipVariations && (f && "start" === y && a || f && "end" === y && l || !f && "start" === y && c || !f && "end" === y && h);
            (s || u || d) && (p.flipped = !0, (s || u) && (_ = E[e + 1]), d && (y = "end" === (n = y) ? "start" : "start" === n ? "end" : n), p.placement = _ + (y ? "-" + y : ""), p.offsets.popper = Qt({}, p.offsets.popper, ee(p.instance.popper, p.offsets.reference, p.placement)), p = ie(p.instance.modifiers, p, "flip"));
          }), p;
        },
        behavior: "flip",
        padding: 5,
        boundariesElement: "viewport"
      },
      inner: {
        order: 700,
        enabled: !1,
        fn: function fn(t) {
          var e = t.placement,
              n = e.split("-")[0],
              i = t.offsets,
              o = i.popper,
              r = i.reference,
              s = -1 !== ["left", "right"].indexOf(n),
              a = -1 === ["top", "left"].indexOf(n);
          return o[s ? "left" : "top"] = r[n] - (a ? o[s ? "width" : "height"] : 0), t.placement = te(e), t.offsets.popper = Vt(o), t;
        }
      },
      hide: {
        order: 800,
        enabled: !0,
        fn: function fn(t) {
          if (!fe(t.instance.modifiers, "hide", "preventOverflow")) return t;
          var e = t.offsets.reference,
              n = ne(t.instance.modifiers, function (t) {
            return "preventOverflow" === t.name;
          }).boundaries;

          if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
            if (!0 === t.hide) return t;
            t.hide = !0, t.attributes["x-out-of-boundaries"] = "";
          } else {
            if (!1 === t.hide) return t;
            t.hide = !1, t.attributes["x-out-of-boundaries"] = !1;
          }

          return t;
        }
      },
      computeStyle: {
        order: 850,
        enabled: !0,
        fn: function fn(t, e) {
          var n = e.x,
              i = e.y,
              o = t.offsets.popper,
              r = ne(t.instance.modifiers, function (t) {
            return "applyStyle" === t.name;
          }).gpuAcceleration;
          void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");

          var s,
              a,
              l,
              c,
              h,
              u,
              f,
              d,
              p,
              m,
              g,
              _,
              v,
              y,
              E = void 0 !== r ? r : e.gpuAcceleration,
              b = jt(t.instance.popper),
              w = Yt(b),
              C = {
            position: o.position
          },
              T = (s = t, a = window.devicePixelRatio < 2 || !ue, l = s.offsets, c = l.popper, h = l.reference, u = Math.round, f = Math.floor, d = function d(t) {
            return t;
          }, p = u(h.width), m = u(c.width), g = -1 !== ["left", "right"].indexOf(s.placement), _ = -1 !== s.placement.indexOf("-"), y = a ? u : d, {
            left: (v = a ? g || _ || p % 2 == m % 2 ? u : f : d)(p % 2 == 1 && m % 2 == 1 && !_ && a ? c.left - 1 : c.left),
            top: y(c.top),
            bottom: y(c.bottom),
            right: v(c.right)
          }),
              S = "bottom" === n ? "top" : "bottom",
              D = "right" === i ? "left" : "right",
              I = re("transform"),
              A = void 0,
              O = void 0;

          if (O = "bottom" === S ? "HTML" === b.nodeName ? -b.clientHeight + T.bottom : -w.height + T.bottom : T.top, A = "right" === D ? "HTML" === b.nodeName ? -b.clientWidth + T.right : -w.width + T.right : T.left, E && I) C[I] = "translate3d(" + A + "px, " + O + "px, 0)", C[S] = 0, C[D] = 0, C.willChange = "transform";else {
            var N = "bottom" === S ? -1 : 1,
                k = "right" === D ? -1 : 1;
            C[S] = O * N, C[D] = A * k, C.willChange = S + ", " + D;
          }
          var L = {
            "x-placement": t.placement
          };
          return t.attributes = Qt({}, L, t.attributes), t.styles = Qt({}, C, t.styles), t.arrowStyles = Qt({}, t.offsets.arrow, t.arrowStyles), t;
        },
        gpuAcceleration: !0,
        x: "bottom",
        y: "right"
      },
      applyStyle: {
        order: 900,
        enabled: !0,
        fn: function fn(t) {
          var e, n;
          return he(t.instance.popper, t.styles), e = t.instance.popper, n = t.attributes, Object.keys(n).forEach(function (t) {
            !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t);
          }), t.arrowElement && Object.keys(t.arrowStyles).length && he(t.arrowElement, t.arrowStyles), t;
        },
        onLoad: function onLoad(t, e, n, i, o) {
          var r = Jt(o, e, t, n.positionFixed),
              s = $t(n.placement, r, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
          return e.setAttribute("x-placement", s), he(e, {
            position: n.positionFixed ? "fixed" : "absolute"
          }), n;
        },
        gpuAcceleration: void 0
      }
    }
  },
      be = function () {
    function r(t, e) {
      var n = this,
          i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
      !function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }(this, r), this.scheduleUpdate = function () {
        return requestAnimationFrame(n.update);
      }, this.update = At(this.update.bind(this)), this.options = Qt({}, r.Defaults, i), this.state = {
        isDestroyed: !1,
        isCreated: !1,
        scrollParents: []
      }, this.reference = t && t.jquery ? t[0] : t, this.popper = e && e.jquery ? e[0] : e, this.options.modifiers = {}, Object.keys(Qt({}, r.Defaults.modifiers, i.modifiers)).forEach(function (t) {
        n.options.modifiers[t] = Qt({}, r.Defaults.modifiers[t] || {}, i.modifiers ? i.modifiers[t] : {});
      }), this.modifiers = Object.keys(this.options.modifiers).map(function (t) {
        return Qt({
          name: t
        }, n.options.modifiers[t]);
      }).sort(function (t, e) {
        return t.order - e.order;
      }), this.modifiers.forEach(function (t) {
        t.enabled && Ot(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state);
      }), this.update();
      var o = this.options.eventsEnabled;
      o && this.enableEventListeners(), this.state.eventsEnabled = o;
    }

    return qt(r, [{
      key: "update",
      value: function value() {
        return function () {
          if (!this.state.isDestroyed) {
            var t = {
              instance: this,
              styles: {},
              arrowStyles: {},
              attributes: {},
              flipped: !1,
              offsets: {}
            };
            t.offsets.reference = Jt(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = $t(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = ee(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = ie(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t));
          }
        }.call(this);
      }
    }, {
      key: "destroy",
      value: function value() {
        return function () {
          return this.state.isDestroyed = !0, oe(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[re("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
        }.call(this);
      }
    }, {
      key: "enableEventListeners",
      value: function value() {
        return function () {
          this.state.eventsEnabled || (this.state = ae(this.reference, this.options, this.state, this.scheduleUpdate));
        }.call(this);
      }
    }, {
      key: "disableEventListeners",
      value: function value() {
        return le.call(this);
      }
    }]), r;
  }();

  be.Utils = ("undefined" != typeof window ? window : global).PopperUtils, be.placements = de, be.Defaults = Ee;

  var we = "dropdown",
      Ce = "bs.dropdown",
      Te = "." + Ce,
      Se = ".data-api",
      De = p.fn[we],
      Ie = new RegExp("38|40|27"),
      Ae = {
    HIDE: "hide" + Te,
    HIDDEN: "hidden" + Te,
    SHOW: "show" + Te,
    SHOWN: "shown" + Te,
    CLICK: "click" + Te,
    CLICK_DATA_API: "click" + Te + Se,
    KEYDOWN_DATA_API: "keydown" + Te + Se,
    KEYUP_DATA_API: "keyup" + Te + Se
  },
      Oe = "disabled",
      Ne = "show",
      ke = "dropup",
      Le = "dropright",
      xe = "dropleft",
      Pe = "dropdown-menu-right",
      He = "position-static",
      je = '[data-toggle="dropdown"]',
      Re = ".dropdown form",
      Fe = ".dropdown-menu",
      Me = ".navbar-nav",
      We = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
      Ue = "top-start",
      Be = "top-end",
      qe = "bottom-start",
      Ke = "bottom-end",
      Qe = "right-start",
      Ve = "left-start",
      Ye = {
    offset: 0,
    flip: !0,
    boundary: "scrollParent",
    reference: "toggle",
    display: "dynamic"
  },
      ze = {
    offset: "(number|string|function)",
    flip: "boolean",
    boundary: "(string|element)",
    reference: "(string|element)",
    display: "string"
  },
      Xe = function () {
    function c(t, e) {
      this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
    }

    var t = c.prototype;
    return t.toggle = function () {
      if (!this._element.disabled && !p(this._element).hasClass(Oe)) {
        var t = c._getParentFromElement(this._element),
            e = p(this._menu).hasClass(Ne);

        if (c._clearMenus(), !e) {
          var n = {
            relatedTarget: this._element
          },
              i = p.Event(Ae.SHOW, n);

          if (p(t).trigger(i), !i.isDefaultPrevented()) {
            if (!this._inNavbar) {
              if ("undefined" == typeof be) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
              var o = this._element;
              "parent" === this._config.reference ? o = t : m.isElement(this._config.reference) && (o = this._config.reference, "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && p(t).addClass(He), this._popper = new be(o, this._menu, this._getPopperConfig());
            }

            "ontouchstart" in document.documentElement && 0 === p(t).closest(Me).length && p(document.body).children().on("mouseover", null, p.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), p(this._menu).toggleClass(Ne), p(t).toggleClass(Ne).trigger(p.Event(Ae.SHOWN, n));
          }
        }
      }
    }, t.show = function () {
      if (!(this._element.disabled || p(this._element).hasClass(Oe) || p(this._menu).hasClass(Ne))) {
        var t = {
          relatedTarget: this._element
        },
            e = p.Event(Ae.SHOW, t),
            n = c._getParentFromElement(this._element);

        p(n).trigger(e), e.isDefaultPrevented() || (p(this._menu).toggleClass(Ne), p(n).toggleClass(Ne).trigger(p.Event(Ae.SHOWN, t)));
      }
    }, t.hide = function () {
      if (!this._element.disabled && !p(this._element).hasClass(Oe) && p(this._menu).hasClass(Ne)) {
        var t = {
          relatedTarget: this._element
        },
            e = p.Event(Ae.HIDE, t),
            n = c._getParentFromElement(this._element);

        p(n).trigger(e), e.isDefaultPrevented() || (p(this._menu).toggleClass(Ne), p(n).toggleClass(Ne).trigger(p.Event(Ae.HIDDEN, t)));
      }
    }, t.dispose = function () {
      p.removeData(this._element, Ce), p(this._element).off(Te), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null);
    }, t.update = function () {
      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
    }, t._addEventListeners = function () {
      var e = this;
      p(this._element).on(Ae.CLICK, function (t) {
        t.preventDefault(), t.stopPropagation(), e.toggle();
      });
    }, t._getConfig = function (t) {
      return t = l({}, this.constructor.Default, p(this._element).data(), t), m.typeCheckConfig(we, t, this.constructor.DefaultType), t;
    }, t._getMenuElement = function () {
      if (!this._menu) {
        var t = c._getParentFromElement(this._element);

        t && (this._menu = t.querySelector(Fe));
      }

      return this._menu;
    }, t._getPlacement = function () {
      var t = p(this._element.parentNode),
          e = qe;
      return t.hasClass(ke) ? (e = Ue, p(this._menu).hasClass(Pe) && (e = Be)) : t.hasClass(Le) ? e = Qe : t.hasClass(xe) ? e = Ve : p(this._menu).hasClass(Pe) && (e = Ke), e;
    }, t._detectNavbar = function () {
      return 0 < p(this._element).closest(".navbar").length;
    }, t._getOffset = function () {
      var e = this,
          t = {};
      return "function" == typeof this._config.offset ? t.fn = function (t) {
        return t.offsets = l({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t;
      } : t.offset = this._config.offset, t;
    }, t._getPopperConfig = function () {
      var t = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      };
      return "static" === this._config.display && (t.modifiers.applyStyle = {
        enabled: !1
      }), t;
    }, c._jQueryInterface = function (e) {
      return this.each(function () {
        var t = p(this).data(Ce);

        if (t || (t = new c(this, "object" == _typeof(e) ? e : null), p(this).data(Ce, t)), "string" == typeof e) {
          if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
          t[e]();
        }
      });
    }, c._clearMenus = function (t) {
      if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var e = [].slice.call(document.querySelectorAll(je)), n = 0, i = e.length; n < i; n++) {
        var o = c._getParentFromElement(e[n]),
            r = p(e[n]).data(Ce),
            s = {
          relatedTarget: e[n]
        };

        if (t && "click" === t.type && (s.clickEvent = t), r) {
          var a = r._menu;

          if (p(o).hasClass(Ne) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && p.contains(o, t.target))) {
            var l = p.Event(Ae.HIDE, s);
            p(o).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && p(document.body).children().off("mouseover", null, p.noop), e[n].setAttribute("aria-expanded", "false"), p(a).removeClass(Ne), p(o).removeClass(Ne).trigger(p.Event(Ae.HIDDEN, s)));
          }
        }
      }
    }, c._getParentFromElement = function (t) {
      var e,
          n = m.getSelectorFromElement(t);
      return n && (e = document.querySelector(n)), e || t.parentNode;
    }, c._dataApiKeydownHandler = function (t) {
      if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || p(t.target).closest(Fe).length)) : Ie.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !p(this).hasClass(Oe))) {
        var e = c._getParentFromElement(this),
            n = p(e).hasClass(Ne);

        if (n && (!n || 27 !== t.which && 32 !== t.which)) {
          var i = [].slice.call(e.querySelectorAll(We));

          if (0 !== i.length) {
            var o = i.indexOf(t.target);
            38 === t.which && 0 < o && o--, 40 === t.which && o < i.length - 1 && o++, o < 0 && (o = 0), i[o].focus();
          }
        } else {
          if (27 === t.which) {
            var r = e.querySelector(je);
            p(r).trigger("focus");
          }

          p(this).trigger("click");
        }
      }
    }, s(c, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return Ye;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ze;
      }
    }]), c;
  }();

  p(document).on(Ae.KEYDOWN_DATA_API, je, Xe._dataApiKeydownHandler).on(Ae.KEYDOWN_DATA_API, Fe, Xe._dataApiKeydownHandler).on(Ae.CLICK_DATA_API + " " + Ae.KEYUP_DATA_API, Xe._clearMenus).on(Ae.CLICK_DATA_API, je, function (t) {
    t.preventDefault(), t.stopPropagation(), Xe._jQueryInterface.call(p(this), "toggle");
  }).on(Ae.CLICK_DATA_API, Re, function (t) {
    t.stopPropagation();
  }), p.fn[we] = Xe._jQueryInterface, p.fn[we].Constructor = Xe, p.fn[we].noConflict = function () {
    return p.fn[we] = De, Xe._jQueryInterface;
  };

  var Ge = "modal",
      $e = "bs.modal",
      Je = "." + $e,
      Ze = p.fn[Ge],
      tn = {
    backdrop: !0,
    keyboard: !0,
    focus: !0,
    show: !0
  },
      en = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean",
    show: "boolean"
  },
      nn = {
    HIDE: "hide" + Je,
    HIDDEN: "hidden" + Je,
    SHOW: "show" + Je,
    SHOWN: "shown" + Je,
    FOCUSIN: "focusin" + Je,
    RESIZE: "resize" + Je,
    CLICK_DISMISS: "click.dismiss" + Je,
    KEYDOWN_DISMISS: "keydown.dismiss" + Je,
    MOUSEUP_DISMISS: "mouseup.dismiss" + Je,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + Je,
    CLICK_DATA_API: "click" + Je + ".data-api"
  },
      on = "modal-dialog-scrollable",
      rn = "modal-scrollbar-measure",
      sn = "modal-backdrop",
      an = "modal-open",
      ln = "fade",
      cn = "show",
      hn = ".modal-dialog",
      un = ".modal-body",
      fn = '[data-toggle="modal"]',
      dn = '[data-dismiss="modal"]',
      pn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      mn = ".sticky-top",
      gn = function () {
    function o(t, e) {
      this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(hn), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0;
    }

    var t = o.prototype;
    return t.toggle = function (t) {
      return this._isShown ? this.hide() : this.show(t);
    }, t.show = function (t) {
      var e = this;

      if (!this._isShown && !this._isTransitioning) {
        p(this._element).hasClass(ln) && (this._isTransitioning = !0);
        var n = p.Event(nn.SHOW, {
          relatedTarget: t
        });
        p(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), p(this._element).on(nn.CLICK_DISMISS, dn, function (t) {
          return e.hide(t);
        }), p(this._dialog).on(nn.MOUSEDOWN_DISMISS, function () {
          p(e._element).one(nn.MOUSEUP_DISMISS, function (t) {
            p(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return e._showElement(t);
        }));
      }
    }, t.hide = function (t) {
      var e = this;

      if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
        var n = p.Event(nn.HIDE);

        if (p(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
          this._isShown = !1;
          var i = p(this._element).hasClass(ln);

          if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), p(document).off(nn.FOCUSIN), p(this._element).removeClass(cn), p(this._element).off(nn.CLICK_DISMISS), p(this._dialog).off(nn.MOUSEDOWN_DISMISS), i) {
            var o = m.getTransitionDurationFromElement(this._element);
            p(this._element).one(m.TRANSITION_END, function (t) {
              return e._hideModal(t);
            }).emulateTransitionEnd(o);
          } else this._hideModal();
        }
      }
    }, t.dispose = function () {
      [window, this._element, this._dialog].forEach(function (t) {
        return p(t).off(Je);
      }), p(document).off(nn.FOCUSIN), p.removeData(this._element, $e), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
    }, t.handleUpdate = function () {
      this._adjustDialog();
    }, t._getConfig = function (t) {
      return t = l({}, tn, t), m.typeCheckConfig(Ge, t, en), t;
    }, t._showElement = function (t) {
      var e = this,
          n = p(this._element).hasClass(ln);
      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), p(this._dialog).hasClass(on) ? this._dialog.querySelector(un).scrollTop = 0 : this._element.scrollTop = 0, n && m.reflow(this._element), p(this._element).addClass(cn), this._config.focus && this._enforceFocus();

      var i = p.Event(nn.SHOWN, {
        relatedTarget: t
      }),
          o = function o() {
        e._config.focus && e._element.focus(), e._isTransitioning = !1, p(e._element).trigger(i);
      };

      if (n) {
        var r = m.getTransitionDurationFromElement(this._dialog);
        p(this._dialog).one(m.TRANSITION_END, o).emulateTransitionEnd(r);
      } else o();
    }, t._enforceFocus = function () {
      var e = this;
      p(document).off(nn.FOCUSIN).on(nn.FOCUSIN, function (t) {
        document !== t.target && e._element !== t.target && 0 === p(e._element).has(t.target).length && e._element.focus();
      });
    }, t._setEscapeEvent = function () {
      var e = this;
      this._isShown && this._config.keyboard ? p(this._element).on(nn.KEYDOWN_DISMISS, function (t) {
        27 === t.which && (t.preventDefault(), e.hide());
      }) : this._isShown || p(this._element).off(nn.KEYDOWN_DISMISS);
    }, t._setResizeEvent = function () {
      var e = this;
      this._isShown ? p(window).on(nn.RESIZE, function (t) {
        return e.handleUpdate(t);
      }) : p(window).off(nn.RESIZE);
    }, t._hideModal = function () {
      var t = this;
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function () {
        p(document.body).removeClass(an), t._resetAdjustments(), t._resetScrollbar(), p(t._element).trigger(nn.HIDDEN);
      });
    }, t._removeBackdrop = function () {
      this._backdrop && (p(this._backdrop).remove(), this._backdrop = null);
    }, t._showBackdrop = function (t) {
      var e = this,
          n = p(this._element).hasClass(ln) ? ln : "";

      if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement("div"), this._backdrop.className = sn, n && this._backdrop.classList.add(n), p(this._backdrop).appendTo(document.body), p(this._element).on(nn.CLICK_DISMISS, function (t) {
          e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide());
        }), n && m.reflow(this._backdrop), p(this._backdrop).addClass(cn), !t) return;
        if (!n) return void t();
        var i = m.getTransitionDurationFromElement(this._backdrop);
        p(this._backdrop).one(m.TRANSITION_END, t).emulateTransitionEnd(i);
      } else if (!this._isShown && this._backdrop) {
        p(this._backdrop).removeClass(cn);

        var o = function o() {
          e._removeBackdrop(), t && t();
        };

        if (p(this._element).hasClass(ln)) {
          var r = m.getTransitionDurationFromElement(this._backdrop);
          p(this._backdrop).one(m.TRANSITION_END, o).emulateTransitionEnd(r);
        } else o();
      } else t && t();
    }, t._adjustDialog = function () {
      var t = this._element.scrollHeight > document.documentElement.clientHeight;
      !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }, t._resetAdjustments = function () {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }, t._checkScrollbar = function () {
      var t = document.body.getBoundingClientRect();
      this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }, t._setScrollbar = function () {
      var o = this;

      if (this._isBodyOverflowing) {
        var t = [].slice.call(document.querySelectorAll(pn)),
            e = [].slice.call(document.querySelectorAll(mn));
        p(t).each(function (t, e) {
          var n = e.style.paddingRight,
              i = p(e).css("padding-right");
          p(e).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px");
        }), p(e).each(function (t, e) {
          var n = e.style.marginRight,
              i = p(e).css("margin-right");
          p(e).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px");
        });
        var n = document.body.style.paddingRight,
            i = p(document.body).css("padding-right");
        p(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px");
      }

      p(document.body).addClass(an);
    }, t._resetScrollbar = function () {
      var t = [].slice.call(document.querySelectorAll(pn));
      p(t).each(function (t, e) {
        var n = p(e).data("padding-right");
        p(e).removeData("padding-right"), e.style.paddingRight = n || "";
      });
      var e = [].slice.call(document.querySelectorAll("" + mn));
      p(e).each(function (t, e) {
        var n = p(e).data("margin-right");
        "undefined" != typeof n && p(e).css("margin-right", n).removeData("margin-right");
      });
      var n = p(document.body).data("padding-right");
      p(document.body).removeData("padding-right"), document.body.style.paddingRight = n || "";
    }, t._getScrollbarWidth = function () {
      var t = document.createElement("div");
      t.className = rn, document.body.appendChild(t);
      var e = t.getBoundingClientRect().width - t.clientWidth;
      return document.body.removeChild(t), e;
    }, o._jQueryInterface = function (n, i) {
      return this.each(function () {
        var t = p(this).data($e),
            e = l({}, tn, p(this).data(), "object" == _typeof(n) && n ? n : {});

        if (t || (t = new o(this, e), p(this).data($e, t)), "string" == typeof n) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n](i);
        } else e.show && t.show(i);
      });
    }, s(o, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return tn;
      }
    }]), o;
  }();

  p(document).on(nn.CLICK_DATA_API, fn, function (t) {
    var e,
        n = this,
        i = m.getSelectorFromElement(this);
    i && (e = document.querySelector(i));
    var o = p(e).data($e) ? "toggle" : l({}, p(e).data(), p(this).data());
    "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
    var r = p(e).one(nn.SHOW, function (t) {
      t.isDefaultPrevented() || r.one(nn.HIDDEN, function () {
        p(n).is(":visible") && n.focus();
      });
    });

    gn._jQueryInterface.call(p(e), o, this);
  }), p.fn[Ge] = gn._jQueryInterface, p.fn[Ge].Constructor = gn, p.fn[Ge].noConflict = function () {
    return p.fn[Ge] = Ze, gn._jQueryInterface;
  };
  var _n = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
      vn = {
    "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
    a: ["target", "href", "title", "rel"],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ["src", "alt", "title", "width", "height"],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  },
      yn = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
      En = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

  function bn(t, s, e) {
    if (0 === t.length) return t;
    if (e && "function" == typeof e) return e(t);

    for (var n = new window.DOMParser().parseFromString(t, "text/html"), a = Object.keys(s), l = [].slice.call(n.body.querySelectorAll("*")), i = function i(t, e) {
      var n = l[t],
          i = n.nodeName.toLowerCase();
      if (-1 === a.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), "continue";
      var o = [].slice.call(n.attributes),
          r = [].concat(s["*"] || [], s[i] || []);
      o.forEach(function (t) {
        (function (t, e) {
          var n = t.nodeName.toLowerCase();
          if (-1 !== e.indexOf(n)) return -1 === _n.indexOf(n) || Boolean(t.nodeValue.match(yn) || t.nodeValue.match(En));

          for (var i = e.filter(function (t) {
            return t instanceof RegExp;
          }), o = 0, r = i.length; o < r; o++) {
            if (n.match(i[o])) return !0;
          }

          return !1;
        })(t, r) || n.removeAttribute(t.nodeName);
      });
    }, o = 0, r = l.length; o < r; o++) {
      i(o);
    }

    return n.body.innerHTML;
  }

  var wn = "tooltip",
      Cn = "bs.tooltip",
      Tn = "." + Cn,
      Sn = p.fn[wn],
      Dn = "bs-tooltip",
      In = new RegExp("(^|\\s)" + Dn + "\\S+", "g"),
      An = ["sanitize", "whiteList", "sanitizeFn"],
      On = {
    animation: "boolean",
    template: "string",
    title: "(string|element|function)",
    trigger: "string",
    delay: "(number|object)",
    html: "boolean",
    selector: "(string|boolean)",
    placement: "(string|function)",
    offset: "(number|string|function)",
    container: "(string|element|boolean)",
    fallbackPlacement: "(string|array)",
    boundary: "(string|element)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    whiteList: "object"
  },
      Nn = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: "right",
    BOTTOM: "bottom",
    LEFT: "left"
  },
      kn = {
    animation: !0,
    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    selector: !1,
    placement: "top",
    offset: 0,
    container: !1,
    fallbackPlacement: "flip",
    boundary: "scrollParent",
    sanitize: !0,
    sanitizeFn: null,
    whiteList: vn
  },
      Ln = "show",
      xn = "out",
      Pn = {
    HIDE: "hide" + Tn,
    HIDDEN: "hidden" + Tn,
    SHOW: "show" + Tn,
    SHOWN: "shown" + Tn,
    INSERTED: "inserted" + Tn,
    CLICK: "click" + Tn,
    FOCUSIN: "focusin" + Tn,
    FOCUSOUT: "focusout" + Tn,
    MOUSEENTER: "mouseenter" + Tn,
    MOUSELEAVE: "mouseleave" + Tn
  },
      Hn = "fade",
      jn = "show",
      Rn = ".tooltip-inner",
      Fn = ".arrow",
      Mn = "hover",
      Wn = "focus",
      Un = "click",
      Bn = "manual",
      qn = function () {
    function i(t, e) {
      if ("undefined" == typeof be) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
      this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
    }

    var t = i.prototype;
    return t.enable = function () {
      this._isEnabled = !0;
    }, t.disable = function () {
      this._isEnabled = !1;
    }, t.toggleEnabled = function () {
      this._isEnabled = !this._isEnabled;
    }, t.toggle = function (t) {
      if (this._isEnabled) if (t) {
        var e = this.constructor.DATA_KEY,
            n = p(t.currentTarget).data(e);
        n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), p(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
      } else {
        if (p(this.getTipElement()).hasClass(jn)) return void this._leave(null, this);

        this._enter(null, this);
      }
    }, t.dispose = function () {
      clearTimeout(this._timeout), p.removeData(this.element, this.constructor.DATA_KEY), p(this.element).off(this.constructor.EVENT_KEY), p(this.element).closest(".modal").off("hide.bs.modal"), this.tip && p(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
    }, t.show = function () {
      var e = this;
      if ("none" === p(this.element).css("display")) throw new Error("Please use show on visible elements");
      var t = p.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        p(this.element).trigger(t);
        var n = m.findShadowRoot(this.element),
            i = p.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
        if (t.isDefaultPrevented() || !i) return;
        var o = this.getTipElement(),
            r = m.getUID(this.constructor.NAME);
        o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && p(o).addClass(Hn);

        var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
            a = this._getAttachment(s);

        this.addAttachmentClass(a);

        var l = this._getContainer();

        p(o).data(this.constructor.DATA_KEY, this), p.contains(this.element.ownerDocument.documentElement, this.tip) || p(o).appendTo(l), p(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new be(this.element, o, {
          placement: a,
          modifiers: {
            offset: this._getOffset(),
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: Fn
            },
            preventOverflow: {
              boundariesElement: this.config.boundary
            }
          },
          onCreate: function onCreate(t) {
            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
          },
          onUpdate: function onUpdate(t) {
            return e._handlePopperPlacementChange(t);
          }
        }), p(o).addClass(jn), "ontouchstart" in document.documentElement && p(document.body).children().on("mouseover", null, p.noop);

        var c = function c() {
          e.config.animation && e._fixTransition();
          var t = e._hoverState;
          e._hoverState = null, p(e.element).trigger(e.constructor.Event.SHOWN), t === xn && e._leave(null, e);
        };

        if (p(this.tip).hasClass(Hn)) {
          var h = m.getTransitionDurationFromElement(this.tip);
          p(this.tip).one(m.TRANSITION_END, c).emulateTransitionEnd(h);
        } else c();
      }
    }, t.hide = function (t) {
      var e = this,
          n = this.getTipElement(),
          i = p.Event(this.constructor.Event.HIDE),
          o = function o() {
        e._hoverState !== Ln && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), p(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t();
      };

      if (p(this.element).trigger(i), !i.isDefaultPrevented()) {
        if (p(n).removeClass(jn), "ontouchstart" in document.documentElement && p(document.body).children().off("mouseover", null, p.noop), this._activeTrigger[Un] = !1, this._activeTrigger[Wn] = !1, this._activeTrigger[Mn] = !1, p(this.tip).hasClass(Hn)) {
          var r = m.getTransitionDurationFromElement(n);
          p(n).one(m.TRANSITION_END, o).emulateTransitionEnd(r);
        } else o();

        this._hoverState = "";
      }
    }, t.update = function () {
      null !== this._popper && this._popper.scheduleUpdate();
    }, t.isWithContent = function () {
      return Boolean(this.getTitle());
    }, t.addAttachmentClass = function (t) {
      p(this.getTipElement()).addClass(Dn + "-" + t);
    }, t.getTipElement = function () {
      return this.tip = this.tip || p(this.config.template)[0], this.tip;
    }, t.setContent = function () {
      var t = this.getTipElement();
      this.setElementContent(p(t.querySelectorAll(Rn)), this.getTitle()), p(t).removeClass(Hn + " " + jn);
    }, t.setElementContent = function (t, e) {
      "object" != _typeof(e) || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = bn(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e)) : t.text(e) : this.config.html ? p(e).parent().is(t) || t.empty().append(e) : t.text(p(e).text());
    }, t.getTitle = function () {
      var t = this.element.getAttribute("data-original-title");
      return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
    }, t._getOffset = function () {
      var e = this,
          t = {};
      return "function" == typeof this.config.offset ? t.fn = function (t) {
        return t.offsets = l({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t;
      } : t.offset = this.config.offset, t;
    }, t._getContainer = function () {
      return !1 === this.config.container ? document.body : m.isElement(this.config.container) ? p(this.config.container) : p(document).find(this.config.container);
    }, t._getAttachment = function (t) {
      return Nn[t.toUpperCase()];
    }, t._setListeners = function () {
      var i = this;
      this.config.trigger.split(" ").forEach(function (t) {
        if ("click" === t) p(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) {
          return i.toggle(t);
        });else if (t !== Bn) {
          var e = t === Mn ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
              n = t === Mn ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
          p(i.element).on(e, i.config.selector, function (t) {
            return i._enter(t);
          }).on(n, i.config.selector, function (t) {
            return i._leave(t);
          });
        }
      }), p(this.element).closest(".modal").on("hide.bs.modal", function () {
        i.element && i.hide();
      }), this.config.selector ? this.config = l({}, this.config, {
        trigger: "manual",
        selector: ""
      }) : this._fixTitle();
    }, t._fixTitle = function () {
      var t = _typeof(this.element.getAttribute("data-original-title"));

      (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
    }, t._enter = function (t, e) {
      var n = this.constructor.DATA_KEY;
      (e = e || p(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), p(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Wn : Mn] = !0), p(e.getTipElement()).hasClass(jn) || e._hoverState === Ln ? e._hoverState = Ln : (clearTimeout(e._timeout), e._hoverState = Ln, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
        e._hoverState === Ln && e.show();
      }, e.config.delay.show) : e.show());
    }, t._leave = function (t, e) {
      var n = this.constructor.DATA_KEY;
      (e = e || p(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), p(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Wn : Mn] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = xn, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
        e._hoverState === xn && e.hide();
      }, e.config.delay.hide) : e.hide());
    }, t._isWithActiveTrigger = function () {
      for (var t in this._activeTrigger) {
        if (this._activeTrigger[t]) return !0;
      }

      return !1;
    }, t._getConfig = function (t) {
      var e = p(this.element).data();
      return Object.keys(e).forEach(function (t) {
        -1 !== An.indexOf(t) && delete e[t];
      }), "number" == typeof (t = l({}, this.constructor.Default, e, "object" == _typeof(t) && t ? t : {})).delay && (t.delay = {
        show: t.delay,
        hide: t.delay
      }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), m.typeCheckConfig(wn, t, this.constructor.DefaultType), t.sanitize && (t.template = bn(t.template, t.whiteList, t.sanitizeFn)), t;
    }, t._getDelegateConfig = function () {
      var t = {};
      if (this.config) for (var e in this.config) {
        this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
      }
      return t;
    }, t._cleanTipClass = function () {
      var t = p(this.getTipElement()),
          e = t.attr("class").match(In);
      null !== e && e.length && t.removeClass(e.join(""));
    }, t._handlePopperPlacementChange = function (t) {
      var e = t.instance;
      this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
    }, t._fixTransition = function () {
      var t = this.getTipElement(),
          e = this.config.animation;
      null === t.getAttribute("x-placement") && (p(t).removeClass(Hn), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e);
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = p(this).data(Cn),
            e = "object" == _typeof(n) && n;

        if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), p(this).data(Cn, t)), "string" == typeof n)) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n]();
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return kn;
      }
    }, {
      key: "NAME",
      get: function get() {
        return wn;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return Cn;
      }
    }, {
      key: "Event",
      get: function get() {
        return Pn;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return Tn;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return On;
      }
    }]), i;
  }();

  p.fn[wn] = qn._jQueryInterface, p.fn[wn].Constructor = qn, p.fn[wn].noConflict = function () {
    return p.fn[wn] = Sn, qn._jQueryInterface;
  };

  var Kn = "popover",
      Qn = "bs.popover",
      Vn = "." + Qn,
      Yn = p.fn[Kn],
      zn = "bs-popover",
      Xn = new RegExp("(^|\\s)" + zn + "\\S+", "g"),
      Gn = l({}, qn.Default, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }),
      $n = l({}, qn.DefaultType, {
    content: "(string|element|function)"
  }),
      Jn = "fade",
      Zn = "show",
      ti = ".popover-header",
      ei = ".popover-body",
      ni = {
    HIDE: "hide" + Vn,
    HIDDEN: "hidden" + Vn,
    SHOW: "show" + Vn,
    SHOWN: "shown" + Vn,
    INSERTED: "inserted" + Vn,
    CLICK: "click" + Vn,
    FOCUSIN: "focusin" + Vn,
    FOCUSOUT: "focusout" + Vn,
    MOUSEENTER: "mouseenter" + Vn,
    MOUSELEAVE: "mouseleave" + Vn
  },
      ii = function (t) {
    var e, n;

    function i() {
      return t.apply(this, arguments) || this;
    }

    n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n;
    var o = i.prototype;
    return o.isWithContent = function () {
      return this.getTitle() || this._getContent();
    }, o.addAttachmentClass = function (t) {
      p(this.getTipElement()).addClass(zn + "-" + t);
    }, o.getTipElement = function () {
      return this.tip = this.tip || p(this.config.template)[0], this.tip;
    }, o.setContent = function () {
      var t = p(this.getTipElement());
      this.setElementContent(t.find(ti), this.getTitle());

      var e = this._getContent();

      "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(ei), e), t.removeClass(Jn + " " + Zn);
    }, o._getContent = function () {
      return this.element.getAttribute("data-content") || this.config.content;
    }, o._cleanTipClass = function () {
      var t = p(this.getTipElement()),
          e = t.attr("class").match(Xn);
      null !== e && 0 < e.length && t.removeClass(e.join(""));
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = p(this).data(Qn),
            e = "object" == _typeof(n) ? n : null;

        if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), p(this).data(Qn, t)), "string" == typeof n)) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n]();
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return Gn;
      }
    }, {
      key: "NAME",
      get: function get() {
        return Kn;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return Qn;
      }
    }, {
      key: "Event",
      get: function get() {
        return ni;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return Vn;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return $n;
      }
    }]), i;
  }(qn);

  p.fn[Kn] = ii._jQueryInterface, p.fn[Kn].Constructor = ii, p.fn[Kn].noConflict = function () {
    return p.fn[Kn] = Yn, ii._jQueryInterface;
  };

  var oi = "scrollspy",
      ri = "bs.scrollspy",
      si = "." + ri,
      ai = p.fn[oi],
      li = {
    offset: 10,
    method: "auto",
    target: ""
  },
      ci = {
    offset: "number",
    method: "string",
    target: "(string|element)"
  },
      hi = {
    ACTIVATE: "activate" + si,
    SCROLL: "scroll" + si,
    LOAD_DATA_API: "load" + si + ".data-api"
  },
      ui = "dropdown-item",
      fi = "active",
      di = '[data-spy="scroll"]',
      pi = ".nav, .list-group",
      mi = ".nav-link",
      gi = ".nav-item",
      _i = ".list-group-item",
      vi = ".dropdown",
      yi = ".dropdown-item",
      Ei = ".dropdown-toggle",
      bi = "offset",
      wi = "position",
      Ci = function () {
    function n(t, e) {
      var n = this;
      this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + mi + "," + this._config.target + " " + _i + "," + this._config.target + " " + yi, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, p(this._scrollElement).on(hi.SCROLL, function (t) {
        return n._process(t);
      }), this.refresh(), this._process();
    }

    var t = n.prototype;
    return t.refresh = function () {
      var e = this,
          t = this._scrollElement === this._scrollElement.window ? bi : wi,
          o = "auto" === this._config.method ? t : this._config.method,
          r = o === wi ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (t) {
        var e,
            n = m.getSelectorFromElement(t);

        if (n && (e = document.querySelector(n)), e) {
          var i = e.getBoundingClientRect();
          if (i.width || i.height) return [p(e)[o]().top + r, n];
        }

        return null;
      }).filter(function (t) {
        return t;
      }).sort(function (t, e) {
        return t[0] - e[0];
      }).forEach(function (t) {
        e._offsets.push(t[0]), e._targets.push(t[1]);
      });
    }, t.dispose = function () {
      p.removeData(this._element, ri), p(this._scrollElement).off(si), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, t._getConfig = function (t) {
      if ("string" != typeof (t = l({}, li, "object" == _typeof(t) && t ? t : {})).target) {
        var e = p(t.target).attr("id");
        e || (e = m.getUID(oi), p(t.target).attr("id", e)), t.target = "#" + e;
      }

      return m.typeCheckConfig(oi, t, ci), t;
    }, t._getScrollTop = function () {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }, t._getScrollHeight = function () {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }, t._getOffsetHeight = function () {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }, t._process = function () {
      var t = this._getScrollTop() + this._config.offset,
          e = this._getScrollHeight(),
          n = this._config.offset + e - this._getOffsetHeight();

      if (this._scrollHeight !== e && this.refresh(), n <= t) {
        var i = this._targets[this._targets.length - 1];
        this._activeTarget !== i && this._activate(i);
      } else {
        if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();

        for (var o = this._offsets.length; o--;) {
          this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]);
        }
      }
    }, t._activate = function (e) {
      this._activeTarget = e, this._clear();

      var t = this._selector.split(",").map(function (t) {
        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
      }),
          n = p([].slice.call(document.querySelectorAll(t.join(","))));

      n.hasClass(ui) ? (n.closest(vi).find(Ei).addClass(fi), n.addClass(fi)) : (n.addClass(fi), n.parents(pi).prev(mi + ", " + _i).addClass(fi), n.parents(pi).prev(gi).children(mi).addClass(fi)), p(this._scrollElement).trigger(hi.ACTIVATE, {
        relatedTarget: e
      });
    }, t._clear = function () {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (t) {
        return t.classList.contains(fi);
      }).forEach(function (t) {
        return t.classList.remove(fi);
      });
    }, n._jQueryInterface = function (e) {
      return this.each(function () {
        var t = p(this).data(ri);

        if (t || (t = new n(this, "object" == _typeof(e) && e), p(this).data(ri, t)), "string" == typeof e) {
          if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
          t[e]();
        }
      });
    }, s(n, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return li;
      }
    }]), n;
  }();

  p(window).on(hi.LOAD_DATA_API, function () {
    for (var t = [].slice.call(document.querySelectorAll(di)), e = t.length; e--;) {
      var n = p(t[e]);

      Ci._jQueryInterface.call(n, n.data());
    }
  }), p.fn[oi] = Ci._jQueryInterface, p.fn[oi].Constructor = Ci, p.fn[oi].noConflict = function () {
    return p.fn[oi] = ai, Ci._jQueryInterface;
  };

  var Ti = "bs.tab",
      Si = "." + Ti,
      Di = p.fn.tab,
      Ii = {
    HIDE: "hide" + Si,
    HIDDEN: "hidden" + Si,
    SHOW: "show" + Si,
    SHOWN: "shown" + Si,
    CLICK_DATA_API: "click" + Si + ".data-api"
  },
      Ai = "dropdown-menu",
      Oi = "active",
      Ni = "disabled",
      ki = "fade",
      Li = "show",
      xi = ".dropdown",
      Pi = ".nav, .list-group",
      Hi = ".active",
      ji = "> li > .active",
      Ri = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      Fi = ".dropdown-toggle",
      Mi = "> .dropdown-menu .active",
      Wi = function () {
    function i(t) {
      this._element = t;
    }

    var t = i.prototype;
    return t.show = function () {
      var n = this;

      if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && p(this._element).hasClass(Oi) || p(this._element).hasClass(Ni))) {
        var t,
            i,
            e = p(this._element).closest(Pi)[0],
            o = m.getSelectorFromElement(this._element);

        if (e) {
          var r = "UL" === e.nodeName || "OL" === e.nodeName ? ji : Hi;
          i = (i = p.makeArray(p(e).find(r)))[i.length - 1];
        }

        var s = p.Event(Ii.HIDE, {
          relatedTarget: this._element
        }),
            a = p.Event(Ii.SHOW, {
          relatedTarget: i
        });

        if (i && p(i).trigger(s), p(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
          o && (t = document.querySelector(o)), this._activate(this._element, e);

          var l = function l() {
            var t = p.Event(Ii.HIDDEN, {
              relatedTarget: n._element
            }),
                e = p.Event(Ii.SHOWN, {
              relatedTarget: i
            });
            p(i).trigger(t), p(n._element).trigger(e);
          };

          t ? this._activate(t, t.parentNode, l) : l();
        }
      }
    }, t.dispose = function () {
      p.removeData(this._element, Ti), this._element = null;
    }, t._activate = function (t, e, n) {
      var i = this,
          o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? p(e).children(Hi) : p(e).find(ji))[0],
          r = n && o && p(o).hasClass(ki),
          s = function s() {
        return i._transitionComplete(t, o, n);
      };

      if (o && r) {
        var a = m.getTransitionDurationFromElement(o);
        p(o).removeClass(Li).one(m.TRANSITION_END, s).emulateTransitionEnd(a);
      } else s();
    }, t._transitionComplete = function (t, e, n) {
      if (e) {
        p(e).removeClass(Oi);
        var i = p(e.parentNode).find(Mi)[0];
        i && p(i).removeClass(Oi), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
      }

      if (p(t).addClass(Oi), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), m.reflow(t), t.classList.contains(ki) && t.classList.add(Li), t.parentNode && p(t.parentNode).hasClass(Ai)) {
        var o = p(t).closest(xi)[0];

        if (o) {
          var r = [].slice.call(o.querySelectorAll(Fi));
          p(r).addClass(Oi);
        }

        t.setAttribute("aria-expanded", !0);
      }

      n && n();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = p(this),
            e = t.data(Ti);

        if (e || (e = new i(this), t.data(Ti, e)), "string" == typeof n) {
          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
          e[n]();
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }]), i;
  }();

  p(document).on(Ii.CLICK_DATA_API, Ri, function (t) {
    t.preventDefault(), Wi._jQueryInterface.call(p(this), "show");
  }), p.fn.tab = Wi._jQueryInterface, p.fn.tab.Constructor = Wi, p.fn.tab.noConflict = function () {
    return p.fn.tab = Di, Wi._jQueryInterface;
  };

  var Ui = "toast",
      Bi = "bs.toast",
      qi = "." + Bi,
      Ki = p.fn[Ui],
      Qi = {
    CLICK_DISMISS: "click.dismiss" + qi,
    HIDE: "hide" + qi,
    HIDDEN: "hidden" + qi,
    SHOW: "show" + qi,
    SHOWN: "shown" + qi
  },
      Vi = "fade",
      Yi = "hide",
      zi = "show",
      Xi = "showing",
      Gi = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  },
      $i = {
    animation: !0,
    autohide: !0,
    delay: 500
  },
      Ji = '[data-dismiss="toast"]',
      Zi = function () {
    function i(t, e) {
      this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners();
    }

    var t = i.prototype;
    return t.show = function () {
      var t = this;
      p(this._element).trigger(Qi.SHOW), this._config.animation && this._element.classList.add(Vi);

      var e = function e() {
        t._element.classList.remove(Xi), t._element.classList.add(zi), p(t._element).trigger(Qi.SHOWN), t._config.autohide && t.hide();
      };

      if (this._element.classList.remove(Yi), this._element.classList.add(Xi), this._config.animation) {
        var n = m.getTransitionDurationFromElement(this._element);
        p(this._element).one(m.TRANSITION_END, e).emulateTransitionEnd(n);
      } else e();
    }, t.hide = function (t) {
      var e = this;
      this._element.classList.contains(zi) && (p(this._element).trigger(Qi.HIDE), t ? this._close() : this._timeout = setTimeout(function () {
        e._close();
      }, this._config.delay));
    }, t.dispose = function () {
      clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(zi) && this._element.classList.remove(zi), p(this._element).off(Qi.CLICK_DISMISS), p.removeData(this._element, Bi), this._element = null, this._config = null;
    }, t._getConfig = function (t) {
      return t = l({}, $i, p(this._element).data(), "object" == _typeof(t) && t ? t : {}), m.typeCheckConfig(Ui, t, this.constructor.DefaultType), t;
    }, t._setListeners = function () {
      var t = this;
      p(this._element).on(Qi.CLICK_DISMISS, Ji, function () {
        return t.hide(!0);
      });
    }, t._close = function () {
      var t = this,
          e = function e() {
        t._element.classList.add(Yi), p(t._element).trigger(Qi.HIDDEN);
      };

      if (this._element.classList.remove(zi), this._config.animation) {
        var n = m.getTransitionDurationFromElement(this._element);
        p(this._element).one(m.TRANSITION_END, e).emulateTransitionEnd(n);
      } else e();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = p(this),
            e = t.data(Bi);

        if (e || (e = new i(this, "object" == _typeof(n) && n), t.data(Bi, e)), "string" == typeof n) {
          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
          e[n](this);
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Gi;
      }
    }, {
      key: "Default",
      get: function get() {
        return $i;
      }
    }]), i;
  }();

  p.fn[Ui] = Zi._jQueryInterface, p.fn[Ui].Constructor = Zi, p.fn[Ui].noConflict = function () {
    return p.fn[Ui] = Ki, Zi._jQueryInterface;
  }, function () {
    if ("undefined" == typeof p) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
    var t = p.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
  }(), t.Util = m, t.Alert = g, t.Button = k, t.Carousel = at, t.Collapse = Ct, t.Dropdown = Xe, t.Modal = gn, t.Popover = ii, t.Scrollspy = Ci, t.Tab = Wi, t.Toast = Zi, t.Tooltip = qn, Object.defineProperty(t, "__esModule", {
    value: !0
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./resources/assets/valex/assets/plugins/ionicons/ionicons.js":
/*!********************************************************************!*\
  !*** ./resources/assets/valex/assets/plugins/ionicons/ionicons.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Built with http://stenciljs.com
 * 2018-06-29T13:20:28
 */
!function (e, n, t, r, i, o, s, c, u, a, l, d, p, m) {
  for ((l = e.ionicons = e.ionicons || {}).components = u, (p = u.filter(function (e) {
    return e[2];
  }).map(function (e) {
    return e[0];
  })).length && ((d = n.createElement("style")).innerHTML = p.join() + "{visibility:hidden}.hydrated{visibility:inherit}", d.setAttribute("data-styles", ""), n.head.insertBefore(d, n.head.firstChild)), function (e, n, t) {
    (e["s-apps"] = e["s-apps"] || []).push("ionicons"), t.componentOnReady || (t.componentOnReady = function () {
      var n = this;

      function t(t) {
        if (n.nodeName.indexOf("-") > 0) {
          for (var r = e["s-apps"], i = 0, o = 0; o < r.length; o++) {
            if (e[r[o]].componentOnReady) {
              if (e[r[o]].componentOnReady(n, t)) return;
              i++;
            }
          }

          if (i < r.length) return void (e["s-cr"] = e["s-cr"] || []).push([n, t]);
        }

        t(null);
      }

      return e.Promise ? new e.Promise(t) : {
        then: t
      };
    });
  }(e, 0, a), i = i || l.resourcesUrl, d = (p = n.querySelectorAll("script")).length - 1; d >= 0 && !(m = p[d]).src && !m.hasAttribute("data-resources-url"); d--) {
    ;
  }

  p = m.getAttribute("data-resources-url"), !i && p && (i = p), !i && m.src && (i = (p = m.src.split("/").slice(0, -1)).join("/") + (p.length ? "/" : "") + "ionicons/"), d = n.createElement("script"), function (e, n, t, r) {
    return !(n.search.indexOf("core=esm") > 0) && (!(!(n.search.indexOf("core=es5") > 0 || "file:" === n.protocol) && e.customElements && e.customElements.define && e.fetch && e.CSS && e.CSS.supports && e.CSS.supports("color", "var(--c)") && "noModule" in t) || function (e) {
      try {
        return new Function('import("")'), !1;
      } catch (e) {}

      return !0;
    }());
  }(e, e.location, d) ? d.src = i + "ionicons.z18qlu2u.js" : (d.src = i + "ionicons.suuqn5vt.js", d.setAttribute("type", "module"), d.setAttribute("crossorigin", !0)), d.setAttribute("data-resources-url", i), d.setAttribute("data-namespace", "ionicons"), n.head.appendChild(d);
}(window, document, 0, 0, 0, 0, 0, 0, [["ion-icon", "5nonw4yz", 1, [["ariaLabel", 2, 1, "aria-label", 2], ["color", 1, 0, 1, 2], ["doc", 3, 0, 0, 0, "document"], ["el", 7], ["icon", 1, 0, 1, 2], ["ios", 1, 0, 1, 2], ["isServer", 3, 0, 0, 0, "isServer"], ["isVisible", 5], ["lazy", 1, 0, 1, 3], ["md", 1, 0, 1, 2], ["mode", 1, 0, 1, 2], ["name", 1, 0, 1, 2], ["resourcesUrl", 3, 0, 0, 0, "resourcesUrl"], ["size", 1, 0, 1, 2], ["src", 1, 0, 1, 2], ["svgContent", 5], ["win", 3, 0, 0, 0, "window"]], 1]], HTMLElement.prototype);

/***/ }),

/***/ "./resources/assets/valex/assets/plugins/jquery-sparkline/jquery.sparkline.min.js":
/*!****************************************************************************************!*\
  !*** ./resources/assets/valex/assets/plugins/jquery-sparkline/jquery.sparkline.min.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* jquery.sparkline 2.1.3 - http://omnipotent.net/jquery.sparkline/ 
** Licensed under the New BSD License - see above site for details */
(function (document, Math, undefined) {
  (function (factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
  })(function ($) {
    "use strict";

    var UNSET_OPTION = {},
        getDefaults,
        createClass,
        SPFormat,
        clipval,
        quartile,
        normalizeValue,
        normalizeValues,
        remove,
        isNumber,
        all,
        sum,
        addCSS,
        ensureArray,
        formatNumber,
        RangeMap,
        MouseHandler,
        Tooltip,
        barHighlightMixin,
        line,
        bar,
        tristate,
        discrete,
        bullet,
        pie,
        box,
        defaultStyles,
        initStyles,
        VShape,
        VCanvas_base,
        VCanvas_canvas,
        VCanvas_vml,
        pending,
        shapeCount = 0;

    getDefaults = function getDefaults() {
      return {
        common: {
          type: "line",
          lineColor: "#00f",
          fillColor: "#cdf",
          defaultPixelsPerValue: 3,
          width: "auto",
          height: "auto",
          composite: false,
          tagValuesAttribute: "values",
          tagOptionsPrefix: "spark",
          enableTagOptions: false,
          enableHighlight: true,
          highlightLighten: 1.4,
          tooltipSkipNull: true,
          tooltipPrefix: "",
          tooltipSuffix: "",
          disableHiddenCheck: false,
          numberFormatter: false,
          numberDigitGroupCount: 3,
          numberDigitGroupSep: ",",
          numberDecimalMark: ".",
          disableTooltips: false,
          disableInteraction: false
        },
        line: {
          spotColor: "#f80",
          highlightSpotColor: "#5f5",
          highlightLineColor: "#f22",
          spotRadius: 1.5,
          minSpotColor: "#f80",
          maxSpotColor: "#f80",
          lineWidth: 1,
          normalRangeMin: undefined,
          normalRangeMax: undefined,
          normalRangeColor: "#ccc",
          drawNormalOnTop: false,
          chartRangeMin: undefined,
          chartRangeMax: undefined,
          chartRangeMinX: undefined,
          chartRangeMaxX: undefined,
          tooltipFormat: new SPFormat('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}')
        },
        bar: {
          barColor: "#3366cc",
          negBarColor: "#f44",
          stackedBarColor: ["#3366cc", "#dc3912", "#ff9900", "#109618", "#66aa00", "#dd4477", "#0099c6", "#990099"],
          zeroColor: undefined,
          nullColor: undefined,
          zeroAxis: true,
          barWidth: 4,
          barSpacing: 1,
          chartRangeMax: undefined,
          chartRangeMin: undefined,
          chartRangeClip: false,
          colorMap: undefined,
          tooltipFormat: new SPFormat('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}')
        },
        tristate: {
          barWidth: 4,
          barSpacing: 1,
          posBarColor: "#6f6",
          negBarColor: "#f44",
          zeroBarColor: "#999",
          colorMap: {},
          tooltipFormat: new SPFormat('<span style="color: {{color}}">&#9679;</span> {{value:map}}'),
          tooltipValueLookups: {
            map: {
              "-1": "Loss",
              0: "Draw",
              1: "Win"
            }
          }
        },
        discrete: {
          lineHeight: "auto",
          thresholdColor: undefined,
          thresholdValue: 0,
          chartRangeMax: undefined,
          chartRangeMin: undefined,
          chartRangeClip: false,
          tooltipFormat: new SPFormat("{{prefix}}{{value}}{{suffix}}")
        },
        bullet: {
          targetColor: "#f33",
          targetWidth: 3,
          performanceColor: "#33f",
          rangeColors: ["#d3dafe", "#a8b6ff", "#7f94ff"],
          base: undefined,
          tooltipFormat: new SPFormat("{{fieldkey:fields}} - {{value}}"),
          tooltipValueLookups: {
            fields: {
              r: "Range",
              p: "Performance",
              t: "Target"
            }
          }
        },
        pie: {
          offset: 0,
          sliceColors: ["#3366cc", "#dc3912", "#ff9900", "#109618", "#66aa00", "#dd4477", "#0099c6", "#990099"],
          borderWidth: 0,
          borderColor: "#000",
          tooltipFormat: new SPFormat('<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)')
        },
        box: {
          raw: false,
          boxLineColor: "#000",
          boxFillColor: "#cdf",
          whiskerColor: "#000",
          outlierLineColor: "#333",
          outlierFillColor: "#fff",
          medianColor: "#f00",
          showOutliers: true,
          outlierIQR: 1.5,
          spotRadius: 1.5,
          target: undefined,
          targetColor: "#4a2",
          chartRangeMax: undefined,
          chartRangeMin: undefined,
          tooltipFormat: new SPFormat("{{field:fields}}: {{value}}"),
          tooltipFormatFieldlistKey: "field",
          tooltipValueLookups: {
            fields: {
              lq: "Lower Quartile",
              med: "Median",
              uq: "Upper Quartile",
              lo: "Left Outlier",
              ro: "Right Outlier",
              lw: "Left Whisker",
              rw: "Right Whisker"
            }
          }
        }
      };
    };

    defaultStyles = ".jqstooltip { " + "position: absolute;" + "left: 0px;" + "top: 0px;" + "visibility: hidden;" + "background: rgb(0, 0, 0) transparent;" + "background-color: rgba(0,0,0,0.6);" + "filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);" + '-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";' + "color: white;" + "font: 10px arial, san serif;" + "text-align: left;" + "white-space: nowrap;" + "padding: 5px;" + "border: 1px solid white;" + "box-sizing: content-box;" + "z-index: 10000;" + "}" + ".jqsfield { " + "color: white;" + "font: 10px arial, san serif;" + "text-align: left;" + "}";

    createClass = function createClass() {
      var Class, args;

      Class = function Class() {
        this.init.apply(this, arguments);
      };

      if (arguments.length > 1) {
        if (arguments[0]) {
          Class.prototype = $.extend(new arguments[0](), arguments[arguments.length - 1]);
          Class._super = arguments[0].prototype;
        } else {
          Class.prototype = arguments[arguments.length - 1];
        }

        if (arguments.length > 2) {
          args = Array.prototype.slice.call(arguments, 1, -1);
          args.unshift(Class.prototype);
          $.extend.apply($, args);
        }
      } else {
        Class.prototype = arguments[0];
      }

      Class.prototype.cls = Class;
      return Class;
    };

    $.SPFormatClass = SPFormat = createClass({
      fre: /\{\{([\w.]+?)(:(.+?))?\}\}/g,
      precre: /(\w+)\.(\d+)/,
      init: function init(format, fclass) {
        this.format = format;
        this.fclass = fclass;
      },
      render: function render(fieldset, lookups, options) {
        var self = this,
            fields = fieldset,
            match,
            token,
            lookupkey,
            fieldvalue,
            prec;
        return this.format.replace(this.fre, function () {
          var lookup;
          token = arguments[1];
          lookupkey = arguments[3];
          match = self.precre.exec(token);

          if (match) {
            prec = match[2];
            token = match[1];
          } else {
            prec = false;
          }

          fieldvalue = fields[token];

          if (fieldvalue === undefined) {
            return "";
          }

          if (lookupkey && lookups && lookups[lookupkey]) {
            lookup = lookups[lookupkey];

            if (lookup.get) {
              return lookups[lookupkey].get(fieldvalue) || fieldvalue;
            } else {
              return lookups[lookupkey][fieldvalue] || fieldvalue;
            }
          }

          if (isNumber(fieldvalue)) {
            if (options.get("numberFormatter")) {
              fieldvalue = options.get("numberFormatter")(fieldvalue);
            } else {
              fieldvalue = formatNumber(fieldvalue, prec, options.get("numberDigitGroupCount"), options.get("numberDigitGroupSep"), options.get("numberDecimalMark"));
            }
          }

          return fieldvalue;
        });
      }
    });

    $.spformat = function (format, fclass) {
      return new SPFormat(format, fclass);
    };

    clipval = function clipval(val, min, max) {
      if (val < min) {
        return min;
      }

      if (val > max) {
        return max;
      }

      return val;
    };

    quartile = function quartile(values, q) {
      var vl;

      if (q === 2) {
        vl = Math.floor(values.length / 2);
        return values.length % 2 ? values[vl] : (values[vl - 1] + values[vl]) / 2;
      } else {
        if (values.length % 2) {
          vl = (values.length * q + q) / 4;
          return vl % 1 ? (values[Math.floor(vl)] + values[Math.floor(vl) - 1]) / 2 : values[vl - 1];
        } else {
          vl = (values.length * q + 2) / 4;
          return vl % 1 ? (values[Math.floor(vl)] + values[Math.floor(vl) - 1]) / 2 : values[vl - 1];
        }
      }
    };

    normalizeValue = function normalizeValue(val) {
      var nf;

      switch (val) {
        case "undefined":
          val = undefined;
          break;

        case "null":
          val = null;
          break;

        case "true":
          val = true;
          break;

        case "false":
          val = false;
          break;

        default:
          nf = parseFloat(val);

          if (val == nf) {
            val = nf;
          }

      }

      return val;
    };

    normalizeValues = function normalizeValues(vals) {
      var i,
          result = [];

      for (i = vals.length; i--;) {
        result[i] = normalizeValue(vals[i]);
      }

      return result;
    };

    remove = function remove(vals, filter) {
      var i,
          vl,
          result = [];

      for (i = 0, vl = vals.length; i < vl; i++) {
        if (vals[i] !== filter) {
          result.push(vals[i]);
        }
      }

      return result;
    };

    isNumber = function isNumber(num) {
      return !isNaN(parseFloat(num)) && isFinite(num);
    };

    formatNumber = function formatNumber(num, prec, groupsize, groupsep, decsep) {
      var p, i;
      num = (prec === false ? parseFloat(num).toString() : num.toFixed(prec)).split("");
      p = (p = $.inArray(".", num)) < 0 ? num.length : p;

      if (p < num.length) {
        num[p] = decsep;
      }

      for (i = p - groupsize; i > 0; i -= groupsize) {
        num.splice(i, 0, groupsep);
      }

      return num.join("");
    };

    all = function all(val, arr, ignoreNull) {
      var i;

      for (i = arr.length; i--;) {
        if (ignoreNull && arr[i] === null) continue;

        if (arr[i] !== val) {
          return false;
        }
      }

      return true;
    };

    sum = function sum(vals) {
      var total = 0,
          i;

      for (i = vals.length; i--;) {
        total += typeof vals[i] === "number" ? vals[i] : 0;
      }

      return total;
    };

    ensureArray = function ensureArray(val) {
      return $.isArray(val) ? val : [val];
    };

    addCSS = function addCSS(css) {
      var tag, iefail;

      if (document.createStyleSheet) {
        try {
          document.createStyleSheet().cssText = css;
          return;
        } catch (e) {
          iefail = true;
        }
      }

      tag = document.createElement("style");
      tag.type = "text/css";
      document.getElementsByTagName("head")[0].appendChild(tag);

      if (iefail) {
        document.styleSheets[document.styleSheets.length - 1].cssText = css;
      } else {
        tag[typeof document.body.style.WebkitAppearance == "string" ? "innerText" : "innerHTML"] = css;
      }
    };

    $.fn.simpledraw = function (width, height, useExisting, interact) {
      var target, mhandler;

      if (useExisting && (target = this.data("_jqs_vcanvas"))) {
        return target;
      }

      if ($.fn.sparkline.canvas === false) {
        return false;
      } else if ($.fn.sparkline.canvas === undefined) {
        var el = document.createElement("canvas");

        if (!!(el.getContext && el.getContext("2d"))) {
          $.fn.sparkline.canvas = function (width, height, target, interact) {
            return new VCanvas_canvas(width, height, target, interact);
          };
        } else if (document.namespaces && !document.namespaces.v) {
          document.namespaces.add("v", "urn:schemas-microsoft-com:vml", "#default#VML");

          $.fn.sparkline.canvas = function (width, height, target, interact) {
            return new VCanvas_vml(width, height, target);
          };
        } else {
          $.fn.sparkline.canvas = false;
          return false;
        }
      }

      if (width === undefined) {
        width = $(this).innerWidth();
      }

      if (height === undefined) {
        height = $(this).innerHeight();
      }

      target = $.fn.sparkline.canvas(width, height, this, interact);
      mhandler = $(this).data("_jqs_mhandler");

      if (mhandler) {
        mhandler.registerCanvas(target);
      }

      return target;
    };

    $.fn.cleardraw = function () {
      var target = this.data("_jqs_vcanvas");

      if (target) {
        target.reset();
      }
    };

    $.RangeMapClass = RangeMap = createClass({
      init: function init(map) {
        var key,
            range,
            rangelist = [];

        for (key in map) {
          if (map.hasOwnProperty(key) && typeof key === "string" && key.indexOf(":") > -1) {
            range = key.split(":");
            range[0] = range[0].length === 0 ? -Infinity : parseFloat(range[0]);
            range[1] = range[1].length === 0 ? Infinity : parseFloat(range[1]);
            range[2] = map[key];
            rangelist.push(range);
          }
        }

        this.map = map;
        this.rangelist = rangelist || false;
      },
      get: function get(value) {
        var rangelist = this.rangelist,
            i,
            range,
            result;

        if ((result = this.map[value]) !== undefined) {
          return result;
        }

        if (rangelist) {
          for (i = rangelist.length; i--;) {
            range = rangelist[i];

            if (range[0] <= value && range[1] >= value) {
              return range[2];
            }
          }
        }

        return undefined;
      }
    });

    $.range_map = function (map) {
      return new RangeMap(map);
    };

    MouseHandler = createClass({
      init: function init(el, options) {
        var $el = $(el);
        this.$el = $el;
        this.options = options;
        this.currentPageX = 0;
        this.currentPageY = 0;
        this.el = el;
        this.splist = [];
        this.tooltip = null;
        this.over = false;
        this.displayTooltips = !options.get("disableTooltips");
        this.highlightEnabled = !options.get("disableHighlight");
      },
      registerSparkline: function registerSparkline(sp) {
        this.splist.push(sp);

        if (this.over) {
          this.updateDisplay();
        }
      },
      registerCanvas: function registerCanvas(canvas) {
        var $canvas = $(canvas.canvas);
        this.canvas = canvas;
        this.$canvas = $canvas;
        $canvas.mouseenter($.proxy(this.mouseenter, this));
        $canvas.mouseleave($.proxy(this.mouseleave, this));
        $canvas.click($.proxy(this.mouseclick, this));
      },
      reset: function reset(removeTooltip) {
        this.splist = [];

        if (this.tooltip && removeTooltip) {
          this.tooltip.remove();
          this.tooltip = undefined;
        }
      },
      mouseclick: function mouseclick(e) {
        var clickEvent = $.Event("sparklineClick");
        clickEvent.originalEvent = e;
        clickEvent.sparklines = this.splist;
        this.$el.trigger(clickEvent);
      },
      mouseenter: function mouseenter(e) {
        $(document.body).unbind("mousemove.jqs");
        $(document.body).bind("mousemove.jqs", $.proxy(this.mousemove, this));
        this.over = true;
        this.currentPageX = e.pageX;
        this.currentPageY = e.pageY;
        this.currentEl = e.target;

        if (!this.tooltip && this.displayTooltips) {
          this.tooltip = new Tooltip(this.options);
          this.tooltip.updatePosition(e.pageX, e.pageY);
        }

        this.updateDisplay();
      },
      mouseleave: function mouseleave() {
        $(document.body).unbind("mousemove.jqs");
        var splist = this.splist,
            spcount = splist.length,
            needsRefresh = false,
            sp,
            i;
        this.over = false;
        this.currentEl = null;

        if (this.tooltip) {
          this.tooltip.remove();
          this.tooltip = null;
        }

        for (i = 0; i < spcount; i++) {
          sp = splist[i];

          if (sp.clearRegionHighlight()) {
            needsRefresh = true;
          }
        }

        if (needsRefresh) {
          this.canvas.render();
        }
      },
      mousemove: function mousemove(e) {
        this.currentPageX = e.pageX;
        this.currentPageY = e.pageY;
        this.currentEl = e.target;

        if (this.tooltip) {
          this.tooltip.updatePosition(e.pageX, e.pageY);
        }

        this.updateDisplay();
      },
      updateDisplay: function updateDisplay() {
        var splist = this.splist,
            spcount = splist.length,
            needsRefresh = false,
            offset = this.$canvas.offset(),
            localX = this.currentPageX - offset.left,
            localY = this.currentPageY - offset.top,
            tooltiphtml,
            sp,
            i,
            result,
            changeEvent;

        if (!this.over) {
          return;
        }

        for (i = 0; i < spcount; i++) {
          sp = splist[i];
          result = sp.setRegionHighlight(this.currentEl, localX, localY);

          if (result) {
            needsRefresh = true;
          }
        }

        if (needsRefresh) {
          changeEvent = $.Event("sparklineRegionChange");
          changeEvent.sparklines = this.splist;
          this.$el.trigger(changeEvent);

          if (this.tooltip) {
            tooltiphtml = "";

            for (i = 0; i < spcount; i++) {
              sp = splist[i];
              tooltiphtml += sp.getCurrentRegionTooltip();
            }

            this.tooltip.setContent(tooltiphtml);
          }

          if (!this.disableHighlight) {
            this.canvas.render();
          }
        }

        if (result === null) {
          this.mouseleave();
        }
      }
    });
    Tooltip = createClass({
      sizeStyle: "position: static !important;" + "display: block !important;" + "visibility: hidden !important;" + "float: left !important;",
      init: function init(options) {
        var tooltipClassname = options.get("tooltipClassname", "jqstooltip"),
            sizetipStyle = this.sizeStyle,
            offset;
        this.container = options.get("tooltipContainer") || document.body;
        this.tooltipOffsetX = options.get("tooltipOffsetX", 10);
        this.tooltipOffsetY = options.get("tooltipOffsetY", 12);
        $("#jqssizetip").remove();
        $("#jqstooltip").remove();
        this.sizetip = $("<div/>", {
          id: "jqssizetip",
          style: sizetipStyle,
          "class": tooltipClassname
        });
        this.tooltip = $("<div/>", {
          id: "jqstooltip",
          "class": tooltipClassname
        }).appendTo(this.container);
        offset = this.tooltip.offset();
        this.offsetLeft = offset.left;
        this.offsetTop = offset.top;
        this.hidden = true;
        $(window).unbind("resize.jqs scroll.jqs");
        $(window).bind("resize.jqs scroll.jqs", $.proxy(this.updateWindowDims, this));
        this.updateWindowDims();
      },
      updateWindowDims: function updateWindowDims() {
        this.scrollTop = $(window).scrollTop();
        this.scrollLeft = $(window).scrollLeft();
        this.scrollRight = this.scrollLeft + $(window).width();
        this.updatePosition();
      },
      getSize: function getSize(content) {
        this.sizetip.html(content).appendTo(this.container);
        this.width = this.sizetip.width() + 1;
        this.height = this.sizetip.height();
        this.sizetip.remove();
      },
      setContent: function setContent(content) {
        if (!content) {
          this.tooltip.css("visibility", "hidden");
          this.hidden = true;
          return;
        }

        this.getSize(content);
        this.tooltip.html(content).css({
          width: this.width,
          height: this.height,
          visibility: "visible"
        });

        if (this.hidden) {
          this.hidden = false;
          this.updatePosition();
        }
      },
      updatePosition: function updatePosition(x, y) {
        if (x === undefined) {
          if (this.mousex === undefined) {
            return;
          }

          x = this.mousex - this.offsetLeft;
          y = this.mousey - this.offsetTop;
        } else {
          this.mousex = x = x - this.offsetLeft;
          this.mousey = y = y - this.offsetTop;
        }

        if (!this.height || !this.width || this.hidden) {
          return;
        }

        y -= this.height + this.tooltipOffsetY;
        x += this.tooltipOffsetX;

        if (y < this.scrollTop) {
          y = this.scrollTop;
        }

        if (x < this.scrollLeft) {
          x = this.scrollLeft;
        } else if (x + this.width > this.scrollRight) {
          x = this.scrollRight - this.width;
        }

        this.tooltip.css({
          left: x,
          top: y
        });
      },
      remove: function remove() {
        this.tooltip.remove();
        this.sizetip.remove();
        this.sizetip = this.tooltip = undefined;
        $(window).unbind("resize.jqs scroll.jqs");
      }
    });

    initStyles = function initStyles() {
      addCSS(defaultStyles);
    };

    $(initStyles);
    pending = [];

    $.fn.sparkline = function (userValues, userOptions) {
      return this.each(function () {
        var options = new $.fn.sparkline.options(this, userOptions),
            $this = $(this),
            render,
            i;

        render = function render() {
          var values, width, height, tmp, mhandler, sp, vals;

          if (userValues === "html" || userValues === undefined) {
            vals = this.getAttribute(options.get("tagValuesAttribute"));

            if (vals === undefined || vals === null) {
              vals = $this.html();
            }

            values = vals.replace(/(^\s*<!--)|(-->\s*$)|\s+/g, "").split(",");
          } else {
            values = userValues;
          }

          width = options.get("width") === "auto" ? values.length * options.get("defaultPixelsPerValue") : options.get("width");

          if (options.get("height") === "auto") {
            if (!options.get("composite") || !$.data(this, "_jqs_vcanvas")) {
              tmp = document.createElement("span");
              tmp.innerHTML = "a";
              $this.html(tmp);
              height = $(tmp).innerHeight() || $(tmp).height();
              $(tmp).remove();
              tmp = null;
            }
          } else {
            height = options.get("height");
          }

          if (!options.get("disableInteraction")) {
            mhandler = $.data(this, "_jqs_mhandler");

            if (!mhandler) {
              mhandler = new MouseHandler(this, options);
              $.data(this, "_jqs_mhandler", mhandler);
            } else if (!options.get("composite")) {
              mhandler.reset();
            }
          } else {
            mhandler = false;
          }

          if (options.get("composite") && !$.data(this, "_jqs_vcanvas")) {
            if (!$.data(this, "_jqs_errnotify")) {
              alert("Attempted to attach a composite sparkline to an element with no existing sparkline");
              $.data(this, "_jqs_errnotify", true);
            }

            return;
          }

          sp = new $.fn.sparkline[options.get("type")](this, values, options, width, height);
          sp.render();

          if (mhandler) {
            mhandler.registerSparkline(sp);
          }
        };

        if ($(this).html() && !options.get("disableHiddenCheck") && $(this).is(":hidden") || !$(this).parents("body").length) {
          if (!options.get("composite") && $.data(this, "_jqs_pending")) {
            for (i = pending.length; i; i--) {
              if (pending[i - 1][0] == this) {
                pending.splice(i - 1, 1);
              }
            }
          }

          pending.push([this, render]);
          $.data(this, "_jqs_pending", true);
        } else {
          render.call(this);
        }
      });
    };

    $.fn.sparkline.defaults = getDefaults();

    $.sparkline_display_visible = function () {
      var el, i, pl;
      var done = [];

      for (i = 0, pl = pending.length; i < pl; i++) {
        el = pending[i][0];

        if ($(el).is(":visible") && !$(el).parents().is(":hidden")) {
          pending[i][1].call(el);
          $.data(pending[i][0], "_jqs_pending", false);
          done.push(i);
        } else if (!$(el).closest("html").length && !$.data(el, "_jqs_pending")) {
          $.data(pending[i][0], "_jqs_pending", false);
          done.push(i);
        }
      }

      for (i = done.length; i; i--) {
        pending.splice(done[i - 1], 1);
      }
    };

    $.fn.sparkline.options = createClass({
      init: function init(tag, userOptions) {
        var extendedOptions, defaults, base, tagOptionType;
        this.userOptions = userOptions = userOptions || {};
        this.tag = tag;
        this.tagValCache = {};
        defaults = $.fn.sparkline.defaults;
        base = defaults.common;
        this.tagOptionsPrefix = userOptions.enableTagOptions && (userOptions.tagOptionsPrefix || base.tagOptionsPrefix);
        tagOptionType = this.getTagSetting("type");

        if (tagOptionType === UNSET_OPTION) {
          extendedOptions = defaults[userOptions.type || base.type];
        } else {
          extendedOptions = defaults[tagOptionType];
        }

        this.mergedOptions = $.extend({}, base, extendedOptions, userOptions);
      },
      getTagSetting: function getTagSetting(key) {
        var prefix = this.tagOptionsPrefix,
            val,
            i,
            pairs,
            keyval;

        if (prefix === false || prefix === undefined) {
          return UNSET_OPTION;
        }

        if (this.tagValCache.hasOwnProperty(key)) {
          val = this.tagValCache.key;
        } else {
          val = this.tag.getAttribute(prefix + key);

          if (val === undefined || val === null) {
            val = UNSET_OPTION;
          } else if (val.substr(0, 1) === "[") {
            val = val.substr(1, val.length - 2).split(",");

            for (i = val.length; i--;) {
              val[i] = normalizeValue(val[i].replace(/(^\s*)|(\s*$)/g, ""));
            }
          } else if (val.substr(0, 1) === "{") {
            pairs = val.substr(1, val.length - 2).split(",");
            val = {};

            for (i = pairs.length; i--;) {
              keyval = pairs[i].split(":", 2);
              val[keyval[0].replace(/(^\s*)|(\s*$)/g, "")] = normalizeValue(keyval[1].replace(/(^\s*)|(\s*$)/g, ""));
            }
          } else {
            val = normalizeValue(val);
          }

          this.tagValCache.key = val;
        }

        return val;
      },
      get: function get(key, defaultval) {
        var tagOption = this.getTagSetting(key),
            result;

        if (tagOption !== UNSET_OPTION) {
          return tagOption;
        }

        return (result = this.mergedOptions[key]) === undefined ? defaultval : result;
      }
    });
    $.fn.sparkline._base = createClass({
      disabled: false,
      init: function init(el, values, options, width, height) {
        this.el = el;
        this.$el = $(el);
        this.values = values;
        this.options = options;
        this.width = width;
        this.height = height;
        this.currentRegion = undefined;
      },
      initTarget: function initTarget() {
        var interactive = !this.options.get("disableInteraction");

        if (!(this.target = this.$el.simpledraw(this.width, this.height, this.options.get("composite"), interactive))) {
          this.disabled = true;
        } else {
          this.canvasWidth = this.target.pixelWidth;
          this.canvasHeight = this.target.pixelHeight;
        }
      },
      render: function render() {
        if (this.disabled) {
          this.el.innerHTML = "";
          return false;
        }

        return true;
      },
      getRegion: function getRegion(x, y) {},
      setRegionHighlight: function setRegionHighlight(el, x, y) {
        var currentRegion = this.currentRegion,
            highlightEnabled = !this.options.get("disableHighlight"),
            newRegion;

        if (x > this.canvasWidth || y > this.canvasHeight || x < 0 || y < 0) {
          return null;
        }

        newRegion = this.getRegion(el, x, y);

        if (currentRegion !== newRegion) {
          if (currentRegion !== undefined && highlightEnabled) {
            this.removeHighlight();
          }

          this.currentRegion = newRegion;

          if (newRegion !== undefined && highlightEnabled) {
            this.renderHighlight();
          }

          return true;
        }

        return false;
      },
      clearRegionHighlight: function clearRegionHighlight() {
        if (this.currentRegion !== undefined) {
          this.removeHighlight();
          this.currentRegion = undefined;
          return true;
        }

        return false;
      },
      renderHighlight: function renderHighlight() {
        this.changeHighlight(true);
      },
      removeHighlight: function removeHighlight() {
        this.changeHighlight(false);
      },
      changeHighlight: function changeHighlight(highlight) {},
      getCurrentRegionTooltip: function getCurrentRegionTooltip() {
        var options = this.options,
            header = "",
            entries = [],
            fields,
            formats,
            formatlen,
            fclass,
            text,
            i,
            showFields,
            showFieldsKey,
            newFields,
            fv,
            formatter,
            format,
            fieldlen,
            j;

        if (this.currentRegion === undefined) {
          return "";
        }

        fields = this.getCurrentRegionFields();
        formatter = options.get("tooltipFormatter");

        if (formatter) {
          return formatter(this, options, fields);
        }

        if (options.get("tooltipChartTitle")) {
          header += '<div class="jqs jqstitle">' + options.get("tooltipChartTitle") + "</div>\n";
        }

        formats = this.options.get("tooltipFormat");

        if (!formats) {
          return "";
        }

        if (!$.isArray(formats)) {
          formats = [formats];
        }

        if (!$.isArray(fields)) {
          fields = [fields];
        }

        showFields = this.options.get("tooltipFormatFieldlist");
        showFieldsKey = this.options.get("tooltipFormatFieldlistKey");

        if (showFields && showFieldsKey) {
          newFields = [];

          for (i = fields.length; i--;) {
            fv = fields[i][showFieldsKey];

            if ((j = $.inArray(fv, showFields)) != -1) {
              newFields[j] = fields[i];
            }
          }

          fields = newFields;
        }

        formatlen = formats.length;
        fieldlen = fields.length;

        for (i = 0; i < formatlen; i++) {
          format = formats[i];

          if (typeof format === "string") {
            format = new SPFormat(format);
          }

          fclass = format.fclass || "jqsfield";

          for (j = 0; j < fieldlen; j++) {
            if (!fields[j].isNull || !options.get("tooltipSkipNull")) {
              $.extend(fields[j], {
                prefix: options.get("tooltipPrefix"),
                suffix: options.get("tooltipSuffix")
              });
              text = format.render(fields[j], options.get("tooltipValueLookups"), options);
              entries.push('<div class="' + fclass + '">' + text + "</div>");
            }
          }
        }

        if (entries.length) {
          return header + entries.join("\n");
        }

        return "";
      },
      getCurrentRegionFields: function getCurrentRegionFields() {},
      calcHighlightColor: function calcHighlightColor(color, options) {
        var highlightColor = options.get("highlightColor"),
            lighten = options.get("highlightLighten"),
            parse,
            mult,
            rgbnew,
            i;

        if (highlightColor) {
          return highlightColor;
        }

        if (lighten) {
          parse = /^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(color) || /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(color);

          if (parse) {
            rgbnew = [];
            mult = color.length === 4 ? 16 : 1;

            for (i = 0; i < 3; i++) {
              rgbnew[i] = clipval(Math.round(parseInt(parse[i + 1], 16) * mult * lighten), 0, 255);
            }

            return "rgb(" + rgbnew.join(",") + ")";
          }
        }

        return color;
      }
    });
    barHighlightMixin = {
      changeHighlight: function changeHighlight(highlight) {
        var currentRegion = this.currentRegion,
            target = this.target,
            shapeids = this.regionShapes[currentRegion],
            newShapes;

        if (shapeids) {
          newShapes = this.renderRegion(currentRegion, highlight);

          if ($.isArray(newShapes) || $.isArray(shapeids)) {
            target.replaceWithShapes(shapeids, newShapes);
            this.regionShapes[currentRegion] = $.map(newShapes, function (newShape) {
              return newShape.id;
            });
          } else {
            target.replaceWithShape(shapeids, newShapes);
            this.regionShapes[currentRegion] = newShapes.id;
          }
        }
      },
      render: function render() {
        var values = this.values,
            target = this.target,
            regionShapes = this.regionShapes,
            shapes,
            ids,
            i,
            j;

        if (!this.cls._super.render.call(this)) {
          return;
        }

        for (i = values.length; i--;) {
          shapes = this.renderRegion(i);

          if (shapes) {
            if ($.isArray(shapes)) {
              ids = [];

              for (j = shapes.length; j--;) {
                shapes[j].append();
                ids.push(shapes[j].id);
              }

              regionShapes[i] = ids;
            } else {
              shapes.append();
              regionShapes[i] = shapes.id;
            }
          } else {
            regionShapes[i] = null;
          }
        }

        target.render();
      }
    };
    $.fn.sparkline.line = line = createClass($.fn.sparkline._base, {
      type: "line",
      init: function init(el, values, options, width, height) {
        line._super.init.call(this, el, values, options, width, height);

        this.vertices = [];
        this.regionMap = [];
        this.xvalues = [];
        this.yvalues = [];
        this.yminmax = [];
        this.hightlightSpotId = null;
        this.lastShapeId = null;
        this.initTarget();
      },
      getRegion: function getRegion(el, x, y) {
        var i,
            regionMap = this.regionMap;

        for (i = regionMap.length; i--;) {
          if (regionMap[i] !== null && x >= regionMap[i][0] && x <= regionMap[i][1]) {
            return regionMap[i][2];
          }
        }

        return undefined;
      },
      getCurrentRegionFields: function getCurrentRegionFields() {
        var currentRegion = this.currentRegion;
        return {
          isNull: this.yvalues[currentRegion] === null,
          x: this.xvalues[currentRegion],
          y: this.yvalues[currentRegion],
          color: this.options.get("lineColor"),
          fillColor: this.options.get("fillColor"),
          offset: currentRegion
        };
      },
      renderHighlight: function renderHighlight() {
        var currentRegion = this.currentRegion,
            target = this.target,
            vertex = this.vertices[currentRegion],
            options = this.options,
            spotRadius = options.get("spotRadius"),
            highlightSpotColor = options.get("highlightSpotColor"),
            highlightLineColor = options.get("highlightLineColor"),
            highlightSpot,
            highlightLine;

        if (!vertex) {
          return;
        }

        if (spotRadius && highlightSpotColor) {
          highlightSpot = target.drawCircle(vertex[0], vertex[1], spotRadius, undefined, highlightSpotColor);
          this.highlightSpotId = highlightSpot.id;
          target.insertAfterShape(this.lastShapeId, highlightSpot);
        }

        if (highlightLineColor) {
          highlightLine = target.drawLine(vertex[0], this.canvasTop, vertex[0], this.canvasTop + this.canvasHeight, highlightLineColor);
          this.highlightLineId = highlightLine.id;
          target.insertAfterShape(this.lastShapeId, highlightLine);
        }
      },
      removeHighlight: function removeHighlight() {
        var target = this.target;

        if (this.highlightSpotId) {
          target.removeShapeId(this.highlightSpotId);
          this.highlightSpotId = null;
        }

        if (this.highlightLineId) {
          target.removeShapeId(this.highlightLineId);
          this.highlightLineId = null;
        }
      },
      scanValues: function scanValues() {
        var values = this.values,
            valcount = values.length,
            xvalues = this.xvalues,
            yvalues = this.yvalues,
            yminmax = this.yminmax,
            i,
            val,
            isStr,
            isArray,
            sp;

        for (i = 0; i < valcount; i++) {
          val = values[i];
          isStr = typeof values[i] === "string";
          isArray = _typeof(values[i]) === "object" && values[i] instanceof Array;
          sp = isStr && values[i].split(":");

          if (isStr && sp.length === 2) {
            xvalues.push(Number(sp[0]));
            yvalues.push(Number(sp[1]));
            yminmax.push(Number(sp[1]));
          } else if (isArray) {
            xvalues.push(val[0]);
            yvalues.push(val[1]);
            yminmax.push(val[1]);
          } else {
            xvalues.push(i);

            if (values[i] === null || values[i] === "null") {
              yvalues.push(null);
            } else {
              yvalues.push(Number(val));
              yminmax.push(Number(val));
            }
          }
        }

        if (this.options.get("xvalues")) {
          xvalues = this.options.get("xvalues");
        }

        this.maxy = this.maxyorg = Math.max.apply(Math, yminmax);
        this.miny = this.minyorg = Math.min.apply(Math, yminmax);
        this.maxx = Math.max.apply(Math, xvalues);
        this.minx = Math.min.apply(Math, xvalues);
        this.xvalues = xvalues;
        this.yvalues = yvalues;
        this.yminmax = yminmax;
      },
      processRangeOptions: function processRangeOptions() {
        var options = this.options,
            normalRangeMin = options.get("normalRangeMin"),
            normalRangeMax = options.get("normalRangeMax");

        if (normalRangeMin !== undefined) {
          if (normalRangeMin < this.miny) {
            this.miny = normalRangeMin;
          }

          if (normalRangeMax > this.maxy) {
            this.maxy = normalRangeMax;
          }
        }

        if (options.get("chartRangeMin") !== undefined && (options.get("chartRangeClip") || options.get("chartRangeMin") < this.miny)) {
          this.miny = options.get("chartRangeMin");
        }

        if (options.get("chartRangeMax") !== undefined && (options.get("chartRangeClip") || options.get("chartRangeMax") > this.maxy)) {
          this.maxy = options.get("chartRangeMax");
        }

        if (options.get("chartRangeMinX") !== undefined && (options.get("chartRangeClipX") || options.get("chartRangeMinX") < this.minx)) {
          this.minx = options.get("chartRangeMinX");
        }

        if (options.get("chartRangeMaxX") !== undefined && (options.get("chartRangeClipX") || options.get("chartRangeMaxX") > this.maxx)) {
          this.maxx = options.get("chartRangeMaxX");
        }
      },
      drawNormalRange: function drawNormalRange(canvasLeft, canvasTop, canvasHeight, canvasWidth, rangey) {
        var normalRangeMin = this.options.get("normalRangeMin"),
            normalRangeMax = this.options.get("normalRangeMax"),
            ytop = canvasTop + Math.round(canvasHeight - canvasHeight * ((normalRangeMax - this.miny) / rangey)),
            height = Math.round(canvasHeight * (normalRangeMax - normalRangeMin) / rangey);
        this.target.drawRect(canvasLeft, ytop, canvasWidth, height, undefined, this.options.get("normalRangeColor")).append();
      },
      render: function render() {
        var options = this.options,
            target = this.target,
            canvasWidth = this.canvasWidth,
            canvasHeight = this.canvasHeight,
            vertices = this.vertices,
            spotRadius = options.get("spotRadius"),
            regionMap = this.regionMap,
            rangex,
            rangey,
            yvallast,
            canvasTop,
            canvasLeft,
            vertex,
            path,
            paths,
            x,
            y,
            xnext,
            xpos,
            xposnext,
            last,
            next,
            yvalcount,
            lineShapes,
            fillShapes,
            plen,
            valueSpots,
            hlSpotsEnabled,
            color,
            xvalues,
            yvalues,
            i;

        if (!line._super.render.call(this)) {
          return;
        }

        this.scanValues();
        this.processRangeOptions();
        xvalues = this.xvalues;
        yvalues = this.yvalues;

        if (!this.yminmax.length || this.yvalues.length < 2) {
          return;
        }

        canvasTop = canvasLeft = 0;
        rangex = this.maxx - this.minx === 0 ? 1 : this.maxx - this.minx;
        rangey = this.maxy - this.miny === 0 ? 1 : this.maxy - this.miny;
        yvallast = this.yvalues.length - 1;

        if (spotRadius && (canvasWidth < spotRadius * 4 || canvasHeight < spotRadius * 4)) {
          spotRadius = 0;
        }

        if (spotRadius) {
          hlSpotsEnabled = options.get("highlightSpotColor") && !options.get("disableInteraction");

          if (hlSpotsEnabled || options.get("minSpotColor") || options.get("spotColor") && yvalues[yvallast] === this.miny) {
            canvasHeight -= Math.ceil(spotRadius);
          }

          if (hlSpotsEnabled || options.get("maxSpotColor") || options.get("spotColor") && yvalues[yvallast] === this.maxy) {
            canvasHeight -= Math.ceil(spotRadius);
            canvasTop += Math.ceil(spotRadius);
          }

          if (hlSpotsEnabled || (options.get("minSpotColor") || options.get("maxSpotColor")) && (yvalues[0] === this.miny || yvalues[0] === this.maxy)) {
            canvasLeft += Math.ceil(spotRadius);
            canvasWidth -= Math.ceil(spotRadius);
          }

          if (hlSpotsEnabled || options.get("spotColor") || options.get("minSpotColor") || options.get("maxSpotColor") && (yvalues[yvallast] === this.miny || yvalues[yvallast] === this.maxy)) {
            canvasWidth -= Math.ceil(spotRadius);
          }
        }

        canvasHeight--;

        if (options.get("normalRangeMin") !== undefined && !options.get("drawNormalOnTop")) {
          this.drawNormalRange(canvasLeft, canvasTop, canvasHeight, canvasWidth, rangey);
        }

        path = [];
        paths = [path];
        last = next = null;
        yvalcount = yvalues.length;

        for (i = 0; i < yvalcount; i++) {
          x = xvalues[i];
          xnext = xvalues[i + 1];
          y = yvalues[i];
          xpos = canvasLeft + Math.round((x - this.minx) * (canvasWidth / rangex));
          xposnext = i < yvalcount - 1 ? canvasLeft + Math.round((xnext - this.minx) * (canvasWidth / rangex)) : canvasWidth;
          next = xpos + (xposnext - xpos) / 2;
          regionMap[i] = [last || 0, next, i];
          last = next;

          if (y === null) {
            if (i) {
              if (yvalues[i - 1] !== null) {
                path = [];
                paths.push(path);
              }

              vertices.push(null);
            }
          } else {
            if (y < this.miny) {
              y = this.miny;
            }

            if (y > this.maxy) {
              y = this.maxy;
            }

            if (!path.length) {
              path.push([xpos, canvasTop + canvasHeight]);
            }

            vertex = [xpos, canvasTop + Math.round(canvasHeight - canvasHeight * ((y - this.miny) / rangey))];
            path.push(vertex);
            vertices.push(vertex);
          }
        }

        lineShapes = [];
        fillShapes = [];
        plen = paths.length;

        for (i = 0; i < plen; i++) {
          path = paths[i];

          if (path.length) {
            if (options.get("fillColor")) {
              path.push([path[path.length - 1][0], canvasTop + canvasHeight]);
              fillShapes.push(path.slice(0));
              path.pop();
            }

            if (path.length > 2) {
              path[0] = [path[0][0], path[1][1]];
            }

            lineShapes.push(path);
          }
        }

        plen = fillShapes.length;

        for (i = 0; i < plen; i++) {
          target.drawShape(fillShapes[i], options.get("fillColor"), options.get("fillColor")).append();
        }

        if (options.get("normalRangeMin") !== undefined && options.get("drawNormalOnTop")) {
          this.drawNormalRange(canvasLeft, canvasTop, canvasHeight, canvasWidth, rangey);
        }

        plen = lineShapes.length;

        for (i = 0; i < plen; i++) {
          target.drawShape(lineShapes[i], options.get("lineColor"), undefined, options.get("lineWidth")).append();
        }

        if (spotRadius && options.get("valueSpots")) {
          valueSpots = options.get("valueSpots");

          if (valueSpots.get === undefined) {
            valueSpots = new RangeMap(valueSpots);
          }

          for (i = 0; i < yvalcount; i++) {
            color = valueSpots.get(yvalues[i]);

            if (color) {
              target.drawCircle(canvasLeft + Math.round((xvalues[i] - this.minx) * (canvasWidth / rangex)), canvasTop + Math.round(canvasHeight - canvasHeight * ((yvalues[i] - this.miny) / rangey)), spotRadius, undefined, color).append();
            }
          }
        }

        if (spotRadius && options.get("spotColor") && yvalues[yvallast] !== null) {
          target.drawCircle(canvasLeft + Math.round((xvalues[xvalues.length - 1] - this.minx) * (canvasWidth / rangex)), canvasTop + Math.round(canvasHeight - canvasHeight * ((yvalues[yvallast] - this.miny) / rangey)), spotRadius, undefined, options.get("spotColor")).append();
        }

        if (this.maxy !== this.minyorg) {
          if (spotRadius && options.get("minSpotColor")) {
            x = xvalues[$.inArray(this.minyorg, yvalues)];
            target.drawCircle(canvasLeft + Math.round((x - this.minx) * (canvasWidth / rangex)), canvasTop + Math.round(canvasHeight - canvasHeight * ((this.minyorg - this.miny) / rangey)), spotRadius, undefined, options.get("minSpotColor")).append();
          }

          if (spotRadius && options.get("maxSpotColor")) {
            x = xvalues[$.inArray(this.maxyorg, yvalues)];
            target.drawCircle(canvasLeft + Math.round((x - this.minx) * (canvasWidth / rangex)), canvasTop + Math.round(canvasHeight - canvasHeight * ((this.maxyorg - this.miny) / rangey)), spotRadius, undefined, options.get("maxSpotColor")).append();
          }
        }

        this.lastShapeId = target.getLastShapeId();
        this.canvasTop = canvasTop;
        target.render();
      }
    });
    $.fn.sparkline.bar = bar = createClass($.fn.sparkline._base, barHighlightMixin, {
      type: "bar",
      init: function init(el, values, options, width, height) {
        var barWidth = parseInt(options.get("barWidth"), 10),
            barSpacing = parseInt(options.get("barSpacing"), 10),
            chartRangeMin = options.get("chartRangeMin"),
            chartRangeMax = options.get("chartRangeMax"),
            chartRangeClip = options.get("chartRangeClip"),
            stackMin = Infinity,
            stackMax = -Infinity,
            isStackString,
            groupMin,
            groupMax,
            stackRanges,
            numValues,
            i,
            vlen,
            range,
            zeroAxis,
            xaxisOffset,
            min,
            max,
            clipMin,
            clipMax,
            stacked,
            vlist,
            j,
            slen,
            svals,
            val,
            yoffset,
            yMaxCalc,
            canvasHeightEf;

        bar._super.init.call(this, el, values, options, width, height);

        for (i = 0, vlen = values.length; i < vlen; i++) {
          val = values[i];
          isStackString = typeof val === "string" && val.indexOf(":") > -1;

          if (isStackString || $.isArray(val)) {
            stacked = true;

            if (isStackString) {
              val = values[i] = normalizeValues(val.split(":"));
            }

            val = remove(val, null);
            groupMin = Math.min.apply(Math, val);
            groupMax = Math.max.apply(Math, val);

            if (groupMin < stackMin) {
              stackMin = groupMin;
            }

            if (groupMax > stackMax) {
              stackMax = groupMax;
            }
          }
        }

        this.stacked = stacked;
        this.regionShapes = {};
        this.barWidth = barWidth;
        this.barSpacing = barSpacing;
        this.totalBarWidth = barWidth + barSpacing;
        this.width = width = values.length * barWidth + (values.length - 1) * barSpacing;
        this.initTarget();

        if (chartRangeClip) {
          clipMin = chartRangeMin === undefined ? -Infinity : chartRangeMin;
          clipMax = chartRangeMax === undefined ? Infinity : chartRangeMax;
        }

        numValues = [];
        stackRanges = stacked ? [] : numValues;
        var stackTotals = [];
        var stackRangesNeg = [];

        for (i = 0, vlen = values.length; i < vlen; i++) {
          if (stacked) {
            vlist = values[i];
            values[i] = svals = [];
            stackTotals[i] = 0;
            stackRanges[i] = stackRangesNeg[i] = 0;

            for (j = 0, slen = vlist.length; j < slen; j++) {
              val = svals[j] = chartRangeClip ? clipval(vlist[j], clipMin, clipMax) : vlist[j];

              if (val !== null) {
                if (val > 0) {
                  stackTotals[i] += val;
                }

                if (stackMin < 0 && stackMax > 0) {
                  if (val < 0) {
                    stackRangesNeg[i] += Math.abs(val);
                  } else {
                    stackRanges[i] += val;
                  }
                } else {
                  stackRanges[i] += Math.abs(val - (val < 0 ? stackMax : stackMin));
                }

                numValues.push(val);
              }
            }
          } else {
            val = chartRangeClip ? clipval(values[i], clipMin, clipMax) : values[i];
            val = values[i] = normalizeValue(val);

            if (val !== null) {
              numValues.push(val);
            }
          }
        }

        this.max = max = Math.max.apply(Math, numValues);
        this.min = min = Math.min.apply(Math, numValues);
        this.stackMax = stackMax = stacked ? Math.max.apply(Math, stackTotals) : max;
        this.stackMin = stackMin = stacked ? Math.min.apply(Math, numValues) : min;

        if (options.get("chartRangeMin") !== undefined && (options.get("chartRangeClip") || options.get("chartRangeMin") < min)) {
          min = options.get("chartRangeMin");
        }

        if (options.get("chartRangeMax") !== undefined && (options.get("chartRangeClip") || options.get("chartRangeMax") > max)) {
          max = options.get("chartRangeMax");
        }

        this.zeroAxis = zeroAxis = options.get("zeroAxis", true);

        if (min <= 0 && max >= 0 && zeroAxis) {
          xaxisOffset = 0;
        } else if (zeroAxis == false) {
          xaxisOffset = min;
        } else if (min > 0) {
          xaxisOffset = min;
        } else {
          xaxisOffset = max;
        }

        this.xaxisOffset = xaxisOffset;
        range = stacked ? Math.max.apply(Math, stackRanges) + Math.max.apply(Math, stackRangesNeg) : max - min;
        this.canvasHeightEf = zeroAxis && min < 0 ? this.canvasHeight - 2 : this.canvasHeight - 1;

        if (min < xaxisOffset) {
          yMaxCalc = stacked && max >= 0 ? stackMax : max;
          yoffset = (yMaxCalc - xaxisOffset) / range * this.canvasHeight;

          if (yoffset !== Math.ceil(yoffset)) {
            this.canvasHeightEf -= 2;
            yoffset = Math.ceil(yoffset);
          }
        } else {
          yoffset = this.canvasHeight;
        }

        this.yoffset = yoffset;

        if ($.isArray(options.get("colorMap"))) {
          this.colorMapByIndex = options.get("colorMap");
          this.colorMapByValue = null;
        } else {
          this.colorMapByIndex = null;
          this.colorMapByValue = options.get("colorMap");

          if (this.colorMapByValue && this.colorMapByValue.get === undefined) {
            this.colorMapByValue = new RangeMap(this.colorMapByValue);
          }
        }

        this.range = range;
      },
      getRegion: function getRegion(el, x, y) {
        var result = Math.floor(x / this.totalBarWidth);
        return result < 0 || result >= this.values.length ? undefined : result;
      },
      getCurrentRegionFields: function getCurrentRegionFields() {
        var currentRegion = this.currentRegion,
            values = ensureArray(this.values[currentRegion]),
            result = [],
            value,
            i;

        for (i = values.length; i--;) {
          value = values[i];
          result.push({
            isNull: value === null,
            value: value,
            color: this.calcColor(i, value, currentRegion),
            offset: currentRegion
          });
        }

        return result;
      },
      calcColor: function calcColor(stacknum, value, valuenum) {
        var colorMapByIndex = this.colorMapByIndex,
            colorMapByValue = this.colorMapByValue,
            options = this.options,
            color,
            newColor;

        if (this.stacked) {
          color = options.get("stackedBarColor");
        } else {
          color = value < 0 ? options.get("negBarColor") : options.get("barColor");
        }

        if (value === 0 && options.get("zeroColor") !== undefined) {
          color = options.get("zeroColor");
        }

        if (colorMapByValue && (newColor = colorMapByValue.get(value))) {
          color = newColor;
        } else if (colorMapByIndex && colorMapByIndex.length > valuenum) {
          color = colorMapByIndex[valuenum];
        }

        return $.isArray(color) ? color[stacknum % color.length] : color;
      },
      renderRegion: function renderRegion(valuenum, highlight) {
        var vals = this.values[valuenum],
            options = this.options,
            xaxisOffset = this.xaxisOffset,
            result = [],
            range = this.range,
            stacked = this.stacked,
            target = this.target,
            x = valuenum * this.totalBarWidth,
            canvasHeightEf = this.canvasHeightEf,
            yoffset = this.yoffset,
            y,
            height,
            color,
            isNull,
            yoffsetNeg,
            i,
            valcount,
            val,
            minPlotted,
            allMin;
        vals = $.isArray(vals) ? vals : [vals];
        valcount = vals.length;
        val = vals[0];
        isNull = all(null, vals);
        allMin = all(xaxisOffset, vals, true);

        if (isNull) {
          if (options.get("nullColor")) {
            color = highlight ? options.get("nullColor") : this.calcHighlightColor(options.get("nullColor"), options);
            y = yoffset > 0 ? yoffset - 1 : yoffset;
            return target.drawRect(x, y, this.barWidth - 1, 0, color, color);
          } else {
            return undefined;
          }
        }

        yoffsetNeg = yoffset;

        for (i = 0; i < valcount; i++) {
          val = vals[i];

          if (stacked && val === xaxisOffset) {
            if (!allMin || minPlotted) {
              continue;
            }

            minPlotted = true;
          }

          if (range > 0) {
            height = Math.floor(canvasHeightEf * (Math.abs(val - xaxisOffset) / range)) + 1;
          } else {
            height = 1;
          }

          if (val < xaxisOffset || val === xaxisOffset && yoffset === 0) {
            y = yoffsetNeg;
            yoffsetNeg += height;
          } else {
            y = yoffset - height;
            yoffset -= height;
          }

          color = this.calcColor(i, val, valuenum);

          if (highlight) {
            color = this.calcHighlightColor(color, options);
          }

          result.push(target.drawRect(x, y, this.barWidth - 1, height - 1, color, color));
        }

        if (result.length === 1) {
          return result[0];
        }

        return result;
      }
    });
    $.fn.sparkline.tristate = tristate = createClass($.fn.sparkline._base, barHighlightMixin, {
      type: "tristate",
      init: function init(el, values, options, width, height) {
        var barWidth = parseInt(options.get("barWidth"), 10),
            barSpacing = parseInt(options.get("barSpacing"), 10);

        tristate._super.init.call(this, el, values, options, width, height);

        this.regionShapes = {};
        this.barWidth = barWidth;
        this.barSpacing = barSpacing;
        this.totalBarWidth = barWidth + barSpacing;
        this.values = $.map(values, Number);
        this.width = width = values.length * barWidth + (values.length - 1) * barSpacing;

        if ($.isArray(options.get("colorMap"))) {
          this.colorMapByIndex = options.get("colorMap");
          this.colorMapByValue = null;
        } else {
          this.colorMapByIndex = null;
          this.colorMapByValue = options.get("colorMap");

          if (this.colorMapByValue && this.colorMapByValue.get === undefined) {
            this.colorMapByValue = new RangeMap(this.colorMapByValue);
          }
        }

        this.initTarget();
      },
      getRegion: function getRegion(el, x, y) {
        return Math.floor(x / this.totalBarWidth);
      },
      getCurrentRegionFields: function getCurrentRegionFields() {
        var currentRegion = this.currentRegion;
        return {
          isNull: this.values[currentRegion] === undefined,
          value: this.values[currentRegion],
          color: this.calcColor(this.values[currentRegion], currentRegion),
          offset: currentRegion
        };
      },
      calcColor: function calcColor(value, valuenum) {
        var values = this.values,
            options = this.options,
            colorMapByIndex = this.colorMapByIndex,
            colorMapByValue = this.colorMapByValue,
            color,
            newColor;

        if (colorMapByValue && (newColor = colorMapByValue.get(value))) {
          color = newColor;
        } else if (colorMapByIndex && colorMapByIndex.length > valuenum) {
          color = colorMapByIndex[valuenum];
        } else if (values[valuenum] < 0) {
          color = options.get("negBarColor");
        } else if (values[valuenum] > 0) {
          color = options.get("posBarColor");
        } else {
          color = options.get("zeroBarColor");
        }

        return color;
      },
      renderRegion: function renderRegion(valuenum, highlight) {
        var values = this.values,
            options = this.options,
            target = this.target,
            canvasHeight,
            height,
            halfHeight,
            x,
            y,
            color;
        canvasHeight = target.pixelHeight;
        halfHeight = Math.round(canvasHeight / 2);
        x = valuenum * this.totalBarWidth;

        if (values[valuenum] < 0) {
          y = halfHeight;
          height = halfHeight - 1;
        } else if (values[valuenum] > 0) {
          y = 0;
          height = halfHeight - 1;
        } else {
          y = halfHeight - 1;
          height = 2;
        }

        color = this.calcColor(values[valuenum], valuenum);

        if (color === null) {
          return;
        }

        if (highlight) {
          color = this.calcHighlightColor(color, options);
        }

        return target.drawRect(x, y, this.barWidth - 1, height - 1, color, color);
      }
    });
    $.fn.sparkline.discrete = discrete = createClass($.fn.sparkline._base, barHighlightMixin, {
      type: "discrete",
      init: function init(el, values, options, width, height) {
        discrete._super.init.call(this, el, values, options, width, height);

        this.regionShapes = {};
        this.values = values = $.map(values, Number);
        this.min = Math.min.apply(Math, values);
        this.max = Math.max.apply(Math, values);
        this.range = this.max - this.min;
        this.width = width = options.get("width") === "auto" ? values.length * 2 : this.width;
        this.interval = Math.floor(width / values.length);
        this.itemWidth = width / values.length;

        if (options.get("chartRangeMin") !== undefined && (options.get("chartRangeClip") || options.get("chartRangeMin") < this.min)) {
          this.min = options.get("chartRangeMin");
        }

        if (options.get("chartRangeMax") !== undefined && (options.get("chartRangeClip") || options.get("chartRangeMax") > this.max)) {
          this.max = options.get("chartRangeMax");
        }

        this.initTarget();

        if (this.target) {
          this.lineHeight = options.get("lineHeight") === "auto" ? Math.round(this.canvasHeight * .3) : options.get("lineHeight");
        }
      },
      getRegion: function getRegion(el, x, y) {
        return Math.floor(x / this.itemWidth);
      },
      getCurrentRegionFields: function getCurrentRegionFields() {
        var currentRegion = this.currentRegion;
        return {
          isNull: this.values[currentRegion] === undefined,
          value: this.values[currentRegion],
          offset: currentRegion
        };
      },
      renderRegion: function renderRegion(valuenum, highlight) {
        var values = this.values,
            options = this.options,
            min = this.min,
            max = this.max,
            range = this.range,
            interval = this.interval,
            target = this.target,
            canvasHeight = this.canvasHeight,
            lineHeight = this.lineHeight,
            pheight = canvasHeight - lineHeight,
            ytop,
            val,
            color,
            x;
        val = clipval(values[valuenum], min, max);
        x = valuenum * interval;
        ytop = Math.round(pheight - pheight * ((val - min) / range));
        color = options.get("thresholdColor") && val < options.get("thresholdValue") ? options.get("thresholdColor") : options.get("lineColor");

        if (highlight) {
          color = this.calcHighlightColor(color, options);
        }

        return target.drawLine(x, ytop, x, ytop + lineHeight, color);
      }
    });
    $.fn.sparkline.bullet = bullet = createClass($.fn.sparkline._base, {
      type: "bullet",
      init: function init(el, values, options, width, height) {
        var min, max, vals;

        bullet._super.init.call(this, el, values, options, width, height);

        this.values = values = normalizeValues(values);
        vals = values.slice();
        vals[0] = vals[0] === null ? vals[2] : vals[0];
        vals[1] = values[1] === null ? vals[2] : vals[1];
        min = Math.min.apply(Math, values);
        max = Math.max.apply(Math, values);

        if (options.get("base") === undefined) {
          min = min < 0 ? min : 0;
        } else {
          min = options.get("base");
        }

        this.min = min;
        this.max = max;
        this.range = max - min;
        this.shapes = {};
        this.valueShapes = {};
        this.regiondata = {};
        this.width = width = options.get("width") === "auto" ? "4.0em" : width;
        this.target = this.$el.simpledraw(width, height, options.get("composite"));

        if (!values.length) {
          this.disabled = true;
        }

        this.initTarget();
      },
      getRegion: function getRegion(el, x, y) {
        var shapeid = this.target.getShapeAt(el, x, y);
        return shapeid !== undefined && this.shapes[shapeid] !== undefined ? this.shapes[shapeid] : undefined;
      },
      getCurrentRegionFields: function getCurrentRegionFields() {
        var currentRegion = this.currentRegion;
        return {
          fieldkey: currentRegion.substr(0, 1),
          value: this.values[currentRegion.substr(1)],
          region: currentRegion
        };
      },
      changeHighlight: function changeHighlight(highlight) {
        var currentRegion = this.currentRegion,
            shapeid = this.valueShapes[currentRegion],
            shape;
        delete this.shapes[shapeid];

        switch (currentRegion.substr(0, 1)) {
          case "r":
            shape = this.renderRange(currentRegion.substr(1), highlight);
            break;

          case "p":
            shape = this.renderPerformance(highlight);
            break;

          case "t":
            shape = this.renderTarget(highlight);
            break;
        }

        this.valueShapes[currentRegion] = shape.id;
        this.shapes[shape.id] = currentRegion;
        this.target.replaceWithShape(shapeid, shape);
      },
      renderRange: function renderRange(rn, highlight) {
        var rangeval = this.values[rn],
            rangewidth = Math.round(this.canvasWidth * ((rangeval - this.min) / this.range)),
            color = this.options.get("rangeColors")[rn - 2];

        if (highlight) {
          color = this.calcHighlightColor(color, this.options);
        }

        return this.target.drawRect(0, 0, rangewidth - 1, this.canvasHeight - 1, color, color);
      },
      renderPerformance: function renderPerformance(highlight) {
        var perfval = this.values[1],
            perfwidth = Math.round(this.canvasWidth * ((perfval - this.min) / this.range)),
            color = this.options.get("performanceColor");

        if (highlight) {
          color = this.calcHighlightColor(color, this.options);
        }

        return this.target.drawRect(0, Math.round(this.canvasHeight * .3), perfwidth - 1, Math.round(this.canvasHeight * .4) - 1, color, color);
      },
      renderTarget: function renderTarget(highlight) {
        var targetval = this.values[0],
            x = Math.round(this.canvasWidth * ((targetval - this.min) / this.range) - this.options.get("targetWidth") / 2),
            targettop = Math.round(this.canvasHeight * .1),
            targetheight = this.canvasHeight - targettop * 2,
            color = this.options.get("targetColor");

        if (highlight) {
          color = this.calcHighlightColor(color, this.options);
        }

        return this.target.drawRect(x, targettop, this.options.get("targetWidth") - 1, targetheight - 1, color, color);
      },
      render: function render() {
        var vlen = this.values.length,
            target = this.target,
            i,
            shape;

        if (!bullet._super.render.call(this)) {
          return;
        }

        for (i = 2; i < vlen; i++) {
          shape = this.renderRange(i).append();
          this.shapes[shape.id] = "r" + i;
          this.valueShapes["r" + i] = shape.id;
        }

        if (this.values[1] !== null) {
          shape = this.renderPerformance().append();
          this.shapes[shape.id] = "p1";
          this.valueShapes.p1 = shape.id;
        }

        if (this.values[0] !== null) {
          shape = this.renderTarget().append();
          this.shapes[shape.id] = "t0";
          this.valueShapes.t0 = shape.id;
        }

        target.render();
      }
    });
    $.fn.sparkline.pie = pie = createClass($.fn.sparkline._base, {
      type: "pie",
      init: function init(el, values, options, width, height) {
        var total = 0,
            i;

        pie._super.init.call(this, el, values, options, width, height);

        this.shapes = {};
        this.valueShapes = {};
        this.values = values = $.map(values, Number);

        if (options.get("width") === "auto") {
          this.width = this.height;
        }

        if (values.length > 0) {
          for (i = values.length; i--;) {
            total += values[i];
          }
        }

        this.total = total;
        this.initTarget();
        this.radius = Math.floor(Math.min(this.canvasWidth, this.canvasHeight) / 2);
      },
      getRegion: function getRegion(el, x, y) {
        var shapeid = this.target.getShapeAt(el, x, y);
        return shapeid !== undefined && this.shapes[shapeid] !== undefined ? this.shapes[shapeid] : undefined;
      },
      getCurrentRegionFields: function getCurrentRegionFields() {
        var currentRegion = this.currentRegion;
        return {
          isNull: this.values[currentRegion] === undefined,
          value: this.values[currentRegion],
          percent: this.values[currentRegion] / this.total * 100,
          color: this.options.get("sliceColors")[currentRegion % this.options.get("sliceColors").length],
          offset: currentRegion
        };
      },
      changeHighlight: function changeHighlight(highlight) {
        var currentRegion = this.currentRegion,
            newslice = this.renderSlice(currentRegion, highlight),
            shapeid = this.valueShapes[currentRegion];
        delete this.shapes[shapeid];
        this.target.replaceWithShape(shapeid, newslice);
        this.valueShapes[currentRegion] = newslice.id;
        this.shapes[newslice.id] = currentRegion;
      },
      renderSlice: function renderSlice(valuenum, highlight) {
        var target = this.target,
            options = this.options,
            radius = this.radius,
            borderWidth = options.get("borderWidth"),
            offset = options.get("offset"),
            circle = 2 * Math.PI,
            values = this.values,
            total = this.total,
            next = offset ? 2 * Math.PI * (offset / 360) : 0,
            start,
            end,
            i,
            vlen,
            color;
        vlen = values.length;

        for (i = 0; i < vlen; i++) {
          start = next;
          end = next;

          if (total > 0) {
            end = next + circle * (values[i] / total);
          }

          if (valuenum === i) {
            color = options.get("sliceColors")[i % options.get("sliceColors").length];

            if (highlight) {
              color = this.calcHighlightColor(color, options);
            }

            return target.drawPieSlice(radius, radius, radius - borderWidth, start, end, undefined, color);
          }

          next = end;
        }
      },
      render: function render() {
        var target = this.target,
            values = this.values,
            options = this.options,
            radius = this.radius,
            borderWidth = options.get("borderWidth"),
            shape,
            i;

        if (!pie._super.render.call(this)) {
          return;
        }

        if (borderWidth) {
          target.drawCircle(radius, radius, Math.floor(radius - borderWidth / 2), options.get("borderColor"), undefined, borderWidth).append();
        }

        for (i = values.length; i--;) {
          if (values[i]) {
            shape = this.renderSlice(i).append();
            this.valueShapes[i] = shape.id;
            this.shapes[shape.id] = i;
          }
        }

        target.render();
      }
    });
    $.fn.sparkline.box = box = createClass($.fn.sparkline._base, {
      type: "box",
      init: function init(el, values, options, width, height) {
        box._super.init.call(this, el, values, options, width, height);

        this.values = $.map(values, Number);
        this.width = options.get("width") === "auto" ? "4.0em" : width;
        this.initTarget();

        if (!this.values.length) {
          this.disabled = 1;
        }
      },
      getRegion: function getRegion() {
        return 1;
      },
      getCurrentRegionFields: function getCurrentRegionFields() {
        var result = [{
          field: "lq",
          value: this.quartiles[0]
        }, {
          field: "med",
          value: this.quartiles[1]
        }, {
          field: "uq",
          value: this.quartiles[2]
        }];

        if (this.loutlier !== undefined) {
          result.push({
            field: "lo",
            value: this.loutlier
          });
        }

        if (this.routlier !== undefined) {
          result.push({
            field: "ro",
            value: this.routlier
          });
        }

        if (this.lwhisker !== undefined) {
          result.push({
            field: "lw",
            value: this.lwhisker
          });
        }

        if (this.rwhisker !== undefined) {
          result.push({
            field: "rw",
            value: this.rwhisker
          });
        }

        return result;
      },
      render: function render() {
        var target = this.target,
            values = this.values,
            vlen = values.length,
            options = this.options,
            canvasWidth = this.canvasWidth,
            canvasHeight = this.canvasHeight,
            minValue = options.get("chartRangeMin") === undefined ? Math.min.apply(Math, values) : options.get("chartRangeMin"),
            maxValue = options.get("chartRangeMax") === undefined ? Math.max.apply(Math, values) : options.get("chartRangeMax"),
            canvasLeft = 0,
            lwhisker,
            loutlier,
            iqr,
            q1,
            q2,
            q3,
            rwhisker,
            routlier,
            i,
            size,
            unitSize;

        if (!box._super.render.call(this)) {
          return;
        }

        if (options.get("raw")) {
          if (options.get("showOutliers") && values.length > 5) {
            loutlier = values[0];
            lwhisker = values[1];
            q1 = values[2];
            q2 = values[3];
            q3 = values[4];
            rwhisker = values[5];
            routlier = values[6];
          } else {
            lwhisker = values[0];
            q1 = values[1];
            q2 = values[2];
            q3 = values[3];
            rwhisker = values[4];
          }
        } else {
          values.sort(function (a, b) {
            return a - b;
          });
          q1 = quartile(values, 1);
          q2 = quartile(values, 2);
          q3 = quartile(values, 3);
          iqr = q3 - q1;

          if (options.get("showOutliers")) {
            lwhisker = rwhisker = undefined;

            for (i = 0; i < vlen; i++) {
              if (lwhisker === undefined && values[i] > q1 - iqr * options.get("outlierIQR")) {
                lwhisker = values[i];
              }

              if (values[i] < q3 + iqr * options.get("outlierIQR")) {
                rwhisker = values[i];
              }
            }

            loutlier = values[0];
            routlier = values[vlen - 1];
          } else {
            lwhisker = values[0];
            rwhisker = values[vlen - 1];
          }
        }

        this.quartiles = [q1, q2, q3];
        this.lwhisker = lwhisker;
        this.rwhisker = rwhisker;
        this.loutlier = loutlier;
        this.routlier = routlier;
        unitSize = canvasWidth / (maxValue - minValue + 1);

        if (options.get("showOutliers")) {
          canvasLeft = Math.ceil(options.get("spotRadius"));
          canvasWidth -= 2 * Math.ceil(options.get("spotRadius"));
          unitSize = canvasWidth / (maxValue - minValue + 1);

          if (loutlier < lwhisker) {
            target.drawCircle((loutlier - minValue) * unitSize + canvasLeft, canvasHeight / 2, options.get("spotRadius"), options.get("outlierLineColor"), options.get("outlierFillColor")).append();
          }

          if (routlier > rwhisker) {
            target.drawCircle((routlier - minValue) * unitSize + canvasLeft, canvasHeight / 2, options.get("spotRadius"), options.get("outlierLineColor"), options.get("outlierFillColor")).append();
          }
        }

        target.drawRect(Math.round((q1 - minValue) * unitSize + canvasLeft), Math.round(canvasHeight * .1), Math.round((q3 - q1) * unitSize), Math.round(canvasHeight * .8), options.get("boxLineColor"), options.get("boxFillColor")).append();
        target.drawLine(Math.round((lwhisker - minValue) * unitSize + canvasLeft), Math.round(canvasHeight / 2), Math.round((q1 - minValue) * unitSize + canvasLeft), Math.round(canvasHeight / 2), options.get("lineColor")).append();
        target.drawLine(Math.round((lwhisker - minValue) * unitSize + canvasLeft), Math.round(canvasHeight / 4), Math.round((lwhisker - minValue) * unitSize + canvasLeft), Math.round(canvasHeight - canvasHeight / 4), options.get("whiskerColor")).append();
        target.drawLine(Math.round((rwhisker - minValue) * unitSize + canvasLeft), Math.round(canvasHeight / 2), Math.round((q3 - minValue) * unitSize + canvasLeft), Math.round(canvasHeight / 2), options.get("lineColor")).append();
        target.drawLine(Math.round((rwhisker - minValue) * unitSize + canvasLeft), Math.round(canvasHeight / 4), Math.round((rwhisker - minValue) * unitSize + canvasLeft), Math.round(canvasHeight - canvasHeight / 4), options.get("whiskerColor")).append();
        target.drawLine(Math.round((q2 - minValue) * unitSize + canvasLeft), Math.round(canvasHeight * .1), Math.round((q2 - minValue) * unitSize + canvasLeft), Math.round(canvasHeight * .9), options.get("medianColor")).append();

        if (options.get("target")) {
          size = Math.ceil(options.get("spotRadius"));
          target.drawLine(Math.round((options.get("target") - minValue) * unitSize + canvasLeft), Math.round(canvasHeight / 2 - size), Math.round((options.get("target") - minValue) * unitSize + canvasLeft), Math.round(canvasHeight / 2 + size), options.get("targetColor")).append();
          target.drawLine(Math.round((options.get("target") - minValue) * unitSize + canvasLeft - size), Math.round(canvasHeight / 2), Math.round((options.get("target") - minValue) * unitSize + canvasLeft + size), Math.round(canvasHeight / 2), options.get("targetColor")).append();
        }

        target.render();
      }
    });
    VShape = createClass({
      init: function init(target, id, type, args) {
        this.target = target;
        this.id = id;
        this.type = type;
        this.args = args;
      },
      append: function append() {
        this.target.appendShape(this);
        return this;
      }
    });
    VCanvas_base = createClass({
      _pxregex: /(\d+)(px)?\s*$/i,
      init: function init(width, height, target) {
        if (!width) {
          return;
        }

        this.width = width;
        this.height = height;
        this.target = target;
        this.lastShapeId = null;

        if (target[0]) {
          target = target[0];
        }

        $.data(target, "_jqs_vcanvas", this);
      },
      drawLine: function drawLine(x1, y1, x2, y2, lineColor, lineWidth) {
        return this.drawShape([[x1, y1], [x2, y2]], lineColor, lineWidth);
      },
      drawShape: function drawShape(path, lineColor, fillColor, lineWidth) {
        return this._genShape("Shape", [path, lineColor, fillColor, lineWidth]);
      },
      drawCircle: function drawCircle(x, y, radius, lineColor, fillColor, lineWidth) {
        return this._genShape("Circle", [x, y, radius, lineColor, fillColor, lineWidth]);
      },
      drawPieSlice: function drawPieSlice(x, y, radius, startAngle, endAngle, lineColor, fillColor) {
        return this._genShape("PieSlice", [x, y, radius, startAngle, endAngle, lineColor, fillColor]);
      },
      drawRect: function drawRect(x, y, width, height, lineColor, fillColor) {
        return this._genShape("Rect", [x, y, width, height, lineColor, fillColor]);
      },
      getElement: function getElement() {
        return this.canvas;
      },
      getLastShapeId: function getLastShapeId() {
        return this.lastShapeId;
      },
      reset: function reset() {
        alert("reset not implemented");
      },
      _insert: function _insert(el, target) {
        $(target).html(el);
      },
      _calculatePixelDims: function _calculatePixelDims(width, height, canvas) {
        var match;
        match = this._pxregex.exec(height);

        if (match) {
          this.pixelHeight = match[1];
        } else {
          this.pixelHeight = $(canvas).height();
        }

        match = this._pxregex.exec(width);

        if (match) {
          this.pixelWidth = match[1];
        } else {
          this.pixelWidth = $(canvas).width();
        }
      },
      _genShape: function _genShape(shapetype, shapeargs) {
        var id = shapeCount++;
        shapeargs.unshift(id);
        return new VShape(this, id, shapetype, shapeargs);
      },
      appendShape: function appendShape(shape) {
        alert("appendShape not implemented");
      },
      replaceWithShape: function replaceWithShape(shapeid, shape) {
        alert("replaceWithShape not implemented");
      },
      insertAfterShape: function insertAfterShape(shapeid, shape) {
        alert("insertAfterShape not implemented");
      },
      removeShapeId: function removeShapeId(shapeid) {
        alert("removeShapeId not implemented");
      },
      getShapeAt: function getShapeAt(el, x, y) {
        alert("getShapeAt not implemented");
      },
      render: function render() {
        alert("render not implemented");
      }
    });
    VCanvas_canvas = createClass(VCanvas_base, {
      init: function init(width, height, target, interact) {
        VCanvas_canvas._super.init.call(this, width, height, target);

        this.canvas = document.createElement("canvas");

        if (target[0]) {
          target = target[0];
        }

        $.data(target, "_jqs_vcanvas", this);
        $(this.canvas).css({
          display: "inline-block",
          width: width,
          height: height,
          verticalAlign: "top"
        });

        this._insert(this.canvas, target);

        this._calculatePixelDims(width, height, this.canvas);

        this.canvas.width = this.pixelWidth;
        this.canvas.height = this.pixelHeight;
        this.interact = interact;
        this.shapes = {};
        this.shapeseq = [];
        this.currentTargetShapeId = undefined;
        $(this.canvas).css({
          width: this.pixelWidth,
          height: this.pixelHeight
        });
      },
      _getContext: function _getContext(lineColor, fillColor, lineWidth) {
        var context = this.canvas.getContext("2d");

        if (lineColor !== undefined) {
          context.strokeStyle = lineColor;
        }

        context.lineWidth = lineWidth === undefined ? 1 : lineWidth;

        if (fillColor !== undefined) {
          context.fillStyle = fillColor;
        }

        return context;
      },
      reset: function reset() {
        var context = this._getContext();

        context.clearRect(0, 0, this.pixelWidth, this.pixelHeight);
        this.shapes = {};
        this.shapeseq = [];
        this.currentTargetShapeId = undefined;
      },
      _drawShape: function _drawShape(shapeid, path, lineColor, fillColor, lineWidth) {
        var context = this._getContext(lineColor, fillColor, lineWidth),
            i,
            plen;

        context.beginPath();
        context.moveTo(path[0][0] + .5, path[0][1] + .5);

        for (i = 1, plen = path.length; i < plen; i++) {
          context.lineTo(path[i][0] + .5, path[i][1] + .5);
        }

        if (lineColor !== undefined) {
          context.stroke();
        }

        if (fillColor !== undefined) {
          context.fill();
        }

        if (this.targetX !== undefined && this.targetY !== undefined && context.isPointInPath(this.targetX, this.targetY)) {
          this.currentTargetShapeId = shapeid;
        }
      },
      _drawCircle: function _drawCircle(shapeid, x, y, radius, lineColor, fillColor, lineWidth) {
        var context = this._getContext(lineColor, fillColor, lineWidth);

        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI, false);

        if (this.targetX !== undefined && this.targetY !== undefined && context.isPointInPath(this.targetX, this.targetY)) {
          this.currentTargetShapeId = shapeid;
        }

        if (lineColor !== undefined) {
          context.stroke();
        }

        if (fillColor !== undefined) {
          context.fill();
        }
      },
      _drawPieSlice: function _drawPieSlice(shapeid, x, y, radius, startAngle, endAngle, lineColor, fillColor) {
        var context = this._getContext(lineColor, fillColor);

        context.beginPath();
        context.moveTo(x, y);
        context.arc(x, y, radius, startAngle, endAngle, false);
        context.lineTo(x, y);
        context.closePath();

        if (lineColor !== undefined) {
          context.stroke();
        }

        if (fillColor) {
          context.fill();
        }

        if (this.targetX !== undefined && this.targetY !== undefined && context.isPointInPath(this.targetX, this.targetY)) {
          this.currentTargetShapeId = shapeid;
        }
      },
      _drawRect: function _drawRect(shapeid, x, y, width, height, lineColor, fillColor) {
        return this._drawShape(shapeid, [[x, y], [x + width, y], [x + width, y + height], [x, y + height], [x, y]], lineColor, fillColor);
      },
      appendShape: function appendShape(shape) {
        this.shapes[shape.id] = shape;
        this.shapeseq.push(shape.id);
        this.lastShapeId = shape.id;
        return shape.id;
      },
      replaceWithShape: function replaceWithShape(shapeid, shape) {
        var shapeseq = this.shapeseq,
            i;
        this.shapes[shape.id] = shape;

        for (i = shapeseq.length; i--;) {
          if (shapeseq[i] == shapeid) {
            shapeseq[i] = shape.id;
          }
        }

        delete this.shapes[shapeid];
      },
      replaceWithShapes: function replaceWithShapes(shapeids, shapes) {
        var shapeseq = this.shapeseq,
            shapemap = {},
            sid,
            i,
            first;

        for (i = shapeids.length; i--;) {
          shapemap[shapeids[i]] = true;
        }

        for (i = shapeseq.length; i--;) {
          sid = shapeseq[i];

          if (shapemap[sid]) {
            shapeseq.splice(i, 1);
            delete this.shapes[sid];
            first = i;
          }
        }

        for (i = shapes.length; i--;) {
          shapeseq.splice(first, 0, shapes[i].id);
          this.shapes[shapes[i].id] = shapes[i];
        }
      },
      insertAfterShape: function insertAfterShape(shapeid, shape) {
        var shapeseq = this.shapeseq,
            i;

        for (i = shapeseq.length; i--;) {
          if (shapeseq[i] === shapeid) {
            shapeseq.splice(i + 1, 0, shape.id);
            this.shapes[shape.id] = shape;
            return;
          }
        }
      },
      removeShapeId: function removeShapeId(shapeid) {
        var shapeseq = this.shapeseq,
            i;

        for (i = shapeseq.length; i--;) {
          if (shapeseq[i] === shapeid) {
            shapeseq.splice(i, 1);
            break;
          }
        }

        delete this.shapes[shapeid];
      },
      getShapeAt: function getShapeAt(el, x, y) {
        this.targetX = x;
        this.targetY = y;
        this.render();
        return this.currentTargetShapeId;
      },
      render: function render() {
        var shapeseq = this.shapeseq,
            shapes = this.shapes,
            shapeCount = shapeseq.length,
            context = this._getContext(),
            shapeid,
            shape,
            i;

        context.clearRect(0, 0, this.pixelWidth, this.pixelHeight);

        for (i = 0; i < shapeCount; i++) {
          shapeid = shapeseq[i];
          shape = shapes[shapeid];
          this["_draw" + shape.type].apply(this, shape.args);
        }

        if (!this.interact) {
          this.shapes = {};
          this.shapeseq = [];
        }
      }
    });
    VCanvas_vml = createClass(VCanvas_base, {
      init: function init(width, height, target) {
        var groupel;

        VCanvas_vml._super.init.call(this, width, height, target);

        if (target[0]) {
          target = target[0];
        }

        $.data(target, "_jqs_vcanvas", this);
        this.canvas = document.createElement("span");
        $(this.canvas).css({
          display: "inline-block",
          position: "relative",
          overflow: "hidden",
          width: width,
          height: height,
          margin: "0px",
          padding: "0px",
          verticalAlign: "top"
        });

        this._insert(this.canvas, target);

        this._calculatePixelDims(width, height, this.canvas);

        this.canvas.width = this.pixelWidth;
        this.canvas.height = this.pixelHeight;
        groupel = '<v:group coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '"' + ' style="position:absolute;top:0;left:0;width:' + this.pixelWidth + "px;height=" + this.pixelHeight + 'px;"></v:group>';
        this.canvas.insertAdjacentHTML("beforeEnd", groupel);
        this.group = $(this.canvas).children()[0];
        this.rendered = false;
        this.prerender = "";
      },
      _drawShape: function _drawShape(shapeid, path, lineColor, fillColor, lineWidth) {
        var vpath = [],
            initial,
            stroke,
            fill,
            closed,
            vel,
            plen,
            i;

        for (i = 0, plen = path.length; i < plen; i++) {
          vpath[i] = "" + path[i][0] + "," + path[i][1];
        }

        initial = vpath.splice(0, 1);
        lineWidth = lineWidth === undefined ? 1 : lineWidth;
        stroke = lineColor === undefined ? ' stroked="false" ' : ' strokeWeight="' + lineWidth + 'px" strokeColor="' + lineColor + '" ';
        fill = fillColor === undefined ? ' filled="false"' : ' fillColor="' + fillColor + '" filled="true" ';
        closed = vpath[0] === vpath[vpath.length - 1] ? "x " : "";
        vel = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '" ' + ' id="jqsshape' + shapeid + '" ' + stroke + fill + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + "px;width:" + this.pixelWidth + 'px;padding:0px;margin:0px;" ' + ' path="m ' + initial + " l " + vpath.join(", ") + " " + closed + 'e">' + " </v:shape>";
        return vel;
      },
      _drawCircle: function _drawCircle(shapeid, x, y, radius, lineColor, fillColor, lineWidth) {
        var stroke, fill, vel;
        x -= radius;
        y -= radius;
        stroke = lineColor === undefined ? ' stroked="false" ' : ' strokeWeight="' + lineWidth + 'px" strokeColor="' + lineColor + '" ';
        fill = fillColor === undefined ? ' filled="false"' : ' fillColor="' + fillColor + '" filled="true" ';
        vel = "<v:oval " + ' id="jqsshape' + shapeid + '" ' + stroke + fill + ' style="position:absolute;top:' + y + "px; left:" + x + "px; width:" + radius * 2 + "px; height:" + radius * 2 + 'px"></v:oval>';
        return vel;
      },
      _drawPieSlice: function _drawPieSlice(shapeid, x, y, radius, startAngle, endAngle, lineColor, fillColor) {
        var vpath, startx, starty, endx, endy, stroke, fill, vel;

        if (startAngle === endAngle) {
          return "";
        }

        if (endAngle - startAngle === 2 * Math.PI) {
          startAngle = 0;
          endAngle = 2 * Math.PI;
        }

        startx = x + Math.round(Math.cos(startAngle) * radius);
        starty = y + Math.round(Math.sin(startAngle) * radius);
        endx = x + Math.round(Math.cos(endAngle) * radius);
        endy = y + Math.round(Math.sin(endAngle) * radius);

        if (startx === endx && starty === endy) {
          if (endAngle - startAngle < Math.PI) {
            return "";
          }

          startx = endx = x + radius;
          starty = endy = y;
        }

        if (startx === endx && starty === endy && endAngle - startAngle < Math.PI) {
          return "";
        }

        vpath = [x - radius, y - radius, x + radius, y + radius, startx, starty, endx, endy];
        stroke = lineColor === undefined ? ' stroked="false" ' : ' strokeWeight="1px" strokeColor="' + lineColor + '" ';
        fill = fillColor === undefined ? ' filled="false"' : ' fillColor="' + fillColor + '" filled="true" ';
        vel = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '" ' + ' id="jqsshape' + shapeid + '" ' + stroke + fill + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + "px;width:" + this.pixelWidth + 'px;padding:0px;margin:0px;" ' + ' path="m ' + x + "," + y + " wa " + vpath.join(", ") + ' x e">' + " </v:shape>";
        return vel;
      },
      _drawRect: function _drawRect(shapeid, x, y, width, height, lineColor, fillColor) {
        return this._drawShape(shapeid, [[x, y], [x, y + height], [x + width, y + height], [x + width, y], [x, y]], lineColor, fillColor);
      },
      reset: function reset() {
        this.group.innerHTML = "";
      },
      appendShape: function appendShape(shape) {
        var vel = this["_draw" + shape.type].apply(this, shape.args);

        if (this.rendered) {
          this.group.insertAdjacentHTML("beforeEnd", vel);
        } else {
          this.prerender += vel;
        }

        this.lastShapeId = shape.id;
        return shape.id;
      },
      replaceWithShape: function replaceWithShape(shapeid, shape) {
        var existing = $("#jqsshape" + shapeid),
            vel = this["_draw" + shape.type].apply(this, shape.args);
        existing[0].outerHTML = vel;
      },
      replaceWithShapes: function replaceWithShapes(shapeids, shapes) {
        var existing = $("#jqsshape" + shapeids[0]),
            replace = "",
            slen = shapes.length,
            i;

        for (i = 0; i < slen; i++) {
          replace += this["_draw" + shapes[i].type].apply(this, shapes[i].args);
        }

        existing[0].outerHTML = replace;

        for (i = 1; i < shapeids.length; i++) {
          $("#jqsshape" + shapeids[i]).remove();
        }
      },
      insertAfterShape: function insertAfterShape(shapeid, shape) {
        var existing = $("#jqsshape" + shapeid),
            vel = this["_draw" + shape.type].apply(this, shape.args);
        existing[0].insertAdjacentHTML("afterEnd", vel);
      },
      removeShapeId: function removeShapeId(shapeid) {
        var existing = $("#jqsshape" + shapeid);
        this.group.removeChild(existing[0]);
      },
      getShapeAt: function getShapeAt(el, x, y) {
        var shapeid = el.id.substr(8);
        return shapeid;
      },
      render: function render() {
        if (!this.rendered) {
          this.group.innerHTML = this.prerender;
          this.rendered = true;
        }
      }
    });
  });
})(document, Math);

/***/ }),

/***/ "./resources/assets/valex/assets/plugins/rating/jquery.barrating.js":
/*!**************************************************************************!*\
  !*** ./resources/assets/valex/assets/plugins/rating/jquery.barrating.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * jQuery Bar Rating Plugin v1.2.2
 *
 * http://github.com/antennaio/jquery-bar-rating
 *
 * Copyright (c) 2012-2016 Kazik Pietruszewski
 *
 * This plugin is available under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */
(function (factory) {
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  var BarRating = function () {
    function BarRating() {
      var self = this; // wrap element in a wrapper div

      var wrapElement = function wrapElement() {
        var classes = ['br-wrapper'];

        if (self.options.theme !== '') {
          classes.push('br-theme-' + self.options.theme);
        }

        self.$elem.wrap($('<div />', {
          'class': classes.join(' ')
        }));
      }; // unwrap element


      var unwrapElement = function unwrapElement() {
        self.$elem.unwrap();
      }; // find option by value


      var findOption = function findOption(value) {
        if ($.isNumeric(value)) {
          value = Math.floor(value);
        }

        return $('option[value="' + value + '"]', self.$elem);
      }; // get initial option


      var getInitialOption = function getInitialOption() {
        var initialRating = self.options.initialRating;

        if (!initialRating) {
          return $('option:selected', self.$elem);
        }

        return findOption(initialRating);
      }; // get empty option


      var getEmptyOption = function getEmptyOption() {
        var $emptyOpt = self.$elem.find('option[value="' + self.options.emptyValue + '"]');

        if (!$emptyOpt.length && self.options.allowEmpty) {
          $emptyOpt = $('<option />', {
            'value': self.options.emptyValue
          });
          return $emptyOpt.prependTo(self.$elem);
        }

        return $emptyOpt;
      }; // get data


      var getData = function getData(key) {
        var data = self.$elem.data('barrating');

        if (typeof key !== 'undefined') {
          return data[key];
        }

        return data;
      }; // set data


      var setData = function setData(key, value) {
        if (value !== null && _typeof(value) === 'object') {
          self.$elem.data('barrating', value);
        } else {
          self.$elem.data('barrating')[key] = value;
        }
      }; // save data on element


      var saveDataOnElement = function saveDataOnElement() {
        var $opt = getInitialOption();
        var $emptyOpt = getEmptyOption();
        var value = $opt.val();
        var text = $opt.data('html') ? $opt.data('html') : $opt.text(); // if the allowEmpty option is not set let's check if empty option exists in the select field

        var allowEmpty = self.options.allowEmpty !== null ? self.options.allowEmpty : !!$emptyOpt.length;
        var emptyValue = $emptyOpt.length ? $emptyOpt.val() : null;
        var emptyText = $emptyOpt.length ? $emptyOpt.text() : null;
        setData(null, {
          userOptions: self.options,
          // initial rating based on the OPTION value
          ratingValue: value,
          ratingText: text,
          // rating will be restored by calling clear method
          originalRatingValue: value,
          originalRatingText: text,
          // allow empty ratings?
          allowEmpty: allowEmpty,
          // rating value and text of the empty OPTION
          emptyRatingValue: emptyValue,
          emptyRatingText: emptyText,
          // read-only state
          readOnly: self.options.readonly,
          // did the user already select a rating?
          ratingMade: false
        });
      }; // remove data on element


      var removeDataOnElement = function removeDataOnElement() {
        self.$elem.removeData('barrating');
      }; // return current rating text


      var ratingText = function ratingText() {
        return getData('ratingText');
      }; // return current rating value


      var ratingValue = function ratingValue() {
        return getData('ratingValue');
      }; // build widget and return jQuery element


      var buildWidget = function buildWidget() {
        var $w = $('<div />', {
          'class': 'br-widget'
        }); // create A elements that will replace OPTIONs

        self.$elem.find('option').each(function () {
          var val, text, html, $a;
          val = $(this).val(); // create ratings - but only if val is not defined as empty

          if (val !== getData('emptyRatingValue')) {
            text = $(this).text();
            html = $(this).data('html');

            if (html) {
              text = html;
            }

            $a = $('<a />', {
              'href': '#',
              'data-rating-value': val,
              'data-rating-text': text,
              'html': self.options.showValues ? text : ''
            });
            $w.append($a);
          }
        }); // append .br-current-rating div to the widget

        if (self.options.showSelectedRating) {
          $w.append($('<div />', {
            'text': '',
            'class': 'br-current-rating'
          }));
        } // additional classes for the widget


        if (self.options.reverse) {
          $w.addClass('br-reverse');
        }

        if (self.options.readonly) {
          $w.addClass('br-readonly');
        }

        return $w;
      }; // return a jQuery function name depending on the 'reverse' setting


      var nextAllorPreviousAll = function nextAllorPreviousAll() {
        if (getData('userOptions').reverse) {
          return 'nextAll';
        } else {
          return 'prevAll';
        }
      }; // set the value of the select field


      var setSelectFieldValue = function setSelectFieldValue(value) {
        // change selected option
        findOption(value).prop('selected', true);

        if (getData('userOptions').triggerChange) {
          self.$elem.change();
        }
      }; // reset select field


      var resetSelectField = function resetSelectField() {
        $('option', self.$elem).prop('selected', function () {
          return this.defaultSelected;
        });

        if (getData('userOptions').triggerChange) {
          self.$elem.change();
        }
      }; // display the currently selected rating


      var showSelectedRating = function showSelectedRating(text) {
        // text undefined?
        text = text ? text : ratingText(); // special case when the selected rating is defined as empty

        if (text == getData('emptyRatingText')) {
          text = '';
        } // update .br-current-rating div


        if (self.options.showSelectedRating) {
          self.$elem.parent().find('.br-current-rating').text(text);
        }
      }; // return rounded fraction of a value (14.4 -> 40, 0.99 -> 90)


      var fraction = function fraction(value) {
        return Math.round(Math.floor(value * 10) / 10 % 1 * 100);
      }; // remove all classes from elements


      var resetStyle = function resetStyle() {
        // remove all classes starting with br-*
        self.$widget.find('a').removeClass(function (index, classes) {
          return (classes.match(/(^|\s)br-\S+/g) || []).join(' ');
        });
      }; // apply style by setting classes on elements


      var applyStyle = function applyStyle() {
        var $a = self.$widget.find('a[data-rating-value="' + ratingValue() + '"]');
        var initialRating = getData('userOptions').initialRating;
        var baseValue = $.isNumeric(ratingValue()) ? ratingValue() : 0;
        var f = fraction(initialRating);
        var $all, $fractional;
        resetStyle(); // add classes

        $a.addClass('br-selected br-current')[nextAllorPreviousAll()]().addClass('br-selected');

        if (!getData('ratingMade') && $.isNumeric(initialRating)) {
          if (initialRating <= baseValue || !f) {
            return;
          }

          $all = self.$widget.find('a');
          $fractional = $a.length ? $a[getData('userOptions').reverse ? 'prev' : 'next']() : $all[getData('userOptions').reverse ? 'last' : 'first']();
          $fractional.addClass('br-fractional');
          $fractional.addClass('br-fractional-' + f);
        }
      }; // check if the element is deselectable?


      var isDeselectable = function isDeselectable($element) {
        if (!getData('allowEmpty') || !getData('userOptions').deselectable) {
          return false;
        }

        return ratingValue() == $element.attr('data-rating-value');
      }; // handle click events


      var attachClickHandler = function attachClickHandler($elements) {
        $elements.on('click.barrating', function (event) {
          var $a = $(this),
              options = getData('userOptions'),
              value,
              text;
          event.preventDefault();
          value = $a.attr('data-rating-value');
          text = $a.attr('data-rating-text'); // is current and deselectable?

          if (isDeselectable($a)) {
            value = getData('emptyRatingValue');
            text = getData('emptyRatingText');
          } // remember selected rating


          setData('ratingValue', value);
          setData('ratingText', text);
          setData('ratingMade', true);
          setSelectFieldValue(value);
          showSelectedRating(text);
          applyStyle(); // onSelect callback

          options.onSelect.call(self, ratingValue(), ratingText(), event);
          return false;
        });
      }; // handle mouseenter events


      var attachMouseEnterHandler = function attachMouseEnterHandler($elements) {
        $elements.on('mouseenter.barrating', function () {
          var $a = $(this);
          resetStyle();
          $a.addClass('br-active')[nextAllorPreviousAll()]().addClass('br-active');
          showSelectedRating($a.attr('data-rating-text'));
        });
      }; // handle mouseleave events


      var attachMouseLeaveHandler = function attachMouseLeaveHandler($elements) {
        self.$widget.on('mouseleave.barrating blur.barrating', function () {
          showSelectedRating();
          applyStyle();
        });
      }; // somewhat primitive way to remove 300ms click delay on touch devices
      // for a more advanced solution consider setting `fastClicks` option to false
      // and using a library such as fastclick (https://github.com/ftlabs/fastclick)


      var fastClicks = function fastClicks($elements) {
        $elements.on('touchstart.barrating', function (event) {
          event.preventDefault();
          event.stopPropagation();
          $(this).click();
        });
      }; // disable clicks


      var disableClicks = function disableClicks($elements) {
        $elements.on('click.barrating', function (event) {
          event.preventDefault();
        });
      };

      var attachHandlers = function attachHandlers($elements) {
        // attach click event handler
        attachClickHandler($elements);

        if (self.options.hoverState) {
          // attach mouseenter event handler
          attachMouseEnterHandler($elements); // attach mouseleave event handler

          attachMouseLeaveHandler($elements);
        }
      };

      var detachHandlers = function detachHandlers($elements) {
        // remove event handlers in the ".barrating" namespace
        $elements.off('.barrating');
      };

      var setupHandlers = function setupHandlers(readonly) {
        var $elements = self.$widget.find('a');

        if (getData('userOptions').fastClicks) {
          fastClicks($elements);
        }

        if (readonly) {
          detachHandlers($elements);
          disableClicks($elements);
        } else {
          attachHandlers($elements);
        }
      };

      this.show = function () {
        // run only once
        if (getData()) return; // wrap element

        wrapElement(); // save data

        saveDataOnElement(); // build & append widget to the DOM

        self.$widget = buildWidget();
        self.$widget.insertAfter(self.$elem);
        applyStyle();
        showSelectedRating();
        setupHandlers(self.options.readonly); // hide the select field

        self.$elem.hide();
      };

      this.readonly = function (state) {
        if (typeof state !== 'boolean' || getData('readOnly') == state) return;
        setupHandlers(state);
        setData('readOnly', state);
        self.$widget.toggleClass('br-readonly');
      };

      this.set = function (value) {
        var options = getData('userOptions');
        if (self.$elem.find('option[value="' + value + '"]').length === 0) return; // set data

        setData('ratingValue', value);
        setData('ratingText', self.$elem.find('option[value="' + value + '"]').text());
        setData('ratingMade', true);
        setSelectFieldValue(ratingValue());
        showSelectedRating(ratingText());
        applyStyle(); // onSelect callback

        if (!options.silent) {
          options.onSelect.call(this, ratingValue(), ratingText());
        }
      };

      this.clear = function () {
        var options = getData('userOptions'); // restore original data

        setData('ratingValue', getData('originalRatingValue'));
        setData('ratingText', getData('originalRatingText'));
        setData('ratingMade', false);
        resetSelectField();
        showSelectedRating(ratingText());
        applyStyle(); // onClear callback

        options.onClear.call(this, ratingValue(), ratingText());
      };

      this.destroy = function () {
        var value = ratingValue();
        var text = ratingText();
        var options = getData('userOptions'); // detach handlers

        detachHandlers(self.$widget.find('a')); // remove widget

        self.$widget.remove(); // remove data

        removeDataOnElement(); // unwrap the element

        unwrapElement(); // show the element

        self.$elem.show(); // onDestroy callback

        options.onDestroy.call(this, value, text);
      };
    }

    BarRating.prototype.init = function (options, elem) {
      this.$elem = $(elem);
      this.options = $.extend({}, $.fn.barrating.defaults, options);
      return this.options;
    };

    return BarRating;
  }();

  $.fn.barrating = function (method, options) {
    return this.each(function () {
      var plugin = new BarRating(); // plugin works with select fields

      if (!$(this).is('select')) {
        $.error('Sorry, this plugin only works with select fields.');
      } // method supplied


      if (plugin.hasOwnProperty(method)) {
        plugin.init(options, this);

        if (method === 'show') {
          return plugin.show(options);
        } else {
          // plugin exists?
          if (plugin.$elem.data('barrating')) {
            plugin.$widget = $(this).next('.br-widget');
            return plugin[method](options);
          }
        } // no method supplied or only options supplied

      } else if (_typeof(method) === 'object' || !method) {
        options = method;
        plugin.init(options, this);
        return plugin.show();
      } else {
        $.error('Method ' + method + ' does not exist on jQuery.barrating');
      }
    });
  };

  $.fn.barrating.defaults = {
    theme: '',
    initialRating: null,
    // initial rating
    allowEmpty: null,
    // allow empty ratings?
    emptyValue: '',
    // this is the expected value of the empty rating
    showValues: false,
    // display rating values on the bars?
    showSelectedRating: true,
    // append a div with a rating to the widget?
    deselectable: true,
    // allow to deselect ratings?
    reverse: false,
    // reverse the rating?
    readonly: false,
    // make the rating ready-only?
    fastClicks: true,
    // remove 300ms click delay on touch devices?
    hoverState: true,
    // change state on hover?
    silent: false,
    // supress callbacks when controlling ratings programatically
    triggerChange: true,
    // trigger change event when ratings are set or reset
    onSelect: function onSelect(value, text, event) {},
    // callback fired when a rating is selected
    onClear: function onClear(value, text) {},
    // callback fired when a rating is cleared
    onDestroy: function onDestroy(value, text) {} // callback fired when a widget is destroyed

  };
  $.fn.barrating.BarRating = BarRating;
});

/***/ }),

/***/ "./resources/assets/valex/assets/plugins/rating/jquery.rating-stars.js":
/*!*****************************************************************************!*\
  !*** ./resources/assets/valex/assets/plugins/rating/jquery.rating-stars.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, jQuery) {jQuery.fn.ratingStars = function (options) {
  var defaults = {
    selectors: {
      starsSelector: '.rating-stars',
      starSelector: '.rating-star',
      starActiveClass: 'is--active',
      starHoverClass: 'is--hover',
      starNoHoverClass: 'is--no-hover',
      targetFormElementSelector: '.rating-value'
    }
  };
  var settings = $.extend({}, defaults, options);
  var methods = {
    init: function init(element) {
      var me = this;
      methods.registerEvents(element);
      methods.loadDefaultValue(element);
    },
    loadDefaultValue: function loadDefaultValue(element) {
      var me = this;
      var defaultValue = $(element).children(settings.selectors.targetFormElementSelector).val();
      var i = 0;
      $.each($(element).children(settings.starsSelector).children(settings.starSelector), function (index, element) {
        if (i <= defaultValue - 1) {
          $(element).addClass(settings.selectors.starActiveClass);
        }

        i++;
      });
    },
    registerEvents: function registerEvents(element) {
      var me = this;
      $.each($(element).children(settings.starsSelector).children(settings.starSelector), function (index, starElement) {
        $(starElement).on("mouseenter", $.proxy(me.onStarEnter, me, starElement, element));
        $(starElement).on("mouseleave", $.proxy(me.onStarLeave, me, starElement, element));
        $(starElement).on("click touchstart", $.proxy(me.onStarSelected, me, starElement, element));
      });
    },
    onStarEnter: function onStarEnter(starElement, container) {
      var me = this;
      var elementIndex = $(starElement).index(); // add the hover classes

      var i = 0;
      $.each($(container).children(settings.starsSelector).children(settings.starSelector), function (index, element) {
        if (i <= elementIndex) {
          // add a class to represent the chosen stars.
          $(element).addClass(settings.selectors.starHoverClass);
        } else {
          // add a class to represent the remaining stars.
          $(element).addClass(settings.selectors.starNoHoverClass);
        }

        i++;
      });
      $(container).trigger("ratingOnEnter", {
        ratingValue: elementIndex + 1
      });
    },
    onStarLeave: function onStarLeave(starElement, container) {
      var me = this;
      var elementIndex = $(starElement).index(); // remove all hover classes

      $(container).children(settings.starsSelector).children(settings.starSelector).removeClass(settings.selectors.starHoverClass);
      $(container).children(settings.starsSelector).children(settings.starSelector).removeClass(settings.selectors.starNoHoverClass);
      $(container).trigger("ratingOnLeave", {
        ratingValue: elementIndex + 1
      });
    },
    onStarSelected: function onStarSelected(starElement, container) {
      var me = this;
      var elementIndex = $(starElement).index(); // remove the currently selected class

      $(container).children(settings.starsSelector).children(settings.starSelector).removeClass(settings.selectors.starActiveClass); // set the selected class for the stars

      var i = 0;
      $.each($(container).children(settings.starsSelector).children(settings.starSelector), function (index, element) {
        if (i <= elementIndex) {
          $(element).addClass(settings.selectors.starActiveClass);
        }

        i++;
      }); // set the rating value to the form

      $(container).children(settings.selectors.targetFormElementSelector).val(elementIndex + 1);
      $(container).trigger("ratingChanged", {
        ratingValue: elementIndex + 1
      });
    }
  };
  return this.each(function () {
    methods.init($(this));
  });
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/assets/valex/assets/plugins/side-menu/sidemenu.js":
/*!*********************************************************************!*\
  !*** ./resources/assets/valex/assets/plugins/side-menu/sidemenu.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {(function () {
  "use strict";

  var slideMenu = $('.side-menu'); // Toggle Sidebar

  $(document).on('click', '[data-toggle="sidebar"]', function (event) {
    event.preventDefault();
    $('.app').toggleClass('sidenav-toggled');
  });
  $(".app-sidebar").hover(function () {
    if ($('body').hasClass('sidenav-toggled')) {
      $('body').addClass('sidenav-toggled-open');
    }
  }, function () {
    if ($('body').hasClass('sidenav-toggled')) {
      $('body').removeClass('sidenav-toggled-open');
    }
  }); // Activate sidebar slide toggle

  $("[data-toggle='slide']").click(function (event) {
    event.preventDefault();

    if (!$(this).parent().hasClass('is-expanded')) {
      slideMenu.find("[data-toggle='slide']").parent().removeClass('is-expanded');
    }

    $(this).parent().toggleClass('is-expanded');
  });
  $("[data-toggle='sub-slide']").click(function (event) {
    event.preventDefault();

    if (!$(this).parent().hasClass('is-expanded')) {
      slideMenu.find("[data-toggle='sub-slide']").parent().removeClass('is-expanded');
    }

    $(this).parent().toggleClass('is-expanded');
    $('.slide.active').addClass('is-expanded');
  }); // Set initial active toggle

  $("[data-toggle='slide.'].is-expanded").parent().toggleClass('is-expanded');
  $("[data-toggle='sub-slide.'].is-expanded").parent().toggleClass('is-expanded'); //Activate bootstrip tooltips

  $("[data-toggle='tooltip']").tooltip(); // ______________Active Class

  $(".app-sidebar a").each(function () {
    var pageUrl = window.location.href.split(/[?#]/)[0];

    if (this.href == pageUrl) {
      $(this).addClass("active");
      $(this).parent().addClass("active"); // add active to li of the current link

      $(this).parent().parent().prev().addClass("active"); // add active class to an anchor

      $(this).parent().parent().parent().parent().parent().addClass("active");
      $(this).parent().parent().prev().click(); // click the item to make it drop
    }
  });

  var toggleSidebar = function toggleSidebar() {
    var w = $(window);

    if (w.outerWidth() <= 1024) {
      $("body").addClass("sidebar-gone");
      $(document).off("click", "body").on("click", "body", function (e) {
        if ($(e.target).hasClass('sidebar-show') || $(e.target).hasClass('search-show')) {
          $("body").removeClass("sidebar-show");
          $("body").addClass("sidebar-gone");
          $("body").removeClass("search-show");
        }
      });
    } else {
      $("body").removeClass("sidebar-gone");
    }
  };

  toggleSidebar();
  $(window).resize(toggleSidebar); //mCustomScrollbar

  $(".main-sidemenu").mCustomScrollbar({
    theme: "minimal",
    autoHideScrollbar: true,
    scrollbarPosition: "outside"
  });
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/assets/valex/assets/plugins/sidebar/sidebar-custom.js":
/*!*************************************************************************!*\
  !*** ./resources/assets/valex/assets/plugins/sidebar/sidebar-custom.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  'use strict'; // Date& time

  var datetime = null,
      datetime2 = null,
      date = null;

  var update = function update() {
    date = moment(new Date());
    datetime.html(date.format('HH:mm'));
    datetime2.html(date.format('dddd, MMMM Do YYYY'));
  };

  $(document).ready(function () {
    datetime = $('.time h1');
    datetime2 = $('.time p');
    update();
    setInterval(update, 1000);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/assets/valex/assets/plugins/sidebar/sidebar.js":
/*!******************************************************************!*\
  !*** ./resources/assets/valex/assets/plugins/sidebar/sidebar.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* ========================================================================
 * Bootstrap: sidebar.js v0.1
 * ========================================================================
 * Copyright 2011-2014 Asyraf Abdul Rahman
 * Licensed under MIT
 * ======================================================================== */
+function ($) {
  'use strict'; // SIDEBAR PUBLIC CLASS DEFINITION
  // ================================

  var Sidebar = function Sidebar(element, options) {
    this.$element = $(element);
    this.options = $.extend({}, Sidebar.DEFAULTS, options);
    this.transitioning = null;
    if (this.options.parent) this.$parent = $(this.options.parent);
    if (this.options.toggle) this.toggle();
  };

  Sidebar.DEFAULTS = {
    toggle: true
  };

  Sidebar.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('sidebar-open')) return;
    var startEvent = $.Event('show.bs.sidebar');
    this.$element.trigger(startEvent);
    if (startEvent.isDefaultPrevented()) return;
    this.$element.addClass('sidebar-open');
    this.transitioning = 1;

    var complete = function complete() {
      this.$element;
      this.transitioning = 0;
      this.$element.trigger('shown.bs.sidebar');
    };

    if (!$.support.transition) return complete.call(this);
    this.$element.one($.support.transition.end, $.proxy(complete, this)).emulateTransitionEnd(400);
  };

  Sidebar.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('sidebar-open')) return;
    var startEvent = $.Event('hide.bs.sidebar');
    this.$element.trigger(startEvent);
    if (startEvent.isDefaultPrevented()) return;
    this.$element.removeClass('sidebar-open');
    this.transitioning = 1;

    var complete = function complete() {
      this.transitioning = 0;
      this.$element.trigger('hidden.bs.sidebar');
    };

    if (!$.support.transition) return complete.call(this);
    this.$element.one($.support.transition.end, $.proxy(complete, this)).emulateTransitionEnd(400);
  };

  Sidebar.prototype.toggle = function () {
    this[this.$element.hasClass('sidebar-open') ? 'hide' : 'show']();
  };

  var old = $.fn.sidebar;

  $.fn.sidebar = function (option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.sidebar');
      var options = $.extend({}, Sidebar.DEFAULTS, $this.data(), _typeof(options) == 'object' && option);
      if (!data && options.toggle && option == 'show') option = !option;
      if (!data) $this.data('bs.sidebar', data = new Sidebar(this, options));
      if (typeof option == 'string') data[option]();
    });
  };

  $.fn.sidebar.Constructor = Sidebar;

  $.fn.sidebar.noConflict = function () {
    $.fn.sidebar = old;
    return this;
  };

  $(document).on('click.bs.sidebar.data-api', '[data-toggle="sidebar-right"]', function (e) {
    var $this = $(this),
        href;
    var target = $this.attr('data-target') || e.preventDefault() || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '');
    var $target = $(target);
    var data = $target.data('bs.sidebar');
    var option = data ? 'toggle' : $this.data();
    $target.sidebar(option);
  });
  $('html').on('click.bs.sidebar.autohide', function (event) {
    var $this = $(event.target);
    var isButtonOrSidebar = $this.is('.sidebar, [data-toggle="sidebar-right"]') || $this.parents('.sidebar, [data-toggle="sidebar-right"]').length;

    if (isButtonOrSidebar) {
      return;
    } else {
      var $target = $('.sidebar');
      $target.each(function (i, trgt) {
        var $trgt = $(trgt);

        if ($trgt.data('bs.sidebar') && $trgt.hasClass('sidebar-open')) {
          $trgt.sidebar('hide');
        }
      });
    }
  });
  $(document).on('click', '.sidebar-remove', function (event) {
    event.preventDefault();
    $('.sidebar').removeClass('sidebar-open');
  }); // ______________ PerfectScrollbar
  // const ps1 = new PerfectScrollbar('.sidebar-right', {
  // 	useBothWheelAxes:true,
  // 	suppressScrollX:true,
  // });
}(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/assets/valex/assets/switcher/js/switcher.js":
/*!***************************************************************!*\
  !*** ./resources/assets/valex/assets/switcher/js/switcher.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {// Swticher Cookie Base

/**
 * Styleswitch stylesheet switcher built on jQuery
 * Under an Attribution, Share Alike License
 * By Kelvin Luck ( http://www.kelvinluck.com/ )
 * Thanks for permission! 
 **/
(function ($) {
  $(document).ready(function () {
    $('.styleswitch').click(function () {
      switchStylestyle(this.getAttribute("data-switchcolor"));
      return false;
    });
    var c = readCookie('style');

    if (c) {
      switchStylestyle(c);
    } else {
      var defaultColor = false;
      $('link[rel*=style][title]').each(function (i) {
        this.disabled = true;
        defaultColor = this.getAttribute('data-default-color');

        if (defaultColor) {
          this.disabled = false;
        }
      });
    }
  });

  function switchStylestyle(styleName) {
    $('link[rel*=style][title]').each(function (i) {
      this.disabled = true;
      if (this.getAttribute('title') == styleName) this.disabled = false;
    });
    createCookie('style', styleName, 365);
  }
})(jQuery);

function createCookie(name, value, days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    var expires = "; expires=" + date.toGMTString();
  } else var expires = "";

  document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1, c.length);
    }

    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }

  return null;
}

function eraseCookie(name) {
  createCookie(name, "", -1);
} // DEMO Swticher Base


jQuery('.demo_changer .demo-icon').click(function () {
  if (jQuery('.demo_changer').hasClass("active")) {
    jQuery('.demo_changer').animate({
      "right": "-255px"
    }, function () {
      jQuery('.demo_changer').toggleClass("active");
    });
  } else {
    jQuery('.demo_changer').animate({
      "right": "0px"
    }, function () {
      jQuery('.demo_changer').toggleClass("active");
    });
  }

  var ps3 = new PerfectScrollbar('.sidebar-right1', {
    useBothWheelAxes: true,
    suppressScrollX: true
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/assets/valex/js/pages/admin_dashboard.js":
/*!************************************************************!*\
  !*** ./resources/assets/valex/js/pages/admin_dashboard.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_plugins_bootstrap_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../assets/plugins/bootstrap/js/bootstrap.bundle.min.js */ "./resources/assets/valex/assets/plugins/bootstrap/js/bootstrap.bundle.min.js");
/* harmony import */ var _assets_plugins_bootstrap_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_plugins_bootstrap_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_plugins_ionicons_ionicons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../assets/plugins/ionicons/ionicons.js */ "./resources/assets/valex/assets/plugins/ionicons/ionicons.js");
/* harmony import */ var _assets_plugins_ionicons_ionicons_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_plugins_ionicons_ionicons_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_plugins_rating_jquery_rating_stars_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../assets/plugins/rating/jquery.rating-stars.js */ "./resources/assets/valex/assets/plugins/rating/jquery.rating-stars.js");
/* harmony import */ var _assets_plugins_rating_jquery_rating_stars_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_plugins_rating_jquery_rating_stars_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_plugins_rating_jquery_barrating_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../assets/plugins/rating/jquery.barrating.js */ "./resources/assets/valex/assets/plugins/rating/jquery.barrating.js");
/* harmony import */ var _assets_plugins_rating_jquery_barrating_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_plugins_rating_jquery_barrating_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_plugins_jquery_sparkline_jquery_sparkline_min_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../assets/plugins/jquery-sparkline/jquery.sparkline.min.js */ "./resources/assets/valex/assets/plugins/jquery-sparkline/jquery.sparkline.min.js");
/* harmony import */ var _assets_plugins_jquery_sparkline_jquery_sparkline_min_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_plugins_jquery_sparkline_jquery_sparkline_min_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_plugins_sidebar_sidebar_custom_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../assets/plugins/sidebar/sidebar-custom.js */ "./resources/assets/valex/assets/plugins/sidebar/sidebar-custom.js");
/* harmony import */ var _assets_plugins_sidebar_sidebar_custom_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_plugins_sidebar_sidebar_custom_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_plugins_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../assets/plugins/sidebar/sidebar */ "./resources/assets/valex/assets/plugins/sidebar/sidebar.js");
/* harmony import */ var _assets_plugins_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_plugins_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_js_eva_icons_min_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../assets/js/eva-icons.min.js */ "./resources/assets/valex/assets/js/eva-icons.min.js");
/* harmony import */ var _assets_js_eva_icons_min_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_js_eva_icons_min_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_js_sticky_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../assets/js/sticky.js */ "./resources/assets/valex/assets/js/sticky.js");
/* harmony import */ var _assets_js_sticky_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_js_sticky_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_js_custom_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../assets/js/custom.js */ "./resources/assets/valex/assets/js/custom.js");
/* harmony import */ var _assets_js_custom_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_js_custom_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_plugins_side_menu_sidemenu_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../assets/plugins/side-menu/sidemenu.js */ "./resources/assets/valex/assets/plugins/side-menu/sidemenu.js");
/* harmony import */ var _assets_plugins_side_menu_sidemenu_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_plugins_side_menu_sidemenu_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_switcher_js_switcher_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../assets/switcher/js/switcher.js */ "./resources/assets/valex/assets/switcher/js/switcher.js");
/* harmony import */ var _assets_switcher_js_switcher_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_switcher_js_switcher_js__WEBPACK_IMPORTED_MODULE_11__);

 // import './../../assets/plugins/moment/moment.js'


 // import './../../assets/plugins/perfect-scrollbar/perfect-scrollbar.min.js'
// import './../../assets/plugins/perfect-scrollbar/p-scroll.js'








 // import './../../assets/plugins/mscrollbar/jquery.mCustomScrollbar.concat.min.js'

/***/ }),

/***/ 1:
/*!******************************************************************!*\
  !*** multi ./resources/assets/valex/js/pages/admin_dashboard.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\educations\resources\assets\valex\js\pages\admin_dashboard.js */"./resources/assets/valex/js/pages/admin_dashboard.js");


/***/ })

/******/ });