import { Entity, EntityMetadata } from 'src/shared/core/entity';
import { UserRole } from '../enums/user-role.enum';
interface UserProps {
    name: string;
    email: string;
    role: UserRole;
    password: string;
    cpf?: string;
    rg?: string;
    gender?: string;
    birthdate?: string;
    photoUrl?: string;
    isActive: boolean;
    loginAt?: Date;
}
export declare class User extends Entity<UserProps> {
    private constructor();
    static create(props: UserProps, metadata?: EntityMetadata): User;
    get name(): string;
    set name(value: string);
    get email(): string;
    set email(value: string);
    get role(): UserRole;
    set role(value: UserRole);
    get password(): string;
    set password(raw: string);
    get cpf(): string;
    set cpf(cpf: string);
    get rg(): string;
    set rg(rg: string);
    get photoUrl(): string;
    set photoUrl(value: string);
    get isActive(): boolean;
    activate(): void;
    deactivate(): void;
    isPasswordValid(pass: string): any;
    get loginAt(): Date;
    set loginAt(value: Date);
    set isActive(isActive: boolean);
    get gender(): string;
    set gender(gender: string);
    get birthdate(): string;
    set birthdate(birthdate: string);
}
export {};
