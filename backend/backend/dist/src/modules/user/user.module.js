"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./use-cases/auth/auth.service");
const auth_controller_1 = require("./use-cases/auth/auth.controller");
const prisma_module_1 = require("../../infra/prisma/prisma.module");
const constants_1 = require("./use-cases/auth/constants");
const jwt_1 = require("@nestjs/jwt");
const user_repo_1 = require("./repositories/prisma/user-repo");
const passport_1 = require("@nestjs/passport");
const jwt_strategy_1 = require("./use-cases/auth/jwt.strategy");
const local_strategy_1 = require("./use-cases/auth/local.strategy");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule,
            prisma_module_1.PrismaModule,
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.jwtSecret,
                signOptions: {
                    expiresIn: '8h',
                },
            }),
        ],
        providers: [
            auth_service_1.AuthService,
            user_repo_1.UserRepoService,
            local_strategy_1.LocalStrategy,
            jwt_strategy_1.JwtStrategy,
            { provide: 'IUserRepo', useExisting: user_repo_1.UserRepoService },
        ],
        controllers: [auth_controller_1.AuthController],
    })
], UserModule);
//# sourceMappingURL=user.module.js.map