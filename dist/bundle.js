/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --main-text-color: #404040;\n    --box-color: #F9F9F9;\n    --light-info-color: #8E8E8E;\n    --colored: #61a0ff;\n}\n\n* {\n    font-family: 'Inter', sans-serif;\n    font-weight: 500;\n    margin: 0;\n    padding: 0;\n    color: var(--main-text-color);\n}\n\n.content {\n    height: 100vh;\n    width: 100vw;\n    display: grid;\n    grid-template-columns: 350px 1fr;\n}\n\n.sidebar {\n    padding: 0 30px;\n    border-right: 2px solid #F2F2F2;\n}\n\n.inbox {\n    background-color: var(--box-color);\n    border-radius: 15px;\n    margin-top: 100px;\n    padding: 12px 0;\n    text-align: center;\n    color: var(--main-text-color);\n    font-size: 18px;\n}\n\n.projects {\n    margin-top: 80px;\n}\n\n.light-text {\n    color: var(--light-info-color);\n    font-size: 13px;\n}\n\n.project-list-head {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.project-list-head .creation {\n    text-decoration: underline;\n}\n\n.project-list-head input {\n    width: 170px;\n    border: none;\n    color: var(--colored);\n    text-align: end;\n    outline: none;\n}\n\n.project-list {\n    font-size: 18px;\n    margin-top: 10px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.project {\n    display: flex;\n    align-items: center;\n    padding-left: 10px;\n    gap: 20px;\n}\n\n.project .colored-box {\n    background-color: #FF6B6B;\n    height: 10px;\n    width: 10px;\n}\n\n.main-content {\n    display: flex;\n    flex-direction: column;\n    min-width: 800px;\n    padding: 60px 100px;\n}\n\n.main-content h1 {\n    font-size: 40px;\n    margin-left: 40px;\n}\n\n.main-content .task-list {\n    margin-top: 60px;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.task-list div {\n    background-color: var(--box-color);\n    display: grid;\n    grid-template-columns: 80px 75% calc(25% - 80px);\n    align-items: center;\n    width: 100%;\n    height: 50px;\n    border-radius: 15px;\n}\n\n.task-list .date {\n    margin-right: 20px;\n    justify-self: end;\n    color: var(--light-info-color);\n}\n\n.main-content .light-text {\n    margin-top: 15px;\n    align-self: center;\n}\n\n\n.new-task {\n    z-index: 100;\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n}\n\n.new-task .form {\n    padding: 0 40px 10px 40px;\n    z-index: 100;\n    height: 180px;\n    width: 450px;\n    position: absolute;\n    background-color: var(--box-color);\n    border: 4px solid #61a0ff;\n    border-radius: 15px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr;\n    align-items: center;\n    justify-items: center;\n}\n\nh2 {\n    grid-column: span 2;\n}\n\n#task-description {\n    grid-column: span 2;\n    height: 30px;\n    width: 100%;\n    border-radius: 10px;\n    border: 2px solid var(--light-info-color);\n}\n\n#task-date {\n    height: 30px;\n    border-radius: 10px;\n    border: 2px solid var(--light-info-color);\n    justify-self: start;\n    text-align: center;\n}\n\n.form button {\n    height: 30px;\n    width: 100px;\n    border: 4px solid var(--colored);\n    border-radius: 10px;\n    background-color: white;\n    color: var(--colored);\n    justify-self: end;\n}\n.hidden {\n    visibility: hidden;\n}\n\n.blur {\n    filter: blur(5px);\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAEA;IACI,0BAA0B;IAC1B,oBAAoB;IACpB,2BAA2B;IAC3B,kBAAkB;AACtB;;AAEA;IACI,gCAAgC;IAChC,gBAAgB;IAChB,SAAS;IACT,UAAU;IACV,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,gCAAgC;AACpC;;AAEA;IACI,eAAe;IACf,+BAA+B;AACnC;;AAEA;IACI,kCAAkC;IAClC,mBAAmB;IACnB,iBAAiB;IACjB,eAAe;IACf,kBAAkB;IAClB,6BAA6B;IAC7B,eAAe;AACnB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,8BAA8B;IAC9B,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,qBAAqB;IACrB,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,kCAAkC;IAClC,aAAa;IACb,gDAAgD;IAChD,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,8BAA8B;AAClC;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;;;AAGA;IACI,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,kCAAkC;IAClC,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;IACb,8BAA8B;IAC9B,+BAA+B;IAC/B,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,yCAAyC;AAC7C;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,yCAAyC;IACzC,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,gCAAgC;IAChC,mBAAmB;IACnB,uBAAuB;IACvB,qBAAqB;IACrB,iBAAiB;AACrB;AACA;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');\n\n:root {\n    --main-text-color: #404040;\n    --box-color: #F9F9F9;\n    --light-info-color: #8E8E8E;\n    --colored: #61a0ff;\n}\n\n* {\n    font-family: 'Inter', sans-serif;\n    font-weight: 500;\n    margin: 0;\n    padding: 0;\n    color: var(--main-text-color);\n}\n\n.content {\n    height: 100vh;\n    width: 100vw;\n    display: grid;\n    grid-template-columns: 350px 1fr;\n}\n\n.sidebar {\n    padding: 0 30px;\n    border-right: 2px solid #F2F2F2;\n}\n\n.inbox {\n    background-color: var(--box-color);\n    border-radius: 15px;\n    margin-top: 100px;\n    padding: 12px 0;\n    text-align: center;\n    color: var(--main-text-color);\n    font-size: 18px;\n}\n\n.projects {\n    margin-top: 80px;\n}\n\n.light-text {\n    color: var(--light-info-color);\n    font-size: 13px;\n}\n\n.project-list-head {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.project-list-head .creation {\n    text-decoration: underline;\n}\n\n.project-list-head input {\n    width: 170px;\n    border: none;\n    color: var(--colored);\n    text-align: end;\n    outline: none;\n}\n\n.project-list {\n    font-size: 18px;\n    margin-top: 10px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.project {\n    display: flex;\n    align-items: center;\n    padding-left: 10px;\n    gap: 20px;\n}\n\n.project .colored-box {\n    background-color: #FF6B6B;\n    height: 10px;\n    width: 10px;\n}\n\n.main-content {\n    display: flex;\n    flex-direction: column;\n    min-width: 800px;\n    padding: 60px 100px;\n}\n\n.main-content h1 {\n    font-size: 40px;\n    margin-left: 40px;\n}\n\n.main-content .task-list {\n    margin-top: 60px;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.task-list div {\n    background-color: var(--box-color);\n    display: grid;\n    grid-template-columns: 80px 75% calc(25% - 80px);\n    align-items: center;\n    width: 100%;\n    height: 50px;\n    border-radius: 15px;\n}\n\n.task-list .date {\n    margin-right: 20px;\n    justify-self: end;\n    color: var(--light-info-color);\n}\n\n.main-content .light-text {\n    margin-top: 15px;\n    align-self: center;\n}\n\n\n.new-task {\n    z-index: 100;\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n}\n\n.new-task .form {\n    padding: 0 40px 10px 40px;\n    z-index: 100;\n    height: 180px;\n    width: 450px;\n    position: absolute;\n    background-color: var(--box-color);\n    border: 4px solid #61a0ff;\n    border-radius: 15px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr;\n    align-items: center;\n    justify-items: center;\n}\n\nh2 {\n    grid-column: span 2;\n}\n\n#task-description {\n    grid-column: span 2;\n    height: 30px;\n    width: 100%;\n    border-radius: 10px;\n    border: 2px solid var(--light-info-color);\n}\n\n#task-date {\n    height: 30px;\n    border-radius: 10px;\n    border: 2px solid var(--light-info-color);\n    justify-self: start;\n    text-align: center;\n}\n\n.form button {\n    height: 30px;\n    width: 100px;\n    border: 4px solid var(--colored);\n    border-radius: 10px;\n    background-color: white;\n    color: var(--colored);\n    justify-self: end;\n}\n.hidden {\n    visibility: hidden;\n}\n\n.blur {\n    filter: blur(5px);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scripts/Inbox.js":
/*!******************************!*\
  !*** ./src/scripts/Inbox.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INBOX": () => (/* binding */ INBOX),
/* harmony export */   "inboxDOM": () => (/* binding */ inboxDOM)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/scripts/localStorage.js");


//save Inbox format
let INBOX;
if(localStorage.INBOX == undefined) {
    INBOX = {title: "Inbox", tasklist: []}
    localStorage.INBOX = JSON.stringify(INBOX)
} else {
    INBOX = JSON.parse(localStorage.INBOX)
}


const inboxDOM = (() => {
    const viewInbox = function() {
        const title = document.querySelector('h1')
        title.innerText = INBOX.title
    
        const taskListing = document.querySelector('.task-list')
        taskListing.dataset.project = 'INBOX'
        taskListing.innerHTML = ""
        for (const key in INBOX.tasklist) {
            if (Object.hasOwnProperty.call(INBOX.tasklist, key)) {
                const task = INBOX.tasklist[key];
    
                const taskDiv = document.createElement('div')
                taskDiv.classList.add(`task-${key}`)
                taskListing.appendChild(taskDiv)
    
                const checkBox = document.createElement('input')
                checkBox.type = "checkbox"
                taskDiv.appendChild(checkBox)
    
                const taskTitle = document.createElement('p')
                taskTitle.innerText = task.title
                taskDiv.appendChild(taskTitle)
    
                const taskDate = document.createElement('p')
                taskDate.innerText = task.dueDate
                taskDate.classList.add('date')
                taskDiv.appendChild(taskDate)


                checkBox.addEventListener('change', (e) => {
                    taskDiv.remove()
                    INBOX.tasklist.splice(key, 1)
                    _localStorage__WEBPACK_IMPORTED_MODULE_0__.localStorageLogic.updateLocalStorageList()
                    viewInbox()
                })
    
            }
        }
    }
    return {viewInbox}
}) ()

//sidebar Inbox button
const inboxButton  = document.querySelector('.inbox')
inboxButton.addEventListener('click', (e) => {
    inboxDOM.viewInbox()
})



/***/ }),

/***/ "./src/scripts/Project.js":
/*!********************************!*\
  !*** ./src/scripts/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project),
/* harmony export */   "projectDOM": () => (/* binding */ projectDOM),
/* harmony export */   "projectList": () => (/* binding */ projectList)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/scripts/localStorage.js");


// Project creation with all tasks inside the project
class Project {
    tasklist = []
    constructor(title) {
        this.title = title
    }
}


//create default list of all projects and save to localStorage - check if localstorage is already
let projectList;

if(localStorage.projectList == undefined) {
    projectList = []
    localStorage.projectList = JSON.stringify(projectList)
} else {
    projectList = JSON.parse(localStorage.projectList)
}


//just for testing:
/**
let projectList = []
localStorage.projectList = JSON.stringify(projectList)
 */



//load projects in sidebar via localstorage
const projectDOM = (() => {
    const loadProjectListing = function() {
        const projectListing = document.querySelector('.project-list')
        projectListing.innerHTML = ""
        for (const key in projectList) {
            if (Object.hasOwnProperty.call(projectList, key)) {
                const project = projectList[key];
    
                const projectDiv = document.createElement('div')
                projectDiv.classList.add('project')
                projectDiv.dataset.number = key
                projectListing.appendChild(projectDiv)
    
                const box = document.createElement('div')
                box.classList.add('colored-box')
                projectDiv.appendChild(box)
    
                box.addEventListener('click', (e) => {
                    console.log(key)
                    projectLogic.removeProject(project)

                })
    
                const title = document.createElement('p')
                title.innerText = project.title
                projectDiv.appendChild(title)

                title.addEventListener('click', (e) => {
                    viewProjectTab(project, projectDiv.dataset.number)
                })
            }
        }
    }

    //view specific project Tabs with every Task inside a project
    const viewProjectTab = function(project, dataNumber) {

        const title = document.querySelector('h1')
        title.innerText = project.title

        const taskListing = document.querySelector('.task-list')
        taskListing.innerHTML = ""
        taskListing.dataset.project = dataNumber
        for (const key in project.tasklist) {
            if (Object.hasOwnProperty.call(project.tasklist, key)) {
                const task = project.tasklist[key];

                const taskDiv = document.createElement('div')
                taskDiv.classList.add(`task-${key}`)
                taskListing.appendChild(taskDiv)

                const checkBox = document.createElement('input')
                checkBox.type = "checkbox"
                taskDiv.appendChild(checkBox)

                const taskTitle = document.createElement('p')
                taskTitle.innerText = task.title
                taskDiv.appendChild(taskTitle)

                const taskDate = document.createElement('p')
                taskDate.innerText = task.dueDate
                taskDate.classList.add('date')
                taskDiv.appendChild(taskDate)


                checkBox.addEventListener('change', (e) => {
                    taskDiv.remove()
                    project.tasklist.splice(key, 1)
                    _localStorage__WEBPACK_IMPORTED_MODULE_0__.localStorageLogic.updateLocalStorageList()
                    viewProjectTab(project, dataNumber)
                })

            }
        }
    }

    //Create Project + -> Input (press enter to create new Project)
    const toggleProjectCreateButton = function(state) {
        const projectListHead = document.querySelector('.project-list-head')
        console.log(projectListHead.lastElementChild)
        projectListHead.lastElementChild.remove()

        if(state == "input") {
            const projectInput = document.createElement('input')
            projectInput.type = "text"

            projectListHead.append(projectInput)

            projectInput.focus()

            projectInput.addEventListener('focusout', (e) => {
                toggleProjectCreateButton("text")
            })

            projectInput.addEventListener('keypress', (e) => {
                if(e.key == "Enter") {
                    projectLogic.addProject(projectInput.value)
                    projectInput.blur()
                }
                
            })
        } else {
            const projectCreateText = document.createElement('p')
            projectCreateText.classList.add("light-text")
            projectCreateText.classList.add("creation")
            projectCreateText.innerText = "Create Project +"

            projectListHead.append(projectCreateText)

            const createProjectButton = document.querySelector('.creation')
            createProjectButton.addEventListener('click', (e) => {
                projectDOM.toggleProjectCreateButton("input")
            })
        }
        
    }

    
    return {loadProjectListing, viewProjectTab, toggleProjectCreateButton}
})()


//updated in local storage and array list
const projectLogic = (() => {
    const removeProject = function(project) {
        _localStorage__WEBPACK_IMPORTED_MODULE_0__.localStorageLogic.removeFromStorageList(project)
        projectDOM.loadProjectListing()
    }
    const addProject = function(title) {
        _localStorage__WEBPACK_IMPORTED_MODULE_0__.localStorageLogic.addToStorageList(new Project(title))
        projectDOM.loadProjectListing()
    }

    return {removeProject, addProject}
})()



/***/ }),

/***/ "./src/scripts/Task.js":
/*!*****************************!*\
  !*** ./src/scripts/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _Inbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Inbox */ "./src/scripts/Inbox.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ "./src/scripts/Project.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage */ "./src/scripts/localStorage.js");




//task creation with description and due date
class Task {
    constructor(title, dueDate) {
        this.title = title
        this.dueDate = dueDate
    }
}

//Create Task -> popup window
const createTaskButton = document.querySelector('.main-content').lastElementChild

createTaskButton.addEventListener('click', (e) => {
    taskDOM.viewTaskPopUp()
    document.querySelector('#task-description').focus()
})


//submit to create new task (saved in storage)
const submitButton = document.querySelector('[type="button"]')
submitButton.addEventListener('click', (e) => {
    const title = document.querySelector('#task-description').value
    const date = document.querySelector('#task-date').value
    console.log(date)
    taskLogic.addTask(title, date)
    taskDOM.closeTaskPopUp()
    _localStorage__WEBPACK_IMPORTED_MODULE_2__.localStorageLogic.updateLocalStorageList()
    document.querySelector('#task-description').value = ""
    document.querySelector('#task-date').value = ""

})



const taskDOM = (() => {
    const viewTaskPopUp = function() {
        const content = document.querySelector('.content')
        content.classList.add('blur')

        const taskField = document.querySelector('.new-task')
        taskField.classList.remove('hidden')
    }

    const closeTaskPopUp = function() {
        const content = document.querySelector('.content')
        content.classList.remove('blur')

        const taskField = document.querySelector('.new-task')
        taskField.classList.add('hidden')
    }

    return { viewTaskPopUp, closeTaskPopUp}
})()

//updated in local storage
const taskLogic = (() => {
    const addTask = function(title, date) {
        const dataProject = document.querySelector('.task-list').dataset.project
        //Inbox and other projects stored differently because INBOX is permanant
        if(dataProject == "INBOX") {
            _Inbox__WEBPACK_IMPORTED_MODULE_0__.INBOX.tasklist.push(new Task(title, date))
            _Inbox__WEBPACK_IMPORTED_MODULE_0__.inboxDOM.viewInbox()
        } else {
            _Project__WEBPACK_IMPORTED_MODULE_1__.projectList[dataProject].tasklist.push(new Task(title, date))
            _Project__WEBPACK_IMPORTED_MODULE_1__.projectDOM.viewProjectTab(_Project__WEBPACK_IMPORTED_MODULE_1__.projectList[dataProject], dataProject)
        }
    }
    return {addTask}
})()

/***/ }),

/***/ "./src/scripts/localStorage.js":
/*!*************************************!*\
  !*** ./src/scripts/localStorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "localStorageLogic": () => (/* binding */ localStorageLogic)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/scripts/Project.js");
/* harmony import */ var _Inbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Inbox */ "./src/scripts/Inbox.js");



const localStorageLogic = (() => {
    const addToStorageList = function(project) {
        _Project__WEBPACK_IMPORTED_MODULE_0__.projectList.push(project)
        localStorage.projectList = JSON.stringify(_Project__WEBPACK_IMPORTED_MODULE_0__.projectList)
    }
    const removeFromStorageList = function(project) {
        for (const key in _Project__WEBPACK_IMPORTED_MODULE_0__.projectList) {
            if (Object.hasOwnProperty.call(_Project__WEBPACK_IMPORTED_MODULE_0__.projectList, key)) {
                const element = _Project__WEBPACK_IMPORTED_MODULE_0__.projectList[key];
                if(element == project) {
                    _Project__WEBPACK_IMPORTED_MODULE_0__.projectList.splice(key, 1)
                    localStorage.projectList = JSON.stringify(_Project__WEBPACK_IMPORTED_MODULE_0__.projectList)
                }
            }
        }
    }

    const updateLocalStorageList = function() {
        localStorage.INBOX = JSON.stringify(_Inbox__WEBPACK_IMPORTED_MODULE_1__.INBOX)
        localStorage.projectList = JSON.stringify(_Project__WEBPACK_IMPORTED_MODULE_0__.projectList)
    }

    return {addToStorageList, removeFromStorageList, updateLocalStorageList}
})()




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _scripts_Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/Project */ "./src/scripts/Project.js");
/* harmony import */ var _scripts_Inbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/Inbox */ "./src/scripts/Inbox.js");
/* harmony import */ var _scripts_Task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/Task */ "./src/scripts/Task.js");
/* harmony import */ var _scripts_localStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/localStorage */ "./src/scripts/localStorage.js");







//sidebar with projects
_scripts_Project__WEBPACK_IMPORTED_MODULE_1__.projectDOM.loadProjectListing()

//activate "Create Project +" function
_scripts_Project__WEBPACK_IMPORTED_MODULE_1__.projectDOM.toggleProjectCreateButton("text")

//on page load view Inbox
_scripts_Inbox__WEBPACK_IMPORTED_MODULE_2__.inboxDOM.viewInbox()


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3RELGdDQUFnQyxpREFBVztBQUMzQztBQUNBLG9CQUFvQix3REFBa0I7QUFDdEMsOERBQThELGlEQUFXO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHlDQUFLO0FBQ2pELGtEQUFrRCxpREFBVztBQUM3RDs7QUFFQSxZQUFZO0FBQ1osQ0FBQzs7Ozs7Ozs7O1VDMUJEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7O0FDQTJCO0FBQ21CO0FBQ0o7QUFDQztBQUNlOzs7QUFHMUQ7QUFDQSwyRUFBNkI7O0FBRTdCO0FBQ0Esa0ZBQW9DOztBQUVwQztBQUNBLDhEQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL0luYm94LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEA0MDA7NTAwOzYwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tbWFpbi10ZXh0LWNvbG9yOiAjNDA0MDQwO1xcbiAgICAtLWJveC1jb2xvcjogI0Y5RjlGOTtcXG4gICAgLS1saWdodC1pbmZvLWNvbG9yOiAjOEU4RThFO1xcbiAgICAtLWNvbG9yZWQ6ICM2MWEwZmY7XFxufVxcblxcbioge1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzUwcHggMWZyO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIHBhZGRpbmc6IDAgMzBweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI0YyRjJGMjtcXG59XFxuXFxuLmluYm94IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICAgIHBhZGRpbmc6IDEycHggMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xcbn1cXG5cXG4ubGlnaHQtdGV4dCB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1pbmZvLWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG5cXG4ucHJvamVjdC1saXN0LWhlYWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWxpc3QtaGVhZCAuY3JlYXRpb24ge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLnByb2plY3QtbGlzdC1oZWFkIGlucHV0IHtcXG4gICAgd2lkdGg6IDE3MHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvcmVkKTtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1saXN0IHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0IC5jb2xvcmVkLWJveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjZCNkI7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgd2lkdGg6IDEwcHg7XFxufVxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4td2lkdGg6IDgwMHB4O1xcbiAgICBwYWRkaW5nOiA2MHB4IDEwMHB4O1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IGgxIHtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcXG59XFxuXFxuLm1haW4tY29udGVudCAudGFzay1saXN0IHtcXG4gICAgbWFyZ2luLXRvcDogNjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4udGFzay1saXN0IGRpdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJveC1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODBweCA3NSUgY2FsYygyNSUgLSA4MHB4KTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuLnRhc2stbGlzdCAuZGF0ZSB7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1pbmZvLWNvbG9yKTtcXG59XFxuXFxuLm1haW4tY29udGVudCAubGlnaHQtdGV4dCB7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuXFxuLm5ldy10YXNrIHtcXG4gICAgei1pbmRleDogMTAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5uZXctdGFzayAuZm9ybSB7XFxuICAgIHBhZGRpbmc6IDAgNDBweCAxMHB4IDQwcHg7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgaGVpZ2h0OiAxODBweDtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJveC1jb2xvcik7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkICM2MWEwZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMiB7XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxufVxcblxcbiN0YXNrLWRlc2NyaXB0aW9uIHtcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbGlnaHQtaW5mby1jb2xvcik7XFxufVxcblxcbiN0YXNrLWRhdGUge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpZ2h0LWluZm8tY29sb3IpO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mb3JtIGJ1dHRvbiB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1jb2xvcmVkKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvcmVkKTtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcbi5oaWRkZW4ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5ibHVyIHtcXG4gICAgZmlsdGVyOiBibHVyKDVweCk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLG9CQUFvQjtJQUNwQiwyQkFBMkI7SUFDM0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsVUFBVTtJQUNWLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGVBQWU7SUFDZiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2IsZ0RBQWdEO0lBQ2hELG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix5Q0FBeUM7SUFDekMsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRANDAwOzUwMDs2MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgICAtLW1haW4tdGV4dC1jb2xvcjogIzQwNDA0MDtcXG4gICAgLS1ib3gtY29sb3I6ICNGOUY5Rjk7XFxuICAgIC0tbGlnaHQtaW5mby1jb2xvcjogIzhFOEU4RTtcXG4gICAgLS1jb2xvcmVkOiAjNjFhMGZmO1xcbn1cXG5cXG4qIHtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2xvcik7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM1MHB4IDFmcjtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBwYWRkaW5nOiAwIDMwcHg7XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNGMkYyRjI7XFxufVxcblxcbi5pbmJveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJveC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgICBwYWRkaW5nOiAxMnB4IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gICAgbWFyZ2luLXRvcDogODBweDtcXG59XFxuXFxuLmxpZ2h0LXRleHQge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtaW5mby1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuXFxuLnByb2plY3QtbGlzdC1oZWFkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1saXN0LWhlYWQgLmNyZWF0aW9uIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5wcm9qZWN0LWxpc3QtaGVhZCBpbnB1dCB7XFxuICAgIHdpZHRoOiAxNzBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3JlZCk7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtbGlzdCB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdCAuY29sb3JlZC1ib3gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2QjZCO1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIHdpZHRoOiAxMHB4O1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLXdpZHRoOiA4MDBweDtcXG4gICAgcGFkZGluZzogNjBweCAxMDBweDtcXG59XFxuXFxuLm1haW4tY29udGVudCBoMSB7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxufVxcblxcbi5tYWluLWNvbnRlbnQgLnRhc2stbGlzdCB7XFxuICAgIG1hcmdpbi10b3A6IDYwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLnRhc2stbGlzdCBkaXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3gtY29sb3IpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwcHggNzUlIGNhbGMoMjUlIC0gODBweCk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbi50YXNrLWxpc3QgLmRhdGUge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtaW5mby1jb2xvcik7XFxufVxcblxcbi5tYWluLWNvbnRlbnQgLmxpZ2h0LXRleHQge1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcblxcbi5uZXctdGFzayB7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4ubmV3LXRhc2sgLmZvcm0ge1xcbiAgICBwYWRkaW5nOiAwIDQwcHggMTBweCA0MHB4O1xcbiAgICB6LWluZGV4OiAxMDA7XFxuICAgIGhlaWdodDogMTgwcHg7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3gtY29sb3IpO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjNjFhMGZmO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaDIge1xcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbn1cXG5cXG4jdGFzay1kZXNjcmlwdGlvbiB7XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpZ2h0LWluZm8tY29sb3IpO1xcbn1cXG5cXG4jdGFzay1kYXRlIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1saWdodC1pbmZvLWNvbG9yKTtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZm9ybSBidXR0b24ge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tY29sb3JlZCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3JlZCk7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG4uaGlkZGVuIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uYmx1ciB7XFxuICAgIGZpbHRlcjogYmx1cig1cHgpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7bG9jYWxTdG9yYWdlTG9naWN9IGZyb20gJy4vbG9jYWxTdG9yYWdlJ1xuXG4vL3NhdmUgSW5ib3ggZm9ybWF0XG5sZXQgSU5CT1g7XG5pZihsb2NhbFN0b3JhZ2UuSU5CT1ggPT0gdW5kZWZpbmVkKSB7XG4gICAgSU5CT1ggPSB7dGl0bGU6IFwiSW5ib3hcIiwgdGFza2xpc3Q6IFtdfVxuICAgIGxvY2FsU3RvcmFnZS5JTkJPWCA9IEpTT04uc3RyaW5naWZ5KElOQk9YKVxufSBlbHNlIHtcbiAgICBJTkJPWCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLklOQk9YKVxufVxuXG5cbmNvbnN0IGluYm94RE9NID0gKCgpID0+IHtcbiAgICBjb25zdCB2aWV3SW5ib3ggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpXG4gICAgICAgIHRpdGxlLmlubmVyVGV4dCA9IElOQk9YLnRpdGxlXG4gICAgXG4gICAgICAgIGNvbnN0IHRhc2tMaXN0aW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbGlzdCcpXG4gICAgICAgIHRhc2tMaXN0aW5nLmRhdGFzZXQucHJvamVjdCA9ICdJTkJPWCdcbiAgICAgICAgdGFza0xpc3RpbmcuaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBJTkJPWC50YXNrbGlzdCkge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKElOQk9YLnRhc2tsaXN0LCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFzayA9IElOQk9YLnRhc2tsaXN0W2tleV07XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKGB0YXNrLSR7a2V5fWApXG4gICAgICAgICAgICAgICAgdGFza0xpc3RpbmcuYXBwZW5kQ2hpbGQodGFza0RpdilcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgICAgICBjaGVja0JveC50eXBlID0gXCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChjaGVja0JveClcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgICAgICAgICB0YXNrVGl0bGUuaW5uZXJUZXh0ID0gdGFzay50aXRsZVxuICAgICAgICAgICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza1RpdGxlKVxuICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgICAgICAgICAgdGFza0RhdGUuaW5uZXJUZXh0ID0gdGFzay5kdWVEYXRlXG4gICAgICAgICAgICAgICAgdGFza0RhdGUuY2xhc3NMaXN0LmFkZCgnZGF0ZScpXG4gICAgICAgICAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrRGF0ZSlcblxuXG4gICAgICAgICAgICAgICAgY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGFza0Rpdi5yZW1vdmUoKVxuICAgICAgICAgICAgICAgICAgICBJTkJPWC50YXNrbGlzdC5zcGxpY2Uoa2V5LCAxKVxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2VMb2dpYy51cGRhdGVMb2NhbFN0b3JhZ2VMaXN0KClcbiAgICAgICAgICAgICAgICAgICAgdmlld0luYm94KClcbiAgICAgICAgICAgICAgICB9KVxuICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7dmlld0luYm94fVxufSkgKClcblxuLy9zaWRlYmFyIEluYm94IGJ1dHRvblxuY29uc3QgaW5ib3hCdXR0b24gID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94JylcbmluYm94QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpbmJveERPTS52aWV3SW5ib3goKVxufSlcblxuZXhwb3J0IHtpbmJveERPTSwgSU5CT1h9IiwiaW1wb3J0IHsgbG9jYWxTdG9yYWdlTG9naWMgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcblxuLy8gUHJvamVjdCBjcmVhdGlvbiB3aXRoIGFsbCB0YXNrcyBpbnNpZGUgdGhlIHByb2plY3RcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICAgIHRhc2tsaXN0ID0gW11cbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICB9XG59XG5cblxuLy9jcmVhdGUgZGVmYXVsdCBsaXN0IG9mIGFsbCBwcm9qZWN0cyBhbmQgc2F2ZSB0byBsb2NhbFN0b3JhZ2UgLSBjaGVjayBpZiBsb2NhbHN0b3JhZ2UgaXMgYWxyZWFkeVxubGV0IHByb2plY3RMaXN0O1xuXG5pZihsb2NhbFN0b3JhZ2UucHJvamVjdExpc3QgPT0gdW5kZWZpbmVkKSB7XG4gICAgcHJvamVjdExpc3QgPSBbXVxuICAgIGxvY2FsU3RvcmFnZS5wcm9qZWN0TGlzdCA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KVxufSBlbHNlIHtcbiAgICBwcm9qZWN0TGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnByb2plY3RMaXN0KVxufVxuXG5cbi8vanVzdCBmb3IgdGVzdGluZzpcbi8qKlxubGV0IHByb2plY3RMaXN0ID0gW11cbmxvY2FsU3RvcmFnZS5wcm9qZWN0TGlzdCA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KVxuICovXG5cblxuXG4vL2xvYWQgcHJvamVjdHMgaW4gc2lkZWJhciB2aWEgbG9jYWxzdG9yYWdlXG5jb25zdCBwcm9qZWN0RE9NID0gKCgpID0+IHtcbiAgICBjb25zdCBsb2FkUHJvamVjdExpc3RpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdExpc3RpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1saXN0JylcbiAgICAgICAgcHJvamVjdExpc3RpbmcuaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBwcm9qZWN0TGlzdCkge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHByb2plY3RMaXN0LCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RMaXN0W2tleV07XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0JylcbiAgICAgICAgICAgICAgICBwcm9qZWN0RGl2LmRhdGFzZXQubnVtYmVyID0ga2V5XG4gICAgICAgICAgICAgICAgcHJvamVjdExpc3RpbmcuYXBwZW5kQ2hpbGQocHJvamVjdERpdilcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKCdjb2xvcmVkLWJveCcpXG4gICAgICAgICAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChib3gpXG4gICAgXG4gICAgICAgICAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coa2V5KVxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TG9naWMucmVtb3ZlUHJvamVjdChwcm9qZWN0KVxuXG4gICAgICAgICAgICAgICAgfSlcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICAgICAgICAgIHRpdGxlLmlubmVyVGV4dCA9IHByb2plY3QudGl0bGVcbiAgICAgICAgICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHRpdGxlKVxuXG4gICAgICAgICAgICAgICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2aWV3UHJvamVjdFRhYihwcm9qZWN0LCBwcm9qZWN0RGl2LmRhdGFzZXQubnVtYmVyKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL3ZpZXcgc3BlY2lmaWMgcHJvamVjdCBUYWJzIHdpdGggZXZlcnkgVGFzayBpbnNpZGUgYSBwcm9qZWN0XG4gICAgY29uc3Qgdmlld1Byb2plY3RUYWIgPSBmdW5jdGlvbihwcm9qZWN0LCBkYXRhTnVtYmVyKSB7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpXG4gICAgICAgIHRpdGxlLmlubmVyVGV4dCA9IHByb2plY3QudGl0bGVcblxuICAgICAgICBjb25zdCB0YXNrTGlzdGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWxpc3QnKVxuICAgICAgICB0YXNrTGlzdGluZy5pbm5lckhUTUwgPSBcIlwiXG4gICAgICAgIHRhc2tMaXN0aW5nLmRhdGFzZXQucHJvamVjdCA9IGRhdGFOdW1iZXJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcHJvamVjdC50YXNrbGlzdCkge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHByb2plY3QudGFza2xpc3QsIGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrID0gcHJvamVjdC50YXNrbGlzdFtrZXldO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKGB0YXNrLSR7a2V5fWApXG4gICAgICAgICAgICAgICAgdGFza0xpc3RpbmcuYXBwZW5kQ2hpbGQodGFza0RpdilcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAgICAgICAgIGNoZWNrQm94LnR5cGUgPSBcImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGNoZWNrQm94KVxuXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgICAgICAgICAgdGFza1RpdGxlLmlubmVyVGV4dCA9IHRhc2sudGl0bGVcbiAgICAgICAgICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tUaXRsZSlcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgICAgICAgICAgdGFza0RhdGUuaW5uZXJUZXh0ID0gdGFzay5kdWVEYXRlXG4gICAgICAgICAgICAgICAgdGFza0RhdGUuY2xhc3NMaXN0LmFkZCgnZGF0ZScpXG4gICAgICAgICAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrRGF0ZSlcblxuXG4gICAgICAgICAgICAgICAgY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGFza0Rpdi5yZW1vdmUoKVxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnRhc2tsaXN0LnNwbGljZShrZXksIDEpXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZUxvZ2ljLnVwZGF0ZUxvY2FsU3RvcmFnZUxpc3QoKVxuICAgICAgICAgICAgICAgICAgICB2aWV3UHJvamVjdFRhYihwcm9qZWN0LCBkYXRhTnVtYmVyKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vQ3JlYXRlIFByb2plY3QgKyAtPiBJbnB1dCAocHJlc3MgZW50ZXIgdG8gY3JlYXRlIG5ldyBQcm9qZWN0KVxuICAgIGNvbnN0IHRvZ2dsZVByb2plY3RDcmVhdGVCdXR0b24gPSBmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdEhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1saXN0LWhlYWQnKVxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdEhlYWQubGFzdEVsZW1lbnRDaGlsZClcbiAgICAgICAgcHJvamVjdExpc3RIZWFkLmxhc3RFbGVtZW50Q2hpbGQucmVtb3ZlKClcblxuICAgICAgICBpZihzdGF0ZSA9PSBcImlucHV0XCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgIHByb2plY3RJbnB1dC50eXBlID0gXCJ0ZXh0XCJcblxuICAgICAgICAgICAgcHJvamVjdExpc3RIZWFkLmFwcGVuZChwcm9qZWN0SW5wdXQpXG5cbiAgICAgICAgICAgIHByb2plY3RJbnB1dC5mb2N1cygpXG5cbiAgICAgICAgICAgIHByb2plY3RJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgdG9nZ2xlUHJvamVjdENyZWF0ZUJ1dHRvbihcInRleHRcIilcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHByb2plY3RJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoZS5rZXkgPT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RMb2dpYy5hZGRQcm9qZWN0KHByb2plY3RJbnB1dC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdElucHV0LmJsdXIoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0Q3JlYXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICAgICAgcHJvamVjdENyZWF0ZVRleHQuY2xhc3NMaXN0LmFkZChcImxpZ2h0LXRleHRcIilcbiAgICAgICAgICAgIHByb2plY3RDcmVhdGVUZXh0LmNsYXNzTGlzdC5hZGQoXCJjcmVhdGlvblwiKVxuICAgICAgICAgICAgcHJvamVjdENyZWF0ZVRleHQuaW5uZXJUZXh0ID0gXCJDcmVhdGUgUHJvamVjdCArXCJcblxuICAgICAgICAgICAgcHJvamVjdExpc3RIZWFkLmFwcGVuZChwcm9qZWN0Q3JlYXRlVGV4dClcblxuICAgICAgICAgICAgY29uc3QgY3JlYXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGlvbicpXG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0RE9NLnRvZ2dsZVByb2plY3RDcmVhdGVCdXR0b24oXCJpbnB1dFwiKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBcbiAgICByZXR1cm4ge2xvYWRQcm9qZWN0TGlzdGluZywgdmlld1Byb2plY3RUYWIsIHRvZ2dsZVByb2plY3RDcmVhdGVCdXR0b259XG59KSgpXG5cblxuLy91cGRhdGVkIGluIGxvY2FsIHN0b3JhZ2UgYW5kIGFycmF5IGxpc3RcbmNvbnN0IHByb2plY3RMb2dpYyA9ICgoKSA9PiB7XG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlTG9naWMucmVtb3ZlRnJvbVN0b3JhZ2VMaXN0KHByb2plY3QpXG4gICAgICAgIHByb2plY3RET00ubG9hZFByb2plY3RMaXN0aW5nKClcbiAgICB9XG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGZ1bmN0aW9uKHRpdGxlKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZUxvZ2ljLmFkZFRvU3RvcmFnZUxpc3QobmV3IFByb2plY3QodGl0bGUpKVxuICAgICAgICBwcm9qZWN0RE9NLmxvYWRQcm9qZWN0TGlzdGluZygpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtyZW1vdmVQcm9qZWN0LCBhZGRQcm9qZWN0fVxufSkoKVxuXG5leHBvcnQge3Byb2plY3RET00sIHByb2plY3RMaXN0fSIsImltcG9ydCB7IGluYm94RE9NLCBJTkJPWCB9IGZyb20gXCIuL0luYm94XCJcbmltcG9ydCB7IHByb2plY3RMaXN0LCBwcm9qZWN0RE9NIH0gZnJvbSBcIi4vUHJvamVjdFwiXG5pbXBvcnQgeyBsb2NhbFN0b3JhZ2VMb2dpYyB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiXG5cbi8vdGFzayBjcmVhdGlvbiB3aXRoIGRlc2NyaXB0aW9uIGFuZCBkdWUgZGF0ZVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGR1ZURhdGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcbiAgICB9XG59XG5cbi8vQ3JlYXRlIFRhc2sgLT4gcG9wdXAgd2luZG93XG5jb25zdCBjcmVhdGVUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpLmxhc3RFbGVtZW50Q2hpbGRcblxuY3JlYXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgdGFza0RPTS52aWV3VGFza1BvcFVwKClcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kZXNjcmlwdGlvbicpLmZvY3VzKClcbn0pXG5cblxuLy9zdWJtaXQgdG8gY3JlYXRlIG5ldyB0YXNrIChzYXZlZCBpbiBzdG9yYWdlKVxuY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW3R5cGU9XCJidXR0b25cIl0nKVxuc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRlc2NyaXB0aW9uJykudmFsdWVcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGF0ZScpLnZhbHVlXG4gICAgY29uc29sZS5sb2coZGF0ZSlcbiAgICB0YXNrTG9naWMuYWRkVGFzayh0aXRsZSwgZGF0ZSlcbiAgICB0YXNrRE9NLmNsb3NlVGFza1BvcFVwKClcbiAgICBsb2NhbFN0b3JhZ2VMb2dpYy51cGRhdGVMb2NhbFN0b3JhZ2VMaXN0KClcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kZXNjcmlwdGlvbicpLnZhbHVlID0gXCJcIlxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRhdGUnKS52YWx1ZSA9IFwiXCJcblxufSlcblxuXG5cbmNvbnN0IHRhc2tET00gPSAoKCkgPT4ge1xuICAgIGNvbnN0IHZpZXdUYXNrUG9wVXAgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdibHVyJylcblxuICAgICAgICBjb25zdCB0YXNrRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2snKVxuICAgICAgICB0YXNrRmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICB9XG5cbiAgICBjb25zdCBjbG9zZVRhc2tQb3BVcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2JsdXInKVxuXG4gICAgICAgIGNvbnN0IHRhc2tGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzaycpXG4gICAgICAgIHRhc2tGaWVsZC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIH1cblxuICAgIHJldHVybiB7IHZpZXdUYXNrUG9wVXAsIGNsb3NlVGFza1BvcFVwfVxufSkoKVxuXG4vL3VwZGF0ZWQgaW4gbG9jYWwgc3RvcmFnZVxuY29uc3QgdGFza0xvZ2ljID0gKCgpID0+IHtcbiAgICBjb25zdCBhZGRUYXNrID0gZnVuY3Rpb24odGl0bGUsIGRhdGUpIHtcbiAgICAgICAgY29uc3QgZGF0YVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1saXN0JykuZGF0YXNldC5wcm9qZWN0XG4gICAgICAgIC8vSW5ib3ggYW5kIG90aGVyIHByb2plY3RzIHN0b3JlZCBkaWZmZXJlbnRseSBiZWNhdXNlIElOQk9YIGlzIHBlcm1hbmFudFxuICAgICAgICBpZihkYXRhUHJvamVjdCA9PSBcIklOQk9YXCIpIHtcbiAgICAgICAgICAgIElOQk9YLnRhc2tsaXN0LnB1c2gobmV3IFRhc2sodGl0bGUsIGRhdGUpKVxuICAgICAgICAgICAgaW5ib3hET00udmlld0luYm94KClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb2plY3RMaXN0W2RhdGFQcm9qZWN0XS50YXNrbGlzdC5wdXNoKG5ldyBUYXNrKHRpdGxlLCBkYXRlKSlcbiAgICAgICAgICAgIHByb2plY3RET00udmlld1Byb2plY3RUYWIocHJvamVjdExpc3RbZGF0YVByb2plY3RdLCBkYXRhUHJvamVjdClcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge2FkZFRhc2t9XG59KSgpIiwiaW1wb3J0IHsgcHJvamVjdExpc3QgfSBmcm9tIFwiLi9Qcm9qZWN0XCJcbmltcG9ydCB7IElOQk9YIH0gZnJvbSBcIi4vSW5ib3hcIlxuXG5jb25zdCBsb2NhbFN0b3JhZ2VMb2dpYyA9ICgoKSA9PiB7XG4gICAgY29uc3QgYWRkVG9TdG9yYWdlTGlzdCA9IGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICAgICAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0KVxuICAgICAgICBsb2NhbFN0b3JhZ2UucHJvamVjdExpc3QgPSBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdClcbiAgICB9XG4gICAgY29uc3QgcmVtb3ZlRnJvbVN0b3JhZ2VMaXN0ID0gZnVuY3Rpb24ocHJvamVjdCkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBwcm9qZWN0TGlzdCkge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHByb2plY3RMaXN0LCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHByb2plY3RMaXN0W2tleV07XG4gICAgICAgICAgICAgICAgaWYoZWxlbWVudCA9PSBwcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RMaXN0LnNwbGljZShrZXksIDEpXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5wcm9qZWN0TGlzdCA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZUxvY2FsU3RvcmFnZUxpc3QgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLklOQk9YID0gSlNPTi5zdHJpbmdpZnkoSU5CT1gpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5wcm9qZWN0TGlzdCA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KVxuICAgIH1cblxuICAgIHJldHVybiB7YWRkVG9TdG9yYWdlTGlzdCwgcmVtb3ZlRnJvbVN0b3JhZ2VMaXN0LCB1cGRhdGVMb2NhbFN0b3JhZ2VMaXN0fVxufSkoKVxuXG5cbmV4cG9ydCB7bG9jYWxTdG9yYWdlTG9naWN9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnXG5pbXBvcnQgeyBwcm9qZWN0RE9NIH0gZnJvbSAnLi9zY3JpcHRzL1Byb2plY3QnXG5pbXBvcnQgeyBpbmJveERPTSB9IGZyb20gJy4vc2NyaXB0cy9JbmJveCdcbmltcG9ydCB7IGNyZWF0ZVRhc2sgfSBmcm9tICcuL3NjcmlwdHMvVGFzaydcbmltcG9ydCB7IGxvY2FsU3RvcmFnZUxvZ2ljIH0gZnJvbSAnLi9zY3JpcHRzL2xvY2FsU3RvcmFnZSdcblxuXG4vL3NpZGViYXIgd2l0aCBwcm9qZWN0c1xucHJvamVjdERPTS5sb2FkUHJvamVjdExpc3RpbmcoKVxuXG4vL2FjdGl2YXRlIFwiQ3JlYXRlIFByb2plY3QgK1wiIGZ1bmN0aW9uXG5wcm9qZWN0RE9NLnRvZ2dsZVByb2plY3RDcmVhdGVCdXR0b24oXCJ0ZXh0XCIpXG5cbi8vb24gcGFnZSBsb2FkIHZpZXcgSW5ib3hcbmluYm94RE9NLnZpZXdJbmJveCgpXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==