import { Component, OnInit } from '@angular/core';
import {CategoryEnum, Expense} from "../../models/budget";
import {BudgetService} from "../../services/budget.service";

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  showSavedMessage: boolean = false;

  expense: Expense = {} as Expense;
  categories = Object.values(CategoryEnum);
  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
  }

  submitForm(): void {
    let newExpense: Expense = {
      amount: Number(this.expense.amount),
      description: this.expense.description,
      category: this.expense.category
    };
    console.log(typeof(this.expense.amount));
    this.budgetService.addExpense(newExpense);
  }
}
