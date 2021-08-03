import {Photographer} from "./Photographer.js";
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

        let allMedia = [];

        data.media.forEach(element => {
            allMedia.push(new Media(element.id,
                                    element.photographerId,
                                    element.title,
                                    element.image,
                                    element.tags,
                                    element.likes,
                                    element.date,
                                    element.price)) ;
        });

        return allMedia;
    }

    async getAllMediaByPhotographerId(photographerId) {
        let response = await fetch(this._db);
        let data = await response.json();

        let allMediaByPhotographerId = [];

        data.media.forEach(element => {

            if(element.photographerId === photographerId){
                allMediaByPhotographerId.push(new Media(element.id,
                                                        element.photographerId,
                                                        element.title,
                                                        element.image,
                                                        element.tags,
                                                        element.likes,
                                                        element.date,
                                                        element.price)) ;
            }

        });

        return allMediaByPhotographerId;
    }
}