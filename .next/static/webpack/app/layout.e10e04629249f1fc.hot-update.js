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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"9bb70a400d62\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvZ2xvYmFscy5jc3M/ZDhhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjliYjcwYTQwMGQ2MlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/layout.jsx":
/*!************************!*\
  !*** ./app/layout.jsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RootLayout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals.css */ \"(app-pages-browser)/./app/globals.css\");\n/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ \"(app-pages-browser)/./node_modules/@fortawesome/fontawesome-free/css/all.min.css\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ \"(app-pages-browser)/./components/Footer.jsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ \"(app-pages-browser)/./components/Header.jsx\");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Modal */ \"(app-pages-browser)/./components/Modal.jsx\");\n/* harmony import */ var _components_SocialIcons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SocialIcons */ \"(app-pages-browser)/./components/SocialIcons.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction RootLayout(param) {\n    let { children } = param;\n    _s();\n    const [scrolled, setScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [rotation, setRotation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true) // Modal open on initial load\n    ;\n    const [isContentBlurred, setIsContentBlurred] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true) // Blur content until consent is given\n    ;\n    const [consentGiven, setConsentGiven] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Check if the user has already interacted with the cookie consent modal\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const userConsent = localStorage.getItem(\"cookieConsent\");\n        if (userConsent === \"true\") {\n            setConsentGiven(true);\n            setIsContentBlurred(false) // Remove blur after consent is given\n            ;\n        } else if (userConsent === \"false\") {\n            setConsentGiven(false);\n            setIsContentBlurred(false) // No blur for declined consent\n            ;\n        }\n    }, []);\n    // Handle modal close and user consent\n    const handleAccept = ()=>{\n        localStorage.setItem(\"cookieConsent\", \"true\");\n        setConsentGiven(true);\n        setIsModalOpen(false);\n        setIsContentBlurred(false) // Remove blur once consent is given\n        ;\n    };\n    // Handle cookie decline\n    const handleDecline = ()=>{\n        localStorage.setItem(\"cookieConsent\", \"false\");\n        setConsentGiven(false);\n        setIsModalOpen(false);\n        setIsContentBlurred(false) // Remove blur even if consent is declined\n        ;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n            lang: \"en\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        isOpen: isModalOpen,\n                        onClose: ()=>setIsModalOpen(false),\n                        message: \"Wir nutzen ausschlie\\xdflich notwendige YouTube auf unserer Seite und setzen einen Cookie – einverstanden?\",\n                        icon: \"fas fa-cookie-bite\" // Icon class\n                        ,\n                        acceptText: \"Logisch!\" // Button text for accepting cookies\n                        ,\n                        declineText: \"Ohne Videos.\" // Button text for declining cookies\n                        ,\n                        handleAccept: handleAccept,\n                        handleDecline: handleDecline\n                    }, void 0, false, {\n                        fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(isContentBlurred ? \"backdrop-blur-lg\" : \"\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative bg-custom-pattern bg-cover bg-center min-h-screen\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute inset-0 bg-black bg-opacity-90 backdrop-blur-lg\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative z-10 min-h-[100dvh] grid grid-rows-[auto_1fr_auto] text-white\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            scrolled: scrolled,\n                                            rotation: rotation\n                                        }, void 0, false, {\n                                            fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                                            children: children\n                                        }, void 0, false, {\n                                            fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SocialIcons__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(RootLayout, \"MIAjkAJhi4EwIxGET6nZu9oTSTY=\");\n_c = RootLayout;\nvar _c;\n$RefreshReg$(_c, \"RootLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sYXlvdXQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUUyQztBQUNyQjtBQUNnQztBQUNiO0FBQ0E7QUFDRjtBQUNZO0FBRXBDLFNBQVNNLFdBQVcsS0FBWTtRQUFaLEVBQUVDLFFBQVEsRUFBRSxHQUFaOztJQUNqQyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDVSxVQUFVQyxZQUFZLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1ksYUFBYUMsZUFBZSxHQUFHYiwrQ0FBUUEsQ0FBQyxNQUFNLDZCQUE2Qjs7SUFDbEYsTUFBTSxDQUFDYyxrQkFBa0JDLG9CQUFvQixHQUFHZiwrQ0FBUUEsQ0FBQyxNQUFNLHNDQUFzQzs7SUFDckcsTUFBTSxDQUFDZ0IsY0FBY0MsZ0JBQWdCLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUVqRCx5RUFBeUU7SUFDekVDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWlCLGNBQWNDLGFBQWFDLE9BQU8sQ0FBQztRQUN6QyxJQUFJRixnQkFBZ0IsUUFBUTtZQUMxQkQsZ0JBQWdCO1lBQ2hCRixvQkFBb0IsT0FBTyxxQ0FBcUM7O1FBQ2xFLE9BQU8sSUFBSUcsZ0JBQWdCLFNBQVM7WUFDbENELGdCQUFnQjtZQUNoQkYsb0JBQW9CLE9BQU8sK0JBQStCOztRQUM1RDtJQUNGLEdBQUcsRUFBRTtJQUVMLHNDQUFzQztJQUN0QyxNQUFNTSxlQUFlO1FBQ25CRixhQUFhRyxPQUFPLENBQUMsaUJBQWlCO1FBQ3RDTCxnQkFBZ0I7UUFDaEJKLGVBQWU7UUFDZkUsb0JBQW9CLE9BQU8sb0NBQW9DOztJQUNqRTtJQUVBLHdCQUF3QjtJQUN4QixNQUFNUSxnQkFBZ0I7UUFDcEJKLGFBQWFHLE9BQU8sQ0FBQyxpQkFBaUI7UUFDdENMLGdCQUFnQjtRQUNoQkosZUFBZTtRQUNmRSxvQkFBb0IsT0FBTywwQ0FBMEM7O0lBQ3ZFO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNTO1lBQUtDLE1BQUs7c0JBQ1QsNEVBQUNDOztrQ0FDQyw4REFBQ3RCLHlEQUFLQTt3QkFDSnVCLFFBQVFmO3dCQUNSZ0IsU0FBUyxJQUFNZixlQUFlO3dCQUM5QmdCLFNBQVE7d0JBQ1JDLE1BQUsscUJBQXFCLGFBQWE7O3dCQUN2Q0MsWUFBVyxXQUFXLG9DQUFvQzs7d0JBQzFEQyxhQUFZLGVBQWUsb0NBQW9DOzt3QkFDL0RYLGNBQWNBO3dCQUNkRSxlQUFlQTs7Ozs7O2tDQUlqQiw4REFBQ1U7d0JBQUlDLFdBQVcsR0FBOEMsT0FBM0NwQixtQkFBbUIscUJBQXFCO2tDQUN6RCw0RUFBQ21COzRCQUFJQyxXQUFVOzs4Q0FFYiw4REFBQ0Q7b0NBQUlDLFdBQVU7Ozs7Ozs4Q0FDZiw4REFBQ0Q7b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDL0IsMERBQU1BOzRDQUFDSyxVQUFVQTs0Q0FBVUUsVUFBVUE7Ozs7OztzREFFdEMsOERBQUN5QjtzREFBTTVCOzs7Ozs7c0RBQ1AsOERBQUNMLDBEQUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJYiw4REFBQ0csK0RBQVdBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUt0QjtHQXBFd0JDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2xheW91dC5qc3g/MGM4MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBcIi4vZ2xvYmFscy5jc3NcIlxuaW1wb3J0IFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzXCJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9Nb2RhbFwiXG5pbXBvcnQgU29jaWFsSWNvbnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvU29jaWFsSWNvbnNcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSb290TGF5b3V0KHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBbc2Nyb2xsZWQsIHNldFNjcm9sbGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbcm90YXRpb24sIHNldFJvdGF0aW9uXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtpc01vZGFsT3Blbiwgc2V0SXNNb2RhbE9wZW5dID0gdXNlU3RhdGUodHJ1ZSkgLy8gTW9kYWwgb3BlbiBvbiBpbml0aWFsIGxvYWRcbiAgY29uc3QgW2lzQ29udGVudEJsdXJyZWQsIHNldElzQ29udGVudEJsdXJyZWRdID0gdXNlU3RhdGUodHJ1ZSkgLy8gQmx1ciBjb250ZW50IHVudGlsIGNvbnNlbnQgaXMgZ2l2ZW5cbiAgY29uc3QgW2NvbnNlbnRHaXZlbiwgc2V0Q29uc2VudEdpdmVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIC8vIENoZWNrIGlmIHRoZSB1c2VyIGhhcyBhbHJlYWR5IGludGVyYWN0ZWQgd2l0aCB0aGUgY29va2llIGNvbnNlbnQgbW9kYWxcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1c2VyQ29uc2VudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29va2llQ29uc2VudFwiKVxuICAgIGlmICh1c2VyQ29uc2VudCA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgIHNldENvbnNlbnRHaXZlbih0cnVlKVxuICAgICAgc2V0SXNDb250ZW50Qmx1cnJlZChmYWxzZSkgLy8gUmVtb3ZlIGJsdXIgYWZ0ZXIgY29uc2VudCBpcyBnaXZlblxuICAgIH0gZWxzZSBpZiAodXNlckNvbnNlbnQgPT09IFwiZmFsc2VcIikge1xuICAgICAgc2V0Q29uc2VudEdpdmVuKGZhbHNlKVxuICAgICAgc2V0SXNDb250ZW50Qmx1cnJlZChmYWxzZSkgLy8gTm8gYmx1ciBmb3IgZGVjbGluZWQgY29uc2VudFxuICAgIH1cbiAgfSwgW10pXG5cbiAgLy8gSGFuZGxlIG1vZGFsIGNsb3NlIGFuZCB1c2VyIGNvbnNlbnRcbiAgY29uc3QgaGFuZGxlQWNjZXB0ID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29va2llQ29uc2VudFwiLCBcInRydWVcIilcbiAgICBzZXRDb25zZW50R2l2ZW4odHJ1ZSlcbiAgICBzZXRJc01vZGFsT3BlbihmYWxzZSlcbiAgICBzZXRJc0NvbnRlbnRCbHVycmVkKGZhbHNlKSAvLyBSZW1vdmUgYmx1ciBvbmNlIGNvbnNlbnQgaXMgZ2l2ZW5cbiAgfVxuXG4gIC8vIEhhbmRsZSBjb29raWUgZGVjbGluZVxuICBjb25zdCBoYW5kbGVEZWNsaW5lID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29va2llQ29uc2VudFwiLCBcImZhbHNlXCIpXG4gICAgc2V0Q29uc2VudEdpdmVuKGZhbHNlKVxuICAgIHNldElzTW9kYWxPcGVuKGZhbHNlKVxuICAgIHNldElzQ29udGVudEJsdXJyZWQoZmFsc2UpIC8vIFJlbW92ZSBibHVyIGV2ZW4gaWYgY29uc2VudCBpcyBkZWNsaW5lZFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGh0bWwgbGFuZz0nZW4nPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgIGlzT3Blbj17aXNNb2RhbE9wZW59XG4gICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRJc01vZGFsT3BlbihmYWxzZSl9IC8vIENsb3NlIG1vZGFsIHdoZW4gY2xpY2tlZCBvdXRzaWRlIG9yIEVzY2FwZSBrZXkgaXMgcHJlc3NlZFxuICAgICAgICAgICAgbWVzc2FnZT0nV2lyIG51dHplbiBhdXNzY2hsaWXDn2xpY2ggbm90d2VuZGlnZSBZb3VUdWJlIGF1ZiB1bnNlcmVyIFNlaXRlIHVuZCBzZXR6ZW4gZWluZW4gQ29va2llIOKAkyBlaW52ZXJzdGFuZGVuPydcbiAgICAgICAgICAgIGljb249J2ZhcyBmYS1jb29raWUtYml0ZScgLy8gSWNvbiBjbGFzc1xuICAgICAgICAgICAgYWNjZXB0VGV4dD0nTG9naXNjaCEnIC8vIEJ1dHRvbiB0ZXh0IGZvciBhY2NlcHRpbmcgY29va2llc1xuICAgICAgICAgICAgZGVjbGluZVRleHQ9J09obmUgVmlkZW9zLicgLy8gQnV0dG9uIHRleHQgZm9yIGRlY2xpbmluZyBjb29raWVzXG4gICAgICAgICAgICBoYW5kbGVBY2NlcHQ9e2hhbmRsZUFjY2VwdH0gLy8gUGFzcyBoYW5kbGVBY2NlcHQgZnVuY3Rpb25cbiAgICAgICAgICAgIGhhbmRsZURlY2xpbmU9e2hhbmRsZURlY2xpbmV9IC8vIFBhc3MgaGFuZGxlRGVjbGluZSBmdW5jdGlvblxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICB7LyogTWFpbiBjb250ZW50LCBibHVycmVkIHdoaWxlIG1vZGFsIGlzIG9wZW4gKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2lzQ29udGVudEJsdXJyZWQgPyBcImJhY2tkcm9wLWJsdXItbGdcIiA6IFwiXCJ9YH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgYmctY3VzdG9tLXBhdHRlcm4gYmctY292ZXIgYmctY2VudGVyIG1pbi1oLXNjcmVlbic+XG4gICAgICAgICAgICAgIHsvKiBCYWNrZ3JvdW5kIEJsdXIgYW5kIE92ZXJsYXkgKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSBpbnNldC0wIGJnLWJsYWNrIGJnLW9wYWNpdHktOTAgYmFja2Ryb3AtYmx1ci1sZyc+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSB6LTEwIG1pbi1oLVsxMDBkdmhdIGdyaWQgZ3JpZC1yb3dzLVthdXRvXzFmcl9hdXRvXSB0ZXh0LXdoaXRlJz5cbiAgICAgICAgICAgICAgICA8SGVhZGVyIHNjcm9sbGVkPXtzY3JvbGxlZH0gcm90YXRpb249e3JvdGF0aW9ufSAvPlxuICAgICAgICAgICAgICAgIHsvKiBQYXNzIGNvbnNlbnRHaXZlbiBhcyBhIHByb3AgdG8gdGhlIGNoaWxkcmVuICovfVxuICAgICAgICAgICAgICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+XG4gICAgICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxTb2NpYWxJY29ucyAvPlxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L2h0bWw+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZvb3RlciIsIkhlYWRlciIsIk1vZGFsIiwiU29jaWFsSWNvbnMiLCJSb290TGF5b3V0IiwiY2hpbGRyZW4iLCJzY3JvbGxlZCIsInNldFNjcm9sbGVkIiwicm90YXRpb24iLCJzZXRSb3RhdGlvbiIsImlzTW9kYWxPcGVuIiwic2V0SXNNb2RhbE9wZW4iLCJpc0NvbnRlbnRCbHVycmVkIiwic2V0SXNDb250ZW50Qmx1cnJlZCIsImNvbnNlbnRHaXZlbiIsInNldENvbnNlbnRHaXZlbiIsInVzZXJDb25zZW50IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImhhbmRsZUFjY2VwdCIsInNldEl0ZW0iLCJoYW5kbGVEZWNsaW5lIiwiaHRtbCIsImxhbmciLCJib2R5IiwiaXNPcGVuIiwib25DbG9zZSIsIm1lc3NhZ2UiLCJpY29uIiwiYWNjZXB0VGV4dCIsImRlY2xpbmVUZXh0IiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/layout.jsx\n"));

/***/ })

});