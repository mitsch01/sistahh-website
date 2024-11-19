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

/***/ "(app-pages-browser)/./components/About.jsx":
/*!******************************!*\
  !*** ./components/About.jsx ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ About)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nasync function getAbout() {\n    const res = await fetch(\"http://localhost:1337/api/about\");\n    const data = await res.json();\n    if (!data || !data.data) return [];\n    return data.data.text.map((paragraph)=>{\n        return paragraph.children.map((child)=>child.text).join(\"\");\n    });\n}\nfunction About() {\n    _s();\n    const [aboutContent, setAboutContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchAbout = async ()=>{\n            try {\n                const data = await getAbout();\n                setAboutContent(data);\n            } catch (err) {\n                setError(err.message);\n            } finally{\n                setLoading(false);\n            }\n        };\n        fetchAbout();\n    }, []);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/miriamschwartz/sistahh-website/components/About.jsx\",\n        lineNumber: 32,\n        columnNumber: 23\n    }, this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Error: \",\n            error\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/miriamschwartz/sistahh-website/components/About.jsx\",\n        lineNumber: 33,\n        columnNumber: 21\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            id: \"about\",\n            className: \"pt-24 sm:pt-36 mx-8 max-w-[600px]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-4xl mb-12 font-bold text-center bg-heading-gradient bg-clip-text text-transparent\",\n                    children: \"About\"\n                }, void 0, false, {\n                    fileName: \"/Users/miriamschwartz/sistahh-website/components/About.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-24 sm:text-center px-6\",\n                    children: aboutContent.map((paragraph, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-4\",\n                            children: paragraph\n                        }, index, false, {\n                            fileName: \"/Users/miriamschwartz/sistahh-website/components/About.jsx\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/miriamschwartz/sistahh-website/components/About.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/miriamschwartz/sistahh-website/components/About.jsx\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/miriamschwartz/sistahh-website/components/About.jsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s(About, \"ukUc7B4FBSsVn+LV3OM2Ijey2f8=\");\n_c = About;\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQWJvdXQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFrRDtBQUVsRCxlQUFlRztJQUNiLE1BQU1DLE1BQU0sTUFBTUMsTUFBTTtJQUN4QixNQUFNQyxPQUFPLE1BQU1GLElBQUlHLElBQUk7SUFFM0IsSUFBSSxDQUFDRCxRQUFRLENBQUNBLEtBQUtBLElBQUksRUFBRSxPQUFPLEVBQUU7SUFDbEMsT0FBT0EsS0FBS0EsSUFBSSxDQUFDRSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsQ0FBQUE7UUFDeEIsT0FBT0EsVUFBVUMsUUFBUSxDQUFDRixHQUFHLENBQUNHLENBQUFBLFFBQVNBLE1BQU1KLElBQUksRUFBRUssSUFBSSxDQUFDO0lBQzFEO0FBQ0Y7QUFFZSxTQUFTQzs7SUFDdEIsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR2QsK0NBQVFBLENBQUMsRUFBRTtJQUNuRCxNQUFNLENBQUNlLFNBQVNDLFdBQVcsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2lCLE9BQU9DLFNBQVMsR0FBR2xCLCtDQUFRQSxDQUFDO0lBRW5DRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1vQixhQUFhO1lBQ2pCLElBQUk7Z0JBQ0YsTUFBTWYsT0FBTyxNQUFNSDtnQkFDbkJhLGdCQUFnQlY7WUFDbEIsRUFBRSxPQUFPZ0IsS0FBSztnQkFDWkYsU0FBU0UsSUFBSUMsT0FBTztZQUN0QixTQUFVO2dCQUNSTCxXQUFXO1lBQ2I7UUFDRjtRQUNBRztJQUNGLEdBQUcsRUFBRTtJQUVMLElBQUlKLFNBQVMscUJBQU8sOERBQUNPO2tCQUFJOzs7Ozs7SUFDekIsSUFBSUwsT0FBTyxxQkFBTyw4REFBQ0s7O1lBQUk7WUFBUUw7Ozs7Ozs7SUFFL0IscUJBQ0UsOERBQUNLO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNDO1lBQVFDLElBQUc7WUFBUUYsV0FBVTs7OEJBQzVCLDhEQUFDRztvQkFBR0gsV0FBVTs4QkFBeUY7Ozs7Ozs4QkFDdkcsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNaVixhQUFhTixHQUFHLENBQUMsQ0FBQ0MsV0FBV21CLHNCQUM1Qiw4REFBQ0M7NEJBQWNMLFdBQVU7c0NBQ3RCZjsyQkFES21COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRcEI7R0FwQ3dCZjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWJvdXQuanN4P2MzNGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5hc3luYyBmdW5jdGlvbiBnZXRBYm91dCgpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjEzMzcvYXBpL2Fib3V0XCIpXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgaWYgKCFkYXRhIHx8ICFkYXRhLmRhdGEpIHJldHVybiBbXVxuICByZXR1cm4gZGF0YS5kYXRhLnRleHQubWFwKHBhcmFncmFwaCA9PiB7XG4gICAgcmV0dXJuIHBhcmFncmFwaC5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gY2hpbGQudGV4dCkuam9pbihcIlwiKVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dCgpIHtcbiAgY29uc3QgW2Fib3V0Q29udGVudCwgc2V0QWJvdXRDb250ZW50XSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaEFib3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldEFib3V0KClcbiAgICAgICAgc2V0QWJvdXRDb250ZW50KGRhdGEpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgc2V0RXJyb3IoZXJyLm1lc3NhZ2UpXG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgfVxuICAgIH1cbiAgICBmZXRjaEFib3V0KClcbiAgfSwgW10pXG5cbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5FcnJvcjoge2Vycm9yfTwvZGl2PlxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXInPlxuICAgICAgPHNlY3Rpb24gaWQ9J2Fib3V0JyBjbGFzc05hbWU9J3B0LTI0IHNtOnB0LTM2IG14LTggbWF4LXctWzYwMHB4XSc+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtNHhsIG1iLTEyIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciBiZy1oZWFkaW5nLWdyYWRpZW50IGJnLWNsaXAtdGV4dCB0ZXh0LXRyYW5zcGFyZW50Jz5BYm91dDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi0yNCBzbTp0ZXh0LWNlbnRlciBweC02Jz5cbiAgICAgICAgICB7YWJvdXRDb250ZW50Lm1hcCgocGFyYWdyYXBoLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPHAga2V5PXtpbmRleH0gY2xhc3NOYW1lPSdtdC00Jz5cbiAgICAgICAgICAgICAge3BhcmFncmFwaH1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0QWJvdXQiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwidGV4dCIsIm1hcCIsInBhcmFncmFwaCIsImNoaWxkcmVuIiwiY2hpbGQiLCJqb2luIiwiQWJvdXQiLCJhYm91dENvbnRlbnQiLCJzZXRBYm91dENvbnRlbnQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJmZXRjaEFib3V0IiwiZXJyIiwibWVzc2FnZSIsImRpdiIsImNsYXNzTmFtZSIsInNlY3Rpb24iLCJpZCIsImgxIiwiaW5kZXgiLCJwIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/About.jsx\n"));

/***/ })

});