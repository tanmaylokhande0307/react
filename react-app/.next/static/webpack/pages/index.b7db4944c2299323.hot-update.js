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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Session = (param)=>{\n    let { session  } = param;\n    const { title , room  } = session;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"session w-100\",\n        children: [\n            title,\n            \" \",\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                children: [\n                    \"Room: \",\n                    room.name\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 5,\n                columnNumber: 22\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 4,\n        columnNumber: 7\n    }, undefined);\n};\n_c = Session;\nconst Sessions = (param)=>{\n    let { sessions  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sessionBox card h-250\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Session, {\n            session: sessions[0]\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 14,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 13,\n        columnNumber: 7\n    }, undefined);\n};\n_c1 = Sessions;\nconst SpeakerImage = (param)=>{\n    let { id , first , last  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-img d-flex flex-row justify-content-center align-items-center h-300\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: \"contain-fit\",\n            src: \"/images/speaker-\".concat(id, \".jpg\"),\n            width: \"300\",\n            alt: \"\".concat(first, \" \").concat(last)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 23,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 22,\n        columnNumber: 7\n    }, undefined);\n};\n_c2 = SpeakerImage;\nconst SpeakerFavorite = (param)=>{\n    let { favorite , onfavoriteToggle  } = param;\n    console.log(favorite, onfavoriteToggle);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"action padB1\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            onClick: onfavoriteToggle,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: favorite === true ? \"fa fa-star orange\" : \"fa fa-star-o orange\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 38,\n                    columnNumber: 11\n                }, undefined),\n                \" \",\n                \" Favorite \",\n                \" \"\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 37,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 36,\n        columnNumber: 7\n    }, undefined);\n};\n_c3 = SpeakerFavorite;\nconst SpeakerInfo = (param)=>{\n    let { first , last , bio , company , twitterHandle , favorite , onfavoriteToggle  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-info\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-between mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-truncate w-200\",\n                    children: [\n                        first,\n                        \" \",\n                        last\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 48,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerFavorite, {\n                favorite: favorite,\n                onfavoriteToggle: onfavoriteToggle\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"card-description\",\n                        children: bio\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"social d-flex flex-row mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"company\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Company\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: company\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"twitter\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Twitter\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: twitterHandle\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 46,\n        columnNumber: 7\n    }, undefined);\n};\n_c4 = SpeakerInfo;\nconst Speaker = (param)=>{\n    let { speaker , showSessions , onfavoriteToggle  } = param;\n    const { id , first , last , sessions  } = speaker;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card card-height p-4 mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerImage, {\n                        id: id,\n                        first: first,\n                        last: last\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 84,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerInfo, {\n                        ...speaker,\n                        onfavoriteToggle: onfavoriteToggle\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 85,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 83,\n                columnNumber: 9\n            }, undefined),\n            showSessions === false ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sessions, {\n                sessions: sessions\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 87,\n                columnNumber: 38\n            }, undefined) : null\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive - ZasmLabs\\\\react proj\\\\react-app\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 82,\n        columnNumber: 7\n    }, undefined);\n};\n_c5 = Speaker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speaker);\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c1, \"Sessions\");\n$RefreshReg$(_c2, \"SpeakerImage\");\n$RefreshReg$(_c3, \"SpeakerFavorite\");\n$RefreshReg$(_c4, \"SpeakerInfo\");\n$RefreshReg$(_c5, \"Speaker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O0FBR3pFO01BZE15QjtBQWdCTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TcGVha2VyLmpzPzI5MmQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU2Vzc2lvbiA9ICh7IHNlc3Npb24gfSkgPT4ge1xyXG4gICAgY29uc3Qge3RpdGxlLHJvb219ID0gc2Vzc2lvbjtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlc3Npb24gdy0xMDBcIj5cclxuICAgICAgICB7dGl0bGV9e1wiIFwifSA8c3Ryb25nPlJvb206IHtyb29tLm5hbWV9PC9zdHJvbmc+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIClcclxuICAgXHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IFNlc3Npb25zID0gKHsgc2Vzc2lvbnMgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uQm94IGNhcmQgaC0yNTBcIj5cclxuICAgICAgICA8U2Vzc2lvbiBzZXNzaW9uPXtzZXNzaW9uc1swXX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgU3BlYWtlckltYWdlID0gKHsgaWQsZmlyc3QsbGFzdCB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW1nIGQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTMwMFwiPlxyXG4gICAgICAgIDxpbWcgXHJcbiAgICAgICAgICBjbGFzc05hbWU9J2NvbnRhaW4tZml0JyBcclxuICAgICAgICAgIHNyYz17YC9pbWFnZXMvc3BlYWtlci0ke2lkfS5qcGdgfSBcclxuICAgICAgICAgIHdpZHRoPVwiMzAwXCIgXHJcbiAgICAgICAgICBhbHQ9e2Ake2ZpcnN0fSAke2xhc3R9YH0gXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBjb25zdCBTcGVha2VyRmF2b3JpdGUgPSAoeyBmYXZvcml0ZSxvbmZhdm9yaXRlVG9nZ2xlIH0pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGZhdm9yaXRlLG9uZmF2b3JpdGVUb2dnbGUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb24gcGFkQjFcIj5cclxuICAgICAgICA8c3BhbiBvbkNsaWNrPXtvbmZhdm9yaXRlVG9nZ2xlfT5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT17ZmF2b3JpdGUgPT09IHRydWUgPyBcImZhIGZhLXN0YXIgb3JhbmdlXCIgOiBcImZhIGZhLXN0YXItbyBvcmFuZ2VcIn0gLz57XCIgXCJ9IEZhdm9yaXRlIHtcIiBcIn1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgU3BlYWtlckluZm8gPSAoe2ZpcnN0LGxhc3QsYmlvLGNvbXBhbnksdHdpdHRlckhhbmRsZSxmYXZvcml0ZSxvbmZhdm9yaXRlVG9nZ2xlfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWluZm9cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0zXCI+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPSd0ZXh0LXRydW5jYXRlIHctMjAwJz5cclxuICAgICAgICAgICAge2ZpcnN0fSB7bGFzdH1cclxuICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxTcGVha2VyRmF2b3JpdGUgIFxyXG4gICAgICAgICAgZmF2b3JpdGU9e2Zhdm9yaXRlfVxyXG4gICAgICAgICAgb25mYXZvcml0ZVRvZ2dsZT17b25mYXZvcml0ZVRvZ2dsZX0gIFxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCI+e2Jpb308L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbCBkLWZsZXggZmxleC1yb3cgbXQtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhbnlcIj5cclxuICAgICAgICAgICAgICAgIDxoNT5Db21wYW55PC9oNT5cclxuICAgICAgICAgICAgICAgIDxoNj57Y29tcGFueX08L2g2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0d2l0dGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDU+VHdpdHRlcjwvaDU+XHJcbiAgICAgICAgICAgICAgICA8aDY+e3R3aXR0ZXJIYW5kbGV9PC9oNj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuICBjb25zdCBTcGVha2VyID0gKHsgc3BlYWtlcixzaG93U2Vzc2lvbnMsb25mYXZvcml0ZVRvZ2dsZSB9KSA9PiB7XHJcbiAgICBjb25zdCB7IGlkLGZpcnN0LGxhc3Qsc2Vzc2lvbnMgfSA9IHNwZWFrZXI7XHJcbiAgICBcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1oZWlnaHQgcC00IG10LTRcIj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgIDxTcGVha2VySW1hZ2UgaWQ9e2lkfSBmaXJzdD17Zmlyc3R9IGxhc3Q9e2xhc3R9Lz4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICA8U3BlYWtlckluZm8gey4uLnNwZWFrZXJ9IG9uZmF2b3JpdGVUb2dnbGU9e29uZmF2b3JpdGVUb2dnbGV9Lz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7IHNob3dTZXNzaW9ucyA9PT0gZmFsc2UgPyA8U2Vzc2lvbnMgc2Vzc2lvbnM9e3Nlc3Npb25zfS8+IDogbnVsbCB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgU3BlYWtlcjsiXSwibmFtZXMiOlsiU2Vzc2lvbiIsInNlc3Npb24iLCJ0aXRsZSIsInJvb20iLCJzcGFuIiwiY2xhc3NOYW1lIiwic3Ryb25nIiwibmFtZSIsIlNlc3Npb25zIiwic2Vzc2lvbnMiLCJkaXYiLCJTcGVha2VySW1hZ2UiLCJpZCIsImZpcnN0IiwibGFzdCIsImltZyIsInNyYyIsIndpZHRoIiwiYWx0IiwiU3BlYWtlckZhdm9yaXRlIiwiZmF2b3JpdGUiLCJvbmZhdm9yaXRlVG9nZ2xlIiwiY29uc29sZSIsImxvZyIsIm9uQ2xpY2siLCJpIiwiU3BlYWtlckluZm8iLCJiaW8iLCJjb21wYW55IiwidHdpdHRlckhhbmRsZSIsImgzIiwicCIsImg1IiwiaDYiLCJTcGVha2VyIiwic3BlYWtlciIsInNob3dTZXNzaW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Speaker.js\n"));

/***/ })

});