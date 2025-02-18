"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.History = void 0;
const entity_1 = require("../../../shared/core/entity");
class History extends entity_1.Entity {
    constructor(props, metadata) {
        super(props, metadata);
    }
    static create(props, metadata) {
        return new History(props, metadata);
    }
    get type() {
        return this.props.type;
    }
    set type(value) {
        this.props.type = value;
    }
    get user() {
        return this.props.user;
    }
    set user(value) {
        this.props.user = value;
    }
    get book() {
        return this.props.book;
    }
    set book(book) {
        this.props.book = book;
    }
}
exports.History = History;
//# sourceMappingURL=history.js.map