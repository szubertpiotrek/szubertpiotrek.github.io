function resizing() {

    const menu = $(".header__li");

    const headerMenu = $(".header__nav");

    const headerList = $(".header__list");

    const menuBtn = $(".menu__btn--effect");

    const header = $("header");

    const mobileMedium = window.matchMedia("screen and (max-width: 1023px) and (min-width: 641px)");

    const mobileLarge = window.matchMedia("screen and (min-width: 1024px)");

    const mobileSmall = window.matchMedia("screen and (max-width: 640px)");

    const changeBtn = $(".section__post .container .row>div");

    const row = $(".section__post .container .row");

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

    function turnOn(){
        $(window).on('scroll', function () {
            if($(this).scrollTop() >200){
                header.slideUp(700);
            }else{
                header.slideDown(700);
            }
        });

        $(window).off('click');
    }


    function turnOff(){
        $(window).off('scroll');

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

    }

}

export {resizing}