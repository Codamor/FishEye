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

function addMediaEventListenerforPhotograperPageGallery(){
    let allPicture = document.getElementsByClassName("media__picture");
    let allVideo = document.getElementsByClassName("media__video") ;

    for (let i = 0; i < allPicture.length; i++){
        allPicture[i].addEventListener("click", function (){
            console.log("media event lisetener added") ;
        })
    }
    for (let i = 0; i < allVideo.length; i++){
        allVideo[i].addEventListener("click", function (){
            console.log("media event lisetener added") ;
        })
    }
}
