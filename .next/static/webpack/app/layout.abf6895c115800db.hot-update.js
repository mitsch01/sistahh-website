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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"cb7dbcf18322\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvZ2xvYmFscy5jc3M/ZDhhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImNiN2RiY2YxODMyMlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/layout.jsx":
/*!************************!*\
  !*** ./app/layout.jsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RootLayout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals.css */ \"(app-pages-browser)/./app/globals.css\");\n/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ \"(app-pages-browser)/./node_modules/@fortawesome/fontawesome-free/css/all.min.css\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ \"(app-pages-browser)/./components/Footer.jsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ \"(app-pages-browser)/./components/Header.jsx\");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Modal */ \"(app-pages-browser)/./components/Modal.jsx\");\n/* harmony import */ var _components_SocialIcons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SocialIcons */ \"(app-pages-browser)/./components/SocialIcons.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction RootLayout(param) {\n    let { children } = param;\n    _s();\n    const [consentGiven, setConsentGiven] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [scrolled, setScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [rotation, setRotation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isContentBlurred, setIsContentBlurred] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Check localStorage for consent state on first render\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const userConsent = localStorage.getItem(\"cookieConsent\");\n        if (userConsent === \"true\" || userConsent === \"false\") {\n            // User has already made a choice\n            setIsModalOpen(false);\n            setIsContentBlurred(false) // No blur since user made a decision\n            ;\n        } else {\n            // Show modal for first-time visitors\n            setIsModalOpen(true);\n            setIsContentBlurred(true) // Blur content until decision is made\n            ;\n        }\n    }, []);\n    // Handle modal accept button\n    const handleAccept = ()=>{\n        localStorage.setItem(\"cookieConsent\", \"true\");\n        setIsModalOpen(false);\n        setIsContentBlurred(false) // Remove blur on accept\n        ;\n    };\n    // Handle modal decline button\n    const handleDecline = ()=>{\n        localStorage.setItem(\"cookieConsent\", \"false\");\n        setIsModalOpen(false);\n        setIsContentBlurred(false) // Remove blur on decline\n        ;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n            lang: \"en\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        isOpen: isModalOpen,\n                        disableCloseOutsideClick: true,\n                        message: \"Wir nutzen ausschlie\\xdflich notwendige Technologien auf dieser Website. Nur f\\xfcr YouTube setzen wir einen zus\\xe4tzlichen Cookie. Einverstanden?\",\n                        icon: \"fas fa-cookie-bite\" // Icon class\n                        ,\n                        acceptText: \"Logisch\" // Button text for accepting cookies\n                        ,\n                        declineText: \"Ohne Videos\" // Button text for declining cookies\n                        ,\n                        handleAccept: handleAccept,\n                        handleDecline: handleDecline\n                    }, void 0, false, {\n                        fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(isContentBlurred ? \"backdrop-blur-lg\" : \"\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative bg-custom-pattern bg-cover bg-center min-h-screen\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute inset-0 bg-black bg-opacity-90 backdrop-blur-lg\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative z-10 min-h-[100dvh] grid grid-rows-[auto_1fr_auto] text-white\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            scrolled: scrolled,\n                                            rotation: rotation\n                                        }, void 0, false, {\n                                            fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                                            children: children\n                                        }, void 0, false, {\n                                            fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SocialIcons__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(RootLayout, \"+gsOTN7CGl3cX/rBrXyCC7GXHow=\");\n_c = RootLayout;\nvar _c;\n$RefreshReg$(_c, \"RootLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sYXlvdXQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUUyQztBQUNyQjtBQUNnQztBQUNiO0FBQ0E7QUFDRjtBQUNZO0FBRXBDLFNBQVNNLFdBQVcsS0FBWTtRQUFaLEVBQUVDLFFBQVEsRUFBRSxHQUFaOztJQUNqQyxNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUVqRCxNQUFNLENBQUNVLFVBQVVDLFlBQVksR0FBR1gsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDWSxVQUFVQyxZQUFZLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ2MsYUFBYUMsZUFBZSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNnQixrQkFBa0JDLG9CQUFvQixHQUFHakIsK0NBQVFBLENBQUM7SUFFekQsdURBQXVEO0lBQ3ZEQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1pQixjQUFjQyxhQUFhQyxPQUFPLENBQUM7UUFFekMsSUFBSUYsZ0JBQWdCLFVBQVVBLGdCQUFnQixTQUFTO1lBQ3JELGlDQUFpQztZQUNqQ0gsZUFBZTtZQUNmRSxvQkFBb0IsT0FBTyxxQ0FBcUM7O1FBQ2xFLE9BQU87WUFDTCxxQ0FBcUM7WUFDckNGLGVBQWU7WUFDZkUsb0JBQW9CLE1BQU0sc0NBQXNDOztRQUNsRTtJQUNGLEdBQUcsRUFBRTtJQUVMLDZCQUE2QjtJQUM3QixNQUFNSSxlQUFlO1FBQ25CRixhQUFhRyxPQUFPLENBQUMsaUJBQWlCO1FBQ3RDUCxlQUFlO1FBQ2ZFLG9CQUFvQixPQUFPLHdCQUF3Qjs7SUFDckQ7SUFFQSw4QkFBOEI7SUFDOUIsTUFBTU0sZ0JBQWdCO1FBQ3BCSixhQUFhRyxPQUFPLENBQUMsaUJBQWlCO1FBQ3RDUCxlQUFlO1FBQ2ZFLG9CQUFvQixPQUFPLHlCQUF5Qjs7SUFDdEQ7SUFFQSxxQkFDRTtrQkFDRSw0RUFBQ087WUFBS0MsTUFBSztzQkFDVCw0RUFBQ0M7O2tDQUVDLDhEQUFDdEIseURBQUtBO3dCQUNKdUIsUUFBUWI7d0JBQ1JjLDBCQUEwQjt3QkFDMUJDLFNBQVE7d0JBQ1JDLE1BQUsscUJBQXFCLGFBQWE7O3dCQUN2Q0MsWUFBVyxVQUFVLG9DQUFvQzs7d0JBQ3pEQyxhQUFZLGNBQWMsb0NBQW9DOzt3QkFDOURYLGNBQWNBO3dCQUNkRSxlQUFlQTs7Ozs7O2tDQUlqQiw4REFBQ1U7d0JBQUlDLFdBQVcsR0FBOEMsT0FBM0NsQixtQkFBbUIscUJBQXFCO2tDQUN6RCw0RUFBQ2lCOzRCQUFJQyxXQUFVOzs4Q0FFYiw4REFBQ0Q7b0NBQUlDLFdBQVU7Ozs7Ozs4Q0FDZiw4REFBQ0Q7b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDL0IsMERBQU1BOzRDQUFDTyxVQUFVQTs0Q0FBVUUsVUFBVUE7Ozs7OztzREFDdEMsOERBQUN1QjtzREFBTTVCOzs7Ozs7c0RBQ1AsOERBQUNMLDBEQUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLYiw4REFBQ0csK0RBQVdBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUt0QjtHQXZFd0JDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2xheW91dC5qc3g/MGM4MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBcIi4vZ2xvYmFscy5jc3NcIlxuaW1wb3J0IFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzXCJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9Nb2RhbFwiXG5pbXBvcnQgU29jaWFsSWNvbnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvU29jaWFsSWNvbnNcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSb290TGF5b3V0KHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBbY29uc2VudEdpdmVuLCBzZXRDb25zZW50R2l2ZW5dID0gdXNlU3RhdGUoZmFsc2UpIFxuXG4gIGNvbnN0IFtzY3JvbGxlZCwgc2V0U2Nyb2xsZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtyb3RhdGlvbiwgc2V0Um90YXRpb25dID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW2lzTW9kYWxPcGVuLCBzZXRJc01vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSkgXG4gIGNvbnN0IFtpc0NvbnRlbnRCbHVycmVkLCBzZXRJc0NvbnRlbnRCbHVycmVkXSA9IHVzZVN0YXRlKGZhbHNlKSBcblxuICAvLyBDaGVjayBsb2NhbFN0b3JhZ2UgZm9yIGNvbnNlbnQgc3RhdGUgb24gZmlyc3QgcmVuZGVyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdXNlckNvbnNlbnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvb2tpZUNvbnNlbnRcIilcblxuICAgIGlmICh1c2VyQ29uc2VudCA9PT0gXCJ0cnVlXCIgfHwgdXNlckNvbnNlbnQgPT09IFwiZmFsc2VcIikge1xuICAgICAgLy8gVXNlciBoYXMgYWxyZWFkeSBtYWRlIGEgY2hvaWNlXG4gICAgICBzZXRJc01vZGFsT3BlbihmYWxzZSlcbiAgICAgIHNldElzQ29udGVudEJsdXJyZWQoZmFsc2UpIC8vIE5vIGJsdXIgc2luY2UgdXNlciBtYWRlIGEgZGVjaXNpb25cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU2hvdyBtb2RhbCBmb3IgZmlyc3QtdGltZSB2aXNpdG9yc1xuICAgICAgc2V0SXNNb2RhbE9wZW4odHJ1ZSlcbiAgICAgIHNldElzQ29udGVudEJsdXJyZWQodHJ1ZSkgLy8gQmx1ciBjb250ZW50IHVudGlsIGRlY2lzaW9uIGlzIG1hZGVcbiAgICB9XG4gIH0sIFtdKVxuXG4gIC8vIEhhbmRsZSBtb2RhbCBhY2NlcHQgYnV0dG9uXG4gIGNvbnN0IGhhbmRsZUFjY2VwdCA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvb2tpZUNvbnNlbnRcIiwgXCJ0cnVlXCIpXG4gICAgc2V0SXNNb2RhbE9wZW4oZmFsc2UpXG4gICAgc2V0SXNDb250ZW50Qmx1cnJlZChmYWxzZSkgLy8gUmVtb3ZlIGJsdXIgb24gYWNjZXB0XG4gIH1cblxuICAvLyBIYW5kbGUgbW9kYWwgZGVjbGluZSBidXR0b25cbiAgY29uc3QgaGFuZGxlRGVjbGluZSA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvb2tpZUNvbnNlbnRcIiwgXCJmYWxzZVwiKVxuICAgIHNldElzTW9kYWxPcGVuKGZhbHNlKVxuICAgIHNldElzQ29udGVudEJsdXJyZWQoZmFsc2UpIC8vIFJlbW92ZSBibHVyIG9uIGRlY2xpbmVcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxodG1sIGxhbmc9J2VuJz5cbiAgICAgICAgPGJvZHk+XG4gICAgICAgICAgey8qIENvb2tpZSBjb25zZW50IG1vZGFsICovfVxuICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgaXNPcGVuPXtpc01vZGFsT3Blbn1cbiAgICAgICAgICAgIGRpc2FibGVDbG9zZU91dHNpZGVDbGljaz17dHJ1ZX1cbiAgICAgICAgICAgIG1lc3NhZ2U9J1dpciBudXR6ZW4gYXVzc2NobGllw59saWNoIG5vdHdlbmRpZ2UgVGVjaG5vbG9naWVuIGF1ZiBkaWVzZXIgV2Vic2l0ZS4gTnVyIGbDvHIgWW91VHViZSBzZXR6ZW4gd2lyIGVpbmVuIHp1c8OkdHpsaWNoZW4gQ29va2llLiBFaW52ZXJzdGFuZGVuPydcbiAgICAgICAgICAgIGljb249J2ZhcyBmYS1jb29raWUtYml0ZScgLy8gSWNvbiBjbGFzc1xuICAgICAgICAgICAgYWNjZXB0VGV4dD0nTG9naXNjaCcgLy8gQnV0dG9uIHRleHQgZm9yIGFjY2VwdGluZyBjb29raWVzXG4gICAgICAgICAgICBkZWNsaW5lVGV4dD0nT2huZSBWaWRlb3MnIC8vIEJ1dHRvbiB0ZXh0IGZvciBkZWNsaW5pbmcgY29va2llc1xuICAgICAgICAgICAgaGFuZGxlQWNjZXB0PXtoYW5kbGVBY2NlcHR9IC8vIFBhc3MgaGFuZGxlQWNjZXB0IGZ1bmN0aW9uXG4gICAgICAgICAgICBoYW5kbGVEZWNsaW5lPXtoYW5kbGVEZWNsaW5lfSAvLyBQYXNzIGhhbmRsZURlY2xpbmUgZnVuY3Rpb25cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgey8qIE1haW4gY29udGVudCAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7aXNDb250ZW50Qmx1cnJlZCA/IFwiYmFja2Ryb3AtYmx1ci1sZ1wiIDogXCJcIn1gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSBiZy1jdXN0b20tcGF0dGVybiBiZy1jb3ZlciBiZy1jZW50ZXIgbWluLWgtc2NyZWVuJz5cbiAgICAgICAgICAgICAgey8qIEJhY2tncm91bmQgQmx1ciBhbmQgT3ZlcmxheSAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIGluc2V0LTAgYmctYmxhY2sgYmctb3BhY2l0eS05MCBiYWNrZHJvcC1ibHVyLWxnJz48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIHotMTAgbWluLWgtWzEwMGR2aF0gZ3JpZCBncmlkLXJvd3MtW2F1dG9fMWZyX2F1dG9dIHRleHQtd2hpdGUnPlxuICAgICAgICAgICAgICAgIDxIZWFkZXIgc2Nyb2xsZWQ9e3Njcm9sbGVkfSByb3RhdGlvbj17cm90YXRpb259IC8+XG4gICAgICAgICAgICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cbiAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8U29jaWFsSWNvbnMgLz5cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9odG1sPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJGb290ZXIiLCJIZWFkZXIiLCJNb2RhbCIsIlNvY2lhbEljb25zIiwiUm9vdExheW91dCIsImNoaWxkcmVuIiwiY29uc2VudEdpdmVuIiwic2V0Q29uc2VudEdpdmVuIiwic2Nyb2xsZWQiLCJzZXRTY3JvbGxlZCIsInJvdGF0aW9uIiwic2V0Um90YXRpb24iLCJpc01vZGFsT3BlbiIsInNldElzTW9kYWxPcGVuIiwiaXNDb250ZW50Qmx1cnJlZCIsInNldElzQ29udGVudEJsdXJyZWQiLCJ1c2VyQ29uc2VudCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJoYW5kbGVBY2NlcHQiLCJzZXRJdGVtIiwiaGFuZGxlRGVjbGluZSIsImh0bWwiLCJsYW5nIiwiYm9keSIsImlzT3BlbiIsImRpc2FibGVDbG9zZU91dHNpZGVDbGljayIsIm1lc3NhZ2UiLCJpY29uIiwiYWNjZXB0VGV4dCIsImRlY2xpbmVUZXh0IiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/layout.jsx\n"));

/***/ })

});