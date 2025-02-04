"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
class Entity {
    constructor(props, metadata) {
        this.props = props;
        this._id = metadata?.id;
        this._createdAt = metadata?.createdAt;
        this._updatedAt = metadata?.updatedAt;
    }
    get id() {
        return this._id;
    }
    get createdAt() {
        return this._createdAt;
    }
    get updatedAt() {
        return this._updatedAt;
    }
}
exports.Entity = Entity;
//# sourceMappingURL=entity.js.map