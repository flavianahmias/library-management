import { AuthService } from './auth.service';
declare const LocalStrategy_base: new (...args: any) => any;
export declare class LocalStrategy extends LocalStrategy_base {
    private readonly authUser;
    constructor(authUser: AuthService);
    validate(email: string, password: string): Promise<import("../../domain/user").User>;
}
export {};
