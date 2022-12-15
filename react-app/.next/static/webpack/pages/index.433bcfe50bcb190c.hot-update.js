"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/SpeakerList.js":
/*!***************************************!*\
  !*** ./src/components/SpeakerList.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Speaker */ \"./src/components/Speaker.js\");\n/* harmony import */ var _speakerData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../speakerData */ \"./speakerData.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst SpeakerList = (param)=>{\n    let { showSessions  } = param;\n    _s();\n    const [speakerData, setSpeakerData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_speakerData__WEBPACK_IMPORTED_MODULE_3__.data);\n    const onfavoriteToggle = (id)=>{\n        const speakersRecPrevios = speakerData.find(function(rec) {\n            return rec.id === id;\n        });\n        const speakerRecUpdate = {\n            ...speakersRecPrevios,\n            favorite: !speakersRecPrevios.favorite\n        };\n        const speakersDataNew = speakersData.map(function(rec) {\n            return rec;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: _speakerData__WEBPACK_IMPORTED_MODULE_3__.data.map(function(speaker) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    speaker: speaker,\n                    showSessions: showSessions,\n                    onfavoriteToggle: ()=>{\n                        onfavoriteToggle(speaker.id);\n                    }\n                }, speaker.id, false, {\n                    fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\SpeakerList.js\",\n                    lineNumber: 32,\n                    columnNumber: 13\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\SpeakerList.js\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\SpeakerList.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SpeakerList, \"D7vRXfJYs4PLQxQq0/p9OHZ8nkc=\");\n_c = SpeakerList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakerList);\nvar _c;\n$RefreshReg$(_c, \"SpeakerList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2VyTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQXFDO0FBQ0w7QUFDUztBQUd6QyxNQUFNSSxjQUFjLFNBQXNCO1FBQXJCLEVBQUVDLGFBQVksRUFBRTs7SUFFbkMsTUFBTSxDQUFDQyxhQUFZQyxlQUFlLEdBQUdOLCtDQUFRQSxDQUFDRSw4Q0FBSUE7SUFFbEQsTUFBTUssbUJBQW1CLENBQUNDLEtBQU87UUFFL0IsTUFBTUMscUJBQXFCSixZQUFZSyxJQUFJLENBQUMsU0FBU0MsR0FBRyxFQUFDO1lBQ3ZELE9BQU9BLElBQUlILEVBQUUsS0FBS0E7UUFDcEI7UUFFQSxNQUFNSSxtQkFBbUI7WUFDdkIsR0FBR0gsa0JBQWtCO1lBQ3JCSSxVQUFVLENBQUNKLG1CQUFtQkksUUFBUTtRQUN4QztRQUVBLE1BQU1DLGtCQUFrQkMsYUFBYUMsR0FBRyxDQUFDLFNBQVNMLEdBQUcsRUFBQztZQUNwRCxPQUFPQTtRQUNUO0lBRUY7SUFFQSxxQkFDRSw4REFBQ007UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDWmhCLGtEQUFRLENBQUMsU0FBU2lCLE9BQU8sRUFBQztnQkFDekIscUJBQ0UsOERBQUNsQixnREFBT0E7b0JBRU5rQixTQUFTQTtvQkFDVGYsY0FBY0E7b0JBQ2RHLGtCQUFrQixJQUFNO3dCQUN0QkEsaUJBQWlCWSxRQUFRWCxFQUFFO29CQUM3QjttQkFMS1csUUFBUVgsRUFBRTs7Ozs7WUFRckI7Ozs7Ozs7Ozs7O0FBTVI7R0F6Q01MO0tBQUFBO0FBMkNOLCtEQUFlQSxXQUFXQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXJMaXN0LmpzP2ZlZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU3BlYWtlciBmcm9tICcuL1NwZWFrZXInO1xyXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi4vLi4vc3BlYWtlckRhdGEnO1xyXG5cclxuXHJcbmNvbnN0IFNwZWFrZXJMaXN0ID0gKHsgc2hvd1Nlc3Npb25zIH0pID0+IHtcclxuXHJcbiAgY29uc3QgW3NwZWFrZXJEYXRhLHNldFNwZWFrZXJEYXRhXSA9IHVzZVN0YXRlKGRhdGEpO1xyXG5cclxuICBjb25zdCBvbmZhdm9yaXRlVG9nZ2xlID0gKGlkKSA9PiB7ICBcclxuXHJcbiAgICBjb25zdCBzcGVha2Vyc1JlY1ByZXZpb3MgPSBzcGVha2VyRGF0YS5maW5kKGZ1bmN0aW9uKHJlYyl7XHJcbiAgICAgIHJldHVybiByZWMuaWQgPT09IGlkO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc3BlYWtlclJlY1VwZGF0ZSA9IHtcclxuICAgICAgLi4uc3BlYWtlcnNSZWNQcmV2aW9zLFxyXG4gICAgICBmYXZvcml0ZTogIXNwZWFrZXJzUmVjUHJldmlvcy5mYXZvcml0ZVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzcGVha2Vyc0RhdGFOZXcgPSBzcGVha2Vyc0RhdGEubWFwKGZ1bmN0aW9uKHJlYyl7XHJcbiAgICAgIHJldHVybiByZWNcclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIHNwZWFrZXJzLWxpc3QnPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIHtkYXRhLm1hcChmdW5jdGlvbihzcGVha2VyKXtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxTcGVha2VyIFxyXG4gICAgICAgICAgICAgIGtleT17c3BlYWtlci5pZH0gXHJcbiAgICAgICAgICAgICAgc3BlYWtlcj17c3BlYWtlcn1cclxuICAgICAgICAgICAgICBzaG93U2Vzc2lvbnM9e3Nob3dTZXNzaW9uc31cclxuICAgICAgICAgICAgICBvbmZhdm9yaXRlVG9nZ2xlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvbmZhdm9yaXRlVG9nZ2xlKHNwZWFrZXIuaWQpXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIClcclxuICAgICAgICB9KX1cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBcclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJMaXN0XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiU3BlYWtlciIsImRhdGEiLCJTcGVha2VyTGlzdCIsInNob3dTZXNzaW9ucyIsInNwZWFrZXJEYXRhIiwic2V0U3BlYWtlckRhdGEiLCJvbmZhdm9yaXRlVG9nZ2xlIiwiaWQiLCJzcGVha2Vyc1JlY1ByZXZpb3MiLCJmaW5kIiwicmVjIiwic3BlYWtlclJlY1VwZGF0ZSIsImZhdm9yaXRlIiwic3BlYWtlcnNEYXRhTmV3Iiwic3BlYWtlcnNEYXRhIiwibWFwIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BlYWtlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SpeakerList.js\n"));

/***/ })

});