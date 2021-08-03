import {FishEyeApi} from "../Models/FishEye.js";
import {HomePageView} from "../Views/HomePageView.js";

export class Controller{

    constructor() {
    }

    isHomePage(){
        return window.location.href.includes("index") ;
    }

    isPhotographerPage(){
        return window.location.href.includes("photographer") ;
    }

    displayPageContent(){

        if (this.isHomePage()){

            let allPhotographers = new FishEyeApi("/src/api/FishEye.json").getAllPhotographers() ;
            let homePageView = new HomePageView() ;

            allPhotographers.then(data => {
                data.forEach(photographer => {
                    homePageView.toHtmlGallery(photographer) ;
                }) ;

            })

        } else if (this.isPhotographerPage()){


        }

    }
}