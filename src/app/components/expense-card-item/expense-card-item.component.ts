import {Component, OnInit, Input} from '@angular/core';
import {Expense} from 'src/app/models';

@Component({
  selector: 'app-expense-card-item',
  templateUrl: './expense-card-item.component.html',
  styleUrls: ['./expense-card-item.component.scss'],
})
export class ExpenseCardItemComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() expense: Expense;
}
