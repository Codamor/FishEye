import {Photographer} from "../Entity/Photographer.js";
import {MediaFactory} from "../Entity/MediaFactory.js";


export class Model {
    constructor(db) {
        this._db = db ;
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

        return  allPhotographers ;
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
        return photographer ;
    }

    async getAllPhotographersByCategory(category) {

        let response = await fetch(this._db);
        let data = await response.json();

        let allPhotographersByCategoryArray = [] ;

        data.photographers.forEach(photographerInPhotographersData => {
            photographerInPhotographersData.tags.forEach(tag => {
                if (category === tag){
                    let photographer = new Photographer(photographerInPhotographersData.name,
                        photographerInPhotographersData.id,
                        photographerInPhotographersData.city,
                        photographerInPhotographersData.country,
                        photographerInPhotographersData.tags,
                        photographerInPhotographersData.tagline,
                        photographerInPhotographersData.price,
                        photographerInPhotographersData.portrait) ;

                    allPhotographersByCategoryArray.push(photographer) ;
                }
            })
        });
        return allPhotographersByCategoryArray ;
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

    async getAllMediaByPhotographerIdAndCategory(photographerId, category) {
        let response = await fetch(this._db);
        let data = await response.json();
        let mediaFactory = new MediaFactory() ;

        let allMediaByPhotographerIdAndCategory = [];

        data.media.forEach(element => {
            if(element.photographerId === photographerId){
                element.tags.forEach(tag => {
                    if (tag === category){
                        let media = mediaFactory.createMedia(element)
                        allMediaByPhotographerIdAndCategory.push(media) ;
                    }
                })

            }
        });
        return allMediaByPhotographerIdAndCategory ;
    }
}