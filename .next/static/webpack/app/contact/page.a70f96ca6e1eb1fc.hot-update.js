"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/contact/page",{

/***/ "(app-pages-browser)/./components/EmailForm.jsx":
/*!**********************************!*\
  !*** ./components/EmailForm.jsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EmailForm)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emailjs-com */ \"(app-pages-browser)/./node_modules/emailjs-com/es/index.js\");\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modal */ \"(app-pages-browser)/./components/Modal.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction EmailForm() {\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [hiddenField, setHiddenField] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [modalOpen, setModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [modalMessage, setModalMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [modalIcon, setModalIcon] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const form = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const sendEmail = (e)=>{\n        e.preventDefault();\n        if (hiddenField) {\n            console.warn(\"Spam bot detected! Ignoring submission.\");\n            return;\n        }\n        emailjs_com__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sendForm(\"service_4pixnjl\", \"template_96tplng\", form.current, \"QTH85ffxTRx1PkMz8\").then((result)=>{\n            console.log(result.text);\n            setModalMessage(\"Danke! Wir melden uns bei dir.\");\n            setModalIcon(\"fas fa-check-circle\");\n            setModalOpen(true);\n            // Reset form fields\n            setName(\"\");\n            setEmail(\"\");\n            setMessage(\"\");\n        }, (error)=>{\n            console.log(error.text);\n            setModalMessage(\"Oops! Das hat leider nicht geklappt.\");\n            setModalIcon(\"fas fa-times-circle\");\n            setModalOpen(true);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                ref: form,\n                onSubmit: sendEmail,\n                className: \"space-y-4 text-black\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"company\",\n                        value: hiddenField,\n                        onChange: (e)=>setHiddenField(e.target.value),\n                        className: \"hidden\",\n                        \"aria-hidden\": \"true\"\n                    }, void 0, false, {\n                        fileName: \"/Users/miriamschwartz/sistahh-website/components/EmailForm.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"name\",\n                                className: \"block text-sm font-medium text-gray-400\",\n                                children: \"Name\"\n                            }, void 0, false, {\n                                fileName: \"/Users/miriamschwartz/sistahh-website/components/EmailForm.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"name\",\n                                name: \"name\",\n                                value: name,\n                                onChange: (e)=>setName(e.target.value),\n                                required: true,\n                                className: \"mt-1 block w-full p-2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/miriamschwartz/sistahh-website/components/EmailForm.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/miriamschwartz/sistahh-website/components/EmailForm.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"email\",\n                                className: \"block text-sm font-medium text-gray-400\",\n                                children: \"E-Mail\"\n                            }, void 0, false, {\n                                fileName: \"/Users/miriamschwartz/sistahh-website/components/EmailForm.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                id: \"email\",\n                                name: \"email\",\n                                value: email,\n                                onChange: (e)=>setEmail(e.target.value),\n                                required: true,\n                                className: \"mt-1 block w-full p-2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/miriamschwartz/sistahh-website/components/EmailForm.jsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/miriamschwartz/sistahh-website/components/EmailForm.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pb-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"message\",\n                                className: \"block text-sm font-medium text-gray-400\",\n                                children: \"Nachricht\"\n                            }, void 0, false, {\n                                fileName: \"/Users/miriamschwartz/sistahh-website/components/EmailForm.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                id: \"message\",\n                                name: \"message\",\n                                rows: \"4\",\n                                value: message,\n                                onChange: (e)=>setMessage(e.target.value),\n                                required: true,\n                                className: \"mt-1 block w-full p-2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/miriamschwartz/sistahh-website/components/EmailForm.jsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/miriamschwartz/sistahh-website/components/EmailForm.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"bg-white px-4 py-2 text-black rounded hover:bg-button-gradient\",\n                            children: \"Absenden\"\n                        }, void 0, false, {\n                            fileName: \"/Users/miriamschwartz/sistahh-website/components/EmailForm.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/miriamschwartz/sistahh-website/components/EmailForm.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/miriamschwartz/sistahh-website/components/EmailForm.jsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                isOpen: isAnotherModalOpen,\n                disableCloseOutsideClick: false,\n                onClose: ()=>setIsAnotherModalOpen(false),\n                message: modalMessage,\n                icon: modalIcon\n            }, void 0, false, {\n                fileName: \"/Users/miriamschwartz/sistahh-website/components/EmailForm.jsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(EmailForm, \"k2uTDZeeKg00uFRz2A7hs9EjpfU=\");\n_c = EmailForm;\nvar _c;\n$RefreshReg$(_c, \"EmailForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRW1haWxGb3JtLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUV3QztBQUNQO0FBQ047QUFFWixTQUFTSTs7SUFDdEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ08sT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNTLFNBQVNDLFdBQVcsR0FBR1YsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDVyxhQUFhQyxlQUFlLEdBQUdaLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ2EsV0FBV0MsYUFBYSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNlLGNBQWNDLGdCQUFnQixHQUFHaEIsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDaUIsV0FBV0MsYUFBYSxHQUFHbEIsK0NBQVFBLENBQUM7SUFFM0MsTUFBTW1CLE9BQU9sQiw2Q0FBTUE7SUFFbkIsTUFBTW1CLFlBQVlDLENBQUFBO1FBQ2hCQSxFQUFFQyxjQUFjO1FBRWhCLElBQUlYLGFBQWE7WUFDZlksUUFBUUMsSUFBSSxDQUFDO1lBQ2I7UUFDRjtRQUVBdEIsNERBQWdCLENBQUN3QixpQkFBeUMsRUFBRUEsa0JBQTJDLEVBQUVQLEtBQUtXLE9BQU8sRUFBRUosbUJBQXVDLEVBQUVNLElBQUksQ0FDbEtDLENBQUFBO1lBQ0VWLFFBQVFXLEdBQUcsQ0FBQ0QsT0FBT0UsSUFBSTtZQUN2Qm5CLGdCQUFnQjtZQUNoQkUsYUFBYTtZQUNiSixhQUFhO1lBRWIsb0JBQW9CO1lBQ3BCUixRQUFRO1lBQ1JFLFNBQVM7WUFDVEUsV0FBVztRQUNiLEdBQ0EwQixDQUFBQTtZQUNFYixRQUFRVyxHQUFHLENBQUNFLE1BQU1ELElBQUk7WUFDdEJuQixnQkFBZ0I7WUFDaEJFLGFBQWE7WUFDYkosYUFBYTtRQUNmO0lBRUo7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNLO2dCQUFLa0IsS0FBS2xCO2dCQUFNbUIsVUFBVWxCO2dCQUFXbUIsV0FBVTs7a0NBQzlDLDhEQUFDQzt3QkFBTUMsTUFBSzt3QkFBT3BDLE1BQUs7d0JBQVVxQyxPQUFPL0I7d0JBQWFnQyxVQUFVdEIsQ0FBQUEsSUFBS1QsZUFBZVMsRUFBRXVCLE1BQU0sQ0FBQ0YsS0FBSzt3QkFBR0gsV0FBVTt3QkFBU00sZUFBWTs7Ozs7O2tDQUVwSSw4REFBQ0M7d0JBQUlQLFdBQVU7OzBDQUNiLDhEQUFDUTtnQ0FBTUMsU0FBUTtnQ0FBT1QsV0FBVTswQ0FBMEM7Ozs7OzswQ0FHMUUsOERBQUNDO2dDQUFNQyxNQUFLO2dDQUFPUSxJQUFHO2dDQUFPNUMsTUFBSztnQ0FBT3FDLE9BQU9yQztnQ0FBTXNDLFVBQVV0QixDQUFBQSxJQUFLZixRQUFRZSxFQUFFdUIsTUFBTSxDQUFDRixLQUFLO2dDQUFHUSxRQUFRO2dDQUFDWCxXQUFVOzs7Ozs7Ozs7Ozs7a0NBR25ILDhEQUFDTzt3QkFBSVAsV0FBVTs7MENBQ2IsOERBQUNRO2dDQUFNQyxTQUFRO2dDQUFRVCxXQUFVOzBDQUEwQzs7Ozs7OzBDQUczRSw4REFBQ0M7Z0NBQU1DLE1BQUs7Z0NBQVFRLElBQUc7Z0NBQVE1QyxNQUFLO2dDQUFRcUMsT0FBT25DO2dDQUFPb0MsVUFBVXRCLENBQUFBLElBQUtiLFNBQVNhLEVBQUV1QixNQUFNLENBQUNGLEtBQUs7Z0NBQUdRLFFBQVE7Z0NBQUNYLFdBQVU7Ozs7Ozs7Ozs7OztrQ0FHeEgsOERBQUNPO3dCQUFJUCxXQUFVOzswQ0FDYiw4REFBQ1E7Z0NBQU1DLFNBQVE7Z0NBQVVULFdBQVU7MENBQTBDOzs7Ozs7MENBRzdFLDhEQUFDWTtnQ0FBU0YsSUFBRztnQ0FBVTVDLE1BQUs7Z0NBQVUrQyxNQUFLO2dDQUFJVixPQUFPakM7Z0NBQVNrQyxVQUFVdEIsQ0FBQUEsSUFBS1gsV0FBV1csRUFBRXVCLE1BQU0sQ0FBQ0YsS0FBSztnQ0FBR1EsUUFBUTtnQ0FBQ1gsV0FBVTs7Ozs7Ozs7Ozs7O2tDQUcvSCw4REFBQ087d0JBQUlQLFdBQVU7a0NBQ2IsNEVBQUNjOzRCQUFPWixNQUFLOzRCQUFTRixXQUFVO3NDQUFpRTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBT3JHLDhEQUFDcEMsOENBQUtBO2dCQUFDbUQsUUFBUUM7Z0JBQW9CQywwQkFBMEI7Z0JBQU9DLFNBQVMsSUFBTUMsc0JBQXNCO2dCQUFRakQsU0FBU007Z0JBQWM0QyxNQUFNMUM7Ozs7Ozs7O0FBR3BKO0dBN0V3QmI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0VtYWlsRm9ybS5qc3g/ZDg5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBlbWFpbGpzIGZyb20gXCJlbWFpbGpzLWNvbVwiXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4vTW9kYWxcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFbWFpbEZvcm0oKSB7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW2hpZGRlbkZpZWxkLCBzZXRIaWRkZW5GaWVsZF0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbbW9kYWxPcGVuLCBzZXRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFttb2RhbE1lc3NhZ2UsIHNldE1vZGFsTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbbW9kYWxJY29uLCBzZXRNb2RhbEljb25dID0gdXNlU3RhdGUoXCJcIilcblxuICBjb25zdCBmb3JtID0gdXNlUmVmKClcblxuICBjb25zdCBzZW5kRW1haWwgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIGlmIChoaWRkZW5GaWVsZCkge1xuICAgICAgY29uc29sZS53YXJuKFwiU3BhbSBib3QgZGV0ZWN0ZWQhIElnbm9yaW5nIHN1Ym1pc3Npb24uXCIpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBlbWFpbGpzLnNlbmRGb3JtKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0VNQUlMSlNfU0VSVkVSX0lELCBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19FTUFJTEpTX1RFTVBMQVRFX0lELCBmb3JtLmN1cnJlbnQsIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0VNQUlMSlNfVVNFUl9JRCkudGhlbihcbiAgICAgIHJlc3VsdCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC50ZXh0KVxuICAgICAgICBzZXRNb2RhbE1lc3NhZ2UoXCJEYW5rZSEgV2lyIG1lbGRlbiB1bnMgYmVpIGRpci5cIilcbiAgICAgICAgc2V0TW9kYWxJY29uKFwiZmFzIGZhLWNoZWNrLWNpcmNsZVwiKVxuICAgICAgICBzZXRNb2RhbE9wZW4odHJ1ZSlcblxuICAgICAgICAvLyBSZXNldCBmb3JtIGZpZWxkc1xuICAgICAgICBzZXROYW1lKFwiXCIpXG4gICAgICAgIHNldEVtYWlsKFwiXCIpXG4gICAgICAgIHNldE1lc3NhZ2UoXCJcIilcbiAgICAgIH0sXG4gICAgICBlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnRleHQpXG4gICAgICAgIHNldE1vZGFsTWVzc2FnZShcIk9vcHMhIERhcyBoYXQgbGVpZGVyIG5pY2h0IGdla2xhcHB0LlwiKVxuICAgICAgICBzZXRNb2RhbEljb24oXCJmYXMgZmEtdGltZXMtY2lyY2xlXCIpXG4gICAgICAgIHNldE1vZGFsT3Blbih0cnVlKVxuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxmb3JtIHJlZj17Zm9ybX0gb25TdWJtaXQ9e3NlbmRFbWFpbH0gY2xhc3NOYW1lPSdzcGFjZS15LTQgdGV4dC1ibGFjayc+XG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSdjb21wYW55JyB2YWx1ZT17aGlkZGVuRmllbGR9IG9uQ2hhbmdlPXtlID0+IHNldEhpZGRlbkZpZWxkKGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPSdoaWRkZW4nIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYi00Jz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nbmFtZScgY2xhc3NOYW1lPSdibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS00MDAnPlxuICAgICAgICAgICAgTmFtZVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSduYW1lJyBuYW1lPSduYW1lJyB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9e2UgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkIGNsYXNzTmFtZT0nbXQtMSBibG9jayB3LWZ1bGwgcC0yJyAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGItNCc+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2VtYWlsJyBjbGFzc05hbWU9J2Jsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTQwMCc+XG4gICAgICAgICAgICBFLU1haWxcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSdlbWFpbCcgaWQ9J2VtYWlsJyBuYW1lPSdlbWFpbCcgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17ZSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkIGNsYXNzTmFtZT0nbXQtMSBibG9jayB3LWZ1bGwgcC0yJyAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGItOCc+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J21lc3NhZ2UnIGNsYXNzTmFtZT0nYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNDAwJz5cbiAgICAgICAgICAgIE5hY2hyaWNodFxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPHRleHRhcmVhIGlkPSdtZXNzYWdlJyBuYW1lPSdtZXNzYWdlJyByb3dzPSc0JyB2YWx1ZT17bWVzc2FnZX0gb25DaGFuZ2U9e2UgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkIGNsYXNzTmFtZT0nbXQtMSBibG9jayB3LWZ1bGwgcC0yJyAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nYmctd2hpdGUgcHgtNCBweS0yIHRleHQtYmxhY2sgcm91bmRlZCBob3ZlcjpiZy1idXR0b24tZ3JhZGllbnQnPlxuICAgICAgICAgICAgQWJzZW5kZW5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG5cbiAgICAgIHsvKiBNb2RhbCBDb21wb25lbnQgKi99XG4gICAgICA8TW9kYWwgaXNPcGVuPXtpc0Fub3RoZXJNb2RhbE9wZW59IGRpc2FibGVDbG9zZU91dHNpZGVDbGljaz17ZmFsc2V9IG9uQ2xvc2U9eygpID0+IHNldElzQW5vdGhlck1vZGFsT3BlbihmYWxzZSl9IG1lc3NhZ2U9e21vZGFsTWVzc2FnZX0gaWNvbj17bW9kYWxJY29ufSAvPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJlbWFpbGpzIiwiTW9kYWwiLCJFbWFpbEZvcm0iLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImhpZGRlbkZpZWxkIiwic2V0SGlkZGVuRmllbGQiLCJtb2RhbE9wZW4iLCJzZXRNb2RhbE9wZW4iLCJtb2RhbE1lc3NhZ2UiLCJzZXRNb2RhbE1lc3NhZ2UiLCJtb2RhbEljb24iLCJzZXRNb2RhbEljb24iLCJmb3JtIiwic2VuZEVtYWlsIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsIndhcm4iLCJzZW5kRm9ybSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19FTUFJTEpTX1NFUlZFUl9JRCIsIk5FWFRfUFVCTElDX0VNQUlMSlNfVEVNUExBVEVfSUQiLCJjdXJyZW50IiwiTkVYVF9QVUJMSUNfRU1BSUxKU19VU0VSX0lEIiwidGhlbiIsInJlc3VsdCIsImxvZyIsInRleHQiLCJlcnJvciIsInJlZiIsIm9uU3VibWl0IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImFyaWEtaGlkZGVuIiwiZGl2IiwibGFiZWwiLCJodG1sRm9yIiwiaWQiLCJyZXF1aXJlZCIsInRleHRhcmVhIiwicm93cyIsImJ1dHRvbiIsImlzT3BlbiIsImlzQW5vdGhlck1vZGFsT3BlbiIsImRpc2FibGVDbG9zZU91dHNpZGVDbGljayIsIm9uQ2xvc2UiLCJzZXRJc0Fub3RoZXJNb2RhbE9wZW4iLCJpY29uIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/EmailForm.jsx\n"));

/***/ })

});