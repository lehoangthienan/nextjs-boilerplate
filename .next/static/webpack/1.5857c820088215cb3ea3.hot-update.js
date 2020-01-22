webpackHotUpdate(1,{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redux_appRedux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/appRedux */ "./redux/appRedux.js");
/* harmony import */ var _services_socketService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/socketService */ "./services/socketService.js");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../scss/style.scss */ "./scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_13__);














var Header = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../../components/Header */ "./components/Header/index.js"));
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
    return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../../components/Footer */ "./components/Footer/index.js"));
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

/***/ })

})
//# sourceMappingURL=1.5857c820088215cb3ea3.hot-update.js.map