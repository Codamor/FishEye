import {PhotographerController} from "../Controller/PhotographerController.js";
import {addPhotographerTagsEventListener} from "../elements.js";

export class HomePage {

    displayAllPhotographersCards(){

        let allPhotographersList = new PhotographerController().getAllPhotographersList() ;
        let photographersGallery = "";

        allPhotographersList
            .then(photographersList => {
                photographersList.forEach(photographer =>{

                    photographersGallery += photographer.toHtmlCard() ;

                })
                document.getElementById("gallery").innerHTML = photographersGallery ;
            })
            .then(addPhotographerTagsEventListener)
    }
}



