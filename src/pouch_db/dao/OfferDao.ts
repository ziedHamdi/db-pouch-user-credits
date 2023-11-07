import * as PouchDB from 'pouchdb';
import {IFindOffersParams, IOfferDao} from "user-credits";

import {Offer} from "../model";
import {BasePouchDao} from "./BasePouchDao";

export class OfferDao extends BasePouchDao<Offer> implements IOfferDao<string, Offer>{
    constructor(
        protected db: PouchDB.Database
    ) {
        super(db, "offers");
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    loadOffers(params?: IFindOffersParams<string>): Promise<Offer[]> {
        return Promise.resolve([]);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    loadOffersUnlockedByGroup(parentOfferGroup: string): Promise<Offer[]> {
        return Promise.resolve([]);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    loadTaggedOffers(tags: string[]): Promise<Offer[]> {
        return Promise.resolve([]);
    }

}