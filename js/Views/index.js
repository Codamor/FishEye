let db = getData() ;

let gallery = document.getElementById("gallery") ;

function displayAllPhotographersCards(){
    db.then(data => {
        let photographers = data.photographers ;
        photographers.forEach(photographer => {
            gallery.innerHTML += photographerToCard(photographer) ;
        })
    })
}

displayAllPhotographersCards() ;
