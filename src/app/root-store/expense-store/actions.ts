import {createAction, props} from '@ngrx/store';
import {Expense} from 'src/app/models';

export const load = createAction('[App Component] Load');

export const loadSuccess = createAction(
  '[Jokes API] Load Success',
  props<{expenses: Expense[]}>()
);
