module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static */ "./static/index.js");
var _jsxFileName = "/home/phenotypez/Desktop/repos/OTG/on-the-grind/components/Header.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// @ts-check




/** @type {{search: React.CSSProperties}} */

const styles = {
  root: {
    display: 'flex',
    width: '102%',
    backgroundColor: 'black',
    height: '70px',
    position: 'relative',
    marginLeft: '-8px',
    marginTop: '-8px'
  },
  links: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  link: {
    marginRight: '8px',
    marginLeft: '8px',
    fontFamily: 'Comfortaa, sans-serif',
    color: 'white'
  },
  social: {
    display: 'flex',
    alignItems: 'center',
    height: '70px',
    width: 'auto',
    position: 'absolute',
    right: '0',
    marginRight: '5px'
  },
  icon: {
    height: '50px',
    marginRight: '15px'
  },
  iconMobile: {
    height: '30px',
    marginRight: '8px'
  }
};

class Header extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("div", {
      style: styles.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx("div", {
      style: styles.links,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx("a", {
      style: styles.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/Shop",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, __jsx("a", {
      style: styles.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, "Shop"))), __jsx("div", {
      style: styles.social,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Hidden"], {
      xsDown: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx("a", {
      href: 'https://soundcloud.com/oatniq',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx("img", {
      src: _static__WEBPACK_IMPORTED_MODULE_3__["soundcloud"],
      style: styles.icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    })), __jsx("a", {
      href: 'https://www.instagram.com/oatniq/?hl=en',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, __jsx("img", {
      src: _static__WEBPACK_IMPORTED_MODULE_3__["ig"],
      style: styles.icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Hidden"], {
      smUp: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, __jsx("a", {
      href: 'https://soundcloud.com/oatniq',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, __jsx("img", {
      src: _static__WEBPACK_IMPORTED_MODULE_3__["soundcloud"],
      style: styles.iconMobile,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    })), __jsx("a", {
      href: 'https://www.instagram.com/oatniq/?hl=en',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx("img", {
      src: _static__WEBPACK_IMPORTED_MODULE_3__["ig"],
      style: styles.iconMobile,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/ItemRow.tsx":
/*!********************************!*\
  !*** ./components/ItemRow.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static */ "./static/index.js");
var _jsxFileName = "/home/phenotypez/Desktop/repos/OTG/on-the-grind/components/ItemRow.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const styles = {
  item: {
    flexBasis: 'calc(33% - 20px)'
  },
  itemImage: {
    width: '100%'
  }
};

class ItemRow extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("div", {
      style: styles.item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("img", {
      style: styles.itemImage,
      src: _static__WEBPACK_IMPORTED_MODULE_1__["shirt"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    })), __jsx("div", {
      style: styles.item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx("img", {
      style: styles.itemImage,
      src: _static__WEBPACK_IMPORTED_MODULE_1__["hoodie"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    })), __jsx("div", {
      style: styles.item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("img", {
      style: styles.itemImage,
      src: _static__WEBPACK_IMPORTED_MODULE_1__["sweatshirt"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ItemRow);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.tsx");
/* harmony import */ var _components_ItemRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ItemRow */ "./components/ItemRow.tsx");
var _jsxFileName = "/home/phenotypez/Desktop/repos/OTG/on-the-grind/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Comfortaa",
      rel: "stylesheet",
      key: "google-font-comfortaa",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    })), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), __jsx(_components_ItemRow__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./static/DownArrow.svg":
/*!******************************!*\
  !*** ./static/DownArrow.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjYxMnB4IiBoZWlnaHQ9IjYxMnB4IiB2aWV3Qm94PSIwIDAgNjEyIDYxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjEyIDYxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGcgaWQ9Il94MzFfMF8zNF8iPg0KCQk8Zz4NCgkJCTxwYXRoIGQ9Ik02MDQuNTAxLDEzNC43ODJjLTkuOTk5LTEwLjA1LTI2LjIyMi0xMC4wNS0zNi4yMjEsMEwzMDYuMDE0LDQyMi41NThMNDMuNzIxLDEzNC43ODINCgkJCQljLTkuOTk5LTEwLjA1LTI2LjIyMy0xMC4wNS0zNi4yMjIsMHMtOS45OTksMjYuMzUsMCwzNi4zOTlsMjc5LjEwMywzMDYuMjQxYzUuMzMxLDUuMzU3LDEyLjQyMiw3LjY1MiwxOS4zODYsNy4yOTYNCgkJCQljNi45ODgsMC4zNTYsMTQuMDU1LTEuOTM5LDE5LjM4Ni03LjI5NmwyNzkuMTI4LTMwNi4yNjhDNjE0LjUsMTYxLjEwNiw2MTQuNSwxNDQuODMyLDYwNC41MDEsMTM0Ljc4MnoiLz4NCgkJPC9nPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./static/hoodie3.png":
/*!****************************!*\
  !*** ./static/hoodie3.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/hoodie3-6667fc4a4931ebbe8bc6ea7d266a5ff9.png";

/***/ }),

/***/ "./static/ig.png":
/*!***********************!*\
  !*** ./static/ig.png ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ig-f5acd1a186c9887962f2ff0cdbaf8307.png";

/***/ }),

/***/ "./static/index.js":
/*!*************************!*\
  !*** ./static/index.js ***!
  \*************************/
/*! exports provided: DownArrow, hoodie, shirt, sweatshirt, landscape, soundcloud, ig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DownArrow_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DownArrow.svg */ "./static/DownArrow.svg");
/* harmony import */ var _DownArrow_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_DownArrow_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "DownArrow", function() { return _DownArrow_svg__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var _hoodie3_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hoodie3.png */ "./static/hoodie3.png");
/* harmony import */ var _hoodie3_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_hoodie3_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "hoodie", function() { return _hoodie3_png__WEBPACK_IMPORTED_MODULE_1___default.a; });
/* harmony import */ var _shirt2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shirt2.png */ "./static/shirt2.png");
/* harmony import */ var _shirt2_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shirt2_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "shirt", function() { return _shirt2_png__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony import */ var _sweatshirt_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sweatshirt.png */ "./static/sweatshirt.png");
/* harmony import */ var _sweatshirt_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sweatshirt_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "sweatshirt", function() { return _sweatshirt_png__WEBPACK_IMPORTED_MODULE_3___default.a; });
/* harmony import */ var _landscape_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landscape.jpg */ "./static/landscape.jpg");
/* harmony import */ var _landscape_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_landscape_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "landscape", function() { return _landscape_jpg__WEBPACK_IMPORTED_MODULE_4___default.a; });
/* harmony import */ var _static_soundcloud_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/soundcloud.png */ "./static/soundcloud.png");
/* harmony import */ var _static_soundcloud_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_soundcloud_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "soundcloud", function() { return _static_soundcloud_png__WEBPACK_IMPORTED_MODULE_5___default.a; });
/* harmony import */ var _static_ig_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/ig.png */ "./static/ig.png");
/* harmony import */ var _static_ig_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_ig_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "ig", function() { return _static_ig_png__WEBPACK_IMPORTED_MODULE_6___default.a; });








/***/ }),

/***/ "./static/landscape.jpg":
/*!******************************!*\
  !*** ./static/landscape.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/landscape-6b0abd081be83b8aa2c5a142dae76df1.jpg";

/***/ }),

/***/ "./static/shirt2.png":
/*!***************************!*\
  !*** ./static/shirt2.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/shirt2-893902a61e54312989a7df9122f0bb0c.png";

/***/ }),

/***/ "./static/soundcloud.png":
/*!*******************************!*\
  !*** ./static/soundcloud.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/sweatshirt.png":
/*!*******************************!*\
  !*** ./static/sweatshirt.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/sweatshirt-2cc4e657215817f1efe8957de7b83bcf.png";

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/phenotypez/Desktop/repos/OTG/on-the-grind/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map