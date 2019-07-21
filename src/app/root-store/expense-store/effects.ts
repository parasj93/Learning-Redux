import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as featureActions from './actions';
import {concatMap, map} from 'rxjs/operators';
import {of} from 'rxjs';

import {DataService} from 'src/app/services';

@Injectable()
export class ExpenseStoreEffects {
  constructor(private actions$: Actions, private dataService: DataService) {}

  loadRequesEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(featureActions.load),
      concatMap(_ =>
        this.dataService
          .getExpense()
          .pipe(map(expenses => featureActions.loadSuccess({expenses})))
      )
    )
  );
}
