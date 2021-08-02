import {FishEyeApi} from "/src/api/FishEye.js";
import {Photographer} from "../Entity/Photographer.js";

export class PhotographerController {

    async getAllPhotographersList(){

        let allPhotographersList = [] ;

        const FISHEYEDATA = await new FishEyeApi().getFishEyeData() ;

        FISHEYEDATA.photographers.forEach(element => {
            let photographer = new Photographer(element.name,
                                                element.id,
                                                element.city,
                                                element.country,
                                                element.tags,
                                                element.tagline,
                                                element.price,
                                                element.portrait) ;

            allPhotographersList.push(photographer) ;

        }) ;

        return allPhotographersList ;
    }

    async getPhotographerById(photographerId){

        const FISHEYEDATA = await new FishEyeApi().getFishEyeData() ;

        FISHEYEDATA.photographers.forEach(element => {
            if(element.id == photographerId){
                let photographer = new Photographer(element.name,
                                                    element.id,
                                                    element.city,
                                                    element.country,
                                                    element.tags,
                                                    element.tagline,
                                                    element.price,
                                                    element.portrait) ;

                return photographer;
            }
        }) ;
    }
}

