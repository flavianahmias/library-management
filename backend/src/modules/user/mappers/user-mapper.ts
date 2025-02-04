import { User as UserEntity } from '@prisma/client';
import { User } from '../domain/user';
import { UserDTO } from '../dtos/user.dto';

export class UserMapper {
  static toDomain(raw: UserEntity): User {
    return User.create(
      {
        name: raw.name,
        email: raw.email,
        role: raw.role,
        password: raw.password,
        isActive: false,
      },
      {
        id: raw.id,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
    );
  }

  static toDTO(d: User): UserDTO {
    return {
      id: d.id as number,
      name: d.name,
      email: d.email,
      isActive: d.isActive,
      photoUrl: d.photoUrl,
      role: d.role,
      loginAt: d.loginAt,
      createdAt: d.createdAt,
      updatedAt: d.updatedAt,
    };
  }
}
