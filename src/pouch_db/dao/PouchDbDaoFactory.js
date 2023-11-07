"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PouchDbDaoFactory = void 0;
const index_1 = require("./index");
class PouchDbDaoFactory {
    constructor(connection) {
        this.connection = connection;
        this.offerDao = new index_1.OfferDao(connection);
        this.orderDao = new index_1.OrderDao(connection);
        this.tokenTimetableDao = new index_1.TokenTimetableDao(connection);
        this.userCreditsDao = new index_1.UserCreditsDao(connection);
    }
    getOfferDao() {
        return this.offerDao;
    }
    getOrderDao() {
        return this.orderDao;
    }
    getTokenTimetableDao() {
        return this.tokenTimetableDao;
    }
    getUserCreditsDao() {
        return this.userCreditsDao;
    }
}
exports.PouchDbDaoFactory = PouchDbDaoFactory;
