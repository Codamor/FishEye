import {FishEyeApi} from "/src/api/FishEye.js";

export class PhotographerController {

    async getAllPhotographers(){
        const FISHEYEDATA = await new FishEyeApi().getFishEyeData() ;

        return FISHEYEDATA.photographers ;

    }

    async getPhotographerById(photographerId){

        const FISHEYEDATA = await new FishEyeApi().getFishEyeData() ;

        let allPhotographers = FISHEYEDATA.photographers ;

        //TODO why allPhotographers.then not a function


    }
}

