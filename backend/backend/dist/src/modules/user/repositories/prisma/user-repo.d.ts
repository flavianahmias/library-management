import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { User } from '../../domain/user';
import { FindAllUsersOptions } from '../../types/types';
import { IUserRepo } from '../interfaces/user-repo.interface';
export declare class UserRepoService implements IUserRepo {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findOne(where: Prisma.UserWhereInput): Promise<User>;
    save(data: User): Promise<User>;
    findAll(options: FindAllUsersOptions): Promise<{
        total: number;
        data: User[];
    }>;
    update(data: User): Promise<void>;
    delete(data: User): Promise<void>;
}
