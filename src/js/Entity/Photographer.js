export class Photographer{
    constructor(name, id, city, country, tags, tagline, price, portrait){
        this._name = name;
        this._id = id;
        this._city = city;
        this._country = country;
        this._tags = tags;
        this._tagline = tagline;
        this._price = price;
        this._portrait = portrait;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get city() {
        return this._city;
    }

    set city(value) {
        this._city = value;
    }

    get country() {
        return this._country;
    }

    set country(value) {
        this._country = value;
    }

    get tags() {
        return this._tags;
    }

    set tags(value) {
        this._tags = value;
    }

    get tagline() {
        return this._tagline;
    }

    set tagline(value) {
        this._tagline = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get portrait() {
        return this._portrait;
    }

    set portrait(value) {
        this._portrait = value;
    }

    toHtmlCard(){
        let htmlCard = "" ; //TODO replace with a simple RETURN
        let photographerTags = this._tags ;

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
            <a class="card__link" href="public/common/photographer.html?id=${this._id}" title="Découvrez ${this._name}"  role="link" aria-label="Découvrez ${this._name}" >
                 <img class="card__picture" src="public/media/Photographers%20ID%20Photos/${this.portrait}" alt="">
               <h2 class="card__name">
                 ${this._name}
               </h2>
            </a>
            <h3 class="cards__location">
                 ${this._city}, ${this._country}
            </h3>
            <p class="card__tagline">
                 ${this._tagline}
            </p>
            <p class="card__price">
                 ${this._price} €/jour
            </p>
        
           <nav class="navigation navigation--forPhotographerCard" role="link" aria-label="photographer categories">
                ${htmlPhotographerTags}
           </nav>
        </div><!-- end photographer -->`
    }

    toHtmlMetaInformations(){
        document.title = `${this._name}, photographe spécialiste.` ;//TODO add tags
        document.querySelector('meta[name="description"]').setAttribute("content", `${this._name}, photographe spécialiste.`);
    }

    toHtmlBanner(){
        let htmlBanner = "" ;
        let portraitPicturePath = `../media/Photographers%20ID%20Photos/${this._portrait}`
        let photographerTags = this._tags ;

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
                        ${this._name}
                    </h1>
                    <h2 class="card__location card__location--page">
                        ${this.city}, ${this.country}
                    </h2>
                    <p class="card__tagline card__tagline--page">
                        ${this.tagline}
                    </p>
                    <nav class="navigation navigation--inCard" role="link" aria-label="photographer categories">
                        ${photographerHtmlTags}
                    </nav>

                </div><!-- end photographer -->

                <button id="contact" class="contact">Contactez-moi</button>

            </div>

            <div class="bio__picture">
                <img class="card__picture" src="${portraitPicturePath}" alt="${this._name}">
            </div>`

        document.getElementById("about").innerHTML = htmlBanner ;
    }

}