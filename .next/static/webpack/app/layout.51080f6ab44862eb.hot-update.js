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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"01da0b84950f\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvZ2xvYmFscy5jc3M/ZDhhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjAxZGEwYjg0OTUwZlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/layout.jsx":
/*!************************!*\
  !*** ./app/layout.jsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RootLayout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals.css */ \"(app-pages-browser)/./app/globals.css\");\n/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ \"(app-pages-browser)/./node_modules/@fortawesome/fontawesome-free/css/all.min.css\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ \"(app-pages-browser)/./components/Footer.jsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ \"(app-pages-browser)/./components/Header.jsx\");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Modal */ \"(app-pages-browser)/./components/Modal.jsx\");\n/* harmony import */ var _components_SocialIcons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SocialIcons */ \"(app-pages-browser)/./components/SocialIcons.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction RootLayout(param) {\n    let { children } = param;\n    _s();\n    const [consentGiven, setConsentGiven] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isContentBlurred, setIsContentBlurred] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Fetch consent state from localStorage\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const userConsent = localStorage.getItem(\"cookieConsent\");\n        if (userConsent === \"true\") {\n            setConsentGiven(true);\n            setIsModalOpen(false);\n            setIsContentBlurred(false);\n        } else if (userConsent === \"false\") {\n            setConsentGiven(false);\n            setIsModalOpen(false);\n            setIsContentBlurred(false);\n        } else {\n            setIsModalOpen(true) // Show modal for first-time users\n            ;\n            setIsContentBlurred(true);\n        }\n    }, []);\n    // Handle modal acceptance\n    const handleAccept = ()=>{\n        localStorage.setItem(\"cookieConsent\", \"true\");\n        setConsentGiven(true);\n        setIsModalOpen(false);\n        setIsContentBlurred(false);\n    };\n    // Handle modal decline\n    const handleDecline = ()=>{\n        localStorage.setItem(\"cookieConsent\", \"false\");\n        setConsentGiven(false);\n        setIsModalOpen(false);\n        setIsContentBlurred(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            'console.log(\"Children in RootLayout:\", children)',\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n                lang: \"en\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            isOpen: isModalOpen,\n                            disableCloseOutsideClick: true,\n                            message: \"Wir nutzen ausschlie\\xdflich notwendige Technologien auf dieser Website. Nur f\\xfcr YouTube setzen wir einen zus\\xe4tzlichen Cookie. Einverstanden?\",\n                            icon: \"fas fa-cookie-bite\",\n                            acceptText: \"Logisch\",\n                            declineText: \"Ohne Videos\",\n                            handleAccept: handleAccept,\n                            handleDecline: handleDecline\n                        }, void 0, false, {\n                            fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat(isContentBlurred ? \"backdrop-blur-lg\" : \"\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative bg-custom-pattern bg-cover bg-center min-h-screen\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"absolute inset-0 bg-black bg-opacity-90 backdrop-blur-lg\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"relative z-10 min-h-[100dvh] grid grid-rows-[auto_1fr_auto] text-white\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                                fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                                                children: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(children, {\n                                                    consentGiven\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                                fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SocialIcons__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(RootLayout, \"zFkq9TfJTv74ebL+W9CeWJN1LuM=\");\n_c = RootLayout;\nvar _c;\n$RefreshReg$(_c, \"RootLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sYXlvdXQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUVrRDtBQUM1QjtBQUNnQztBQUNiO0FBQ0E7QUFDRjtBQUNZO0FBRXBDLFNBQVNPLFdBQVcsS0FBWTtRQUFaLEVBQUVDLFFBQVEsRUFBRSxHQUFaOztJQUNqQyxNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNVLGFBQWFDLGVBQWUsR0FBR1gsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDWSxrQkFBa0JDLG9CQUFvQixHQUFHYiwrQ0FBUUEsQ0FBQztJQUV6RCx3Q0FBd0M7SUFDeENDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWEsY0FBY0MsYUFBYUMsT0FBTyxDQUFDO1FBRXpDLElBQUlGLGdCQUFnQixRQUFRO1lBQzFCTCxnQkFBZ0I7WUFDaEJFLGVBQWU7WUFDZkUsb0JBQW9CO1FBQ3RCLE9BQU8sSUFBSUMsZ0JBQWdCLFNBQVM7WUFDbENMLGdCQUFnQjtZQUNoQkUsZUFBZTtZQUNmRSxvQkFBb0I7UUFDdEIsT0FBTztZQUNMRixlQUFlLE1BQU0sa0NBQWtDOztZQUN2REUsb0JBQW9CO1FBQ3RCO0lBQ0YsR0FBRyxFQUFFO0lBRUwsMEJBQTBCO0lBQzFCLE1BQU1JLGVBQWU7UUFDbkJGLGFBQWFHLE9BQU8sQ0FBQyxpQkFBaUI7UUFDdENULGdCQUFnQjtRQUNoQkUsZUFBZTtRQUNmRSxvQkFBb0I7SUFDdEI7SUFFQSx1QkFBdUI7SUFDdkIsTUFBTU0sZ0JBQWdCO1FBQ3BCSixhQUFhRyxPQUFPLENBQUMsaUJBQWlCO1FBQ3RDVCxnQkFBZ0I7UUFDaEJFLGVBQWU7UUFDZkUsb0JBQW9CO0lBQ3RCO0lBRUEscUJBQ0U7O1lBQUU7MEJBRUEsOERBQUNPO2dCQUFLQyxNQUFLOzBCQUNULDRFQUFDQzs7c0NBRUMsOERBQUNsQix5REFBS0E7NEJBQUNtQixRQUFRYjs0QkFBYWMsMEJBQTBCOzRCQUFNQyxTQUFROzRCQUE2SUMsTUFBSzs0QkFBcUJDLFlBQVc7NEJBQVVDLGFBQVk7NEJBQWNYLGNBQWNBOzRCQUFjRSxlQUFlQTs7Ozs7O3NDQUdyVSw4REFBQ1U7NEJBQUlDLFdBQVcsR0FBOEMsT0FBM0NsQixtQkFBbUIscUJBQXFCO3NDQUN6RCw0RUFBQ2lCO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ0Q7d0NBQUlDLFdBQVU7Ozs7OztrREFDZiw4REFBQ0Q7d0NBQUlDLFdBQVU7OzBEQUNiLDhEQUFDM0IsMERBQU1BOzs7OzswREFDUCw4REFBQzRCOzBEQUFNaEMsY0FBQUEseURBQWtCLENBQUNRLFVBQVU7b0RBQUVDO2dEQUFhOzs7Ozs7MERBQ25ELDhEQUFDTiwwREFBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBS2IsOERBQUNHLCtEQUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3RCO0dBaEV3QkM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbGF5b3V0LmpzeD8wYzgxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBcIi4vZ2xvYmFscy5jc3NcIlxuaW1wb3J0IFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzXCJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9Nb2RhbFwiXG5pbXBvcnQgU29jaWFsSWNvbnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvU29jaWFsSWNvbnNcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSb290TGF5b3V0KHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBbY29uc2VudEdpdmVuLCBzZXRDb25zZW50R2l2ZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtpc01vZGFsT3Blbiwgc2V0SXNNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtpc0NvbnRlbnRCbHVycmVkLCBzZXRJc0NvbnRlbnRCbHVycmVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIC8vIEZldGNoIGNvbnNlbnQgc3RhdGUgZnJvbSBsb2NhbFN0b3JhZ2VcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1c2VyQ29uc2VudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29va2llQ29uc2VudFwiKVxuXG4gICAgaWYgKHVzZXJDb25zZW50ID09PSBcInRydWVcIikge1xuICAgICAgc2V0Q29uc2VudEdpdmVuKHRydWUpXG4gICAgICBzZXRJc01vZGFsT3BlbihmYWxzZSlcbiAgICAgIHNldElzQ29udGVudEJsdXJyZWQoZmFsc2UpXG4gICAgfSBlbHNlIGlmICh1c2VyQ29uc2VudCA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICBzZXRDb25zZW50R2l2ZW4oZmFsc2UpXG4gICAgICBzZXRJc01vZGFsT3BlbihmYWxzZSlcbiAgICAgIHNldElzQ29udGVudEJsdXJyZWQoZmFsc2UpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldElzTW9kYWxPcGVuKHRydWUpIC8vIFNob3cgbW9kYWwgZm9yIGZpcnN0LXRpbWUgdXNlcnNcbiAgICAgIHNldElzQ29udGVudEJsdXJyZWQodHJ1ZSlcbiAgICB9XG4gIH0sIFtdKVxuXG4gIC8vIEhhbmRsZSBtb2RhbCBhY2NlcHRhbmNlXG4gIGNvbnN0IGhhbmRsZUFjY2VwdCA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvb2tpZUNvbnNlbnRcIiwgXCJ0cnVlXCIpXG4gICAgc2V0Q29uc2VudEdpdmVuKHRydWUpXG4gICAgc2V0SXNNb2RhbE9wZW4oZmFsc2UpXG4gICAgc2V0SXNDb250ZW50Qmx1cnJlZChmYWxzZSlcbiAgfVxuXG4gIC8vIEhhbmRsZSBtb2RhbCBkZWNsaW5lXG4gIGNvbnN0IGhhbmRsZURlY2xpbmUgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb29raWVDb25zZW50XCIsIFwiZmFsc2VcIilcbiAgICBzZXRDb25zZW50R2l2ZW4oZmFsc2UpXG4gICAgc2V0SXNNb2RhbE9wZW4oZmFsc2UpXG4gICAgc2V0SXNDb250ZW50Qmx1cnJlZChmYWxzZSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIGNvbnNvbGUubG9nKFwiQ2hpbGRyZW4gaW4gUm9vdExheW91dDpcIiwgY2hpbGRyZW4pXG4gICAgICA8aHRtbCBsYW5nPSdlbic+XG4gICAgICAgIDxib2R5PlxuICAgICAgICAgIHsvKiBDb29raWUgY29uc2VudCBtb2RhbCAqL31cbiAgICAgICAgICA8TW9kYWwgaXNPcGVuPXtpc01vZGFsT3Blbn0gZGlzYWJsZUNsb3NlT3V0c2lkZUNsaWNrPXt0cnVlfSBtZXNzYWdlPSdXaXIgbnV0emVuIGF1c3NjaGxpZcOfbGljaCBub3R3ZW5kaWdlIFRlY2hub2xvZ2llbiBhdWYgZGllc2VyIFdlYnNpdGUuIE51ciBmw7xyIFlvdVR1YmUgc2V0emVuIHdpciBlaW5lbiB6dXPDpHR6bGljaGVuIENvb2tpZS4gRWludmVyc3RhbmRlbj8nIGljb249J2ZhcyBmYS1jb29raWUtYml0ZScgYWNjZXB0VGV4dD0nTG9naXNjaCcgZGVjbGluZVRleHQ9J09obmUgVmlkZW9zJyBoYW5kbGVBY2NlcHQ9e2hhbmRsZUFjY2VwdH0gaGFuZGxlRGVjbGluZT17aGFuZGxlRGVjbGluZX0gLz5cblxuICAgICAgICAgIHsvKiBNYWluIGNvbnRlbnQgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2lzQ29udGVudEJsdXJyZWQgPyBcImJhY2tkcm9wLWJsdXItbGdcIiA6IFwiXCJ9YH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgYmctY3VzdG9tLXBhdHRlcm4gYmctY292ZXIgYmctY2VudGVyIG1pbi1oLXNjcmVlbic+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSBpbnNldC0wIGJnLWJsYWNrIGJnLW9wYWNpdHktOTAgYmFja2Ryb3AtYmx1ci1sZyc+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSB6LTEwIG1pbi1oLVsxMDBkdmhdIGdyaWQgZ3JpZC1yb3dzLVthdXRvXzFmcl9hdXRvXSB0ZXh0LXdoaXRlJz5cbiAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICAgICAgPG1haW4+e1JlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwgeyBjb25zZW50R2l2ZW4gfSl9PC9tYWluPlxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxTb2NpYWxJY29ucyAvPlxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L2h0bWw+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRm9vdGVyIiwiSGVhZGVyIiwiTW9kYWwiLCJTb2NpYWxJY29ucyIsIlJvb3RMYXlvdXQiLCJjaGlsZHJlbiIsImNvbnNlbnRHaXZlbiIsInNldENvbnNlbnRHaXZlbiIsImlzTW9kYWxPcGVuIiwic2V0SXNNb2RhbE9wZW4iLCJpc0NvbnRlbnRCbHVycmVkIiwic2V0SXNDb250ZW50Qmx1cnJlZCIsInVzZXJDb25zZW50IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImhhbmRsZUFjY2VwdCIsInNldEl0ZW0iLCJoYW5kbGVEZWNsaW5lIiwiaHRtbCIsImxhbmciLCJib2R5IiwiaXNPcGVuIiwiZGlzYWJsZUNsb3NlT3V0c2lkZUNsaWNrIiwibWVzc2FnZSIsImljb24iLCJhY2NlcHRUZXh0IiwiZGVjbGluZVRleHQiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwiY2xvbmVFbGVtZW50Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/layout.jsx\n"));

/***/ })

});