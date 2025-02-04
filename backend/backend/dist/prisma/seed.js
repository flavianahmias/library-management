"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcrypt = require("bcrypt");
const user_seed_1 = require("./seeds/user.seed");
const prisma = new client_1.PrismaClient();
async function main() {
    const hash = async (password) => await bcrypt.hash(password, 10);
    try {
        for (const user of user_seed_1.UserSeed) {
            await prisma.user.create({
                data: {
                    email: 'admin@email.com',
                    password: await hash(user.password),
                    role: 0,
                    name: 'admin',
                },
            });
        }
    }
    catch (error) {
        console.log(error);
    }
}
main()
    .then(async () => {
    await prisma.$disconnect();
})
    .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
//# sourceMappingURL=seed.js.map