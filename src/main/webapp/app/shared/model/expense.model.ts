import dayjs from 'dayjs';
import { IUser } from 'app/shared/model/user.model';
import { ICategory } from 'app/shared/model/category.model';

export interface IExpense {
  id?: number;
  amount?: number | null;
  date?: dayjs.Dayjs | null;
  notes?: string | null;
  createdAt?: dayjs.Dayjs | null;
  user?: IUser | null;
  category?: ICategory | null;
}

export const defaultValue: Readonly<IExpense> = {};
