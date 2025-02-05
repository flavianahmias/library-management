import { SortType } from 'src/shared/types.ts/types';

export type OrderBy = 'role' | 'createdAt';

export type FindAllUsersOptions = {
  page: number;
  pageSize: number;
  nameOrEmail?: string;
  role?: string;
  orderBy?: OrderBy;
  sort?: SortType;
  isActive?: boolean;
};
