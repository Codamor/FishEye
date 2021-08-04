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
}