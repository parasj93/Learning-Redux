import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RootStoreModule} from './root-store';
import {ExpensesComponent} from './container/expenses/expenses.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ExpenseCardItemComponent} from './components/expense-card-item/expense-card-item.component';
import {ExpenseCardListComponent} from './components/expense-card-list/expense-card-list.component';
import { SettingComponent } from './container/setting/setting.component';
import { ProfileComponent } from './container/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpensesComponent,
    ExpenseCardItemComponent,
    ExpenseCardListComponent,
    SettingComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RootStoreModule,
    MatCardModule,
    MatSidenavModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
