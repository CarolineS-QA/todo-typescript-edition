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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var myString = \"This is my TypeScript App\";\r\nconsole.log(myString);\r\nvar json_data = JSON.parse(localStorage.getItem('json_data'));\r\nvar myList = document.getElementById(\"todo-list\");\r\n// checks if empty\r\nif (json_data) {\r\n    json_data.forEach(function (element) {\r\n        if (element) {\r\n            newTodo(element.title, element.id);\r\n        }\r\n    });\r\n}\r\nregisterEventListeners();\r\n// allows delete buttons to remove list items\r\nfunction registerEventListeners() {\r\n    var closeButtons = document.getElementsByClassName(\"delete\");\r\n    for (var i = 0; i < closeButtons.length; i++) {\r\n        closeButtons[i].addEventListener('click', deleteTodo, false);\r\n    }\r\n}\r\nfunction deleteTodo() {\r\n    var li = this.parentElement;\r\n    myList.removeChild(li);\r\n    var json_temp = JSON.parse(localStorage.getItem('json_data'));\r\n    delete json_temp[li.dataset.id];\r\n    localStorage.setItem('json_data', JSON.stringify(json_temp));\r\n}\r\n// for new todo form\r\nfunction newTodo(todoTitle, todoId) {\r\n    //if the todo is created rather than pulled from local storage...\r\n    if (!todoTitle && !todoId) {\r\n        // .value doesn't exist on type HTMLElement and won't compile? So I've type cast it to an input element\r\n        todoTitle = document.getElementById(\"todoTitle\").value;\r\n        todoId = storeTodoLocal(todoTitle);\r\n        console.log(todoTitle);\r\n    }\r\n    var listItem = document.createElement(\"li\");\r\n    // dataset.attribute allows addings of attiributes\r\n    listItem.dataset.id = todoId.toString();\r\n    listItem.appendChild(document.createTextNode(todoTitle));\r\n    var deleteLink = document.createElement(\"a\");\r\n    deleteLink.href = \"#\";\r\n    deleteLink.className = \"btn btn-sm btn-danger m-1 delete\";\r\n    deleteLink.appendChild(document.createTextNode(\"Delete\"));\r\n    listItem.appendChild(deleteLink);\r\n    myList.appendChild(listItem);\r\n    registerEventListeners();\r\n}\r\n//to store todos\r\nfunction storeTodoLocal(todoTitle, completed) {\r\n    // retrieve and parse existing JSON from localstorage\r\n    var json_temp = JSON.parse(localStorage.getItem('json_data'));\r\n    if (!json_temp) {\r\n        json_temp = [];\r\n    }\r\n    // creating a new todo ID based on length of existing localstorage array\r\n    var todoId = json_temp.length;\r\n    // add new todo object to JSON\r\n    json_temp.push({\r\n        \"id\": todoId,\r\n        \"title\": todoTitle,\r\n        \"completed\": false\r\n    });\r\n    // log updated JSON to console\r\n    console.log(json_temp);\r\n    console.log(completed);\r\n    // stringify updated JSON and store back in localStorage\r\n    localStorage.setItem('json_data', JSON.stringify(json_temp));\r\n    // return ID of new todo\r\n    return todoId;\r\n}\r\nfunction deleteAllTodos() {\r\n    if (confirm(\"Are you sure you want to delete all of your Todos?\")) {\r\n        localStorage.removeItem('json_data');\r\n        myList.innerHTML = '';\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ });