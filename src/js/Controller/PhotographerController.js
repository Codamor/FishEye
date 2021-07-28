import {FishEyeApi} from "/src/api/FishEye.js" ;
import {Photographer} from "../Entity/Photographer.js";

export class PhotographerController {

    async getAllPhotographers(){
        const FISHEYEDATA = await new FishEyeApi().getFishEyeData() ;

        return FISHEYEDATA.photographers ;
    }
}

