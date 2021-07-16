//create media card
function displayPhotographerMedia(){
    db
        .then(data => {
            let allMedia = data.media ;
            let photographerId = getPhotographerId(data, photographerName) ;
            let allPhotographermedia = getPhotographerMedia(allMedia, photographerId) ;

            allPhotographermedia.forEach(media => {

                let mediaType = getMediaType(media)
                let multimediaHtml = createMediaElement(mediaType, media, photographerName) ;

                gallery.innerHTML += createMediaHtml(multimediaHtml, media) ;

            })
        })
        .then(()=> {
            addTagEventListenerForPhotographerPage() ;
            addMediaEventListenerforPhotograperPageGallery() ;
        })
}

displayPhotographerMedia()