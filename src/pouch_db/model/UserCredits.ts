import {IUserCredits} from "@user-credits/core";

import {ActivatedOffer} from "./ActivatedOffer";
import {BaseEntity} from "./BaseEntity";
import {Subscription} from "./Subscription";

export class UserCredits extends BaseEntity implements IUserCredits<string> {
    constructor(id: string, offers: ActivatedOffer[], subscriptions: Subscription[], userId: string) {
        super(id);
        this._offers = offers;
        this._subscriptions = subscriptions;
        this._userId = userId;
    }
    protected _offers: ActivatedOffer[];
    protected _subscriptions: Subscription[];
    protected _userId: string;

    get offers(): ActivatedOffer[] {
        return this._offers;
    }

    set offers(value: ActivatedOffer[]) {
        this._offers = value;
    }

    get subscriptions(): Subscription[] {
        return this._subscriptions;
    }

    set subscriptions(value: Subscription[]) {
        this._subscriptions = value;
    }

    get userId(): string {
        return this._userId;
    }

    set userId(value: string) {
        this._userId = value;
    }
}