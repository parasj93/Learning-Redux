import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseCardItemComponent } from './expense-card-item.component';

describe('ExpenseCardItemComponent', () => {
  let component: ExpenseCardItemComponent;
  let fixture: ComponentFixture<ExpenseCardItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseCardItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
