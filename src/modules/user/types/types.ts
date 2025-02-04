export type Sort = 'asc' | 'desc';
export type OrderBy = 'role' | 'createdAt';
export type FindAllUsersOptions = {
  page: number;
  pageSize: number;
  nameOrEmail?: string;
  role?: string;
  orderBy?: OrderBy;
  sort?: Sort;
  isActive?: boolean;
};
