import {IOrder, OfferCycle} from "user-credits";

import {BaseEntity} from "./BaseEntity";
import {OrderStatus} from "./OrderStatus";

export class Order extends BaseEntity implements IOrder<string> {
    constructor(id: string, country: string | null, createdAt: Date, currency: string, customCycle: number | null, cycle: OfferCycle, history: [OrderStatus] | null, offerGroup: string, offerId: string, paymentIntentId: string | null, paymentIntentSecret: string | null, quantity: number, status: "pending" | "paid" | "refused" | "error", taxRate: number | null, tokenCount: number | null, total: number, updatedAt: Date, userId: string) {
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

    protected _country: string | null;
    protected _createdAt: Date;
    protected _currency: string;
    protected _customCycle: number | null;
    protected _cycle: OfferCycle;
    protected _history: [OrderStatus] | null;
    protected _offerGroup: string;
    protected _offerId: string;
    protected _paymentIntentId: string | null;
    protected _paymentIntentSecret: string | null;
    protected _quantity: number;
    protected _status: "pending" | "paid" | "refused" | "error";
    protected _taxRate: number | null;
    protected _tokenCount: number | null;
    protected _total: number;
    protected _updatedAt: Date;
    protected _userId: string;

    get country(): string | null {
        return this._country;
    }

    set country(value: string | null) {
        this._country = value;
    }

    get createdAt(): Date {
        return this._createdAt;
    }

    set createdAt(value: Date) {
        this._createdAt = value;
    }

    get currency(): string {
        return this._currency;
    }

    set currency(value: string) {
        this._currency = value;
    }

    get customCycle(): number | null {
        return this._customCycle;
    }

    set customCycle(value: number | null) {
        this._customCycle = value;
    }

    get cycle(): OfferCycle {
        return this._cycle;
    }

    set cycle(value: OfferCycle) {
        this._cycle = value;
    }

    get history(): [OrderStatus] | null {
        return this._history;
    }

    set history(value: [OrderStatus] | null) {
        this._history = value;
    }

    get offerGroup(): string {
        return this._offerGroup;
    }

    set offerGroup(value: string) {
        this._offerGroup = value;
    }

    get offerId(): string {
        return this._offerId;
    }

    set offerId(value: string) {
        this._offerId = value;
    }

    get paymentIntentId(): string | null {
        return this._paymentIntentId;
    }

    set paymentIntentId(value: string | null) {
        this._paymentIntentId = value;
    }

    get paymentIntentSecret(): string | null {
        return this._paymentIntentSecret;
    }

    set paymentIntentSecret(value: string | null) {
        this._paymentIntentSecret = value;
    }

    get quantity(): number {
        return this._quantity;
    }

    set quantity(value: number) {
        this._quantity = value;
    }

    get status(): "pending" | "paid" | "refused" | "error" {
        return this._status;
    }

    set status(value: "pending" | "paid" | "refused" | "error") {
        this._status = value;
    }

    get taxRate(): number | null {
        return this._taxRate;
    }

    set taxRate(value: number | null) {
        this._taxRate = value;
    }

    get tokenCount(): number | null {
        return this._tokenCount;
    }

    set tokenCount(value: number | null) {
        this._tokenCount = value;
    }

    get total(): number {
        return this._total;
    }

    set total(value: number) {
        this._total = value;
    }

    get updatedAt(): Date {
        return this._updatedAt;
    }

    set updatedAt(value: Date) {
        this._updatedAt = value;
    }

    get userId(): string {
        return this._userId;
    }

    set userId(value: string) {
        this._userId = value;
    }


}