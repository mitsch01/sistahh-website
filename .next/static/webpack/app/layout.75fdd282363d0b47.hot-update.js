"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"9ecf66ee6b6e\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvZ2xvYmFscy5jc3M/ZDhhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjllY2Y2NmVlNmI2ZVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/layout.jsx":
/*!************************!*\
  !*** ./app/layout.jsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RootLayout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals.css */ \"(app-pages-browser)/./app/globals.css\");\n/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ \"(app-pages-browser)/./node_modules/@fortawesome/fontawesome-free/css/all.min.css\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ \"(app-pages-browser)/./components/Footer.jsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ \"(app-pages-browser)/./components/Header.jsx\");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Modal */ \"(app-pages-browser)/./components/Modal.jsx\");\n/* harmony import */ var _components_SocialIcons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SocialIcons */ \"(app-pages-browser)/./components/SocialIcons.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction RootLayout(param) {\n    let { children } = param;\n    _s();\n    const [consentGiven, setConsentGiven] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isContentBlurred, setIsContentBlurred] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Fetch consent state from localStorage\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const userConsent = localStorage.getItem(\"cookieConsent\");\n        if (userConsent === \"true\") {\n            setConsentGiven(true);\n            setIsModalOpen(false);\n            setIsContentBlurred(false);\n        } else if (userConsent === \"false\") {\n            setConsentGiven(false);\n            setIsModalOpen(false);\n            setIsContentBlurred(false);\n        } else {\n            setIsModalOpen(true) // Show modal for first-time users\n            ;\n            setIsContentBlurred(true);\n        }\n    }, []);\n    // Handle modal acceptance\n    const handleAccept = ()=>{\n        localStorage.setItem(\"cookieConsent\", \"true\");\n        setConsentGiven(true);\n        setIsModalOpen(false);\n        setIsContentBlurred(false);\n    };\n    // Handle modal decline\n    const handleDecline = ()=>{\n        localStorage.setItem(\"cookieConsent\", \"false\");\n        setConsentGiven(false);\n        setIsModalOpen(false);\n        setIsContentBlurred(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n            lang: \"en\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        isOpen: isModalOpen,\n                        disableCloseOutsideClick: true,\n                        message: \"Wir nutzen ausschlie\\xdflich notwendige Technologien auf dieser Website. Nur f\\xfcr YouTube setzen wir einen zus\\xe4tzlichen Cookie. Einverstanden?\",\n                        icon: \"fas fa-cookie-bite\",\n                        acceptText: \"Logisch\",\n                        declineText: \"Ohne Videos\",\n                        handleAccept: handleAccept,\n                        handleDecline: handleDecline\n                    }, void 0, false, {\n                        fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(isContentBlurred ? \"backdrop-blur-lg\" : \"\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative bg-custom-pattern bg-cover bg-center min-h-screen\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute inset-0 bg-black bg-opacity-90 backdrop-blur-lg\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative z-10 min-h-[100dvh] grid grid-rows-[auto_1fr_auto] text-white\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                                            children: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(children, {\n                                                consentGiven\n                                            })\n                                        }, void 0, false, {\n                                            fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n                            lineNumber: 59,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SocialIcons__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(RootLayout, \"zFkq9TfJTv74ebL+W9CeWJN1LuM=\");\n_c = RootLayout;\nvar _c;\n$RefreshReg$(_c, \"RootLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sYXlvdXQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUVrRDtBQUM1QjtBQUNnQztBQUNiO0FBQ0E7QUFDRjtBQUNZO0FBRXBDLFNBQVNPLFdBQVcsS0FBWTtRQUFaLEVBQUVDLFFBQVEsRUFBRSxHQUFaOztJQUNqQyxNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNVLGFBQWFDLGVBQWUsR0FBR1gsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDWSxrQkFBa0JDLG9CQUFvQixHQUFHYiwrQ0FBUUEsQ0FBQztJQUV6RCx3Q0FBd0M7SUFDeENDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWEsY0FBY0MsYUFBYUMsT0FBTyxDQUFDO1FBRXpDLElBQUlGLGdCQUFnQixRQUFRO1lBQzFCTCxnQkFBZ0I7WUFDaEJFLGVBQWU7WUFDZkUsb0JBQW9CO1FBQ3RCLE9BQU8sSUFBSUMsZ0JBQWdCLFNBQVM7WUFDbENMLGdCQUFnQjtZQUNoQkUsZUFBZTtZQUNmRSxvQkFBb0I7UUFDdEIsT0FBTztZQUNMRixlQUFlLE1BQU0sa0NBQWtDOztZQUN2REUsb0JBQW9CO1FBQ3RCO0lBQ0YsR0FBRyxFQUFFO0lBRUwsMEJBQTBCO0lBQzFCLE1BQU1JLGVBQWU7UUFDbkJGLGFBQWFHLE9BQU8sQ0FBQyxpQkFBaUI7UUFDdENULGdCQUFnQjtRQUNoQkUsZUFBZTtRQUNmRSxvQkFBb0I7SUFDdEI7SUFFQSx1QkFBdUI7SUFDdkIsTUFBTU0sZ0JBQWdCO1FBQ3BCSixhQUFhRyxPQUFPLENBQUMsaUJBQWlCO1FBQ3RDVCxnQkFBZ0I7UUFDaEJFLGVBQWU7UUFDZkUsb0JBQW9CO0lBQ3RCO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNPO1lBQUtDLE1BQUs7c0JBQ1QsNEVBQUNDOztrQ0FFQyw4REFBQ2xCLHlEQUFLQTt3QkFBQ21CLFFBQVFiO3dCQUFhYywwQkFBMEI7d0JBQU1DLFNBQVE7d0JBQTZJQyxNQUFLO3dCQUFxQkMsWUFBVzt3QkFBVUMsYUFBWTt3QkFBY1gsY0FBY0E7d0JBQWNFLGVBQWVBOzs7Ozs7a0NBR3JVLDhEQUFDVTt3QkFBSUMsV0FBVyxHQUE4QyxPQUEzQ2xCLG1CQUFtQixxQkFBcUI7a0NBQ3pELDRFQUFDaUI7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRDtvQ0FBSUMsV0FBVTs7Ozs7OzhDQUNmLDhEQUFDRDtvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUMzQiwwREFBTUE7Ozs7O3NEQUNQLDhEQUFDNEI7c0RBQU1oQyxjQUFBQSx5REFBa0IsQ0FBQ1EsVUFBVTtnREFBRUM7NENBQWE7Ozs7OztzREFDbkQsOERBQUNOLDBEQUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLYiw4REFBQ0csK0RBQVdBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUt0QjtHQS9Ed0JDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2xheW91dC5qc3g/MGM4MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgXCIuL2dsb2JhbHMuY3NzXCJcbmltcG9ydCBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzc1wiXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvTW9kYWxcIlxuaW1wb3J0IFNvY2lhbEljb25zIGZyb20gXCIuLi9jb21wb25lbnRzL1NvY2lhbEljb25zXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm9vdExheW91dCh7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgW2NvbnNlbnRHaXZlbiwgc2V0Q29uc2VudEdpdmVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbaXNNb2RhbE9wZW4sIHNldElzTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbaXNDb250ZW50Qmx1cnJlZCwgc2V0SXNDb250ZW50Qmx1cnJlZF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAvLyBGZXRjaCBjb25zZW50IHN0YXRlIGZyb20gbG9jYWxTdG9yYWdlXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdXNlckNvbnNlbnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvb2tpZUNvbnNlbnRcIilcblxuICAgIGlmICh1c2VyQ29uc2VudCA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgIHNldENvbnNlbnRHaXZlbih0cnVlKVxuICAgICAgc2V0SXNNb2RhbE9wZW4oZmFsc2UpXG4gICAgICBzZXRJc0NvbnRlbnRCbHVycmVkKGZhbHNlKVxuICAgIH0gZWxzZSBpZiAodXNlckNvbnNlbnQgPT09IFwiZmFsc2VcIikge1xuICAgICAgc2V0Q29uc2VudEdpdmVuKGZhbHNlKVxuICAgICAgc2V0SXNNb2RhbE9wZW4oZmFsc2UpXG4gICAgICBzZXRJc0NvbnRlbnRCbHVycmVkKGZhbHNlKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRJc01vZGFsT3Blbih0cnVlKSAvLyBTaG93IG1vZGFsIGZvciBmaXJzdC10aW1lIHVzZXJzXG4gICAgICBzZXRJc0NvbnRlbnRCbHVycmVkKHRydWUpXG4gICAgfVxuICB9LCBbXSlcblxuICAvLyBIYW5kbGUgbW9kYWwgYWNjZXB0YW5jZVxuICBjb25zdCBoYW5kbGVBY2NlcHQgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb29raWVDb25zZW50XCIsIFwidHJ1ZVwiKVxuICAgIHNldENvbnNlbnRHaXZlbih0cnVlKVxuICAgIHNldElzTW9kYWxPcGVuKGZhbHNlKVxuICAgIHNldElzQ29udGVudEJsdXJyZWQoZmFsc2UpXG4gIH1cblxuICAvLyBIYW5kbGUgbW9kYWwgZGVjbGluZVxuICBjb25zdCBoYW5kbGVEZWNsaW5lID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29va2llQ29uc2VudFwiLCBcImZhbHNlXCIpXG4gICAgc2V0Q29uc2VudEdpdmVuKGZhbHNlKVxuICAgIHNldElzTW9kYWxPcGVuKGZhbHNlKVxuICAgIHNldElzQ29udGVudEJsdXJyZWQoZmFsc2UpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aHRtbCBsYW5nPSdlbic+XG4gICAgICAgIDxib2R5PlxuICAgICAgICAgIHsvKiBDb29raWUgY29uc2VudCBtb2RhbCAqL31cbiAgICAgICAgICA8TW9kYWwgaXNPcGVuPXtpc01vZGFsT3Blbn0gZGlzYWJsZUNsb3NlT3V0c2lkZUNsaWNrPXt0cnVlfSBtZXNzYWdlPSdXaXIgbnV0emVuIGF1c3NjaGxpZcOfbGljaCBub3R3ZW5kaWdlIFRlY2hub2xvZ2llbiBhdWYgZGllc2VyIFdlYnNpdGUuIE51ciBmw7xyIFlvdVR1YmUgc2V0emVuIHdpciBlaW5lbiB6dXPDpHR6bGljaGVuIENvb2tpZS4gRWludmVyc3RhbmRlbj8nIGljb249J2ZhcyBmYS1jb29raWUtYml0ZScgYWNjZXB0VGV4dD0nTG9naXNjaCcgZGVjbGluZVRleHQ9J09obmUgVmlkZW9zJyBoYW5kbGVBY2NlcHQ9e2hhbmRsZUFjY2VwdH0gaGFuZGxlRGVjbGluZT17aGFuZGxlRGVjbGluZX0gLz5cblxuICAgICAgICAgIHsvKiBNYWluIGNvbnRlbnQgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2lzQ29udGVudEJsdXJyZWQgPyBcImJhY2tkcm9wLWJsdXItbGdcIiA6IFwiXCJ9YH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgYmctY3VzdG9tLXBhdHRlcm4gYmctY292ZXIgYmctY2VudGVyIG1pbi1oLXNjcmVlbic+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSBpbnNldC0wIGJnLWJsYWNrIGJnLW9wYWNpdHktOTAgYmFja2Ryb3AtYmx1ci1sZyc+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSB6LTEwIG1pbi1oLVsxMDBkdmhdIGdyaWQgZ3JpZC1yb3dzLVthdXRvXzFmcl9hdXRvXSB0ZXh0LXdoaXRlJz5cbiAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICAgICAgPG1haW4+e1JlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwgeyBjb25zZW50R2l2ZW4gfSl9PC9tYWluPlxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxTb2NpYWxJY29ucyAvPlxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L2h0bWw+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRm9vdGVyIiwiSGVhZGVyIiwiTW9kYWwiLCJTb2NpYWxJY29ucyIsIlJvb3RMYXlvdXQiLCJjaGlsZHJlbiIsImNvbnNlbnRHaXZlbiIsInNldENvbnNlbnRHaXZlbiIsImlzTW9kYWxPcGVuIiwic2V0SXNNb2RhbE9wZW4iLCJpc0NvbnRlbnRCbHVycmVkIiwic2V0SXNDb250ZW50Qmx1cnJlZCIsInVzZXJDb25zZW50IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImhhbmRsZUFjY2VwdCIsInNldEl0ZW0iLCJoYW5kbGVEZWNsaW5lIiwiaHRtbCIsImxhbmciLCJib2R5IiwiaXNPcGVuIiwiZGlzYWJsZUNsb3NlT3V0c2lkZUNsaWNrIiwibWVzc2FnZSIsImljb24iLCJhY2NlcHRUZXh0IiwiZGVjbGluZVRleHQiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwiY2xvbmVFbGVtZW50Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/layout.jsx\n"));

/***/ })

});