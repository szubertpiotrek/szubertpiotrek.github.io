function contactButton() {

    var submitButton = document.querySelector(".contact__submited");

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

}

export {contactButton}