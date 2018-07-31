document.addEventListener("DOMContentLoaded", function () {

    var submenu = document.querySelector(".header__submenu");

    var menu = document.querySelectorAll(".header__li");

    var img = document.querySelectorAll(".gallery__img");

    var mobileMedium = window.matchMedia("screen and (max-width: 1023px) and (min-width: 641px)");

    var mobileLarge = window.matchMedia("screen and (min-width: 1024px)");

    var mobileSmall = window.matchMedia("screen and (max-width: 640px)");

    var changeBtn = document.querySelectorAll(".section__post .container .row>div");

    var row = document.querySelector(".section__post .container .row");



    menu[0].addEventListener("mouseover", function (event) {
        submenu.classList.add("show");
    });

    submenu.addEventListener("mouseout", function (event) {
        submenu.classList.remove("show");
    });

    menu[0].addEventListener("touchstart", function (event) {
        submenu.style.display = "block";
    });

    submenu.addEventListener("touchend", function (event) {
        submenu.style.display = "none";
    });

    for (var i = 0; i < img.length; i++) {
        img[i].addEventListener("mouseover", function (event) {
            var underline = this.querySelector(".gallery__underline");
            underline.classList.remove("appearing");
            underline.classList.add("disappearing");
        });
        img[i].addEventListener("mouseout", function (event) {
            var underline = this.querySelector(".gallery__underline");
            underline.classList.remove("disappearing");
            underline.classList.add("appearing");
        })
    }

    for (var i = 0; i < img.length; i++) {
        img[i].addEventListener("touchstart", function (event) {
            var underline = this.querySelector(".gallery__underline");
            underline.classList.remove("appearing");
            underline.classList.add("disappearing");
        });
        img[i].addEventListener("touchend", function (event) {
            var underline = this.querySelector(".gallery__underline");
            underline.classList.remove("disappearing");
            underline.classList.add("appearing");
        })
    }

    var buttons = document.querySelectorAll(".main__sidebutton");

    var insideButtons = document.querySelectorAll(".main__insidebutton");

    var images = document.querySelectorAll(".section__main--img");

    var elementNumber = 0;


    images[elementNumber].classList.add("visible");
    console.log(elementNumber);

    buttons[0].addEventListener("click", function (event) {
        event.preventDefault();
        images[elementNumber].classList.remove("visible");
        elementNumber--;

        if (elementNumber === -1) {
            elementNumber = images.length - 1;
        }

        images[elementNumber].classList.add("visible");
    });

    buttons[1].addEventListener("click", function (event) {
        event.preventDefault();
        images[elementNumber].classList.remove("visible");
        elementNumber++;

        if (elementNumber >= images.length) {
            elementNumber = 0;
        }

        images[elementNumber].classList.add("visible");

    });


    insideButtons[0].addEventListener("click", function (event) {
        event.preventDefault();
        images[elementNumber].classList.remove("visible");
        elementNumber--;

        if (elementNumber === -1) {
            elementNumber = images.length - 1;
        }

        images[elementNumber].classList.add("visible");
    });

    insideButtons[1].addEventListener("click", function (event) {
        event.preventDefault();
        images[elementNumber].classList.remove("visible");
        elementNumber++;

        if (elementNumber >= images.length) {
            elementNumber = 0;
        }

        images[elementNumber].classList.add("visible");
    });

    buttons[0].addEventListener("mouseover", function (event) {
        event.preventDefault();
        this.firstElementChild.classList.remove("main__sidebutton--effectOut");
        this.firstElementChild.classList.add("main__sidebutton--effectIn");
    });

    buttons[0].addEventListener("mouseout", function (event) {
        event.preventDefault();
        this.firstElementChild.classList.remove("main__sidebutton--effectIn");
        this.firstElementChild.classList.add("main__sidebutton--effectOut");
    });

    insideButtons[0].addEventListener("mouseover", function (event) {
        event.preventDefault();
        this.firstElementChild.classList.remove("main__sidebutton--effectOut");
        this.firstElementChild.classList.add("main__sidebutton--effectIn");
    });

    insideButtons[0].addEventListener("mouseout", function (event) {
        event.preventDefault();
        this.firstElementChild.classList.remove("main__sidebutton--effectIn");
        this.firstElementChild.classList.add("main__sidebutton--effectOut");
    });

    buttons[0].addEventListener("touchstart", function (event) {
        event.preventDefault();
        this.firstElementChild.classList.remove("main__sidebutton--effectOut");
        this.firstElementChild.classList.add("main__sidebutton--effectIn");
    });

    buttons[0].addEventListener("touchend", function (event) {
        event.preventDefault();
        this.firstElementChild.classList.remove("main__sidebutton--effectIn");
        this.firstElementChild.classList.add("main__sidebutton--effectOut");
    });

    insideButtons[0].addEventListener("touchstart", function (event) {
        event.preventDefault();
        this.firstElementChild.classList.remove("main__sidebutton--effectOut");
        this.firstElementChild.classList.add("main__sidebutton--effectIn");
    });

    insideButtons[0].addEventListener("touchend", function (event) {
        event.preventDefault();
        this.firstElementChild.classList.remove("main__sidebutton--effectIn");
        this.firstElementChild.classList.add("main__sidebutton--effectOut");
    });

    buttons[1].addEventListener("mouseover", function (event) {
        event.preventDefault();
        this.firstElementChild.classList.remove("main__sidebutton--effectOut");
        this.firstElementChild.classList.add("main__sidebutton--effectIn");
    });

    buttons[1].addEventListener("mouseout", function (event) {
        event.preventDefault();
        this.firstElementChild.classList.remove("main__sidebutton--effectIn");
        this.firstElementChild.classList.add("main__sidebutton--effectOut");
    });

    insideButtons[1].addEventListener("mouseover", function (event) {
        event.preventDefault();
        this.firstElementChild.classList.remove("main__sidebutton--effectOut");
        this.firstElementChild.classList.add("main__sidebutton--effectIn");
    });

    insideButtons[1].addEventListener("mouseout", function (event) {
        event.preventDefault();
        this.firstElementChild.classList.remove("main__sidebutton--effectIn");
        this.firstElementChild.classList.add("main__sidebutton--effectOut");
    });

    buttons[1].addEventListener("touchstart", function (event) {
        event.preventDefault();
        this.firstElementChild.classList.remove("main__sidebutton--effectOut");
        this.firstElementChild.classList.add("main__sidebutton--effectIn");
    });

    buttons[1].addEventListener("touchend", function (event) {
        event.preventDefault();
        this.firstElementChild.classList.remove("main__sidebutton--effectIn");
        this.firstElementChild.classList.add("main__sidebutton--effectOut");
    });

    insideButtons[1].addEventListener("touchstart", function (event) {
        event.preventDefault();
        this.firstElementChild.classList.remove("main__sidebutton--effectOut");
        this.firstElementChild.classList.add("main__sidebutton--effectIn");
    });

    insideButtons[1].addEventListener("touchend", function (event) {
        event.preventDefault();
        this.firstElementChild.classList.remove("main__sidebutton--effectIn");
        this.firstElementChild.classList.add("main__sidebutton--effectOut");
    });

    mobileMedium.addListener(function (mobile) {
        if (mobile.matches) {
            changeBtn[0].firstElementChild.classList.remove("showButtons");
            changeBtn[3].firstElementChild.classList.remove("showButtons");
            row.children[1].firstElementChild.firstElementChild.classList.add("show1");
            row.children[1].firstElementChild.lastElementChild.classList.add("show1");
        }
    });

    mobileLarge.addListener(function (mobile) {
        if (mobile.matches) {
            changeBtn[0].firstElementChild.classList.add("showButtons");
            changeBtn[3].firstElementChild.classList.add("showButtons");
            row.children[1].firstElementChild.firstElementChild.classList.remove("show1");
            row.children[1].firstElementChild.lastElementChild.classList.remove("show1");
        }
    });

    mobileSmall.addListener(function (mobile) {
        if (mobile.matches) {
            changeBtn[0].firstElementChild.classList.remove("showButtons");
            changeBtn[3].firstElementChild.classList.remove("showButtons");
            row.children[1].firstElementChild.firstElementChild.classList.add("show1");
            row.children[1].firstElementChild.lastElementChild.classList.add("show1");
        }
    });


    window.onload = function (event) {
        console.log(window.innerWidth);
        if (window.innerWidth <= 1024 && window.innerWidth > 640) {
            changeBtn[0].firstElementChild.classList.remove("showButtons");
            changeBtn[3].firstElementChild.classList.remove("showButtons");
            row.children[1].firstElementChild.firstElementChild.classList.add("show1");
            row.children[1].firstElementChild.lastElementChild.classList.add("show1");
        }
        else if (window.innerWidth <= 640) {
            changeBtn[0].firstElementChild.classList.remove("showButtons");
            changeBtn[3].firstElementChild.classList.remove("showButtons");
            row.children[1].firstElementChild.firstElementChild.classList.add("show1");
            row.children[1].firstElementChild.lastElementChild.classList.add("show1");
        } else {
            changeBtn[0].firstElementChild.classList.add("showButtons");
            changeBtn[3].firstElementChild.classList.add("showButtons");
            row.children[1].firstElementChild.firstElementChild.classList.remove("show1");
            row.children[1].firstElementChild.lastElementChild.classList.remove("show1");
        }
    };
});