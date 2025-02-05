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
exports.ListBooksController = void 0;
const common_1 = require("@nestjs/common");
const list_books_query_params_dto_1 = require("../../dtos/list-books-query-params.dto");
const swagger_1 = require("@nestjs/swagger");
const book_mapper_1 = require("../../mappers/book-mapper");
const list_books_service_1 = require("./list-books.service");
let ListBooksController = class ListBooksController {
    constructor(service) {
        this.service = service;
    }
    async execute(query) {
        const result = await this.service.execute(query);
        return { ...result, data: result.data.map(book_mapper_1.BookMapper.toDTO) };
    }
};
exports.ListBooksController = ListBooksController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_books_query_params_dto_1.ListBooksQueryParamsDTO]),
    __metadata("design:returntype", Promise)
], ListBooksController.prototype, "execute", null);
exports.ListBooksController = ListBooksController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Book'),
    (0, common_1.Controller)('book'),
    __metadata("design:paramtypes", [list_books_service_1.ListBooksService])
], ListBooksController);
//# sourceMappingURL=list-books.controller.js.map