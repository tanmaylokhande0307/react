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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Speaker */ \"./src/components/Speaker.js\");\n/* harmony import */ var _speakerData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../speakerData */ \"./speakerData.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst SpeakerList = (param)=>{\n    let { showSessions  } = param;\n    _s();\n    const [speakerData, setSpeakerData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const delay = (ms)=>{\n        new Promise((resolve)=>setTimeout(resolve, ms));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function delayFunc() {\n            await delay(2000);\n            setSpeakerData(_speakerData__WEBPACK_IMPORTED_MODULE_3__.data);\n        }\n        de;\n    });\n    function onfavoriteToggle(id) {\n        const speakersRecPrevios = speakerData.find(function(rec) {\n            return rec.id === id;\n        });\n        const speakerRecUpdate = {\n            ...speakersRecPrevios,\n            favorite: !speakersRecPrevios.favorite\n        };\n        const speakersDataNew = speakerData.map(function(rec) {\n            return rec.id === id ? speakerRecUpdate : rec;\n        });\n        setSpeakerData(speakersDataNew);\n    }\n    ;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: speakerData.map(function(speaker) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    speaker: speaker,\n                    showSessions: showSessions,\n                    onfavoriteToggle: ()=>{\n                        onfavoriteToggle(speaker.id);\n                    }\n                }, speaker.id, false, {\n                    fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\SpeakerList.js\",\n                    lineNumber: 45,\n                    columnNumber: 13\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\SpeakerList.js\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\SpeakerList.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SpeakerList, \"NMmiC6HWgHPYXnFew2iPNymcTgQ=\");\n_c = SpeakerList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakerList);\nvar _c;\n$RefreshReg$(_c, \"SpeakerList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2VyTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQW1EO0FBQ25CO0FBQ1M7QUFFekMsTUFBTUssY0FBYyxTQUFzQjtRQUFyQixFQUFFQyxhQUFZLEVBQUU7O0lBQ25DLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRWpELE1BQU1PLFFBQVEsQ0FBQ0MsS0FBTztRQUNwQixJQUFJQyxRQUFRLENBQUNDLFVBQVlDLFdBQVdELFNBQVFGO0lBQzlDO0lBRUFULGdEQUFTQSxDQUFDLElBQU07UUFDZCxlQUFlYSxZQUFXO1lBQ3hCLE1BQU1MLE1BQU07WUFDWkQsZUFBZUosOENBQUlBO1FBQ3JCO1FBRUFXO0lBQ0Y7SUFFQSxTQUFTQyxpQkFBaUJDLEVBQUUsRUFBQztRQUMzQixNQUFNQyxxQkFBcUJYLFlBQVlZLElBQUksQ0FBQyxTQUFVQyxHQUFHLEVBQUU7WUFDekQsT0FBT0EsSUFBSUgsRUFBRSxLQUFLQTtRQUNwQjtRQUdBLE1BQU1JLG1CQUFtQjtZQUN2QixHQUFHSCxrQkFBa0I7WUFDckJJLFVBQVUsQ0FBQ0osbUJBQW1CSSxRQUFRO1FBQ3hDO1FBR0EsTUFBTUMsa0JBQWtCaEIsWUFBWWlCLEdBQUcsQ0FBQyxTQUFVSixHQUFHLEVBQUU7WUFDckQsT0FBT0EsSUFBSUgsRUFBRSxLQUFLQSxLQUFLSSxtQkFBbUJELEdBQUc7UUFDL0M7UUFFQVosZUFBZWU7SUFDakI7O0lBRUEscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ1puQixZQUFZaUIsR0FBRyxDQUFDLFNBQVVHLE9BQU8sRUFBRTtnQkFDbEMscUJBQ0UsOERBQUN4QixnREFBT0E7b0JBRU53QixTQUFTQTtvQkFDVHJCLGNBQWNBO29CQUNkVSxrQkFBa0IsSUFBTTt3QkFDdEJBLGlCQUFpQlcsUUFBUVYsRUFBRTtvQkFDN0I7bUJBTEtVLFFBQVFWLEVBQUU7Ozs7O1lBUXJCOzs7Ozs7Ozs7OztBQUlSO0dBckRNWjtLQUFBQTtBQXVETiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TcGVha2VyTGlzdC5qcz9mZWRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTcGVha2VyIGZyb20gXCIuL1NwZWFrZXJcIjtcclxuaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuLi8uLi9zcGVha2VyRGF0YVwiO1xyXG5cclxuY29uc3QgU3BlYWtlckxpc3QgPSAoeyBzaG93U2Vzc2lvbnMgfSkgPT4ge1xyXG4gIGNvbnN0IFtzcGVha2VyRGF0YSwgc2V0U3BlYWtlckRhdGFdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBkZWxheSA9IChtcykgPT4ge1xyXG4gICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSxtcykpO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGRlbGF5RnVuYygpe1xyXG4gICAgICBhd2FpdCBkZWxheSgyMDAwKTtcclxuICAgICAgc2V0U3BlYWtlckRhdGEoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVcclxuICB9KSBcclxuXHJcbiAgZnVuY3Rpb24gb25mYXZvcml0ZVRvZ2dsZShpZCl7XHJcbiAgICBjb25zdCBzcGVha2Vyc1JlY1ByZXZpb3MgPSBzcGVha2VyRGF0YS5maW5kKGZ1bmN0aW9uIChyZWMpIHtcclxuICAgICAgcmV0dXJuIHJlYy5pZCA9PT0gaWQ7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgY29uc3Qgc3BlYWtlclJlY1VwZGF0ZSA9IHtcclxuICAgICAgLi4uc3BlYWtlcnNSZWNQcmV2aW9zLFxyXG4gICAgICBmYXZvcml0ZTogIXNwZWFrZXJzUmVjUHJldmlvcy5mYXZvcml0ZSxcclxuICAgIH07XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBzcGVha2Vyc0RhdGFOZXcgPSBzcGVha2VyRGF0YS5tYXAoZnVuY3Rpb24gKHJlYykge1xyXG4gICAgICByZXR1cm4gcmVjLmlkID09PSBpZCA/IHNwZWFrZXJSZWNVcGRhdGUgOiByZWM7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRTcGVha2VyRGF0YShzcGVha2Vyc0RhdGFOZXcpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzcGVha2Vycy1saXN0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAge3NwZWFrZXJEYXRhLm1hcChmdW5jdGlvbiAoc3BlYWtlcikge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFNwZWFrZXJcclxuICAgICAgICAgICAgICBrZXk9e3NwZWFrZXIuaWR9XHJcbiAgICAgICAgICAgICAgc3BlYWtlcj17c3BlYWtlcn1cclxuICAgICAgICAgICAgICBzaG93U2Vzc2lvbnM9e3Nob3dTZXNzaW9uc31cclxuICAgICAgICAgICAgICBvbmZhdm9yaXRlVG9nZ2xlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvbmZhdm9yaXRlVG9nZ2xlKHNwZWFrZXIuaWQpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyTGlzdDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTcGVha2VyIiwiZGF0YSIsIlNwZWFrZXJMaXN0Iiwic2hvd1Nlc3Npb25zIiwic3BlYWtlckRhdGEiLCJzZXRTcGVha2VyRGF0YSIsImRlbGF5IiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJkZWxheUZ1bmMiLCJkZSIsIm9uZmF2b3JpdGVUb2dnbGUiLCJpZCIsInNwZWFrZXJzUmVjUHJldmlvcyIsImZpbmQiLCJyZWMiLCJzcGVha2VyUmVjVXBkYXRlIiwiZmF2b3JpdGUiLCJzcGVha2Vyc0RhdGFOZXciLCJtYXAiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGVha2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SpeakerList.js\n"));

/***/ })

});