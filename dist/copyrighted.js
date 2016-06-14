/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _html = __webpack_require__(1);
	
	var _html2 = _interopRequireDefault(_html);
	
	__webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	_html2.default._.fn.show = function () {
	  return this.each('style.display', null);
	};
	
	_html2.default._.fn.hide = function () {
	  return this.each('style.display', 'none');
	};
	
	var Copyrighted = function () {
	  _createClass(Copyrighted, null, [{
	    key: 'initialize',
	
	
	    /**
	     * Initialize the plugin.
	     */
	    value: function initialize() {
	      _html2.default.query('.post').only(function (el) {
	        return el.query('.tag-link').textContent === Copyrighted.options.tag;
	      }).each(function (el) {
	        return new Copyrighted(el);
	      });
	    }
	
	    /**
	     * Constructor.
	     */
	
	  }]);
	
	  function Copyrighted(el) {
	    _classCallCheck(this, Copyrighted);
	
	    this.approved = false;
	    this.root = el;
	    this.wrapper = this.root.query('.photo-wrapper');
	    this.backdrop = this.wrapper.add('div.copyrighted__mask');
	    this.modal = this.backdrop.add('div.copyrighted__inner');
	    this.message = this.modal.add('div.copyrighted__message');
	    this.button = this.modal.add('button.copyrighted__button');
	
	    if (!Copyrighted.options.rightClick) {
	      this.overlay = this.wrapper.add('div.copyrighted__overlay');
	    }
	
	    this.message.innerHTML = Copyrighted.options.message;
	    this.button.textContent = 'I get it!';
	
	    this.root.oncontextmenu = this.onContextMenu.bind(this);
	    this.button.onclick = this.onClick.bind(this);
	
	    this.backdrop.hide();
	  }
	
	  _createClass(Copyrighted, [{
	    key: 'onContextMenu',
	    value: function onContextMenu(e) {
	      if (!this.approved) {
	        e.preventDefault();
	        this.backdrop.show();
	      }
	    }
	  }, {
	    key: 'onClick',
	    value: function onClick() {
	      this.backdrop.hide();
	
	      if (Copyrighted.options.showOnce) {
	        this.approved = true;
	      }
	    }
	  }]);
	
	  return Copyrighted;
	}();
	
	Copyrighted.options = {
	  tag: 'copyright',
	  showOnce: true,
	  rightClick: true,
	  message: '\n      This post is copyrighted, you must credit the author if you want to repost somewhere.<br>\n      Don\'t be an asshole, thanks!\n    '
	};
	
	
	Copyrighted.initialize();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*! HTML - v0.12.1 - 2014-10-22
	* http://nbubna.github.io/HTML/
	* Copyright (c) 2014 ESHA Research; Licensed MIT, GPL */
	!function(a,b,c){"use strict";var d={version:"0.12.1",slice:Array.prototype.slice,list:function(a,b){return 1===a.length?d.node(a[0],b):((b||!a.each)&&(a.slice||(a=d.slice.call(a)),d.methods(a),a.length&&d.children(a[0],a)),a)},node:function(a,b){return(b||!a.each)&&(d.methods(a),d.children(a)),a},methods:function(a){for(var b in d.fn)d.define(a,b,d.fn[b])},children:function(a,b){for(var c=a._children={},e=0,f=a.childNodes.length;f>e;e++){var g=a.childNodes[e],h=d.key(g);(c[h]||(c[h]=[])).push(g),d.define(a,h),b&&d.define(b,h,void 0,a)}return c},key:function(a){return a.tagName?a.tagName.toLowerCase():"_other"},define:function(a,b,c,e){if(!(b in a))try{e=e||a,Object.defineProperty(a,b,void 0!==c?{value:c}:{get:function(){return e._children||d.children(e),d.list(e._children[b]||[])}})}catch(f){}},mutation:function(a){var b=a.target;delete b[b._internal?"_internal":"_children"]},unique:function(a,b,c){return c.indexOf(a)===b},fn:{each:function(a){var b,c,e=this.forEach?this:[this],f=[];"string"==typeof a&&(b=d.resolve[a]||a,c=d.slice.call(arguments,1),a=function(a,e){return d.resolve(b,a,c,e)});for(var g,h=0,i=e.length;i>h;h++)g=a.call(e,d.node(e[h]),h,e),(g||b&&void 0!==g)&&(g.forEach?f.push.apply(f,g):f.push(g));return f[0]||f[0]===!1?f[0]instanceof Node?d.list(f.filter(d.unique)):f:this},find:function(){try{a.console.warn("find() is deprecated. Please use query().")}finally{return this.query.apply(this,arguments)}},query:function(a,b){for(var c=this.forEach?this:[this],e=[],f=0,g=c.length;g>f&&(!b||e.length<b);f++)if(b===e.length+1){var h=c[f].querySelector(a);h&&e.push(h)}else for(var i=c[f].querySelectorAll(a),j=0,k=i.length;k>j&&(!b||e.length<b);j++)e.push(i[j]);return d.list(e)},only:function(a,b){var c=this.forEach?this:[this];return d.list(a>=0||0>a?c.slice(a,b||a+1||void 0):c.filter("function"==typeof a?a:function(b){return b.matches(a)}))},all:function(a,b,c){c=c||[];var f=this.forEach?this:[this];b&&c.push.apply(c,f);for(var g=0,h=f.length;h>g;g++){var i=f[g];a in i&&i[a]&&e.ify(i[a]).all(a,!0,c)}return d.list(c.filter(d.unique))}},resolve:function(a,b,c,e){var f=a,g=b;if(c=c.length?d.fill(c,e,g):null,f.indexOf(".")>0){for(var h=f.split(".");h.length>1&&(g=g[f=h.shift()]););g=g||b,f=g?h[0]:a}var i=g[f];if(void 0!==i){if("function"==typeof i)return i.apply(g,c);if(!c)return i;g[f]=c[0]}else{if(!c)return b.getAttribute(a);null===c[0]?b.removeAttribute(a):b.setAttribute(a,c[0])}},fill:function(a,b,c){for(var d=[],e=0,f=a.length;f>e;e++){var g=a[e],h=typeof g;d[e]="string"===h?g.replace(/\$\{i\}/g,b):"function"===h?g(c,b,a):g}return d}},e=d.node(b.documentElement);e._=d,d.define(e,"ify",function(a,b){return!a||"length"in a?d.list(a||[],b):d.node(a,b)});var f=Element.prototype,g="atchesSelector";d.define(f,"matches",f.m||f["webkitM"+g]||f["mozM"+g]||f["msM"+g]),c?new c(function(a){a.forEach(d.mutation)}).observe(e,{childList:!0,subtree:!0}):b.addEventListener("DOMSubtreeModified",d.mutation), true?!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return e}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"undefined"!=typeof module&&module.exports?module.exports=e:a[e.getAttribute("data-html-reference")||"HTML"]=e,b.addEventListener("DOMContentLoaded",function(){d.node(e,!0)})}(window,document,window.MutationObserver),function(a,b){"use strict";var c=b.fn.add=function(a,b){return this.each(function(d){return c.all(d,a,b)})};c.all=function(a,b,d){if("string"==typeof b)return c.create(a,b,d);if(!(b instanceof Node)&&"length"in b){for(var e=[],f=0,g=b.length;g>f;f++)e.push(c.all(a,b[f],d));return e}return c.insert(a,b,d),b},c.create=function(b,d,e){return c.insert(b,a.createElement(d),e)},c.insert=function(a,d,e){var f=c.find(a,e);return f?a.insertBefore(d,f):a.appendChild(d),b.updated(a),d},c.find=function(a,b){switch(typeof b){case"string":return a[b+"Child"];case"number":return a.children[b];case"object":return b;case"function":return b.call(a,a)}},b.updated=function(a){a._internal=!0,b.children(a)},b.fn.remove=function(a){return this.each(function(c){var d=c.parentNode;return d&&(d.removeChild(c),b.updated(d),a)?d:void 0})}}(document,document.documentElement._),function(a,b){"use strict";var c=b.fn.add;c.create=function(b,d,e){var f=d.match(c.emmetRE()).filter(Boolean),g=a.createDocumentFragment(),h=a.createElement(f[0]);g.appendChild(h);for(var i=1,j=f.length;j>i;i++){var k=f[i];h=c.emmet[k.charAt(0)].call(h,k.substr(1),g)||h}return c.insert(b,g,e),h},c.emmetRE=function(){var a=Object.keys(c.emmet).join(""),b="[a-z"+a+']{0,1}(?:"[^"]*"|[^"'+a+"]){0,}";return new RegExp(b,"g")},c.emmet={"#":function(a){this.id=a},".":function(a){var b=this.getAttribute("class")||"";b=b+(b?" ":"")+a,b.length&&this.setAttribute("class",b)},"[":function(a){a=a.substr(0,a.length-1).match(/(?:[^\s"]+|"[^"]*")+/g);for(var b=0,c=a.length;c>b;b++){var d=a[b].split("=");this.setAttribute(d[0],(d[1]||"").replace(/"/g,""))}},">":function(b){if(b){var c=a.createElement(b);return this.appendChild(c),c}return this},"+":function(a,b){return c.emmet[">"].call(this.parentNode||b,a)},"*":function(a){for(var b=this.parentNode,c=[this],d=1;a>d;d++)c.push(this.cloneNode(!0)),b.appendChild(c[d]);return c},"^":function(a,b){return c.emmet["+"].call(this.parentNode||b,a,b)},"{":function(b){this.appendChild(a.createTextNode(b.substr(0,b.length-1)))}}}(document,document.documentElement._);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/stylus-loader/index.js!./../node_modules/autoprefixer-loader/index.js!./app.styl", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/stylus-loader/index.js!./../node_modules/autoprefixer-loader/index.js!./app.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".photo-wrapper {\n  position: relative;\n}\n.copyrighted__overlay,\n.copyrighted__inner {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.copyrighted__overlay {\n  z-index: 100;\n}\n.copyrighted__inner {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  background-color: rgba(0,0,0,0.9);\n  color: #fff;\n  cursor: default;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  text-align: center;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 110;\n}\n.copyrighted__message {\n  font-size: 2em;\n  margin-bottom: 40px;\n}\n.copyrighted__button {\n  background-color: #f44336;\n  border: none;\n  border-radius: 3px;\n  color: #fff;\n  font-weight: bold;\n  outline: none;\n  padding: 1em 2em;\n  text-transform: uppercase;\n}\n.copyrighted__button:hover {\n  background-color: #ea1c0d;\n}\n", ""]);
	
	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);