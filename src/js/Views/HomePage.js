import {PhotographerController} from "/src/js/Controller/PhotographerController.js";

export class HomePage {

    displayHomePage(){

       new PhotographerController().getAllPhotographers() ;

    }
}


