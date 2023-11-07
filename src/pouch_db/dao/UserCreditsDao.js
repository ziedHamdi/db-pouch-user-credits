"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreditsDao = void 0;
const BasePouchDao_1 = require("./BasePouchDao");
class UserCreditsDao extends BasePouchDao_1.BasePouchDao {
    constructor(db) {
        super(db, "user_credits");
        this.db = db;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    findByUserId(userId) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return (_a = (yield this.find({ userId }))) === null || _a === void 0 ? void 0 : _a[0];
        });
    }
}
exports.UserCreditsDao = UserCreditsDao;
