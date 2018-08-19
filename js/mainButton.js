function mainButton() {

    var mainButton = document.querySelector(".main__button");


    mainButton.addEventListener("mouseover", function (event) {
        this.classList.add("button__effect");
    });

    mainButton.addEventListener("mouseout", function (event) {
        this.classList.remove("button__effect");
    });

    mainButton.addEventListener("touchstart", function (event) {
        this.classList.add("button__effect");
    });

    mainButton.addEventListener("touchend", function (event) {
        this.classList.remove("button__effect");
    });

}

export {mainButton}