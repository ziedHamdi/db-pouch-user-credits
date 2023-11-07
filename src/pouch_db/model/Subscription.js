"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscription = void 0;
const BaseEntity_1 = require("./BaseEntity");
class Subscription extends BaseEntity_1.BaseEntity {
    constructor(id, customCycle, cycle, name, offerGroup, offerId, orderId, starts, status, tokens) {
        super(id);
        this._customCycle = customCycle;
        this._cycle = cycle;
        this._name = name;
        this._offerGroup = offerGroup;
        this._offerId = offerId;
        this._orderId = orderId;
        this._starts = starts;
        this._status = status;
        this._tokens = tokens;
    }
    get customCycle() {
        return this._customCycle;
    }
    set customCycle(value) {
        this._customCycle = value;
    }
    get cycle() {
        return this._cycle;
    }
    set cycle(value) {
        this._cycle = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get offerGroup() {
        return this._offerGroup;
    }
    set offerGroup(value) {
        this._offerGroup = value;
    }
    get offerId() {
        return this._offerId;
    }
    set offerId(value) {
        this._offerId = value;
    }
    get orderId() {
        return this._orderId;
    }
    set orderId(value) {
        this._orderId = value;
    }
    get starts() {
        return this._starts;
    }
    set starts(value) {
        this._starts = value;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
    get tokens() {
        return this._tokens;
    }
    set tokens(value) {
        this._tokens = value;
    }
}
exports.Subscription = Subscription;
