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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Divider.tsx":
/*!********************************!*\
  !*** ./components/Divider.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/phenotypez/Desktop/repos/OTG/on-the-grind/components/Divider.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// @ts-check


const styles = {
  root: {
    width: '100%'
  },
  divider: {
    width: '100%',
    backgroundColor: 'black',
    height: '5px'
  } // vertDivider: {
  //   backgroundColor: 'black',
  //   height: '100%',
  // },

};

class Divider extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const {horizontal} = this.props;
    return __jsx("div", {
      style: styles.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Hidden"], {
      smUp: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
      style: Object.assign({}, styles.divider, {
        height: '2px'
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Hidden"], {
      mdUp: true,
      xsDown: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
      style: Object.assign({}, styles.divider, {
        height: '3px'
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Hidden"], {
      lgUp: true,
      smDown: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
      style: Object.assign({}, styles.divider, {
        height: '4px'
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Hidden"], {
      xlUp: true,
      mdDown: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
      style: Object.assign({}, styles.divider, {
        height: '5px'
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Hidden"], {
      lgDown: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
      style: Object.assign({}, styles.divider, {
        height: '6px'
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Divider);

/***/ }),

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

/***/ "./components/Hint.tsx":
/*!*****************************!*\
  !*** ./components/Hint.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hint; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/phenotypez/Desktop/repos/OTG/on-the-grind/components/Hint.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const styles = {
  hint: {
    display: 'flex',
    justifyContent: 'center',
    height: '70px'
  },
  hintBox: {
    fontFamily: 'Comfortaa, sans-serif',
    backgroundColor: '#e8f6f7',
    fontSize: '12px',
    border: 'none',
    borderRadius: '7px',
    padding: '3px',
    opacity: 0.98,
    width: '100%',
    textAlign: 'center'
  }
};
class Hint extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      open,
      handleClose
    } = this.props;
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
      style: styles.hint,
      open: open,
      onClose: handleClose,
      closeAfterTransition: true,
      BackdropComponent: _material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Backdrop"],
      BackdropProps: {
        timeout: 400
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Fade"], {
      in: open,
      style: styles.hintBox,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "Swipe to see next item."), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "Tap and hold to zoom.")))));
  }

}

/***/ }),

/***/ "./components/Item.tsx":
/*!*****************************!*\
  !*** ./components/Item.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Fade */ "@material-ui/core/Fade");
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_image_magnify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-image-magnify */ "react-image-magnify");
/* harmony import */ var react_image_magnify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_image_magnify__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/phenotypez/Desktop/repos/OTG/on-the-grind/components/Item.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @ts-ignore



const zoomDuration = 150;

class Item extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "updateWindowDimensions", () => {
      this.setState({
        width: window.innerWidth
      });
    });

    _defineProperty(this, "swipeDisabled", () => {
      this.setState({
        inMagnify: true
      });
      this.props.swipeDisabled();
    });

    _defineProperty(this, "swipeTimer", setTimeout(() => null, 0));

    _defineProperty(this, "touchStart", () => {
      this.swipeTimer = setTimeout(() => this.swipeDisabled(), zoomDuration);
    });

    _defineProperty(this, "touchEnd", () => {
      clearTimeout(this.swipeTimer);
      this.props.swipeEnabled();
      this.setState({
        inMagnify: false
      });
    });

    this.state = {
      width: 0,
      inMagnify: false
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  getImageDimension() {
    const {
      width
    } = this.state;

    switch (true) {
      // case width < 380:
      //   return width;
      case width < 600:
        return width;

      case width < 960:
        return 450;

      case width < 1280:
        return 600;

      case width < 1920:
        return 700;

      default:
        return 800;
    }
  }

  render() {
    const {
      article
    } = this.props;
    const width = this.getImageDimension();
    let rootStyle = {
      minHeight: this.getImageDimension() + 'px'
    };

    if (this.state.width < 600) {
      rootStyle = {
        minHeight: this.getImageDimension() + 'px'
      };
    }

    const itemStyle = {
      width: this.getImageDimension() + 'px'
    };
    const smallImage = {
      alt: '',
      width: width,
      height: width,
      src: article
    };
    const largeImage = {
      src: article,
      width: width * 1.7,
      height: width * 1.7
    };
    const inMagnify = this.state.inMagnify && !this.props.fingerMoving;
    return __jsx("div", {
      style: rootStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, __jsx(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
      in: true,
      timeout: 400,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, __jsx("div", {
      onTouchStart: this.touchStart,
      onTouchEnd: this.touchEnd,
      onMouseEnter: this.touchStart,
      onMouseLeave: this.touchEnd,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, inMagnify ? __jsx(react_image_magnify__WEBPACK_IMPORTED_MODULE_2___default.a, {
      imageStyle: {
        display: 'none'
      },
      enlargedImagePosition: "over",
      smallImage: smallImage,
      largeImage: largeImage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }) : __jsx(react_image_magnify__WEBPACK_IMPORTED_MODULE_2___default.a, {
      pressDuration: zoomDuration,
      imageStyle: itemStyle,
      enlargedImagePosition: "over",
      enlargedImageContainerDimensions: {
        width: '60%',
        height: '60%'
      },
      smallImage: smallImage,
      largeImage: largeImage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Item);

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

/***/ "./components/Payment.tsx":
/*!********************************!*\
  !*** ./components/Payment.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Payment; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_stripe_checkout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-stripe-checkout */ "react-stripe-checkout");
/* harmony import */ var react_stripe_checkout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_stripe_checkout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_paypal_express_checkout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-paypal-express-checkout */ "react-paypal-express-checkout");
/* harmony import */ var react_paypal_express_checkout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_paypal_express_checkout__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/phenotypez/Desktop/repos/OTG/on-the-grind/components/Payment.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @ts-check




const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
    backgroundColor: '#e8f6f7'
  },
  rootMobile: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '15px',
    backgroundColor: '#e8f6f7'
  },
  divider: {
    width: '5px',
    height: '100%',
    backgroundColor: 'black',
    margin: '30px'
  },
  paypal: {
    width: '160px',
    display: 'flex',
    justifyContent: 'center'
  },
  dividerMobile: {
    width: '5px',
    height: '100%',
    backgroundColor: 'black',
    margin: '30px'
  },
  paypalMobile: {
    width: '160px',
    display: 'flex',
    justifyContent: 'center',
    padding: '5px'
  },
  stripe: {
    color: 'white',
    backgroundColor: '#4f694f',
    border: 'none',
    borderRadius: '7px',
    padding: '20px',
    cursor: 'pointer',
    fontFamily: 'Comfortaa, sans-serif'
  },
  paypalSpecific: {
    size: 'small',
    color: 'gold',
    shape: 'pill',
    label: 'checkout'
  }
};
class Payment extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "onToken", token => {
      fetch('/save-stripe-token', {
        method: 'POST',
        body: JSON.stringify(token)
      }).then(response => {
        response.json().then(data => {
          alert(`We are in business, ${data.email}`);
        });
      });
    });

    this.state = {};
  }

  render() {
    const client = {
      sandbox: 'YOUR-SANDBOX-APP-ID',
      production: 'YOUR-PRODUCTION-APP-ID'
    };
    return __jsx("div", {
      onMouseLeave: this.props.hidePayment,
      onMouseEnter: this.props.showPayment,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_2___default.a, {
      xsDown: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, __jsx("div", {
      style: styles.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, __jsx("div", {
      style: styles.paypal,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, __jsx(react_stripe_checkout__WEBPACK_IMPORTED_MODULE_1___default.a, {
      allowRememberMe: false,
      token: this.onToken,
      stripeKey: "pk_test_BXumiCFN2EJETGHnEhpnQr7T00OJnVoKga",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, __jsx("button", {
      style: styles.stripe,
      className: "btn btn-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, "Pay With Card"))), __jsx("div", {
      style: styles.paypal,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, __jsx(react_paypal_express_checkout__WEBPACK_IMPORTED_MODULE_3___default.a, {
      style: styles.paypalSpecific,
      client: client,
      currency: 'USD',
      total: 1.0,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    })))), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_2___default.a, {
      smUp: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, __jsx("div", {
      style: styles.rootMobile,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, __jsx("div", {
      style: styles.paypalMobile,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, __jsx(react_stripe_checkout__WEBPACK_IMPORTED_MODULE_1___default.a, {
      allowRememberMe: false,
      token: this.onToken,
      stripeKey: "pk_test_BXumiCFN2EJETGHnEhpnQr7T00OJnVoKga",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, __jsx("button", {
      style: styles.stripe,
      className: "btn btn-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, "Pay With Card"))), __jsx("div", {
      style: styles.paypalMobile,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, __jsx(react_paypal_express_checkout__WEBPACK_IMPORTED_MODULE_3___default.a, {
      style: styles.paypalSpecific,
      client: client,
      currency: 'USD',
      total: 1.0,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    })))));
  }

}

/***/ }),

/***/ "./components/index.ts":
/*!*****************************!*\
  !*** ./components/index.ts ***!
  \*****************************/
/*! exports provided: Header, Item, Payment, Divider, Hint, ItemRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./components/Header.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _Header__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Item */ "./components/Item.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return _Item__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Payment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Payment */ "./components/Payment.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Payment", function() { return _Payment__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Divider */ "./components/Divider.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Divider", function() { return _Divider__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Hint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Hint */ "./components/Hint.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hint", function() { return _Hint__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _ItemRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ItemRow */ "./components/ItemRow.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemRow", function() { return _ItemRow__WEBPACK_IMPORTED_MODULE_5__["default"]; });








/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

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

      var cb = listeners.get(entry.target);

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

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

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
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
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

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
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

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

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


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

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
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
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


var createRouter = function createRouter() {
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
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

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


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

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

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/Shop.tsx":
/*!************************!*\
  !*** ./pages/Shop.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Shop; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_easy_swipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-easy-swipe */ "react-easy-swipe");
/* harmony import */ var react_easy_swipe__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_easy_swipe__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components */ "./components/index.ts");
/* harmony import */ var _static__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static */ "./static/index.js");
var _jsxFileName = "/home/phenotypez/Desktop/repos/OTG/on-the-grind/pages/Shop.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const maxTouchScreenWidth = 1100;
const styles = {
  root: {
    // display: 'flex',
    // alignItems: 'center',
    // flexDirection: 'column',
    // height: '100vh',
    margin: '-8px'
  },
  hero: {},
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative',
    width: '100%'
  },
  mobileContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '20px',
    position: 'absolute',
    bottom: '0',
    width: '100%'
  },
  downArrow: {
    width: '4vw',
    rot: '270'
  },
  rightArrow: {
    width: '4vw',
    transform: `rotate(270deg) `,
    paddingRight: '15px'
  },
  leftArrow: {
    width: '4vw',
    transform: `rotate(90deg) `,
    paddingLeft: '15px'
  },
  upArrow: {
    width: '4vw',
    transform: `rotate(180deg)`
  },
  paymentText: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buyNow: {
    padding: '10px',
    fontSize: '20px',
    fontFamily: 'Comfortaa, sans-serif'
  },
  paymentPanel: {
    backgroundColor: '#e8f6f7'
  }
};
class Shop extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "next", () => {
      if (this.state.swipeDisabled) {
        return;
      }

      const {
        items
      } = this.state;
      let {
        itemIndex
      } = this.state;

      if (itemIndex >= items.length - 1) {
        itemIndex = 0;
      } else {
        itemIndex++;
      }

      this.setState({
        itemIndex
      });
    });

    _defineProperty(this, "last", () => {
      if (this.state.swipeDisabled) {
        return;
      }

      const {
        items
      } = this.state;
      let {
        itemIndex
      } = this.state;

      if (itemIndex <= 0) {
        itemIndex = items.length - 1;
      } else {
        itemIndex--;
      }

      this.setState({
        itemIndex
      });
    });

    _defineProperty(this, "swipeDisabled", () => {
      this.setState({
        swipeDisabled: true
      });
    });

    _defineProperty(this, "swipeEnabled", () => {
      this.setState({
        swipeDisabled: false
      });
      this.setState({
        fingerMoving: false
      });
    });

    _defineProperty(this, "onSwipeMove", position => {
      // finger moving tells mobile small item not to disappear when a finger
      // is dragged slightly (since the magnified won't pop up in this case)
      if (Math.abs(position.x) > 10 || Math.abs(position.y) > 10) {
        this.setState({
          fingerMoving: true
        });
      }
    });

    _defineProperty(this, "showPayment", () => {
      if (this.state.width < maxTouchScreenWidth) {
        return;
      }

      this.setState({
        showPayment: true
      });
    });

    _defineProperty(this, "hidePayment", () => {
      if (this.state.width < maxTouchScreenWidth) {
        return;
      }

      this.setState({
        showPayment: false
      });
    });

    _defineProperty(this, "togglePayment", () => {
      const {
        showPayment
      } = this.state;
      this.setState({
        showPayment: !showPayment
      });
    });

    _defineProperty(this, "handleClose", () => {
      this.setState({
        modalOpen: false
      });
    });

    this.state = {
      itemIndex: 0,
      showPayment: false,
      items: [_static__WEBPACK_IMPORTED_MODULE_5__["shirt"], _static__WEBPACK_IMPORTED_MODULE_5__["sweatshirt"], _static__WEBPACK_IMPORTED_MODULE_5__["hoodie"]],
      width: 0,
      swipeDisabled: false,
      fingerMoving: false,
      modalOpen: true
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      width: window.innerWidth
    });
  }

  getHeroDimension() {
    const {
      width
    } = this.state;

    switch (true) {
      case width < 600:
        return width;

      case width < 960:
        return 450;

      case width < 1280:
        return 600;

      case width < 1920:
        return 700;

      default:
        return 800;
    }
  }

  render() {
    const {
      items,
      itemIndex,
      showPayment,
      modalOpen
    } = this.state;
    return __jsx("div", {
      style: styles.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221
      },
      __self: this
    }, __jsx(react_easy_swipe__WEBPACK_IMPORTED_MODULE_2___default.a, {
      onSwipeLeft: this.next,
      onSwipeRight: this.last,
      onSwipeMove: this.onSwipeMove,
      allowMouseEvents: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227
      },
      __self: this
    }, __jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Comfortaa",
      rel: "stylesheet",
      key: "google-font-comfortaa",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228
      },
      __self: this
    })), __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["Header"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234
      },
      __self: this
    }), __jsx("img", {
      style: {
        height: this.getHeroDimension() + 'px',
        position: 'absolute',
        opacity: 0.9,
        objectFit: 'cover',
        width: '100%'
      },
      src: _static__WEBPACK_IMPORTED_MODULE_5__["landscape"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235
      },
      __self: this
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Hidden"], {
      smUp: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245
      },
      __self: this
    }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["Hint"], {
      open: modalOpen,
      handleClose: this.handleClose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246
      },
      __self: this
    })), __jsx("div", {
      style: styles.content,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Hidden"], {
      xsDown: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249
      },
      __self: this
    }, __jsx("img", {
      src: _static__WEBPACK_IMPORTED_MODULE_5__["DownArrow"],
      style: styles.leftArrow,
      onClick: this.last,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250
      },
      __self: this
    })), items.map((item, i) => i == itemIndex && __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["Item"], {
      fingerMoving: this.state.fingerMoving,
      article: item,
      swipeDisabled: this.swipeDisabled,
      swipeEnabled: this.swipeEnabled,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259
      },
      __self: this
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Hidden"], {
      xsDown: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267
      },
      __self: this
    }, __jsx("img", {
      src: _static__WEBPACK_IMPORTED_MODULE_5__["DownArrow"],
      style: styles.rightArrow,
      onClick: this.next,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268
      },
      __self: this
    }))), __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275
      },
      __self: this
    }), __jsx("div", {
      style: styles.paymentPanel,
      onMouseLeave: this.hidePayment,
      onMouseEnter: this.showPayment,
      onClick: this.togglePayment,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276
      },
      __self: this
    }, __jsx("div", {
      style: styles.paymentText,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281
      },
      __self: this
    }, __jsx("span", {
      style: styles.buyNow,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282
      },
      __self: this
    }, "Buy "), showPayment ? __jsx("img", {
      src: _static__WEBPACK_IMPORTED_MODULE_5__["DownArrow"],
      style: styles.upArrow,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284
      },
      __self: this
    }) : __jsx("img", {
      src: _static__WEBPACK_IMPORTED_MODULE_5__["DownArrow"],
      style: styles.downArrow,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286
      },
      __self: this
    }), __jsx("span", {
      style: styles.buyNow,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288
      },
      __self: this
    }, " Now"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Collapse"], {
      in: showPayment,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291
      },
      __self: this
    }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["Payment"], {
      hidePayment: this.hidePayment,
      showPayment: this.showPayment,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292
      },
      __self: this
    })), __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297
      },
      __self: this
    })));
  }

}

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

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAAD09PTr6+v8/Pzj4+NeXl50dHRGRkZSUlKysrKkpKTo6OgXFxebm5t4eHiHh4fPz88jIyOsrKyNjY339/c1NTUrKyvY2NgwMDAeHh64uLhubm7CwsIbGxsTExN+fn6VlZVNTU09PT2/v79nZ2dhYWFCQkLU1NTKysp4pUwDAAALrklEQVR4nN2d6XaCMBCFCZuy1IVdUREUK+//giUoFlknEiB4f3lsq/M1ZDKZycKh4RWcDPeixIt1pkMsK8uL4xrG/icY4du5IT88cJfyYqP5d56rShS8RF1tFvJydxrSiMEIHSVlu0o1aGXpR806x79DtecghCfFMo+eDaB7SUjUMHaGMIY+oXNWEzK6V2NuryuZuj2UCV3rLtV1Oqhs3dMiuiZRJVxsebEH3kMiL2kXikZRI/y5HfvTvaRbBi3D6BAaUdjn2ayVeqPjeGgQOguVOh/WPZQpDCH9CaMw+chzQiSZ8eSEkeYNhZdJ9w+TEjqaRNG91Es49mPsRWgNz4fFJ32GyB6EZ2EMvIf8n9EJT7dh+19ZtvXp2PEhoaKO8nwW5Z3d8QidEDIroi3b/ygs/4RwMdwA2C5p9UEEQE64N0f0MCWJCXkzEhPK99F7YFH6amhCa7oGfEi8EjpVMsLldWI+LIksxiEhDNZTuNCq7JBk8khAuF9N5EKr8pdDEF7UqbkK2t7oEyrJ1FRvkta0CeNxw9BuCRu6hIupB4mqbCAijDCcGqdWsBgOQhispmZpkAaZNQIIDVYBOc4ETKi6CV1t0kC0VaK560+4M5kZ52skqp1RahfhTmUZECN2tWIH4cmcGqFTZoe76SBk18n8S21HbCe0prYeJPNzwvXUtgMVtg39bYSLQSpKA0gMPyOM2ZjvQsS3xKjNhMp9arsJpDdPphoJXX9qq4kkNaYZmwiZjbabtG1a3dBEeGY3GG2Q2rB2rIFQ0ac2mFwN3qae0JiTl8nF19dR6wlZSqvBta0d+GsJ17PrhA9pUMIda3k1qPi6UbGOcF4jYVH3msliDeFmLuFojWqmGVXC5Rz9aC6hWpeqEO7Zn9W3KankbSqEhxk/o6lEqzxklAldtgow5BLKhbcy4WJqC3tL7SCcYTxa1qWVkM0SDJnubYQu2+lfoOIWwnlG3GV5p0ZCZd4jRS7baiScb0D6rrvbQKjMJ33YLt5qIJx3vFbU0aglVOY6LayquIqhQDi3/GGbrm4N4axnTWXxhxrCzdRWUZV5qhDu5j6peNf/FONFKE9tE2WdK4Ta1CZRlheUCE/fEbAVtCwRHiaxQnxqiM/2S4TbIb6kVbbgHbXVaqVppuonnqfTnrm9E7qUP71LonRdHYrxceDE4fWzTe5Nit8Ix45nhLr8exBZV4ruIHkjHHNWgXtdU1F6F9PbMibsC4TLET1pEvNtZfd9TCv0sNcFwtVo5TTeOqFWwnTgolU4SQqEY82bxCMuDgnthOk8jo5nl5wX4WhV+1Xe6dsJkUFlzSd/fhGGYyURZSAhCqgsTFZfhKPt15LzPtFFSMc1JPsn4WW0ue+DawshpDFEZ9+CCUfZLmJjB0lCSKGQmSVOOTr/rfJHczgwu3uFf52K8+kPrjuIEDnH3naYD8KAbi5fuJ4Nh88LznluZJvlKh9cRxghinoPYsklI/ylOq/YYtt2mHCRWYkdhsCnRP+EVyBh/zUT+i0jjKl2wyM2zRVyQiV9i48PS/QJ4b63kz9nhNSSbB6O3+sIf/ErnCYhJERy31AkzAgpORpbU3CHriNcfkrY2zbVSAkNOo5GOPwgHIjQJdz3bETvkhLSGe/vmGIFI4T6UqyeXUhUUkKFRlB6zYo9QEKVgDDo6U4PKeGNAiCnBQMR9s3jhikhlY0xj92ceI5ypUyo9IvA1YCjs7fpn9CnTNhzsev2xAVUKr8PQisn3NcQ4kf4A8Kg32MqGNwPlcRPifBHp0bYtxe53L53eKuLgxLK/YLKHWf0jW75NZ8T4kg5IzxRJFz2a4IL1zufb0YvwjM/QBu6Pifygn7f3iWBJx+7l5zzAZSgp8rbfjkwITp7pvysWV82R4kQUklbkVj25hbHt+cyRg9F1aeUKuG7LuGWiFHmIiI4T0tnSPwlt10QuE2BEJ8zqA5MiJBjkVRZYo6kfs+vIpTkFuM/vMYbFy2FnHAtPPcD0PQ0NVIIMjiLlBEOiI+EfSPMcGoIB21DhM9BABt9JiHU8Ydfi4TaRIQEk9oNR7B0nSFC5EBDsQ1HEBRlhH6BUFw1EA7cD7FuQHcDJky95oNQFQGEw7dh+nmwQQNKaGumWCW0wwkJHViaF0ro/aZRdUZodhBqYxGiDagRgYSihuMVEGH24I7QD1N/CgrJgYRCREY4ShvCUjgb2HiYZBFZldCalDCCpHCAhGo9IT8tIWhqu4HFpRtCwlH6IWwb2ppTAL8lxpn1rLUhaCXXIZ0DAwiVrBQ+S8IbaAYsRvMlVLjdEIQM9cOIcwEul9GnNIDkGX+5PaCpGfU0DiRsc7gTJIC1mBwPQWvTXS6AbDr0mRwPIZbbBgcqlUsuzoWCCEP8YpQ2dCCu1Ntz6Az5T1i1kfe0hKAVldeAQ6DA9O4yRwirZ2iIg214skOLNULYCtRzSrgEpXS8KwnhCJ5mDSu6ySnhDpZAtkWm2lCG1dz0KCX8AZeRGSKMgOnS4w6v+gIvVWCHUIauctICTAg+u0wAEw7cDxfg4tMmW7kH36V+P7DQhhcfXJjHG55TQhe+ilO8431Jj9WU74TBG2EwHGEQEqxc8KLHOm/SFSu8cjKM0wGPkumLvYIz3TvDMH5whXQVpG85mPCMf3gT8e/vDSPbQXFI3zJwPCnFwf4h4yW3ol0uJ9evRlQA9k8PQouwNC5621S4L+j4hZeaLmyzt/JX+MYkUcp+iP8g+308Xc3eStKHzPaOTyXbXF4uKZcuPMXnIjM0mwZgwi86LuJdWUfBhMF3bcX/1/3yJMT+8SuVrZPMCBm8Y4WGHmWVjND4lqN33qXLL8LxNq+NKg/9Ex6+4hSzkh41+CchKPM4Nz1PTn7uVv/Gx1RCRcJvO7sFK3wjRF93tAnH7d4Jv+14mtdD+iL8YJkp41qXCINvOukLyz6VCNF5apMo63U++4tw+QWnzxYkyhVCeFJxFkp2FULK24Gn1v/Bif+ExrecXorlRTWE2W6Jb1HhbusC4ewPK/+Xp9QSjneIy+AqXpFQJHS/ZdR/yze/nZQMW3XLvnzURBh8R+JUiBoJJzo9kbbeL9Qpnav/DUk3O2gjhKw2ZV1n1Eb4BceyS6idcDn36FRcdBAGc7/hwjc6CNFl3rFbtbhcve9p1gG4WL1RvkoIWo7JqqrXPdXdSnaZb2RTc2VX7c1ys7kHuCyx7nbn2vsP53rRxdatgaklhO17Y05C7SKd+ls65VkW9uuvWm24S3aO4/61HqWBcD+/IUP6JSJEl/GPoe8nPm4gabyXG7rfnRHZjberN9+tPqvrSEVtT04YkC0DnFZ+NVrrJkTufO6ZSxq8TAchcvsf5DuOvPLNnFDCuawGE5of0S5CdJlD2bRytyoJ4Xgn7n8uSWlH6CBEMesPqnTrIOgiRAe2EaWaOS8hIduI3YAAQhSz2xch2zYAhEhhNUusR93GgwjRL5sPqt4+TJAQslniv7cO9ISEaOezltcQj5duswkIkauxNZmyfSAgmBCdLJZcqq3tuk0mJExHDXZyjMLmB2w2ASFasrLe3SPZvUhCiAw2rgwGd0FyQiZCOL4x50SFEDnwTbiDSLx3zSX6EiK0mbIZBa2u+EKZEEXHyZJw2+6pBA1CZFjTjBuCRuRiehCmzThFhHONKzX64QhRQOkSRrikRXkZybCEqQ5jNqNofWzn54QIhfpIEw7+Co5C6RKinSaNwKj7HfnCAQmxyxnareoq6RBPlzBlDLcDtqNkNhU+xyNE6Pd8HIjxbikfDRC0CRFyZXOAMOd4gCViOkSFMNV+QbdD8uGuf/NlokWIMs9qU3lcbcGHJEKBokiYSja9nmOkKHjXBTxFARBdwlSydvQ+jXZsKTEPlB7Ol6gT4ph1o/keaVOKnq9t8juBaGoAQixDWVtmAs0/6okZrhXiuS1MAxFinZxIXoR+6zMrbP1wIUdO42qY/hqQ8KHgZLgXZb2p6LxQHNc40e52Ff0BlAHc4oHeFcYAAAAASUVORK5CYII="

/***/ }),

/***/ "./static/sweatshirt.png":
/*!*******************************!*\
  !*** ./static/sweatshirt.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/sweatshirt-2cc4e657215817f1efe8957de7b83bcf.png";

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/Shop.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/phenotypez/Desktop/repos/OTG/on-the-grind/pages/Shop.tsx */"./pages/Shop.tsx");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/Fade":
/*!*****************************************!*\
  !*** external "@material-ui/core/Fade" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Fade");

/***/ }),

/***/ "@material-ui/core/Hidden":
/*!*******************************************!*\
  !*** external "@material-ui/core/Hidden" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

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

/***/ "react-easy-swipe":
/*!***********************************!*\
  !*** external "react-easy-swipe" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-easy-swipe");

/***/ }),

/***/ "react-image-magnify":
/*!**************************************!*\
  !*** external "react-image-magnify" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-image-magnify");

/***/ }),

/***/ "react-paypal-express-checkout":
/*!************************************************!*\
  !*** external "react-paypal-express-checkout" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-paypal-express-checkout");

/***/ }),

/***/ "react-stripe-checkout":
/*!****************************************!*\
  !*** external "react-stripe-checkout" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stripe-checkout");

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
//# sourceMappingURL=Shop.js.map