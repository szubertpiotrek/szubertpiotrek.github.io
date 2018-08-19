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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/functionalities.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/functionalities.js":
/*!*******************************!*\
  !*** ./js/functionalities.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(function () {

    var menu = $(".header__li");

    var headerMenu = $(".header__nav");

    var headerList = $(".header__list");

    var menuLink = $('.header__link');

    var menuBtn = $(".menu__btn--effect");

    var img = $(".gallery__img");

    var header = $("header");

    var mobileMedium = window.matchMedia("screen and (max-width: 1023px) and (min-width: 641px)");

    var mobileLarge = window.matchMedia("screen and (min-width: 1024px)");

    var mobileSmall = window.matchMedia("screen and (max-width: 640px)");

    var changeBtn = $(".section__post .container .row>div");

    var row = $(".section__post .container .row");

    var costsBoxes = $(".costs__box");

    var mainColor = "#27C7AB";

    var mainButton = document.querySelector(".main__button");

    var costsButton = document.querySelectorAll(".costs__button");

    var submitButton = document.querySelector(".contact__submited");

    var footerImg = $(".footer__img--item");

    var submenuList = $(".header__submenu--link");

    menuBtn.on("click", function (event) {
        event.preventDefault();
        headerMenu.removeClass("header__nav");
        headerList.removeClass("header__list");
        headerMenu.toggleClass("sidenav");

        headerMenu.toggleClass("invisible");
        menu.toggleClass("sidenavLi");
        menu.removeClass("header__li");

        $(".header").toggleClass("newMargin");
        $("section").toggleClass("shadow");
        $("footer").toggleClass("shadow");

        $("body").toggleClass("pageScroll");
    });

    menuBtn.on("touchstart", function (event) {
        event.preventDefault();
        headerMenu.removeClass("header__nav");
        headerList.removeClass("header__list");
        headerMenu.toggleClass("sidenav");

        headerMenu.toggleClass("invisible");
        menu.toggleClass("sidenavLi");
        menu.removeClass("header__li");

        $(".header").toggleClass("newMargin");
        $("section").toggleClass("shadow");
        $("footer").toggleClass("shadow");

        $("body").toggleClass("pageScroll");
    });

    menuLink.hover(function () {
        $(event.currentTarget).addClass('header__link--hover');
        $(event.currentTarget).find('.header__link--arrow').addClass('header__link--arrowChanged');
    }, function () {
        $(event.currentTarget).removeClass('header__link--hover');
        $(event.currentTarget).find('.header__link--arrow').removeClass('header__link--arrowChanged');
    });

    menuLink.on("touchstart", function () {
        $(event.currentTarget).addClass('header__link--hover');
        $(event.currentTarget).find('.header__link--arrow').addClass('header__link--arrowChanged');
    });
    menuLink.on("touchend", function () {
        $(event.currentTarget).removeClass('header__link--hover');
        $(event.currentTarget).find('.header__link--arrow').removeClass('header__link--arrowChanged');
    });

    menu.on("click", function () {
        event.preventDefault();
        $(event.currentTarget).find(".header__submenu").slideToggle();
        $(event.currentTarget).find('.header__link--arrow').toggleClass('rotation');
    });

    submenuList.hover(function () {
        $(event.currentTarget).addClass('header__submenu--link-hover');
    }, function () {
        $(event.currentTarget).removeClass('header__submenu--link-hover');
    });

    img.hover(function (event) {
        var underline = $(event.currentTarget).find('.gallery__underline');
        underline.removeClass("appearing");
        underline.addClass("disappearing");
    }, function (event) {
        var underline = $(event.currentTarget).find('.gallery__underline');
        underline.removeClass("disappearing");
        underline.addClass("appearing");
    });

    img.on("touchstart", function (event) {
        var underline = $(event.currentTarget).find('.gallery__underline');
        underline.removeClass("appearing");
        underline.addClass("disappearing");
    });
    img.on("touchend", function (event) {
        var underline = $(event.currentTarget).find('.gallery__underline');
        underline.removeClass("disappearing");
        underline.addClass("appearing");
    });

    var buttons = $(".main__sidebutton");

    var insideButtons = $(".main__insidebutton");

    var images = $(".section__main--img");

    var elementNumber = 0;

    var time = setInterval(function () {
        images.eq(elementNumber).removeClass("section__main--img-visible");
        elementNumber--;

        if (elementNumber === -1) {
            elementNumber = images.length - 1;
        }

        images.eq(elementNumber).addClass("section__main--img-visible");
    }, 4000);

    images.eq(elementNumber).addClass("section__main--img-visible");

    buttons.on("click", function (event) {
        event.preventDefault();
        images.eq(elementNumber).removeClass("section__main--img-visible");
        elementNumber--;

        if (elementNumber === -1) {
            elementNumber = images.length - 1;
        }

        images.eq(elementNumber).addClass("section__main--img-visible");

        clearInterval(time);
        time = setInterval(function () {
            images.eq(elementNumber).removeClass("section__main--img-visible");
            elementNumber--;

            if (elementNumber === -1) {
                elementNumber = images.length - 1;
            }

            images.eq(elementNumber).addClass("section__main--img-visible");
        }, 4000);
    });

    buttons.on("touchstart", function (event) {
        event.preventDefault();
        images.eq(elementNumber).removeClass("section__main--img-visible");
        elementNumber--;

        if (elementNumber === -1) {
            elementNumber = images.length - 1;
        }

        images.eq(elementNumber).addClass("section__main--img-visible");

        clearInterval(time);
        time = setInterval(function () {
            images.eq(elementNumber).removeClass("section__main--img-visible");
            elementNumber--;

            if (elementNumber === -1) {
                elementNumber = images.length - 1;
            }

            images.eq(elementNumber).addClass("section__main--img-visible");
        }, 4000);
    });

    insideButtons.on("click", function (event) {
        event.preventDefault();
        images.eq(elementNumber).removeClass("section__main--img-visible");
        elementNumber--;

        if (elementNumber === -1) {
            elementNumber = images.length - 1;
        }

        images.eq(elementNumber).addClass("section__main--img-visible");

        clearInterval(time);
        time = setInterval(function () {
            images.eq(elementNumber).removeClass("section__main--img-visible");
            elementNumber--;

            if (elementNumber === -1) {
                elementNumber = images.length - 1;
            }

            images.eq(elementNumber).addClass("section__main--img-visible");
        }, 4000);
    });

    insideButtons.on("touchstart", function (event) {
        event.preventDefault();
        images.eq(elementNumber).removeClass("section__main--img-visible");
        elementNumber--;

        if (elementNumber === -1) {
            elementNumber = images.length - 1;
        }

        images.eq(elementNumber).addClass("section__main--img-visible");

        clearInterval(time);
        time = setInterval(function () {
            images.eq(elementNumber).removeClass("section__main--img-visible");
            elementNumber--;

            if (elementNumber === -1) {
                elementNumber = images.length - 1;
            }

            images.eq(elementNumber).addClass("section__main--img-visible");
        }, 4000);
    });

    buttons.hover(function (event) {
        event.preventDefault();
        $(event.currentTarget).children().first().removeClass("main__sidebutton--effectOut");
        $(event.currentTarget).children().first().addClass("main__sidebutton--effectIn");
    }, function (event) {
        event.preventDefault();
        $(event.currentTarget).children().first().removeClass("main__sidebutton--effectIn");
        $(event.currentTarget).children().first().addClass("main__sidebutton--effectOut");
    });

    insideButtons.hover(function (event) {
        event.preventDefault();
        $(event.currentTarget).children().first().removeClass("main__sidebutton--effectOut");
        $(event.currentTarget).children().first().addClass("main__sidebutton--effectIn");
    }, function (event) {
        event.preventDefault();
        $(event.currentTarget).children().first().removeClass("main__sidebutton--effectIn");
        $(event.currentTarget).children().first().addClass("main__sidebutton--effectOut");
    });

    buttons.on("touchstart", function (event) {
        event.preventDefault();
        $(event.currentTarget).children().first().removeClass("main__sidebutton--effectOut");
        $(event.currentTarget).children().first().addClass("main__sidebutton--effectIn");
    });

    buttons.on("touchend", function (event) {
        event.preventDefault();
        $(event.currentTarget).children().first().removeClass("main__sidebutton--effectIn");
        $(event.currentTarget).children().first().addClass("main__sidebutton--effectOut");
    });

    insideButtons.on("touchstart", function (event) {
        event.preventDefault();
        $(event.currentTarget).children().first().removeClass("main__sidebutton--effectOut");
        $(event.currentTarget).children().first().addClass("main__sidebutton--effectIn");
    });

    insideButtons.on("touchend", function (event) {
        event.preventDefault();
        $(event.currentTarget).children().first().removeClass("main__sidebutton--effectIn");
        $(event.currentTarget).children().first().addClass("main__sidebutton--effectOut");
    });

    mobileMedium.addListener(function (mobile) {
        if (mobile.matches) {
            changeBtn.eq(0).children().first().removeClass("showButtons");
            changeBtn.eq(3).children().first().removeClass("showButtons");
            row.find(".main__insidebutton").addClass("show1");

            console.log(row.find(".main__sidebutton--a"));

            headerMenu.addClass("invisible");
            headerMenu.removeClass("sidenav");
            $("section").removeClass("shadow");
            $(".header").removeClass("newMargin");
            $("footer").removeClass("shadow");
            menu.removeClass("sidenavLi");
            $("body").removeClass("pageScroll");

            turnOff();
            menuOutsideTouch(true);
        }
    });

    mobileLarge.addListener(function (mobile) {
        if (mobile.matches) {
            changeBtn.eq(0).children().first().addClass("showButtons");
            changeBtn.eq(3).children().first().addClass("showButtons");
            row.find(".main__insidebutton").removeClass("show1");

            headerMenu.removeClass("invisible");
            headerMenu.removeClass("sidenav");

            menu.removeClass("sidenavLi");
            menu.addClass("header__li");

            $("section").removeClass("shadow");
            $(".header").removeClass("newMargin");
            $("footer").removeClass("shadow");

            headerMenu.addClass("header__nav");
            headerList.addClass("header__list");
            $("body").removeClass("pageScroll");

            menu.removeClass("sidenavLi");

            turnOn();
            menuOutsideTouch(false);
        }
    });

    mobileSmall.addListener(function (mobile) {
        if (mobile.matches) {
            changeBtn.eq(0).children().first().removeClass("showButtons");
            changeBtn.eq(3).children().first().removeClass("showButtons");
            row.find(".main__insidebutton").addClass("show1");

            headerMenu.addClass("invisible");
            headerMenu.removeClass("sidenav");

            $("section").removeClass("shadow");
            $(".header").removeClass("newMargin");
            $("footer").removeClass("shadow");
            menu.removeClass("sidenavLi");
            $("body").removeClass("pageScroll");

            turnOff();
            menuOutsideTouch(true);
        }
    });

    $(window).ready(function (event) {
        console.log(window.innerWidth);
        if (window.innerWidth <= 1024 && window.innerWidth > 640) {
            changeBtn.eq(0).children().first().removeClass("showButtons");
            changeBtn.eq(3).children().first().removeClass("showButtons");
            row.find(".main__insidebutton").addClass("show1");
            headerMenu.addClass("invisible");
            turnOff();
            menuOutsideTouch(true);
        } else if (window.innerWidth <= 640) {
            changeBtn.eq(0).children().first().removeClass("showButtons");
            changeBtn.eq(3).children().first().removeClass("showButtons");
            row.find(".main__insidebutton").addClass("show1");
            headerMenu.addClass("invisible");

            turnOff();
            menuOutsideTouch(true);
        } else {
            changeBtn.eq(0).children().first().addClass("showButtons");
            changeBtn.eq(3).children().first().addClass("showButtons");
            row.find(".main__insidebutton").removeClass("show1");
            headerMenu.removeClass("invisible");

            turnOn();
            menuOutsideTouch(false);
        }
    });

    costsBoxes.hover(function (event) {
        $(event.currentTarget).css('backgroundColor', mainColor);
        $(event.currentTarget).css('border', "1px solid" + mainColor);
        $(event.currentTarget).children().eq(0).css('border', "1px solid" + mainColor);
        $(event.currentTarget).children().eq(1).css('backgroundColor', mainColor);
        $(event.currentTarget).children().eq(2).css('color', "white");
        $(event.currentTarget).children().eq(3).css("color", mainColor);
        $(event.currentTarget).children().last().css("backgroundColor", "white");
        $(event.currentTarget).children().last().children().eq(0).css("color", mainColor);
    }, function (event) {
        $(event.currentTarget).css("backgroundColor", "#F9F9F9");
        $(event.currentTarget).css("border", "1px solid #C2C2C2");
        $(event.currentTarget).children().eq(0).css("border", "1px solid #C2C2C2");
        $(event.currentTarget).children().eq(1).css("backgroundColor", "#C2C2C2");
        $(event.currentTarget).children().eq(2).css("color", mainColor);
        $(event.currentTarget).children().eq(3).css("color", "#C2C2C2");
        $(event.currentTarget).children().last().css("backgroundColor", mainColor);
        $(event.currentTarget).children().last().children().eq(0).css("color", "white");
    });

    costsBoxes.on("touchstart", function (event) {
        $(event.currentTarget).css('backgroundColor', mainColor);
        $(event.currentTarget).css('border', "1px solid" + mainColor);
        $(event.currentTarget).children().eq(0).css('border', "1px solid" + mainColor);
        $(event.currentTarget).children().eq(1).css('backgroundColor', mainColor);
        $(event.currentTarget).children().eq(2).css('color', "white");
        $(event.currentTarget).children().eq(3).css("color", mainColor);
        $(event.currentTarget).children().last().css("backgroundColor", "white");
        $(event.currentTarget).children().last().children().eq(0).css("color", mainColor);
    });

    costsBoxes.on("touchend", function (event) {
        $(event.currentTarget).css("backgroundColor", "#F9F9F9");
        $(event.currentTarget).css("border", "1px solid #C2C2C2");
        $(event.currentTarget).children().eq(0).css("border", "1px solid #C2C2C2");
        $(event.currentTarget).children().eq(1).css("backgroundColor", "#C2C2C2");
        $(event.currentTarget).children().eq(2).css("color", mainColor);
        $(event.currentTarget).children().eq(3).css("color", "#C2C2C2");
        $(event.currentTarget).children().last().css("backgroundColor", mainColor);
        $(event.currentTarget).children().last().children().eq(0).css("color", "white");
    });

    mainButton.addEventListener("mouseover", function (event) {
        this.classList.add("button__effect");
        console.log(mainButton);
    });

    mainButton.addEventListener("mouseout", function (event) {
        this.classList.remove("button__effect");
        console.log(mainButton);
    });

    mainButton.addEventListener("touchstart", function (event) {
        this.classList.add("button__effect");
        console.log(mainButton);
    });

    mainButton.addEventListener("touchend", function (event) {
        this.classList.remove("button__effect");
        console.log(mainButton);
    });

    for (var i = 0; i < costsButton.length; i++) {
        costsButton[i].addEventListener("mouseover", function (event) {
            this.classList.add("button__effect");
            console.log(mainButton);
        });

        costsButton[i].addEventListener("mouseout", function (event) {
            this.classList.remove("button__effect");
            console.log(mainButton);
        });
    }

    for (var i = 0; i < costsButton.length; i++) {
        costsButton[i].addEventListener("touchstart", function (event) {
            this.classList.add("button__effect");
            console.log(mainButton);
        });

        costsButton[i].addEventListener("touchend", function (event) {
            this.classList.remove("button__effect");
            console.log(mainButton);
        });
    }

    submitButton.addEventListener("mouseover", function (event) {
        this.classList.add("button__effect");
        console.log(mainButton);
    });

    submitButton.addEventListener("mouseout", function (event) {
        this.classList.remove("button__effect");
        console.log(mainButton);
    });

    submitButton.addEventListener("touchstart", function (event) {
        this.classList.add("button__effect");
        console.log(mainButton);
    });

    submitButton.addEventListener("touchend", function (event) {
        this.classList.remove("button__effect");
        console.log(mainButton);
    });

    var _loop = function _loop(_i) {

        footerImg.eq(_i).hover(function (event) {
            $(event.currentTarget).addClass("pulse" + (_i + 1));
        }, function (event) {
            $(event.currentTarget).removeClass("pulse" + (_i + 1));
        });

        footerImg.eq(_i).on("touchstart", function (event) {
            $(event.currentTarget).addClass("pulse" + (_i + 1));
        });

        footerImg.eq(_i).on("touchend", function (event) {
            $(event.currentTarget).removeClass("pulse" + (_i + 1));
        });
    };

    for (var _i = 0; _i < footerImg.length; _i++) {
        _loop(_i);
    }

    function turnOn() {
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 200) {
                header.slideUp(700);
            } else {
                header.slideDown(700);
            }
        });
    }

    function turnOff() {
        $(window).off('scroll');
    }

    function menuOutsideTouch(param) {
        $(window).on("click", function (event) {
            if (!menuBtn.is(event.target) && menuBtn.has(event.target).length === 0 && !headerMenu.is(event.target) && headerMenu.has(event.target).length === 0) {
                event.preventDefault();
                headerMenu.removeClass("sidenav");

                menu.removeClass("sidenavLi");
                menu.addClass("header__li");

                $(".header").removeClass("newMargin");
                $("section").removeClass("shadow");
                $("footer").removeClass("shadow");

                $("body").removeClass("pageScroll");

                if (param === true) {
                    headerMenu.addClass("invisible");
                }
            }
        });
    }
});

/***/ })

/******/ });
//# sourceMappingURL=out.js.map