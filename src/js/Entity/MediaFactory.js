import {Image, Video} from "./Media.js";

export class MediaFactory {

    displayMedia(media){
        if(media.image) {

            return new Image(media.id,media.photographerId, media.title, media.tags, media.likes, media.date, media.price, media.image);

        } else if (media.video) {

            return new Video(media.id,media.photographerId, media.title, media.tags, media.likes, media.date, media.price, media.video) ;
        }
    }
}
