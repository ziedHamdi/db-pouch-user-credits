import {IUserCredits} from "user-credits";

import {ActivatedOffer} from "./ActivatedOffer";
import {BaseEntity} from "./BaseEntity";
import {Subscription} from "./Subscription";

export class UserCredits extends BaseEntity implements IUserCredits<string> {
    private _offers: ActivatedOffer[];
    private _subscriptions: Subscription[];
    private _userId: string;

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