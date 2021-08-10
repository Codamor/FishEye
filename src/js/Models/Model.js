import {Photographer} from "./Photographer.js";
import {Media} from "./Media.js";


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

    
}
