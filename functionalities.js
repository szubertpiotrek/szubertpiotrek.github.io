document.addEventListener("DOMContentLoaded", function () {

    var submenu = document.querySelector(".header__submenu");

    var menu = document.querySelectorAll(".header__li");

    var img = document.querySelectorAll(".gallery__img");

    menu[0].addEventListener("mouseover", function (event) {
        submenu.style.display= "block";
    });

    submenu.addEventListener("mouseout", function (event) {
        submenu.style.display= "none";
    });

    menu[0].addEventListener("touchstart", function (event) {
        submenu.style.display= "block";
    });

    submenu.addEventListener("touchend", function (event) {
        submenu.style.display= "none";
    });

    for(var i = 0;i<img.length;i++) {
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

    var buttons = document.querySelectorAll(".main__sidebutton");

    var images = document.querySelectorAll(".section__main--img");

    var elementNumber = 0;


    images[elementNumber].classList.add("visible");

    buttons[0].addEventListener("click", function (event) {
        event.preventDefault();
        images[elementNumber].classList.remove("visible");
        elementNumber--;

        if(elementNumber===-1){
            elementNumber = images.length-1;
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

    buttons[1].addEventListener("click", function (event) {
        event.preventDefault();
        this.firstElementChild.classList.remove("main__sidebutton--effect");
        this.firstElementChild.classList.add("main__sidebutton--effect");
        images[elementNumber].classList.remove("visible");
        elementNumber++;

        if(elementNumber >= images.length){
            elementNumber = 0;
        }

        images[elementNumber].classList.add("visible");

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

    var mobile = window.matchMedia("screen and (max-width: 1023px)");

    var changeBtn = document.querySelectorAll(".section__post .container .row>div");

    var row =document.querySelector(".section__post .container .row");

    console.log(changeBtn[3]);
    console.log(row.children[2]);

    mobile.addListener( function(mobile) {
        console.log(changeBtn[3]);
        if (mobile.matches) {
            row.insertBefore(changeBtn[3], row.children[2]);
        }else{
            row.insertBefore(changeBtn[3], row.children[4]);
        }
    });

});