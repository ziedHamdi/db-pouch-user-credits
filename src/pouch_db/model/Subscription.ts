import {ISubscription, OfferCycle} from "user-credits";
import {BaseEntity} from "./BaseEntity";

export class Subscription extends BaseEntity implements ISubscription<string> {
    customCycle: number | null;
    cycle: OfferCycle;
    name: string;
    offerGroup: string;
    offerId: string;
    orderId: string;
    starts: Date;
    status: "pending" | "paid" | "refused" | "error";
    tokens: number;

}