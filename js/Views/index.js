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

                let allTags = document.getElementsByClassName("tag") ;

                for (let i = 0; i < allTags.length; i++){
                    allTags[i].addEventListener("click", displayAllPhotographersCards) ;
                }

            })
    } else {

        console.log(event)
        console.log("else event", event.target.innerText.slice(1).toLowerCase().length, event.target.innerText.slice(1).toLowerCase()) ;
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

                let allTags = document.getElementsByClassName("tag") ;

                for (let i = 0; i < allTags.length; i++){
                    allTags[i].addEventListener("click", displayAllPhotographersCards) ;
                }

            })
    }

}

displayAllPhotographersCards() ;

