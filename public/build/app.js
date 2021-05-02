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
      var bootstrap = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");

      this.myParentFunction(bootstrap);
    }
  }, {
    key: "myParentFunction",
    value: function myParentFunction(bootstrap) {
      var myCarousel = document.querySelector('#carousel');
      var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 5000,
        wrap: true,
        pause: false,
        touch: true,
        keyboard: false,
        ride: false,
        slide: true,
        cycle: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9jYXJvdXNlbF9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC10dXJiby9SZXNvdXJjZXMvYXNzZXRzL2Rpc3QvdHVyYm9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIl0sIm5hbWVzIjpbImJvb3RzdHJhcCIsInJlcXVpcmUiLCJteVBhcmVudEZ1bmN0aW9uIiwibXlDYXJvdXNlbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNhcm91c2VsIiwiQ2Fyb3VzZWwiLCJpbnRlcnZhbCIsIndyYXAiLCJwYXVzZSIsInRvdWNoIiwia2V5Ym9hcmQiLCJyaWRlIiwic2xpZGUiLCJjeWNsZSIsIkNvbnRyb2xsZXIiLCJhcHAiLCJzdGFydFN0aW11bHVzQXBwIiwiX3R5cGVvZiIsIm9iaiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJPYmplY3QiLCJ2YWx1ZSIsImV4cG9ydHMiLCJfc3RpbXVsdXMiLCJUdXJibyIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiV2Vha01hcCIsImNhY2hlIiwiX19lc01vZHVsZSIsImhhcyIsImdldCIsIm5ld09iaiIsImhhc1Byb3BlcnR5RGVzY3JpcHRvciIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZGVzYyIsInNldCIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJfaW5oZXJpdHMiLCJzdWJDbGFzcyIsInN1cGVyQ2xhc3MiLCJjcmVhdGUiLCJ3cml0YWJsZSIsImNvbmZpZ3VyYWJsZSIsIl9zZXRQcm90b3R5cGVPZiIsIm8iLCJwIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJfY3JlYXRlU3VwZXIiLCJEZXJpdmVkIiwiaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJfY3JlYXRlU3VwZXJJbnRlcm5hbCIsIlN1cGVyIiwiX2dldFByb3RvdHlwZU9mIiwicmVzdWx0IiwiTmV3VGFyZ2V0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImFyZ3VtZW50cyIsImFwcGx5IiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJzZWxmIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIlJlZmVyZW5jZUVycm9yIiwic2hhbSIsIlByb3h5IiwiRGF0ZSIsInRvU3RyaW5nIiwiZSIsImdldFByb3RvdHlwZU9mIiwid2luZG93IiwiX2RlZmF1bHQiLCJfQ29udHJvbGxlciIsIl9zdXBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwSTs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBLGlFQUFlO0FBQ2YsbUNBQW1DLG1OQUErRTtBQUNsSCxDQUFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZEO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7V0FHSSxtQkFBUztBQUNMLFVBQUlBLFNBQVMsR0FBR0MsbUJBQU8sQ0FBQyxvRUFBRCxD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QjtBQUEyRSxXQUFPLElBQVA7QUFBYyxHQUEvRixDQUFnRyxPQUFPRSxDQUFQLEVBQVU7QUFBRSxXQUFPLEtBQVA7QUFBZTtBQUFFOztBQUVwVSxTQUFTZixlQUFULENBQXlCVixDQUF6QixFQUE0QjtBQUFFVSxpQkFBZSxHQUFHMUMsTUFBTSxDQUFDa0MsY0FBUCxHQUF3QmxDLE1BQU0sQ0FBQzBELGNBQS9CLEdBQWdELFNBQVNoQixlQUFULENBQXlCVixDQUF6QixFQUE0QjtBQUFFLFdBQU9BLENBQUMsQ0FBQ0csU0FBRixJQUFlbkMsTUFBTSxDQUFDMEQsY0FBUCxDQUFzQjFCLENBQXRCLENBQXRCO0FBQWlELEdBQWpKO0FBQW1KLFNBQU9VLGVBQWUsQ0FBQ1YsQ0FBRCxDQUF0QjtBQUE0QixDLENBRTdNOzs7QUFDQTJCLE1BQU0sQ0FBQ3ZELEtBQVAsR0FBZUEsS0FBZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSXdELFFBQVEsR0FBRyxhQUFhLFVBQVVDLFdBQVYsRUFBdUI7QUFDakRwQyxXQUFTLENBQUNtQyxRQUFELEVBQVdDLFdBQVgsQ0FBVDs7QUFFQSxNQUFJQyxNQUFNLEdBQUcxQixZQUFZLENBQUN3QixRQUFELENBQXpCOztBQUVBLFdBQVNBLFFBQVQsR0FBb0I7QUFDbEJ2QyxtQkFBZSxDQUFDLElBQUQsRUFBT3VDLFFBQVAsQ0FBZjs7QUFFQSxXQUFPRSxNQUFNLENBQUNkLEtBQVAsQ0FBYSxJQUFiLEVBQW1CRCxTQUFuQixDQUFQO0FBQ0Q7O0FBRUQsU0FBT2EsUUFBUDtBQUNELENBWjJCLENBWTFCekQsU0FBUyxDQUFDWixVQVpnQixDQUE1Qjs7QUFjQVcsZUFBQSxHQUFxQjBELFFBQXJCLEM7Ozs7Ozs7Ozs7OztBQ3ZEQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vY2Fyb3VzZWxfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2Nhcm91c2VsX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuKGp8dClzeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xuICAnc3ltZm9ueS0tdXgtdHVyYm8tLXR1cmJvLWNvcmUnOiBpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyAnQHN5bWZvbnkvdXgtdHVyYm8vZGlzdC90dXJib19jb250cm9sbGVyLmpzJyksXG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdzdGltdWx1cyc7XG5cblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJjb250YWN0XCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBcbiAgICBjb25uZWN0KCl7XG4gICAgICAgIHZhciBib290c3RyYXAgPSByZXF1aXJlKCdib290c3RyYXAnKTtcbiAgICAgICAgdGhpcy5teVBhcmVudEZ1bmN0aW9uKGJvb3RzdHJhcClcbiAgICB9ICBcblxuICAgIG15UGFyZW50RnVuY3Rpb24oYm9vdHN0cmFwKXtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdmFyIG15Q2Fyb3VzZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2Fyb3VzZWwnKVxuICAgICAgICB2YXIgY2Fyb3VzZWwgPSBuZXcgYm9vdHN0cmFwLkNhcm91c2VsKG15Q2Fyb3VzZWwsIHtcbiAgICAgICAgICAgIGludGVydmFsOiA1MDAwLFxuICAgICAgICAgICAgd3JhcDogdHJ1ZSxcbiAgICAgICAgICAgIHBhdXNlOiBmYWxzZSxcbiAgICAgICAgICAgIHRvdWNoOiB0cnVlLFxuICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxuICAgICAgICAgICAgcmlkZTogZmFsc2UsXG4gICAgICAgICAgICBzbGlkZTogdHJ1ZSxcbiAgICAgICAgICAgIGN5Y2xlOiB0cnVlXG4gICAgICAgIH0pXG5cbiAgICB9XG4gIH1cbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcblxuXG5cblxuXG4gICAgIFxuXG5cblxuXG5cblxuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLihqfHQpc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3N0aW11bHVzID0gcmVxdWlyZShcInN0aW11bHVzXCIpO1xuXG52YXIgVHVyYm8gPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiQGhvdHdpcmVkL3R1cmJvXCIpKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgcmV0dXJuIGNhY2hlOyB9OyByZXR1cm4gY2FjaGU7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbi8vIEV4cG9zZSBUdXJibyB0byB0aGUgcmVzdCBvZiB0aGUgYXBwIHRvIGFsbG93IGZvciBkeW5hbWljIFR1cmJvIGNhbGxzXG53aW5kb3cuVHVyYm8gPSBUdXJibztcbi8qKlxuICogRW1wdHkgU3RpbXVsdXMgY29udHJvbGxlciBvbmx5IHVzZWQgZm9yIFN5bWZvbnkgRmxleCB3aXJpbmcuXG4gKlxuICogQGF1dGhvciBUaXRvdWFuIEdhbG9waW4gPGdhbG9waW50aXRvdWFuQGdtYWlsLmNvbT5cbiAqL1xuXG52YXIgX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db250cm9sbGVyKSB7XG4gIF9pbmhlcml0cyhfZGVmYXVsdCwgX0NvbnRyb2xsZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoX2RlZmF1bHQpO1xuXG4gIGZ1bmN0aW9uIF9kZWZhdWx0KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBfZGVmYXVsdCk7XG5cbiAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICByZXR1cm4gX2RlZmF1bHQ7XG59KF9zdGltdWx1cy5Db250cm9sbGVyKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9