document.addEventListener("DOMContentLoaded", function () {

    var submenu = document.querySelector(".header__submenu");

    var menu = document.querySelectorAll(".header__li");

    var img = document.querySelectorAll(".gallery__img");

    var mobileMedium = window.matchMedia("screen and (max-width: 1023px) and (min-width: 641px)");

    var mobileLarge = window.matchMedia("screen and (min-width: 1024px)");

    var mobileSmall = window.matchMedia("screen and (max-width: 640px)");

    var changeBtn = document.querySelectorAll(".section__post .container .row>div");

    var row = document.querySelector(".section__post .container .row");

    var costsBoxes = document.querySelectorAll(".costs__box");

    var mainColor = "#27C7AB";
    
    var mainButton = document.querySelector(".main__button");

    var costsButton = document.querySelectorAll(".costs__button");

    var submitButton = document.querySelector(".contact__submited");

    var footerImg = document.querySelectorAll(".footer__img--item");


    menu[0].addEventListener("mouseover", function (event) {
        submenu.classList.add("show");
    });

    submenu.addEventListener("mouseout", function (event) {
        submenu.classList.remove("show");
    });

    menu[0].addEventListener("touchstart", function (event) {
        event.preventDefault();
        submenu.classList.toggle("show");
    });

    menu[0].addEventListener("click", function (event) {
        event.preventDefault();
        submenu.classList.toggle("show");
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

    for(var i =0;i<buttons.length;i++){
        buttons[i].addEventListener("click", function (event) {
            event.preventDefault();
            images[elementNumber].classList.remove("visible");
            elementNumber--;

            if (elementNumber === -1) {
                elementNumber = images.length - 1;
            }

            images[elementNumber].classList.add("visible");
        });

        buttons[i].addEventListener("touchstart", function (event) {
            event.preventDefault();
            images[elementNumber].classList.remove("visible");
            elementNumber--;

            if (elementNumber === -1) {
                elementNumber = images.length - 1;
            }

            images[elementNumber].classList.add("visible");
        });

        insideButtons[i].addEventListener("click", function (event) {
            event.preventDefault();
            images[elementNumber].classList.remove("visible");
            elementNumber--;

            if (elementNumber === -1) {
                elementNumber = images.length - 1;
            }

            images[elementNumber].classList.add("visible");
        });

        insideButtons[i].addEventListener("touchstart", function (event) {
            event.preventDefault();
            images[elementNumber].classList.remove("visible");
            elementNumber--;

            if (elementNumber === -1) {
                elementNumber = images.length - 1;
            }

            images[elementNumber].classList.add("visible");
        });

        buttons[i].addEventListener("mouseover", function (event) {
            event.preventDefault();
            this.firstElementChild.classList.remove("main__sidebutton--effectOut");
            this.firstElementChild.classList.add("main__sidebutton--effectIn");
        });

        buttons[i].addEventListener("mouseout", function (event) {
            event.preventDefault();
            this.firstElementChild.classList.remove("main__sidebutton--effectIn");
            this.firstElementChild.classList.add("main__sidebutton--effectOut");
        });

        insideButtons[i].addEventListener("mouseover", function (event) {
            event.preventDefault();
            this.firstElementChild.classList.remove("main__sidebutton--effectOut");
            this.firstElementChild.classList.add("main__sidebutton--effectIn");
        });

        insideButtons[i].addEventListener("mouseout", function (event) {
            event.preventDefault();
            this.firstElementChild.classList.remove("main__sidebutton--effectIn");
            this.firstElementChild.classList.add("main__sidebutton--effectOut");
        });

        buttons[i].addEventListener("touchstart", function (event) {
            event.preventDefault();
            this.firstElementChild.classList.remove("main__sidebutton--effectOut");
            this.firstElementChild.classList.add("main__sidebutton--effectIn");
        });

        buttons[i].addEventListener("touchend", function (event) {
            event.preventDefault();
            this.firstElementChild.classList.remove("main__sidebutton--effectIn");
            this.firstElementChild.classList.add("main__sidebutton--effectOut");
        });

        insideButtons[i].addEventListener("touchstart", function (event) {
            event.preventDefault();
            this.firstElementChild.classList.remove("main__sidebutton--effectOut");
            this.firstElementChild.classList.add("main__sidebutton--effectIn");
        });

        insideButtons[i].addEventListener("touchend", function (event) {
            event.preventDefault();
            this.firstElementChild.classList.remove("main__sidebutton--effectIn");
            this.firstElementChild.classList.add("main__sidebutton--effectOut");
        });
    }

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

    for(var i=0;i<costsBoxes.length;i++){
        costsBoxes[i].addEventListener("mouseover", function (event) {
            this.style.backgroundColor = mainColor;
            this.style.border = "1px solid" + mainColor;
            this.children[0].style.border = "1px solid" + mainColor;
            this.children[1].style.backgroundColor = mainColor;
            this.children[2].style.color = "white";
            this.children[3].style.color = mainColor;
            this.lastElementChild.style.backgroundColor = "white";
            this.lastElementChild.children[0].style.color = mainColor;
        })
    }

    for(var i=0;i<costsBoxes.length;i++){
        costsBoxes[i].addEventListener("mouseout", function (event) {
            this.style.backgroundColor = "#F9F9F9";
            this.style.border = "1px solid #C2C2C2";
            this.children[0].style.border = "1px solid #C2C2C2";
            this.children[1].style.backgroundColor = "#C2C2C2";
            this.children[2].style.color = mainColor;
            this.children[3].style.color = "#C2C2C2";
            this.lastElementChild.style.backgroundColor = mainColor;
            this.lastElementChild.children[0].style.color = "white";
        })
    }

    for(var i=0;i<costsBoxes.length;i++){
        costsBoxes[i].addEventListener("touchstart", function (event) {
            this.style.backgroundColor = mainColor;
            this.style.border = "1px solid" + mainColor;
            this.children[0].style.border = "1px solid" + mainColor;
            this.children[1].style.backgroundColor = mainColor;
            this.children[2].style.color = "white";
            this.children[3].style.color = mainColor;
            this.lastElementChild.style.backgroundColor = "white";
            this.lastElementChild.children[0].style.color = mainColor;
        })
    }

    for(var i=0;i<costsBoxes.length;i++){
        costsBoxes[i].addEventListener("touchend", function (event) {
            this.style.backgroundColor = "#F9F9F9";
            this.style.border = "1px solid #C2C2C2";
            this.children[0].style.border = "1px solid #C2C2C2";
            this.children[1].style.backgroundColor = "#C2C2C2";
            this.children[2].style.color = mainColor;
            this.children[3].style.color = "#C2C2C2";
            this.lastElementChild.style.backgroundColor = mainColor;
            this.lastElementChild.children[0].style.color = "white";
        })
    }
    
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

    for(var i=0;i<costsButton.length;i++){
        costsButton[i].addEventListener("mouseover", function (event) {
            this.classList.add("button__effect");
            console.log(mainButton);
        });

        costsButton[i].addEventListener("mouseout", function (event) {
            this.classList.remove("button__effect");
            console.log(mainButton);
        });
    }

    for(var i=0;i<costsButton.length;i++){
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

    footerImg[0].addEventListener("mouseover", function (event) {
        this.classList.add("pulse1");
        console.log(mainButton);
    });

    footerImg[0].addEventListener("mouseout", function (event) {
        this.classList.remove("pulse1");
        console.log(mainButton);
    });

    footerImg[0].addEventListener("touchstart", function (event) {
        this.classList.add("pulse1");
        console.log(mainButton);
    });

    footerImg[0].addEventListener("touchend", function (event) {
        this.classList.remove("pulse1");
        console.log(mainButton);
    });

    footerImg[1].addEventListener("mouseover", function (event) {
        this.classList.add("pulse2");
        console.log(mainButton);
    });

    footerImg[1].addEventListener("mouseout", function (event) {
        this.classList.remove("pulse2");
        console.log(mainButton);
    });

    footerImg[1].addEventListener("touchstart", function (event) {
        this.classList.add("pulse2");
        console.log(mainButton);
    });

    footerImg[1].addEventListener("touchend", function (event) {
        this.classList.remove("pulse2");
        console.log(mainButton);
    });

    footerImg[2].addEventListener("mouseover", function (event) {
        this.classList.add("pulse3");
        console.log(mainButton);
    });

    footerImg[2].addEventListener("mouseout", function (event) {
        this.classList.remove("pulse3");
        console.log(mainButton);
    });

    footerImg[2].addEventListener("touchstart", function (event) {
        this.classList.add("pulse3");
        console.log(mainButton);
    });

    footerImg[2].addEventListener("touchend", function (event) {
        this.classList.remove("pulse3");
        console.log(mainButton);
    });

    footerImg[3].addEventListener("mouseover", function (event) {
        this.classList.add("pulse2");
        console.log(mainButton);
    });

    footerImg[3].addEventListener("mouseout", function (event) {
        this.classList.remove("pulse2");
        console.log(mainButton);
    });

    footerImg[3].addEventListener("touchstart", function (event) {
        this.classList.add("pulse2");
        console.log(mainButton);
    });

    footerImg[3].addEventListener("touchend", function (event) {
        this.classList.remove("pulse2");
        console.log(mainButton);
    });

});