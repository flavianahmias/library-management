import { UserRepoService } from '../../repositories/prisma/user-repo';
declare const JwtStrategy_base: new (...args: any) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userRepo;
    constructor(userRepo: UserRepoService);
    validate(payload: any): Promise<import("../../domain/user").User>;
}
export {};
