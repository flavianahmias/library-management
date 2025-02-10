"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookModule = void 0;
const common_1 = require("@nestjs/common");
const create_book_service_1 = require("./use-cases/create-book/create-book.service");
const create_book_controller_1 = require("./use-cases/create-book/create-book.controller");
const book_repo_1 = require("./repositories/prisma/book-repo");
const prisma_module_1 = require("../../infra/prisma/prisma.module");
const edit_book_service_1 = require("./use-cases/edit-book/edit-book.service");
const list_books_service_1 = require("./use-cases/list-books/list-books.service");
const get_book_service_1 = require("./use-cases/get-book/get-book.service");
const get_book_controller_1 = require("./use-cases/get-book/get-book.controller");
const edit_book_controller_1 = require("./use-cases/edit-book/edit-book.controller");
const list_books_controller_1 = require("./use-cases/list-books/list-books.controller");
const rent_book_service_1 = require("./use-cases/rent-book/rent-book.service");
const rent_book_controller_1 = require("./use-cases/rent-book/rent-book.controller");
const return_book_controller_1 = require("./use-cases/return-book/return-book.controller");
const return_book_service_1 = require("./use-cases/return-book/return-book.service");
let BookModule = class BookModule {
};
exports.BookModule = BookModule;
exports.BookModule = BookModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        providers: [
            create_book_service_1.CreateBookService,
            book_repo_1.BookRepoService,
            { provide: 'IBookRepo', useExisting: book_repo_1.BookRepoService },
            edit_book_service_1.EditBookService,
            list_books_service_1.ListBooksService,
            get_book_service_1.GetBookService,
            rent_book_service_1.RentBookService,
            return_book_service_1.ReturnBookService,
        ],
        controllers: [create_book_controller_1.CreateBookController, get_book_controller_1.GetBookController, edit_book_controller_1.EditBookController, list_books_controller_1.ListBooksController, rent_book_controller_1.RentBookController, return_book_controller_1.ReturnBookController],
    })
], BookModule);
//# sourceMappingURL=book.module.js.map