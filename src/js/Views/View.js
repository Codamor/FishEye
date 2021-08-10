export class View {
    constructor() {
    }

    createPhotographersGallery(photographersArray){
        photographersArray
            .then(data => {
                data.forEach(photographer => {

                    let photographerTags = photographer.tags ;

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
                            <a class="card__link" href="public/common/photographer.html?id=${photographer._id}" title="Découvrez ${photographer._name}"  role="link" aria-label="Découvrez ${photographer._name}" >
                                <img class="card__picture" src="public/media/Photographers%20ID%20Photos/${photographer.portrait}" alt="">
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
                        
                           <nav class="navigation navigation--forPhotographerCard" role="link" aria-label="photographer categories">
                                ${htmlPhotographerTags}
                           </nav>
                        </div><!-- end photographer -->`

                    document.getElementById("gallery").innerHTML += htmlCard ;
                })
            })
    }

    
}