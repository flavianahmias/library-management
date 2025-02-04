"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = void 0;
const env = require("env-var");
exports.appConfig = {
    port: env.get('PORT').asPortNumber(),
    databaseUrl: env.get('DATABASE_URL').required().asString(),
    jwtSecret: env.get('JWT_SECRET').required().asString(),
};
//# sourceMappingURL=config.js.map