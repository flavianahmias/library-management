import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { AuthenticateUserDTO } from '../../dtos/authenticate-user.dto';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Request() req, @Body() authUserDto: AuthenticateUserDTO) {
    console.log('Red:', req);
    const accessToken = this.authService.getAccessToken(req.user);
    return {
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
      phone: req.user.phone,
      role: req.user.role,
      accessToken,
    };
  }
}
