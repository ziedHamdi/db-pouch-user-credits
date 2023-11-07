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
exports.BasePouchDao = void 0;
class BasePouchDao {
    constructor(db, collection) {
        this.db = db;
        this.collection = collection;
    }
    build(entry) {
        return entry;
    }
    count(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.db.query(this.collection + '/count', {
                    endkey: query,
                    startkey: query,
                });
                return result.rows[0].value;
            }
            catch (error) {
                throw new Error(`Error counting documents: ${error.message}`);
            }
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.db.put(data);
                return yield this.findById(response.id);
            }
            catch (error) {
                throw new Error(`Error creating document: ${error.message}`);
            }
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const doc = yield this.findById(id);
                if (doc) {
                    yield this.db.remove(doc);
                    return true;
                }
                return false;
            }
            catch (error) {
                throw new Error(`Error deleting document: ${error.message}`);
            }
        });
    }
    find(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.db.query('your-design-document/find', {
                    endkey: query,
                    include_docs: true,
                    startkey: query,
                });
                return result.rows.map(row => row.doc);
            }
            catch (error) {
                throw new Error(`Error finding documents: ${error.message}`);
            }
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const doc = yield this.db.get(id);
                return doc;
            }
            catch (error) {
                if (error.status === 404) {
                    return null;
                }
                else {
                    throw new Error(`Error finding document by ID: ${error.message}`);
                }
            }
        });
    }
    findOne(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.db.query('your-design-document/find', {
                    endkey: query,
                    include_docs: true,
                    limit: 1,
                    startkey: query,
                });
                if (result.rows.length > 0) {
                    return result.rows[0].doc;
                }
                else {
                    return null;
                }
            }
            catch (error) {
                throw new Error(`Error finding one document: ${error.message}`);
            }
        });
    }
    updateById(id, update) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const doc = yield this.findById(id);
                if (doc) {
                    const updatedDoc = Object.assign(Object.assign({}, doc), update);
                    const response = yield this.db.put(updatedDoc);
                    return yield this.findById(response.id);
                }
                return null;
            }
            catch (error) {
                throw new Error(`Error updating document: ${error.message}`);
            }
        });
    }
}
exports.BasePouchDao = BasePouchDao;
