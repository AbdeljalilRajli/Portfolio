"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/ContactForm.js":
/*!***************************************!*\
  !*** ./src/components/ContactForm.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar ContactForm = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        messages: \"\"\n    }), contactData = ref[0], setContactData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), error = ref1[0], setError = ref1[1];\n    var name = contactData.name, email = contactData.email, messages = contactData.messages;\n    var onChange = function(e) {\n        return setContactData((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, contactData), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, e.target.name, e.target.value)));\n    };\n    var onSubmit = function(e) {\n        e.preventDefault();\n        if (name.length === 0 || email.length === 0 || messages.length === 0) {\n            setError(true);\n            setTimeout(function() {\n                setError(false);\n            }, 2000);\n        } else {\n            setError(false);\n            setTimeout(function() {\n                setContactData({\n                    name: \"\",\n                    email: \"\",\n                    messages: \"\"\n                });\n            }, 2000);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"section section-bg\",\n        id: \"contact-section\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"m-titles\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"m-title get-in-touch\",\n                        \"data-text\": \"GET IN TOUCH.\",\n                        children: \"GET IN TOUCH.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Abdeljalil Rajli\\\\Desktop\\\\Abdeljalil-Portfolio\\\\src\\\\components\\\\ContactForm.js\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Abdeljalil Rajli\\\\Desktop\\\\Abdeljalil-Portfolio\\\\src\\\\components\\\\ContactForm.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row row-custom\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-xs-12 col-sm-12 col-md-3 col-lg-3 align-right\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"contacts-form\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"btn\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"COPY\\xa0EMAIL\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Abdeljalil Rajli\\\\Desktop\\\\Abdeljalil-Portfolio\\\\src\\\\components\\\\ContactForm.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Abdeljalil Rajli\\\\Desktop\\\\Abdeljalil-Portfolio\\\\src\\\\components\\\\ContactForm.js\",\n                                lineNumber: 50,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Abdeljalil Rajli\\\\Desktop\\\\Abdeljalil-Portfolio\\\\src\\\\components\\\\ContactForm.js\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Abdeljalil Rajli\\\\Desktop\\\\Abdeljalil-Portfolio\\\\src\\\\components\\\\ContactForm.js\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Abdeljalil Rajli\\\\Desktop\\\\Abdeljalil-Portfolio\\\\src\\\\components\\\\ContactForm.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Abdeljalil Rajli\\\\Desktop\\\\Abdeljalil-Portfolio\\\\src\\\\components\\\\ContactForm.js\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Abdeljalil Rajli\\\\Desktop\\\\Abdeljalil-Portfolio\\\\src\\\\components\\\\ContactForm.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, _this);\n};\n_s(ContactForm, \"a2YSLB7R+6C61/9Ccg6oeeTdcj8=\");\n_c = ContactForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactForm);\nvar _c;\n$RefreshReg$(_c, \"ContactForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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anM/ZmUyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQ29udGFjdEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NvbnRhY3REYXRhLCBzZXRDb250YWN0RGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBtZXNzYWdlczogXCJcIixcclxuICB9KTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB7IG5hbWUsIGVtYWlsLCBtZXNzYWdlcyB9ID0gY29udGFjdERhdGE7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlID0gKGUpID0+XHJcbiAgICBzZXRDb250YWN0RGF0YSh7IC4uLmNvbnRhY3REYXRhLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAobmFtZS5sZW5ndGggPT09IDAgfHwgZW1haWwubGVuZ3RoID09PSAwIHx8IG1lc3NhZ2VzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBzZXRFcnJvcih0cnVlKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgc2V0RXJyb3IoZmFsc2UpO1xyXG4gICAgICB9LCAyMDAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEVycm9yKGZhbHNlKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgc2V0Q29udGFjdERhdGEoeyBuYW1lOiBcIlwiLCBlbWFpbDogXCJcIiwgbWVzc2FnZXM6IFwiXCIgfSk7XHJcbiAgICAgIH0sIDIwMDApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvblxyXG4gICAgICBjbGFzc05hbWU9XCJzZWN0aW9uIHNlY3Rpb24tYmdcIlxyXG4gICAgICBpZD1cImNvbnRhY3Qtc2VjdGlvblwiXHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgey8qIFNlY3Rpb24gSGVhZGluZyAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tdGl0bGVzXCI+XHJcbiAgICAgICAgICA8aDJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibS10aXRsZSBnZXQtaW4tdG91Y2hcIiBkYXRhLXRleHQ9XCJHRVQgSU4gVE9VQ0guXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgR0VUIElOIFRPVUNILlxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctY3VzdG9tXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTMgYWxpZ24tcmlnaHRcIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWN0cy1mb3JtXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG5cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuPkNPUFkmbmJzcDtFTUFJTDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybTtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQ29udGFjdEZvcm0iLCJuYW1lIiwiZW1haWwiLCJtZXNzYWdlcyIsImNvbnRhY3REYXRhIiwic2V0Q29udGFjdERhdGEiLCJlcnJvciIsInNldEVycm9yIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwibGVuZ3RoIiwic2V0VGltZW91dCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJpZCIsImRpdiIsImgyIiwiZGF0YS10ZXh0IiwiYSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ContactForm.js\n"));

/***/ })

});