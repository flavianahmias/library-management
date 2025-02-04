import { AuthService } from './auth.service';
import { AuthenticateUserDTO } from '../../dtos/authenticate-user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(req: any, authUserDto: AuthenticateUserDTO): {
        id: any;
        name: any;
        email: any;
        phone: any;
        role: any;
        accessToken: string;
    };
}
