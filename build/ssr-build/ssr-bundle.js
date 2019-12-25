module.exports =
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "JkW7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "5PpG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__("KM04");

var _preact2 = __webpack_require__("OA8u");

var _changers = __webpack_require__("Jslm");

var _transformers = __webpack_require__("v4R3");

__webpack_require__("6D7Z");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var weatherChar = {
  Snow: "0x1F328",
  Thunderstorm: "0x26C8",
  "Heavy Rain": "0x1F327",
  "Light Rain": "0x1F327",
  Showers: "0x1F326",
  "Heavy Cloud": "0x2601",
  "Light Cloud": "0x1F324",
  Clear: "0x2600"
};

var DEGREE_SYMBOL = String.fromCharCode(0x00b0);

var LocationInput = function (_Component) {
  _inherits(LocationInput, _Component);

  function LocationInput(props) {
    _classCallCheck(this, LocationInput);

    var _this = _possibleConstructorReturn(this, (LocationInput.__proto__ || Object.getPrototypeOf(LocationInput)).call(this, props));

    _this.state = {
      enteredLocation: ""
    };

    _this.onLocationInput = _this.onLocationInput.bind(_this);
    _this.onSubmitLocation = _this.onSubmitLocation.bind(_this);
    return _this;
  }

  _createClass(LocationInput, [{
    key: "onLocationInput",
    value: function onLocationInput(ev) {
      this.setState({
        enteredLocation: ev.target.value
      });
    }
  }, {
    key: "onSubmitLocation",
    value: function onSubmitLocation(ev) {
      ev.preventDefault();
      this.props.onSetLocation(this.state.enteredLocation);
    }
  }, {
    key: "render",
    value: function render() {
      return (0, _preact.h)(
        "form",
        {
          className: "flex justify-center items-center",
          onSubmit: this.onSubmitLocation
        },
        (0, _preact.h)("input", {
          type: "text",
          className: "button-reset br4 pa2 bw0 fw5 f2",
          onChange: this.onLocationInput,
          placeholder: "Enter city name"
        })
      );
    }
  }]);

  return LocationInput;
}(_preact.Component);

var LocationList = function LocationList(_ref) {
  var _ref$locationList = _ref.locationList,
      locationList = _ref$locationList === undefined ? [] : _ref$locationList,
      doFetchWeather = _ref.doFetchWeather;

  return (0, _preact.h)(
    "div",
    { className: "flex flex-row flex-wrap justify-evenly items-center w-100 h-40 pt4" },
    locationList.map(function (locationItem) {
      return (0, _preact.h)(
        "button",
        {
          className: "cursor-pointer button-reset bw2 text-center b--solid f4 fw4 pa4 bg-transparent br4 shadow-5 mt4",
          onClick: function onClick() {
            return doFetchWeather(locationItem.woeid);
          }
        },
        locationItem.title,
        " "
      );
    })
  );
};

var ForecastList = function ForecastList(_ref2) {
  var _ref2$weatherForecast = _ref2.weatherForecast,
      weatherForecast = _ref2$weatherForecast === undefined ? {} : _ref2$weatherForecast;
  var _weatherForecast$fore = weatherForecast.forecast,
      forecast = _weatherForecast$fore === undefined ? [] : _weatherForecast$fore;

  return (0, _preact.h)(
    "div",
    { className: "flex flex-row h-80 w-100 justify-evenly pa2 mt5" },
    forecast.map(function (_ref3) {
      var forecastType = _ref3.forecastType,
          minimumTemperature = _ref3.minimumTemperature,
          maximumTemperature = _ref3.maximumTemperature,
          date = _ref3.date;

      var weatherCharCode = weatherChar[forecastType] || "0x2600";
      return (0, _preact.h)(
        "div",
        { className: "flex flex-column pa2 bg-light-gray ma2 items-center w-20 br3 shadow-5" },
        (0, _preact.h)(
          "span",
          null,
          date
        ),
        (0, _preact.h)(
          "span",
          { className: "f-5 dark-blue" },
          String.fromCodePoint(weatherCharCode)
        ),
        (0, _preact.h)(
          "span",
          { className: "f4" },
          "" + minimumTemperature + DEGREE_SYMBOL + "C",
          " -",
          " ",
          "" + maximumTemperature + DEGREE_SYMBOL + "C"
        )
      );
    })
  );
};

var WeatherView = function (_Component2) {
  _inherits(WeatherView, _Component2);

  function WeatherView() {
    _classCallCheck(this, WeatherView);

    return _possibleConstructorReturn(this, (WeatherView.__proto__ || Object.getPrototypeOf(WeatherView)).apply(this, arguments));
  }

  _createClass(WeatherView, [{
    key: "render",
    value: function render(_ref4) {
      var locationList = _ref4.locationList,
          weatherForecast = _ref4.weatherForecast,
          doSetLocation = _ref4.doSetLocation,
          doFetchWeather = _ref4.doFetchWeather;

      return (0, _preact.h)(
        "div",
        { className: "h-100 flex flex-column pa6" },
        (0, _preact.h)(LocationInput, { onSetLocation: doSetLocation }),
        (0, _preact.h)(
          "div",
          { className: "w-100 flex flex-column" },
          (0, _preact.h)(LocationList, {
            locationList: locationList,
            doFetchWeather: doFetchWeather
          }),
          (0, _preact.h)(ForecastList, { weatherForecast: weatherForecast })
        )
      );
    }
  }]);

  return WeatherView;
}(_preact.Component);

exports.default = (0, _preact2.connect)(_transformers.transformStoreDataToUIData, _changers.getDataChangers)(WeatherView);

/***/ }),

/***/ "6D7Z":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "8IVf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _preact = __webpack_require__("KM04");

var _preact2 = __webpack_require__("OA8u");

var _view = __webpack_require__("5PpG");

var _view2 = _interopRequireDefault(_view);

var _sources = __webpack_require__("Bw4P");

var _sources2 = _interopRequireDefault(_sources);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _preact.h)(_view2.default, null);

exports.default = function () {
  return (0, _preact.h)(
    _preact2.Provider,
    { store: (0, _sources2.default)() },
    _ref
  );
};

/***/ }),

/***/ "Bw4P":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInitialState = undefined;

var _reduxZero = __webpack_require__("L0+G");

var _reduxZero2 = _interopRequireDefault(_reduxZero);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getInitialState = exports.getInitialState = function getInitialState() {
  return {
    location: "",
    locationList: [],
    weatherForecast: []
  };
};

var makeWeatherStore = function makeWeatherStore() {
  return (0, _reduxZero2.default)(getInitialState);
};

exports.default = makeWeatherStore;

/***/ }),

/***/ "JkW7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _weatherApp = __webpack_require__("8IVf");

var _weatherApp2 = _interopRequireDefault(_weatherApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _weatherApp2.default;

/***/ }),

/***/ "Jslm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDataChangers = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _transformers = __webpack_require__("v4R3");

var getDataChangers = exports.getDataChangers = function getDataChangers(store) {
  return {
    doSetLocation: function doSetLocation(state, location) {
      return fetch("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search?query=" + location, { mode: "cors" }).then(function (response) {
        return response.json();
      }).then(function (responseJSON) {
        return _extends({}, state, {
          locationList: responseJSON,
          location: location
        });
      });
    },
    doFetchWeather: function doFetchWeather(state, woeid) {
      return fetch("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/" + woeid, { mode: "cors" }).then(function (response) {
        return response.json();
      }).then(function (responseJSON) {
        return _extends({}, state, {
          weatherForecast: (0, _transformers.transformWeatherForecast)(responseJSON)
        });
      });
    }
  };
};

/***/ }),

/***/ "KM04":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function () {
  "use strict";
  function e(e, t) {
    var n,
        o,
        r,
        i,
        l = W;for (i = arguments.length; i-- > 2;) {
      P.push(arguments[i]);
    }t && null != t.children && (P.length || P.push(t.children), delete t.children);while (P.length) {
      if ((o = P.pop()) && void 0 !== o.pop) for (i = o.length; i--;) {
        P.push(o[i]);
      } else "boolean" == typeof o && (o = null), (r = "function" != typeof e) && (null == o ? o = "" : "number" == typeof o ? o += "" : "string" != typeof o && (r = !1)), r && n ? l[l.length - 1] += o : l === W ? l = [o] : l.push(o), n = r;
    }var a = new T();return a.nodeName = e, a.children = l, a.attributes = null == t ? void 0 : t, a.key = null == t ? void 0 : t.key, void 0 !== M.vnode && M.vnode(a), a;
  }function t(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function n(e, t) {
    e && ("function" == typeof e ? e(t) : e.current = t);
  }function o(n, o) {
    return e(n.nodeName, t(t({}, n.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : n.children);
  }function r(e) {
    !e.__d && (e.__d = !0) && 1 == V.push(e) && (M.debounceRendering || D)(i);
  }function i() {
    var e;while (e = V.pop()) {
      e.__d && x(e);
    }
  }function l(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && a(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function a(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function u(e) {
    var n = t({}, e.attributes);n.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === n[r] && (n[r] = o[r]);
    }return n;
  }function c(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function p(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function s(e, t, o, r, i) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n(o, null), n(r, e);else if ("class" !== t || i) {
      if ("style" === t) {
        if (r && "string" != typeof r && "string" != typeof o || (e.style.cssText = r || ""), r && "object" == (typeof r === "undefined" ? "undefined" : _typeof(r))) {
          if ("string" != typeof o) for (var l in o) {
            l in r || (e.style[l] = "");
          }for (var l in r) {
            e.style[l] = "number" == typeof r[l] && !1 === E.test(l) ? r[l] + "px" : r[l];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) r && (e.innerHTML = r.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var a = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), r ? o || e.addEventListener(t, _, a) : e.removeEventListener(t, _, a), (e.__l || (e.__l = {}))[t] = r;
      } else if ("list" !== t && "type" !== t && !i && t in e) {
        try {
          e[t] = null == r ? "" : r;
        } catch (e) {}null != r && !1 !== r || "spellcheck" == t || e.removeAttribute(t);
      } else {
        var u = i && t !== (t = t.replace(/^xlink:?/, ""));null == r || !1 === r ? u ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof r && (u ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), r) : e.setAttribute(t, r));
      }
    } else e.className = r || "";
  }function _(e) {
    return this.__l[e.type](M.event && M.event(e) || e);
  }function f() {
    var e;while (e = A.shift()) {
      M.afterMount && M.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function d(e, t, n, o, r, i) {
    H++ || (R = null != r && void 0 !== r.ownerSVGElement, B = null != e && !("__preactattr_" in e));var l = h(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --H || (B = !1, i || f()), l;
  }function h(e, t, n, o, r) {
    var i = e,
        l = R;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), v(e, !0))), i.__preactattr_ = !0, i;var u = t.nodeName;if ("function" == typeof u) return N(e, t, n, o);if (R = "svg" === u || "foreignObject" !== u && R, u += "", (!e || !a(e, u)) && (i = c(u, R), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), v(e, !0);
    }var p = i.firstChild,
        s = i.__preactattr_,
        _ = t.children;if (null == s) {
      s = i.__preactattr_ = {};for (var f = i.attributes, d = f.length; d--;) {
        s[f[d].name] = f[d].value;
      }
    }return !B && _ && 1 === _.length && "string" == typeof _[0] && null != p && void 0 !== p.splitText && null == p.nextSibling ? p.nodeValue != _[0] && (p.nodeValue = _[0]) : (_ && _.length || null != p) && m(i, _, n, o, B || null != s.dangerouslySetInnerHTML), y(i, t.attributes, s), R = l, i;
  }function m(e, t, n, o, r) {
    var i,
        a,
        u,
        c,
        s,
        _ = e.childNodes,
        f = [],
        d = {},
        m = 0,
        b = 0,
        y = _.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = _[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (m++, d[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (f[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      c = t[C], s = null;var k = c.key;if (null != k) m && void 0 !== d[k] && (s = d[k], d[k] = void 0, m--);else if (b < g) for (i = b; i < g; i++) {
        if (void 0 !== f[i] && l(a = f[i], c, r)) {
          s = a, f[i] = void 0, i === g - 1 && g--, i === b && b++;break;
        }
      }s = h(s, c, n, o), u = _[C], s && s !== e && s !== u && (null == u ? e.appendChild(s) : s === u.nextSibling ? p(u) : e.insertBefore(s, u));
    }if (m) for (var C in d) {
      void 0 !== d[C] && v(d[C], !1);
    }while (b <= g) {
      void 0 !== (s = f[g--]) && v(s, !1);
    }
  }function v(e, t) {
    var o = e._component;o ? k(o) : (null != e.__preactattr_ && n(e.__preactattr_.ref, null), !1 !== t && null != e.__preactattr_ || p(e), b(e));
  }function b(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;v(e, !0), e = t;
    }
  }function y(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || s(e, o, n[o], n[o] = void 0, R);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || s(e, o, n[o], n[o] = t[o], R);
    }
  }function g(e, t, n) {
    var o,
        r = F.length;e.prototype && e.prototype.render ? (o = new e(t, n), U.call(o, t, n)) : (o = new U(t, n), o.constructor = e, o.render = w);while (r--) {
      if (F[r].constructor === e) return o.__b = F[r].__b, F.splice(r, 1), o;
    }return o;
  }function w(e, t, n) {
    return this.constructor(e, n);
  }function C(e, t, o, i, l) {
    e.__x || (e.__x = !0, e.__r = t.ref, e.__k = t.key, delete t.ref, delete t.key, void 0 === e.constructor.getDerivedStateFromProps && (!e.base || l ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, i)), i && i !== e.context && (e.__c || (e.__c = e.context), e.context = i), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== o && (1 !== o && !1 === M.syncComponentUpdates && e.base ? r(e) : x(e, 1, l)), n(e.__r, e));
  }function x(e, n, o, r) {
    if (!e.__x) {
      var i,
          l,
          a,
          c = e.props,
          p = e.state,
          s = e.context,
          _ = e.__p || c,
          h = e.__s || p,
          m = e.__c || s,
          b = e.base,
          y = e.__b,
          w = b || y,
          N = e._component,
          U = !1,
          S = m;if (e.constructor.getDerivedStateFromProps && (p = t(t({}, p), e.constructor.getDerivedStateFromProps(c, p)), e.state = p), b && (e.props = _, e.state = h, e.context = m, 2 !== n && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(c, p, s) ? U = !0 : e.componentWillUpdate && e.componentWillUpdate(c, p, s), e.props = c, e.state = p, e.context = s), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !U) {
        i = e.render(c, p, s), e.getChildContext && (s = t(t({}, s), e.getChildContext())), b && e.getSnapshotBeforeUpdate && (S = e.getSnapshotBeforeUpdate(_, h));var L,
            T,
            P = i && i.nodeName;if ("function" == typeof P) {
          var W = u(i);l = N, l && l.constructor === P && W.key == l.__k ? C(l, W, 1, s, !1) : (L = l, e._component = l = g(P, W, s), l.__b = l.__b || y, l.__u = e, C(l, W, 0, s, !1), x(l, 1, o, !0)), T = l.base;
        } else a = w, L = N, L && (a = e._component = null), (w || 1 === n) && (a && (a._component = null), T = d(a, i, s, o || !b, w && w.parentNode, !0));if (w && T !== w && l !== N) {
          var D = w.parentNode;D && T !== D && (D.replaceChild(T, w), L || (w._component = null, v(w, !1)));
        }if (L && k(L), e.base = T, T && !r) {
          var E = e,
              V = e;while (V = V.__u) {
            (E = V).base = T;
          }T._component = E, T._componentConstructor = E.constructor;
        }
      }!b || o ? A.push(e) : U || (e.componentDidUpdate && e.componentDidUpdate(_, h, S), M.afterUpdate && M.afterUpdate(e));while (e.__h.length) {
        e.__h.pop().call(e);
      }H || r || f();
    }
  }function N(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        a = r && e._componentConstructor === t.nodeName,
        c = a,
        p = u(t);while (r && !c && (r = r.__u)) {
      c = r.constructor === t.nodeName;
    }return r && c && (!o || r._component) ? (C(r, p, 3, n, o), e = r.base) : (i && !a && (k(i), e = l = null), r = g(t.nodeName, p, n), e && !r.__b && (r.__b = e, l = null), C(r, p, 1, n, o), e = r.base, l && e !== l && (l._component = null, v(l, !1))), e;
  }function k(e) {
    M.beforeUnmount && M.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var o = e._component;o ? k(o) : t && (null != t.__preactattr_ && n(t.__preactattr_.ref, null), e.__b = t, p(t), F.push(e), b(t)), n(e.__r, null);
  }function U(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {}, this.__h = [];
  }function S(e, t, n) {
    return d(n, e, {}, !1, t, !1);
  }function L() {
    return {};
  }var T = function T() {},
      M = {},
      P = [],
      W = [],
      D = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      E = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      V = [],
      A = [],
      H = 0,
      R = !1,
      B = !1,
      F = [];t(U.prototype, { setState: function setState(e, n) {
      this.__s || (this.__s = this.state), this.state = t(t({}, this.state), "function" == typeof e ? e(this.state, this.props) : e), n && this.__h.push(n), r(this);
    }, forceUpdate: function forceUpdate(e) {
      e && this.__h.push(e), x(this, 2);
    }, render: function render() {} });var j = { h: e, createElement: e, cloneElement: o, createRef: L, Component: U, render: S, rerender: i, options: M }; true ? module.exports = j : self.preact = j;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),

/***/ "L0+G":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var _assign = function __assign() {
    _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
        }
        return t;
    };
    return _assign.apply(this, arguments);
};

function createStore$1(initialState, middleware) {
    if (initialState === void 0) {
        initialState = {};
    }
    if (middleware === void 0) {
        middleware = null;
    }
    var state = initialState || {};
    var listeners = [];
    function dispatchListeners() {
        listeners.forEach(function (f) {
            return f(state);
        });
    }
    return {
        middleware: middleware,
        setState: function setState(update) {
            state = _assign({}, state, typeof update === "function" ? update(state) : update);
            dispatchListeners();
        },
        subscribe: function subscribe(f) {
            listeners.push(f);
            return function () {
                listeners.splice(listeners.indexOf(f), 1);
            };
        },
        getState: function getState() {
            return state;
        },
        reset: function reset() {
            state = initialState;
            dispatchListeners();
        }
    };
}

module.exports = createStore$1;

/***/ }),

/***/ "OA8u":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var preact = __webpack_require__("KM04");

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return _extendStatics(d, b);
};

function __extends(d, b) {
    _extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var _assign = function __assign() {
    _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
        }
        return t;
    };
    return _assign.apply(this, arguments);
};

function shallowEqual(a, b) {
    for (var i in a) {
        if (a[i] !== b[i]) return false;
    }for (var i in b) {
        if (!(i in a)) return false;
    }return true;
}

function set(store, ret) {
    if (ret != null) {
        if (ret.then) return ret.then(store.setState);
        store.setState(ret);
    }
}

function bindAction(action, store) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (typeof store.middleware === "function") {
            return store.middleware(store, action, args);
        }
        return set(store, action.apply(void 0, [store.getState()].concat(args)));
    };
}

function bindActions(actions, store, ownProps) {
    actions = typeof actions === "function" ? actions(store, ownProps) : actions;
    var bound = {};
    for (var name_1 in actions) {
        var action = actions[name_1];
        bound[name_1] = bindAction(action, store);
    }
    return bound;
}

var Connect = /** @class */function (_super) {
    __extends(Connect, _super);
    function Connect(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.update = function () {
            var mapped = _this.getProps(_this.props, _this.context);
            if (!shallowEqual(mapped, _this.state)) {
                _this.setState(mapped);
            }
        };
        _this.state = _this.getProps(props, context);
        _this.actions = _this.getActions();
        return _this;
    }
    Connect.prototype.componentWillMount = function () {
        this.unsubscribe = this.context.store.subscribe(this.update);
    };
    Connect.prototype.componentWillUnmount = function () {
        this.unsubscribe(this.update);
    };
    Connect.prototype.componentWillReceiveProps = function (nextProps, nextContext) {
        var mapped = this.getProps(nextProps, nextContext);
        if (!shallowEqual(mapped, this.state)) {
            this.setState(mapped);
        }
    };
    Connect.prototype.getProps = function (props, context) {
        var mapToProps = props.mapToProps;
        var state = context.store && context.store.getState() || {};
        return mapToProps ? mapToProps(state, props) : state;
    };
    Connect.prototype.getActions = function () {
        var actions = this.props.actions;
        return bindActions(actions, this.context.store, this.props);
    };
    Connect.prototype.render = function (_a, state, _b) {
        var children = _a.children;
        var store = _b.store;
        var child = children && children[0] || children;
        return child(_assign({ store: store }, state, this.actions));
    };
    return Connect;
}(preact.Component);
// [ HACK ] to avoid Typechecks
// since there is a small conflict between preact and react typings
// in the future this might become unecessary by updating typings
var ConnectUntyped = Connect;
function connect(mapToProps, actions) {
    if (actions === void 0) {
        actions = {};
    }
    return function (Child) {
        return (/** @class */function (_super) {
                __extends(ConnectWrapper, _super);
                function ConnectWrapper() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                ConnectWrapper.prototype.render = function () {
                    var props = this.props;
                    return preact.h(ConnectUntyped, _assign({}, props, { mapToProps: mapToProps, actions: actions }), function (mappedProps) {
                        return preact.h(Child, _assign({}, mappedProps, props));
                    });
                };
                return ConnectWrapper;
            }(preact.Component)
        );
    };
}

var Provider = /** @class */function (_super) {
    __extends(Provider, _super);
    function Provider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Provider.prototype.getChildContext = function () {
        return { store: this.props.store };
    };
    Provider.prototype.render = function () {
        return this.props.children && this.props.children[0] || this.props.children;
    };
    return Provider;
}(preact.Component);

exports.connect = connect;
exports.Provider = Provider;
exports.Connect = Connect;

/***/ }),

/***/ "v4R3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var transformStoreDataToUIData = exports.transformStoreDataToUIData = function transformStoreDataToUIData(store) {
  return {
    locationList: store.locationList,
    location: store.location,
    weatherForecast: store.weatherForecast
  };
};

var transformForecast = exports.transformForecast = function transformForecast(forecast) {
  var forecastDate = new Date(forecast.applicable_date);
  return {
    minimumTemperature: Math.round(forecast.min_temp),
    maximumTemperature: Math.round(forecast.max_temp),
    forecastType: forecast.weather_state_name,
    date: forecastDate.getDate() + " - " + (forecastDate.getMonth() + 1) + " - " + forecastDate.getFullYear()
  };
};

var transformWeatherForecast = exports.transformWeatherForecast = function transformWeatherForecast(weatherForecast) {
  return {
    forecast: weatherForecast.consolidated_weather.map(transformForecast)
  };
};

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map