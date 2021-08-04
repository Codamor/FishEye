import {PhotographerPageView} from "../Views/PhotographerPageView.js";
import {LightBoxView} from "../Views/LightBoxView.js";

export class Events{
    constructor() {
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
        document
            .getElementById("prev")
            .addEventListener("click", lightBoxView.previousMedia) ;
    }

    addEventListenerOnLightBoxPreviousButton(){
        document
            .getElementById("prev")
            .addEventListener("click", lightBoxView.nextMedia) ;
    }
}