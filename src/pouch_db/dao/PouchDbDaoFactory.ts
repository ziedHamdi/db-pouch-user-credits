
import {
    IDaoFactory,
    IOffer,
    IOfferDao,
    IOrder,
    IOrderDao,
    ITokenTimetable,
    ITokenTimetableDao,
    IUserCredits,
    IUserCreditsDao,
} from "user-credits";

import { OfferDao, OrderDao, TokenTimetableDao, UserCreditsDao } from "./index";

export class PouchDbDaoFactory implements IDaoFactory<string> {
    protected readonly offerDao;
    protected readonly orderDao;
    protected readonly tokenTimetableDao;
    protected readonly userCreditsDao;

    constructor(public connection: PouchDB.Database) {
        this.offerDao = new OfferDao(connection);
        this.orderDao = new OrderDao(connection);
        this.tokenTimetableDao = new TokenTimetableDao(connection);
        this.userCreditsDao = new UserCreditsDao(connection);
    }

    getOfferDao(): IOfferDao<string, IOffer<string>> {
        return this.offerDao;
    }

    getOrderDao(): IOrderDao<string, IOrder<string>> {
        return this.orderDao;
    }

    getTokenTimetableDao(): ITokenTimetableDao<
        string,
        ITokenTimetable<string>
        > {
        return this.tokenTimetableDao;
    }

    getUserCreditsDao(): IUserCreditsDao<string, IUserCredits<string>> {
        return this.userCreditsDao;
    }
}
