import {HomePage} from "./src/js/Views/HomePage.js";
import {PhotographerPage} from "./src/js/Views/PhotographerPage.js";

function isHomePage(){
    return window.location.href.includes("index") ;
}

function isPhotographerPage(){
    return window.location.href.includes("photographer") ;
}

function displayPageContent(){

    if (isHomePage()){

        let homePage = new HomePage() ;

        homePage.displayAllPhotographersCards() ;
    }

    else if (isPhotographerPage()){

        let photographerPage = new PhotographerPage() ;

        photographerPage.displayPhotographerPage() ;


    }
}

displayPageContent()



