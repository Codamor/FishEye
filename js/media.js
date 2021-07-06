class media{
    constructor(id, photographerId, title, image, tags, likes, date, price){
        this._id = id;
        this._photographerId = photographerId;
        this._title = title;
        this._image = image;
        this._tags = tags;
        this._likes = likes;
        this._date = date;
        this._price = price;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get photographerId() {
        return this._photographerId;
    }

    set photographerId(value) {
        this._photographerId = value;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get image() {
        return this._image;
    }

    set image(value) {
        this._image = value;
    }

    get tags() {
        return this._tags;
    }

    set tags(value) {
        this._tags = value;
    }

    get likes() {
        return this._likes;
    }

    set likes(value) {
        this._likes = value;
    }

    get date() {
        return this._date;
    }

    set date(value) {
        this._date = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }
}

