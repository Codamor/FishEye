import {FishEyeApi} from "/src/api/FishEye.js" ;
import {Photographer} from "../Entity/photographer.js";

export class PhotographerController {

    async getAllPhotographers(){
        const FISHEYEDATA = await new FishEyeApi().getFishEyeData() ;

        return FISHEYEDATA.photographers ;
    }
}

