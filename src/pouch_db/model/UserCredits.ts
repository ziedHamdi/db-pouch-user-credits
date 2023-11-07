import {IUserCredits} from "user-credits";
import {BaseEntity} from "./BaseEntity";
import {ActivatedOffer} from "./ActivatedOffer";
import {Subscription} from "./Subscription";

export class UserCredits extends BaseEntity implements IUserCredits<string> {
    offers: ActivatedOffer[];
    subscriptions: Subscription[];
    userId: string;

}