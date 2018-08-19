function slider() {

    const buttons = $(".main__sidebutton");

    const insideButtons = $(".main__insidebutton");

    const images = $(".section__main--img");



    let elementNumber = 0;


    let time = setInterval(() => {
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
        time = setInterval(() => {
            images.eq(elementNumber).removeClass("section__main--img-visible");
            elementNumber--;

            if (elementNumber === -1) {
                elementNumber = images.length - 1;
            }

            images.eq(elementNumber).addClass("section__main--img-visible");
        }, 4000)
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
        time = setInterval(() => {
            images.eq(elementNumber).removeClass("section__main--img-visible");
            elementNumber--;

            if (elementNumber === -1) {
                elementNumber = images.length - 1;
            }

            images.eq(elementNumber).addClass("section__main--img-visible");
        }, 4000)
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
        time = setInterval(() => {
            images.eq(elementNumber).removeClass("section__main--img-visible");
            elementNumber--;

            if (elementNumber === -1) {
                elementNumber = images.length - 1;
            }

            images.eq(elementNumber).addClass("section__main--img-visible");
        }, 4000)
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
        time = setInterval(() => {
            images.eq(elementNumber).removeClass("section__main--img-visible");
            elementNumber--;

            if (elementNumber === -1) {
                elementNumber = images.length - 1;
            }

            images.eq(elementNumber).addClass("section__main--img-visible");
        }, 4000)
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

}

export {slider}