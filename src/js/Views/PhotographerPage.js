import {Photographer} from "../Entity/Photographer.js";
import {PhotographerController} from "../Controller/PhotographerController.js";
import {MediaController} from "../Controller/MediaController.js";
import {MediaFactory} from "../Factory/MediaFactory.js";

export class PhotographerPage{

    displayPhotographerPage(){

        let photographerPageUrl = new URL(window.location.href) ;

        let photographerId = photographerPageUrl.searchParams.get("id") ;

        let allPhotographers = new PhotographerController().getAllPhotographersList() ; //TODO replace by getPhotographerMediaList

        let thisPhotographerMedia = new MediaController().getPhotographerMediaList(photographerId) ;

        let mediaFactory = new MediaFactory() ;

        let htmlGallery = "" ;

        allPhotographers.then(photographers => {
            photographers.forEach(element => {
                if(element.id == photographerId){

                    //create photographer
                    let photographer = new Photographer(element.name,
                                                        element.id,
                                                        element.city,
                                                        element.country,
                                                        element.tags,
                                                        element.tagline,
                                                        element.price,
                                                        element.portrait) ;

                    //display photographer meta information
                    photographer.toHtmlMetaInformations() ;

                    //display photographer banner
                    photographer.toHtmlBanner() ;

                    //display photographer media list
                    thisPhotographerMedia.then(allMedia => {
                        allMedia.forEach(element => {
                            let media = mediaFactory.createMedia(element) ;

                            htmlGallery += media.toHtml(photographer.name.split(" ")[0])

                        })
                        document.getElementById("gallery").innerHTML += htmlGallery ;
                    })
                }
            })
        })

    }
}