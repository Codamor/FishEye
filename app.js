import {HomePage} from "./src/js/Views/HomePage.js";

function isHomePage(){
    return window.location.href.includes("index") ;
}

function isPhotographerPage(){
    return window.location.href.includes("photographer") ;
}

function removeTag(array, value){
    return array.pop(value) ;
}

function addTag(array, value){
    array.push(value) ;
}




function displayPageContent(){

    if (isHomePage()){

        let homePage = new HomePage() ;

        homePage.displayPhotographersGallery() ;
    }

    else if (isPhotographerPage()){

    }
}

displayPageContent()



