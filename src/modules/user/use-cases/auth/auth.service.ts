import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { IUserRepo } from '../../repositories/interfaces/user-repo.interface';

@Injectable()
export class AuthService {
  constructor(
    @Inject('IUserRepo') private readonly userRepo: IUserRepo,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userRepo.findOne({ email: { equals: email } });
    if (!user) return null;

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return null;

    return user;
  }

  getAccessToken(user: any): string {
    const payload = {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    };

    this.updateUserLoginAt(payload.email);
    return this.jwtService.sign(payload);
  }

  async updateUserLoginAt(email: string) {
    const user = await this.userRepo.findOne({ email: { equals: email } });
    // user.loginAt = new Date();
    // await this.userRepo.update(user);
  }
}
