import { User as UserEntity } from '@prisma/client';
import { User } from '../domain/user';
import { UserDTO } from '../dtos/user.dto';
export declare class UserMapper {
    static toDomain(raw: UserEntity): User;
    static toDTO(d: User): UserDTO;
}
