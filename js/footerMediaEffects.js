function footerMediaEffects() {

    const footerImg = $(".footer__img--item");

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
}

export {footerMediaEffects}