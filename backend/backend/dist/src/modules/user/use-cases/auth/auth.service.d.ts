import { JwtService } from '@nestjs/jwt';
import { IUserRepo } from '../../repositories/interfaces/user-repo.interface';
export declare class AuthService {
    private readonly userRepo;
    private jwtService;
    constructor(userRepo: IUserRepo, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<import("../../domain/user").User>;
    getAccessToken(user: any): string;
    updateUserLoginAt(email: string): Promise<void>;
}
