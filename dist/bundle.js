/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _constants_tetrominoes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _functions_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _currentValues__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _functions_tetrimones__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);






var gridItems = _functions_grid__WEBPACK_IMPORTED_MODULE_3__.elements;
(0,_currentValues__WEBPACK_IMPORTED_MODULE_4__.setValue)("elements", gridItems);
document.querySelector("#start-button").addEventListener("click", function () {
  var startTetrisInterval = function startTetrisInterval() {
    (0,_functions_tetrimones__WEBPACK_IMPORTED_MODULE_5__.start)();
  };

  var timer = setInterval(startTetrisInterval, 800);
  (0,_currentValues__WEBPACK_IMPORTED_MODULE_4__.setValue)("timer", timer);
  (0,_functions_tetrimones__WEBPACK_IMPORTED_MODULE_5__.bindEvents)();
});

/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),
/* 2 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n    display: block;\n}\nbody {\n    line-height: 1;\n}\nol, ul {\n    list-style: none;\n}\nblockquote, q {\n    quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n    content: '';\n    content: none;\n}\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 4 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),
/* 6 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n}\n\n#start-button {\n    width: 200px;\n    background: black;\n    color: #fff;\n    height: 60px;\n    margin: 10px auto;\n    text-align: center;\n    font-size: 24px;\n    line-height: 48px;\n    cursor: pointer;\n}\n\n#tetris-grid {\n    width: 300px;\n    height: 600px;\n    margin: 100px auto;\n    background: #d6efc7;\n}\n\n.tetris-grid-item {\n    width: 30px;\n    height: 30px;\n    display: inline-block;\n    vertical-align: middle;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n}\n\n.tetris-grid-item.filled {\n    background: #184d47;\n}\n\n.taken {\n    border:none;\n    width: 30px;\n    height: 30px;\n    display: inline-block;\n    vertical-align: middle;\n}\n\n#score {\n    width: 200px;\n    margin: 0 auto;\n    text-align: center;\n    font-size: 32px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tetrominoes": () => /* binding */ tetrominoes
/* harmony export */ });
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);

var lTetromino = [[1, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH + 1, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH * 2 + 1, 2], [_grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH + 1, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH + 2, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH * 2 + 2], [1, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH + 1, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH * 2 + 1, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH * 2], [_grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH * 2, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH * 2 + 1, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH * 2 + 2]];
var zTetromino = [[0, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH + 1, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH * 2 + 1], [_grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH + 1, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH + 2, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH * 2, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH * 2 + 1], [0, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH + 1, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH * 2 + 1], [_grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH + 1, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH + 2, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH * 2, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH * 2 + 1]];
var tTetromino = [[1, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH + 1, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH + 2], [1, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH + 1, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH + 2, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH * 2 + 1], [_grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH + 1, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH + 2, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH * 2 + 1], [1, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH + 1, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH * 2 + 1]];
var oTetromino = [[0, 1, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH + 1], [0, 1, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH + 1], [0, 1, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH + 1], [0, 1, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH + 1]];
var iTetromino = [[1, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH + 1, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH * 2 + 1, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH * 3 + 1], [_grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH + 1, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH + 2, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH + 3], [1, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH + 1, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH * 2 + 1, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH * 3 + 1], [_grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH + 1, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH + 2, _grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH + 3]];
var tetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GRID_WIDTH": () => /* binding */ GRID_WIDTH,
/* harmony export */   "GRID_SIZE": () => /* binding */ GRID_SIZE
/* harmony export */ });
var GRID_WIDTH = 10;
var GRID_HEIGHT = 20;
var GRID_SIZE = GRID_WIDTH * GRID_HEIGHT;

/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGrid": () => /* binding */ createGrid,
/* harmony export */   "elements": () => /* binding */ elements
/* harmony export */ });
/* harmony import */ var _constants_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);

var $tetrisRootElement = document.querySelector("#tetris-grid");
var createGrid = function createGrid() {
  for (var i = 0; i < _constants_grid__WEBPACK_IMPORTED_MODULE_0__.GRID_SIZE; i++) {
    var singLeBlock = document.createElement("div");
    singLeBlock.classList.add("tetris-grid-item");
    $tetrisRootElement.appendChild(singLeBlock);
  }

  for (var j = 0; j < _constants_grid__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH; j++) {
    var extraBlock = document.createElement("div");
    extraBlock.classList.add("tetris-grid-item");
    extraBlock.classList.add("taken");
    $tetrisRootElement.appendChild(extraBlock);
  }

  return Array.from(document.querySelectorAll(".tetris-grid-item"));
};
var elements = createGrid();

/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currentValues": () => /* binding */ currentValues,
/* harmony export */   "setValue": () => /* binding */ setValue,
/* harmony export */   "getCurrentValues": () => /* binding */ getCurrentValues
/* harmony export */ });
/* harmony import */ var _functions_tetrimones__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _functions_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);


var currentValues = {
  position: 4,
  rotation: 0,
  tetrominoe: (0,_functions_tetrimones__WEBPACK_IMPORTED_MODULE_0__.getRandomTetrominoe)(),
  elements: null,
  timer: null,
  score: 0
};
var setValue = function setValue(key, value) {
  currentValues[key] = value;
};
var getCurrentValues = function getCurrentValues() {
  return currentValues;
};

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomTetrominoe": () => /* binding */ getRandomTetrominoe,
/* harmony export */   "unDraw": () => /* binding */ unDraw,
/* harmony export */   "draw": () => /* binding */ draw,
/* harmony export */   "start": () => /* binding */ start,
/* harmony export */   "checkShouldStop": () => /* binding */ checkShouldStop,
/* harmony export */   "checkScore": () => /* binding */ checkScore,
/* harmony export */   "checkIsGameOver": () => /* binding */ checkIsGameOver,
/* harmony export */   "moveLeft": () => /* binding */ moveLeft,
/* harmony export */   "moveRight": () => /* binding */ moveRight,
/* harmony export */   "rotate": () => /* binding */ rotate,
/* harmony export */   "bindEvents": () => /* binding */ bindEvents,
/* harmony export */   "handleControls": () => /* binding */ handleControls
/* harmony export */ });
/* harmony import */ var _constants_tetrominoes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _currentValues__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _constants_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);



var getRandomTetrominoe = function getRandomTetrominoe() {
  var randomNum = Math.floor(Math.random() * _constants_tetrominoes__WEBPACK_IMPORTED_MODULE_0__.tetrominoes.length);
  return _constants_tetrominoes__WEBPACK_IMPORTED_MODULE_0__.tetrominoes[4];
};
var unDraw = function unDraw() {
  var _getCurrentValues = (0,_currentValues__WEBPACK_IMPORTED_MODULE_1__.getCurrentValues)(),
      position = _getCurrentValues.position,
      rotation = _getCurrentValues.rotation,
      tetrominoe = _getCurrentValues.tetrominoe,
      elements = _getCurrentValues.elements;

  tetrominoe[rotation].forEach(function (blockIndex) {
    elements[position + blockIndex].classList.remove("filled");
  });
};
var draw = function draw() {
  var _getCurrentValues2 = (0,_currentValues__WEBPACK_IMPORTED_MODULE_1__.getCurrentValues)(),
      position = _getCurrentValues2.position,
      rotation = _getCurrentValues2.rotation,
      tetrominoe = _getCurrentValues2.tetrominoe,
      elements = _getCurrentValues2.elements;

  tetrominoe[rotation].forEach(function (blockIndex) {
    elements[position + blockIndex].classList.add("filled");
  });
};
var start = function start() {
  var _getCurrentValues3 = (0,_currentValues__WEBPACK_IMPORTED_MODULE_1__.getCurrentValues)(),
      position = _getCurrentValues3.position;

  if (document.querySelector(".filled")) {
    unDraw();
    (0,_currentValues__WEBPACK_IMPORTED_MODULE_1__.setValue)("position", position + _constants_grid__WEBPACK_IMPORTED_MODULE_2__.GRID_WIDTH);
  }

  draw();
  checkShouldStop();
};
var checkShouldStop = function checkShouldStop() {
  var _getCurrentValues4 = (0,_currentValues__WEBPACK_IMPORTED_MODULE_1__.getCurrentValues)(),
      position = _getCurrentValues4.position,
      rotation = _getCurrentValues4.rotation,
      tetrominoe = _getCurrentValues4.tetrominoe,
      elements = _getCurrentValues4.elements;

  var isLast = tetrominoe[rotation].some(function (index) {
    return elements[position + index + _constants_grid__WEBPACK_IMPORTED_MODULE_2__.GRID_WIDTH].classList.contains("taken");
  });

  if (isLast) {
    tetrominoe[rotation].forEach(function (index) {
      return elements[position + index].classList.add("taken");
    });
    (0,_currentValues__WEBPACK_IMPORTED_MODULE_1__.setValue)("tetrominoe", getRandomTetrominoe());
    (0,_currentValues__WEBPACK_IMPORTED_MODULE_1__.setValue)("position", 4);
    draw();
    checkScore();
    checkIsGameOver();
  }
};
var checkScore = function checkScore() {
  var _getCurrentValues5 = (0,_currentValues__WEBPACK_IMPORTED_MODULE_1__.getCurrentValues)(),
      position = _getCurrentValues5.position,
      rotation = _getCurrentValues5.rotation,
      tetrominoe = _getCurrentValues5.tetrominoe,
      elements = _getCurrentValues5.elements,
      timer = _getCurrentValues5.timer,
      score = _getCurrentValues5.score;

  for (var currentIndex = 0; currentIndex < _constants_grid__WEBPACK_IMPORTED_MODULE_2__.GRID_SIZE - 1; currentIndex += _constants_grid__WEBPACK_IMPORTED_MODULE_2__.GRID_WIDTH) {
    var row = [currentIndex, currentIndex + 1, currentIndex + 2, currentIndex + 3, currentIndex + 4, currentIndex + 5, currentIndex + 6, currentIndex + 7, currentIndex + 8, currentIndex + 9];
    console.log("Row", row);

    if (row.every(function (index) {
      return elements[index].classList.contains("taken");
    })) {
      console.log("Hepsi taken", row);
      var currentScore = score + 10;
      (0,_currentValues__WEBPACK_IMPORTED_MODULE_1__.setValue)("score", currentScore);
      document.getElementById("score").innerHTML = "Score: ".concat(currentScore);
      row.forEach(function (index) {
        elements[index].classList.remove("taken");
        elements[index].classList.remove("filled");
      });
      var removedElements = elements.splice(currentIndex, _constants_grid__WEBPACK_IMPORTED_MODULE_2__.GRID_WIDTH);
      console.log(removedElements);
      var newEls = removedElements.concat(elements);
      console.log(newEls);
      (0,_currentValues__WEBPACK_IMPORTED_MODULE_1__.setValue)("elements", newEls);
      newEls.forEach(function (cell) {
        return document.querySelector("#tetris-grid").appendChild(cell);
      });
    }
  }
};
var checkIsGameOver = function checkIsGameOver() {
  var _getCurrentValues6 = (0,_currentValues__WEBPACK_IMPORTED_MODULE_1__.getCurrentValues)(),
      position = _getCurrentValues6.position,
      rotation = _getCurrentValues6.rotation,
      tetrominoe = _getCurrentValues6.tetrominoe,
      elements = _getCurrentValues6.elements,
      timer = _getCurrentValues6.timer;

  if (tetrominoe[rotation].some(function (index) {
    return elements[position + index].classList.contains("taken");
  })) {
    // GAME OVER
    clearInterval(timer);
    document.getElementById("score").innerHTML = "GAME OVER!";
  }
};
var moveLeft = function moveLeft() {
  var _getCurrentValues7 = (0,_currentValues__WEBPACK_IMPORTED_MODULE_1__.getCurrentValues)(),
      tetrominoe = _getCurrentValues7.tetrominoe,
      rotation = _getCurrentValues7.rotation,
      position = _getCurrentValues7.position,
      elements = _getCurrentValues7.elements;

  unDraw();
  var isLeftBorder = tetrominoe[rotation].some(function (index) {
    return (position + index) % _constants_grid__WEBPACK_IMPORTED_MODULE_2__.GRID_WIDTH === 0;
  });

  if (!isLeftBorder) {
    (0,_currentValues__WEBPACK_IMPORTED_MODULE_1__.setValue)("position", position - 1);
  }

  draw();
};
var moveRight = function moveRight() {
  var _getCurrentValues8 = (0,_currentValues__WEBPACK_IMPORTED_MODULE_1__.getCurrentValues)(),
      tetrominoe = _getCurrentValues8.tetrominoe,
      rotation = _getCurrentValues8.rotation,
      position = _getCurrentValues8.position,
      elements = _getCurrentValues8.elements;

  unDraw();
  var isRightBorder = tetrominoe[rotation].some(function (index) {
    return (position + index) % _constants_grid__WEBPACK_IMPORTED_MODULE_2__.GRID_WIDTH === _constants_grid__WEBPACK_IMPORTED_MODULE_2__.GRID_WIDTH - 1;
  });

  if (!isRightBorder) {
    (0,_currentValues__WEBPACK_IMPORTED_MODULE_1__.setValue)("position", position + 1);
  }

  draw();
};
var rotate = function rotate() {
  var _getCurrentValues9 = (0,_currentValues__WEBPACK_IMPORTED_MODULE_1__.getCurrentValues)(),
      tetrominoe = _getCurrentValues9.tetrominoe,
      rotation = _getCurrentValues9.rotation;

  unDraw();
  (0,_currentValues__WEBPACK_IMPORTED_MODULE_1__.setValue)("rotation", rotation + 1);

  if (rotation + 1 === tetrominoe.length) {
    (0,_currentValues__WEBPACK_IMPORTED_MODULE_1__.setValue)("rotation", 0);
  }

  draw();
};
var bindEvents = function bindEvents() {
  document.addEventListener("keyup", function (e) {
    handleControls(e);
  });
};
var handleControls = function handleControls(e) {
  if (e.keyCode === 37) {
    moveLeft();
  }

  if (e.keyCode === 39) {
    moveRight();
  }

  if (e.keyCode === 38) {
    rotate();
  }

  if (e.keyCode === 40) {
    start();
  }
};

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__(0);
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;