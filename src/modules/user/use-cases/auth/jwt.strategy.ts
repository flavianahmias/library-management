import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from './constants';
import { UserRepoService } from '../../repositories/prisma/user-repo';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userRepo: UserRepoService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.jwtSecret,
    });
  }

  async validate(payload: any) {
    const user = await this.userRepo.findOne({
      email: { equals: payload.email },
    });

    if (!user || !user.isActive)
      throw new UnauthorizedException(
        'User account deactivated or updated. Please authenticate again.',
      );

    return user;
  }
}
