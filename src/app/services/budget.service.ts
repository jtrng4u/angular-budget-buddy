import {Injectable} from '@angular/core';
import {Expense} from "../models/budget";

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  expenses: Expense[] = [];
  private totalBudget: number = 1000;

  constructor() {
  }

  addExpense(expense: Expense) {
    this.expenses.push(expense);
  }

  getExpenses(): Expense[] {
    return this.expenses;
  }

  getTotalExpense(): number {

    return this.expenses.reduce((total:number, expense) => {
      return total += expense.amount;
    }, 0);
  }

  setTotalBudget(totalBudget: number) {
    this.totalBudget = totalBudget;
  }

  getTotalBudget() {
    return this.totalBudget;
  }
}
