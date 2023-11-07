"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCredits = void 0;
const BaseEntity_1 = require("./BaseEntity");
class UserCredits extends BaseEntity_1.BaseEntity {
    get offers() {
        return this._offers;
    }
    set offers(value) {
        this._offers = value;
    }
    get subscriptions() {
        return this._subscriptions;
    }
    set subscriptions(value) {
        this._subscriptions = value;
    }
    get userId() {
        return this._userId;
    }
    set userId(value) {
        this._userId = value;
    }
}
exports.UserCredits = UserCredits;
