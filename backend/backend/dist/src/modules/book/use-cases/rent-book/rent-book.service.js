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
exports.RentBookService = void 0;
const common_1 = require("@nestjs/common");
const book_status_enum_1 = require("../../enums/book-status.enum");
let RentBookService = class RentBookService {
    constructor(bookRepo) {
        this.bookRepo = bookRepo;
    }
    async execute(input) {
        const book = await this.bookRepo.findOne({ id: { equals: input.bookId } });
        console.log(input.userName);
        book.status = book_status_enum_1.BookStatusEnum.Rent;
        const result = await this.bookRepo.update(book);
        return result;
    }
};
exports.RentBookService = RentBookService;
exports.RentBookService = RentBookService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('IBookRepo')),
    __metadata("design:paramtypes", [Object])
], RentBookService);
//# sourceMappingURL=rent-book.service.js.map