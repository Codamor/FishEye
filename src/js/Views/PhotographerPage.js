import {Photographer} from "../Entity/Photographer.js";
import {PhotographerController} from "../Controller/PhotographerController.js";

export class PhotographerPage{

    displayPhotographerPage(){

        let photographerPageUrl = new URL(window.location.href) ;

        let photographerId = photographerPageUrl.searchParams.get("id") ;

        let allPhotographer = new PhotographerController().getAllPhotographers() ;

        allPhotographer.then(photographers => {
            photographers.forEach(element => {
                if(element.id == photographerId){

                    //create photographer
                    let photographer = new Photographer(element.name, element.id, element.city, element.country,
                                                        element.tags, element.tagline, element.price, element.portrait) ;

                    //display photographer meta information
                    photographer.toHtmlMetaInformations() ;

                    //create photographer banner
                    photographer.toHtmlBanner() ;

                    //create photographer gallery
                }
            })
        })

    }
}