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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"1ca9b8ed6dff\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvZ2xvYmFscy5jc3M/ZDhhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjFjYTliOGVkNmRmZlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _components_NavLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NavLink */ \"(app-pages-browser)/./components/NavLink.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ \"(app-pages-browser)/./node_modules/@fortawesome/fontawesome-free/css/all.min.css\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Header() {\n    _s();\n    const [scrolled, setScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [rotation, setRotation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [isScrolling, setIsScrolling] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [lastScrollY, setLastScrollY] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [isMenuOpen, setIsMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            setScrolled(window.scrollY > 50);\n            setIsScrolling(true);\n            if (window.scrollY > lastScrollY) {\n                setRotation((prevRotation)=>prevRotation + 1);\n            } else if (window.scrollY < lastScrollY) {\n                setRotation((prevRotation)=>prevRotation - 1);\n            }\n            setLastScrollY(window.scrollY);\n            clearTimeout(scrollTimeout);\n            scrollTimeout = setTimeout(()=>{\n                setIsScrolling(false);\n            }, 100);\n        };\n        let scrollTimeout;\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n            clearTimeout(scrollTimeout);\n        };\n    }, [\n        lastScrollY,\n        isScrolling\n    ]);\n    const toggleMenu = ()=>{\n        setIsMenuOpen((prev)=>!prev);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"sticky top-0 z-20 bg-black backdrop-blur-lg text-2xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-0 right-0 h-16 bg-gradient-to-b from-black to-transparent transition-all duration-300 \".concat(scrolled ? \"-bottom-12\" : \"-bottom-16\")\n            }, void 0, false, {\n                fileName: \"/Users/miriamschwartz/sistahh-website/components/Header.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-[796px] sm:max-w-[500px] flex items-center justify-between mx-auto relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hidden md:flex space-x-7 text-[0.9em]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                text: \"Home\",\n                                path: \"/\"\n                            }, void 0, false, {\n                                fileName: \"/Users/miriamschwartz/sistahh-website/components/Header.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                text: \"Concerts\",\n                                path: \"/#concerts\"\n                            }, void 0, false, {\n                                fileName: \"/Users/miriamschwartz/sistahh-website/components/Header.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/miriamschwartz/sistahh-website/components/Header.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center flex-1\",\n                        children: [\n                            !scrolled && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    src: \"/images/Sistahh_Stern_All_gelb.png\",\n                                    alt: \"SISTAHH Logo\",\n                                    width: 200,\n                                    height: 200,\n                                    className: \"cursor-pointer priority w-40 md:w-52 lg:w-64\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/miriamschwartz/sistahh-website/components/Header.jsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/miriamschwartz/sistahh-website/components/Header.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, this),\n                            scrolled && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    src: \"/images/Sistahh_Stern_gelb.png\",\n                                    alt: \"SISTAHH Logo\",\n                                    width: 100,\n                                    height: 100,\n                                    style: {\n                                        transform: \"rotate(\".concat(rotation, \"deg)\"),\n                                        transition: \"transform 0.1s ease-out\"\n                                    },\n                                    onClick: ()=>window.scrollTo({\n                                            top: 0,\n                                            behavior: \"smooth\"\n                                        }),\n                                    className: \"cursor-pointer\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/miriamschwartz/sistahh-website/components/Header.jsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/miriamschwartz/sistahh-website/components/Header.jsx\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/miriamschwartz/sistahh-website/components/Header.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hidden md:flex space-x-7 text-[0.9em]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                id: \"about\",\n                                text: \"About\",\n                                path: \"/#about\",\n                                onClick: (e)=>{\n                                    e.preventDefault();\n                                    console.log(\"About link clicked!\");\n                                    scrollToSection() // Call scrollToSection here\n                                    ;\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/miriamschwartz/sistahh-website/components/Header.jsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                text: \"Contact\",\n                                path: \"/contact\"\n                            }, void 0, false, {\n                                fileName: \"/Users/miriamschwartz/sistahh-website/components/Header.jsx\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/miriamschwartz/sistahh-website/components/Header.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"md:hidden\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: toggleMenu,\n                            className: \"absolute right-5 top-5 text-2xl focus:outline-none hover:bg-heading-gradient hover:bg-clip-text hover:text-transparent\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"fas fa-bars\"\n                            }, void 0, false, {\n                                fileName: \"/Users/miriamschwartz/sistahh-website/components/Header.jsx\",\n                                lineNumber: 98,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/miriamschwartz/sistahh-website/components/Header.jsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/miriamschwartz/sistahh-website/components/Header.jsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/miriamschwartz/sistahh-website/components/Header.jsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            isMenuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed inset-0 z-30 bg-black flex flex-col items-center justify-center text-center h-screen\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: toggleMenu,\n                        className: \"absolute top-5 right-5 text-3xl focus:outline-none hover:bg-heading-gradient hover:bg-clip-text hover:text-transparent\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fas fa-times\"\n                        }, void 0, false, {\n                            fileName: \"/Users/miriamschwartz/sistahh-website/components/Header.jsx\",\n                            lineNumber: 107,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/miriamschwartz/sistahh-website/components/Header.jsx\",\n                        lineNumber: 106,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"flex flex-col space-y-5 text-2xl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"/\",\n                                onClick: toggleMenu,\n                                className: \"hover:underline\",\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"/Users/miriamschwartz/sistahh-website/components/Header.jsx\",\n                                lineNumber: 110,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"/#concerts\",\n                                onClick: toggleMenu,\n                                className: \"hover:underline\",\n                                children: \"Concerts\"\n                            }, void 0, false, {\n                                fileName: \"/Users/miriamschwartz/sistahh-website/components/Header.jsx\",\n                                lineNumber: 113,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"/#about\",\n                                onClick: toggleMenu,\n                                className: \"hover:underline\",\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"/Users/miriamschwartz/sistahh-website/components/Header.jsx\",\n                                lineNumber: 116,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"/contact\",\n                                onClick: toggleMenu,\n                                className: \"hover:underline\",\n                                children: \"Contact\"\n                            }, void 0, false, {\n                                fileName: \"/Users/miriamschwartz/sistahh-website/components/Header.jsx\",\n                                lineNumber: 119,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/miriamschwartz/sistahh-website/components/Header.jsx\",\n                        lineNumber: 109,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/miriamschwartz/sistahh-website/components/Header.jsx\",\n                lineNumber: 105,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/miriamschwartz/sistahh-website/components/Header.jsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"WVyDH3gmTxcqdYX8c0r96uGQiBA=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvSGVhZGVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ2Y7QUFDZTtBQUNiO0FBQ3dCO0FBRXZDLFNBQVNLOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDTyxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1MsYUFBYUMsZUFBZSxHQUFHViwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNXLGFBQWFDLGVBQWUsR0FBR1osK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDYSxZQUFZQyxjQUFjLEdBQUdkLCtDQUFRQSxDQUFDO0lBRTdDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1nQixlQUFlO1lBQ25CVCxZQUFZVSxPQUFPQyxPQUFPLEdBQUc7WUFDN0JQLGVBQWU7WUFFZixJQUFJTSxPQUFPQyxPQUFPLEdBQUdOLGFBQWE7Z0JBQ2hDSCxZQUFZVSxDQUFBQSxlQUFnQkEsZUFBZTtZQUM3QyxPQUFPLElBQUlGLE9BQU9DLE9BQU8sR0FBR04sYUFBYTtnQkFDdkNILFlBQVlVLENBQUFBLGVBQWdCQSxlQUFlO1lBQzdDO1lBRUFOLGVBQWVJLE9BQU9DLE9BQU87WUFFN0JFLGFBQWFDO1lBQ2JBLGdCQUFnQkMsV0FBVztnQkFDekJYLGVBQWU7WUFDakIsR0FBRztRQUNMO1FBRUEsSUFBSVU7UUFDSkosT0FBT00sZ0JBQWdCLENBQUMsVUFBVVA7UUFDbEMsT0FBTztZQUNMQyxPQUFPTyxtQkFBbUIsQ0FBQyxVQUFVUjtZQUNyQ0ksYUFBYUM7UUFDZjtJQUNGLEdBQUc7UUFBQ1Q7UUFBYUY7S0FBWTtJQUU3QixNQUFNZSxhQUFhO1FBQ2pCVixjQUFjVyxDQUFBQSxPQUFRLENBQUNBO0lBQ3pCO0lBRUEscUJBQ0UsOERBQUNDO1FBQU9DLFdBQVU7OzBCQUNoQiw4REFBQ0M7Z0JBQUlELFdBQVcsdUdBQThJLE9BQXZDdEIsV0FBVyxlQUFlOzs7Ozs7MEJBQ2pKLDhEQUFDdUI7Z0JBQUlELFdBQVU7O2tDQUViLDhEQUFDQzt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUN6QiwyREFBT0E7Z0NBQUMyQixNQUFLO2dDQUFPQyxNQUFLOzs7Ozs7MENBQzFCLDhEQUFDNUIsMkRBQU9BO2dDQUFDMkIsTUFBSztnQ0FBV0MsTUFBSzs7Ozs7Ozs7Ozs7O2tDQUloQyw4REFBQ0Y7d0JBQUlELFdBQVU7OzRCQUNaLENBQUN0QiwwQkFDQSw4REFBQ0osaURBQUlBO2dDQUFDOEIsTUFBSzswQ0FDVCw0RUFBQzVCLGtEQUFLQTtvQ0FBQzZCLEtBQUk7b0NBQXFDQyxLQUFJO29DQUFlQyxPQUFPO29DQUFLQyxRQUFRO29DQUFLUixXQUFVOzs7Ozs7Ozs7Ozs0QkFHekd0QiwwQkFDQyw4REFBQ0osaURBQUlBO2dDQUFDOEIsTUFBSzswQ0FDVCw0RUFBQzVCLGtEQUFLQTtvQ0FDSjZCLEtBQUk7b0NBQ0pDLEtBQUk7b0NBQ0pDLE9BQU87b0NBQ1BDLFFBQVE7b0NBQ1JDLE9BQU87d0NBQ0xDLFdBQVcsVUFBbUIsT0FBVDlCLFVBQVM7d0NBQzlCK0IsWUFBWTtvQ0FDZDtvQ0FDQUMsU0FBUyxJQUFNdkIsT0FBT3dCLFFBQVEsQ0FBQzs0Q0FBRUMsS0FBSzs0Q0FBR0MsVUFBVTt3Q0FBUztvQ0FDNURmLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU1sQiw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUViLDhEQUFDekIsMkRBQU9BO2dDQUNOeUMsSUFBRztnQ0FDSGQsTUFBSztnQ0FDTEMsTUFBSztnQ0FDTFMsU0FBU0ssQ0FBQUE7b0NBQ1BBLEVBQUVDLGNBQWM7b0NBQ2hCQyxRQUFRQyxHQUFHLENBQUM7b0NBQ1pDLGtCQUFrQiw0QkFBNEI7O2dDQUNoRDs7Ozs7OzBDQUVGLDhEQUFDOUMsMkRBQU9BO2dDQUFDMkIsTUFBSztnQ0FBVUMsTUFBSzs7Ozs7Ozs7Ozs7O2tDQUkvQiw4REFBQ0Y7d0JBQUlELFdBQVU7a0NBQ2IsNEVBQUNzQjs0QkFBT1YsU0FBU2Y7NEJBQVlHLFdBQVU7c0NBQ3JDLDRFQUFDdUI7Z0NBQUV2QixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTWxCZCw0QkFDQyw4REFBQ2U7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDc0I7d0JBQU9WLFNBQVNmO3dCQUFZRyxXQUFVO2tDQUNyQyw0RUFBQ3VCOzRCQUFFdkIsV0FBVTs7Ozs7Ozs7Ozs7a0NBRWYsOERBQUN3Qjt3QkFBSXhCLFdBQVU7OzBDQUNiLDhEQUFDMUIsaURBQUlBO2dDQUFDOEIsTUFBSztnQ0FBSVEsU0FBU2Y7Z0NBQVlHLFdBQVU7MENBQWtCOzs7Ozs7MENBR2hFLDhEQUFDMUIsaURBQUlBO2dDQUFDOEIsTUFBSztnQ0FBYVEsU0FBU2Y7Z0NBQVlHLFdBQVU7MENBQWtCOzs7Ozs7MENBR3pFLDhEQUFDMUIsaURBQUlBO2dDQUFDOEIsTUFBSztnQ0FBVVEsU0FBU2Y7Z0NBQVlHLFdBQVU7MENBQWtCOzs7Ozs7MENBR3RFLDhEQUFDMUIsaURBQUlBO2dDQUFDOEIsTUFBSztnQ0FBV1EsU0FBU2Y7Z0NBQVlHLFdBQVU7MENBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRbkY7R0F4SHdCdkI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qc3g/NTY3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IE5hdkxpbmsgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2TGlua1wiXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuaW1wb3J0IFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuICBjb25zdCBbc2Nyb2xsZWQsIHNldFNjcm9sbGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbcm90YXRpb24sIHNldFJvdGF0aW9uXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtpc1Njcm9sbGluZywgc2V0SXNTY3JvbGxpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtsYXN0U2Nyb2xsWSwgc2V0TGFzdFNjcm9sbFldID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW2lzTWVudU9wZW4sIHNldElzTWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgICBzZXRTY3JvbGxlZCh3aW5kb3cuc2Nyb2xsWSA+IDUwKVxuICAgICAgc2V0SXNTY3JvbGxpbmcodHJ1ZSlcblxuICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gbGFzdFNjcm9sbFkpIHtcbiAgICAgICAgc2V0Um90YXRpb24ocHJldlJvdGF0aW9uID0+IHByZXZSb3RhdGlvbiArIDEpXG4gICAgICB9IGVsc2UgaWYgKHdpbmRvdy5zY3JvbGxZIDwgbGFzdFNjcm9sbFkpIHtcbiAgICAgICAgc2V0Um90YXRpb24ocHJldlJvdGF0aW9uID0+IHByZXZSb3RhdGlvbiAtIDEpXG4gICAgICB9XG5cbiAgICAgIHNldExhc3RTY3JvbGxZKHdpbmRvdy5zY3JvbGxZKVxuXG4gICAgICBjbGVhclRpbWVvdXQoc2Nyb2xsVGltZW91dClcbiAgICAgIHNjcm9sbFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0SXNTY3JvbGxpbmcoZmFsc2UpXG4gICAgICB9LCAxMDApXG4gICAgfVxuXG4gICAgbGV0IHNjcm9sbFRpbWVvdXRcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbClcbiAgICAgIGNsZWFyVGltZW91dChzY3JvbGxUaW1lb3V0KVxuICAgIH1cbiAgfSwgW2xhc3RTY3JvbGxZLCBpc1Njcm9sbGluZ10pXG5cbiAgY29uc3QgdG9nZ2xlTWVudSA9ICgpID0+IHtcbiAgICBzZXRJc01lbnVPcGVuKHByZXYgPT4gIXByZXYpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPSdzdGlja3kgdG9wLTAgei0yMCBiZy1ibGFjayBiYWNrZHJvcC1ibHVyLWxnIHRleHQtMnhsJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYWJzb2x1dGUgbGVmdC0wIHJpZ2h0LTAgaC0xNiBiZy1ncmFkaWVudC10by1iIGZyb20tYmxhY2sgdG8tdHJhbnNwYXJlbnQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwICR7c2Nyb2xsZWQgPyBcIi1ib3R0b20tMTJcIiA6IFwiLWJvdHRvbS0xNlwifWB9PjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J21heC13LVs3OTZweF0gc206bWF4LXctWzUwMHB4XSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbXgtYXV0byByZWxhdGl2ZSc+XG4gICAgICAgIHsvKiBEZXNrdG9wIE1lbnUgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoaWRkZW4gbWQ6ZmxleCBzcGFjZS14LTcgdGV4dC1bMC45ZW1dJz5cbiAgICAgICAgICA8TmF2TGluayB0ZXh0PSdIb21lJyBwYXRoPScvJyAvPlxuICAgICAgICAgIDxOYXZMaW5rIHRleHQ9J0NvbmNlcnRzJyBwYXRoPScvI2NvbmNlcnRzJyAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogTG9nbyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgZmxleC0xJz5cbiAgICAgICAgICB7IXNjcm9sbGVkICYmIChcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPScvaW1hZ2VzL1Npc3RhaGhfU3Rlcm5fQWxsX2dlbGIucG5nJyBhbHQ9J1NJU1RBSEggTG9nbycgd2lkdGg9ezIwMH0gaGVpZ2h0PXsyMDB9IGNsYXNzTmFtZT0nY3Vyc29yLXBvaW50ZXIgcHJpb3JpdHkgdy00MCBtZDp3LTUyIGxnOnctNjQnIC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7c2Nyb2xsZWQgJiYgKFxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHNyYz0nL2ltYWdlcy9TaXN0YWhoX1N0ZXJuX2dlbGIucG5nJ1xuICAgICAgICAgICAgICAgIGFsdD0nU0lTVEFISCBMb2dvJ1xuICAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZSgke3JvdGF0aW9ufWRlZylgLFxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJ0cmFuc2Zvcm0gMC4xcyBlYXNlLW91dFwiXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAsIGJlaGF2aW9yOiBcInNtb290aFwiIH0pfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY3Vyc29yLXBvaW50ZXInXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hpZGRlbiBtZDpmbGV4IHNwYWNlLXgtNyB0ZXh0LVswLjllbV0nPlxuICAgICAgICAgIHsvKiBiZy1uYXYtZ3JhZGllbnQtcmlnaHQgYmctY2xpcC10ZXh0IHRleHQtdHJhbnNwYXJlbnQgKi99XG4gICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgIGlkPSdhYm91dCdcbiAgICAgICAgICAgIHRleHQ9J0Fib3V0J1xuICAgICAgICAgICAgcGF0aD0nLyNhYm91dCdcbiAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBYm91dCBsaW5rIGNsaWNrZWQhXCIpXG4gICAgICAgICAgICAgIHNjcm9sbFRvU2VjdGlvbigpIC8vIENhbGwgc2Nyb2xsVG9TZWN0aW9uIGhlcmVcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8TmF2TGluayB0ZXh0PSdDb250YWN0JyBwYXRoPScvY29udGFjdCcgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIEJ1cmdlciBNZW51IGZvciBNb2JpbGUgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZDpoaWRkZW4nPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlTWVudX0gY2xhc3NOYW1lPSdhYnNvbHV0ZSByaWdodC01IHRvcC01IHRleHQtMnhsIGZvY3VzOm91dGxpbmUtbm9uZSBob3ZlcjpiZy1oZWFkaW5nLWdyYWRpZW50IGhvdmVyOmJnLWNsaXAtdGV4dCBob3Zlcjp0ZXh0LXRyYW5zcGFyZW50Jz5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmFzIGZhLWJhcnMnPjwvaT5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIE1vZGFsIE1lbnUgKi99XG4gICAgICB7aXNNZW51T3BlbiAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaXhlZCBpbnNldC0wIHotMzAgYmctYmxhY2sgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXIgaC1zY3JlZW4nPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlTWVudX0gY2xhc3NOYW1lPSdhYnNvbHV0ZSB0b3AtNSByaWdodC01IHRleHQtM3hsIGZvY3VzOm91dGxpbmUtbm9uZSBob3ZlcjpiZy1oZWFkaW5nLWdyYWRpZW50IGhvdmVyOmJnLWNsaXAtdGV4dCBob3Zlcjp0ZXh0LXRyYW5zcGFyZW50Jz5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmFzIGZhLXRpbWVzJz48L2k+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgc3BhY2UteS01IHRleHQtMnhsJz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9IGNsYXNzTmFtZT0naG92ZXI6dW5kZXJsaW5lJz5cbiAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLyNjb25jZXJ0cycgb25DbGljaz17dG9nZ2xlTWVudX0gY2xhc3NOYW1lPSdob3Zlcjp1bmRlcmxpbmUnPlxuICAgICAgICAgICAgICBDb25jZXJ0c1xuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLyNhYm91dCcgb25DbGljaz17dG9nZ2xlTWVudX0gY2xhc3NOYW1lPSdob3Zlcjp1bmRlcmxpbmUnPlxuICAgICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nL2NvbnRhY3QnIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9IGNsYXNzTmFtZT0naG92ZXI6dW5kZXJsaW5lJz5cbiAgICAgICAgICAgICAgQ29udGFjdFxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9oZWFkZXI+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJOYXZMaW5rIiwiSW1hZ2UiLCJIZWFkZXIiLCJzY3JvbGxlZCIsInNldFNjcm9sbGVkIiwicm90YXRpb24iLCJzZXRSb3RhdGlvbiIsImlzU2Nyb2xsaW5nIiwic2V0SXNTY3JvbGxpbmciLCJsYXN0U2Nyb2xsWSIsInNldExhc3RTY3JvbGxZIiwiaXNNZW51T3BlbiIsInNldElzTWVudU9wZW4iLCJoYW5kbGVTY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwicHJldlJvdGF0aW9uIiwiY2xlYXJUaW1lb3V0Iiwic2Nyb2xsVGltZW91dCIsInNldFRpbWVvdXQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRvZ2dsZU1lbnUiLCJwcmV2IiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiZGl2IiwidGV4dCIsInBhdGgiLCJocmVmIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJzdHlsZSIsInRyYW5zZm9ybSIsInRyYW5zaXRpb24iLCJvbkNsaWNrIiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsImlkIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInNjcm9sbFRvU2VjdGlvbiIsImJ1dHRvbiIsImkiLCJuYXYiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Header.jsx\n"));

/***/ })

});