"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const entity_1 = require("../../../shared/core/entity");
const bcrypt = require("bcrypt");
class User extends entity_1.Entity {
    constructor(props, metadata) {
        super(props, metadata);
    }
    static create(props, metadata) {
        return new User(props, metadata);
    }
    get name() {
        return this.props.name;
    }
    set name(value) {
        this.props.name = value;
    }
    get email() {
        return this.props.email;
    }
    set email(value) {
        this.props.email = value;
    }
    get role() {
        return this.props.role;
    }
    set role(value) {
        this.props.role = value;
    }
    get password() {
        return this.props.password;
    }
    set password(raw) {
        this.props.password = bcrypt.hashSync(raw, 10);
    }
    get cpf() {
        return this.props.cpf;
    }
    set cpf(cpf) {
        this.props.cpf = cpf;
    }
    get rg() {
        return this.props.rg;
    }
    set rg(rg) {
        this.props.rg = rg;
    }
    get photoUrl() {
        return this.props.photoUrl;
    }
    set photoUrl(value) {
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
    isPasswordValid(pass) {
        return bcrypt.compareSync(pass, this.password);
    }
    get loginAt() {
        return this.props.loginAt;
    }
    set loginAt(value) {
        this.props.loginAt = value;
    }
    set isActive(isActive) {
        this.props.isActive = isActive;
    }
    get gender() {
        return this.props.gender;
    }
    set gender(gender) {
        this.props.gender = gender;
    }
    get birthdate() {
        return this.props.birthdate;
    }
    set birthdate(birthdate) {
        this.props.birthdate = birthdate;
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map