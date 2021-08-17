"use strict" ;

import {Photographer} from "./Entity/Photographer.js";
import {MediaFactory} from "./Entity/MediaFactory.js";


export class Model {
    constructor(db) {
        this._db = db ;
    }

    checkError(response){
        if (!response.ok){
            throw new Error(`An error has occurred : ${response.status}`) ;
        }
    }

    async getAllTagsForNavigation(){
        let response = await fetch(this._db);

        this.checkError(response) ;

        let data = await response.json();
        let allTagsAvailableForNavigation = [];

        await data.photographers.forEach(element => {
            element.tags.forEach(tag => {
                if (!allTagsAvailableForNavigation.includes(tag)){
                    allTagsAvailableForNavigation.push(tag)
                }
            })
        })
        return allTagsAvailableForNavigation ;
    }

    async getAllPhotographers() {

        let response = await fetch(this._db);
        this.checkError(response) ;

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
        this.checkError(response) ;

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

    async getAllMediaByPhotographerId(photographerId) {
        let response = await fetch(this._db);
        this.checkError(response) ;

        let data = await response.json();
        let mediaFactory = new MediaFactory() ;

        let allMediaByPhotographerId = [];

        data.media.forEach(element => {
            if(element.photographerId === photographerId){
                let media = mediaFactory.displayMedia(element)
                allMediaByPhotographerId.push(media) ;
            }
        });
        return allMediaByPhotographerId;
    }

    async getPhotographerTotalLikes(photographerId){
        let response = await fetch(this._db);
        this.checkError(response) ;

        let data = await response.json();
        let totalLikesNumber = 0;

        data.media.forEach(element => {
            if(element.photographerId == photographerId){
                totalLikesNumber += element.likes ;
            }
        });
        return totalLikesNumber ;
    }

    async getPhotographerPrice(photographerId){
        let response = await fetch(this._db);
        this.checkError(response) ;
        
        let data = await response.json();
        let photographerPrice = 0;

        data.media.forEach(element => {
            if(element.photographerId == photographerId){
                photographerPrice= element.price ;
            }
        });
        return  photographerPrice ;
    }
}
