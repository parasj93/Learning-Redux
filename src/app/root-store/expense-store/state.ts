import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Expense} from 'src/app/models';

export const featureAdapter: EntityAdapter<Expense> = createEntityAdapter<
  Expense
>({selectId: model => model.id});

export interface State extends EntityState<Expense> {
  selectedExpenseId: number;
  isLoading?: boolean;
}

export const initialState: State = featureAdapter.getInitialState({
  selectedExpenseId: null,
  isLoading: false,
});
