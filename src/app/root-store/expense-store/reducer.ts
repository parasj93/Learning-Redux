import {createReducer, on, Action} from '@ngrx/store';
import {initialState, featureAdapter, State} from './state';
import * as featureAction from './actions';

const featureReducer = createReducer(
  initialState,
  on(featureAction.load, state => ({...state})),
  on(featureAction.loadSuccess, (state, {expenses}) =>
    featureAdapter.addAll(expenses, {...state})
  )
);

export function reducer(state: State | undefined, action: Action) {
  return featureReducer(state, action);
}
