"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const BaseEntity_1 = require("./BaseEntity");
class Order extends BaseEntity_1.BaseEntity {
    constructor(id, country, createdAt, currency, customCycle, cycle, history, offerGroup, offerId, paymentIntentId, paymentIntentSecret, quantity, status, taxRate, tokenCount, total, updatedAt, userId) {
        super(id);
        this._country = country;
        this._createdAt = createdAt;
        this._currency = currency;
        this._customCycle = customCycle;
        this._cycle = cycle;
        this._history = history;
        this._offerGroup = offerGroup;
        this._offerId = offerId;
        this._paymentIntentId = paymentIntentId;
        this._paymentIntentSecret = paymentIntentSecret;
        this._quantity = quantity;
        this._status = status;
        this._taxRate = taxRate;
        this._tokenCount = tokenCount;
        this._total = total;
        this._updatedAt = updatedAt;
        this._userId = userId;
    }
    get country() {
        return this._country;
    }
    set country(value) {
        this._country = value;
    }
    get createdAt() {
        return this._createdAt;
    }
    set createdAt(value) {
        this._createdAt = value;
    }
    get currency() {
        return this._currency;
    }
    set currency(value) {
        this._currency = value;
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
    get history() {
        return this._history;
    }
    set history(value) {
        this._history = value;
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
    get paymentIntentId() {
        return this._paymentIntentId;
    }
    set paymentIntentId(value) {
        this._paymentIntentId = value;
    }
    get paymentIntentSecret() {
        return this._paymentIntentSecret;
    }
    set paymentIntentSecret(value) {
        this._paymentIntentSecret = value;
    }
    get quantity() {
        return this._quantity;
    }
    set quantity(value) {
        this._quantity = value;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
    get taxRate() {
        return this._taxRate;
    }
    set taxRate(value) {
        this._taxRate = value;
    }
    get tokenCount() {
        return this._tokenCount;
    }
    set tokenCount(value) {
        this._tokenCount = value;
    }
    get total() {
        return this._total;
    }
    set total(value) {
        this._total = value;
    }
    get updatedAt() {
        return this._updatedAt;
    }
    set updatedAt(value) {
        this._updatedAt = value;
    }
    get userId() {
        return this._userId;
    }
    set userId(value) {
        this._userId = value;
    }
}
exports.Order = Order;
