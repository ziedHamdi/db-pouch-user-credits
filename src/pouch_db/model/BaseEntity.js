"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEntity = void 0;
class BaseEntity {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    markModified(field) {
    }
    save() {
        return Promise.resolve(this._id);
    }
}
exports.BaseEntity = BaseEntity;
