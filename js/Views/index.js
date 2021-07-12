let db = getData() ;

function displayAllPhotographersCards(event){

    gallery.innerHTML = "" ;

    if(event === undefined){

        db
            .then(data => {
                let photographers = data.photographers ;
                photographers.forEach(photographer => {
                    gallery.innerHTML += photographerToCard(photographer) ;
                })
            })
            .then(()=>{

                addTagEventListener() ;

            })
    } else {

        let tag = event.target.innerText.slice(1).toLowerCase() ;

        db
            .then(data => {
                let photographers = data.photographers ;
                for (let i = 0; i < photographers.length; i ++){
                    for (let j = 0; j < photographers[i].tags.length; j ++){
                        if(tag == photographers[i].tags[j]){
                            gallery.innerHTML += photographerToCard(photographers[i]) ;
                        }
                    }
                }
            })
            .then(()=>{

                addTagEventListener() ;

            })
    }

}

displayAllPhotographersCards() ;

