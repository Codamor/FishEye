//load database
let db = getData("db/FishEye.json") ;

//display photographers
function displayPhotographers(event){

    gallery.innerHTML = "" ;

    if(event === undefined){
        db
            .then(data => {
                let photographers = data.photographers ;

                photographers.forEach(element => {
                    let photographer = createPhotographerObject(element.name, element.id, element.city, element.country, element.tags,
                                                                element.tagline, element.price, element.portrait) ;

                    gallery.innerHTML += createPhotographerHtml(photographer) ;
                })
            })
            .then(()=>{
                addTagEventListenerForHomePage() ;
            })

    } else {
        let tag = event.target.innerText.slice(1).toLowerCase() ;
        db
            .then(data => {
                let photographers = data.photographers ;
                for (let i = 0; i < photographers.length; i ++){
                    for (let j = 0; j < photographers[i].tags.length; j ++){
                        if(tag == photographers[i].tags[j]){
                            gallery.innerHTML += createPhotographerHtml(photographers[i]) ;
                        }
                    }
                }
            })
            .then(()=>{
                addTagEventListenerForHomePage() ;
            })
    }
}

displayPhotographers() ;