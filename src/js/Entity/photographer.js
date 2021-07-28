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
        let htmlCard = "" ;
        let name = this._name ;
        let firstName = name.split(" ")[0] ;
        let lastName = name.split(" ")[1] ;
        let portraitNamePath = firstName.replace(/-/, "").concat(lastName.replace(/-/, "")) //remove "-" for composed first names
        let photographerTags = this._tags ;

        let photographerHtmlTags = "" ;
        photographerTags.forEach(tag => {
            photographerHtmlTags +=
                "<a class=\"navigation__link tag navigation__link--inCard\" title=\"Afficher les photographes de l'évenementiel\"" +
                " role=\"link\" aria-label=\"Afficher les photographes de l'art\">" +
                "#"+tag + "</a>\n"
        })

        return htmlCard +=

        `<div class="card" aria-label="photographe">
            <a class="card__link" href="common/photographer-${firstName.toLowerCase()}-${lastName.toLowerCase()}.html" title="Découvrez ${firstName}"  role="link" aria-label="Découvrez ${firstName}" >
                 <img class="card__picture" src="assets/media/Photographers%20ID%20Photos/${portraitNamePath}.jpg" alt="">
               <h2 class="card__name">
                 ${name}
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
        
           <nav class="navigation navigation--inCard" role="link" aria-label="photographer categories">
                ${photographerHtmlTags}
           </nav>
        </div><!-- end photographer -->`




    }
}