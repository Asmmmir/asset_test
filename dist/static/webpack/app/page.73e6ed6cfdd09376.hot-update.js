"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/Projects.jsx":
/*!*************************************!*\
  !*** ./src/components/Projects.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project */ \"(app-pages-browser)/./src/components/Project.jsx\");\n/* harmony import */ var _constants_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/constants/projects */ \"(app-pages-browser)/./src/constants/projects.js\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/react */ \"(app-pages-browser)/./node_modules/swiper/swiper-react.mjs\");\n/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/modules */ \"(app-pages-browser)/./node_modules/swiper/modules/index.mjs\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css */ \"(app-pages-browser)/./node_modules/swiper/swiper.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/css/pagination */ \"(app-pages-browser)/./node_modules/swiper/modules/pagination.css\");\n/* harmony import */ var swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/css/free-mode */ \"(app-pages-browser)/./node_modules/swiper/modules/free-mode.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n\n\n\nconst Projects = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto bg-red-600\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {\n            breakpoints: {\n                340: {\n                    slidesPerView: 2,\n                    spaceBetween: 15\n                },\n                700: {\n                    slidesPerView: 3,\n                    spaceBetween: 15\n                }\n            },\n            freeMode: true,\n            pagination: {\n                clickable: true\n            },\n            modules: [\n                swiper_modules__WEBPACK_IMPORTED_MODULE_5__.FreeMode,\n                swiper_modules__WEBPACK_IMPORTED_MODULE_5__.Pagination\n            ],\n            className: \"max-w-[90%] lg:max-w-[80%]\",\n            children: _constants_projects__WEBPACK_IMPORTED_MODULE_3__.projects.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {\n                    children: item\n                }, void 0, false, {\n                    fileName: \"E:\\\\Асланбек\\\\Разные проекты\\\\assetyans\\\\src\\\\components\\\\Projects.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"E:\\\\Асланбек\\\\Разные проекты\\\\assetyans\\\\src\\\\components\\\\Projects.jsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"E:\\\\Асланбек\\\\Разные проекты\\\\assetyans\\\\src\\\\components\\\\Projects.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Byb2plY3RzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFMEI7QUFDTTtBQUNnQjtBQUNHO0FBQ0c7QUFDTDtBQUM3QjtBQUNXO0FBQ0Q7QUFFOUIsTUFBTVEsV0FBVztJQUNmLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDUCxnREFBTUE7WUFDTFEsYUFBYTtnQkFDWCxLQUFLO29CQUNIQyxlQUFlO29CQUNmQyxjQUFjO2dCQUNoQjtnQkFDQSxLQUFLO29CQUNIRCxlQUFlO29CQUNmQyxjQUFjO2dCQUNoQjtZQUNGO1lBQ0FDLFVBQVU7WUFDVkMsWUFBWTtnQkFBRUMsV0FBVztZQUFLO1lBQzlCQyxTQUFTO2dCQUFDWixvREFBUUE7Z0JBQUVDLHNEQUFVQTthQUFDO1lBQy9CSSxXQUFVO3NCQUdUUix5REFBUUEsQ0FBQ2dCLEdBQUcsQ0FBQyxDQUFDQyxxQkFDYiw4REFBQ2YscURBQVdBOzhCQUNUZTs7Ozs7Ozs7Ozs7Ozs7OztBQU9iO0tBN0JNWDtBQStCTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0cy5qc3g/Y2Y1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdFwiO1xyXG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCJAL2NvbnN0YW50cy9wcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xyXG5pbXBvcnQgeyBGcmVlTW9kZSwgUGFnaW5hdGlvbiB9IGZyb20gXCJzd2lwZXIvbW9kdWxlc1wiO1xyXG5pbXBvcnQgeyBSeEFycm93VG9wUmlnaHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvcnhcIjtcclxuaW1wb3J0IFwic3dpcGVyL2Nzc1wiO1xyXG5pbXBvcnQgXCJzd2lwZXIvY3NzL3BhZ2luYXRpb25cIjtcclxuaW1wb3J0IFwic3dpcGVyL2Nzcy9mcmVlLW1vZGVcIjtcclxuXHJcbmNvbnN0IFByb2plY3RzID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIGJnLXJlZC02MDBcIj5cclxuICAgICAgPFN3aXBlclxyXG4gICAgICAgIGJyZWFrcG9pbnRzPXt7XHJcbiAgICAgICAgICAzNDA6IHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICA3MDA6IHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfX1cclxuICAgICAgICBmcmVlTW9kZT17dHJ1ZX1cclxuICAgICAgICBwYWdpbmF0aW9uPXt7IGNsaWNrYWJsZTogdHJ1ZSB9fVxyXG4gICAgICAgIG1vZHVsZXM9e1tGcmVlTW9kZSwgUGFnaW5hdGlvbl19XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibWF4LXctWzkwJV0gbGc6bWF4LXctWzgwJV1cIlxyXG4gICAgICA+XHJcblxyXG4gICAgICAgIHtwcm9qZWN0cy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgIDxTd2lwZXJTbGlkZT5cclxuICAgICAgICAgICAge2l0ZW19XHJcbiAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICkpfVxyXG5cclxuICAgICAgPC9Td2lwZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb2plY3QiLCJwcm9qZWN0cyIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwiRnJlZU1vZGUiLCJQYWdpbmF0aW9uIiwiUnhBcnJvd1RvcFJpZ2h0IiwiUHJvamVjdHMiLCJkaXYiLCJjbGFzc05hbWUiLCJicmVha3BvaW50cyIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJmcmVlTW9kZSIsInBhZ2luYXRpb24iLCJjbGlja2FibGUiLCJtb2R1bGVzIiwibWFwIiwiaXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Projects.jsx\n"));

/***/ })

});