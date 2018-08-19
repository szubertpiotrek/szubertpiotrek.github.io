import {slider} from "./slider";
import {menuRWD} from "./menuRWD";
import {galleryHover} from "./galleryHover";
import {onloadMatch} from "./onloadMatch";
import {resizing} from "./resizing";
import {costsBoxStyling} from "./costsBoxStyling";
import {footerMediaEffects} from "./footerMediaEffects";
import {mainButton} from "./mainButton";
import {costsButtons} from "./costsButtons";
import {contactButton} from "./contactButton";

$(function () {

    //onload events
    onloadMatch();

    //resizing events
    resizing();

    //header events
    menuRWD();

    //main section events
    slider();
    mainButton();

    //gallery section events
    galleryHover();
    
    //costs section events
    costsBoxStyling();
    costsButtons();

    //contact sections events
    contactButton();

    //footer events
    footerMediaEffects();
});