export interface EntityMetadata {
    id?: number;
    createdAt: Date;
    updatedAt: Date;
}
export declare abstract class Entity<T> {
    protected readonly props: T;
    private readonly _id?;
    private readonly _createdAt?;
    private readonly _updatedAt?;
    constructor(props: T, metadata?: EntityMetadata);
    get id(): number;
    get createdAt(): Date;
    get updatedAt(): Date;
}
