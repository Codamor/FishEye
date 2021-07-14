//DOM elements
let gallery = document.getElementById("gallery") ;

//EVENT listeners
function addTagEventListenerForHomePage(){
    let allTags = document.getElementsByClassName("tag") ;

    for (let i = 0; i < allTags.length; i++){
        allTags[i].addEventListener("click", displayPhotographers) ;
    }
}

function addTagEventListenerForPhotographerPage(){
    let allTags = document.getElementsByClassName("tag") ;

        for (let i = 0; i < allTags.length; i ++){
            allTags[i].addEventListener("click", function (){
                console.log("tag event added") ;
            })
        }
}

function addImageEventListenerforPhotograperPageGallery(){
    let allMedia = document.getElementsByClassName("media__picture");

    for (let i = 0; i < allMedia.length; i++){
        allMedia[i].addEventListener("click", function (){
            console.log("media event lisetener added") ;
        })
    }
}
