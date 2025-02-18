"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const entity_1 = require("../../../shared/core/entity");
class Book extends entity_1.Entity {
    constructor(props, metadata) {
        super(props, metadata);
    }
    static create(props, metadata) {
        return new Book(props, metadata);
    }
    get name() {
        return this.props.name;
    }
    set name(value) {
        this.props.name = value;
    }
    get status() {
        return this.props.status;
    }
    set status(value) {
        this.props.status = value;
    }
    get author() {
        return this.props.author;
    }
    set author(value) {
        this.props.author = value;
    }
    get value() {
        return this.props.value;
    }
    set value(value) {
        this.props.value = value;
    }
    get history() {
        return this.props.history;
    }
    set history(history) {
        this.props.history.push(history[0]);
    }
}
exports.Book = Book;
//# sourceMappingURL=book.js.map