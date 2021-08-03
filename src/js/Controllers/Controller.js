import {FishEyeApi} from "../Models/FishEye.js";
import {MediaFactory} from "../Models/MediaFactory.js";
import {HomePageView} from "../Views/HomePageView.js";
import {PhotographerPageView} from "../Views/PhotographerPageView.js";


export class Controller{

    constructor() {
    }

    isHomePage(){
        return window.location.href.includes("index") ;
    }

    isPhotographerPage(){
        return window.location.href.includes("photographer") ;
    }

    getPhotographerPageId(){
        let url = new URL(window.location.href) ;
        return Number(url.searchParams.get("id")) ;
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

            let fishEyeApi = new FishEyeApi("/src/api/FishEye.json") ;
            let photographerPageView = new PhotographerPageView() ;

            let photographerId = this.getPhotographerPageId() ;

            let photographer = fishEyeApi.getPhotographerById(photographerId) ;
            let allPhotographerMedia = fishEyeApi.getAllMediaByPhotographerId(photographerId) ;



            //display photographer banner
            photographer
                .then(photographer => {
                    photographerPageView.toHtmlBanner(photographer) ;
                }) ;

            allPhotographerMedia.then(media => {

            })

        }
    }
}