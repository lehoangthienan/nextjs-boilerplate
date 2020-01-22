exports.ids = [0];
exports.modules = {

/***/ "./configures/configs.js":
/*!*******************************!*\
  !*** ./configures/configs.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  API_URL: 'http://localhost:3000'
});

/***/ }),

/***/ "./containers/Full/Full.js":
/*!*********************************!*\
  !*** ./containers/Full/Full.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/get */ "lodash/get");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redux_appRedux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/appRedux */ "./redux/appRedux.js");
/* harmony import */ var _services_socketService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/socketService */ "./services/socketService.js");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../scss/style.scss */ "./scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_13__);














var Header = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../../components/Header */ "./components/Header/index.js"));
  },
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../components/Header */ "./components/Header/index.js")];
    },
    modules: ['../../components/Header']
  }
});
var Footer = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../components/Footer */ "./components/Footer/index.js"));
  },
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../components/Footer */ "./components/Footer/index.js")];
    },
    modules: ['../../components/Footer']
  }
});

var Full =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Full, _Component);

  function Full() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Full);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Full).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Full, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          startupWorkingFlow = _this$props.startupWorkingFlow,
          history = _this$props.history,
          dispatch = _this$props.dispatch;
      startupWorkingFlow(history);
      var token = '';
      var user = {};
      if (localStorage.getItem('token')) token = localStorage.getItem('token');
      if (localStorage.getItem('user')) user = JSON.parse(localStorage.getItem('user'));
      startupWorkingFlow(history);
      Object(_services_socketService__WEBPACK_IMPORTED_MODULE_11__["connectSocket"])(token, dispatch, lodash_get__WEBPACK_IMPORTED_MODULE_9___default()(user, ['_id'], ''));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      Object(_services_socketService__WEBPACK_IMPORTED_MODULE_11__["disConnectSocket"])();
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Header, null), children, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Footer, null));
    }
  }]);

  return Full;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

Full.propTypes = {
  startupWorkingFlow: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  history: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isReady: state.toJS().app.isReady
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch,
    startupWorkingFlow: function startupWorkingFlow(history) {
      dispatch(_redux_appRedux__WEBPACK_IMPORTED_MODULE_10__["default"].startupWorkingFlow(history));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(Full));

/***/ }),

/***/ "./containers/Full/index.js":
/*!**********************************!*\
  !*** ./containers/Full/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Full__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Full */ "./containers/Full/Full.js");

/* harmony default export */ __webpack_exports__["default"] = (_Full__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./redux/appRedux.js":
/*!***************************!*\
  !*** ./redux/appRedux.js ***!
  \***************************/
/*! exports provided: AppTypes, default, INITIAL_STATE, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppTypes", function() { return AppTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var reduxsauce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reduxsauce */ "reduxsauce");
/* harmony import */ var reduxsauce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reduxsauce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);


var _createReducer;



/* ------------- Types and Action Creators ------------- */

var _createActions = Object(reduxsauce__WEBPACK_IMPORTED_MODULE_1__["createActions"])({
  startupWorkingFlow: ['history'],
  getAppReady: ['isReady'],
  showSuccessRequest: ['message'],
  showErrorRequest: ['error']
}),
    Types = _createActions.Types,
    Creators = _createActions.Creators;

var AppTypes = Types;
/* harmony default export */ __webpack_exports__["default"] = (Creators);
/* ------------- Initial State ------------- */

var INITIAL_STATE = Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])({
  error: '',
  isReady: false
});
/* ------------- Reducers ------------- */

var startupWorkingFlow = function startupWorkingFlow(state) {
  return state.merge({
    isReady: false
  });
};

var getAppReady = function getAppReady(state, _ref) {
  var isReady = _ref.isReady;
  return state.merge({
    isReady: isReady
  });
};
/* ------------- Hookup Reducers To Types ------------- */


var reducer = Object(reduxsauce__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(INITIAL_STATE, (_createReducer = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createReducer, Types.STARTUP_WORKING_FLOW, startupWorkingFlow), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createReducer, Types.GET_APP_READY, getAppReady), _createReducer));

/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./services/socketService.js":
/*!***********************************!*\
  !*** ./services/socketService.js ***!
  \***********************************/
/*! exports provided: connectSocket, disConnectSocket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectSocket", function() { return connectSocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disConnectSocket", function() { return disConnectSocket; });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _configures_configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configures/configs */ "./configures/configs.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/constants */ "./utils/constants.js");



var socket = null;
function connectSocket(token, dispatch, userId) {
  // eslint-disable-line
  disConnectSocket();
  socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0___default()(_configures_configs__WEBPACK_IMPORTED_MODULE_1__["default"].API_URL, {
    query: {
      accessToken: token
    }
  });
  socket.on(_utils_constants__WEBPACK_IMPORTED_MODULE_2__["EVENT_SOCKET"].CONNECT, function () {
    console.log('Socket Connect Successfuly');
  });
  return socket;
}
function disConnectSocket() {
  if (socket) {
    socket.disconnect();
  }
}

/***/ }),

/***/ "./utils/constants.js":
/*!****************************!*\
  !*** ./utils/constants.js ***!
  \****************************/
/*! exports provided: RESTART_ON_REMOUNT, DAEMON, ONCE_TILL_UNMOUNT, COUNTRY_CODE_VN, EVENT_SOCKET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESTART_ON_REMOUNT", function() { return RESTART_ON_REMOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DAEMON", function() { return DAEMON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ONCE_TILL_UNMOUNT", function() { return ONCE_TILL_UNMOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNTRY_CODE_VN", function() { return COUNTRY_CODE_VN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_SOCKET", function() { return EVENT_SOCKET; });
var RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
var DAEMON = '@@saga-injector/daemon';
var ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';
var COUNTRY_CODE_VN = '+84';
var EVENT_SOCKET = {
  ERROR: 'error',
  DISCONNECT: 'disconnect',
  CONNECT: 'connect'
};

/***/ })

};;
//# sourceMappingURL=0.js.map