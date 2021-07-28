
import {PhotographerController} from "./src/js/Controller/photographerController.js";
import {MediaController} from "./src/js/Controller/mediaController.js";


function isHomePage(){
    return window.location.href.includes("index") ;
}

function isPhotographerPage(){
    return window.location.href.includes("photographer") ;
}

function displayPageContent(){

    if (isHomePage()){

    }

    else if (isPhotographerPage()){

    }
}

displayPageContent()



