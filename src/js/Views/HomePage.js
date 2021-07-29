import {PhotographerController} from "../Controller/PhotographerController.js";
import {Photographer} from "../Entity/Photographer.js";
import {addPhotographerTagsEventListener} from "../elements.js";

export class HomePage {


    displayPhotographersGallery(){

        let allPhotographers = new PhotographerController().getAllPhotographers() ;
        let photographersGallery = "";

        allPhotographers
            .then(data => {
                data.forEach(element =>{
                    let photographer = new Photographer(element.name, element.id, element.city, element.country, element.tags, element.tagline,
                                                        element.price, element.portrait) ;

                    photographersGallery += photographer.toHtmlCard() ;

                })
                document.getElementById("gallery").innerHTML = photographersGallery ;
            })
            .then(addPhotographerTagsEventListener)
    }
}



