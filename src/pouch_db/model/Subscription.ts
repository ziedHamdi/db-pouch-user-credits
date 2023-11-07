import {ISubscription, OfferCycle} from "user-credits";

import {BaseEntity} from "./BaseEntity";

export class Subscription extends BaseEntity implements ISubscription<string> {
    protected _customCycle: number | null;
    protected _cycle: OfferCycle;
    protected _name: string;
    protected _offerGroup: string;
    protected _offerId: string;
    protected _orderId: string;
    protected _starts: Date;
    protected _status: "pending" | "paid" | "refused" | "error";
    protected _tokens: number;

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

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
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

    get orderId(): string {
        return this._orderId;
    }

    set orderId(value: string) {
        this._orderId = value;
    }

    get starts(): Date {
        return this._starts;
    }

    set starts(value: Date) {
        this._starts = value;
    }

    get status(): "pending" | "paid" | "refused" | "error" {
        return this._status;
    }

    set status(value: "pending" | "paid" | "refused" | "error") {
        this._status = value;
    }

    get tokens(): number {
        return this._tokens;
    }

    set tokens(value: number) {
        this._tokens = value;
    }


}