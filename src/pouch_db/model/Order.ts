import {BaseEntity} from "./BaseEntity";
import {IOrder, OfferCycle} from "user-credits";
import {OrderStatus} from "./OrderStatus";

export class Order extends BaseEntity implements IOrder<string> {
    country: string | null;
    createdAt: Date;
    currency: string;
    customCycle: number | null;
    cycle: OfferCycle;
    history: [OrderStatus] | null;
    offerGroup: string;
    offerId: string;
    paymentIntentId: string | null;
    paymentIntentSecret: string | null;
    quantity: number;
    status: "pending" | "paid" | "refused" | "error";
    taxRate: number | null;
    tokenCount: number | null;
    total: number;
    updatedAt: Date;
    userId: string;

}