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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/card */ \"./src/modules/card.js\");\n/* harmony import */ var _modules_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/category */ \"./src/modules/category.js\");\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/load */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_renderCounter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/renderCounter */ \"./src/modules/renderCounter.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_card__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_load__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_search__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_category__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_renderCounter__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\n\n//# sourceURL=webpack://ozon-maket/./src/index.js?");

/***/ }),

/***/ "./src/modules/card.js":
/*!*****************************!*\
  !*** ./src/modules/card.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _postDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postDate */ \"./src/modules/postDate.js\");\n/* harmony import */ var _renderCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderCard */ \"./src/modules/renderCard.js\");\n/* harmony import */ var _renderCounter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderCounter */ \"./src/modules/renderCounter.js\");\n\r\n\r\n\r\nconst cart = () => {\r\n  let openModal = document.getElementById(\"cart\");\r\n  let counter = openModal.querySelector(\".counter\");\r\n  let modal = document.querySelector(\".cart\");\r\n  let cartClose = modal.querySelector(\".cart-close\");\r\n  let cartConfirm = modal.querySelector(\".cart-confirm\");\r\n  let goodsBtn = document.querySelector(\".goods\");\r\n  let cartWrapper = document.querySelector(\".cart-wrapper\");\r\n  let cartTotal = document.querySelector(\".cart-total>span\");\r\n\r\n  openModal.addEventListener(\"click\", () => {\r\n    modal.style.display = \"flex\";\r\n    document.body.classList.add('locked')\r\n    const card = localStorage.getItem(\"card\")\r\n      ? JSON.parse(localStorage.getItem(\"card\"))\r\n      : [];\r\n\r\n    (0,_renderCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(card);\r\n    cartTotal.innerHTML = card.reduce((res, elem) => {\r\n      return res + elem.price;\r\n    }, 0);\r\n  });\r\n\r\n  cartClose.addEventListener(\"click\", () => {\r\n    modal.style.display = \"\";\r\n    document.body.classList.remove('locked')\r\n  });\r\n\r\n  goodsBtn.addEventListener(\"click\", (e) => {\r\n    if (e.target.classList.contains(\"btn-primary\")) {\r\n      const cardId = e.target.closest(\".card\").dataset.key;\r\n      const goods = JSON.parse(localStorage.getItem(\"goods\"));\r\n      const card = localStorage.getItem(\"card\")\r\n        ? JSON.parse(localStorage.getItem(\"card\"))\r\n        : [];\r\n      \r\n      const goodsItem = goods.find((elem) => {\r\n        return elem.id == cardId;\r\n      });\r\n      card.push(goodsItem);\r\n      localStorage.setItem(\"card\", JSON.stringify(card));\r\n      (0,_renderCounter__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    }\r\n  });\r\n  cartWrapper.addEventListener(\"click\", (event) => {\r\n    if (event.target.classList.contains(\"btn-primary\")) {\r\n      const card = localStorage.getItem(\"card\")\r\n        ? JSON.parse(localStorage.getItem(\"card\"))\r\n        : [];\r\n      const cardId = event.target.closest(\".card\").dataset.key;\r\n      const index = card.findIndex((elem) => {\r\n        return elem.id === +cardId;\r\n      });\r\n      card.splice(index, 1);\r\n      (0,_renderCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(card);\r\n      cartTotal.innerHTML = card.reduce((res, elem) => {\r\n        return res + elem.price;\r\n      }, 0);\r\n      localStorage.setItem(\"card\", JSON.stringify(card));\r\n      (0,_renderCounter__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    }\r\n  });\r\n\r\n  cartConfirm.addEventListener(\"click\", () => {\r\n    if (localStorage.getItem(\"card\")) {  \r\n      const card = localStorage.getItem(\"card\")\r\n      ? JSON.parse(localStorage.getItem(\"card\"))\r\n      : [];\r\n      (0,_postDate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(card).then(() => {\r\n        \r\n        localStorage.removeItem(\"card\");\r\n      });\r\n      (0,_renderCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([]);\r\n      cartTotal.innerHTML = 0;\r\n      counter.innerHTML = 0;\r\n      alert(\"Спасибо за покупку =)\")\r\n      modal.style.display = \"\";\r\n      document.body.classList.remove('locked')\r\n    }else {\r\n      modal.style.display = \"\";\r\n      alert(\"Добавьте товар!\")}\r\n      document.body.classList.remove('locked')\r\n  })\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\r\n\n\n//# sourceURL=webpack://ozon-maket/./src/modules/card.js?");

/***/ }),

/***/ "./src/modules/category.js":
/*!*********************************!*\
  !*** ./src/modules/category.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst category = () => {\r\n  let catalogButton = document.querySelector(\".catalog-button\");\r\n  let catalog = document.querySelector(\".catalog\");\r\n  let isOpen = false;\r\n  catalogButton.addEventListener(\"click\", () => {\r\n    isOpen = !isOpen;\r\n    isOpen ? (catalog.style.display = \"flex\") : (catalog.style.display = \"\");\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (category);\r\n\n\n//# sourceURL=webpack://ozon-maket/./src/modules/category.js?");

/***/ }),

/***/ "./src/modules/filter.js":
/*!*******************************!*\
  !*** ./src/modules/filter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchFilter\": () => (/* binding */ searchFilter),\n/* harmony export */   \"catalogFilter\": () => (/* binding */ catalogFilter),\n/* harmony export */   \"priceFilter\": () => (/* binding */ priceFilter),\n/* harmony export */   \"hotSaleFilter\": () => (/* binding */ hotSaleFilter)\n/* harmony export */ });\nconst searchFilter = (data, value) => {\r\n  return data.filter((elem) => {\r\n    return elem.title.toLowerCase().includes(value.toLowerCase());\r\n  });\r\n};\r\nconst catalogFilter = (data, value) => {\r\n  return data.filter((elem) => {\r\n    return elem.category.includes(value);\r\n  });\r\n};\r\nconst priceFilter = (data, min, max) => {\r\n  return data.filter((elem) => {\r\n    if (min == \"\" && max == \"\") {\r\n      return elem;\r\n    } else if (min != \"\" && max == \"\") {\r\n      return elem.price > min;\r\n    } else if (min == \"\" && max != \"\") {\r\n      return elem.price < max;\r\n    } else if (min != \"\" && max != \"\") {\r\n      return elem.price > min && elem.price < max;\r\n    }\r\n  });\r\n};\r\nconst hotSaleFilter = (data, value) => {\r\n  return data.filter((elem) => {\r\n    if (value) {\r\n      return elem.sale === true;\r\n    } else {\r\n      return elem;\r\n    }\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://ozon-maket/./src/modules/filter.js?");

/***/ }),

/***/ "./src/modules/getDate.js":
/*!********************************!*\
  !*** ./src/modules/getDate.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getDate = () => {\r\n  let db=[\r\n      {\r\n        \"id\": 1,\r\n        \"title\": \"Игровая приставка Sony PlayStation 3 Super Slim\",\r\n        \"price\": 16499,\r\n        \"sale\": true,\r\n        \"img\": \"https://cdn1.ozone.ru/multimedia/c400/1027495663.jpg\",\r\n        \"hoverImg\": \"https://cdn1.ozone.ru/multimedia/c400/1028469540.jpg\",\r\n        \"category\": \"Игровая приставка\"\r\n      },\r\n      {\r\n        \"id\": 2,\r\n        \"title\": \"Игровая приставка Xbox One X\",\r\n        \"price\": 39990,\r\n        \"sale\": false,\r\n        \"img\": \"https://cdn1.ozone.ru/multimedia/c400/1024358491.jpg\",\r\n        \"category\": \"Игровая приставка\"\r\n      },\r\n      {\r\n        \"id\": 3,\r\n        \"title\": \"Игровая приставка Xbox One S\",\r\n        \"price\": 23411,\r\n        \"sale\": true,\r\n        \"img\": \"https://cdn1.ozone.ru/multimedia/c400/1024822131.jpg\",\r\n        \"hoverImg\": \"https://cdn1.ozone.ru/multimedia/c400/1024822128.jpg\",\r\n        \"category\": \"Игровая приставка\"\r\n      },\r\n      {\r\n        \"id\": 4,\r\n        \"title\": \"Игровая приставка Nintendo Switch\",\r\n        \"price\": 24751,\r\n        \"sale\": false,\r\n        \"img\": \"https://cdn1.ozone.ru/multimedia/c400/1021386685.jpg\",\r\n        \"hoverImg\": \"https://cdn1.ozone.ru/multimedia/c400/1026072683.jpg\",\r\n        \"category\": \"Игровая приставка\"\r\n      },\r\n      {\r\n        \"id\": 5,\r\n        \"title\": \"Игровая приставка Sega Retro Genesis HD\",\r\n        \"price\": 3624,\r\n        \"sale\": true,\r\n        \"img\": \"https://cdn1.ozone.ru/multimedia/c400/1024928305.jpg\",\r\n        \"hoverImg\": \"https://cdn1.ozone.ru/multimedia/c400/1024928306.jpg\",\r\n        \"category\": \"Игровая приставка\"\r\n      },\r\n      {\r\n        \"id\": 6,\r\n        \"title\": \"Игровая приставка Dendy Junior\",\r\n        \"price\": 1551,\r\n        \"sale\": true,\r\n        \"img\": \"https://cdn1.ozone.ru/multimedia/c400/1021877092.jpg\",\r\n        \"hoverImg\": \"https://cdn1.ozone.ru/multimedia/c400/1021877092.jpg\",\r\n        \"category\": \"Игровая приставка\"\r\n      },\r\n      {\r\n        \"id\": 7,\r\n        \"title\": \"Игровая приставка Sony PlayStation Classic\",\r\n        \"price\": 10445,\r\n        \"sale\": false,\r\n        \"img\": \"https://cdn1.ozone.ru/multimedia/c400/1025222877.jpg\",\r\n        \"hoverImg\": \"https://cdn1.ozone.ru/multimedia/c400/102538227.jpg\",\r\n        \"category\": \"Игровая приставка\"\r\n      },\r\n      {\r\n        \"id\": 8,\r\n        \"title\": \"Клавиатура Logitech Wireless Keyboard K360\",\r\n        \"price\": 2390,\r\n        \"sale\": false,\r\n        \"img\": \"https://cdn1.ozone.ru/multimedia/c400/1015518726.jpg\",\r\n        \"hoverImg\": \"https://cdn1.ozone.ru/multimedia/c400/102518725.jpg\",\r\n        \"category\": \"Периферия для ПК\"\r\n      },\r\n      {\r\n        \"id\": 9,\r\n        \"title\": \"Клавиатура Defender Element HB-195\",\r\n        \"price\": 566,\r\n        \"sale\": true,\r\n        \"img\": \"https://cdn1.ozone.ru/multimedia/c400/1028488609.jpg\",\r\n        \"hoverImg\": \"https://cdn1.ozone.ru/multimedia/c400/1028488611.jpg\",\r\n        \"category\": \"Периферия для ПК\"\r\n      },\r\n      {\r\n        \"id\": 10,\r\n        \"title\": \"Игровая клавиатура Steelseries Apex M750- RU\",\r\n        \"price\": 12848,\r\n        \"sale\": true,\r\n        \"img\": \"https://cdn1.ozone.ru/multimedia/c400/1027006299.jpg\",\r\n        \"hoverImg\": \"https://cdn1.ozone.ru/multimedia/c400/1027006301.jpg\",\r\n        \"category\": \"Периферия для ПК\"\r\n      },\r\n      {\r\n        \"id\": 11,\r\n        \"title\": \"Мышь + коврик A4Tech Bloody V7M+B-071\",\r\n        \"price\": 1649,\r\n        \"sale\": false,\r\n        \"img\": \"https://cdn1.ozone.ru/multimedia/c400/1026202934.jpg\",\r\n        \"hoverImg\": \"https://cdn1.ozone.ru/multimedia/c400/1026202933.jpg\",\r\n        \"category\": \"Периферия для ПК\"\r\n      },\r\n      {\r\n        \"id\": 12,\r\n        \"title\": \"Мышь Trust Varo\",\r\n        \"price\": 1097,\r\n        \"sale\": true,\r\n        \"img\": \"https://cdn1.ozone.ru/multimedia/c400/1025117257.jpg\",\r\n        \"hoverImg\": \"https://cdn1.ozone.ru/multimedia/c400/1025117012.jpg\",\r\n        \"category\": \"Периферия для ПК\"\r\n      },\r\n      {\r\n        \"id\": 13,\r\n        \"title\": \"Мышь Genius DX-120\",\r\n        \"price\": 350,\r\n        \"sale\": false,\r\n        \"img\": \"https://cdn1.ozone.ru/multimedia/c400/1014472326.jpg\",\r\n        \"hoverImg\": \"https://cdn1.ozone.ru/multimedia/c400/1014472325.jpg\",\r\n        \"category\": \"Периферия для ПК\"\r\n      },\r\n      {\r\n        \"id\": 14,\r\n        \"title\": \"Коврик для мыши Orico MPA9040\",\r\n        \"price\": 1279,\r\n        \"sale\": true,\r\n        \"img\": \"https://cdn1.ozone.ru/multimedia/c400/1026748248.jpg\",\r\n        \"hoverImg\": \"https://cdn1.ozone.ru/multimedia/c400/1026748250.jpg\",\r\n        \"category\": \"Периферия для ПК\"\r\n      },\r\n      {\r\n        \"id\": 15,\r\n        \"title\": \"Коврик для мыши Trust GXT 760 Glide RGB\",\r\n        \"price\": 4959,\r\n        \"sale\": false,\r\n        \"img\": \"https://cdn1.ozone.ru/multimedia/c400/1025053907.jpg\",\r\n        \"category\": \"Периферия для ПК\"\r\n      },\r\n      {\r\n        \"id\": 16,\r\n        \"title\": \"Метро: Исход\",\r\n        \"price\": 1479,\r\n        \"sale\": true,\r\n        \"img\": \"https://cdn1.ozone.ru/multimedia/c400/1026951535.jpg\",\r\n        \"category\": \"Игры и софт\"\r\n      },\r\n      {\r\n        \"id\": 17,\r\n        \"title\": \"Darksiders III. Коллекционное издание\",\r\n        \"price\": 3990,\r\n        \"sale\": false,\r\n        \"img\": \"https://cdn1.ozone.ru/multimedia/c400/1023840682.jpg\",\r\n        \"hoverImg\": \"https://cdn1.ozone.ru/multimedia/c400/1023849642.jpg\",\r\n        \"category\": \"Игры и софт\"\r\n      },\r\n      {\r\n        \"id\": 18,\r\n        \"title\": \"Mortal Kombat X\",\r\n        \"price\": 1076,\r\n        \"sale\": false,\r\n        \"img\": \"https://cdn1.ozone.ru/multimedia/c400/1011627377.jpg\",\r\n        \"category\": \"Игры и софт\"\r\n      },\r\n      {\r\n        \"id\": 19,\r\n        \"title\": \"Microsoft Windows 10 Home (32/64-bit)\",\r\n        \"price\": 9412,\r\n        \"sale\": false,\r\n        \"img\": \"https://cdn1.ozone.ru/multimedia/c400/1013975751.jpg\",\r\n        \"hoverImg\": \"https://cdn1.ozone.ru/multimedia/c400/1013975799.jpg\",\r\n        \"category\": \"Игры и софт\"\r\n      },\r\n      {\r\n        \"id\": 20,\r\n        \"title\": \"1С:Предприятие 8.3. Версия для обучения программированию\",\r\n        \"price\": 560,\r\n        \"sale\": true,\r\n        \"img\": \"https://cdn1.ozone.ru/multimedia/c400/1015773076.jpg\",\r\n        \"category\": \"Игры и софт\"\r\n      },\r\n      {\r\n        \"id\": 21,\r\n        \"title\": \"ABBYY FotoTranslate\",\r\n        \"price\": 805,\r\n        \"sale\": false,\r\n        \"img\": \"https://cdn1.ozone.ru/multimedia/c400/1001559725.jpg\",\r\n        \"category\": \"Игры и софт\"\r\n      },\r\n      {\r\n        \"id\": 22,\r\n        \"title\": \"Destiny (Xbox 360)\",\r\n        \"price\": 723,\r\n        \"sale\": true,\r\n        \"img\": \"https://cdn1.ozone.ru/multimedia/c400/1021419099.jpg\",\r\n        \"category\": \"Игры и софт\"\r\n      },\r\n      {\r\n        \"id\": 23,\r\n        \"title\": \"Игра Onrush (PS4 Sony)\",\r\n        \"price\": 1794,\r\n        \"sale\": true,\r\n        \"img\": \"https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg\",\r\n        \"category\": \"Игры и софт\"\r\n      }\r\n    ]\r\n  \r\n  return db\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDate);\r\n\n\n//# sourceURL=webpack://ozon-maket/./src/modules/getDate.js?");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDate */ \"./src/modules/getDate.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n\r\n\r\n\r\n// const load = () => {\r\n//   getDate().then((res) => {\r\n//     return renderGoods(res);\r\n//   });\r\n// };\r\nconst load=()=>{\r\n  \r\n    (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_getDate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])())\r\n \r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\r\n\n\n//# sourceURL=webpack://ozon-maket/./src/modules/load.js?");

/***/ }),

/***/ "./src/modules/postDate.js":
/*!*********************************!*\
  !*** ./src/modules/postDate.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst postDate = (data) => {\r\n  return fetch(\"https://jsonplaceholder.typicode.com/posts\", {\r\n    method: \"POST\",\r\n    body: JSON.stringify(data),\r\n    headers: {\r\n      \"Content-type\": \"application/json; charset=UTF-8\",\r\n    },\r\n  }).then((response) =>\r\n  {\r\n    if (response.ok) {\r\n      \r\n      response.json()\r\n    }else throw new Error(\"Произошла ошибка =(\")\r\n  }\r\n   ).catch(error=> alert(error))\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postDate);\r\n\n\n//# sourceURL=webpack://ozon-maket/./src/modules/postDate.js?");

/***/ }),

/***/ "./src/modules/renderCard.js":
/*!***********************************!*\
  !*** ./src/modules/renderCard.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet renderCard = (data) => {\r\n  let cartWrapper = document.querySelector(\".cart-wrapper\");\r\n  cartWrapper.innerHTML = \"\";\r\n  if (data.length === 0) {\r\n    cartWrapper.insertAdjacentHTML(\r\n      \"beforeend\",\r\n      '<div id=\"cart-empty\">Ваша корзина пока пуста</div>'\r\n    );\r\n  } else {\r\n    data.forEach((element) => {\r\n      cartWrapper.insertAdjacentHTML(\r\n        \"beforeend\",\r\n        `\r\n        <div class=\"card\" data-key=${element.id}>\r\n          <div class=\"card-sale\">${element.sale ? \"🔥Hot Sale🔥\" : \"\"}</div>\r\n          <div class=\"card-img-wrapper\">\r\n            <span\r\n              class=\"card-img-top\"\r\n              style=\"\r\n                background-image: url('${element.img}');\r\n              \"\r\n            ></span>\r\n          </div>\r\n          <div class=\"card-body justify-content-between\">\r\n            <div class=\"card-price\">${element.price} ₽</div>\r\n            <h5 class=\"card-title\">${element.title}</h5>\r\n            <button class=\"btn btn-primary\">Удалить</button>\r\n          </div>\r\n        </div>\r\n      `\r\n      );\r\n    });\r\n  }\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCard);\r\n\n\n//# sourceURL=webpack://ozon-maket/./src/modules/renderCard.js?");

/***/ }),

/***/ "./src/modules/renderCounter.js":
/*!**************************************!*\
  !*** ./src/modules/renderCounter.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderCounter = () => {\r\n  let counter = document.querySelector(\".counter\");\r\n  const card = localStorage.getItem(\"card\")\r\n    ? JSON.parse(localStorage.getItem(\"card\"))\r\n    : [];\r\n  let length = card.length;\r\n  counter.innerHTML = length;\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCounter);\r\n\n\n//# sourceURL=webpack://ozon-maket/./src/modules/renderCounter.js?");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet renderGoods = (data) => {\r\n  localStorage.setItem(\"goods\", JSON.stringify(data));\r\n  let rowNoGuttersGoods = document.querySelector(\".goods\");\r\n  rowNoGuttersGoods.innerHTML = \"\";\r\n  data.forEach((element) => {\r\n    rowNoGuttersGoods.insertAdjacentHTML(\r\n      \"beforeend\",\r\n      `<div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\r\n      <div class=\"card\" data-key=${element.id}>\r\n        <div class=\"card-sale\">${element.sale ? \"🔥Hot Sale🔥\" : \"\"}</div>\r\n        <div class=\"card-img-wrapper\">\r\n          <span\r\n            class=\"card-img-top\"\r\n            style=\"\r\n              background-image: url('${element.img}');\r\n            \"\r\n          ></span>\r\n        </div>\r\n        <div class=\"card-body justify-content-between\">\r\n          <div class=\"card-price\">${element.price} ₽</div>\r\n          <h5 class=\"card-title\">${element.title}</h5>\r\n          <button class=\"btn btn-primary\">В корзину</button>\r\n        </div>\r\n      </div>\r\n    </div>`\r\n    );\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\r\n\n\n//# sourceURL=webpack://ozon-maket/./src/modules/renderGoods.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDate */ \"./src/modules/getDate.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter */ \"./src/modules/filter.js\");\n\r\n\r\n\r\nconst search = () => {\r\n  let searchWrapperInput = document.querySelector(\".search-wrapper_input\");\r\n  let catalog = document.querySelector(\".catalog\");\r\n  let catalogList = catalog.querySelector(\"ul\");\r\n  let min = document.querySelector(\"#min\");\r\n  let max = document.querySelector(\"#max\");\r\n  const discountCheckbox = document.querySelector(\"#discount-checkbox\");\r\n  const filterCheckCheckmark = document.querySelector(\r\n    \".filter-check_checkmark\"\r\n  );\r\n  searchWrapperInput.addEventListener(\"input\", (event) => {\r\n    const value = event.target.value;\r\n    (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\r\n      (0,_filter__WEBPACK_IMPORTED_MODULE_2__.searchFilter)((0,_filter__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)((0,_getDate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), discountCheckbox.checked), value)\r\n    )\r\n    // getDate().then((date) =>\r\n    //   renderGoods(\r\n    //     searchFilter(hotSaleFilter(date, discountCheckbox.checked), value)\r\n    //   )\r\n    // );\r\n  });\r\n\r\n  catalogList.addEventListener(\"click\", (e) => {\r\n    let value = e.target;\r\n    if (value.closest(\"li\")) {\r\n      (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\r\n        (0,_filter__WEBPACK_IMPORTED_MODULE_2__.catalogFilter)(\r\n          (0,_filter__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)((0,_getDate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), discountCheckbox.checked),\r\n          value.innerHTML\r\n        )\r\n      )\r\n      // getDate().then((date) =>\r\n      // renderGoods(\r\n      //   catalogFilter(\r\n      //     hotSaleFilter(data, discountCheckbox.checked),\r\n      //     value.innerHTML\r\n      //   )\r\n      // )\r\n      // );\r\n    }\r\n  });\r\n\r\n  min.addEventListener(\"input\", () => {\r\n    (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\r\n      (0,_filter__WEBPACK_IMPORTED_MODULE_2__.priceFilter)(\r\n        (0,_filter__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)((0,_getDate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), discountCheckbox.checked),\r\n        +min.value,\r\n        +max.value\r\n      )\r\n    )\r\n    // getDate().then((data) =>\r\n    //   renderGoods(\r\n    //     priceFilter(\r\n    //       hotSaleFilter(data, discountCheckbox.checked),\r\n    //       +min.value,\r\n    //       +max.value\r\n    //     )\r\n    //   )\r\n    // );\r\n  });\r\n  max.addEventListener(\"input\", () => {\r\n    (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\r\n      (0,_filter__WEBPACK_IMPORTED_MODULE_2__.priceFilter)(\r\n        (0,_filter__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)((0,_getDate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), discountCheckbox.checked),\r\n        +min.value,\r\n        +max.value\r\n      )\r\n    )\r\n    // getDate().then((data) =>\r\n    //   renderGoods(\r\n    //     priceFilter(\r\n    //       hotSaleFilter(data, discountCheckbox.checked),\r\n    //       +min.value,\r\n    //       +max.value\r\n    //     )\r\n    //   )\r\n    // );\r\n  });\r\n  discountCheckbox.addEventListener(\"change\", () => {\r\n    if (discountCheckbox.checked) {\r\n      filterCheckCheckmark.classList.add(\"checked\");\r\n    } else {\r\n      filterCheckCheckmark.classList.remove(\"checked\");\r\n    }\r\n    (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\r\n      (0,_filter__WEBPACK_IMPORTED_MODULE_2__.priceFilter)(\r\n        (0,_filter__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)((0,_getDate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), discountCheckbox.checked),\r\n        +min.value,\r\n        +max.value\r\n      )\r\n    )\r\n    // getDate().then((data) =>\r\n    //   renderGoods(\r\n    //     priceFilter(\r\n    //       hotSaleFilter(data, discountCheckbox.checked),\r\n    //       +min.value,\r\n    //       +max.value\r\n    //     )\r\n    //   )\r\n    // );\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\r\n\n\n//# sourceURL=webpack://ozon-maket/./src/modules/search.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;