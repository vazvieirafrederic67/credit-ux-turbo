(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$":
/*!*****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.(j|t)sx?$ ***!
  \*****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./carousel_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/carousel_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'symfony--ux-turbo--turbo-core': Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-turbo/dist/turbo_controller.js */ "./vendor/symfony/ux-turbo/Resources/assets/dist/turbo_controller.js")),
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/carousel_controller.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/carousel_controller.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }














function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="contact" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.myParentFunction();
    }
  }, {
    key: "myParentFunction",
    value: function myParentFunction() {
      var bootstrap = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");

      var myCarousel = document.querySelector('#carouselExampleSlidesOnly');
      var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 3000,
        wrap: true
      });
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_12__.Controller);



/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
 // start the Stimulus application



/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./vendor/symfony/ux-turbo/Resources/assets/dist/turbo_controller.js":
/*!***************************************************************************!*\
  !*** ./vendor/symfony/ux-turbo/Resources/assets/dist/turbo_controller.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");

__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _stimulus = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");

var Turbo = _interopRequireWildcard(__webpack_require__(/*! @hotwired/turbo */ "./node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
} // Expose Turbo to the rest of the app to allow for dynamic Turbo calls


window.Turbo = Turbo;
/**
 * Empty Stimulus controller only used for Symfony Flex wiring.
 *
 * @author Titouan Galopin <galopintitouan@gmail.com>
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  return _default;
}(_stimulus.Controller);

exports.default = _default;

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_hotwired_turbo_dist_turbo_es2017-esm_js-node_modules_symfony_stimulus-br-dd2a54"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9jYXJvdXNlbF9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC10dXJiby9SZXNvdXJjZXMvYXNzZXRzL2Rpc3QvdHVyYm9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIl0sIm5hbWVzIjpbIm15UGFyZW50RnVuY3Rpb24iLCJib290c3RyYXAiLCJyZXF1aXJlIiwibXlDYXJvdXNlbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNhcm91c2VsIiwiQ2Fyb3VzZWwiLCJpbnRlcnZhbCIsIndyYXAiLCJDb250cm9sbGVyIiwiYXBwIiwic3RhcnRTdGltdWx1c0FwcCIsIl90eXBlb2YiLCJvYmoiLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiT2JqZWN0IiwidmFsdWUiLCJleHBvcnRzIiwiX3N0aW11bHVzIiwiVHVyYm8iLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsIldlYWtNYXAiLCJjYWNoZSIsIl9fZXNNb2R1bGUiLCJoYXMiLCJnZXQiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImtleSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImRlc2MiLCJzZXQiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX2luaGVyaXRzIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwiY3JlYXRlIiwid3JpdGFibGUiLCJjb25maWd1cmFibGUiLCJfc2V0UHJvdG90eXBlT2YiLCJvIiwicCIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiX2NyZWF0ZVN1cGVyIiwiRGVyaXZlZCIsImhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiX2NyZWF0ZVN1cGVySW50ZXJuYWwiLCJTdXBlciIsIl9nZXRQcm90b3R5cGVPZiIsInJlc3VsdCIsIk5ld1RhcmdldCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwic2VsZiIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJSZWZlcmVuY2VFcnJvciIsInNoYW0iLCJQcm94eSIsIkRhdGUiLCJ0b1N0cmluZyIsImUiLCJnZXRQcm90b3R5cGVPZiIsIndpbmRvdyIsIl9kZWZhdWx0IiwiX0NvbnRyb2xsZXIiLCJfc3VwZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEk7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQSxpRUFBZTtBQUNmLG1DQUFtQyxtTkFBK0U7QUFDbEgsQ0FBQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGRDtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O1dBR0ksbUJBQVM7QUFDTCxXQUFLQSxnQkFBTDtBQUNIOzs7V0FFRCw0QkFBa0I7QUFDZCxVQUFJQyxTQUFTLEdBQUdDLG1CQUFPLENBQUMsb0VBQUQsQ0FBdkI7O0FBRUEsVUFB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QUFPQSxDQUFDLENBQUNHLFNBQUYsSUFBZW5DLE1BQU0sQ0FBQzBELGNBQVAsQ0FBc0IxQixDQUF0QixDQUF0QjtBQUFpRCxHQUFqSjtBQUFtSixTQUFPVSxlQUFlLENBQUNWLENBQUQsQ0FBdEI7QUFBNEIsQyxDQUU3TTs7O0FBQ0EyQixNQUFNLENBQUN2RCxLQUFQLEdBQWVBLEtBQWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUl3RCxRQUFRLEdBQUcsYUFBYSxVQUFVQyxXQUFWLEVBQXVCO0FBQ2pEcEMsV0FBUyxDQUFDbUMsUUFBRCxFQUFXQyxXQUFYLENBQVQ7O0FBRUEsTUFBSUMsTUFBTSxHQUFHMUIsWUFBWSxDQUFDd0IsUUFBRCxDQUF6Qjs7QUFFQSxXQUFTQSxRQUFULEdBQW9CO0FBQ2xCdkMsbUJBQWUsQ0FBQyxJQUFELEVBQU91QyxRQUFQLENBQWY7O0FBRUEsV0FBT0UsTUFBTSxDQUFDZCxLQUFQLENBQWEsSUFBYixFQUFtQkQsU0FBbkIsQ0FBUDtBQUNEOztBQUVELFNBQU9hLFFBQVA7QUFDRCxDQVoyQixDQVkxQnpELFNBQVMsQ0FBQ1osVUFaZ0IsQ0FBNUI7O0FBY0FXLGVBQUEsR0FBcUIwRCxRQUFyQixDOzs7Ozs7Ozs7Ozs7QUN2REEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2Nhcm91c2VsX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9jYXJvdXNlbF9jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLihqfHQpc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgJ3N5bWZvbnktLXV4LXR1cmJvLS10dXJiby1jb3JlJzogaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gJ0BzeW1mb255L3V4LXR1cmJvL2Rpc3QvdHVyYm9fY29udHJvbGxlci5qcycpLFxufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnc3RpbXVsdXMnO1xuXG5cblxuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImNvbnRhY3RcIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuXG4gICAgY29ubmVjdCgpe1xuICAgICAgICB0aGlzLm15UGFyZW50RnVuY3Rpb24oKVxuICAgIH0gIFxuXG4gICAgbXlQYXJlbnRGdW5jdGlvbigpe1xuICAgICAgICB2YXIgYm9vdHN0cmFwID0gcmVxdWlyZSgnYm9vdHN0cmFwJyk7XG4gICAgICAgIFxuICAgICAgICB2YXIgbXlDYXJvdXNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXJvdXNlbEV4YW1wbGVTbGlkZXNPbmx5JylcbiAgICAgICAgdmFyIGNhcm91c2VsID0gbmV3IGJvb3RzdHJhcC5DYXJvdXNlbChteUNhcm91c2VsLCB7XG4gICAgICAgICAgICBpbnRlcnZhbDogMzAwMCxcbiAgICAgICAgICAgIHdyYXA6IHRydWUsXG4gICAgICAgIH0pXG4gICAgfVxuICB9XG4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG5cblxuXG5cblxuICAgICBcblxuXG5cblxuXG5cbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC4oanx0KXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9zdGltdWx1cyA9IHJlcXVpcmUoXCJzdGltdWx1c1wiKTtcblxudmFyIFR1cmJvID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIkBob3R3aXJlZC90dXJib1wiKSk7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpOyBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IHJldHVybiBjYWNoZTsgfTsgcmV0dXJuIGNhY2hlOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG4vLyBFeHBvc2UgVHVyYm8gdG8gdGhlIHJlc3Qgb2YgdGhlIGFwcCB0byBhbGxvdyBmb3IgZHluYW1pYyBUdXJibyBjYWxsc1xud2luZG93LlR1cmJvID0gVHVyYm87XG4vKipcbiAqIEVtcHR5IFN0aW11bHVzIGNvbnRyb2xsZXIgb25seSB1c2VkIGZvciBTeW1mb255IEZsZXggd2lyaW5nLlxuICpcbiAqIEBhdXRob3IgVGl0b3VhbiBHYWxvcGluIDxnYWxvcGludGl0b3VhbkBnbWFpbC5jb20+XG4gKi9cblxudmFyIF9kZWZhdWx0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29udHJvbGxlcikge1xuICBfaW5oZXJpdHMoX2RlZmF1bHQsIF9Db250cm9sbGVyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKF9kZWZhdWx0KTtcblxuICBmdW5jdGlvbiBfZGVmYXVsdCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgX2RlZmF1bHQpO1xuXG4gICAgcmV0dXJuIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgcmV0dXJuIF9kZWZhdWx0O1xufShfc3RpbXVsdXMuQ29udHJvbGxlcik7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==