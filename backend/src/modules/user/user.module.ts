import { Module } from '@nestjs/common';
import { AuthService } from './use-cases/auth/auth.service';
import { AuthController } from './use-cases/auth/auth.controller';
import { PrismaModule } from 'src/infra/prisma/prisma.module';
import { jwtConstants } from './use-cases/auth/constants';
import { JwtModule } from '@nestjs/jwt';
import { UserRepoService } from './repositories/prisma/user-repo';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './use-cases/auth/jwt.strategy';
import { LocalStrategy } from './use-cases/auth/local.strategy';

@Module({
  imports: [
    PassportModule,
    PrismaModule,
    JwtModule.register({
      secret: jwtConstants.jwtSecret,
      signOptions: {
        expiresIn: '8h',
      },
    }),
  ],
  providers: [
    AuthService,
    UserRepoService,
    LocalStrategy,
    JwtStrategy,
    { provide: 'IUserRepo', useExisting: UserRepoService },
  ],
  controllers: [AuthController],
})
export class UserModule {}
