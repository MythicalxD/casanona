"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(routes)/product/[productId]/page",{

/***/ "(app-client)/./components/imageZoom.tsx":
/*!**********************************!*\
  !*** ./components/imageZoom.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst ImageZoom = (param)=>{\n    let { src, alt, zoomFactor = 3 } = param;\n    _s();\n    const [isZoomed, setIsZoomed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [cursorPosition, setCursorPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleMouseEnter = ()=>{\n        setIsZoomed(true);\n    };\n    const handleMouseLeave = ()=>{\n        setIsZoomed(false);\n    };\n    const handleMouseMove = (e)=>{\n        if (containerRef.current) {\n            const boundingRect = containerRef.current.getBoundingClientRect();\n            const xOffset = e.clientX - boundingRect.left;\n            const yOffset = e.clientY - boundingRect.top;\n            setCursorPosition({\n                x: xOffset,\n                y: yOffset\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative inline-block\",\n        ref: containerRef,\n        onMouseEnter: handleMouseEnter,\n        onMouseLeave: handleMouseLeave,\n        onMouseMove: handleMouseMove,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: src,\n                alt: alt\n            }, void 0, false, {\n                fileName: \"/Users/abhi/project/Casanona Backup/backup 3rd sep/casanona/components/imageZoom.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            isZoomed && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute w-[500px] h-[500px] border-2 border-gray-300 shadow-md z-10\",\n                style: {\n                    backgroundImage: \"url(\".concat(src, \")\"),\n                    backgroundPosition: \"-\".concat(cursorPosition.x * zoomFactor, \"px -\").concat(cursorPosition.y * zoomFactor, \"px\"),\n                    backgroundSize: \"\".concat(100 * zoomFactor, \"%\"),\n                    left: cursorPosition.x,\n                    top: cursorPosition.y\n                }\n            }, void 0, false, {\n                fileName: \"/Users/abhi/project/Casanona Backup/backup 3rd sep/casanona/components/imageZoom.tsx\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/abhi/project/Casanona Backup/backup 3rd sep/casanona/components/imageZoom.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ImageZoom, \"k7MxpdFH6JqzUxRNrdNQtS41vs8=\");\n_c = ImageZoom;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageZoom);\nvar _c;\n$RefreshReg$(_c, \"ImageZoom\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9pbWFnZVpvb20udHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnRDtBQVFoRCxNQUFNRyxZQUFzQztRQUFDLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxhQUFhLENBQUMsRUFBRTs7SUFDdkUsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1EsZ0JBQWdCQyxrQkFBa0IsR0FBR1QsK0NBQVFBLENBQUM7UUFBRVUsR0FBRztRQUFHQyxHQUFHO0lBQUU7SUFDbEUsTUFBTUMsZUFBZVgsNkNBQU1BLENBQWlCO0lBRTVDLE1BQU1ZLG1CQUFtQjtRQUN2Qk4sWUFBWTtJQUNkO0lBRUEsTUFBTU8sbUJBQW1CO1FBQ3ZCUCxZQUFZO0lBQ2Q7SUFFQSxNQUFNUSxrQkFBa0IsQ0FBQ0M7UUFDdkIsSUFBSUosYUFBYUssT0FBTyxFQUFFO1lBQ3hCLE1BQU1DLGVBQWVOLGFBQWFLLE9BQU8sQ0FBQ0UscUJBQXFCO1lBQy9ELE1BQU1DLFVBQVVKLEVBQUVLLE9BQU8sR0FBR0gsYUFBYUksSUFBSTtZQUM3QyxNQUFNQyxVQUFVUCxFQUFFUSxPQUFPLEdBQUdOLGFBQWFPLEdBQUc7WUFFNUNoQixrQkFBa0I7Z0JBQUVDLEdBQUdVO2dCQUFTVCxHQUFHWTtZQUFRO1FBQzdDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0c7UUFDQ0MsV0FBVTtRQUNWQyxLQUFLaEI7UUFDTGlCLGNBQWNoQjtRQUNkaUIsY0FBY2hCO1FBQ2RpQixhQUFhaEI7OzBCQUViLDhEQUFDaUI7Z0JBQ0M3QixLQUFLQTtnQkFDTEMsS0FBS0E7Ozs7OztZQUVORSwwQkFDQyw4REFBQ29CO2dCQUNDQyxXQUFVO2dCQUNWTSxPQUFPO29CQUNMQyxpQkFBaUIsT0FBVyxPQUFKL0IsS0FBSTtvQkFDNUJnQyxvQkFBb0IsSUFDbEIzQixPQURzQkEsZUFBZUUsQ0FBQyxHQUFHTCxZQUFXLFFBRXJELE9BRENHLGVBQWVHLENBQUMsR0FBR04sWUFDcEI7b0JBQ0QrQixnQkFBZ0IsR0FBb0IsT0FBakIsTUFBTS9CLFlBQVc7b0JBQ3BDaUIsTUFBTWQsZUFBZUUsQ0FBQztvQkFDdEJlLEtBQUtqQixlQUFlRyxDQUFDO2dCQUN2Qjs7Ozs7Ozs7Ozs7O0FBS1Y7R0FuRE1UO0tBQUFBO0FBcUROLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaW1hZ2Vab29tLnRzeD9lNWRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBJbWFnZVpvb21Qcm9wcyB7XG4gIHNyYzogc3RyaW5nO1xuICBhbHQ6IHN0cmluZztcbiAgem9vbUZhY3Rvcj86IG51bWJlcjtcbn1cblxuY29uc3QgSW1hZ2Vab29tOiBSZWFjdC5GQzxJbWFnZVpvb21Qcm9wcz4gPSAoeyBzcmMsIGFsdCwgem9vbUZhY3RvciA9IDMgfSkgPT4ge1xuICBjb25zdCBbaXNab29tZWQsIHNldElzWm9vbWVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2N1cnNvclBvc2l0aW9uLCBzZXRDdXJzb3JQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7IHg6IDAsIHk6IDAgfSk7XG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlTW91c2VFbnRlciA9ICgpID0+IHtcbiAgICBzZXRJc1pvb21lZCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gKCkgPT4ge1xuICAgIHNldElzWm9vbWVkKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICBpZiAoY29udGFpbmVyUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IGJvdW5kaW5nUmVjdCA9IGNvbnRhaW5lclJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgeE9mZnNldCA9IGUuY2xpZW50WCAtIGJvdW5kaW5nUmVjdC5sZWZ0O1xuICAgICAgY29uc3QgeU9mZnNldCA9IGUuY2xpZW50WSAtIGJvdW5kaW5nUmVjdC50b3A7XG5cbiAgICAgIHNldEN1cnNvclBvc2l0aW9uKHsgeDogeE9mZnNldCwgeTogeU9mZnNldCB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBpbmxpbmUtYmxvY2tcIlxuICAgICAgcmVmPXtjb250YWluZXJSZWZ9XG4gICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZU1vdXNlRW50ZXJ9XG4gICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9XG4gICAgICBvbk1vdXNlTW92ZT17aGFuZGxlTW91c2VNb3ZlfVxuICAgID5cbiAgICAgIDxpbWdcbiAgICAgICAgc3JjPXtzcmN9XG4gICAgICAgIGFsdD17YWx0fVxuICAgICAgLz5cbiAgICAgIHtpc1pvb21lZCAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LVs1MDBweF0gaC1bNTAwcHhdIGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCBzaGFkb3ctbWQgei0xMFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke3NyY30pYCxcbiAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogYC0ke2N1cnNvclBvc2l0aW9uLnggKiB6b29tRmFjdG9yfXB4IC0ke1xuICAgICAgICAgICAgICBjdXJzb3JQb3NpdGlvbi55ICogem9vbUZhY3RvclxuICAgICAgICAgICAgfXB4YCxcbiAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBgJHsxMDAgKiB6b29tRmFjdG9yfSVgLFxuICAgICAgICAgICAgbGVmdDogY3Vyc29yUG9zaXRpb24ueCxcbiAgICAgICAgICAgIHRvcDogY3Vyc29yUG9zaXRpb24ueSxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlWm9vbTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiSW1hZ2Vab29tIiwic3JjIiwiYWx0Iiwiem9vbUZhY3RvciIsImlzWm9vbWVkIiwic2V0SXNab29tZWQiLCJjdXJzb3JQb3NpdGlvbiIsInNldEN1cnNvclBvc2l0aW9uIiwieCIsInkiLCJjb250YWluZXJSZWYiLCJoYW5kbGVNb3VzZUVudGVyIiwiaGFuZGxlTW91c2VMZWF2ZSIsImhhbmRsZU1vdXNlTW92ZSIsImUiLCJjdXJyZW50IiwiYm91bmRpbmdSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieE9mZnNldCIsImNsaWVudFgiLCJsZWZ0IiwieU9mZnNldCIsImNsaWVudFkiLCJ0b3AiLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJvbk1vdXNlTW92ZSIsImltZyIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/imageZoom.tsx\n"));

/***/ })

});