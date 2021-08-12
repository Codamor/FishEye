export class View {
    constructor() {
    }

    displayAllTagsForNavigation(allPhotographerTags){
        allPhotographerTags
            .then(tags => {
                tags.forEach(element => {
                    let tag = element.charAt(0).toUpperCase() + element.slice(1) ; //set first character tag uppercase

                    let navigationTag =
                        `<a href="#" class="navigation__link tag" data-tag-category="${tag.toLowerCase()}" data-tag-selected-status="default" title="Afficher les photographes de ${tag.toLowerCase()}" role="link" aria-label="Afficher les photographes de ${tag.toLowerCase()}">
                            #${tag}
                        </a>`

                    document.getElementById("navigation").innerHTML += navigationTag
                })
            })
    }

    displayPhotographersGallery(photographersArray){
        photographersArray
            .then(data => {
                data.forEach(photographer => {

                    let photographerTags = photographer.tags ;

                    let htmlPhotographerTags = "" ;
                    photographerTags.forEach(tag => {
                        htmlPhotographerTags +=
                            `<a href="#" class="navigation__link navigation__link--inCard tag" data-tag-category="${tag}" data-tag-selected-status="default" title="Afficher les photographes de la catégorie ${tag}"
                                role="button" aria-label="Afficher les photographes de la catégorie ${tag}">
                                #${tag}
                            </a>`
                    })

                    let htmlCard =

                        `<div class="card" aria-label="photographe" data-photographer-categories="${photographerTags}" >
                            <a class="card__link" href="public/common/photographer.html?id=${photographer._id}" title="Découvrez ${photographer._name}"  role="link" aria-label="Découvrez ${photographer._name}" >
                                <img class="card__picture" src="public/media/Photographers%20ID%20Photos/${photographer.portrait}" alt="${photographer._name}" aria-label="${photographer._name}" title="${photographer._name}">
                               <h2 class="card__name">
                                 ${photographer._name}
                               </h2>
                            </a>
                            <h3 class="cards__location">
                                 ${photographer._city}, ${photographer._country}
                            </h3>
                            <p class="card__tagline">
                                 ${photographer._tagline}
                            </p>
                            <p class="card__price">
                                 ${photographer._price} €/jour
                            </p>
                        
                           <nav class="navigation navigation--forPhotographerCard" role="link" aria-label="photographer categories">${htmlPhotographerTags}
                           </nav>
                        </div><!-- end card -->`

                    document.getElementById("gallery").innerHTML += htmlCard ;
                })
            })
    }

    displayPhotographerMetaData(photographer){
        photographer
            .then(element => {
                document.title = `${element._name}, photographe spécialiste.` ;//TODO add tags
                document.querySelector('meta[name="description"]').setAttribute("content", `${element._name}, photographe spécialiste.`);
            })
        }

    displayPhotographerBanner(photographer){
        photographer
            .then(element => {
                let portraitPicturePath = `../media/Photographers%20ID%20Photos/${element.portrait}`
                let photographerTags = element.tags ;

                let photographerHtmlTags = "" ;
                photographerTags.forEach(tag => {
                    photographerHtmlTags +=`<a class="navigation__link navigation__link--inCard tag" data-tag-category="${tag}" data-tag-selected-status="default" title="Afficher les photographies de la catégorie ${tag}"
                    aria-label="Afficher les photographies de la catégorie ${tag}" tabindex="0">#${tag}</a>`
                }) ;

                let htmlBanner =
                    `<div class="about__informations">
                        <div class="card card--photographer-page">
                            <h1 id="card__name" class="card__name card__name--photographer-page">
                                ${element.name}
                            </h1>
                            <h2 class="card__location card__location--photographer-page">
                                ${element.city}, ${element.country}
                            </h2>
                            <p class="card__tagline card__tagline--photographer--page">
                                ${element.tagline}
                            </p>
                            <nav class="navigation navigation--photographerPage" aria-label="photographer categories" data-photographer-categories="${photographerTags}">
                                ${photographerHtmlTags}
                            </nav>
                        </div><!-- end about informations -->

                        <button id="contact" tabindex="0" aria-label="Contact Me" class="button button--contact">Contactez-moi</button>

                    </div>
    
                    <div class="bio__picture">
                        <img class="card__picture card__picture--photographer-page" src="${portraitPicturePath}" alt="${element._name}">
                    </div>`

                document.getElementById("about").innerHTML += htmlBanner ;
            }) ;
    }

    displayPhotographerMediaGallery(photographerMedia, photographer){

        let mediaGallery = "" ;

        photographerMedia
            .then(data => {
                photographer
                    .then(element => {

                        //get only first name and remove "-" for composed first names
                        let photographerNameForMediaPath = element.name.split(" ")[0].replace("-"," ") ;

                        data.forEach(media => {

                            if (media.image){

                                let mediaPath = `/public/media/${photographerNameForMediaPath}/${media.image}`

                                mediaGallery += //TODO solve mediaId at 2 locations
                                    `<div class="media" data-media-id="${media.id}" data-media-type="picture"  data-media-status="default" data-media-title="${media.title}" data-media-category="${media.tags}" data-media-date="${media.date}" data-media-likes="${media.likes}">
                                        <picture class="media__element" tabindex="0">
                                            <img data-media-id="${media.id}" src="${mediaPath}" alt="${media.title}" title="${media.title}"> 
                                        </picture>
                                        <div class="media__informations">
                                            <div class="media__title">
                                                ${media.title}
                                            </div>
                                            <div class="media__likes" tabindex="0">
                                                ${media.likes}
                                            </div>
                                        </div>
                                    </div>`

                            } else if (media.video){

                                let mediaPath = `/public/media/${photographerNameForMediaPath}/${media.video}`

                                mediaGallery += //TODO solve mediaId at 2 locations
                                    `<div class="media" data-media-id="${media.id}" data-media-type="video" data-media-status="default" data-media-title="${media.title}"  data-media-category="${media.tags}" data-media-date="${media.date}" data-media-likes="${media.likes}">
                                        <video data-media-id="${media.id}" class="media__element" tabindex="0">
                                            <source src="${mediaPath}" alt="${media.title}" title="${media.title}"> 
                                        </video>
                                        <div class="media__informations">
                                            <div class="media__title">
                                                ${media._title}
                                            </div>
                                            <div class="media__likes" tabindex="0">
                                                ${media._likes}
                                            </div>
                                        </div>
                                    </div>`
                            }

                        })
                        document.getElementById("media-gallery").innerHTML += mediaGallery ;
                    })
            })
    }

    displayTotalLikes(photographerTotalLikes) {
        photographerTotalLikes
            .then(data => {
                document.getElementById("likes-number").innerText = data ;
                //TODO add total likes number data attribute
            })
    }

    displayPrice(photographerPrice){
        photographerPrice
            .then(data => {
                document.getElementById("price").innerText = `${data}€ / jour` ;
                //TODO add photographer price data attribute
            })
    }

    displayNavigationTagsStatusStyles(userSelectedTagCategory, userSelectedTagStatus){
        let allTagsInPage = document.getElementsByClassName("tag") ;

        for (let i = 0; i < allTagsInPage.length; i++) {
            if (allTagsInPage[i].dataset.tagCategory === userSelectedTagCategory) {
                if(userSelectedTagStatus === "selected"){
                    allTagsInPage[i].dataset.tagSelectedStatus = "default" ;
                } else {
                    allTagsInPage[i].dataset.tagSelectedStatus = "selected" ;
                }
            } else {
                allTagsInPage[i].dataset.tagSelectedStatus = "default" ;
            }
        }
    }

    onHomePageTags(){
        document
            .addEventListener("click", event => {
                if (event.target.className.includes("tag")){

                    let userSelectedTagCategory = event.target.dataset.tagCategory ;
                    let userSelectedTagStatus = event.target.dataset.tagSelectedStatus ;

                    this.filterPhotographerByTag(userSelectedTagCategory, userSelectedTagStatus)
                }
            })
    }

    filterPhotographerByTag(userSelectedTagCategory, userSelectedTagStatus){

        this.displayNavigationTagsStatusStyles(userSelectedTagCategory, userSelectedTagStatus) ;

        let allPhotographersCards = document.getElementsByClassName("card") ;

        if (userSelectedTagStatus ==="default"){
            for (let i = 0; i < allPhotographersCards.length; i++) {
                let photographerCategories = allPhotographersCards[i].dataset.photographerCategories.split(",") ;
                if (!photographerCategories.includes(userSelectedTagCategory)){
                    allPhotographersCards[i].classList.add("card--isHidden") ;
                } else if (photographerCategories.includes(userSelectedTagCategory)){
                    allPhotographersCards[i].classList.remove("card--isHidden") ;
                }
            }
        } else {
            for (let i = 0; i < allPhotographersCards.length; i++) {
                let photographerCategories = allPhotographersCards[i].dataset.photographerCategories.split(",") ;
                if (!photographerCategories.includes(userSelectedTagCategory)) {
                    allPhotographersCards[i].classList.remove("card--isHidden");
                }
            }
        }
    }

    onPhotographerPageTags(){
        document
            .addEventListener("click", event => {
                if (event.target.className.includes("tag")){

                    let userSelectedTagCategory = event.target.dataset.tagCategory ;
                    let userSelectedTagStatus = event.target.dataset.tagSelectedStatus ;

                    this.filterMediaByCategory(userSelectedTagCategory, userSelectedTagStatus)
                }
            })
    }

    filterMediaByCategory(userSelectedTagCategory, userSelectedTagStatus){

        this.displayNavigationTagsStatusStyles(userSelectedTagCategory,userSelectedTagStatus ) ;

        let allMedia = document.getElementsByClassName("media") ;

        if (userSelectedTagStatus ==="default"){

            for (let i = 0; i < allMedia.length; i++) {
                let mediaCategory = allMedia[i].dataset.mediaCategory ;
                if (mediaCategory !== userSelectedTagCategory){
                    allMedia[i].classList.add("card--isHidden") ;
                    allMedia[i].dataset.mediaStatus = "unselected" ;
                } else if (mediaCategory === userSelectedTagCategory){
                    allMedia[i].classList.remove("card--isHidden") ;
                    allMedia[i].dataset.mediaStatus = "selected" ;
                }
            }
        } else {

            for (let i = 0; i < allMedia.length; i++) {
                let mediaCategory = allMedia[i].dataset.mediaCategory;
                if (mediaCategory !== userSelectedTagCategory) {
                    allMedia[i].classList.remove("card--isHidden");
                    allMedia[i].dataset.mediaStatus = "default" ;
                }
                if (mediaCategory === userSelectedTagCategory) {
                    allMedia[i].dataset.mediaStatus = "default" ;
                }
            }
        }
    }

    onContactModal(){
        document
            .addEventListener("click", event => {
                if(event.target.id ==="contact"){
                    this.displayContactModal() ;
                }
            })
    }

    displayContactModal(){
        let photographerName = document.getElementById("card__name").innerText ;

        document.getElementById("photographer-name").innerText = photographerName ;

        document
            .getElementById("contact-modal")
            .classList.remove("contact-modal--isHidden")
    }

    onCloseContactModal() {
        document
            .addEventListener("click", event => {
                if (event.target.id === "contact-form-close") {
                    this.closeContactModal();
                }
            })
    }

    onSubmitContactButton(){
        document
            .addEventListener("click", event => {
                if (event.target.id === "submit-contact-form") {
                    this.submitContactForm(event);
                }
            })
    }

    closeContactModal(){
        document
            .getElementById("contact-modal")
            .classList.add("contact-modal--isHidden")
    }

    submitContactForm(event){
        event.preventDefault() ;
        let firstName = document.getElementById("firstName").value ;
        let lastName = document.getElementById("lastName").value  ;
        let email = document.getElementById("email").value  ;

        console.log("Prénom : ", firstName) ;
        console.log("Nom : ", lastName) ;
        console.log("Email : ", email) ;
        console.log("Message : ", message.value) ;
    }

    onSort(){
        document.addEventListener("click", event => {
            let sortType = event.target.id ;
            this.sortMedia(sortType) ;
        }) ;
    }

    sortMedia(sortType){

        let datasetAttribute = "";
        let allMediaNodeList = document.getElementsByClassName("media") ;
        let allMediaArray = Array.from(allMediaNodeList) ;
        let firstDataValue = "";
        let lastDataValue = "";

        if (sortType ==="popularity-sort"){
            datasetAttribute = "mediaLikes" ;
            firstDataValue = Number(allMediaArray[0].dataset[datasetAttribute]);
            lastDataValue = Number(allMediaArray[allMediaArray.length - 1].dataset[datasetAttribute]);

            if (allMediaArray.length > 1){

                if (firstDataValue > lastDataValue){

                    allMediaArray.sort(function (a,b){

                        let aLikesNumber = Number(a.dataset[datasetAttribute]) ;
                        let bLikesNumber = Number(b.dataset[datasetAttribute]) ;

                        if (aLikesNumber < bLikesNumber){return -1} ;
                        if (aLikesNumber > bLikesNumber){return 1};

                    });
                    document.getElementById("media-gallery").innerHTML = "" ;
                    allMediaArray.forEach(media => {
                        document.getElementById("media-gallery").innerHTML += media.outerHTML ;
                    })

                } else {
                    allMediaArray.sort(function (a,b){

                        let aLikesNumber = Number(a.dataset[datasetAttribute]) ;
                        let bLikesNumber = Number(b.dataset[datasetAttribute]) ;

                        if (aLikesNumber < bLikesNumber){return 1} ;
                        if (aLikesNumber > bLikesNumber){return -1};

                    });
                    document.getElementById("media-gallery").innerHTML = "" ;
                    allMediaArray.forEach(media => {
                        document.getElementById("media-gallery").innerHTML += media.outerHTML ;
                    })
                }
            }

        } else if (sortType ==="date-sort"){
            datasetAttribute = "mediaDate" ;
            firstDataValue = new Date (allMediaArray[0].dataset[datasetAttribute]);
            lastDataValue = new Date (allMediaArray[allMediaArray.length - 1].dataset[datasetAttribute]);

            if (allMediaArray.length > 1){

                if (firstDataValue > lastDataValue){

                    allMediaArray.sort(function (a,b){

                        let aLikesNumber = new Date(a.dataset[datasetAttribute]) ;
                        let bLikesNumber = new Date(b.dataset[datasetAttribute]) ;

                        if (aLikesNumber < bLikesNumber){return -1} ;
                        if (aLikesNumber > bLikesNumber){return 1};

                    });
                    document.getElementById("media-gallery").innerHTML = "" ;
                    allMediaArray.forEach(media => {
                        document.getElementById("media-gallery").innerHTML += media.outerHTML ;
                    })

                } else {
                    allMediaArray.sort(function (a,b){

                        let aLikesNumber = new Date(a.dataset[datasetAttribute]) ;
                        let bLikesNumber = new Date(b.dataset[datasetAttribute]) ;

                        if (aLikesNumber < bLikesNumber){return 1} ;
                        if (aLikesNumber > bLikesNumber){return -1};

                    });
                    document.getElementById("media-gallery").innerHTML = "" ;
                    allMediaArray.forEach(media => {
                        document.getElementById("media-gallery").innerHTML += media.outerHTML ;
                    })
                }
            }

        } else if (sortType ==="title-sort"){
            datasetAttribute = "mediaTitle" ;
            firstDataValue = allMediaArray[0].dataset[datasetAttribute];
            lastDataValue = allMediaArray[allMediaArray.length - 1].dataset[datasetAttribute];

            if (allMediaArray.length > 1){

                if (firstDataValue > lastDataValue){

                    allMediaArray.sort(function (a,b){

                        let aLikesNumber = a.dataset[datasetAttribute] ;
                        let bLikesNumber = b.dataset[datasetAttribute] ;

                        if (aLikesNumber < bLikesNumber){return -1} ;
                        if (aLikesNumber > bLikesNumber){return 1};
                    });

                    document.getElementById("media-gallery").innerHTML = "" ;
                    allMediaArray.forEach(media => {
                        document.getElementById("media-gallery").innerHTML += media.outerHTML ;
                    })

                } else {
                    allMediaArray.sort(function (a,b){

                        let aLikesNumber = a.dataset[datasetAttribute] ;
                        let bLikesNumber = b.dataset[datasetAttribute] ;

                        if (aLikesNumber < bLikesNumber){return 1} ;
                        if (aLikesNumber > bLikesNumber){return -1};
                    });

                    document.getElementById("media-gallery").innerHTML = "" ;
                    allMediaArray.forEach(media => {
                        document.getElementById("media-gallery").innerHTML += media.outerHTML ;
                    })
                }
            }
        }
    }

    onMediaLikes(){
        document
            .addEventListener("click", event => {
                if (event.target.className.includes("media__likes")){
                    let media = event.target.parentNode.parentNode ;
                    this.likeMedia(media) ;
                }
            })
    }

    likeMedia(media){
        let actualMediaLikesNumber = Number(media.dataset.mediaLikes) ;
        let actualTotalMediaLikes = Number(document.querySelector(".extra__likes-number").innerHTML) ;

        let newMediaLikesNumber = actualMediaLikesNumber + 1 ;
        let newTotalLikesNumber = actualTotalMediaLikes +1 ;
        media.dataset.mediaLikes = newMediaLikesNumber ;

        media.querySelector(".media__likes").innerHTML = newMediaLikesNumber ;
        document.querySelector(".extra__likes-number").innerHTML = newTotalLikesNumber ;
    }

    onMediaElement(){
        document
            .getElementById("media-gallery")
            .addEventListener("click", event => {
                if (event.target.localName ==="img" || event.target.localName ==="video"){ //TODO find better target (problem => logo is img also
                    this.openLightBox(event) ;
                }
            })
    }

    openLightBox(event){

        document.getElementById("lightBox-gallery").innerHTML = "" ;

        let onlyVisibleMediaOnGallery = document.querySelectorAll('[data-media-status="default"], [data-media-status="selected"]') ;

        let mediaIndex = 0 ;

        for (let i = 0; i < onlyVisibleMediaOnGallery.length; i++) {

            let mediaType = onlyVisibleMediaOnGallery[i].getAttribute('data-media-type') ;
            let mediaId = onlyVisibleMediaOnGallery[i].getAttribute('data-media-id') ;
            let mediaPath = onlyVisibleMediaOnGallery[i].children[0].children[0].getAttribute("src") ;
            let mediaTitle = onlyVisibleMediaOnGallery[i].children[1].children[0].innerText ;

            let lightBoxMediaElement = "" ;

            if (mediaType === "picture"){
                lightBoxMediaElement =
                    `<picture class="lightBox-modal__element-picture">
                        <img id="${mediaId}" src="${mediaPath}" alt="${mediaTitle}" aria-label="${mediaTitle}" title="${mediaTitle}">
                    </picture>`
            } else {
                lightBoxMediaElement =
                    `<video controls id="${mediaId}" class="lightBox-modal__element-video">
                        <source src="${mediaPath}" alt="${mediaTitle}" aria-label="${mediaTitle}" title="${mediaTitle}>
                    </video>`
            }

            let firstUserClickedMedia = Number(event.target.dataset.mediaId) ;

            let lightBox = "" ;

            if (Number(mediaId) === firstUserClickedMedia){
                lightBox =
                    `<div class="lightBox-modal__media lightBox-modal__media--isVisible" data-lightbox-media-status="default" data-lightbox-media-index="${mediaIndex}" >
                         <div class="lightBox-modal__element">
                            ${lightBoxMediaElement}
                         </div>
                         <div class="lightBox-modal__title">
                            <h3>
                                ${mediaTitle}
                            </h3>
                         </div>
                    </div>`
            } else {
                lightBox =
                    `<div class="lightBox-modal__media" data-lightbox-media-status="default" data-lightbox-media-index="${mediaIndex}" >
                         <div class="lightBox-modal__element">
                            ${lightBoxMediaElement}
                         </div>
                         <div class="lightBox-modal__title">
                            <h3>
                                ${mediaTitle}
                            </h3>
                         </div>
                    </div>`
            }

            document.getElementById("lightBox-gallery").innerHTML += lightBox ;

            mediaIndex += 1 ;
        }

        document.getElementById("lightBox-modal").classList.add("lightBox-modal--isVisible") ;
    }

    onCloseLightBox(){
        document
            .getElementById("nav-close")
            .addEventListener("click", this.closeLightBoxModal) ;
    }

    closeLightBoxModal(){
        document
            .getElementById("lightBox-modal")
            .classList.remove("lightBox-modal--isVisible")
    }

    onNavNext(){
        document
            .getElementById("nav-next")
            .addEventListener("click", this.lightBoxNavNext) ;
    }

    lightBoxNavNext(){
        let maxIndex = Number(document.getElementsByClassName("lightBox-modal__media").length - 1) ;
        let actualIndex = Number(document.querySelector(".lightBox-modal__media--isVisible").dataset.lightboxMediaIndex) ;

        document.querySelector(".lightBox-modal__media--isVisible").classList.remove("lightBox-modal__media--isVisible") ;

        if (actualIndex === maxIndex){
            document.querySelector('[data-lightbox-media-index="0"]').classList.add("lightBox-modal__media--isVisible") ;
        } else {
            document.querySelector(`[data-lightbox-media-index=${CSS.escape(actualIndex + 1)}]`).classList.add("lightBox-modal__media--isVisible") ;
        }
    }

    onNavPrev(){
        document
            .getElementById("nav-prev")
            .addEventListener("click", this.lightBoxNavPrev) ;
    }

    lightBoxNavPrev(){
        let maxIndex = Number(document.getElementsByClassName("lightBox-modal__media").length - 1) ;
        let actualIndex = Number(document.querySelector(".lightBox-modal__media--isVisible").dataset.lightboxMediaIndex) ;

        document.querySelector(".lightBox-modal__media--isVisible").classList.remove("lightBox-modal__media--isVisible") ;

        if (actualIndex === 0){
            document.querySelector(`[data-lightbox-media-index=${CSS.escape(maxIndex)}]`).classList.add("lightBox-modal__media--isVisible") ;
        } else {
            document.querySelector(`[data-lightbox-media-index=${CSS.escape(actualIndex - 1)}]`).classList.add("lightBox-modal__media--isVisible") ;
        }
    }
}