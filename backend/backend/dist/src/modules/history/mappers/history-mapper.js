"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryMapper = void 0;
const history_1 = require("../domain/history");
const user_mapper_1 = require("../../user/mappers/user-mapper");
const book_mapper_1 = require("../../book/mappers/book-mapper");
class HistoryMapper {
    static toDomain(raw) {
        return history_1.History.create({
            type: raw.type,
            user: user_mapper_1.UserMapper.toDomain(raw.user),
            book: book_mapper_1.BookMapper.toDomain(raw.book),
        }, {
            id: raw.id,
            createdAt: raw.createdAt,
            updatedAt: raw.updatedAt,
        });
    }
    static toDTO(d) {
        return {
            id: d.id,
            type: d.type,
            user: user_mapper_1.UserMapper.toDTO(d.user),
            book: book_mapper_1.BookMapper.toDTO(d.book),
            createdAt: d.createdAt,
            updatedAt: d.updatedAt,
        };
    }
}
exports.HistoryMapper = HistoryMapper;
//# sourceMappingURL=history-mapper.js.map