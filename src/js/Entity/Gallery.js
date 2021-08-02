export class Gallery {
    constructor(nbrOfLikes, mediaList, lightBox) {
        this._nbrOfLikes = nbrOfLikes;
        this._mediaList = mediaList;
        this._lightBox = lightBox;
    }

    get nbrOfLikes() {
        return this._nbrOfLikes;
    }

    set nbrOfLikes(value) {
        this._nbrOfLikes = value;
    }

    get mediaList() {
        return this._mediaList;
    }

    set mediaList(value) {
        this._mediaList = value;
    }


    get lightBox() {
        return this._lightBox;
    }

    set lightBox(value) {
        this._lightBox = value;
    }
}