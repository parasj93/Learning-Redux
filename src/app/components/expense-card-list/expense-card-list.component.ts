import {Component, OnInit, Input} from '@angular/core';
import {Expense} from 'src/app/models';

@Component({
  selector: 'app-expense-card-list',
  templateUrl: './expense-card-list.component.html',
  styleUrls: ['./expense-card-list.component.scss'],
})
export class ExpenseCardListComponent implements OnInit {
  @Input() expenses: Expense[];
  @Input() loading: boolean;

  constructor() {}

  ngOnInit() {}
}
