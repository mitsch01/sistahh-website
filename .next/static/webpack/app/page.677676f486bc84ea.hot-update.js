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

/***/ "(app-pages-browser)/./components/Videos.jsx":
/*!*******************************!*\
  !*** ./components/Videos.jsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Videos)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nasync function getVideos() {\n    const res = await fetch(\"http://localhost:1337/api/videos?sort[0]=position:asc\");\n    const data = await res.json();\n    if (!data || !data.data) return [];\n    return data.data.map((item)=>{\n        return {\n            id: item.id,\n            link: \"\".concat(item.videoLink, \"?rel=0&modestbranding=1\")\n        };\n    });\n}\nfunction Videos() {\n    _s();\n    const [videoContent, setVideoContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchVideos = async ()=>{\n            try {\n                const data = await getVideos();\n                setVideoContent(data);\n            } catch (err) {\n                setError(err.message);\n            } finally{\n                setLoading(false);\n            }\n        };\n        fetchVideos();\n    }, []);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/miriamschwartz/sistahh-website/components/Videos.jsx\",\n        lineNumber: 38,\n        columnNumber: 23\n    }, this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Error: \",\n            error\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/miriamschwartz/sistahh-website/components/Videos.jsx\",\n        lineNumber: 39,\n        columnNumber: 21\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"videos\",\n        className: \"group overflow-hidden m-8 pb-20\",\n        children: videoContent.map((video)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sm:mb-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                    src: video.link,\n                    title: video.title,\n                    className: \"transition duration-500 w-full h-64 hover:scale-105\",\n                    allow: \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\",\n                    allowFullScreen: true\n                }, void 0, false, {\n                    fileName: \"/Users/miriamschwartz/sistahh-website/components/Videos.jsx\",\n                    lineNumber: 45,\n                    columnNumber: 11\n                }, this)\n            }, video.id, false, {\n                fileName: \"/Users/miriamschwartz/sistahh-website/components/Videos.jsx\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/miriamschwartz/sistahh-website/components/Videos.jsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(Videos, \"9PDQCG5nZYBAgbcZeg6Zk2Esu+0=\");\n_c = Videos;\nvar _c;\n$RefreshReg$(_c, \"Videos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVmlkZW9zLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFa0Q7QUFFbEQsZUFBZUc7SUFDYixNQUFNQyxNQUFNLE1BQU1DLE1BQU07SUFDeEIsTUFBTUMsT0FBTyxNQUFNRixJQUFJRyxJQUFJO0lBRTNCLElBQUksQ0FBQ0QsUUFBUSxDQUFDQSxLQUFLQSxJQUFJLEVBQUUsT0FBTyxFQUFFO0lBRWxDLE9BQU9BLEtBQUtBLElBQUksQ0FBQ0UsR0FBRyxDQUFDQyxDQUFBQTtRQUNuQixPQUFPO1lBQ0xDLElBQUlELEtBQUtDLEVBQUU7WUFDWEMsTUFBTSxHQUFrQixPQUFmRixLQUFLRyxTQUFTLEVBQUM7UUFDMUI7SUFDRjtBQUNGO0FBRWUsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdiLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkQsTUFBTSxDQUFDYyxTQUFTQyxXQUFXLEdBQUdmLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2dCLE9BQU9DLFNBQVMsR0FBR2pCLCtDQUFRQSxDQUFDO0lBRW5DRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1tQixjQUFjO1lBQ2xCLElBQUk7Z0JBQ0YsTUFBTWQsT0FBTyxNQUFNSDtnQkFDbkJZLGdCQUFnQlQ7WUFDbEIsRUFBRSxPQUFPZSxLQUFLO2dCQUNaRixTQUFTRSxJQUFJQyxPQUFPO1lBQ3RCLFNBQVU7Z0JBQ1JMLFdBQVc7WUFDYjtRQUNGO1FBQ0FHO0lBQ0YsR0FBRyxFQUFFO0lBRUwsSUFBSUosU0FBUyxxQkFBTyw4REFBQ087a0JBQUk7Ozs7OztJQUN6QixJQUFJTCxPQUFPLHFCQUFPLDhEQUFDSzs7WUFBSTtZQUFRTDs7Ozs7OztJQUUvQixxQkFDRSw4REFBQ007UUFBUWQsSUFBRztRQUFTZSxXQUFVO2tCQUM1QlgsYUFBYU4sR0FBRyxDQUFDa0IsQ0FBQUEsc0JBQ2hCLDhEQUFDSDtnQkFBbUJFLFdBQVU7MEJBQzVCLDRFQUFDRTtvQkFBT0MsS0FBS0YsTUFBTWYsSUFBSTtvQkFBRWtCLE9BQU9ILE1BQU1HLEtBQUs7b0JBQUVKLFdBQVU7b0JBQXNESyxPQUFNO29CQUEyRkMsZUFBZTs7Ozs7O2VBRHJOTCxNQUFNaEIsRUFBRTs7Ozs7Ozs7OztBQU0xQjtHQS9Cd0JHO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9WaWRlb3MuanN4PzI5ZTQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5hc3luYyBmdW5jdGlvbiBnZXRWaWRlb3MoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3L2FwaS92aWRlb3M/c29ydFswXT1wb3NpdGlvbjphc2NcIilcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcblxuICBpZiAoIWRhdGEgfHwgIWRhdGEuZGF0YSkgcmV0dXJuIFtdXG5cbiAgcmV0dXJuIGRhdGEuZGF0YS5tYXAoaXRlbSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgbGluazogYCR7aXRlbS52aWRlb0xpbmt9P3JlbD0wJm1vZGVzdGJyYW5kaW5nPTFgXG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWRlb3MoKSB7XG4gIGNvbnN0IFt2aWRlb0NvbnRlbnQsIHNldFZpZGVvQ29udGVudF0gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hWaWRlb3MgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0VmlkZW9zKClcbiAgICAgICAgc2V0VmlkZW9Db250ZW50KGRhdGEpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgc2V0RXJyb3IoZXJyLm1lc3NhZ2UpXG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgfVxuICAgIH1cbiAgICBmZXRjaFZpZGVvcygpXG4gIH0sIFtdKVxuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvcn08L2Rpdj5cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPSd2aWRlb3MnIGNsYXNzTmFtZT0nZ3JvdXAgb3ZlcmZsb3ctaGlkZGVuIG0tOCBwYi0yMCc+XG4gICAgICB7dmlkZW9Db250ZW50Lm1hcCh2aWRlbyA9PiAoXG4gICAgICAgIDxkaXYga2V5PXt2aWRlby5pZH0gY2xhc3NOYW1lPVwic206bWItOFwiPlxuICAgICAgICAgIDxpZnJhbWUgc3JjPXt2aWRlby5saW5rfSB0aXRsZT17dmlkZW8udGl0bGV9IGNsYXNzTmFtZT0ndHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgdy1mdWxsIGgtNjQgaG92ZXI6c2NhbGUtMTA1JyBhbGxvdz0nYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZScgYWxsb3dGdWxsU2NyZWVuIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldFZpZGVvcyIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJtYXAiLCJpdGVtIiwiaWQiLCJsaW5rIiwidmlkZW9MaW5rIiwiVmlkZW9zIiwidmlkZW9Db250ZW50Iiwic2V0VmlkZW9Db250ZW50IiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwiZmV0Y2hWaWRlb3MiLCJlcnIiLCJtZXNzYWdlIiwiZGl2Iiwic2VjdGlvbiIsImNsYXNzTmFtZSIsInZpZGVvIiwiaWZyYW1lIiwic3JjIiwidGl0bGUiLCJhbGxvdyIsImFsbG93RnVsbFNjcmVlbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Videos.jsx\n"));

/***/ })

});