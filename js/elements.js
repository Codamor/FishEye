//DOM elements
let gallery = document.getElementById("gallery") ;

//EVENT listeners
function addTagEventListener(){
    let allTags = document.getElementsByClassName("tag") ;

    for (let i = 0; i < allTags.length; i++){
        allTags[i].addEventListener("click", displayPhotographers) ;
    }
}
