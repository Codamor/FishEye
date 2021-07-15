//load database
let db = getData("../db/FishEye.json") ;

//create image or video html element for media
function multimediaFactory(type, media, photographer){
    let multimediaHtml = "" ;

    if (type == "image"){
        multimediaHtml +=
            "<picture class=\"media__picture\">\n" +
            "    <img class=\"media__image\" src=\"../assets/media/"+ photographer.name.split(" ")[0] + "/" + media.image + "\" alt=\"super architecture\">\n" +
            "</picture>"

        return multimediaHtml

    } else {
        multimediaHtml +=
            "<video class=\"media__video\">\n" +
            "    <source src=\"../assets/media/"+ photographer.name.split(" ")[0] + "/" + media.video + "\" alt=\"super architecture\">\n" +
            "</video>"

        return multimediaHtml
    }
}

//create media card
function createMediaCardHtml(){
    let name = document.getElementById("card__name").innerText ;

    db
        .then(data => {
            let allMedia = data.media ;
            let photographerMedia = [] ;
            let photographer = createPhotographer() ;

            //get photographer ID from name
            for (let i = 0; i < data.photographers.length; i ++){
                    if(data.photographers[i].name === name){
                        photographer.id = data.photographers[i].id ;
                        photographer.name = data.photographers[i].name ;
                    } ;
            }

            //get all media from photographer ID
            for (let i = 0; i < allMedia.length; i ++){
                if (allMedia[i].photographerId === photographer.id){
                    photographerMedia.push(allMedia[i]) ;
                }
            }


            photographerMedia.forEach(media => {

                let mediaCardHtml = "" ;

                let type ;

                if (media.image){
                    type = "image" ;
                } else {
                    type = "video" ;
                }

                let multimediaHtml = multimediaFactory(type, media, photographer) ;

                gallery.innerHTML +=
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


        })


        })
}



createMediaCardHtml()