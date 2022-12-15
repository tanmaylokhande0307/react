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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Session = (param)=>{\n    let { session  } = param;\n    const { title , room  } = session;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"session w-100\",\n        children: [\n            title,\n            \" \",\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                children: [\n                    \"Room: \",\n                    room.name\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 5,\n                columnNumber: 22\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 4,\n        columnNumber: 7\n    }, undefined);\n};\n_c = Session;\nconst Sessions = (param)=>{\n    let { sessions  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sessionBox card h-250\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Session, {\n            session: sessions[0]\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 14,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 13,\n        columnNumber: 7\n    }, undefined);\n};\n_c1 = Sessions;\nconst SpeakerImage = (param)=>{\n    let { id , first , last  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-img d-flex flex-row justify-content-center align-items-center h-300\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: \"contain-fit\",\n            src: \"/images/speaker-\".concat(id, \".jpg\"),\n            width: \"300\",\n            alt: \"\".concat(first, \" \").concat(last)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 23,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 22,\n        columnNumber: 7\n    }, undefined);\n};\n_c2 = SpeakerImage;\nconst SpeakerFavorite = (param)=>{\n    let { favorite  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"action padB1\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                className: favorite === true ? \"fa fa-star orange\" : \"fa fa-star-o orange\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 37,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 36,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 35,\n        columnNumber: 7\n    }, undefined);\n};\n_c3 = SpeakerFavorite;\nconst SpeakerInfo = (param)=>{\n    let { first , last , bio , company , twitterHandle , favorite  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-info\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-between mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-truncate w-200\",\n                    children: [\n                        first,\n                        \" \",\n                        last\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 47,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerFavorite, {\n                favorite: favorite\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"card-description\",\n                        children: bio\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"social d-flex flex-row mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"company\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Company\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: company\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"twitter\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Twitter\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: twitterHandle\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 45,\n        columnNumber: 7\n    }, undefined);\n};\n_c4 = SpeakerInfo;\nconst Speaker = (param)=>{\n    let { speaker , showSessions  } = param;\n    const { id , first , last , sessions  } = speaker;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card card-height p-4 mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerImage, {\n                        id: id,\n                        first: first,\n                        last: last\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerInfo, {\n                        ...speaker\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 79,\n                columnNumber: 9\n            }, undefined),\n            showSessions === false ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sessions, {\n                sessions: sessions\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 83,\n                columnNumber: 38\n            }, undefined) : null\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 78,\n        columnNumber: 7\n    }, undefined);\n};\n_c5 = Speaker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speaker);\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c1, \"Sessions\");\n$RefreshReg$(_c2, \"SpeakerImage\");\n$RefreshReg$(_c3, \"SpeakerFavorite\");\n$RefreshReg$(_c4, \"SpeakerInfo\");\n$RefreshReg$(_c5, \"Speaker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQUEsTUFBTUEsVUFBVSxTQUFpQjtRQUFoQixFQUFFQyxRQUFPLEVBQUU7SUFDeEIsTUFBTSxFQUFDQyxNQUFLLEVBQUNDLEtBQUksRUFBQyxHQUFHRjtJQUNyQixxQkFDRSw4REFBQ0c7UUFBS0MsV0FBVTs7WUFDYkg7WUFBTztZQUFJOzBCQUFDLDhEQUFDSTs7b0JBQU87b0JBQU9ILEtBQUtJLElBQUk7Ozs7Ozs7Ozs7Ozs7QUFJM0M7S0FSSVA7QUFVSixNQUFNUSxXQUFXLFNBQWtCO1FBQWpCLEVBQUVDLFNBQVEsRUFBRTtJQUM1QixxQkFDRSw4REFBQ0M7UUFBSUwsV0FBVTtrQkFDYiw0RUFBQ0w7WUFBUUMsU0FBU1EsUUFBUSxDQUFDLEVBQUU7Ozs7Ozs7Ozs7O0FBSW5DO01BUE1EO0FBU04sTUFBTUcsZUFBZSxTQUF1QjtRQUF0QixFQUFFQyxHQUFFLEVBQUNDLE1BQUssRUFBQ0MsS0FBSSxFQUFFO0lBQ3JDLHFCQUNFLDhEQUFDSjtRQUFJTCxXQUFVO2tCQUNiLDRFQUFDVTtZQUNDVixXQUFVO1lBQ1ZXLEtBQUssbUJBQXNCLE9BQUhKLElBQUc7WUFDM0JLLE9BQU07WUFDTkMsS0FBSyxHQUFZSixPQUFURCxPQUFNLEtBQVEsT0FBTEM7Ozs7Ozs7Ozs7O0FBSXpCO01BWE1IO0FBYU4sTUFBTVEsa0JBQWtCLFNBQWdCO1FBQWYsRUFBQ0MsU0FBUSxFQUFDO0lBQ2pDLHFCQUNFLDhEQUFDVjtRQUFJTCxXQUFVO2tCQUNiLDRFQUFDRDtzQkFDQyw0RUFBQ2lCO2dCQUFFaEIsV0FBV2UsYUFBYSxJQUFJLEdBQUcsc0JBQXNCLHFCQUFxQjs7Ozs7Ozs7Ozs7Ozs7OztBQUlyRjtNQVJNRDtBQVVOLE1BQU1HLGNBQWMsU0FBcUQ7UUFBcEQsRUFBQ1QsTUFBSyxFQUFDQyxLQUFJLEVBQUNTLElBQUcsRUFBQ0MsUUFBTyxFQUFDQyxjQUFhLEVBQUNMLFNBQVEsRUFBQztJQUNsRSxxQkFDRSw4REFBQ1Y7UUFBSUwsV0FBVTs7MEJBQ2IsOERBQUNLO2dCQUFJTCxXQUFVOzBCQUNiLDRFQUFDcUI7b0JBQUdyQixXQUFVOzt3QkFDWFE7d0JBQU07d0JBQUVDOzs7Ozs7Ozs7Ozs7MEJBSWIsOERBQUNLO2dCQUFpQkMsVUFBVUE7Ozs7OzswQkFFNUIsOERBQUNWOztrQ0FDQyw4REFBQ2lCO3dCQUFFdEIsV0FBVTtrQ0FBb0JrQjs7Ozs7O2tDQUNqQyw4REFBQ2I7d0JBQUlMLFdBQVU7OzBDQUNiLDhEQUFDSztnQ0FBSUwsV0FBVTs7a0RBQ1gsOERBQUN1QjtrREFBRzs7Ozs7O2tEQUNKLDhEQUFDQztrREFBSUw7Ozs7Ozs7Ozs7OzswQ0FFVCw4REFBQ2Q7Z0NBQUlMLFdBQVU7O2tEQUNYLDhEQUFDdUI7a0RBQUc7Ozs7OztrREFDSiw4REFBQ0M7a0RBQUlKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPbkI7TUEzQk1IO0FBNkJOLE1BQU1RLFVBQVUsU0FBOEI7UUFBN0IsRUFBRUMsUUFBTyxFQUFDQyxhQUFZLEVBQUU7SUFDdkMsTUFBTSxFQUFFcEIsR0FBRSxFQUFDQyxNQUFLLEVBQUNDLEtBQUksRUFBQ0wsU0FBUSxFQUFFLEdBQUdzQjtJQUluQyxxQkFDRSw4REFBQ3JCO1FBQUlMLFdBQVU7OzBCQUNiLDhEQUFDSztnQkFBSUwsV0FBVTs7a0NBQ2IsOERBQUNNO3dCQUFhQyxJQUFJQTt3QkFBSUMsT0FBT0E7d0JBQU9DLE1BQU1BOzs7Ozs7a0NBQzFDLDhEQUFDUTt3QkFBYSxHQUFHUyxPQUFPOzs7Ozs7Ozs7Ozs7WUFFdEJDLGlCQUFpQixLQUFLLGlCQUFHLDhEQUFDeEI7Z0JBQVNDLFVBQVVBOzs7Ozs0QkFBYyxJQUFJOzs7Ozs7O0FBR3pFO01BZE1xQjtBQWdCTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TcGVha2VyLmpzPzI5MmQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU2Vzc2lvbiA9ICh7IHNlc3Npb24gfSkgPT4ge1xyXG4gICAgY29uc3Qge3RpdGxlLHJvb219ID0gc2Vzc2lvbjtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlc3Npb24gdy0xMDBcIj5cclxuICAgICAgICB7dGl0bGV9e1wiIFwifSA8c3Ryb25nPlJvb206IHtyb29tLm5hbWV9PC9zdHJvbmc+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIClcclxuICAgXHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IFNlc3Npb25zID0gKHsgc2Vzc2lvbnMgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uQm94IGNhcmQgaC0yNTBcIj5cclxuICAgICAgICA8U2Vzc2lvbiBzZXNzaW9uPXtzZXNzaW9uc1swXX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgU3BlYWtlckltYWdlID0gKHsgaWQsZmlyc3QsbGFzdCB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW1nIGQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTMwMFwiPlxyXG4gICAgICAgIDxpbWcgXHJcbiAgICAgICAgICBjbGFzc05hbWU9J2NvbnRhaW4tZml0JyBcclxuICAgICAgICAgIHNyYz17YC9pbWFnZXMvc3BlYWtlci0ke2lkfS5qcGdgfSBcclxuICAgICAgICAgIHdpZHRoPVwiMzAwXCIgXHJcbiAgICAgICAgICBhbHQ9e2Ake2ZpcnN0fSAke2xhc3R9YH0gXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBjb25zdCBTcGVha2VyRmF2b3JpdGUgPSAoe2Zhdm9yaXRlfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb24gcGFkQjFcIj5cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT17ZmF2b3JpdGUgPT09IHRydWUgPyBcImZhIGZhLXN0YXIgb3JhbmdlXCIgOiBcImZhIGZhLXN0YXItbyBvcmFuZ2VcIn0+PC9pPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuICBcclxuICBjb25zdCBTcGVha2VySW5mbyA9ICh7Zmlyc3QsbGFzdCxiaW8sY29tcGFueSx0d2l0dGVySGFuZGxlLGZhdm9yaXRlfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWluZm9cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0zXCI+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPSd0ZXh0LXRydW5jYXRlIHctMjAwJz5cclxuICAgICAgICAgICAge2ZpcnN0fSB7bGFzdH1cclxuICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxTcGVha2VyRmF2b3JpdGUgIGZhdm9yaXRlPXtmYXZvcml0ZX0vPlxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC1kZXNjcmlwdGlvblwiPntiaW99PC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwgZC1mbGV4IGZsZXgtcm93IG10LTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYW55XCI+XHJcbiAgICAgICAgICAgICAgICA8aDU+Q29tcGFueTwvaDU+XHJcbiAgICAgICAgICAgICAgICA8aDY+e2NvbXBhbnl9PC9oNj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHdpdHRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGg1PlR3aXR0ZXI8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGg2Pnt0d2l0dGVySGFuZGxlfTwvaDY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgU3BlYWtlciA9ICh7IHNwZWFrZXIsc2hvd1Nlc3Npb25zIH0pID0+IHtcclxuICAgIGNvbnN0IHsgaWQsZmlyc3QsbGFzdCxzZXNzaW9ucyB9ID0gc3BlYWtlcjtcclxuICAgIFxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWhlaWdodCBwLTQgbXQtNFwiPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgPFNwZWFrZXJJbWFnZSBpZD17aWR9IGZpcnN0PXtmaXJzdH0gbGFzdD17bGFzdH0vPiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgIDxTcGVha2VySW5mbyB7Li4uc3BlYWtlcn0vPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsgc2hvd1Nlc3Npb25zID09PSBmYWxzZSA/IDxTZXNzaW9ucyBzZXNzaW9ucz17c2Vzc2lvbnN9Lz4gOiBudWxsIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBleHBvcnQgZGVmYXVsdCBTcGVha2VyOyJdLCJuYW1lcyI6WyJTZXNzaW9uIiwic2Vzc2lvbiIsInRpdGxlIiwicm9vbSIsInNwYW4iLCJjbGFzc05hbWUiLCJzdHJvbmciLCJuYW1lIiwiU2Vzc2lvbnMiLCJzZXNzaW9ucyIsImRpdiIsIlNwZWFrZXJJbWFnZSIsImlkIiwiZmlyc3QiLCJsYXN0IiwiaW1nIiwic3JjIiwid2lkdGgiLCJhbHQiLCJTcGVha2VyRmF2b3JpdGUiLCJmYXZvcml0ZSIsImkiLCJTcGVha2VySW5mbyIsImJpbyIsImNvbXBhbnkiLCJ0d2l0dGVySGFuZGxlIiwiaDMiLCJwIiwiaDUiLCJoNiIsIlNwZWFrZXIiLCJzcGVha2VyIiwic2hvd1Nlc3Npb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Speaker.js\n"));

/***/ })

});