"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferDao = void 0;
const BasePouchDao_1 = require("./BasePouchDao");
class OfferDao extends BasePouchDao_1.BasePouchDao {
    constructor(db) {
        super(db, "offers");
        this.db = db;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    loadOffers(params) {
        return Promise.resolve([]);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    loadOffersUnlockedByGroup(parentOfferGroup) {
        return Promise.resolve([]);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    loadTaggedOffers(tags) {
        return Promise.resolve([]);
    }
}
exports.OfferDao = OfferDao;
