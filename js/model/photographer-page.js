//load database
let db = getData("../db/FishEye.json") ;

//get media type  //TODO to delete if useless
function getMediaType(media){
    let type ;

    if (media.image){
        type = "image" ;
    } else {
        type = "video" ;
    }
    return type ;
}

//get photographer ID
function getPhotographerId(data, photographerName) {
    let photographerId ;
    for (let i = 0; i < data.photographers.length; i ++){
        if(data.photographers[i].name === photographerName){
            photographerId = data.photographers[i].id ;
        }
    }
    return photographerId ;
}

//get photographer name
function getPhotographerName(data) {
    let photographerName ;
    for (let i = 0; i < data.photographers.length; i ++){
        if(data.photographers[i].name === name){
            photographerName = data.photographers[i].name ;
        }
    }
    return photographerName ;
}

//get all photographer media
function getPhotographerMedia(allMedia, photographerId){
    let photographerMedia = [] ;
    for (let i = 0; i < allMedia.length; i ++){
        if (allMedia[i].photographerId === photographerId){
            photographerMedia.push(allMedia[i]) ;
        }
    }
    return photographerMedia ;
}

//generate multimedia DOM according to media type
function createImageOrVideoHtml(media){

    let mediaElement = "" ;

    if (type == "image"){
        mediaElement +=
            "<picture class=\"media__picture\">\n" +
            "    <img class=\"media__image\" src=\"../assets/media/"+ photographerName.split(" ")[0] + "/" + media.image + "\" alt=\"super architecture\">\n" +
            "</picture>"

        return mediaElement

    } else {
        mediaElement +=
            "<video class=\"media__video\">\n" +
            "    <source src=\"../assets/media/"+ photographerName.split(" ")[0] + "/" + media.video + "\" alt=\"super architecture\">\n" +
            "</video>"

        return mediaElement
    }
}

//create media html
function createMediaHtml(multimediaHtml, media){
    let mediaHtml = "";

    mediaHtml =
        "<div class=\"media\">\n" +
        multimediaHtml +
        "\n" +
        "                    <div class=\"media__informations\">\n" +
        "                        <div class=\"media__title\">\n" +
        media.title + "\n" +
        "                        </div>\n" +
        "                        <div class=\"media__likes\">\n" +
        media.likes + "\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "\n" +
        "                </div>"

    return mediaHtml ;
}

//create media html
function createMediaHtmlFinal(media){

    let mediaHtml = "" ;

    mediaHtml +=
        "<div class=\"media\">\n"

        if (media.image){
            mediaHtml +=
                "<picture class=\"media__picture\">\n" +
                "    <img class=\"media__image\" src=\"../assets/media/"+ photographerName.split(" ")[0] + "/" + media.image + "\" alt=\"super architecture\">\n" +
                "</picture>"


        } else {
            mediaHtml +=
                "<video class=\"media__video\">\n" +
                "    <source src=\"../assets/media/"+ photographerName.split(" ")[0] + "/" + media.video + "\" alt=\"super architecture\">\n" +
                "</video>"

        }

    mediaHtml +=

        "\n" +
        "                    <div class=\"media__informations\">\n" +
        "                        <div class=\"media__title\">\n" +
        media.title + "\n" +
        "                        </div>\n" +
        "                        <div class=\"media__likes\">\n" +
        media.likes + "\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "\n" +
        "                </div>"

    return mediaHtml ;

}

function filterMedia(mediaType){

}

function sortMedia(){


}