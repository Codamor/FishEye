"use strict" ;

export class Controller{
    constructor(model, view) {
        this._model = model ;
        this._view = view ;
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
        let allPhotographersArray = this._model.getAllPhotographers() ;
        let allMainMenuTags = this._model.getAllTagsForNavigation() ;

        this._view.displayHomePageTagsFilters(allMainMenuTags) ;
        this._view.displayAllPhotographersGallery(allPhotographersArray) ;

        this._view.onHomePageFilterTags() ;
        this._view.onHomePageScroll();
        this._view.onLogo()

    }

    displayPhotographerPage(){
        let photographerId = this.getPhotographerPageId() ;
        let photographer = this._model.getPhotographerById(photographerId) ;
        let photographerTotalLikes = this._model.getPhotographerTotalLikes(photographerId) ;
        let photographerMedia = this._model.getAllMediaByPhotographerId(photographerId) ;
        let photographerPrice = this._model.getPhotographerPrice(photographerId) ;

        this._view.generatePhotographerMetaInformations(photographer) ;
        this._view.displayPhotographerBanner(photographer) ;
        this._view.displayMediaGallery(photographerMedia, photographer) ;
        this._view.displayTotalLikesNumber(photographerTotalLikes) ;
        this._view.displayPrice(photographerPrice) ;

        this._view.onPhotographerPageTags() ;
        this._view.onContactButton() ;
        this._view.onCloseContactModalButton() ;
        this._view.onSubmitContactModalButton() ;
        this._view.onSort() ;
        this._view.onMediaLikes();
        this._view.onMediaElement();
        this._view.onCloseLightBoxButton() ;
        this._view.onLightBoxNextNavButton();
        this._view.onLightBoxPreviousNavButton();

    }

    displayContent(){
        if (this.isHomePage()){

            this.displayHomePage() ;

        } else if (this.isPhotographerPage()){

            this.displayPhotographerPage() ;
        }
    }
}