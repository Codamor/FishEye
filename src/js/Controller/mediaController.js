import {FishEyeApi} from "/src/api/FishEye.js" ;
import {Media} from "../Entity/media.js";

export class MediaController {

    async getAllMedias(){
        const FISHEYEDATA = await new FishEyeApi().getFishEyeData() ;

        return (FISHEYEDATA.media );
    }
}

