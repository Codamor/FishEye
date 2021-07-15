//load database
let db = getData("../db/FishEye.json") ;

function getPhotographerId(){
    let name = document.getElementById("card__name").innerText ;

    db
        .then(data => {
            let photographers = data.photographers ;
            for (let i = 0; i < data.photographers.length; i ++){
                    if(data.photographers[i].name === name){
                        console.log(data.photographers[i].id) ;
                    } ;
            }
    })
}

function createPhototographerGalleryHtml(id){

}

getPhotographerId()