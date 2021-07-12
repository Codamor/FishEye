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