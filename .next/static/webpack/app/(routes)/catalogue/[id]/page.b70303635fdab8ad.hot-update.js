"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(routes)/catalogue/[id]/page",{

/***/ "(app-client)/./app/(routes)/catalogue/[id]/components/comp.tsx":
/*!*********************************************************!*\
  !*** ./app/(routes)/catalogue/[id]/components/comp.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _utils_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/urls */ \"(app-client)/./utils/urls.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nconst Comp = (product)=>{\n    var _product;\n    console.log(product.product[0]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex md:items-center items-start h-[90vh] md:ml-12 m-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"\".concat(_utils_urls__WEBPACK_IMPORTED_MODULE_1__.API_URL_IMAGE).concat(product.product[0].attributes.images.data[0].attributes.url),\n                    alt: product.product[0].attributes.name,\n                    className: \"object-cover object-center rounded-[10px] md:w-[650px] md:h-[600px]\"\n                }, void 0, false, {\n                    fileName: \"/Users/abhi/project/Casanona Backup/backup 3rd sep/casanona/app/(routes)/catalogue/[id]/components/comp.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex md:flex-row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-3 flex items-end justify-between\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-xl text-gray-700\",\n                                children: \"1 review\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abhi/project/Casanona Backup/backup 3rd sep/casanona/app/(routes)/catalogue/[id]/components/comp.tsx\",\n                                lineNumber: 18,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/abhi/project/Casanona Backup/backup 3rd sep/casanona/app/(routes)/catalogue/[id]/components/comp.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-3 flex items-center justify-start\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-3xl font-bold text-gray-900\",\n                                    children: [\n                                        product.product[0].attributes.name,\n                                        \" •\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/abhi/project/Casanona Backup/backup 3rd sep/casanona/app/(routes)/catalogue/[id]/components/comp.tsx\",\n                                    lineNumber: 21,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-2xl text-grey-900 ml-2 mt-1\",\n                                    children: [\n                                        \"₹\",\n                                        (_product = product) === null || _product === void 0 ? void 0 : _product.product[0].attributes.price\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/abhi/project/Casanona Backup/backup 3rd sep/casanona/app/(routes)/catalogue/[id]/components/comp.tsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/abhi/project/Casanona Backup/backup 3rd sep/casanona/app/(routes)/catalogue/[id]/components/comp.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center gap-x-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-gray-500 max-w-[500px] mt-2 mb-2\",\n                                children: product.product[0].attributes.description\n                            }, void 0, false, {\n                                fileName: \"/Users/abhi/project/Casanona Backup/backup 3rd sep/casanona/app/(routes)/catalogue/[id]/components/comp.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/abhi/project/Casanona Backup/backup 3rd sep/casanona/app/(routes)/catalogue/[id]/components/comp.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center gap-x-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-gray-600 ml-2\",\n                                    children: \"Size:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhi/project/Casanona Backup/backup 3rd sep/casanona/app/(routes)/catalogue/[id]/components/comp.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: product.product[0].attributes.size\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhi/project/Casanona Backup/backup 3rd sep/casanona/app/(routes)/catalogue/[id]/components/comp.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/abhi/project/Casanona Backup/backup 3rd sep/casanona/app/(routes)/catalogue/[id]/components/comp.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abhi/project/Casanona Backup/backup 3rd sep/casanona/app/(routes)/catalogue/[id]/components/comp.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/abhi/project/Casanona Backup/backup 3rd sep/casanona/app/(routes)/catalogue/[id]/components/comp.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/abhi/project/Casanona Backup/backup 3rd sep/casanona/app/(routes)/catalogue/[id]/components/comp.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Comp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comp);\nvar _c;\n$RefreshReg$(_c, \"Comp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwLyhyb3V0ZXMpL2NhdGFsb2d1ZS9baWRdL2NvbXBvbmVudHMvY29tcC50c3giLCJtYXBwaW5ncyI6Ijs7OztBQUM2QztBQUc3QyxNQUFNQyxPQUFPLENBQUNDO1FBb0JFQTtJQW5CZEMsUUFBUUMsR0FBRyxDQUFDRixRQUFRQSxPQUFPLENBQUMsRUFBRTtJQUU5QixxQkFDRSw4REFBQ0c7a0JBQ0MsNEVBQUNBO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFDQ0MsS0FBSyxHQUFtQk4sT0FBaEJGLHNEQUFhQSxFQUErRCxPQUE1REUsUUFBUUEsT0FBTyxDQUFDLEVBQUUsQ0FBQ08sVUFBVSxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQyxFQUFFLENBQUNGLFVBQVUsQ0FBQ0csR0FBRztvQkFDbkZDLEtBQUtYLFFBQVFBLE9BQU8sQ0FBQyxFQUFFLENBQUNPLFVBQVUsQ0FBQ0ssSUFBSTtvQkFDdkNSLFdBQVU7Ozs7Ozs4QkFFWiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ1M7Z0NBQUdULFdBQVU7MENBQXdCOzs7Ozs7Ozs7OztzQ0FFeEMsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ1M7b0NBQUdULFdBQVU7O3dDQUNYSixRQUFRQSxPQUFPLENBQUMsRUFBRSxDQUFDTyxVQUFVLENBQUNLLElBQUk7d0NBQUM7Ozs7Ozs7OENBRXRDLDhEQUFDRTtvQ0FBRVYsV0FBVTs7d0NBQW1DO3lDQUM1Q0osV0FBQUEscUJBQUFBLCtCQUFBQSxTQUFTQSxPQUFPLENBQUMsRUFBRSxDQUFDTyxVQUFVLENBQUNRLEtBQUs7Ozs7Ozs7Ozs7Ozs7c0NBRzFDLDhEQUFDWjs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ1k7Z0NBQUdaLFdBQVU7MENBQ1hKLFFBQVFBLE9BQU8sQ0FBQyxFQUFFLENBQUNPLFVBQVUsQ0FBQ1UsV0FBVzs7Ozs7Ozs7Ozs7c0NBRzlDLDhEQUFDZDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNZO29DQUFHWixXQUFVOzhDQUFxQjs7Ozs7OzhDQUNuQyw4REFBQ1U7OENBQUdkLFFBQVFBLE9BQU8sQ0FBQyxFQUFFLENBQUNPLFVBQVUsQ0FBQ1csSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbEQ7S0FwQ01uQjtBQXNDTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKHJvdXRlcykvY2F0YWxvZ3VlL1tpZF0vY29tcG9uZW50cy9jb21wLnRzeD82NGQ1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgQVBJX1VSTF9JTUFHRSB9IGZyb20gXCJAL3V0aWxzL3VybHNcIjtcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5cbmNvbnN0IENvbXAgPSAocHJvZHVjdDogYW55KSA9PiB7XG4gIGNvbnNvbGUubG9nKHByb2R1Y3QucHJvZHVjdFswXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1kOml0ZW1zLWNlbnRlciBpdGVtcy1zdGFydCBoLVs5MHZoXSBtZDptbC0xMiBtLTRcIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17YCR7QVBJX1VSTF9JTUFHRX0ke3Byb2R1Y3QucHJvZHVjdFswXS5hdHRyaWJ1dGVzLmltYWdlcy5kYXRhWzBdLmF0dHJpYnV0ZXMudXJsfWB9XG4gICAgICAgICAgYWx0PXtwcm9kdWN0LnByb2R1Y3RbMF0uYXR0cmlidXRlcy5uYW1lfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIHJvdW5kZWQtWzEwcHhdIG1kOnctWzY1MHB4XSBtZDpoLVs2MDBweF1cIlxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWQ6ZmxleC1yb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgZmxleCBpdGVtcy1lbmQganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LWdyYXktNzAwXCI+MSByZXZpZXc8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0XCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAge3Byb2R1Y3QucHJvZHVjdFswXS5hdHRyaWJ1dGVzLm5hbWV9IOKAolxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtZ3JleS05MDAgbWwtMiBtdC0xXCI+XG4gICAgICAgICAgICAgIOKCuXtwcm9kdWN0Py5wcm9kdWN0WzBdLmF0dHJpYnV0ZXMucHJpY2V9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAteC00XCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBtYXgtdy1bNTAwcHhdIG10LTIgbWItMlwiPlxuICAgICAgICAgICAgICB7cHJvZHVjdC5wcm9kdWN0WzBdLmF0dHJpYnV0ZXMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLXgtMlwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgbWwtMlwiPlNpemU6PC9oMz5cbiAgICAgICAgICAgIDxwPntwcm9kdWN0LnByb2R1Y3RbMF0uYXR0cmlidXRlcy5zaXplfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbXA7XG4iXSwibmFtZXMiOlsiQVBJX1VSTF9JTUFHRSIsIkNvbXAiLCJwcm9kdWN0IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImF0dHJpYnV0ZXMiLCJpbWFnZXMiLCJkYXRhIiwidXJsIiwiYWx0IiwibmFtZSIsImgxIiwicCIsInByaWNlIiwiaDMiLCJkZXNjcmlwdGlvbiIsInNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/(routes)/catalogue/[id]/components/comp.tsx\n"));

/***/ })

});