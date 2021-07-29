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
        allPhotographersTags[i].addEventListener("click", filterPhotographersByTag) ;
    }
}

export let allUserSelectedTags = [] ;




export function filterPhotographersByTag(event){

    let userSelectedTag = event.target.innerText.toLowerCase() ;
    let allTagsFromActualPage = document.getElementsByClassName("navigation__link") ;
    let allCardsFromPhotographersGallery = document.getElementsByClassName("card") ;


    if (!allUserSelectedTags.includes(userSelectedTag)){
        allUserSelectedTags.push(userSelectedTag)
    } else {
        let indexOfUserTagToDelete = allUserSelectedTags.indexOf(userSelectedTag) ;
        allUserSelectedTags.splice(indexOfUserTagToDelete, 1) ;
    }

    console.log(allUserSelectedTags)


    for (let i = 0; i < allCardsFromPhotographersGallery.length; i++) {

        for (let j = 0; j < allUserSelectedTags.length; j++) {

            if (!allCardsFromPhotographersGallery[i].innerText.includes(allUserSelectedTags[j])){

                allCardsFromPhotographersGallery[i].setAttribute(["visible"], false)

            } else if (allCardsFromPhotographersGallery[i].innerText.includes(allUserSelectedTags[j])){
                allCardsFromPhotographersGallery[i].setAttribute(["visible"], true)
            }
        }
    }


}