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

/***/ "./src/components/Speaker.js":
/*!***********************************!*\
  !*** ./src/components/Speaker.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Session = (param)=>{\n    let { session  } = param;\n    const { title , room  } = session;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"session w-100\",\n        children: [\n            title,\n            \" \",\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                children: [\n                    \"Room: \",\n                    room.name\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 5,\n                columnNumber: 22\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 4,\n        columnNumber: 7\n    }, undefined);\n};\n_c = Session;\nconst Sessions = (param)=>{\n    let { sessions  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sessionBox card h-250\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Session, {\n            session: sessions[0]\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 14,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 13,\n        columnNumber: 7\n    }, undefined);\n};\n_c1 = Sessions;\nconst SpeakerImage = (param)=>{\n    let { id , first , last  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-img d-flex flex-row justify-content-center align-items-center h-300\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: \"contain-fit\",\n            src: \"/images/speaker-\".concat(id, \".jpg\"),\n            width: \"300\",\n            alt: \"\".concat(first, \" \").concat(last)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 23,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 22,\n        columnNumber: 7\n    }, undefined);\n};\n_c2 = SpeakerImage;\nconst SpeakerFavorite = (param)=>{\n    let { favorite  } = param;\n};\n_c3 = SpeakerFavorite;\nconst SpeakerInfo = (param)=>{\n    let { first , last , bio , company , twitterHandle , favorite  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-info\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-between mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-truncate w-200\",\n                    children: [\n                        first,\n                        \" \",\n                        last\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerFavorite, {\n                favorite: favorite\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"card-description\",\n                        children: bio\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"social d-flex flex-row mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"company\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Company\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: company\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"twitter\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Twitter\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: twitterHandle\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 39,\n        columnNumber: 7\n    }, undefined);\n};\n_c4 = SpeakerInfo;\nconst Speaker = (param)=>{\n    let { speaker , showSessions  } = param;\n    const { id , first , last , sessions  } = speaker;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card card-height p-4 mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerImage, {\n                        id: id,\n                        first: first,\n                        last: last\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerInfo, {\n                        ...speaker\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, undefined),\n            showSessions === false ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sessions, {\n                sessions: sessions\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 77,\n                columnNumber: 38\n            }, undefined) : null\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 72,\n        columnNumber: 7\n    }, undefined);\n};\n_c5 = Speaker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speaker);\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c1, \"Sessions\");\n$RefreshReg$(_c2, \"SpeakerImage\");\n$RefreshReg$(_c3, \"SpeakerFavorite\");\n$RefreshReg$(_c4, \"SpeakerInfo\");\n$RefreshReg$(_c5, \"Speaker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQUEsTUFBTUEsVUFBVSxTQUFpQjtRQUFoQixFQUFFQyxRQUFPLEVBQUU7SUFDeEIsTUFBTSxFQUFDQyxNQUFLLEVBQUNDLEtBQUksRUFBQyxHQUFHRjtJQUNyQixxQkFDRSw4REFBQ0c7UUFBS0MsV0FBVTs7WUFDYkg7WUFBTztZQUFJOzBCQUFDLDhEQUFDSTs7b0JBQU87b0JBQU9ILEtBQUtJLElBQUk7Ozs7Ozs7Ozs7Ozs7QUFJM0M7S0FSSVA7QUFVSixNQUFNUSxXQUFXLFNBQWtCO1FBQWpCLEVBQUVDLFNBQVEsRUFBRTtJQUM1QixxQkFDRSw4REFBQ0M7UUFBSUwsV0FBVTtrQkFDYiw0RUFBQ0w7WUFBUUMsU0FBU1EsUUFBUSxDQUFDLEVBQUU7Ozs7Ozs7Ozs7O0FBSW5DO01BUE1EO0FBU04sTUFBTUcsZUFBZSxTQUF1QjtRQUF0QixFQUFFQyxHQUFFLEVBQUNDLE1BQUssRUFBQ0MsS0FBSSxFQUFFO0lBQ3JDLHFCQUNFLDhEQUFDSjtRQUFJTCxXQUFVO2tCQUNiLDRFQUFDVTtZQUNDVixXQUFVO1lBQ1ZXLEtBQUssbUJBQXNCLE9BQUhKLElBQUc7WUFDM0JLLE9BQU07WUFDTkMsS0FBSyxHQUFZSixPQUFURCxPQUFNLEtBQVEsT0FBTEM7Ozs7Ozs7Ozs7O0FBSXpCO01BWE1IO0FBYU4sTUFBTVEsa0JBQWtCLFNBQWdCO1FBQWYsRUFBQ0MsU0FBUSxFQUFDO0FBRW5DO01BRk1EO0FBSU4sTUFBTUUsY0FBYyxTQUFxRDtRQUFwRCxFQUFDUixNQUFLLEVBQUNDLEtBQUksRUFBQ1EsSUFBRyxFQUFDQyxRQUFPLEVBQUNDLGNBQWEsRUFBQ0osU0FBUSxFQUFDO0lBQ2xFLHFCQUNFLDhEQUFDVjtRQUFJTCxXQUFVOzswQkFDYiw4REFBQ0s7Z0JBQUlMLFdBQVU7MEJBQ2IsNEVBQUNvQjtvQkFBR3BCLFdBQVU7O3dCQUNYUTt3QkFBTTt3QkFBRUM7Ozs7Ozs7Ozs7OzswQkFJYiw4REFBQ0s7Z0JBQWlCQyxVQUFVQTs7Ozs7OzBCQUU1Qiw4REFBQ1Y7O2tDQUNDLDhEQUFDZ0I7d0JBQUVyQixXQUFVO2tDQUFvQmlCOzs7Ozs7a0NBQ2pDLDhEQUFDWjt3QkFBSUwsV0FBVTs7MENBQ2IsOERBQUNLO2dDQUFJTCxXQUFVOztrREFDWCw4REFBQ3NCO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUNDO2tEQUFJTDs7Ozs7Ozs7Ozs7OzBDQUVULDhEQUFDYjtnQ0FBSUwsV0FBVTs7a0RBQ1gsOERBQUNzQjtrREFBRzs7Ozs7O2tEQUNKLDhEQUFDQztrREFBSUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9uQjtNQTNCTUg7QUE2Qk4sTUFBTVEsVUFBVSxTQUE4QjtRQUE3QixFQUFFQyxRQUFPLEVBQUNDLGFBQVksRUFBRTtJQUN2QyxNQUFNLEVBQUVuQixHQUFFLEVBQUNDLE1BQUssRUFBQ0MsS0FBSSxFQUFDTCxTQUFRLEVBQUUsR0FBR3FCO0lBSW5DLHFCQUNFLDhEQUFDcEI7UUFBSUwsV0FBVTs7MEJBQ2IsOERBQUNLO2dCQUFJTCxXQUFVOztrQ0FDYiw4REFBQ007d0JBQWFDLElBQUlBO3dCQUFJQyxPQUFPQTt3QkFBT0MsTUFBTUE7Ozs7OztrQ0FDMUMsOERBQUNPO3dCQUFhLEdBQUdTLE9BQU87Ozs7Ozs7Ozs7OztZQUV0QkMsaUJBQWlCLEtBQUssaUJBQUcsOERBQUN2QjtnQkFBU0MsVUFBVUE7Ozs7OzRCQUFjLElBQUk7Ozs7Ozs7QUFHekU7TUFkTW9CO0FBZ0JOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXIuanM/MjkyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTZXNzaW9uID0gKHsgc2Vzc2lvbiB9KSA9PiB7XHJcbiAgICBjb25zdCB7dGl0bGUscm9vbX0gPSBzZXNzaW9uO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2Vzc2lvbiB3LTEwMFwiPlxyXG4gICAgICAgIHt0aXRsZX17XCIgXCJ9IDxzdHJvbmc+Um9vbToge3Jvb20ubmFtZX08L3N0cm9uZz5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgKVxyXG4gICBcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgU2Vzc2lvbnMgPSAoeyBzZXNzaW9ucyB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb25Cb3ggY2FyZCBoLTI1MFwiPlxyXG4gICAgICAgIDxTZXNzaW9uIHNlc3Npb249e3Nlc3Npb25zWzBdfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICAgIFxyXG4gIH1cclxuICBcclxuICBjb25zdCBTcGVha2VySW1hZ2UgPSAoeyBpZCxmaXJzdCxsYXN0IH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbWcgZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGgtMzAwXCI+XHJcbiAgICAgICAgPGltZyBcclxuICAgICAgICAgIGNsYXNzTmFtZT0nY29udGFpbi1maXQnIFxyXG4gICAgICAgICAgc3JjPXtgL2ltYWdlcy9zcGVha2VyLSR7aWR9LmpwZ2B9IFxyXG4gICAgICAgICAgd2lkdGg9XCIzMDBcIiBcclxuICAgICAgICAgIGFsdD17YCR7Zmlyc3R9ICR7bGFzdH1gfSBcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIGNvbnN0IFNwZWFrZXJGYXZvcml0ZSA9ICh7ZmF2b3JpdGV9KSA9PiB7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgU3BlYWtlckluZm8gPSAoe2ZpcnN0LGxhc3QsYmlvLGNvbXBhbnksdHdpdHRlckhhbmRsZSxmYXZvcml0ZX0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbmZvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItM1wiPlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGV4dC10cnVuY2F0ZSB3LTIwMCc+XHJcbiAgICAgICAgICAgIHtmaXJzdH0ge2xhc3R9XHJcbiAgICAgICAgICA8L2gzPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8U3BlYWtlckZhdm9yaXRlICBmYXZvcml0ZT17ZmF2b3JpdGV9Lz5cclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtZGVzY3JpcHRpb25cIj57YmlvfTwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsIGQtZmxleCBmbGV4LXJvdyBtdC00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueVwiPlxyXG4gICAgICAgICAgICAgICAgPGg1PkNvbXBhbnk8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGg2Pntjb21wYW55fTwvaDY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3aXR0ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoNT5Ud2l0dGVyPC9oNT5cclxuICAgICAgICAgICAgICAgIDxoNj57dHdpdHRlckhhbmRsZX08L2g2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IFNwZWFrZXIgPSAoeyBzcGVha2VyLHNob3dTZXNzaW9ucyB9KSA9PiB7XHJcbiAgICBjb25zdCB7IGlkLGZpcnN0LGxhc3Qsc2Vzc2lvbnMgfSA9IHNwZWFrZXI7XHJcbiAgICBcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1oZWlnaHQgcC00IG10LTRcIj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgIDxTcGVha2VySW1hZ2UgaWQ9e2lkfSBmaXJzdD17Zmlyc3R9IGxhc3Q9e2xhc3R9Lz4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICA8U3BlYWtlckluZm8gey4uLnNwZWFrZXJ9Lz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7IHNob3dTZXNzaW9ucyA9PT0gZmFsc2UgPyA8U2Vzc2lvbnMgc2Vzc2lvbnM9e3Nlc3Npb25zfS8+IDogbnVsbCB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgU3BlYWtlcjsiXSwibmFtZXMiOlsiU2Vzc2lvbiIsInNlc3Npb24iLCJ0aXRsZSIsInJvb20iLCJzcGFuIiwiY2xhc3NOYW1lIiwic3Ryb25nIiwibmFtZSIsIlNlc3Npb25zIiwic2Vzc2lvbnMiLCJkaXYiLCJTcGVha2VySW1hZ2UiLCJpZCIsImZpcnN0IiwibGFzdCIsImltZyIsInNyYyIsIndpZHRoIiwiYWx0IiwiU3BlYWtlckZhdm9yaXRlIiwiZmF2b3JpdGUiLCJTcGVha2VySW5mbyIsImJpbyIsImNvbXBhbnkiLCJ0d2l0dGVySGFuZGxlIiwiaDMiLCJwIiwiaDUiLCJoNiIsIlNwZWFrZXIiLCJzcGVha2VyIiwic2hvd1Nlc3Npb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Speaker.js\n"));

/***/ })

});