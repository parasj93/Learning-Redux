import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {reducer} from './reducer';
import {EffectsModule} from '@ngrx/effects';
import {ExpenseStoreEffects} from './effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('expense', reducer),
    EffectsModule.forFeature([ExpenseStoreEffects]),
  ],
  providers: [ExpenseStoreEffects],
})
export class ExpenseStoreModule {}
