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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst ImageZoom = (param)=>{\n    let { src, alt, zoomFactor = 3 } = param;\n    _s();\n    const [isZoomed, setIsZoomed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [cursorPosition, setCursorPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleMouseEnter = ()=>{\n        setIsZoomed(true);\n    };\n    const handleMouseLeave = ()=>{\n        setIsZoomed(false);\n    };\n    const handleMouseMove = (e)=>{\n        if (containerRef.current) {\n            const boundingRect = containerRef.current.getBoundingClientRect();\n            const xOffset = e.clientX - boundingRect.left;\n            const yOffset = e.clientY - boundingRect.top;\n            setCursorPosition({\n                x: xOffset,\n                y: yOffset\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative inline-block\",\n        ref: containerRef,\n        onMouseEnter: handleMouseEnter,\n        onMouseLeave: handleMouseLeave,\n        onMouseMove: handleMouseMove,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: src,\n                alt: alt,\n                className: \"object-cover object-center rounded-[0px] w-[650px] h-[650px]\"\n            }, void 0, false, {\n                fileName: \"/Users/abhi/project/Casanona Backup/backup 3rd sep/casanona/components/imageZoom.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            isZoomed && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute w-[500px] h-[500px] border-2 border-gray-300 shadow-md z-10\",\n                style: {\n                    backgroundImage: \"url(\".concat(src, \")\"),\n                    backgroundPosition: \"-\".concat(cursorPosition.x * zoomFactor, \"px -\").concat(cursorPosition.y * zoomFactor, \"px\"),\n                    backgroundSize: \"\".concat(100 * zoomFactor, \"%\"),\n                    left: cursorPosition.x,\n                    top: cursorPosition.y\n                }\n            }, void 0, false, {\n                fileName: \"/Users/abhi/project/Casanona Backup/backup 3rd sep/casanona/components/imageZoom.tsx\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/abhi/project/Casanona Backup/backup 3rd sep/casanona/components/imageZoom.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ImageZoom, \"k7MxpdFH6JqzUxRNrdNQtS41vs8=\");\n_c = ImageZoom;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageZoom);\nvar _c;\n$RefreshReg$(_c, \"ImageZoom\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9pbWFnZVpvb20udHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnRDtBQVFoRCxNQUFNRyxZQUFzQztRQUFDLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxhQUFhLENBQUMsRUFBRTs7SUFDdkUsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1EsZ0JBQWdCQyxrQkFBa0IsR0FBR1QsK0NBQVFBLENBQUM7UUFBRVUsR0FBRztRQUFHQyxHQUFHO0lBQUU7SUFDbEUsTUFBTUMsZUFBZVgsNkNBQU1BLENBQWlCO0lBRTVDLE1BQU1ZLG1CQUFtQjtRQUN2Qk4sWUFBWTtJQUNkO0lBRUEsTUFBTU8sbUJBQW1CO1FBQ3ZCUCxZQUFZO0lBQ2Q7SUFFQSxNQUFNUSxrQkFBa0IsQ0FBQ0M7UUFDdkIsSUFBSUosYUFBYUssT0FBTyxFQUFFO1lBQ3hCLE1BQU1DLGVBQWVOLGFBQWFLLE9BQU8sQ0FBQ0UscUJBQXFCO1lBQy9ELE1BQU1DLFVBQVVKLEVBQUVLLE9BQU8sR0FBR0gsYUFBYUksSUFBSTtZQUM3QyxNQUFNQyxVQUFVUCxFQUFFUSxPQUFPLEdBQUdOLGFBQWFPLEdBQUc7WUFFNUNoQixrQkFBa0I7Z0JBQUVDLEdBQUdVO2dCQUFTVCxHQUFHWTtZQUFRO1FBQzdDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0c7UUFDQ0MsV0FBVTtRQUNWQyxLQUFLaEI7UUFDTGlCLGNBQWNoQjtRQUNkaUIsY0FBY2hCO1FBQ2RpQixhQUFhaEI7OzBCQUViLDhEQUFDaUI7Z0JBQ0M3QixLQUFLQTtnQkFDTEMsS0FBS0E7Z0JBQ0x1QixXQUFVOzs7Ozs7WUFFWHJCLDBCQUNDLDhEQUFDb0I7Z0JBQ0NDLFdBQVU7Z0JBQ1ZNLE9BQU87b0JBQ0xDLGlCQUFpQixPQUFXLE9BQUovQixLQUFJO29CQUM1QmdDLG9CQUFvQixJQUNsQjNCLE9BRHNCQSxlQUFlRSxDQUFDLEdBQUdMLFlBQVcsUUFFckQsT0FEQ0csZUFBZUcsQ0FBQyxHQUFHTixZQUNwQjtvQkFDRCtCLGdCQUFnQixHQUFvQixPQUFqQixNQUFNL0IsWUFBVztvQkFDcENpQixNQUFNZCxlQUFlRSxDQUFDO29CQUN0QmUsS0FBS2pCLGVBQWVHLENBQUM7Z0JBQ3ZCOzs7Ozs7Ozs7Ozs7QUFLVjtHQXBETVQ7S0FBQUE7QUFzRE4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbWFnZVpvb20udHN4P2U1ZGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIEltYWdlWm9vbVByb3BzIHtcbiAgc3JjOiBzdHJpbmc7XG4gIGFsdDogc3RyaW5nO1xuICB6b29tRmFjdG9yPzogbnVtYmVyO1xufVxuXG5jb25zdCBJbWFnZVpvb206IFJlYWN0LkZDPEltYWdlWm9vbVByb3BzPiA9ICh7IHNyYywgYWx0LCB6b29tRmFjdG9yID0gMyB9KSA9PiB7XG4gIGNvbnN0IFtpc1pvb21lZCwgc2V0SXNab29tZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY3Vyc29yUG9zaXRpb24sIHNldEN1cnNvclBvc2l0aW9uXSA9IHVzZVN0YXRlKHsgeDogMCwgeTogMCB9KTtcbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICBjb25zdCBoYW5kbGVNb3VzZUVudGVyID0gKCkgPT4ge1xuICAgIHNldElzWm9vbWVkKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSAoKSA9PiB7XG4gICAgc2V0SXNab29tZWQoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlTW92ZSA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgIGlmIChjb250YWluZXJSZWYuY3VycmVudCkge1xuICAgICAgY29uc3QgYm91bmRpbmdSZWN0ID0gY29udGFpbmVyUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCB4T2Zmc2V0ID0gZS5jbGllbnRYIC0gYm91bmRpbmdSZWN0LmxlZnQ7XG4gICAgICBjb25zdCB5T2Zmc2V0ID0gZS5jbGllbnRZIC0gYm91bmRpbmdSZWN0LnRvcDtcblxuICAgICAgc2V0Q3Vyc29yUG9zaXRpb24oeyB4OiB4T2Zmc2V0LCB5OiB5T2Zmc2V0IH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGlubGluZS1ibG9ja1wiXG4gICAgICByZWY9e2NvbnRhaW5lclJlZn1cbiAgICAgIG9uTW91c2VFbnRlcj17aGFuZGxlTW91c2VFbnRlcn1cbiAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX1cbiAgICAgIG9uTW91c2VNb3ZlPXtoYW5kbGVNb3VzZU1vdmV9XG4gICAgPlxuICAgICAgPGltZ1xuICAgICAgICBzcmM9e3NyY31cbiAgICAgICAgYWx0PXthbHR9XG4gICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIHJvdW5kZWQtWzBweF0gdy1bNjUwcHhdIGgtWzY1MHB4XVwiXG4gICAgICAvPlxuICAgICAge2lzWm9vbWVkICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHctWzUwMHB4XSBoLVs1MDBweF0gYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwIHNoYWRvdy1tZCB6LTEwXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7c3JjfSlgLFxuICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBgLSR7Y3Vyc29yUG9zaXRpb24ueCAqIHpvb21GYWN0b3J9cHggLSR7XG4gICAgICAgICAgICAgIGN1cnNvclBvc2l0aW9uLnkgKiB6b29tRmFjdG9yXG4gICAgICAgICAgICB9cHhgLFxuICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IGAkezEwMCAqIHpvb21GYWN0b3J9JWAsXG4gICAgICAgICAgICBsZWZ0OiBjdXJzb3JQb3NpdGlvbi54LFxuICAgICAgICAgICAgdG9wOiBjdXJzb3JQb3NpdGlvbi55LFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2Vab29tO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJJbWFnZVpvb20iLCJzcmMiLCJhbHQiLCJ6b29tRmFjdG9yIiwiaXNab29tZWQiLCJzZXRJc1pvb21lZCIsImN1cnNvclBvc2l0aW9uIiwic2V0Q3Vyc29yUG9zaXRpb24iLCJ4IiwieSIsImNvbnRhaW5lclJlZiIsImhhbmRsZU1vdXNlRW50ZXIiLCJoYW5kbGVNb3VzZUxlYXZlIiwiaGFuZGxlTW91c2VNb3ZlIiwiZSIsImN1cnJlbnQiLCJib3VuZGluZ1JlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ4T2Zmc2V0IiwiY2xpZW50WCIsImxlZnQiLCJ5T2Zmc2V0IiwiY2xpZW50WSIsInRvcCIsImRpdiIsImNsYXNzTmFtZSIsInJlZiIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsIm9uTW91c2VNb3ZlIiwiaW1nIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kU2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/imageZoom.tsx\n"));

/***/ })

});