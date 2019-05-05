webpackJsonp([1],{

/***/ "/FZ3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getHttp;
/* harmony export (immutable) */ __webpack_exports__["b"] = postHttp;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__("Onyf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_qs__ = __webpack_require__("3iGV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_qs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_element_ui__ = __webpack_require__("l6IN");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_element_ui__);



 // multipart/form-data

var formUrl = ['/product/product/upload-obj-file']; // application/json

var specialUrl = ['/poundage/activity/create', '/poundage/activity/edit', '/api/common/java/forward/product/recommend/update', '/common/java/forward/product/recommend/update', '/api/common/java/forward/product/recommend', '/common/java/forward/product/recommend'];

function isSpecialUrl(url) {
  var tag = false;
  specialUrl.map(function (item) {
    if (url === item) {
      tag = true;
    }
  });
  return tag;
}

function isFormlUrl(url) {
  var tag = false;
  formUrl.map(function (item) {
    if (url === item) {
      tag = true;
    }
  });
  return tag;
} // 最大超时10s


__WEBPACK_IMPORTED_MODULE_1_axios___default.a.defaults.timeout = 60000; // mock开关
// let mockUrl = '//10.134.130.229:7300/mock/5c8ef855abdb3066e64c8928/example'
// let mockUrl = 'http://mock.poizon.com/mock/19/'
// if (mockUrl) {
//     axios.defaults.baseURL = mockUrl
// }
// 统一 post 请求数据格式

__WEBPACK_IMPORTED_MODULE_1_axios___default.a.interceptors.request.use(function (config) {
  if (config.method === 'post') {
    if (isFormlUrl(config.url)) {
      config.headers['Content-Type'] = 'multipart/form-data';
    } else if (isSpecialUrl(config.url)) {
      config.headers['Content-Type'] = 'application/json;charset=UTF-8';
    } else {
      config.data = __WEBPACK_IMPORTED_MODULE_2_qs___default.a.stringify(config.data);
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }
  }

  return config;
}, function (error) {
  return Promise.reject(error);
}); // GET请求,将url和请求参数传入，通过Promise，将成功和失败的数据派发出去

function getHttp(url, params, options) {
  return new Promise(function (resolve, reject) {
    __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(url, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({
      params: params
    }, options)).then(function (response) {
      if (response.data.code === 401) {
        window.location = 'login.html';
      } else {
        resolve(response.data);
      }
    }, function (err) {
      if (!options.noErrorTips) {
        var message = err.message;
        Object(__WEBPACK_IMPORTED_MODULE_3_element_ui__["Notification"])({
          type: 'error',
          message: message
        });
      }

      reject(err);
    });
  });
} // POST请求，将url,请求参数和body传入，通过Promise，将成功和失败的数据派发出去

function postHttp(url, params) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return new Promise(function (resolve, reject) {
    __WEBPACK_IMPORTED_MODULE_1_axios___default()({
      method: 'post',
      url: url,
      data: params,
      baseURL: options.baseURL || __WEBPACK_IMPORTED_MODULE_1_axios___default.a.defaults.baseURL
    }).then(function (response) {
      resolve(response.data);
    }, function (err) {
      if (!options.noErrorTips) {
        var message = err.message;
        Object(__WEBPACK_IMPORTED_MODULE_3_element_ui__["Notification"])({
          type: 'error',
          message: message
        });
      }

      reject(err);
    });
  });
}

/***/ }),

/***/ "1xei":
/***/ (function(module, exports, __webpack_require__) {

var app = window.__app__ = {
  define: function define(name, context, index) {
    var keys = context.keys(); // 如果后续有重名的包，则忽略不处理

    if (this.modules[name]) return;
    this.modules[name] = context.bind(context, keys[0]);
  },
  require: function require(name) {
    return this.modules[name](name);
  },
  routes: window.__app__ && window.__app__.routes || [],
  init: function init(nameSpace) {
    console.log(nameSpace);
  },
  modules: {}
};
app.define('axios', __webpack_require__("rlZ2"));
app.define('md5', __webpack_require__("O9H2"));

/***/ }),

/***/ "8VmZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = get;
/* harmony export (immutable) */ __webpack_exports__["b"] = post;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseHttp__ = __webpack_require__("/FZ3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parseToken__ = __webpack_require__("vatd");


/**
 *  GET请求
 *  请求url为app/user/{user_id}?aaaa=1234
 **/

function get(url, params) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  params.sign = Object(__WEBPACK_IMPORTED_MODULE_1__parseToken__["a" /* default */])(params);
  return Object(__WEBPACK_IMPORTED_MODULE_0__baseHttp__["a" /* getHttp */])(url, params, options);
}
/**
 * POST请求
 * 请求app/user/query/{user_id}?aaaa=1234
 * 请求body { serverId: String,  scope: String }
 */

function post(url, params) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  params.sign = Object(__WEBPACK_IMPORTED_MODULE_1__parseToken__["a" /* default */])(params);
  return Object(__WEBPACK_IMPORTED_MODULE_0__baseHttp__["b" /* postHttp */])(url, params, options);
}

/***/ }),

/***/ "K/K8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      routes: [{
        name: '/app-user',
        title: 'app-user'
      }, {
        name: '/app-customer',
        title: 'app-customer'
      }],
      value: 0
    };
  },

  methods: {
    test() {
      this.value++;
    }

  }
});

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("K/K8");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_baffe0de_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("ohFM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("0Jux");
function injectStyle (context) {
  __webpack_require__("mFBm")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_baffe0de_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_baffe0de_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("lRwf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app___ = __webpack_require__("1xei");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__app___);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App_vue__ = __webpack_require__("M93x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__("olkN");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router__ = __webpack_require__("cHtD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_service__ = __webpack_require__("VxtT");





 // 挂载主项目的 store 实例
// (Vue.prototype.__share_pool__ =
//   Vue.prototype.__share_pool__ || {}).store = store

console.log(333);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_5__utils_service__["a" /* default */]);
new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
  router: __WEBPACK_IMPORTED_MODULE_4__router__["a" /* default */],
  store: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */],
  render: function render(h) {
    return h(__WEBPACK_IMPORTED_MODULE_2__App_vue__["a" /* default */]);
  }
}).$mount('#app');

/***/ }),

/***/ "O9H2":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./md5.js": "L6bb"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "O9H2";

/***/ }),

/***/ "VxtT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("lRwf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_element_ui__ = __webpack_require__("l6IN");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_utils__ = __webpack_require__("oAV5");
// eslint-disable-next-line no-unused-vars
 // eslint-disable-next-line no-unused-vars
// import { install } from 'vuex'



/* harmony default export */ __webpack_exports__["a"] = ({
  install: function install(Vue, option) {
    /**
     * 一般用在获取数据时候使用，获取成功直接执行回调，失败会提示,获取列表数据
     * @param {该操作的名称} actionText
     * @param {该操作的http } service
     * @param {该操作成功的回调} callback
     */
    var doServer = function doServer(actionText, service, callback) {
      service().then(function (res) {
        if (res.code === 0) {
          callback(res);
        } else {
          Object(__WEBPACK_IMPORTED_MODULE_1_element_ui__["Notification"])({
            title: "".concat(actionText, "\u5931\u8D25!"),
            message: res.msg,
            type: 'error',
            duration: 4000
          });
        }
      }, function (err) {
        var error = JSON.parse(JSON.stringify(err));
        var msg = Vue.prototype.getErrorMsg(error);
        Object(__WEBPACK_IMPORTED_MODULE_1_element_ui__["Notification"])({
          title: "".concat(actionText, "\u5931\u8D25!"),
          message: msg,
          type: 'error',
          duration: 4000
        });
      });
    };

    Vue.prototype.doServer = doServer;
    /** 该方法在新增或者修改时候  ******不会弹出提示框
         * 一般用在新增和编辑时候使用，成功或者失败都有对应的提示
         * @param {该操作的名称} actionText
         * @param {该操作的http } service
         * @param {该操作成功的回调} callback
         */

    var doServerAndCallback = function doServerAndCallback(actionText, service, callback) {
      service().then(function (res) {
        if (res.code === 0) {
          Object(__WEBPACK_IMPORTED_MODULE_1_element_ui__["Notification"])({
            title: "".concat(actionText, "\u6210\u529F!"),
            message: '',
            type: 'success',
            duration: 2000
          });
          callback(res);
        } else {
          Object(__WEBPACK_IMPORTED_MODULE_1_element_ui__["Notification"])({
            title: "".concat(actionText, "\u5931\u8D25!"),
            message: res.msg,
            type: 'error',
            duration: 4000
          });
        }
      }, function (err) {
        var error = JSON.parse(JSON.stringify(err));
        var msg = Vue.prototype.getErrorMsg(error);
        Object(__WEBPACK_IMPORTED_MODULE_1_element_ui__["Notification"])({
          title: "".concat(actionText, "\u5931\u8D25!"),
          message: msg,
          type: 'error',
          duration: 4000
        });
      });
    };

    Vue.prototype.doServerAndCallback = doServerAndCallback;
    /** 该方法在新增或者修改时候 *****会弹出提示框确认
         * 一般用在新增和编辑时候使用，成功或者失败都有对应的提示
         * @param {该操作的名称} actionText
         * @param {该操作的http } service
         * @param {该操作成功的回调} callback
         */

    Vue.prototype.doServerConfirm = function (actionConfirmText) {
      var actionText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '操作';
      var service = arguments.length > 2 ? arguments[2] : undefined;
      var callback = arguments.length > 3 ? arguments[3] : undefined;
      __WEBPACK_IMPORTED_MODULE_1_element_ui__["MessageBox"].confirm("".concat(actionConfirmText, ", \u662F\u5426\u7EE7\u7EED?"), '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(function () {
        service().then(function (res) {
          if (res.code === 0) {
            Object(__WEBPACK_IMPORTED_MODULE_1_element_ui__["Notification"])({
              title: "".concat(actionText, "\u6210\u529F!"),
              message: '',
              type: 'success',
              duration: 2000
            });
            callback(res);
          } else {
            Object(__WEBPACK_IMPORTED_MODULE_1_element_ui__["Notification"])({
              title: "".concat(actionText, "\u5931\u8D25!"),
              message: res.msg,
              type: 'error',
              duration: 4000
            });
          }
        }, function (err) {
          var error = JSON.parse(JSON.stringify(err));
          var msg = Vue.prototype.getErrorMsg(error);
          Object(__WEBPACK_IMPORTED_MODULE_1_element_ui__["Notification"])({
            title: "".concat(actionText, "\u5931\u8D25!"),
            message: msg,
            type: 'error',
            duration: 4000
          });
        });
      }).catch(function () {});
    };
    /**
     * 用在删除确认操作
     * @param {该操作的名称} actionText
     * @param {该操作的http } service
     * @param {该操作成功的回调} callback
     */


    Vue.prototype.deleteConfirm = function () {
      var actionText = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '操作';
      var service = arguments.length > 1 ? arguments[1] : undefined;
      var callback = arguments.length > 2 ? arguments[2] : undefined;
      __WEBPACK_IMPORTED_MODULE_1_element_ui__["MessageBox"].confirm("\u6B64\u64CD\u4F5C\u5C06\u5220\u9664\u8BE5\u9009\u9879, \u662F\u5426\u7EE7\u7EED?", '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(function () {
        service().then(function (res) {
          if (res.code === 0) {
            Object(__WEBPACK_IMPORTED_MODULE_1_element_ui__["Notification"])({
              title: "".concat(actionText, "\u6210\u529F!"),
              message: '',
              type: 'success',
              duration: 2000
            });
            callback(res);
          } else {
            Object(__WEBPACK_IMPORTED_MODULE_1_element_ui__["Notification"])({
              title: "".concat(actionText, "\u5931\u8D25!"),
              message: res.msg,
              type: 'error',
              duration: 4000
            });
          }
        }, function (err) {
          var error = JSON.parse(JSON.stringify(err));
          var msg = Vue.prototype.getErrorMsg(error);
          Object(__WEBPACK_IMPORTED_MODULE_1_element_ui__["Notification"])({
            title: "".concat(actionText, "\u5931\u8D25!"),
            message: msg,
            type: 'error',
            duration: 4000
          });
        });
      }).catch(function () {});
    };
    /**
         * 验证参数是否是简单对象,也就是从OBjec继承而来
         * @param {参数} obj
         */


    var isPlaintObj = function isPlaintObj(obj) {
      if (!obj) {
        return false;
      }

      return Object.getPrototypeOf(obj) === Object.prototype;
    };

    Vue.prototype.isPlaintObj = isPlaintObj;
    /**
         * 从错误的信息中提取需要提示的内容
         * @param {错误信息} err
         */

    Vue.prototype.getErrorMsg = function (err) {
      if (err.response && Vue.prototype.isPlaintObj(err.response)) {
        if (err.response.data && Vue.prototype.isPlaintObj(err.response.data)) {
          return err.response.data.message || '请检查网络或者后台接口';
        } else {
          return err.response.statusText || '请检查网络或者后台接口';
        }
      }

      return '请检查网络或者后台接口';
    };
    /**
         * @description: 公共请求方法封装
         * @param {actionText} 接口成功/失败文本提示
         * @param {service} 请求方法的回调
         * @param {showTips} 请求接口成功之后是否需要文本提示
         * @param {beforeRequest} 请求开始之前的钩子函数
         * @param {successCallback} 执行请求成功的回调 默认入参为返回的数据对象
         * @param {finallyCallback} 不管请求成功/失败都会执行的方法
         * @param {confirmModal} 在请求接口之前的会话弹层（比如删除、确认弹层）确定会发送请求 选项参考el-MessageBox
         * @return: null
         */


    Vue.prototype.__DUHTTP__ = function () {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        actionText: '调用接口',
        service: function service() {},
        confirmModal: {
          title: '提示',
          text: '',
          options: {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            center: true
          }
        },
        // 成功返回是否需要提示
        showTips: false,
        beforeRequest: function beforeRequest() {},
        successCallback: function successCallback() {},
        finallyCallback: function finallyCallback() {}
      };
      var confirmModal = options.confirmModal,
          service = options.service,
          successCallback = options.successCallback,
          finallyCallback = options.finallyCallback,
          _options$actionText = options.actionText,
          actionText = _options$actionText === void 0 ? '调用接口' : _options$actionText,
          showTips = options.showTips,
          beforeRequest = options.beforeRequest;
      if (!service) throw new Error('必须传入Serive参数');

      function showTipsCb(res) {
        if (showTips) {
          Object(__WEBPACK_IMPORTED_MODULE_1_element_ui__["Notification"])({
            title: '提示',
            message: "".concat(actionText, "\u6210\u529F!"),
            type: 'success',
            duration: 2000
          });
        }

        return res;
      }

      function successCb(res) {
        if (successCallback) successCallback(res);
      }

      function startFetch() {
        if (beforeRequest) beforeRequest();
        return service().then(function (res) {
          if (!res) return;
          var code = res.code,
              msg = res.msg,
              status = res.status;
          code = code === undefined ? status : code;

          if (code === 0 || code === 200) {
            Object(__WEBPACK_IMPORTED_MODULE_2__utils_utils__["a" /* compose */])(successCb, showTipsCb)(res);
          } else {
            Object(__WEBPACK_IMPORTED_MODULE_1_element_ui__["Notification"])({
              title: "".concat(actionText, "\u5931\u8D25!"),
              message: msg,
              type: 'error',
              duration: 4000
            });
          }
        }).catch(function (err) {
          var msg = Vue.prototype.getErrorMsg(err);
          Object(__WEBPACK_IMPORTED_MODULE_1_element_ui__["Notification"])({
            title: "".concat(actionText, "\u5931\u8D25!"),
            message: msg,
            type: 'error',
            duration: 4000
          });
          return err;
        }).finally(function () {
          if (finallyCallback) finallyCallback();
        });
      } // 是否有弹窗提示


      if (confirmModal) {
        return __WEBPACK_IMPORTED_MODULE_1_element_ui__["MessageBox"].confirm(confirmModal.text, confirmModal.title, Object.assign({
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }, confirmModal.options)).then(function () {
          return startFetch();
        }).catch(function () {}).finally(function () {
          if (finallyCallback) finallyCallback();
        });
      }

      startFetch();
    };
  }
});

/***/ }),

/***/ "cHtD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("lRwf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("/ocq");

 // import Home from './views/Home.vue'

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);
console.log(2222);
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: window.__app__.routes
})); // export default new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: Home
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
//     }
//   ]
// })

/***/ }),

/***/ "l6IN":
/***/ (function(module, exports) {

module.exports = ELEMENT;

/***/ }),

/***/ "lRwf":
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ "mFBm":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "oAV5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export trim */
/* unused harmony export isRuleNumber */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return compose; });
/* unused harmony export pipline */
/* unused harmony export exportAPI */
/* unused harmony export setTitle */
/* unused harmony export Type */
/* unused harmony export getStrLen */
/* unused harmony export deepCopy */
/* unused harmony export download */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__("Onyf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_bizApi__ = __webpack_require__("8VmZ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);



var isDev = "production" === 'development';
var baseURL = __WEBPACK_IMPORTED_MODULE_2_axios___default.a.defaults.baseURL;
var isMock = baseURL ? /mock/.test(baseURL) : false; // 去除空格  type 1-所有空格  2-前后空格  3-前空格 4-后空格

function trim(str, type) {
  switch (type) {
    case 1:
      return str.replace(/\s+/g, '');

    case 2:
      return str.replace(/(^\s*)|(\s*$)/g, '');

    case 3:
      return str.replace(/(^\s*)/g, '');

    case 4:
      return str.replace(/(\s*$)/g, '');

    default:
      return str;
  }
} // 验证固定长度的正整数  str-需要验证的目标  limit-限制的长度

function isRuleNumber(str, limit) {
  var res = true;
  var numList = '0123456789';
  var wrapStr = String(str);

  if (wrapStr) {
    if (limit) {
      if (wrapStr.length !== limit) {
        res = false;
      }
    }

    wrapStr.split('').map(function (item) {
      if (!numList.includes(item)) {
        res = false;
      }
    });
  } else {
    res = false;
  }

  return res;
}
var compose = function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) return function (arg) {
    return arg;
  };
  if (funcs.length === 1) return funcs[0];
  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
};
var pipline = function pipline() {
  for (var _len2 = arguments.length, funcs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    funcs[_key2] = arguments[_key2];
  }

  if (funcs.length === 0) return function (arg) {
    return arg;
  };
  if (funcs.length === 1) return funcs[0];
  return funcs.reduce(function (a, b) {
    return function () {
      return b(a.apply(void 0, arguments));
    };
  });
};
function exportAPI(apis) {
  var APIs = {};

  var _loop = function _loop(key) {
    APIs[key] = function () {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var url = apis.get[key];

      if (isDev && !isMock) {
        url = !options.javaUrl ? "/api".concat(url) : "/javaApi".concat(url);
      }

      return Object(__WEBPACK_IMPORTED_MODULE_1__utils_bizApi__["a" /* get */])(url, params, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({
        noErrorTips: true
      }, options));
    };
  };

  for (var key in apis.get) {
    _loop(key);
  }

  var _loop2 = function _loop2(key) {
    APIs[key] = function () {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var url = apis.post[key];

      if (isDev && !isMock) {
        url = !options.javaUrl ? "/api".concat(url) : "/javaApi".concat(url);
      }

      return Object(__WEBPACK_IMPORTED_MODULE_1__utils_bizApi__["b" /* post */])(url, params, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({
        noErrorTips: true
      }, options));
    };
  };

  for (var key in apis.post) {
    _loop2(key);
  }

  return APIs;
}
function setTitle(title) {
  document.title = title;
  var mobile = navigator.userAgent.toLowerCase();

  if (/iphone|ipad|ipod/.test(mobile)) {
    var iframe = document.createElement('iframe');
    iframe.style.visibility = 'hidden'; // 替换成站标favicon路径或者任意存在的较小的图片即可
    // iframe.setAttribute('src', '/mdu/static/logo.png')

    var iframeCallback = function iframeCallback() {
      setTimeout(function () {
        iframe.removeEventListener('load', iframeCallback);
        document.body.removeChild(iframe);
      }, 0);
    };

    iframe.addEventListener('load', iframeCallback);
    document.body.appendChild(iframe);
  }
}
var Type = function Type(params) {
  var REGEXP = /^\[object\W([a-zA-Z]+)\]$/g;
  var waitingForReg = Object.prototype.toString.call(params);
  var handleResult = REGEXP.exec(waitingForReg);
  return handleResult[1].toLowerCase();
};
/**
 * 获取字符串长度，中文两个长度 字母数字一个长度
 * @param str
 * @returns {number}
 */

function getStrLen(str) {
  if (!(typeof str === 'string' || str instanceof String)) {
    throw new Error('param must to be string');
  }

  var len = 0;

  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);

    if (c >= 0x0001 && c <= 0x007e || c >= 0xff60 && c <= 0xff9f) {
      len++;
    } else {
      len += 2;
    }
  }

  return len;
}
/**
 * 深拷贝（基于递归）
 * @example
 * deepCopy({name: 'zhansgan', obj: {}, arr: [2, 3]})
 * @param {object} [data = {}] 原始对象
 * @param {object} [final] 可选
 * @returns {object} 深拷贝之后的对象
 */

function deepCopy(data) {
  var final = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  for (var key in data) {
    var keyToVal = data[key];
    var val = Object.prototype.toString.call(keyToVal).match(/^\[object\s(\w+)\]$/)[1];

    switch (val) {
      case 'Object':
        final[key] = deepCopy(keyToVal, {});
        break;

      case 'Array':
        final[key] = deepCopy(keyToVal, []);
        break;

      case 'RegExp':
        final[key] = new RegExp(keyToVal);
        break;

      case 'Undefined':
        final[key] = undefined;
        break;

      case 'Null':
        final[key] = null;
        break;

      default:
        final[key] = keyToVal;
    }
  }

  return final;
}
function download(_ref) {
  var path = _ref.path,
      name = _ref.name;
  var a = document.createElement('a');
  a.href = path;
  a.download = name;
  a.click();
  a.remove();
}

/***/ }),

/***/ "ohFM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('div',{attrs:{"id":"nav"}},[_vm._l((_vm.routes),function(r){return _c('router-link',{key:r.name,staticClass:"link",class:{ active: r.isActive },attrs:{"to":r.name}},[_vm._v(_vm._s(r.title))])}),_vm._v(" "),_c('p',{on:{"click":_vm.test}},[_vm._v(_vm._s(_vm.value))])],2),_vm._v(" "),_c('router-view')],1)}
var staticRenderFns = []


/***/ }),

/***/ "olkN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("lRwf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("NYxO");


__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  state: {
    name: 'entry-application'
  },
  mutations: {},
  actions: {}
}));

/***/ }),

/***/ "rlZ2":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./index.js": "mtWM"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "rlZ2";

/***/ }),

/***/ "vatd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_md5__ = __webpack_require__("L6bb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_md5__);

/* harmony default export */ __webpack_exports__["a"] = (function (obj) {
  var paramsToken = '';
  console.log(obj);
  Object.keys(obj).sort().forEach(function (item) {
    paramsToken += item + (obj[item] || '').toString();
  });
  paramsToken += '048a9c4943398714b356a696503d2d36';
  return __WEBPACK_IMPORTED_MODULE_0_md5___default()(paramsToken);
});

/***/ })

},["NHnr"]);
//# sourceMappingURL=base.59f190e4f4fc01fd6323.js.map