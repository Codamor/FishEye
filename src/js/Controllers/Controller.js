import {FishEyeApi} from "../Models/FishEye.js";
import {HomePageView} from "../Views/HomePageView.js";
import {PhotographerPageView} from "../Views/PhotographerPageView.js";
import {LightBoxView} from "../Views/LightBoxView.js";
import {Events} from "./Events.js";


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

        let events = new Events() ;

        if (this.isHomePage()){

            let allPhotographers = new FishEyeApi("/src/api/FishEye.json").getAllPhotographers() ;
            let homePageView = new HomePageView() ;

            allPhotographers.then(data => {
                data.forEach(photographer => {
                    homePageView.toHtmlGallery(photographer) ;
                }) ;
            })
                .then(events.addPhotographerTagsEventListener) ;

        } else if (this.isPhotographerPage()){

            let fishEyeApi = new FishEyeApi("/src/api/FishEye.json") ;
            let photographerPageView = new PhotographerPageView() ;
            let lightBoxView = new LightBoxView() ;
            let events = new Events() ;

            let photographerPageId = this.getPhotographerPageId() ;

            let photographer = fishEyeApi.getPhotographerById(photographerPageId) ;
            let allPhotographerMedia = fishEyeApi.getAllMediaByPhotographerId(photographerPageId) ;

            photographer
                .then(photographer => {
                    photographerPageView.toHtmlBanner(photographer) ;
                    photographerPageView.toHtmlMetaInformations(photographer) ;
                    photographerPageView.displayPrice(photographer) ;

                    return photographer.name ;
                })
                .then(photographerName => {
                    allPhotographerMedia
                        .then(allMedia => {
                            photographerPageView.toHtmlGallery(allMedia, photographerName) ;
                            lightBoxView.toHtmlLightBoxGallery(allMedia, photographerName) ;
                        })
                        .then(events.addEventListenerOnMediaToOpenLightBox)
                        .then(events.addEventListenerOnLikes)
                        .then(photographerPageView.displayDefaultTotalLikesNumber) ;
                })
                .then(events.addMediaTagsEventListener)
                .then(events.addEventListenerOnLightBoxCloseButton)
                .then(events.addEventListenerOnLightBoxPreviousButton)
                .then(events.addEventListenerOnLightBoxNextButton)
                .then(events.addEventListenerOnPopularitySort)
                .then(events.addEventListenerOnDateSort)
                .then(events.addEventListenerOnTitleSort) ;

        }
    }
}