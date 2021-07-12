//load database
let db = getData() ;

//display photographers
function displayPhotographers(event){

    gallery.innerHTML = "" ;

    if(event === undefined){
        db
            .then(data => {
                let photographers = data.photographers ;
                photographers.forEach(photographer => {
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