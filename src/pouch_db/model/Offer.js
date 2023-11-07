"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Offer = void 0;
const BaseEntity_1 = require("./BaseEntity");
class Offer extends BaseEntity_1.BaseEntity {
    constructor(id, customCycle, cycle, hasDependentOffers, kind, name, offerGroup, overridingKey, popular, price, quantityLimit, tags, tokenCount, unlockedBy, weight) {
        super(id);
        this._customCycle = customCycle;
        this._cycle = cycle;
        this._hasDependentOffers = hasDependentOffers;
        this._kind = kind;
        this._name = name;
        this._offerGroup = offerGroup;
        this._overridingKey = overridingKey;
        this._popular = popular;
        this._price = price;
        this._quantityLimit = quantityLimit;
        this._tags = tags;
        this._tokenCount = tokenCount;
        this._unlockedBy = unlockedBy;
        this._weight = weight;
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
    get hasDependentOffers() {
        return this._hasDependentOffers;
    }
    set hasDependentOffers(value) {
        this._hasDependentOffers = value;
    }
    get kind() {
        return this._kind;
    }
    set kind(value) {
        this._kind = value;
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
    get overridingKey() {
        return this._overridingKey;
    }
    set overridingKey(value) {
        this._overridingKey = value;
    }
    get popular() {
        return this._popular;
    }
    set popular(value) {
        this._popular = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get quantityLimit() {
        return this._quantityLimit;
    }
    set quantityLimit(value) {
        this._quantityLimit = value;
    }
    get tags() {
        return this._tags;
    }
    set tags(value) {
        this._tags = value;
    }
    get tokenCount() {
        return this._tokenCount;
    }
    set tokenCount(value) {
        this._tokenCount = value;
    }
    get unlockedBy() {
        return this._unlockedBy;
    }
    set unlockedBy(value) {
        this._unlockedBy = value;
    }
    get weight() {
        return this._weight;
    }
    set weight(value) {
        this._weight = value;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    asUnlockingOfferGroups(offerGroups, reset) {
        return [];
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    asUnlockingOffers(dependsOnOffers, reset) {
        return [];
    }
}
exports.Offer = Offer;
