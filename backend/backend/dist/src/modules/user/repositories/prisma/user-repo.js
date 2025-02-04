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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../../infra/prisma/prisma.service");
const user_mapper_1 = require("../../mappers/user-mapper");
let UserRepoService = class UserRepoService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findOne(where) {
        const result = await this.prisma.user.findFirst({
            where: where,
        });
        return result && user_mapper_1.UserMapper.toDomain(result);
    }
    async save(data) {
        const result = await this.prisma.user.create({
            data: {
                email: data.email,
                name: data.name,
                role: data.role,
                password: data.password,
                cpf: data.cpf,
                rg: data.rg,
                gender: data.gender,
                birthdate: data.birthdate,
            },
        });
        return result && user_mapper_1.UserMapper.toDomain(result);
    }
    async findAll(options) {
        const whereClause = { AND: [] };
        if (!!options.nameOrEmail) {
            whereClause.AND.push({
                OR: [
                    {
                        name: { contains: options.nameOrEmail },
                    },
                    {
                        email: { contains: options.nameOrEmail },
                    },
                ],
            });
        }
        if (!!options.role)
            whereClause.AND.push({ role: { equals: options.role } });
        if (typeof options.isActive !== 'undefined')
            whereClause.AND.push({ isActive: { equals: options.isActive } });
        const orderByClause = {
            role: { role: options.sort },
            createdAt: { createdAt: options.sort },
        };
        const skip = options.pageSize * (options.page - 1);
        const take = options.pageSize;
        const totalCount = await this.prisma.user.count({ where: whereClause });
        const data = await this.prisma.user.findMany({
            skip,
            take,
            where: whereClause,
            orderBy: orderByClause[options.orderBy],
        });
        return { total: totalCount, data: data.map(user_mapper_1.UserMapper.toDomain) };
    }
    async update(data) {
        await this.prisma.user.update({
            where: { id: data.id },
            data: {
                email: data.email,
                name: data.name,
                role: data.role,
                password: data.password,
                cpf: data.cpf,
                rg: data.rg,
                gender: data.gender,
                birthdate: data.birthdate,
            },
        });
    }
    async delete(data) {
        await this.prisma.user.delete({
            where: { id: data.id },
        });
    }
};
exports.UserRepoService = UserRepoService;
exports.UserRepoService = UserRepoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserRepoService);
//# sourceMappingURL=user-repo.js.map