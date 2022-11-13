import { Component, OnInit } from '@angular/core';
import {BudgetService} from "../../services/budget.service";
import {CategoryEnum, Expense} from "../../models/budget";

@Component({
  selector: 'app-budget-header',
  templateUrl: './budget-header.component.html',
  styleUrls: ['./budget-header.component.css']
})
export class BudgetHeaderComponent implements OnInit {
  toggleCategoryView: boolean = true;

  constructor(private budgeService: BudgetService) { }

  ngOnInit(): void {
  }

  totalExpense(): number {
    return this.budgeService.getTotalExpense();
  }

  totalBudget() {
    return this.budgeService.getTotalBudget();
  }

  setToggleCategoryView() {
    this.toggleCategoryView = !this.toggleCategoryView;
  }

  categoryWiseExpenses() {
    let x = this.budgeService.expenses.map((exp) => exp.category);
    console.log(x);
    return x;
    // const groupBy =
    //   this.budgeService.expenses.reduce((categoryMap: Map, exp) => categoryMap.set(exp.category, exp.amount), {});
  }
}
