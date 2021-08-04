export class LightBoxView{
    constructor() {
    }

    toHtmlLightBoxGallery(allPhotographerMedia, photographerName){

        let htmlLightBoxContent = "" ;

        //get only first name and remove "-" for composed first names
        let photographerNameForMediaPath = photographerName.split(" ")[0].replace("-"," ") ;

        allPhotographerMedia.forEach(media => {

            if (media.image){

                let mediaPath = `/public/media/${photographerNameForMediaPath}/${media.image}`

                htmlLightBoxContent +=
                    `<div class="lightBox-modal__content" visible="false">
                        <div class="lightBox-modal__media">
                            <picture class="lightBox-modal__picture">
                                <img id="${media.id}" class="lightBox-modal__picture" src="${mediaPath}" alt="super architecture">
                            </picture>
                        </div>
                        <div class="lightBox-modal__title">
                            <h3 class="lightBox-modal__title">
                                ${media.title}
                            </h3>
                        </div>
                    </div>`

            } else if (media.video){

                let mediaPath = `/public/media/${photographerNameForMediaPath}/${media.video}`

                htmlLightBoxContent +=
                    `<div class="lightBox-modal__content" visible="false">
                        <div class="lightBox-modal__media">
                            <video id="${media.id}" class="lightBox-modal__video">
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

        })
        document.getElementById("lightBox-gallery").innerHTML += htmlLightBoxContent ;
    }

    openLightBox(event){
        document
            .getElementById("lightBox-modal")
            .setAttribute(["visible"], true) ;

        let firstImageId = event.target.id ;

        let allMedia = document.getElementsByClassName("lightBox-modal__content") ;
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

        let allMedia = document.getElementsByClassName("lightBox-modal__content") ;
        for (let i = 0; i < allMedia.length; i++) {
            allMedia[i].setAttribute(["visible"], false) ;
        }
    }
}