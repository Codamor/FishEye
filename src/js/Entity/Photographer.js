"use strict" ;

export class Photographer{
    constructor(name, id, city, country, tags, tagline, price, portrait){
        this._name = name;
        this._id = id;
        this._city = city;
        this._country = country;
        this._tags = tags;
        this._tagline = tagline;
        this._price = price;
        this._portrait = portrait;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get city() {
        return this._city;
    }

    set city(value) {
        this._city = value;
    }

    get country() {
        return this._country;
    }

    set country(value) {
        this._country = value;
    }

    get tags() {
        return this._tags;
    }

    set tags(value) {
        this._tags = value;
    }

    get tagline() {
        return this._tagline;
    }

    set tagline(value) {
        this._tagline = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get portrait() {
        return this._portrait;
    }

    set portrait(value) {
        this._portrait = value;
    }
}