"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PaginaInicial)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @skynexui/components */ \"@skynexui/components\");\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_skynexui_components__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n\n\n\n\n\n\nfunction GlobalStyle() {\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n        id: \"f88b33141452b0e6\",\n        children: \"*{margin:0;\\npadding:0;\\nbox-sizing:border-box;\\nlist-style:none}\\nbody{font-family:'Open Sans', sans-serif}\\nhtml, body, #__next{min-height:100vh;\\ndisplay:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-flex:1;\\n-ms-flex:1;\\nflex:1}\\n#__next{-webkit-flex:1;\\n-ms-flex:1;\\nflex:1}\\n#__next>*{-webkit-flex:1;\\n-ms-flex:1;\\nflex:1}\"\n    }, void 0, false, void 0, this);\n}\nfunction Titulo(props) {\n    const Tag = props.tag || 'h1';\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tag, {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"5887376e8649f783\",\n                        [\n                            Tag,\n                            _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[\"000\"]\n                        ]\n                    ]\n                ]),\n                /*#__PURE__*/ children: props.children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\REACTJS\\\\aluracords-react\\\\pages\\\\index.js\",\n                lineNumber: 48,\n                columnNumber: 10\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"5887376e8649f783\",\n                dynamic: [\n                    Tag,\n                    _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[\"000\"]\n                ],\n                children: `${Tag}.__jsx-style-dynamic-selector{color:${_config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[\"000\"]};\nfont-size:24px;\nfont-weight:600}`\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true));\n}\n// // componente react\n// function HomePage() {\n//     return (\n//         <div >\n//             <GlobalStyle />\n//             <Titulo tag=\"h2\">Boas vindas de Volta !</Titulo>\n//             <h3>Discord  - Alura Mitrix</h3>\n//         </div>\n//     );\n// }\n// export default HomePage\nfunction PaginaInicial() {\n    const [username, setUsername] = react__WEBPACK_IMPORTED_MODULE_2___default().useState('valdirsillva');\n    const route = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    function handleChange(valorDigitado) {\n        console.log('Estou recebendo algo do input ');\n        // atualiza o valor quando o usuário digitar\n        setUsername(valorDigitado);\n    }\n    function handleSubmit() {\n        event.preventDefault();\n        route.push('/chat');\n    //  window.location.href = '/chat';\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyle, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\REACTJS\\\\aluracords-react\\\\pages\\\\index.js\",\n                lineNumber: 106,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                styleSheet: {\n                    display: 'flex',\n                    alignItems: 'center',\n                    justifyContent: 'center',\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[500],\n                    backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)',\n                    backgroundRepeat: 'no-repeat',\n                    backgroundSize: 'cover',\n                    backgroundBlendMode: 'multiply'\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                    styleSheet: {\n                        display: 'flex',\n                        alignItems: 'center',\n                        justifyContent: 'space-between',\n                        flexDirection: {\n                            xs: 'column',\n                            sm: 'row'\n                        },\n                        width: '100%',\n                        maxWidth: '700px',\n                        borderRadius: '5px',\n                        padding: '32px',\n                        margin: '16px',\n                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[700]\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                            as: \"form\",\n                            onSubmit: (event)=>handleSubmit(event.target.value)\n                            ,\n                            styleSheet: {\n                                display: 'flex',\n                                flexDirection: 'column',\n                                alignItems: 'center',\n                                justifyContent: 'center',\n                                width: {\n                                    xs: '100%',\n                                    sm: '50%'\n                                },\n                                textAlign: 'center',\n                                marginBottom: '32px'\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Titulo, {\n                                    tag: \"h2\",\n                                    children: \"Boas vindas de volta!\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\REACTJS\\\\aluracords-react\\\\pages\\\\index.js\",\n                                    lineNumber: 139,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                    variant: \"body3\",\n                                    styleSheet: {\n                                        marginBottom: '32px',\n                                        color: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[300]\n                                    },\n                                    children: _config_json__WEBPACK_IMPORTED_MODULE_5__.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\REACTJS\\\\aluracords-react\\\\pages\\\\index.js\",\n                                    lineNumber: 140,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                                    fullWidth: true,\n                                    textFieldColors: {\n                                        neutral: {\n                                            textColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[200],\n                                            mainColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[900],\n                                            mainColorHighlight: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[500],\n                                            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[800]\n                                        }\n                                    },\n                                    value: username,\n                                    onChange: (event)=>handleChange(event.target.value)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\REACTJS\\\\aluracords-react\\\\pages\\\\index.js\",\n                                    lineNumber: 150,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    type: \"submit\",\n                                    label: \"Entrar\",\n                                    fullWidth: true,\n                                    buttonColors: {\n                                        contrastColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[\"000\"],\n                                        mainColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[500],\n                                        mainColorLight: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[400],\n                                        mainColorStrong: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[600]\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\REACTJS\\\\aluracords-react\\\\pages\\\\index.js\",\n                                    lineNumber: 164,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\REACTJS\\\\aluracords-react\\\\pages\\\\index.js\",\n                            lineNumber: 131,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                            styleSheet: {\n                                display: 'flex',\n                                flexDirection: 'column',\n                                alignItems: 'center',\n                                maxWidth: '200px',\n                                padding: '16px',\n                                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[800],\n                                border: '1px solid',\n                                borderColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[999],\n                                borderRadius: '10px',\n                                flex: 1,\n                                minHeight: '240px'\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_4__.Image, {\n                                    styleSheet: {\n                                        borderRadius: '50%',\n                                        marginBottom: '16px'\n                                    },\n                                    src: `https://github.com/${username}.png`\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\REACTJS\\\\aluracords-react\\\\pages\\\\index.js\",\n                                    lineNumber: 195,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                    variant: \"body4\",\n                                    styleSheet: {\n                                        color: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[200],\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[900],\n                                        padding: '3px 10px',\n                                        borderRadius: '1000px'\n                                    },\n                                    children: username\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\REACTJS\\\\aluracords-react\\\\pages\\\\index.js\",\n                                    lineNumber: 202,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\REACTJS\\\\aluracords-react\\\\pages\\\\index.js\",\n                            lineNumber: 180,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\REACTJS\\\\aluracords-react\\\\pages\\\\index.js\",\n                    lineNumber: 115,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\REACTJS\\\\aluracords-react\\\\pages\\\\index.js\",\n                lineNumber: 107,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxDQUFNO2dDQUNmWixlQUFlLEVBQUUzQixvRUFBb0M7Z0NBQ3JEZ0UsTUFBTSxFQUFFLENBQVc7Z0NBQ25CQyxXQUFXLEVBQUVqRSxvRUFBb0M7Z0NBQ2pEc0MsWUFBWSxFQUFFLENBQU07Z0NBQ3BCNEIsSUFBSSxFQUFFLENBQUM7Z0NBQ1BDLFNBQVMsRUFBRSxDQUFPOzRCQUNwQixDQUFDOzs0R0FFQXBFLHVEQUFLO29DQUNKd0IsVUFBVSxFQUFFLENBQUM7d0NBQ1hlLFlBQVksRUFBRSxDQUFLO3dDQUNuQlMsWUFBWSxFQUFFLENBQU07b0NBQ3RCLENBQUM7b0NBQ0RxQixHQUFHLEdBQUcsbUJBQW1CLEVBQUV6RCxRQUFRLENBQUMsSUFBSTs7Ozs7OzRHQUV6Q2Qsc0RBQUk7b0NBQ0htRCxPQUFPLEVBQUMsQ0FBTztvQ0FDZnpCLFVBQVUsRUFBRSxDQUFDO3dDQUNYMEIsS0FBSyxFQUFFakQsb0VBQW9DO3dDQUMzQzJCLGVBQWUsRUFBRTNCLG9FQUFvQzt3Q0FDckR1QyxPQUFPLEVBQUUsQ0FBVTt3Q0FDbkJELFlBQVksRUFBRSxDQUFRO29DQUN4QixDQUFDOzhDQUVBM0IsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF2QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWx1cmFjb3Jkcy1yZWFjdC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgQm94LCBCdXR0b24sIFRleHQsIFRleHRGaWVsZCwgSW1hZ2UgfSBmcm9tICdAc2t5bmV4dWkvY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gJy4uL2NvbmZpZy5qc29uJztcclxuXHJcbmZ1bmN0aW9uIEdsb2JhbFN0eWxlKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgXHJcbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgICBcclxuICAgICAgICAqIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qIEFwcCBmaXQgSGVpZ2h0ICovIFxyXG4gICAgICAgIGh0bWwsIGJvZHksICNfX25leHQge1xyXG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleDogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNfX25leHQge1xyXG4gICAgICAgICAgZmxleDogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgI19fbmV4dCA+ICoge1xyXG4gICAgICAgICAgZmxleDogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogLi9BcHAgZml0IEhlaWdodCAqLyBcclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gVGl0dWxvKHByb3BzKSB7XHJcblxyXG4gICAgY29uc3QgVGFnID0gcHJvcHMudGFnIHx8ICdoMSc7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICA8VGFnPntwcm9wcy5jaGlsZHJlbn08L1RhZz4gICAgXHJcblxyXG4gICAgICAgICA8c3R5bGUganN4PntgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAke1RhZ30ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICAke2FwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbJzAwMCddfTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz4gICBcclxuICAgICk7XHJcbn1cclxuXHJcblxyXG4vLyAvLyBjb21wb25lbnRlIHJlYWN0XHJcbi8vIGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8ZGl2ID5cclxuLy8gICAgICAgICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcblxyXG4vLyAgICAgICAgICAgICA8VGl0dWxvIHRhZz1cImgyXCI+Qm9hcyB2aW5kYXMgZGUgVm9sdGEgITwvVGl0dWxvPlxyXG4vLyAgICAgICAgICAgICA8aDM+RGlzY29yZCAgLSBBbHVyYSBNaXRyaXg8L2gzPlxyXG4vLyAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgKTtcclxuLy8gfVxyXG5cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2luYUluaWNpYWwoKSB7XHJcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IFJlYWN0LnVzZVN0YXRlKCd2YWxkaXJzaWxsdmEnKTtcclxuXHJcbiAgICBjb25zdCByb3V0ZSA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSh2YWxvckRpZ2l0YWRvKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdFc3RvdSByZWNlYmVuZG8gYWxnbyBkbyBpbnB1dCAnKTtcclxuXHJcbiAgICAgIC8vIGF0dWFsaXphIG8gdmFsb3IgcXVhbmRvIG8gdXN1w6FyaW8gZGlnaXRhclxyXG4gICAgICBzZXRVc2VybmFtZSh2YWxvckRpZ2l0YWRvKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoKSB7XHJcbiAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgIHJvdXRlLnB1c2goJy9jaGF0Jyk7XHJcblxyXG4gICAgICAvLyAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2NoYXQnO1xyXG4gICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxHbG9iYWxTdHlsZSAvPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoaHR0cHM6Ly92aXJ0dWFsYmFja2dyb3VuZHMuc2l0ZS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wOC90aGUtbWF0cml4LWRpZ2l0YWwtcmFpbi5qcGcpJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsIGJhY2tncm91bmRTaXplOiAnY292ZXInLCBiYWNrZ3JvdW5kQmxlbmRNb2RlOiAnbXVsdGlwbHknLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICB4czogJ2NvbHVtbicsXHJcbiAgICAgICAgICAgICAgICBzbTogJ3JvdycsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLCBtYXhXaWR0aDogJzcwMHB4JyxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLCBwYWRkaW5nOiAnMzJweCcsIG1hcmdpbjogJzE2cHgnLFxyXG4gICAgICAgICAgICAgIGJveFNoYWRvdzogJzAgMnB4IDEwcHggMCByZ2IoMCAwIDAgLyAyMCUpJyxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNzAwXSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgey8qIEZvcm11bMOhcmlvICovfVxyXG4gICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgYXM9XCJmb3JtXCJcclxuICAgICAgICAgICAgICBvblN1Ym1pdD17ZXZlbnQgPT4gaGFuZGxlU3VibWl0KGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB7IHhzOiAnMTAwJScsIHNtOiAnNTAlJyB9LCB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Cb3R0b206ICczMnB4JyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFRpdHVsbyB0YWc9XCJoMlwiPkJvYXMgdmluZGFzIGRlIHZvbHRhITwvVGl0dWxvPlxyXG4gICAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJib2R5M1wiIHN0eWxlU2hlZXQ9e3sgbWFyZ2luQm90dG9tOiAnMzJweCcsIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzMwMF0gfX0+XHJcbiAgICAgICAgICAgICAgICB7YXBwQ29uZmlnLm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9UZXh0PlxyXG5cclxuICAgICAgICAgICAgICB7LyogPGlucHV0IFxyXG4gICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVDaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgLz4gKi99XHJcbiAgXHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICB0ZXh0RmllbGRDb2xvcnM9e3tcclxuICAgICAgICAgICAgICAgICAgbmV1dHJhbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1syMDBdLFxyXG4gICAgICAgICAgICAgICAgICAgIG1haW5Db2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s5MDBdLFxyXG4gICAgICAgICAgICAgICAgICAgIG1haW5Db2xvckhpZ2hsaWdodDogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzUwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzgwMF0sXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICAgICAgbGFiZWw9J0VudHJhcidcclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uQ29sb3JzPXt7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRyYXN0Q29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCIwMDBcIl0sXHJcbiAgICAgICAgICAgICAgICAgIG1haW5Db2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzUwMF0sXHJcbiAgICAgICAgICAgICAgICAgIG1haW5Db2xvckxpZ2h0OiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNDAwXSxcclxuICAgICAgICAgICAgICAgICAgbWFpbkNvbG9yU3Ryb25nOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNjAwXSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIHsvKiBGb3JtdWzDoXJpbyAqL31cclxuICBcclxuICBcclxuICAgICAgICAgICAgey8qIFBob3RvIEFyZWEgKi99XHJcbiAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcyMDBweCcsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMTZweCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCcsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s5OTldLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICBmbGV4OiAxLFxyXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnMjQwcHgnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTZweCcsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7dXNlcm5hbWV9LnBuZ2B9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHk0XCJcclxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMjAwXSxcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzkwMF0sXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICczcHggMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwMDBweCdcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3VzZXJuYW1lfVxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIHsvKiBQaG90byBBcmVhICovfVxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbiAgIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUm91dGVyIiwiQm94IiwiQnV0dG9uIiwiVGV4dCIsIlRleHRGaWVsZCIsIkltYWdlIiwiYXBwQ29uZmlnIiwiR2xvYmFsU3R5bGUiLCJUaXR1bG8iLCJwcm9wcyIsIlRhZyIsInRhZyIsInRoZW1lIiwiY29sb3JzIiwibmV1dHJhbHMiLCJjaGlsZHJlbiIsIlBhZ2luYUluaWNpYWwiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwidXNlU3RhdGUiLCJyb3V0ZSIsImhhbmRsZUNoYW5nZSIsInZhbG9yRGlnaXRhZG8iLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJzdHlsZVNoZWV0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmRDb2xvciIsInByaW1hcnkiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kQmxlbmRNb2RlIiwiZmxleERpcmVjdGlvbiIsInhzIiwic20iLCJ3aWR0aCIsIm1heFdpZHRoIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsIm1hcmdpbiIsImJveFNoYWRvdyIsImFzIiwib25TdWJtaXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRleHRBbGlnbiIsIm1hcmdpbkJvdHRvbSIsInZhcmlhbnQiLCJjb2xvciIsIm5hbWUiLCJmdWxsV2lkdGgiLCJ0ZXh0RmllbGRDb2xvcnMiLCJuZXV0cmFsIiwidGV4dENvbG9yIiwibWFpbkNvbG9yIiwibWFpbkNvbG9ySGlnaGxpZ2h0Iiwib25DaGFuZ2UiLCJ0eXBlIiwibGFiZWwiLCJidXR0b25Db2xvcnMiLCJjb250cmFzdENvbG9yIiwibWFpbkNvbG9yTGlnaHQiLCJtYWluQ29sb3JTdHJvbmciLCJib3JkZXIiLCJib3JkZXJDb2xvciIsImZsZXgiLCJtaW5IZWlnaHQiLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@skynexui/components":
/*!***************************************!*\
  !*** external "@skynexui/components" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@skynexui/components");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Aluracord - Matrix (peas)","theme":{"colors":{"primary":{"100":"#C1EAC5","200":"#A3D9A5","300":"#7BC47F","400":"#57AE5B","500":"#3F9142","600":"#2F8132","700":"#207227","800":"#0E5814","900":"#05400A","050":"#E3F9E5"},"neutrals":{"100":"#E4E7EB","200":"#CBD2D9","300":"#9AA5B1","400":"#52667A","500":"#313D49","600":"#29333D","700":"#212931","800":"#181F25","900":"#101418","999":"#080A0C","000":"#FFFFFF","050":"#F5F7FA"}}},"stickers":["https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_1.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_2.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_3.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_4.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_5.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_6.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_7.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_8.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_9.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_10.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_11.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_12.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_13.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_14.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_15.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_16.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_17.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_18.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_19.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_20.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_21.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_22.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_23.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_24.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_25.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_26.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_27.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_28.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_29.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_30.png","http://2.bp.blogspot.com/-d21tffsTIQo/U_H9QjC69gI/AAAAAAAAKqM/wnvOyUr6a_I/s1600/Pikachu%2B2.gif","https://media1.giphy.com/media/BdghqxNFV4efm/200.gif","https://c.tenor.com/TKpmh4WFEsAAAAAC/alura-gaveta-filmes.gif","https://i.pinimg.com/originals/0b/1c/23/0b1c2307c83e1ebdeed72e41b9a058ad.gif","https://c.tenor.com/VylWt5lyjBoAAAAC/omg-yes.gif","https://i.pinimg.com/originals/96/34/c5/9634c520c9a3cd4e7f23190bb2c96500.gif"]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();