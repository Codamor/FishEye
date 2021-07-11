//DOM elements
let gallery = document.getElementById("gallery") ;
let allNavigationLinks = document.getElementsByClassName("navigation__link") ;


function getTagFromEvent(event){
    return event.target.innerText.substring(1).toLowerCase() ;
}

//EVENTS listeners
for (let i = 0; i < allNavigationLinks.length; i++){
    allNavigationLinks[i].addEventListener("click", displayPhotographersCards) ;
}