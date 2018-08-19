function contactButton() {

    var submitButton = document.querySelector(".contact__submited");

    submitButton.addEventListener("mouseover", function (event) {
        this.classList.add("button__effect");
    });

    submitButton.addEventListener("mouseout", function (event) {
        this.classList.remove("button__effect");
    });

    submitButton.addEventListener("touchstart", function (event) {
        this.classList.add("button__effect");
    });

    submitButton.addEventListener("touchend", function (event) {
        this.classList.remove("button__effect");
    });

}

export {contactButton}