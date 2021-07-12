function createPhotographerTagsHtml(tags){
    let photographerHtmlTags = "" ;
    tags.forEach(tag => {
        photographerHtmlTags +=
            "<a class=\"navigation__link tag navigation__link--inCard\" title=\"Afficher les photographes de l'évenementiel\"" +
            " role=\"link\" aria-label=\"Afficher les photographes de l'art\">" +
            "#"+tag + "</a>\n"
    })
    return photographerHtmlTags ;
}

function createPhotographerHtml(photographer){

    let name = photographer.name ;
    let firstName = photographer.name.split(" ")[0] ;
    let lastName = photographer.name.split(" ")[1] ;
    let photographerTags = photographer.tags ;
    let htmlTags = createPhotographerTagsHtml(photographerTags) ;
    let portrait = firstName.replace(/-/, "").concat(lastName.replace(/-/, "")) //remove "-" for composed names

    return "" +
        "<div class=\"card\" aria-label=\"photographe\">\n" +
        "                    <a class=\"card__link\" href=\"common/photographer-"+ firstName.toLowerCase() + "-" + lastName.toLowerCase() + ".html\" title=\"Découvrez " + name + "\" role=\"link\" aria-label=\"Découvrez " + name + "\">\n" +
        "                        <img class=\"card__picture\" src=\"assets/media/Photographers%20ID%20Photos/"+ portrait + ".jpg\" alt=\"" + name + "\">\n" +
        "                        <h2 class=\"card__name\">\n" +
        "                            "+ name + "\n" +
        "                        </h2>\n" +
        "                    </a>\n" +
        "                    <h3 class=\"cards__location\">\n" +
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



