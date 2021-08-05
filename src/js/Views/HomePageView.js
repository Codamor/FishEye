import {allUserSelectedTags} from "../../../app.js";

export class HomePageView {

    constructor() {
    }

    toHtmlGallery(photographerObject){

        let photographerTags = photographerObject.tags ;

        let htmlPhotographerTags = "" ;
        photographerTags.forEach(tag => {
            htmlPhotographerTags +=
                `<a class="navigation__link navigation__link--inCard tag" enabled="false" title="Afficher les photographes de la catégorie ${tag}"
                    role="link" aria-label="Afficher les photographes de la catégorie ${tag}">
                    #${tag}
                 </a>`
        })

        let htmlCard =

            `<div class="card" visible="true" aria-label="photographe">
                <a class="card__link" href="public/common/photographer.html?id=${photographerObject._id}" title="Découvrez ${photographerObject._name}"  role="link" aria-label="Découvrez ${photographerObject._name}" >
                     <img class="card__picture" src="public/media/Photographers%20ID%20Photos/${photographerObject.portrait}" alt="">
                   <h2 class="card__name">
                     ${photographerObject._name}
                   </h2>
                </a>
            <h3 class="cards__location">
                 ${photographerObject._city}, ${photographerObject._country}
            </h3>
            <p class="card__tagline">
                 ${photographerObject._tagline}
            </p>
            <p class="card__price">
                 ${photographerObject._price} €/jour
            </p>
        
           <nav class="navigation navigation--forPhotographerCard" role="link" aria-label="photographer categories">
                ${htmlPhotographerTags}
           </nav>
        </div><!-- end photographer -->`

        document.getElementById("gallery").innerHTML += htmlCard ;
    }

    filterPhotographersByTag(event) { //TODO add multiple filter feature using allUserSelectedTags


        let userSelectedTag = event.target.innerText.toLowerCase() ;
        let allCardsFromPhotographersGallery = document.getElementsByClassName("card") ;


        if (!allUserSelectedTags.includes(userSelectedTag)){
            allUserSelectedTags.push(userSelectedTag)
        } else {
            let indexOfUserTagToDelete = allUserSelectedTags.indexOf(userSelectedTag) ;
            allUserSelectedTags.splice(indexOfUserTagToDelete, 1) ;
        }

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
}

