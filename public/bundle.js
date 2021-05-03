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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*  ****** LESSON  25*******
Run this first - npm run server
Run this after -
babel src/lessons/25.js --out-file=public/scripts/app.js --presets=env,react --watch

Saving and Loading the Count to/from localstorage using lifecycle methods


// */
// class Counter extends React.Component {
//   constructor(props) {
//     super(props);

//     this.add = this.add.bind(this);
//     this.minus = this.minus.bind(this);
//     this.reset = this.reset.bind(this);
//     this.state = {
//       count: 0,
//     };
//   }

//   componentDidMount() {
//     try {
//       const json = localStorage.getItem("count");

//       const count = parseInt(json, 10);

//       if (!isNaN(count)) {
//         this.setState(() => ({ count }));
//       }
//     } catch (error) {}
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.count !== this.state.count) {
//       localStorage.setItem("count", this.state.count);
//     }
//     console.log(prevState);
//   }

//   add() {
//     this.setState((prevState) => {
//       return {
//         count: prevState.count + 1,
//       };
//     });
//   }
//   minus() {
//     this.setState((prevState) => {
//       return {
//         count: prevState.count - 1,
//       };
//     });
//   }
//   reset() {
//     this.setState(() => {
//       return {
//         count: 0,
//       };
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h1>count: {this.state.count} </h1>
//         <button onClick={this.add}>+1</button>
//         <button onClick={this.minus}>-1</button>
//         <button onClick={this.reset}>reset</button>
//       </div>
//     );
//   }
// }
// const appRoot = document.getElementById("app");
// ReactDOM.render(<Counter />, appRoot);

console.log(11111111111);

/***/ })
/******/ ]);