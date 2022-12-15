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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Session = (param)=>{\n    let { session  } = param;\n    const { title , room  } = session;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"session w-100\",\n        children: [\n            title,\n            \" \",\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                children: [\n                    \"Room: \",\n                    room.name\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 5,\n                columnNumber: 22\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 4,\n        columnNumber: 7\n    }, undefined);\n};\n_c = Session;\nconst Sessions = (param)=>{\n    let { sessions  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sessionBox card h-250\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Session, {\n            session: sessions[0]\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 14,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 13,\n        columnNumber: 7\n    }, undefined);\n};\n_c1 = Sessions;\nconst SpeakerImage = (param)=>{\n    let { id , first , last  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-img d-flex flex-row justify-content-center align-items-center h-300\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: \"contain-fit\",\n            src: \"/images/speaker-\".concat(id, \".jpg\"),\n            width: \"300\",\n            alt: \"\".concat(first, \" \").concat(last)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 23,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 22,\n        columnNumber: 7\n    }, undefined);\n};\n_c2 = SpeakerImage;\nconst SpeakerInfo = (param)=>{\n    let { first , last , bio , company , twitterHandle , favorite  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-info\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-between mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-truncate w-200\",\n                    children: [\n                        first,\n                        \" \",\n                        last\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 37,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"card-description\",\n                        children: bio\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"social d-flex flex-row mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"company\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Company\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: company\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"twitter\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Twitter\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: twitterHandle\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 35,\n        columnNumber: 7\n    }, undefined);\n};\n_c3 = SpeakerInfo;\nconst Speaker = (param)=>{\n    let { speaker , showSessions  } = param;\n    const { id , first , last , sessions  } = speaker;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card card-height p-4 mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerImage, {\n                        id: id,\n                        first: first,\n                        last: last\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerInfo, {\n                        ...speaker\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, undefined),\n            showSessions === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sessions, {\n                sessions: sessions\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 70,\n                columnNumber: 37\n            }, undefined) : null\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 65,\n        columnNumber: 7\n    }, undefined);\n};\n_c4 = Speaker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speaker);\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c1, \"Sessions\");\n$RefreshReg$(_c2, \"SpeakerImage\");\n$RefreshReg$(_c3, \"SpeakerInfo\");\n$RefreshReg$(_c4, \"Speaker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQUEsTUFBTUEsVUFBVSxTQUFpQjtRQUFoQixFQUFFQyxRQUFPLEVBQUU7SUFDeEIsTUFBTSxFQUFDQyxNQUFLLEVBQUNDLEtBQUksRUFBQyxHQUFHRjtJQUNyQixxQkFDRSw4REFBQ0c7UUFBS0MsV0FBVTs7WUFDYkg7WUFBTztZQUFJOzBCQUFDLDhEQUFDSTs7b0JBQU87b0JBQU9ILEtBQUtJLElBQUk7Ozs7Ozs7Ozs7Ozs7QUFJM0M7S0FSSVA7QUFVSixNQUFNUSxXQUFXLFNBQWtCO1FBQWpCLEVBQUVDLFNBQVEsRUFBRTtJQUM1QixxQkFDRSw4REFBQ0M7UUFBSUwsV0FBVTtrQkFDYiw0RUFBQ0w7WUFBUUMsU0FBU1EsUUFBUSxDQUFDLEVBQUU7Ozs7Ozs7Ozs7O0FBSW5DO01BUE1EO0FBU04sTUFBTUcsZUFBZSxTQUF1QjtRQUF0QixFQUFFQyxHQUFFLEVBQUNDLE1BQUssRUFBQ0MsS0FBSSxFQUFFO0lBQ3JDLHFCQUNFLDhEQUFDSjtRQUFJTCxXQUFVO2tCQUNiLDRFQUFDVTtZQUNDVixXQUFVO1lBQ1ZXLEtBQUssbUJBQXNCLE9BQUhKLElBQUc7WUFDM0JLLE9BQU07WUFDTkMsS0FBSyxHQUFZSixPQUFURCxPQUFNLEtBQVEsT0FBTEM7Ozs7Ozs7Ozs7O0FBSXpCO01BWE1IO0FBYU4sTUFBTVEsY0FBYyxTQUFxRDtRQUFwRCxFQUFDTixNQUFLLEVBQUNDLEtBQUksRUFBQ00sSUFBRyxFQUFDQyxRQUFPLEVBQUNDLGNBQWEsRUFBQ0MsU0FBUSxFQUFDO0lBQ2xFLHFCQUNFLDhEQUFDYjtRQUFJTCxXQUFVOzswQkFDYiw4REFBQ0s7Z0JBQUlMLFdBQVU7MEJBQ2IsNEVBQUNtQjtvQkFBR25CLFdBQVU7O3dCQUNYUTt3QkFBTTt3QkFBRUM7Ozs7Ozs7Ozs7OzswQkFHYiw4REFBQ0o7O2tDQUNDLDhEQUFDZTt3QkFBRXBCLFdBQVU7a0NBQW9CZTs7Ozs7O2tDQUNqQyw4REFBQ1Y7d0JBQUlMLFdBQVU7OzBDQUNiLDhEQUFDSztnQ0FBSUwsV0FBVTs7a0RBQ1gsOERBQUNxQjtrREFBRzs7Ozs7O2tEQUNKLDhEQUFDQztrREFBSU47Ozs7Ozs7Ozs7OzswQ0FFVCw4REFBQ1g7Z0NBQUlMLFdBQVU7O2tEQUNYLDhEQUFDcUI7a0RBQUc7Ozs7OztrREFDSiw4REFBQ0M7a0RBQUlMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPbkI7TUF4Qk1IO0FBMEJOLE1BQU1TLFVBQVUsU0FBOEI7UUFBN0IsRUFBRUMsUUFBTyxFQUFDQyxhQUFZLEVBQUU7SUFDdkMsTUFBTSxFQUFFbEIsR0FBRSxFQUFDQyxNQUFLLEVBQUNDLEtBQUksRUFBQ0wsU0FBUSxFQUFFLEdBQUdvQjtJQUluQyxxQkFDRSw4REFBQ25CO1FBQUlMLFdBQVU7OzBCQUNiLDhEQUFDSztnQkFBSUwsV0FBVTs7a0NBQ2IsOERBQUNNO3dCQUFhQyxJQUFJQTt3QkFBSUMsT0FBT0E7d0JBQU9DLE1BQU1BOzs7Ozs7a0NBQzFDLDhEQUFDSzt3QkFBYSxHQUFHVSxPQUFPOzs7Ozs7Ozs7Ozs7WUFFdEJDLGlCQUFpQixJQUFJLGlCQUFHLDhEQUFDdEI7Z0JBQVNDLFVBQVVBOzs7Ozs0QkFBYyxJQUFJOzs7Ozs7O0FBR3hFO01BZE1tQjtBQWdCTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TcGVha2VyLmpzPzI5MmQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU2Vzc2lvbiA9ICh7IHNlc3Npb24gfSkgPT4ge1xyXG4gICAgY29uc3Qge3RpdGxlLHJvb219ID0gc2Vzc2lvbjtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlc3Npb24gdy0xMDBcIj5cclxuICAgICAgICB7dGl0bGV9e1wiIFwifSA8c3Ryb25nPlJvb206IHtyb29tLm5hbWV9PC9zdHJvbmc+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIClcclxuICAgXHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IFNlc3Npb25zID0gKHsgc2Vzc2lvbnMgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uQm94IGNhcmQgaC0yNTBcIj5cclxuICAgICAgICA8U2Vzc2lvbiBzZXNzaW9uPXtzZXNzaW9uc1swXX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgU3BlYWtlckltYWdlID0gKHsgaWQsZmlyc3QsbGFzdCB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW1nIGQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTMwMFwiPlxyXG4gICAgICAgIDxpbWcgXHJcbiAgICAgICAgICBjbGFzc05hbWU9J2NvbnRhaW4tZml0JyBcclxuICAgICAgICAgIHNyYz17YC9pbWFnZXMvc3BlYWtlci0ke2lkfS5qcGdgfSBcclxuICAgICAgICAgIHdpZHRoPVwiMzAwXCIgXHJcbiAgICAgICAgICBhbHQ9e2Ake2ZpcnN0fSAke2xhc3R9YH0gXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IFNwZWFrZXJJbmZvID0gKHtmaXJzdCxsYXN0LGJpbyxjb21wYW55LHR3aXR0ZXJIYW5kbGUsZmF2b3JpdGV9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW5mb1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1iLTNcIj5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3RleHQtdHJ1bmNhdGUgdy0yMDAnPlxyXG4gICAgICAgICAgICB7Zmlyc3R9IHtsYXN0fVxyXG4gICAgICAgICAgPC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC1kZXNjcmlwdGlvblwiPntiaW99PC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwgZC1mbGV4IGZsZXgtcm93IG10LTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYW55XCI+XHJcbiAgICAgICAgICAgICAgICA8aDU+Q29tcGFueTwvaDU+XHJcbiAgICAgICAgICAgICAgICA8aDY+e2NvbXBhbnl9PC9oNj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHdpdHRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGg1PlR3aXR0ZXI8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGg2Pnt0d2l0dGVySGFuZGxlfTwvaDY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgU3BlYWtlciA9ICh7IHNwZWFrZXIsc2hvd1Nlc3Npb25zIH0pID0+IHtcclxuICAgIGNvbnN0IHsgaWQsZmlyc3QsbGFzdCxzZXNzaW9ucyB9ID0gc3BlYWtlcjtcclxuICAgIFxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWhlaWdodCBwLTQgbXQtNFwiPlxyXG4gICAgICAgICAgPFNwZWFrZXJJbWFnZSBpZD17aWR9IGZpcnN0PXtmaXJzdH0gbGFzdD17bGFzdH0vPlxyXG4gICAgICAgICAgPFNwZWFrZXJJbmZvIHsuLi5zcGVha2VyfS8+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgeyBzaG93U2Vzc2lvbnMgPT09IHRydWUgPyA8U2Vzc2lvbnMgc2Vzc2lvbnM9e3Nlc3Npb25zfS8+IDogbnVsbCB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgU3BlYWtlcjsiXSwibmFtZXMiOlsiU2Vzc2lvbiIsInNlc3Npb24iLCJ0aXRsZSIsInJvb20iLCJzcGFuIiwiY2xhc3NOYW1lIiwic3Ryb25nIiwibmFtZSIsIlNlc3Npb25zIiwic2Vzc2lvbnMiLCJkaXYiLCJTcGVha2VySW1hZ2UiLCJpZCIsImZpcnN0IiwibGFzdCIsImltZyIsInNyYyIsIndpZHRoIiwiYWx0IiwiU3BlYWtlckluZm8iLCJiaW8iLCJjb21wYW55IiwidHdpdHRlckhhbmRsZSIsImZhdm9yaXRlIiwiaDMiLCJwIiwiaDUiLCJoNiIsIlNwZWFrZXIiLCJzcGVha2VyIiwic2hvd1Nlc3Npb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Speaker.js\n"));

/***/ })

});