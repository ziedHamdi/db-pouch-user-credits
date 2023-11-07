import {IOffer, OfferCycle} from "user-credits";

import {BaseEntity} from "./BaseEntity";

export class Offer extends BaseEntity implements IOffer<string> {
    constructor(id: string, customCycle: number | null, cycle: OfferCycle, hasDependentOffers: boolean, kind: "subscription" | "tokens" | "expertise", name: string, offerGroup: string, overridingKey: string, popular: number, price: number, quantityLimit: number | null, tags: string[], tokenCount: number | null, unlockedBy: string[], weight: number) {
        super(id);
        this._customCycle = customCycle;
        this._cycle = cycle;
        this._hasDependentOffers = hasDependentOffers;
        this._kind = kind;
        this._name = name;
        this._offerGroup = offerGroup;
        this._overridingKey = overridingKey;
        this._popular = popular;
        this._price = price;
        this._quantityLimit = quantityLimit;
        this._tags = tags;
        this._tokenCount = tokenCount;
        this._unlockedBy = unlockedBy;
        this._weight = weight;
    }


    protected _customCycle: number | null;
    protected _cycle: OfferCycle;
    protected _hasDependentOffers: boolean;
    protected _kind: "subscription" | "tokens" | "expertise";
    protected _name: string;
    protected _offerGroup: string;
    protected _overridingKey: string;
    protected _popular: number;
    protected _price: number;
    protected _quantityLimit: number | null;
    protected _tags: string[];
    protected _tokenCount: number | null;
    protected _unlockedBy: string[];
    protected _weight: number;

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

    get hasDependentOffers(): boolean {
        return this._hasDependentOffers;
    }

    set hasDependentOffers(value: boolean) {
        this._hasDependentOffers = value;
    }

    get kind(): "subscription" | "tokens" | "expertise" {
        return this._kind;
    }

    set kind(value: "subscription" | "tokens" | "expertise") {
        this._kind = value;
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

    get overridingKey(): string {
        return this._overridingKey;
    }

    set overridingKey(value: string) {
        this._overridingKey = value;
    }

    get popular(): number {
        return this._popular;
    }

    set popular(value: number) {
        this._popular = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get quantityLimit(): number | null {
        return this._quantityLimit;
    }

    set quantityLimit(value: number | null) {
        this._quantityLimit = value;
    }

    get tags(): string[] {
        return this._tags;
    }

    set tags(value: string[]) {
        this._tags = value;
    }

    get tokenCount(): number | null {
        return this._tokenCount;
    }

    set tokenCount(value: number | null) {
        this._tokenCount = value;
    }

    get unlockedBy(): string[] {
        return this._unlockedBy;
    }

    set unlockedBy(value: string[]) {
        this._unlockedBy = value;
    }

    get weight(): number {
        return this._weight;
    }

    set weight(value: number) {
        this._weight = value;
    }


    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    asUnlockingOfferGroups(offerGroups: string[], reset?: boolean): string[] {
        return [];
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    asUnlockingOffers(dependsOnOffers: IOffer<string>[], reset?: boolean): string[] {
        return [];
    }

}