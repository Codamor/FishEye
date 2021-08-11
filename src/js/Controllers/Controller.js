export class Controller{
    constructor(model, view) {
        this.model = model ;
        this.view = view ;
    }

    getPageUrl(){
        return window.location.href
    }

    getPhotographerPageId(){
        let url = new URL(window.location.href) ;
        return Number(url.searchParams.get("id")) ;
    }

    isHomePage(){
        return this.getPageUrl().includes("index") ;
    }

    isPhotographerPage(){
        return this.getPageUrl().includes("photographer") ;
    }

    displayHomePage(){
        let allPhotographersArray = this.model.getAllPhotographers() ;
        let allMainMenuTags = this.model.getAllTagsForNavigation() ;

        this.view.displayAllTagsForNavigation(allMainMenuTags) ;
        this.view.displayPhotographersGallery(allPhotographersArray) ;
        this.view.onHomePageTags() ;

    }

    displayPhotographerPage(){
        let photographerId = this.getPhotographerPageId() ;
        let photographer = this.model.getPhotographerById(photographerId) ;
        let photographerTotalLikes = this.model.getPhotographerTotalLikes(photographerId) ;
        let photographerMedia = this.model.getAllMediaByPhotographerId(photographerId) ;
        let photographerPrice = this.model.getPhotographerPrice(photographerId) ;

        this.view.displayPhotographerMetaData(photographer) ;
        this.view.displayPhotographerBanner(photographer) ;
        this.view.displayPhotographerMediaGallery(photographerMedia, photographer) ;
        this.view.displayTotalLikes(photographerTotalLikes) ;
        this.view.displayPrice(photographerPrice) ;

        this.view.onPhotographerPageTags() ;
        this.view.onContactModal() ;
        this.view.onCloseContactModal() ;
        this.view.onSubmitContactButton() ;
    }

    displayContent(){
        if (this.isHomePage()){

            this.displayHomePage() ;

        } else if (this.isPhotographerPage()){

            this.displayPhotographerPage() ;
        }
    }
}