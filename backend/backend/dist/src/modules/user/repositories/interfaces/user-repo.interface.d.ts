import { Prisma } from '@prisma/client';
import { User } from '../../domain/user';
import { FindAllUsersOptions } from '../../types/types';
export interface IUserRepo {
    save(data: User): Promise<User>;
    findOne(where: Prisma.UserWhereInput): Promise<User>;
    findAll(options: FindAllUsersOptions): Promise<{
        total: number;
        data: User[];
    }>;
    update(data: User): Promise<void>;
    delete(data: User): Promise<void>;
}
