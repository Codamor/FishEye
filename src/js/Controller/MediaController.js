import {FishEyeApi} from "../api/FishEye.js";

export class MediaController {

    async getAllMedias(){
        const FISHEYEDATA = await new FishEyeApi().getFishEyeData() ;

        return FISHEYEDATA.media;
    }

    async getPhotographerMediaList(photographerId){
        const FISHEYEDATA = await new FishEyeApi().getFishEyeData() ;
        let photographerMediaList = [] ;

        FISHEYEDATA.media.forEach(media => {
            if(media.photographerId == photographerId){
                photographerMediaList.push(media) ;
            }
        })

    return photographerMediaList ;
    }
}







