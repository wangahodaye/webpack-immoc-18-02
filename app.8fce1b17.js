/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ReferenceError: [BABEL] D:\\学习\\webpack-imooc180104\\app.js: Unknown option: .targets. Check out http://babeljs.io/docs/usage/options/ for more information about options.\n    at buildUnknownError (D:\\学习\\webpack-imooc180104\\node_modules\\@babel\\core\\lib\\config\\validation\\options.js:85:11)\n    at D:\\学习\\webpack-imooc180104\\node_modules\\@babel\\core\\lib\\config\\validation\\options.js:71:57\n    at Array.forEach (native)\n    at validate (D:\\学习\\webpack-imooc180104\\node_modules\\@babel\\core\\lib\\config\\validation\\options.js:57:21)\n    at D:\\学习\\webpack-imooc180104\\node_modules\\@babel\\core\\lib\\config\\index.js:242:36\n    at cachedFunction (D:\\学习\\webpack-imooc180104\\node_modules\\@babel\\core\\lib\\config\\caching.js:40:17)\n    at loadPresetDescriptor (D:\\学习\\webpack-imooc180104\\node_modules\\@babel\\core\\lib\\config\\index.js:232:45)\n    at D:\\学习\\webpack-imooc180104\\node_modules\\@babel\\core\\lib\\config\\index.js:58:19\n    at Array.map (native)\n    at recurseDescriptors (D:\\学习\\webpack-imooc180104\\node_modules\\@babel\\core\\lib\\config\\index.js:56:36)\n    at loadConfig (D:\\学习\\webpack-imooc180104\\node_modules\\@babel\\core\\lib\\config\\index.js:99:7)\n    at transformSync (D:\\学习\\webpack-imooc180104\\node_modules\\@babel\\core\\lib\\transform-sync.js:13:36)\n    at Object.transform (D:\\学习\\webpack-imooc180104\\node_modules\\@babel\\core\\lib\\transform.js:20:65)\n    at transpile (D:\\学习\\webpack-imooc180104\\node_modules\\babel-loader\\lib\\index.js:55:20)\n    at Object.module.exports (D:\\学习\\webpack-imooc180104\\node_modules\\babel-loader\\lib\\index.js:179:20)");

/***/ })
/******/ ]);