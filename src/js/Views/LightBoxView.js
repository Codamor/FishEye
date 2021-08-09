export class LightBoxView{
    constructor() {
    }

    toHtmlLightBoxGallery(allPhotographerMedia, photographerName){

        let htmlLightBoxContent = "" ;

        //get only first name and remove "-" for composed first names
        let photographerNameForMediaPath = photographerName.split(" ")[0].replace("-"," ") ;

        let slideIndex = 0 ;

        allPhotographerMedia.forEach(media => {

            if (media.image){

                let mediaPath = `/public/media/${photographerNameForMediaPath}/${media.image}`

                htmlLightBoxContent +=
                    `<div class="lightBox-modal__media" slide-index="${slideIndex}" visible="false">
                        <div class="lightBox-modal__element">
                            <picture class="lightBox-modal__element-picture">
                                <img id="${media.id}" src="${mediaPath}" alt="super architecture">
                            </picture>
                        </div>
                        <div class="lightBox-modal__title">
                            <h3>
                                ${media.title}
                            </h3>
                        </div>
                    </div>`

            } else if (media.video){

                let mediaPath = `/public/media/${photographerNameForMediaPath}/${media.video}`

                htmlLightBoxContent +=
                    `<div class="lightBox-modal__media" slide-index="${slideIndex}" visible="false">
                        <div class="lightBox-modal__element">
                            <video controls id="${media.id}" class="lightBox-modal__element-video">
                                <source src="${mediaPath}" alt="super architecture">
                            </video>
                        </div>
                        <div class="lightBox-modal__title">
                            <h3 class="lightBox-modal__title">
                                ${media.title}
                            </h3>
                        </div>
                    </div>`
            }

            slideIndex += 1 ;

        })
        document.getElementById("lightBox-gallery").innerHTML += htmlLightBoxContent ;
    }

    openLightBox(event){
        document
            .getElementById("lightBox-modal")
            .setAttribute(["visible"], true) ;

        let firstImageId = event.target.id ;

        let allMedia = document.getElementsByClassName("lightBox-modal__media") ;
        for (let i = 0; i < allMedia.length; i++) {
            if (allMedia[i].innerHTML.includes(firstImageId)){
                allMedia[i].setAttribute(["visible"], true) ;
            } ;
        }
    }

    closeMediaLightBox(){
        document
            .getElementById("lightBox-modal")
            .setAttribute(["visible"], false) ;

        let allLightBoxMedia = document.getElementsByClassName("lightBox-modal__media") ;
        for (let i = 0; i < allLightBoxMedia.length; i++) {
            allLightBoxMedia[i].setAttribute(["visible"], false) ;
        } //TODO replace by a query selector
    }

    prevMedia(event){

        let allLightBoxGallery = document.getElementsByClassName("lightBox-modal__content") ;

        let indexMax = Number(allLightBoxGallery.length - 1) ;

        let actualIndex = Number(document.querySelectorAll('[visible="true"]')[1].getAttribute("slide-index")) ;

        if (actualIndex === 0) {
            document.querySelector('[slide-index="0"]').setAttribute(["visible"], false) ;
            document.querySelector(`[slide-index = ${CSS.escape(indexMax)}]`).setAttribute(["visible"], true) ;
        } else {
            document.querySelector(`[slide-index=${CSS.escape(actualIndex)}]`).setAttribute(["visible"], false) ;
            document.querySelector(`[slide-index=${CSS.escape(actualIndex - 1)}]`).setAttribute(["visible"], true) ;
        }
    }

    nextMedia(event){

        let allLightBoxGallery = document.getElementsByClassName("lightBox-modal__content") ;

        let indexMax = Number(allLightBoxGallery.length - 1) ;

        let actualIndex = Number(document.querySelectorAll('[visible="true"]')[1].getAttribute("slide-index")) ;

        if (actualIndex === indexMax) {
            document.querySelector(`[slide-index=${CSS.escape(actualIndex)}]`).setAttribute(["visible"], false) ;
            document.querySelector('[slide-index = "0"]').setAttribute(["visible"], true) ;
        } else {
            document.querySelector(`[slide-index=${CSS.escape(actualIndex)}]`).setAttribute(["visible"], false) ;
            document.querySelector(`[slide-index=${CSS.escape(actualIndex + 1)}]`).setAttribute(["visible"], true) ;
        }
    }
}