import {Events} from "../Controllers/Events.js";

export class PhotographerPageView{

    constructor() {
    }

    toHtmlMetaInformations(photographerObject){
        document.title = `${photographerObject._name}, photographe spécialiste.` ;//TODO add tags
        document.querySelector('meta[name="description"]').setAttribute("content", `${photographerObject._name}, photographe spécialiste.`);
    }

    displayDefaultTotalLikesNumber() {
        let allMediaLikes = document.getElementsByClassName("media__likes");
        let totalLikesNumber = 0;

        for (let i = 0; i < allMediaLikes.length; i++) {
            totalLikesNumber += Number(allMediaLikes[0].innerText);
        }

        document.getElementById("likes-number").innerText = totalLikesNumber ;
    }

    displayPrice(photographerObject){
        let priceInformation = `${photographerObject.price}€ / jour` ;
        document.getElementById("price").innerHTML += priceInformation  ;
    }

    likeMedia(event){

        let actualTotalLikesNumber = Number(document.getElementById("likes-number").innerText) ;
        let actualMediaLikesNumber = Number(event.target.innerText)

        document.getElementById("likes-number").innerText = (actualTotalLikesNumber +=1).toString() ;
        event.target.innerText = (actualMediaLikesNumber +=1).toString() ;
    }


    toHtmlBanner(photographerObject){
        let portraitPicturePath = `../media/Photographers%20ID%20Photos/${photographerObject.portrait}`
        let photographerTags = photographerObject.tags ;

        let photographerHtmlTags = "" ;
        photographerTags.forEach(tag => {
            photographerHtmlTags +=
                `<a class="navigation__link navigation__link--inCard tag" enabled="false" title="Afficher les photographies de la catégorie ${tag}"
                    role="link" aria-label="Afficher les photographies de la catégorie ${tag}">
                    
                    #${tag}
                   
                 </a>`
        }) ;

        let htmlBanner =
            `<div class="about__informations">
                <div class="card card--page" aria-label="photographe">
                    <h1 id="card__name" class="card__name card__name--page">
                        ${photographerObject.name}
                    </h1>
                    <h2 class="card__location card__location--page">
                        ${photographerObject.city}, ${photographerObject.country}
                    </h2>
                    <p class="card__tagline card__tagline--page">
                        ${photographerObject.tagline}
                    </p>
                    <nav class="navigation navigation--inPhotographerPage" role="link" aria-label="photographer categories">
                        ${photographerHtmlTags}
                    </nav>

                </div><!-- end photographer -->

                <button id="contact" class="button button--contact">Contactez-moi</button>

            </div>

            <div class="bio__picture">
                <img class="card__picture" src="${portraitPicturePath}" alt="${photographerObject._name}">
            </div>`

        document.getElementById("about").innerHTML += htmlBanner ;
    }

    toHtmlGallery(allPhotographerMedia, photographerName){

        let htmlGallery = "" ;

        //get only first name and remove "-" for composed first names
        let photographerNameForMediaPath = photographerName.split(" ")[0].replace("-"," ") ;

        allPhotographerMedia.forEach(media => {

            if (media.image){

                let mediaPath = `/public/media/${photographerNameForMediaPath}/${media.image}`

                htmlGallery +=
                    `   <div class="media" media-category="${media.tags}" visible="true">
                            <picture class="media__element">
                                <img id="${media.id}" src="${mediaPath}" date="${media.date}"alt="super architecture"> 
                            </picture>
                            <div class="media__informations">
                                <div class="media__title">
                                    ${media._title}
                                </div>
                                <div class="media__likes">
                                    ${media._likes}
                                </div>
                            </div>
                        </div>`

            } else if (media.video){

                let mediaPath = `/public/media/${photographerNameForMediaPath}/${media.video}`

                htmlGallery +=
                    `   <div class="media" media-category="${media.tags}" visible="true">
                            <video class="media__element">
                                <source id="${media.id}" src="${mediaPath}" date="${media.date}" alt="super architecture"> 
                            </video>
                            <div class="media__informations">
                                <div class="media__title">
                                    ${media._title}
                                </div>
                                <div class="media__likes">
                                    ${media._likes}
                                </div>
                            </div>
                        </div>`
            }

        })
        document.getElementById("media-gallery").innerHTML += htmlGallery ;
    }

    filterMediaByTag(event) {

        let userSelectedTag = event.target.innerText.slice(1);
        let allMediaFromGallery = document.getElementsByClassName("media") ;

        for (let i = 0; i < allMediaFromGallery.length; i++) {
            let mediaCategory = allMediaFromGallery[i].attributes.getNamedItem("media-category").value ;

            if (userSelectedTag !== mediaCategory){
                allMediaFromGallery[i].setAttribute(["visible"], false) ;
            } else if (userSelectedTag === mediaCategory){
                allMediaFromGallery[i].setAttribute(["visible"], true) ;
            }
        }
    }

    
    sortMediaByPopularity(event) {
        let actualMediaGallery = document.getElementById("media-gallery");

        let allMedia = [];
        for (let i = 0; i < document.getElementsByClassName("media").length; i++) {
            allMedia.push(document.getElementsByClassName("media")[i])
        }

        let firstMediaLikesNumber = Number(allMedia[0].lastElementChild.lastElementChild.innerText);
        let secondMediaLikesNumber = Number(allMedia[1].lastElementChild.lastElementChild.innerText);

        if (firstMediaLikesNumber < secondMediaLikesNumber){

            //sort array by popularity => descending
            allMedia.sort(function (a,b){
                let aLikesNumber = Number(a.lastElementChild.lastElementChild.innerText) ;
                let bLikesNumber = Number(b.lastElementChild.lastElementChild.innerText) ;

                if (aLikesNumber < bLikesNumber){return 1} ;
                if (aLikesNumber > bLikesNumber){return -1}
            });

            actualMediaGallery.innerText = "" ;
            allMedia.forEach(media => {
                actualMediaGallery.innerHTML += media.outerHTML ;
            }) ;

        } else if (firstMediaLikesNumber > secondMediaLikesNumber){

            //sort array by popularity => ascending
            allMedia.sort(function (a,b){
                let aLikesNumber = Number(a.lastElementChild.lastElementChild.innerText) ;
                let bLikesNumber = Number(b.lastElementChild.lastElementChild.innerText) ;

                if (aLikesNumber < bLikesNumber){return -1} ;
                if (aLikesNumber > bLikesNumber){return 1}
            });

            actualMediaGallery.innerText = "" ;
            allMedia.forEach(media => {
                actualMediaGallery.innerHTML += media.outerHTML ;
            }) ;
        }

        let events = new Events();
        events.addEventListenerOnMediaToOpenLightBox();
        events.addEventListenerOnLightBoxCloseButton();
        events.addEventListenerOnLightBoxPreviousButton();
        events.addEventListenerOnLightBoxNextButton();
    }

    sortMediaByDate(){

        let actualMediaGallery = document.getElementById("media-gallery") ;

        let allMedia = [] ;
        for (let i = 0; i < document.getElementsByClassName("media").length; i++) {
            allMedia.push(document.getElementsByClassName("media")[i])
        }

        let firstMediaDate = new Date(allMedia[0].firstElementChild.firstElementChild.attributes.date.value) ;
        let secondMediaDate = new Date(allMedia[1].firstElementChild.firstElementChild.attributes.date.value) ;

        if (firstMediaDate < secondMediaDate){

            //sort array by popularity => descending
            allMedia.sort(function (a,b){
                let aDate = new Date(a.firstElementChild.firstElementChild.attributes.date.value) ;
                let bDate = new Date(b.firstElementChild.firstElementChild.attributes.date.value) ;

                if (aDate < bDate){return 1} ;
                if (aDate > bDate){return -1}
            });

            actualMediaGallery.innerText = "" ;
            allMedia.forEach(media => {
                actualMediaGallery.innerHTML += media.outerHTML ;
            }) ;

        } else if (firstMediaDate > secondMediaDate){
            //sort array by popularity => ascending
            allMedia.sort(function (a,b){
                let aDate = new Date(a.firstElementChild.firstElementChild.attributes.date.value) ;
                let bDate = new Date(b.firstElementChild.firstElementChild.attributes.date.value) ;

                if (aDate < bDate){return -1} ;
                if (aDate > bDate){return 1}
            });

            actualMediaGallery.innerText = "" ;
            allMedia.forEach(media => {
                actualMediaGallery.innerHTML += media.outerHTML ;
            }) ;
        }

        let events = new Events() ;
        events.addEventListenerOnMediaToOpenLightBox() ;
        events.addEventListenerOnLightBoxCloseButton();
        events.addEventListenerOnLightBoxPreviousButton();
        events.addEventListenerOnLightBoxNextButton() ;
    }

    sortMediaByTitle(){

        let actualMediaGallery = document.getElementById("media-gallery") ;

        let allMedia = [] ;
        for (let i = 0; i < document.getElementsByClassName("media").length; i++) {
            allMedia.push(document.getElementsByClassName("media")[i])
        }

        let firstMediaTitle = allMedia[0].lastElementChild.firstElementChild.innerText ;
        let secondMediaTitle = allMedia[1].lastElementChild.firstElementChild.innerText ;

        if (firstMediaTitle < secondMediaTitle){

            allMedia.sort(function (a,b){
                let aTitle = a.lastElementChild.firstElementChild.innerText ;
                let bTitle = b.lastElementChild.firstElementChild.innerText ;

                if (aTitle < bTitle){return 1} ;
                if (aTitle > bTitle){return -1}
            });

            actualMediaGallery.innerText = "" ;
            allMedia.forEach(media => {
                actualMediaGallery.innerHTML += media.outerHTML ;
            }) ;

        } else if (firstMediaTitle > secondMediaTitle){

            allMedia.sort(function (a,b){
                let aTitle = a.lastElementChild.firstElementChild.innerText ;
                let bTitle = b.lastElementChild.firstElementChild.innerText ;

                if (aTitle < bTitle){return -1} ;
                if (aTitle > bTitle){return 1}
            });

            actualMediaGallery.innerText = "" ;
            allMedia.forEach(media => {
                actualMediaGallery.innerHTML += media.outerHTML ;
            }) ;
        }
        let events = new Events() ;
        events.addEventListenerOnMediaToOpenLightBox() ;
        events.addEventListenerOnLightBoxCloseButton();
        events.addEventListenerOnLightBoxPreviousButton();
        events.addEventListenerOnLightBoxNextButton() ;
    }

    openContactModal(){
        document
            .getElementById("contact-modal")
            .setAttribute(["visible"], true) ;
    }

    closeContactModal(){

        document
            .getElementById("contact-modal")
            .setAttribute(["visible"], false) ;
    }

    submitContactForm(event){
        event.preventDefault() ;
        let firstName = document.getElementById("firstName").value ;
        let lastName = document.getElementById("lastName").value  ;
        let email = document.getElementById("email").value  ;

        console.log("Prénom : ", firstName) ;
        console.log("Nom : ", lastName) ;
        console.log("Email : ", email) ;
    }

}