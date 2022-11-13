import { Component, OnInit } from '@angular/core';
import {BudgetService} from "../../services/budget.service";
import {Expense} from "../../models/budget";

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
  }

  getExpenses(): Expense[] {
    return this.budgetService.getExpenses();
  }
}
