(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("engine", [], factory);
	else if(typeof exports === 'object')
		exports["engine"] = factory();
	else
		root["engine"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var tokenizer_1 = __webpack_require__(1);
var Engine = function () {
    function Engine() {}
    Engine.prototype.compile = function (template) {
        var tokens = tokenizer_1.default.getTokens(template);
        var functionBody = tokens.join(' + ');
        return {
            render: new Function('context', "with(context) {return " + functionBody + " }")
        };
    };
    return Engine;
}();
exports.default = new Engine();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var token_1 = __webpack_require__(2);
var startToken = '{{';
var endToken = '}}';
var Tokenizer = function () {
    function Tokenizer() {}
    Tokenizer.prototype.getTokens = function (templateString) {
        var str = templateString;
        var tokens = [];
        var index = str.indexOf(startToken);
        if (index == -1) {
            tokens.push(new token_1.default(templateString, 'text'));
            return tokens;
        }
        while ((index = str.indexOf(startToken)) != -1) {
            var textValue = str.slice(0, index);
            tokens.push(new token_1.default(textValue, 'text'));
            str = str.slice(index);
            index = str.indexOf(endToken);
            if (index == -1) {
                throw new Error('template error');
            }
            var variable = str.slice(2, index);
            tokens.push(new token_1.default(variable, 'variable'));
            str = str.slice(index + 2);
        }
        if (str.length > 0) {
            tokens.push(new token_1.default(str, 'text'));
        }
        return tokens;
    };
    return Tokenizer;
}();
exports.default = new Tokenizer();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
function quote(str) {
    return str.replace(/\"/g, '"');
}
var Token = function () {
    function Token(value, type) {
        this.value = value;
        this.type = type;
    }
    Token.prototype.toString = function () {
        if (this.type === 'text') {
            return "\"" + quote(this.value) + "\"";
        }
        return "(" + this.value + ")";
    };
    return Token;
}();
exports.default = Token;

/***/ })
/******/ ]);
});
//# sourceMappingURL=engine.js.map