import {FishEyeApi} from "/src/api/FishEye.js" ;
import {Photographer} from "../Entity/photographer.js";

export class photographerController {

    async getAllPhotographers(){
        let allPhotographers = [] ;
        const FISHEYEDATA = await new FishEyeApi().getFishEyeData() ;

        return FISHEYEDATA.photographers ;

    }
}

