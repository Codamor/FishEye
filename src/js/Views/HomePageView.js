export class HomePageView {

    constructor() {
    }

    getElementFromDom(element){
        return document.querySelector(element) ;
    }

    toPhotographerCardHtml(photographerObject){
        let htmlCard = "" ; //TODO replace with a simple RETURN
        let photographerTags = photographerObject.tags ;

        let htmlPhotographerTags = "" ;
        photographerTags.forEach(tag => {
            htmlPhotographerTags +=
                `<a class="navigation__link navigation__link--inCard tag" enabled="false" title="Afficher les photographes de la catégorie ${tag}"
                    role="link" aria-label="Afficher les photographes de la catégorie ${tag}">
                    #${tag}
                 </a>`
        })

        return htmlCard +=

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
    }

    toPhotographerBannerHtml(){
        let htmlBanner = "" ;
        let portraitPicturePath = `../media/Photographers%20ID%20Photos/${photographerObject.portrait}`
        let photographerTags = photographerObject.tags ;

        let photographerHtmlTags = "" ;
        photographerTags.forEach(tag => {
            photographerHtmlTags +=
                `<a class="navigation__link navigation__link--inCard tag" enabled="false" title="Afficher les photographies de la catégorie ${tag}"
                    role="link" aria-label="Afficher les photographies de la catégorie ${tag}">
                    
                    #${tag}
                   
                 </a>`
        })

        htmlBanner +=
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
                    <nav class="navigation navigation--inCard" role="link" aria-label="photographer categories">
                        ${photographerHtmlTags}
                    </nav>

                </div><!-- end photographer -->

                <button id="contact" class="contact">Contactez-moi</button>

            </div>

            <div class="bio__picture">
                <img class="card__picture" src="${portraitPicturePath}" alt="${photographerObject._name}">
            </div>`

        document.getElementById("about").innerHTML = htmlBanner ;
    }
}