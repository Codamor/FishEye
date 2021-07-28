import {HomePage} from "./src/js/Views/HomePage.js";


function isHomePage(){
    return window.location.href.includes("index") ;
}

function isPhotographerPage(){
    return window.location.href.includes("photographer") ;
}

function displayPageContent(){

    if (isHomePage()){
        new HomePage().displayPhotographersGallery() ;
    }

    else if (isPhotographerPage()){

    }
}

displayPageContent()



