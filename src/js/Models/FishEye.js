import {Photographer} from "./Photographer.js";
import {MediaFactory} from "./MediaFactory.js";
import {Media} from "./Media.js";

export class FishEyeApi {

    constructor(db) {
        this._db = db;
    }

    async getAllPhotographers() {
        let response = await fetch(this._db);
        let data = await response.json();

        let allPhotographers = [];

        await data.photographers.forEach(element => {
            allPhotographers.push(new Photographer( element.name,
                                                    element.id,
                                                    element.city,
                                                    element.country,
                                                    element.tags,
                                                    element.tagline,
                                                    element.price,
                                                    element.portrait));
        });

        return allPhotographers;
    }

    async getPhotographerById(photographerId) {

        let response = await fetch(this._db);
        let data = await response.json();

        let photographer ;

        data.photographers.forEach(element => {

            if(element.id === photographerId){
                photographer = new Photographer( element.name,
                                                 element.id,
                                                 element.city,
                                                 element.country,
                                                 element.tags,
                                                 element.tagline,
                                                 element.price,
                                                 element.portrait) ;
            }
        });

        return photographer;
    }

    async getAllMedia() {
        let response = await fetch(this._db);
        let data = await response.json();
        let mediaFactory = new MediaFactory() ;

        let allMedia = [];

        data.media.forEach(element => {
            let media = mediaFactory.createMedia(element) ;
            allMedia.push(media);
        });

        return allMedia;
    }

    async getAllMediaByPhotographerId(photographerId) {
        let response = await fetch(this._db);
        let data = await response.json();
        let mediaFactory = new MediaFactory() ;

        let allMediaByPhotographerId = [];

        data.media.forEach(element => {
            if(element.photographerId === photographerId){
                let media = mediaFactory.createMedia(element)
                allMediaByPhotographerId.push(media) ;
            }
        });

        return allMediaByPhotographerId;
    }
}