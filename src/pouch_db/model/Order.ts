import {IOrder, OfferCycle} from "user-credits";

import {BaseEntity} from "./BaseEntity";
import {OrderStatus} from "./OrderStatus";

export class Order extends BaseEntity implements IOrder<string> {
    private _country: string | null;
    private _createdAt: Date;
    private _currency: string;
    private _customCycle: number | null;
    private _cycle: OfferCycle;
    private _history: [OrderStatus] | null;
    private _offerGroup: string;
    private _offerId: string;
    private _paymentIntentId: string | null;
    private _paymentIntentSecret: string | null;
    private _quantity: number;
    private _status: "pending" | "paid" | "refused" | "error";
    private _taxRate: number | null;
    private _tokenCount: number | null;
    private _total: number;
    private _updatedAt: Date;
    private _userId: string;

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