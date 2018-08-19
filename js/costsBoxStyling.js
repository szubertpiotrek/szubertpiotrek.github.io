function costsBoxStyling() {

    const costsBoxes = $(".costs__box");

    const mainColor = "#27C7AB";

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

}

export {costsBoxStyling}