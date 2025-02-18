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
exports.RentBookController = void 0;
const common_1 = require("@nestjs/common");
const book_mapper_1 = require("../../mappers/book-mapper");
const rent_book_service_1 = require("./rent-book.service");
const jwt_auth_guard_1 = require("../../../user/use-cases/auth/jwt-auth.guard");
const swagger_1 = require("@nestjs/swagger");
let RentBookController = class RentBookController {
    constructor(service) {
        this.service = service;
    }
    async execute(id, req) {
        const result = await this.service.execute({
            bookId: id,
            userId: req.user.id,
        });
        return { data: book_mapper_1.BookMapper.toDTO(result) };
    }
};
exports.RentBookController = RentBookController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)('/:id/rent'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], RentBookController.prototype, "execute", null);
exports.RentBookController = RentBookController = __decorate([
    (0, swagger_1.ApiTags)('Book'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('book'),
    __metadata("design:paramtypes", [rent_book_service_1.RentBookService])
], RentBookController);
//# sourceMappingURL=rent-book.controller.js.map