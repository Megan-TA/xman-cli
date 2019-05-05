
var cssNames = `app-customer.91af353a138a6f94f859614988e83579.css`;
cssNames = cssNames.split(',');
var fragment = document.createDocumentFragment();
for(var i = 0; i<cssNames.length; i++) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssNames[i];
    fragment.appendChild(link);
}
document.getElementsByTagName('head')[0].appendChild(fragment);

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Vue"), require("ELEMENT"));
	else if(typeof define === 'function' && define.amd)
		define(["Vue", "ELEMENT"], factory);
	else if(typeof exports === 'object')
		exports["app-customer"] = factory(require("Vue"), require("ELEMENT"));
	else
		root["app-customer"] = factory(root["Vue"], root["ELEMENT"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_lRwf__, __WEBPACK_EXTERNAL_MODULE_l6IN__) {
return webpackJsonpapp_customer([2],{

/***/ "4OoT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"test"}},[_c('div',{staticClass:"nav"},_vm._l((_vm.routes),function(item){return _c('router-link',{key:item.name,staticClass:"nav__item",attrs:{"to":item.path}},[_vm._v("\n      "+_vm._s(item.name)+"\n    ")])}),1),_vm._v(" "),_c('router-view')],1)}
var staticRenderFns = []


/***/ }),

/***/ "DfDl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("lRwf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__("olkN");

 // 子项目异步注册 store module
// Vue.prototype.__share_pool__.store.registerModule(
//   process.env.VUE_APP_NAME,
//   store,
// );

/* unused harmony default export */ var _unused_webpack_default_export = (null);

/***/ }),

/***/ "G8Kb":
/***/ (function(module, exports) {

module.exports = window.__app__.require('md5');

/***/ }),

/***/ "K/K8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__("DfDl");
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
        name: '买家问题分类',
        path: '/app-customer/questionSort2buyer'
      }, {
        name: '卖家问题分类',
        path: '/app-customer/questionSort2seller'
      }]
    };
  }

});

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("K/K8");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0a5a1e53_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("4OoT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("0Jux");
function injectStyle (context) {
  __webpack_require__("Wx8t")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0a5a1e53"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0a5a1e53_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0a5a1e53_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["b" /* staticRenderFns */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__routes__ = __webpack_require__("eqvY");


var __app__ = window.__app__ = window.__app__ || {};

__app__.routes = (__app__.routes || []).concat(__WEBPACK_IMPORTED_MODULE_0__routes__["a" /* default */]);
console.log(1);

/***/ }),

/***/ "OMN4":
/***/ (function(module, exports) {

module.exports = window.__app__.require('axios');

/***/ }),

/***/ "Wx8t":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "eqvY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__App_vue__ = __webpack_require__("M93x");
/* routes-list */
var APP = 'app-customer';
 // function wrapper (loadComponent) {
//     window.__app__.init('app-customer')
//     return loadComponent
// }

/* harmony default export */ __webpack_exports__["a"] = ([{
  path: "/".concat(APP),
  name: "".concat(APP, "_compensate"),
  component: __WEBPACK_IMPORTED_MODULE_0__App_vue__["a" /* default */],
  redirect: "/".concat(APP, "/questionSort2buyer"),
  children: [{
    path: 'questionSort2buyer',
    name: "".concat(APP, "_questionSort_buyer"),
    meta: {
      title: '买家问题分类'
    },
    props: {
      identity: 1
    },
    component: function component() {
      return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, "DtFJ"));
    }
  }, {
    path: 'test',
    name: "".concat(APP, "\u2014\u2014test"),
    meta: {
      title: '买家问题分类'
    },
    props: {
      identity: 1
    },
    component: function component() {
      return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, "BERp"));
    }
  }, {
    path: 'questionSort2seller',
    name: "".concat(APP, "_questionSort_seller"),
    meta: {
      title: '卖家问题分类'
    },
    props: {
      identity: 2
    },
    component: function component() {
      return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, "DtFJ"));
    }
  }]
}]);

/***/ }),

/***/ "l6IN":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_l6IN__;

/***/ }),

/***/ "lRwf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lRwf__;

/***/ }),

/***/ "olkN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* store module */
/* unused harmony default export */ var _unused_webpack_default_export = ({
  namespaced: true,
  // namespaced must be true in module app.
  state: {
    name: Object({"NODE_ENV":"production","ROOT_PATH":"/"}).VUE_APP_NAME
  },
  mutations: {},
  actions: {}
});

/***/ })

},["NHnr"]);
});
//# sourceMappingURL=app-customer.097b2f.js.map