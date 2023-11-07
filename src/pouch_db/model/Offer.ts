import {IOffer, OfferCycle} from "user-credits";
import {BaseEntity} from "./BaseEntity";

export class Offer extends BaseEntity implements IOffer<string> {
    customCycle: number | null;
    cycle: OfferCycle;
    hasDependentOffers: boolean;
    kind: "subscription" | "tokens" | "expertise";
    name: string;
    offerGroup: string;
    overridingKey: string;
    popular: number;
    price: number;
    quantityLimit: number | null;
    tags: string[];
    tokenCount: number | null;
    unlockedBy: string[];
    weight: number;

    asUnlockingOfferGroups(offerGroups: string[], reset?: boolean): string[] {
        return [];
    }

    asUnlockingOffers(dependsOnOffers: IOffer<string>[], reset?: boolean): string[] {
        return [];
    }

}