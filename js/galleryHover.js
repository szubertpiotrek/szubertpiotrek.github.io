function galleryHover() {

    const img = $(".gallery__img");

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
}

export {galleryHover}