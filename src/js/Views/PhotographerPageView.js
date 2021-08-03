export class PhotographerPageView{

    constructor() {
    }

    toHtmlMetaInformations(photographerObject){
        document.title = `${photographerObject._name}, photographe spécialiste.` ;//TODO add tags
        document.querySelector('meta[name="description"]').setAttribute("content", `${photographerObject._name}, photographe spécialiste.`);
    }

    toHtmlBanner(){
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
                    <nav class="navigation navigation--inCard" role="link" aria-label="photographer categories">
                        ${photographerHtmlTags}
                    </nav>

                </div><!-- end photographer -->

                <button id="contact" class="contact">Contactez-moi</button>

            </div>

            <div class="bio__picture">
                <img class="card__picture" src="${portraitPicturePath}" alt="${photographerObject._name}">
            </div>`

        document.getElementById("about").innerHTML += htmlBanner ;
    }
}