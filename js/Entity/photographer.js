class photographer{
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
}


//To create a photographer
function createPhotographer(name, id, city, country, tags, tagline, price, portrait){
    return new photographer(name, id, city, country, tags, tagline, price, portrait) ;
}

//To generate html photographer tags
function generatePhotographerTags(tags){
    let photographerHtmlTags = "" ;
    tags.forEach(tag => {
        photographerHtmlTags +=
            "<a class=\"navigation__link tag navigation__link--inCard\" title=\"Afficher les photographes de l'évenementiel\"" +
            "role=\"link\" aria-label=\"Afficher les photographes de l'art\">" +
            "#"+tag + "</a>\n"
    })
    return photographerHtmlTags ;
}

//To create a photographer card
function photographerToCard(photographer){

    let name = photographer.name ;
    let firstName = photographer.name.split(" ")[0] ;
    let lastName = photographer.name.split(" ")[1] ;
    let htmlTags = generatePhotographerTags(photographer.tags) ;
    let portrait = firstName.replace(/-/, "").concat(lastName.replace(/-/, "")) //remove "-" for composed names

    return "" +
        "<div class=\"card\" aria-label=\"photographe\">\n" +
        "                    <a class=\"card__link\" href=\"common/photographer-"+ firstName.toLowerCase() + "-" + lastName.toLowerCase() + ".html\" title=\"Découvrez " + name + "\" role=\"link\" aria-label=\"Découvrez " + name + "\">\n" +
        "                        <img class=\"card__picture\" src=\"assets/media/Photographers%20ID%20Photos/"+ portrait + ".jpg\" alt=\"" + name + "\">\n" +
        "                        <h2 class=\"card__name\">\n" +
        "                            "+ name + "\n" +
        "                        </h2>\n" +
        "                    </a>\n" +
        "                    <h3 class=\"card__location\">\n" +
        "                        "+ photographer.city + ", "+ photographer.country + "\n" +
        "                    </h3>\n" +
        "                    <p class=\"card__tagline\">\n" +
        "                        " + photographer.tagline + "\n" +
        "                    </p>\n" +
        "                    <p class=\"card__price\">\n" +
        "                        " + photographer.price + "€/jour\n" +
        "                    </p>\n" +

        "                    <nav class=\"navigation navigation--inCard\" role=\"link\" aria-label=\"photographer categories\">\n" +
        "                       "+ htmlTags +"    " +
        "                    </nav>\n" +
        "                </div><!-- end photographer -->"
}
