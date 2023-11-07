"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivatedOffer = void 0;
class ActivatedOffer {
    constructor(expires, offerGroup, starts, tokens) {
        this._expires = expires;
        this._offerGroup = offerGroup;
        this._starts = starts;
        this._tokens = tokens;
    }
    get expires() {
        return this._expires;
    }
    set expires(value) {
        this._expires = value;
    }
    get offerGroup() {
        return this._offerGroup;
    }
    set offerGroup(value) {
        this._offerGroup = value;
    }
    get starts() {
        return this._starts;
    }
    set starts(value) {
        this._starts = value;
    }
    get tokens() {
        return this._tokens;
    }
    set tokens(value) {
        this._tokens = value;
    }
}
exports.ActivatedOffer = ActivatedOffer;
