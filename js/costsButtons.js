function costsButtons() {

    var costsButton = document.querySelectorAll(".costs__button");

    for(var i=0;i<costsButton.length;i++){
        costsButton[i].addEventListener("mouseover", function (event) {
            this.classList.add("button__effect");
        });

        costsButton[i].addEventListener("mouseout", function (event) {
            this.classList.remove("button__effect");
        });
    }

    for(var i=0;i<costsButton.length;i++){
        costsButton[i].addEventListener("touchstart", function (event) {
            this.classList.add("button__effect");
        });

        costsButton[i].addEventListener("touchend", function (event) {
            this.classList.remove("button__effect");
        });
    }

}

export {costsButtons}