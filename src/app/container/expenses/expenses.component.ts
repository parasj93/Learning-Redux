import {Component, OnInit} from '@angular/core';
import {Expense} from 'src/app/models';
import {Observable} from 'rxjs';
import {Store, select} from '@ngrx/store';
import {RootStoreState, ExpenseStoreSelector} from 'src/app/root-store';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
})
export class ExpensesComponent implements OnInit {
  expenses$: Observable<Expense[]>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<RootStoreState.State>) {}

  ngOnInit() {
    this.expenses$ = this.store.pipe(
      select(ExpenseStoreSelector.selectAllExpenses)
    );

    this.isLoading$ = this.store.pipe(
      select(ExpenseStoreSelector.selectExpenseIsLoading)
    );
  }
}
