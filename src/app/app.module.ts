import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetHeaderComponent } from './components/budget-header/budget-header.component';
import { SetBudgetComponent } from './components/set-budget/set-budget.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { ExpenseComponent } from './components/expense/expense.component';

@NgModule({
  declarations: [
    AppComponent,
    BudgetHeaderComponent,
    SetBudgetComponent,
    ExpensesComponent,
    ExpenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
