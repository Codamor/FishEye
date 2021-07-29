import {HomePage} from "./Views/HomePage.js";

//DOM ELEMENTS
export const gallery = document.getElementById("gallery") ;


//FUNCTION
export function enableTag(tag){
    return document.setAttribute(["enabled"], true) ;
}

export function disableTag(tag){
    return document.setAttribute(["enabled"], false) ;
}


//EVENTS LISTENERS
export  function addPhotographerTagsEventListener(){
    let allPhotographersTags = document.getElementsByClassName("tag") ;

    for (let i = 0; i < allPhotographersTags.length; i ++){
        allPhotographersTags[i].addEventListener("click", new HomePage().displayPhotographersGallery) ;
    }
}

