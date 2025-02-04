import { Entity, EntityMetadata } from 'src/shared/core/entity';
import { UserRole } from '../enums/user-role.enum';
import * as bcrypt from 'bcrypt';

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

export class User extends Entity<UserProps> {
  private constructor(props: UserProps, metadata?: EntityMetadata) {
    super(props, metadata);
  }

  static create(props: UserProps, metadata?: EntityMetadata) {
    return new User(props, metadata);
  }

  get name() {
    return this.props.name;
  }

  set name(value: string) {
    this.props.name = value;
  }

  get email() {
    return this.props.email;
  }

  set email(value: string) {
    this.props.email = value;
  }

  get role() {
    return this.props.role;
  }

  set role(value: UserRole) {
    this.props.role = value;
  }

  get password() {
    return this.props.password;
  }

  set password(raw: string) {
    this.props.password = bcrypt.hashSync(raw, 10);
  }

  get cpf() {
    return this.props.cpf;
  }

  set cpf(cpf: string) {
    this.props.cpf = cpf;
  }

  get rg() {
    return this.props.rg;
  }

  set rg(rg: string) {
    this.props.rg = rg;
  }

  get photoUrl() {
    return this.props.photoUrl;
  }

  set photoUrl(value: string) {
    this.props.photoUrl = value;
  }

  get isActive() {
    return this.props.isActive;
  }

  activate() {
    this.props.isActive = true;
  }

  deactivate() {
    this.props.isActive = false;
  }

  isPasswordValid(pass: string) {
    return bcrypt.compareSync(pass, this.password);
  }

  get loginAt() {
    return this.props.loginAt;
  }

  set loginAt(value: Date) {
    this.props.loginAt = value;
  }

  set isActive(isActive: boolean) {
    this.props.isActive = isActive;
  }

  get gender() {
    return this.props.gender;
  }

  set gender(gender: string) {
    this.props.gender = gender;
  }

  get birthdate() {
    return this.props.birthdate;
  }
  set birthdate(birthdate: string) {
    this.props.birthdate = birthdate;
  }
}
