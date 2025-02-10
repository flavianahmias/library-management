"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookMapper = void 0;
const book_1 = require("../domain/book");
class BookMapper {
    static toDomain(raw) {
        return book_1.Book.create({
            name: raw.name,
            status: raw.status,
            author: raw.author,
            value: raw.value,
        }, {
            id: raw.id,
            createdAt: raw.createdAt,
            updatedAt: raw.updatedAt,
        });
    }
    static toDTO(d) {
        return {
            id: d.id,
            name: d.name,
            status: d.status,
            author: d.author,
            value: d.value,
            createdAt: d.createdAt,
            updatedAt: d.updatedAt,
        };
    }
}
exports.BookMapper = BookMapper;
//# sourceMappingURL=book-mapper.js.map