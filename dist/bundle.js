/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst THREE = __importStar(__webpack_require__(/*! three */ \"./node_modules/three/build/three.cjs\"));\n//シーンを作成\nconst scene = new THREE.Scene();\n//レンダラを作成して、DOM要素をHTMLに追加\nconst renderer = new THREE.WebGLRenderer();\nrenderer.setSize(window.innerWidth, innerHeight);\ndocument.body.appendChild(renderer.domElement);\n//オブジェクトを作成\nconst camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);\ncamera.position.set(0, 15, 100);\ncamera.lookAt(0, 0, 0);\n//キューブの作成\nconst cubeGeometry = new THREE.BoxGeometry(1, 1, 1);\nconst cubeMaterial = new THREE.MeshStandardMaterial({ color: 0xcccccc });\nconst cube = new THREE.Mesh(cubeGeometry, cubeMaterial);\ncube.scale.set(8, 8, 8);\n//ライトの作成\nconst light = new THREE.DirectionalLight(0xeeeeee, 1);\nlight.position.set(50, 50, 100);\nconst light2 = new THREE.DirectionalLight(0xeeeeee, 1);\nlight.position.set(-50, -50, -100);\nscene.add(light);\nscene.add(light2);\nscene.add(cube);\n\n\n//# sourceURL=webpack://threejs_pixijs/./src/index.ts?");

/***/ }),

/***/ "./node_modules/three/build/three.cjs":
/*!********************************************!*\
  !*** ./node_modules/three/build/three.cjs ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;