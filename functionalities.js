$(function () {


    const submenu = $(".header__submenu");

    const menu = $(".header__li");

    const headerMenu = $(".header__nav");

    const headerList = $(".header__list");

    const menuLink = $('.header__link');

    const menuBtn = $(".menu__btn--effect");

    const img = $(".gallery__img");

    const header = $("header");

    const mobileMedium = window.matchMedia("screen and (max-width: 1023px) and (min-width: 641px)");

    const mobileLarge = window.matchMedia("screen and (min-width: 1024px)");

    const mobileSmall = window.matchMedia("screen and (max-width: 640px)");

    const changeBtn = $(".section__post .container .row>div");

    const row = $(".section__post .container .row");

    const costsBoxes = $(".costs__box");

    const mainColor = "#27C7AB";
    
    var mainButton = document.querySelector(".main__button");

    var costsButton = document.querySelectorAll(".costs__button");

    var submitButton = document.querySelector(".contact__submited");

    const footerImg = $(".footer__img--item");

    const arrow = $('.header__link--arrow');

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

    menuLink.hover(
        ()=>
        {
            $(event.currentTarget).addClass('header__link--hover');
            $(event.currentTarget).find('.header__link--arrow').css("border-top", "12px solid rgb(38, 191, 163)").css("transition", "0.5s");
        },
        ()=>
        {
            $(event.currentTarget).removeClass('header__link--hover');
            $(event.currentTarget).find('.header__link--arrow').css("border-top", "12px solid #fff").css("transition", "0.5s");
        }
    );

    $(window).on("click", function (event) {
        if (!menuBtn.is(event.target)&& menuBtn.has(event.target).length === 0 && !headerMenu.is(event.target)&& headerMenu.has(event.target).length === 0){
            event.preventDefault();
            headerMenu.removeClass("sidenav");


            headerMenu.addClass("invisible");
            menu.removeClass("sidenavLi");
            menu.addClass("header__li");

            $(".header").removeClass("newMargin");
            $("section").removeClass("shadow");
            $("footer").removeClass("shadow");

            $("body").removeClass("pageScroll");

        }
    });

    menu.on("click", () => {
        submenu.slideToggle();
        arrow.toggleClass('rotation');
    });

    menu.on("touchstart", (event) => {
        event.preventDefault();
        submenu.toggleClass("show");
    });

    menu.on("click", (event) => {
        event.preventDefault();
        submenu.toggleClass("show");
    });


    img.hover(event => {
            const underline = $(event.currentTarget).find('.gallery__underline');
            underline.removeClass("appearing");
            underline.addClass("disappearing");
          },
          event => {
          const underline = $(event.currentTarget).find('.gallery__underline');
          underline.removeClass("disappearing");
          underline.addClass("appearing");
    });


    img.on("touchstart", function (event) {
        const underline = $(event.currentTarget).find('.gallery__underline');
        underline.removeClass("appearing");
        underline.addClass("disappearing");
    });
    img.on("touchend", function (event) {
        const underline = $(event.currentTarget).find('.gallery__underline');
        underline.removeClass("disappearing");
        underline.addClass("appearing");
    });


    const buttons = $(".main__sidebutton");

    const insideButtons = $(".main__insidebutton");

    const images = $(".section__main--img");

    let elementNumber = 0;


    images.eq(elementNumber).addClass("visible");


    buttons.on("click", function (event) {
        event.preventDefault();
        images.eq(elementNumber).removeClass("visible");
        elementNumber--;

        if (elementNumber === -1) {
            elementNumber = images.length - 1;
        }

        images.eq(elementNumber).addClass("visible");
    });


    buttons.on("touchstart", function (event) {
        event.preventDefault();
        images.eq(elementNumber).removeClass("visible");
        elementNumber--;

        if (elementNumber === -1) {
            elementNumber = images.length - 1;
        }

        images.eq(elementNumber).addClass("visible");
    });



    insideButtons.on("click", function (event) {
        event.preventDefault();
        images.eq(elementNumber).removeClass("visible");
        elementNumber--;

        if (elementNumber === -1) {
            elementNumber = images.length - 1;
        }

        images.eq(elementNumber).addClass("visible");
    });

    insideButtons.on("touchstart", function (event) {
        event.preventDefault();
        images.eq(elementNumber).removeClass("visible");
        elementNumber--;

        if (elementNumber === -1) {
            elementNumber = images.length - 1;
        }

        images.eq(elementNumber).addClass("visible");
    });

    buttons.hover(
        function (event) {
            event.preventDefault();
            $(event.currentTarget).children().first().removeClass("main__sidebutton--effectOut");
            $(event.currentTarget).children().first().addClass("main__sidebutton--effectIn");
        },
        function (event) {
            event.preventDefault();
            $(event.currentTarget).children().first().removeClass("main__sidebutton--effectIn");
            $(event.currentTarget).children().first().addClass("main__sidebutton--effectOut");
        });

    insideButtons.hover(
        function (event) {
            event.preventDefault();
            $(event.currentTarget).children().first().removeClass("main__sidebutton--effectOut");
            $(event.currentTarget).children().first().addClass("main__sidebutton--effectIn");
        },
        function (event) {
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
        }
        else if (window.innerWidth <= 640) {
            changeBtn.eq(0).children().first().removeClass("showButtons");
            changeBtn.eq(3).children().first().removeClass("showButtons");
            row.find(".main__insidebutton").addClass("show1");
            headerMenu.addClass("invisible");

            turnOff();
        } else {
            changeBtn.eq(0).children().first().addClass("showButtons");
            changeBtn.eq(3).children().first().addClass("showButtons");
            row.find(".main__insidebutton").removeClass("show1");
            headerMenu.removeClass("invisible");

            turnOn();
        }
    });

    costsBoxes.hover(
        function (event) {
            $(event.currentTarget).css('backgroundColor', mainColor);
            $(event.currentTarget).css('border', "1px solid" + mainColor);
            $(event.currentTarget).children().eq(0).css('border', "1px solid" + mainColor);
            $(event.currentTarget).children().eq(1).css('backgroundColor' , mainColor);
            $(event.currentTarget).children().eq(2).css('color', "white");
            $(event.currentTarget).children().eq(3).css("color" , mainColor);
            $(event.currentTarget).children().last().css("backgroundColor","white");
            $(event.currentTarget).children().last().children().eq(0).css("color", mainColor);
        },
        function (event) {
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
        $(event.currentTarget).children().eq(1).css('backgroundColor' , mainColor);
        $(event.currentTarget).children().eq(2).css('color', "white");
        $(event.currentTarget).children().eq(3).css("color" , mainColor);
        $(event.currentTarget).children().last().css("backgroundColor","white");
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

    for(let i=0; i<footerImg.length; i++){

        footerImg.eq(i).hover(
            function (event) {
                $(event.currentTarget).addClass(`pulse${i+1}`);
            },
            function (event) {
                $(event.currentTarget).removeClass(`pulse${i+1}`);
            });

        footerImg.eq(i).on("touchstart", function (event) {
            $(event.currentTarget).addClass(`pulse${i+1}`);
        });

        footerImg.eq(i).on("touchend", function (event) {
            $(event.currentTarget).removeClass(`pulse${i+1}`);
        });
    }

    function turnOn(){
        $(window).on('scroll', function () {
            if($(this).scrollTop() >200){
                header.slideUp(700);
            }else{
                header.slideDown(700);
            }
        })
    }


    function turnOff(){
        $(window).off('scroll');
    }



});