import {Image, Video} from "../Entity/Media.js";

export class MediaFactory{

    createMediaFactory(media){
        if(media.image) {
            return new Image() ;

        } else {
            return new Video();
        }
    }
}