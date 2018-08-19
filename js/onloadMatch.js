function onloadMatch() {

    const headerMenu = $(".header__nav");

    const changeBtn = $(".section__post .container .row>div");

    const row = $(".section__post .container .row");

    const menuBtn = $(".menu__btn--effect");

    const menu = $(".header__li");

    const header = $("header");

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

export {onloadMatch}