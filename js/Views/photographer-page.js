//create media card
function displayPhotographerMedia(){
    db
        .then(data => {
            let allMedia = data.media ;
            let photographerId = getPhotographerId(data, photographerName) ;
            let allPhotographermedia = getPhotographerMedia(allMedia, photographerId) ;

            allPhotographermedia.forEach(element => {

                let media = createMediaObject(element) ;

                gallery.innerHTML += createMediaHtmlFinal(media) ;

            })
        })
        .then(()=> {
            addTagEventListenerForPhotographerPage() ;
            addMediaEventListenerforPhotograperPageGallery() ;
        })
}

displayPhotographerMedia()

