import {Image, Video} from "../Entity/Media.js";
import {MediaController} from "../Controller/MediaController.js";

export class MediaFactory{

    createMedia(media){
        if(media.image) {
            return new Image(media.id,media.photographerId, media.title, media.tags, media.likes, media.date, media.price, media.image) ;

        } else {
            return new Video(media.id,media.photographerId, media.title, media.tags, media.likes, media.date, media.price, media.video) ;
        }
    }
}
