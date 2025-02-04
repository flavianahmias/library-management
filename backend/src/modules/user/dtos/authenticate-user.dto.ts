import { ApiProperty } from '@nestjs/swagger';

export class AuthenticateUserDTO {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
