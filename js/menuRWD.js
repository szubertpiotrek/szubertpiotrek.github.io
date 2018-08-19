function menuRWD() {
    const menu = $(".header__li");

    const headerMenu = $(".header__nav");

    const headerList = $(".header__list");

    const menuLink = $('.header__link');

    const menuBtn = $(".menu__btn--effect");

    const submenuList = $(".header__submenu--link");

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

    menuLink.hover(
        ()=>
        {
            $(event.currentTarget).addClass('header__link--hover');
            $(event.currentTarget).find('.header__link--arrow').addClass('header__link--arrowChanged');
        },
        ()=> {
            $(event.currentTarget).removeClass('header__link--hover');
            $(event.currentTarget).find('.header__link--arrow').removeClass('header__link--arrowChanged');
        }
    );

    menuLink.on("touchstart", ()=>
    {
        $(event.currentTarget).addClass('header__link--hover');
        $(event.currentTarget).find('.header__link--arrow').addClass('header__link--arrowChanged');
    });
    menuLink.on("touchend", ()=> {
            $(event.currentTarget).removeClass('header__link--hover');
            $(event.currentTarget).find('.header__link--arrow').removeClass('header__link--arrowChanged');
        }
    );

    menu.on("click", () => {
        event.preventDefault();
        $(event.currentTarget).find(".header__submenu").slideToggle();
        $(event.currentTarget).find('.header__link--arrow').toggleClass('rotation');
    });

    submenuList.hover(() =>
        {
            $(event.currentTarget).addClass('header__submenu--link-hover');
        },
        () =>
        {
            $(event.currentTarget).removeClass('header__submenu--link-hover');
        }
    );
}

export {menuRWD}