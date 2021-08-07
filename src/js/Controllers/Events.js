import {LightBoxView} from "../Views/LightBoxView.js";
import {PhotographerPageView} from "../Views/PhotographerPageView.js";
import {HomePageView} from "../Views/HomePageView.js";

export class Events{
    constructor() {
    }

    //TODO refactor function names to what they serve
    //TODO add global addEventListener for HomePage and PhotographerPage

    addPhotographerTagsEventListener() {
        let homePageView = new HomePageView()
        let allPhotographersTags = document.getElementsByClassName("tag");

        for (let i = 0; i < allPhotographersTags.length; i++) {
            allPhotographersTags[i].addEventListener("click", homePageView.filterPhotographersByTag);
        }
    }

    addMediaTagsEventListener(){

        let photographerPageView = new PhotographerPageView() ;
        let allTags = document.getElementsByClassName("tag") ;
        for (let i = 0; i < allTags.length; i++) {
            allTags[i].addEventListener("click", photographerPageView.filterMediaByTag) ;
        }

    }

    addEventListenerOnMediaToOpenLightBox(){
        let lightBoxView = new LightBoxView() ;
        let allMedia = document.getElementsByClassName("media__element") ;

        for (let i = 0; i < allMedia.length; i++) {
            allMedia[i].addEventListener("click", (lightBoxView.openLightBox))
        }
    }

    addEventListenerOnLightBoxCloseButton(){
        let lightBoxView = new LightBoxView() ;
        let lightBoxCloseButton = document.getElementById("close") ;

        lightBoxCloseButton
            .addEventListener("click", lightBoxView.closeMediaLightBox)
    }

    addEventListenerOnLightBoxPreviousButton(){
        let lightBoxView = new LightBoxView() ;
        document
            .getElementById("prev")
            .addEventListener("click", lightBoxView.prevMedia) ;
    }

    addEventListenerOnLightBoxNextButton(){
        let lightBoxView = new LightBoxView() ;
        document
            .getElementById("next")
            .addEventListener("click", lightBoxView.nextMedia) ;
    }

    addEventListenerOnPopularitySort(){
        let photographerPageView = new PhotographerPageView() ;
        document
            .getElementById("popularity-sort")
            .addEventListener("click", photographerPageView.sortMediaByPopularity ) ;
    }

    addEventListenerOnDateSort(){
        let photographerPageView = new PhotographerPageView() ;
        document
            .getElementById("date-sort")
            .addEventListener("click", photographerPageView.sortMediaByDate ) ;
    }

    addEventListenerOnTitleSort(){
        let photographerPageView = new PhotographerPageView() ;
        document
            .getElementById("title-sort")
            .addEventListener("click", photographerPageView.sortMediaByTitle ) ;
    }

    addEventListenerOnLikes(){
        let photographerPageView = new PhotographerPageView() ;

        let allMedia = document.getElementsByClassName("media__likes") ;

        for (let i = 0; i < allMedia.length; i++) {
            allMedia[i].addEventListener("click", photographerPageView.likeMedia)
        }
    }

}