"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMapper = void 0;
const user_1 = require("../domain/user");
class UserMapper {
    static toDomain(raw) {
        return user_1.User.create({
            name: raw.name,
            email: raw.email,
            role: raw.role,
            password: raw.password,
            isActive: false,
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
            email: d.email,
            isActive: d.isActive,
            photoUrl: d.photoUrl,
            role: d.role,
            loginAt: d.loginAt,
            createdAt: d.createdAt,
            updatedAt: d.updatedAt,
        };
    }
}
exports.UserMapper = UserMapper;
//# sourceMappingURL=user-mapper.js.map