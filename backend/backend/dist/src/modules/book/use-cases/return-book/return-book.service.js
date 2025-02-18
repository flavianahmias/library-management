"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnBookService = void 0;
const common_1 = require("@nestjs/common");
const book_status_enum_1 = require("../../enums/book-status.enum");
const history_type_enum_1 = require("../../../history/enums/history-type.enum");
const history_1 = require("../../../history/domain/history");
let ReturnBookService = class ReturnBookService {
    constructor(bookRepo, userRepo) {
        this.bookRepo = bookRepo;
        this.userRepo = userRepo;
    }
    async execute(input) {
        const user = await this.userRepo.findOne({ id: { equals: input.userId } });
        const book = await this.bookRepo.findOne({ id: { equals: input.bookId } });
        book.status = book_status_enum_1.BookStatusEnum.Available;
        book.history = [
            history_1.History.create({
                book: book,
                type: history_type_enum_1.HistoryTypeEnum.Rented,
                user: user,
            }),
        ];
        const result = await this.bookRepo.update(book);
        return result;
    }
};
exports.ReturnBookService = ReturnBookService;
exports.ReturnBookService = ReturnBookService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('IBookRepo')),
    __param(1, (0, common_1.Inject)('IUserRepo')),
    __metadata("design:paramtypes", [Object, Object])
], ReturnBookService);
//# sourceMappingURL=return-book.service.js.map