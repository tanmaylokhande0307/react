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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Speaker */ \"./src/components/Speaker.js\");\n/* harmony import */ var _speakerData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../speakerData */ \"./speakerData.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst SpeakerList = (param)=>{\n    let { showSessions  } = param;\n    _s();\n    const [speakerData, setSpeakerData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_speakerData__WEBPACK_IMPORTED_MODULE_3__.data);\n    const onfavoriteToggle = (id)=>{\n        const speakersRecPrevios = speakerData.find(function(rec) {\n            return rec.id === id;\n        });\n        const speakerRecUpdate = {\n            ...speakersRecPrevios,\n            favorite: !speakersRecPrevios.favorite\n        };\n        const speakersDataNew = speakers;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: _speakerData__WEBPACK_IMPORTED_MODULE_3__.data.map(function(speaker) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    speaker: speaker,\n                    showSessions: showSessions,\n                    onfavoriteToggle: ()=>{\n                        onfavoriteToggle(speaker.id);\n                    }\n                }, speaker.id, false, {\n                    fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\SpeakerList.js\",\n                    lineNumber: 30,\n                    columnNumber: 13\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\SpeakerList.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\SpeakerList.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SpeakerList, \"D7vRXfJYs4PLQxQq0/p9OHZ8nkc=\");\n_c = SpeakerList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakerList);\nvar _c;\n$RefreshReg$(_c, \"SpeakerList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2VyTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQXFDO0FBQ0w7QUFDUztBQUd6QyxNQUFNSSxjQUFjLFNBQXNCO1FBQXJCLEVBQUVDLGFBQVksRUFBRTs7SUFFbkMsTUFBTSxDQUFDQyxhQUFZQyxlQUFlLEdBQUdOLCtDQUFRQSxDQUFDRSw4Q0FBSUE7SUFFbEQsTUFBTUssbUJBQW1CLENBQUNDLEtBQU87UUFFL0IsTUFBTUMscUJBQXFCSixZQUFZSyxJQUFJLENBQUMsU0FBU0MsR0FBRyxFQUFDO1lBQ3ZELE9BQU9BLElBQUlILEVBQUUsS0FBS0E7UUFDcEI7UUFFQSxNQUFNSSxtQkFBbUI7WUFDdkIsR0FBR0gsa0JBQWtCO1lBQ3JCSSxVQUFVLENBQUNKLG1CQUFtQkksUUFBUTtRQUN4QztRQUVBLE1BQU1DLGtCQUFrQkM7SUFFMUI7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDWmYsa0RBQVEsQ0FBQyxTQUFTaUIsT0FBTyxFQUFDO2dCQUN6QixxQkFDRSw4REFBQ2xCLGdEQUFPQTtvQkFFTmtCLFNBQVNBO29CQUNUZixjQUFjQTtvQkFDZEcsa0JBQWtCLElBQU07d0JBQ3RCQSxpQkFBaUJZLFFBQVFYLEVBQUU7b0JBQzdCO21CQUxLVyxRQUFRWCxFQUFFOzs7OztZQVFyQjs7Ozs7Ozs7Ozs7QUFNUjtHQXZDTUw7S0FBQUE7QUF5Q04sK0RBQWVBLFdBQVdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlckxpc3QuanM/ZmVkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTcGVha2VyIGZyb20gJy4vU3BlYWtlcic7XHJcbmltcG9ydCB7IGRhdGEgfSBmcm9tICcuLi8uLi9zcGVha2VyRGF0YSc7XHJcblxyXG5cclxuY29uc3QgU3BlYWtlckxpc3QgPSAoeyBzaG93U2Vzc2lvbnMgfSkgPT4ge1xyXG5cclxuICBjb25zdCBbc3BlYWtlckRhdGEsc2V0U3BlYWtlckRhdGFdID0gdXNlU3RhdGUoZGF0YSk7XHJcblxyXG4gIGNvbnN0IG9uZmF2b3JpdGVUb2dnbGUgPSAoaWQpID0+IHsgIFxyXG5cclxuICAgIGNvbnN0IHNwZWFrZXJzUmVjUHJldmlvcyA9IHNwZWFrZXJEYXRhLmZpbmQoZnVuY3Rpb24ocmVjKXtcclxuICAgICAgcmV0dXJuIHJlYy5pZCA9PT0gaWQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzcGVha2VyUmVjVXBkYXRlID0ge1xyXG4gICAgICAuLi5zcGVha2Vyc1JlY1ByZXZpb3MsXHJcbiAgICAgIGZhdm9yaXRlOiAhc3BlYWtlcnNSZWNQcmV2aW9zLmZhdm9yaXRlXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNwZWFrZXJzRGF0YU5ldyA9IHNwZWFrZXJzXHJcblxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgc3BlYWtlcnMtbGlzdCc+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAge2RhdGEubWFwKGZ1bmN0aW9uKHNwZWFrZXIpe1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFNwZWFrZXIgXHJcbiAgICAgICAgICAgICAga2V5PXtzcGVha2VyLmlkfSBcclxuICAgICAgICAgICAgICBzcGVha2VyPXtzcGVha2VyfVxyXG4gICAgICAgICAgICAgIHNob3dTZXNzaW9ucz17c2hvd1Nlc3Npb25zfVxyXG4gICAgICAgICAgICAgIG9uZmF2b3JpdGVUb2dnbGU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIG9uZmF2b3JpdGVUb2dnbGUoc3BlYWtlci5pZClcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIFxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlckxpc3RcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJTcGVha2VyIiwiZGF0YSIsIlNwZWFrZXJMaXN0Iiwic2hvd1Nlc3Npb25zIiwic3BlYWtlckRhdGEiLCJzZXRTcGVha2VyRGF0YSIsIm9uZmF2b3JpdGVUb2dnbGUiLCJpZCIsInNwZWFrZXJzUmVjUHJldmlvcyIsImZpbmQiLCJyZWMiLCJzcGVha2VyUmVjVXBkYXRlIiwiZmF2b3JpdGUiLCJzcGVha2Vyc0RhdGFOZXciLCJzcGVha2VycyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInNwZWFrZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SpeakerList.js\n"));

/***/ })

});